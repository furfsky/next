import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    //   position: fixed;
    height: var(--navbar-height);
    background: var(--furf-background-dark);
    
    li {
      font-weight: 700;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1.6rem 3.2rem;
      font-size: 1.6rem;

      cursor: pointer;
      
      &.active {
        color: var(--furf-gold);
      }
      
      &:hover {
        color: var(--furf-gold);
      }
    }
  }
`;
