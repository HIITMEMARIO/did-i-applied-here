import React from "react";
import styled from "styled-components";

const Test = () => {
  return (
    <StNoCardBox>
      <h2>지원 목록이 없어요ㅠㅠ</h2>
    </StNoCardBox>
  );
};

export default Test;

const StNoCardBox = styled.div`
  background-color: #4f7670;
  border-radius: 20px;
  display: flex;
  width: 300px;
  @media screen and (max-width: 768px) {
    place-items: center;
  }
`;
