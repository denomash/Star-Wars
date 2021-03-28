import React, { FC } from "react";

// styles
import LoaderStyles from "../styled/LoaderStyles";

const Pagination: FC = () => {
  return (
    <LoaderStyles>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderStyles>
  );
};

export default Pagination;
