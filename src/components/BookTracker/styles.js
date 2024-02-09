import styled from "styled-components";

export const TrackerContainer = styled.div``;

export const Tabs = styled.div`
  display: flex;

  p {
    cursor: pointer;
    margin-right: 20px;
    margin-bottom: 0;
    margin-top: 0;
    color: rgb(64, 62, 62);
    &:nth-child(1):after {
      content: "";
      display: block;
      width: 100%;
      height: 4px;
      background-color: #a076f2;
      margin: 10px auto 0;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
  @media (max-width: 850px) {
    p {
      font-size: 14px;
    }
  }
`;

export const Divider = styled.div`
  background-color: #e1dcdc;
  height: 1px;
  width: 100%;
`;
