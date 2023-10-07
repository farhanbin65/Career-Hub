import { useEffect } from "react";
import { getStoredApplication } from "../Components/LocalStorage"
import { useLoaderData } from "react-router-dom";

const Applied = () => {
    const jobs = useLoaderData();
    useEffect(()=>{
        const storedJobIds = getStoredApplication();
        if(jobs.length < 0){
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                jobsApplied.push(job);
            }
            console.log(jobsApplied)
        }
    }, [])
    return (
        <div>
            <h4>Applied Jobs</h4>
        </div>
    );
};

export default Applied;