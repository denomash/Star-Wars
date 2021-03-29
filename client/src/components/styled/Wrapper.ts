import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  .container {
    padding-top: 160px;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 45vh;
    font-size: 20px;
  }

  .people-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 25px;
    cursor: pointer;
  }

  @media screen and (max-width: 916px) {
    width: 100%;
  }
`;

export default Wrapper;
