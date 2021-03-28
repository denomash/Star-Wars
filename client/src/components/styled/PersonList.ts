import styled from "styled-components";

const PersonList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 372px;
  width: 350px;
  min-width: fit-content;
  height: 280px;
  background: #fff;
  margin-bottom: 15px;
  padding: 8px 0;
  box-shadow: rgb(0 0 0 / 7%) 0px 5px 45px;
  border-radius: 6px;
  margin-right: 15px;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in;
  }

  .avatar {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weight: 600;

    margin-top: 50px;
    margin-bottom: 16px;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name {
    padding-top: 8px;
    font-size: 20px;
  }

  .info {
    color: #888787;
    font-size: 18px;
    padding-top: 8px;
  }
`;

export default PersonList;
