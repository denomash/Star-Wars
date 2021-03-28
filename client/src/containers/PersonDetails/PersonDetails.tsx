import React, { FC } from "react";
import { navigate } from "@reach/router";
import { useLocation } from "@reach/router";

// types
import { PageType } from "../../types/PageType";
import { IPerson } from "../../types/common";

import Loader from "../../components/Common/Loader";
import PersonDetailStyles from "../../components/styled/PersonDetailsStyles";

// utils
import getInitials from "../../utils/getInitials";

// hooks
import useGetPerson from "../../hooks/useGetPerson";

const PersonDetails: FC<PageType> = () => {
  const location = useLocation();
  const name = location.pathname.split("/").pop();

  // eslint-disable-next-line
  const { loading, error, data }: any = useGetPerson(name);

  const user: IPerson = data?.getPerson[0];

  return (
    <div className="container">
      <div className="center">
        {!loading && (
          <h1>
            Details For <span>{user.name}</span>
          </h1>
        )}
      </div>

      <PersonDetailStyles>
        <div className="back-link">
          <p onClick={() => navigate(-1)}>{`<`} back</p>
        </div>

        <div className={`details-container ${loading ? "center" : ""}`}>
          {loading ? (
            <Loader />
          ) : (
            <div className="details">
              <div className="avatar-container">
                <div className="avatar">{getInitials(user.name)}</div>
                <h2>{user.name}</h2>
              </div>
              <table>
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
              </table>
            </div>
          )}
        </div>
      </PersonDetailStyles>
    </div>
  );
};

export default PersonDetails;
