import React, { FC } from "react";
import { navigate } from "@reach/router";

// styles
import NavbarStyles from "../styled/NavbarStyles";

import logo from "../../assets/yoda.png";

const Navbar: FC = () => {
  return (
    <NavbarStyles>
      <img src={logo} alt="logo" onClick={() => navigate("/")} />
      <h1>Star wars</h1>
    </NavbarStyles>
  );
};

export default Navbar;
