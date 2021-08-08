import styled from "styled-components";

const SidebarWrapper = styled.div`
  min-height: calc(100vh - var(--navbar-height));
  background: rgba(28, 29, 48, 0.5);
  min-width: 40rem;
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 3.2rem;
`;

export default SidebarWrapper;
