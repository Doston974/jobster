import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormRow from "../../components/FormRow";
import FormRowSelect from "../../components/FormRowSelect";
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from "../../features/job/jobSlice";

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }

    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, jobLocation, jobType, status },
        })
      );
      return;
    }

    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleChange({
          name: "jobLocation",
          value: user.location,
        })
      );
    }
  });

  return (
    <section className="bg-white rounded drop-shadow-xl lg:overflow-hidden">
      <form>
        <h3 className="text-3xl font-medium lg:m-8 capitalize ">
          {isEditing ? "edit job" : " add job"}
        </h3>
        <div className="form-center form-center font-medium grid grid-cols-1 lg:grid-cols-3 gap-4 m-4 p-4">
          {/* Position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />

          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />

          {/* jobLocation */}
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            value={jobLocation}
            handleChange={handleJobInput}
          />

          {/* status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />

          {/* job type */}
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="flex justify-between">
            <button
              type="button"
              className="btn btn-block clear-btn bg-gray-500 text-white capitalize rounded lg:px-12 px-10 h-[34px] mt-11 tracking-wider"
              onClick={() => dispatch(clearValues())}
            >
              Clear
            </button>

            <button
              type="submit"
              className="btn btn-block submit-btn bg-[#22b7f0] text-white capitalize rounded lg:px-10 px-8 h-[34px] mt-11 tracking-wider"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddJob;
