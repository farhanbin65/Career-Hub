/* eslint-disable react/prop-types */
import { CiLocationOn } from 'react-icons/ci';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Job = ({job}) => {
  const {logo, job_title, company_name, remote_or_onsite, job_type, salary, id} = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-[150px]" src={logo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
            <div className="my-3">
                <button className="px-5 py-2 font-extrabold text-[#7E90FE] border rounded border-[#7E90FE] mr-4" >{remote_or_onsite}</button>
                <button className="px-5 py-2 font-extrabold text-[#7E90FE] border rounded border-[#7E90FE] mr-4">{job_type}</button>
            </div>
            <div className='flex gap-3 m-1'>
                <h2 className='flex'><CiLocationOn className='text-xl mr-1'></CiLocationOn>Dhaka Bangladesh</h2>
                <h2 className='flex'><BsCurrencyDollar className='text-xl mr-1'></BsCurrencyDollar>{salary}</h2>
            </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}><button className="btn btn-primary font-extrabold">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
