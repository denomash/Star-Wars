import styled from "styled-components";

const NavbarStyles = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 118px;
  width: 100%;
  background: #313131;
  z-index: 1000;

  h1 {
    color: #fff;
    width: fit-content;
    text-transform: uppercase;
    font-size: 42;
  }

  img {
    position: absolute;
    left: 0;
    height: 120px;
    margin-right: auto;
    cursor: pointer;
  }

  @media screen and (max-width: 520px) {
    justify-content: flex-end;

    h1 {
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 365px) {
    h1 {
      margin-right: 10px;
    }
  }
`;

export default NavbarStyles;
