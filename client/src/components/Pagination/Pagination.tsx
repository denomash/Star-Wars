import React, { FC } from "react";
import { navigate, useLocation } from "@reach/router";
import { parse } from "query-string";

// styles
import PaginationStyles from "../styled/PaginationStyles";

interface IPagination {
  next: string | null;
  previous: string | null;
  count: number;
}

const Pagination: FC<IPagination> = ({ next, previous, count }) => {
  const location = useLocation();
  const { page }: any = parse(location.search);

  const pages = Math.ceil(count / 10);

  const handleNext = () => {
    const nextPage: any = next && next.split("?");
    const { page }: any = parse(nextPage[1]);

    if (next) {
      const path = `${location.pathname}?page=${parseFloat(page)}`;
      navigate(path);
    }
  };

  const handlePrev = () => {
    const nextPage: any = previous && previous.split("?");
    const { page }: any = parse(nextPage[1]);
    if (previous) {
      const path = `${location.pathname}?page=${parseFloat(page)}`;
      navigate(path);
    }
  };

  return (
    <PaginationStyles>
      <div className="prev" aria-disabled={!previous} onClick={handlePrev}>
        Prev
      </div>
      <p>
        Page {page || 1} of {pages}
      </p>

      <div className="prev" aria-disabled={!next} onClick={handleNext}>
        Next
      </div>
    </PaginationStyles>
  );
};

export default Pagination;
