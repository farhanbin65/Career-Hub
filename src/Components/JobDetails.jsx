/* eslint-disable no-undef */
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "./LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
   const {job_description, job_responsibility, educational_requirements,salary, job_title,  experiences, contact_information} = job;
   const {phone, email, address} = contact_information

   const handleApplyJob = () =>{
    saveJobApplication(idInt);
    toast('You have applied successfully')
   }

    return (
        <div>
            <h2 className="text-center font-bold text-5xl my-10">Job Details</h2>
            <div className="grid md:grid-cols-4 my-10">
                <div className="border md:col-span-3">
                    <h2 className="text-base font-extrabold ml-4 mt-4">Job Description </h2>
                    <p className="text-[#757575] font-medium text-base my-2 ml-4">{job_description}</p>
                    <h2 className="text-base font-extrabold ml-4 mt-4">Job Responsibility</h2>
                    <p className="text-[#757575] font-medium text-base my-2 ml-4">{job_responsibility}</p>
                    <h2 className="text-base font-extrabold ml-4 mt-4">Educational Requirements </h2>
                    <p className="text-[#757575] font-medium text-base my-2 ml-4">{educational_requirements}</p>
                    <h2 className="text-base font-extrabold ml-4 mt-4">Experience</h2>
                    <p className="text-[#757575] font-medium text-base my-2 ml-4">{experiences}</p>
                </div>
                    <div className="border">
                        <h2 className="text-xl font-extrabold grow">Job Details</h2>
                        <p>Salary: {salary}</p>
                        <p>Job Title {job_title} </p>
                        <h2 className="text-xl font-extrabold grow">Side Things</h2>
                        <p>Phone: {phone}</p>
                        <p>{email}</p>
                        <p>{address}</p>
                        <button onClick={handleApplyJob} className="btn btn-primary w-full my-2">Apply Now</button>
                    </div>

                

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;