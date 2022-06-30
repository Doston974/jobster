import moment from "moment";
import React from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteJob, setEditJob } from "../features/job/jobSlice";
import JobInfo from "./JobInfo";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createAt,
  status,
}) => {
  const dispatch = useDispatch();
  const date = moment(createAt).format("MMM Do, YYYY");

  return (
    <div className="bg-white shadow-lg hover:drop-shadow-xl rounded capitalize">
      <article className="p-5">
      <header className="flex m-2 gap-4">
        <div className="bg-[#18aade] text-xl font-bold capitalize text-white text-center px-5 py-4 rounded">
          {company.charAt(0)}
        </div>
        <div>
          <h5 className="text-xl font-medium">{position}</h5>
          <p className="text-gray-500 font-medium">{company}</p>
        </div>
      </header>
      <hr className=" text-gray-800 mb-3" />
      <div className="">
        <div className="grid grid-cols-2">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className='text-xl text-[#18aade] capitalize ml-2'>{status}</div>
        </div>

        <footer>
          <div className="">
            <Link
              to="/add-job"
              className=" bg-green-100 text-green-800 px-2 rounded py-2 mr-2"
              onClick={() =>
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                )
              }
            >
              Edit
            </Link>
            <button
              type="button"
              className="bg-red-200 text-red-800 px-2 rounded py-1"
              onClick={() => dispatch(deleteJob(_id))}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
      </article>
    </div>
  );
};

export default Job;
