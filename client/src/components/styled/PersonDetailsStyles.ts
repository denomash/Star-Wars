import styled from "styled-components";

const PersonDetailStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;

  .back-link {
    width: 600px;

    p {
      color: #3b3be6;
      cursor: pointer;
      padding: 10px;
      width: fit-content;
      transition: all 0.3s ease-in;

      &:hover {
        text-decoration: underline;
        transition: all 0.3s ease-in;
      }
    }
  }

  .details-container {
    display: flex;
    background: #fff;
    width: 600px;
    height: 500px;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 50px 90px 0;
  }

  .avatar-container {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
  }

  .avatar {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weight: 600;

    margin-bottom: 16px;
  }

  table {
    tr,
    th,
    td {
      border-bottom: 1px solid rgba(45, 39, 93, 0.15);
    }
    th {
      text-align: left;
      padding: 12px;
      background-color: #eff2f7;
    }

    td {
      padding-left: 38px;
    }
  }
`;

export default PersonDetailStyles;
