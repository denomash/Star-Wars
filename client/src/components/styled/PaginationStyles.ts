import styled from "styled-components";

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid #e1e1e1;
    &:last-child {
      border-right: 0;
    }
  }
  div[aria-disabled="true"] {
    color: grey;
    pointer-events: none;
  }

  div[aria-disabled="false"] {
    cursor: pointer;
  }
`;

export default PaginationStyles;
