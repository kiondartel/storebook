import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f1f1;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  width: 80%;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export const WhiteBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 90%;
  height: 100%;
  margin-left: auto;
  border-radius: 20px 0 0 0;
  @media (max-width: 850px) {
    width: 100%;
  }
`;
