import React, { FC } from "react";

// styled components
import PersonListStyled from "../styled/PersonList";

// types
import { IPerson } from "../../types/common";

// utils
import getInitials from "../../utils/getInitials";

interface IPersonList {
  person: IPerson;
}

const PersonList: FC<IPersonList> = ({ person: { name, homeworld } }) => {
  return (
    <PersonListStyled>
      <div className="avatar">{getInitials(name)}</div>
      <div className="details">
        <div className="name">
          <strong>{name}</strong>
        </div>
        <p className="info">{homeworld}</p>
      </div>
    </PersonListStyled>
  );
};

export default PersonList;
