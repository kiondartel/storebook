import styled from "styled-components";

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  margin-top: 50px;
  padding: 20px;
  @media (max-width: 1650) {
    height: 600px;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;

export const IconWithText = styled.div`
  display: flex;
  align-items: center;
  color: #555050;
  gap: 8px;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  span {
    font-size: 16px;
  }
`;
