import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <div className="lg:flex items-center  justify-end mt-8 pb-6 text-2xl gap-3 ">
      <button className="flex items-center bg-white rounded text-[#16a6d9] gap-2 shadow-lg p-2 hover:bg-[#16a6d9] hover:text-white" type="button" onClick={prevPage}>
        <HiChevronDoubleLeft />
        Prev
      </button>
      <article className="bg-[#b7e9f8] text-[#2f8baf]">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              key={pageNumber}
              className={pageNumber === page ? "pageBtn active px-4 bg-[#31aedc] p-2 rounded text-white" : "pageBtn px-4 p-2 "}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </article>
      <button className="flex items-center bg-white rounded text-[#16a6d9] gap-2 shadow-lg p-2 hover:bg-[#16a6d9] hover:text-white" type="button" onClick={nextPage}>
        Next
        <HiChevronDoubleRight />
      </button>
    </div>
  );
};

export default PageBtnContainer;
