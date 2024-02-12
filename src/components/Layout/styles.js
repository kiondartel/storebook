import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  height: calc(100vh);
`;

export const MainContent = styled.main`
  flex-grow: 1;

  overflow-y: auto;
`;
