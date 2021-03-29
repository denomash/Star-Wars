import React, { FC } from "react";

// types
import { IPerson } from "../../types/common";

// utils
import getInitials from "../../utils/getInitials";

interface IPersonDetails {
  user: IPerson;
}

const PersonDetails: FC<IPersonDetails> = ({ user }) => {
  return (
    <div className="details">
      <div className="avatar-container">
        <div className="avatar">{getInitials(user.name)}</div>
        <h2>{user.name}</h2>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Height</th>
            <td>{user.height}</td>
          </tr>

          <tr>
            <th>Gender</th>
            <td>{user.gender}</td>
          </tr>

          <tr>
            <th>Mass</th>
            <td>{user.mass}</td>
          </tr>

          <tr>
            <th>Home World</th>
            <td>{user.homeworld}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PersonDetails;
