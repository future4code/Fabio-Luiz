import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  display: grid;
  grid-template-columns: 25% 65% 10%;
  align-items: center;
  justify-content: space-between;

  /* div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  } */

  progress {
    height: 2rem;
    margin: 0 10px;
  }

  span, p {
    font-weight: bold;
  }
`;

export const ProgressBar = (props) => {
  const { value, label, max } = props;
  return (
    <Bar>
      <p>{label}</p>
      <progress value={value} data-label={value} max="200" />
      <span>{value}</span>
    </Bar>
  );
};
