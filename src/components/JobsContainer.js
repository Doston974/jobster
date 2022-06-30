import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading />;
  }
  if (jobs.length === 0) {
    return (
      <div>
        <h2>No jobs to display...</h2>
      </div>
    );
  }

  return (
    <div >
      <h5 className="font-bold text-2xl mb-4">
        {totalJobs} Job{jobs.length > 1 && "s"} Found
      </h5>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </div>
  );
};

export default JobsContainer;
