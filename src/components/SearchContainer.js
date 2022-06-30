import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(handleChange({name:e.target.name, value:e.target.value}))
  };
  const handleSubmit = (e) => {
    e.preventDefault(clearFilters());
  };
  return (
    <div className=" bg-white rounded shadow-lg p-8 mb-14">
      <form>
        <h4 className="text-3xl font-medium lg:my-4 capitalize">Search Form</h4>
        <div className="form-center form-center font-medium grid grid-cols-1 lg:grid-cols-3 gap-4">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />

          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />

          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />

          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button className="bg-red-200 text-red-800 capitalize rounded h-[34px] mt-11 tracking-wider" disabled={isLoading} onClick={handleSubmit}>
            Clear filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchContainer;
