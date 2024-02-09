import styled from "styled-components";

export const BookHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 30px;
  text-align: center;

  & > p {
    font-size: 15px;

    margin-top: 5px;
    color: rgb(111, 109, 109);
  }
  h1 {
    font-size: 2rem;
  }
  @media (max-width: 1550px) {
    width: 100%;
    align-items: center;

    p {
      font-size: 14px;
      margin-top: 0px;
    }
  }

  @media (max-width: 850px) {
    display: none;
  }
`;
