import React, { useState, useEffect } from "react";
import { ReactComponent as LeftArrow } from "../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../assets/right-arrow.svg";
function Pagination({ numberOfPages, currentPage, setCurrentPage }) {
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(true);

  const pageNum = [...Array(numberOfPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (currentPage > 1) {
      setDisabledPrev(false);
    } else {
      setDisabledPrev(true);
    }

    if (currentPage === numberOfPages) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
  }, [currentPage, numberOfPages]);
  return (
    <div>
      <section className="pagination">
        <div onClick={prevPage} className={disabledPrev ? "disabled" : "prev"}>
          <LeftArrow />
          <p> Previous</p>
        </div>
        <div className="pagination-num flex">
          {pageNum.map((num) => (
            <div key={num}>
              <p
                onClick={() => setCurrentPage(num)}
                className="pagination-child"
              >
                {num}
              </p>
            </div>
          ))}
        </div>
        <div onClick={nextPage} className={disabledNext ? "disabled" : "next"}>
          <p>Next </p>
          <RightArrow />
        </div>
      </section>
    </div>
  );
}

export default Pagination;
