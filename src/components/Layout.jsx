import styled from "styled-components";

const StLayout = styled.div`
  min-width: 800px;
  background-color: #e2e2e2;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Layout({ children }) {
  return <StLayout>{children}</StLayout>;
}

export default Layout;
