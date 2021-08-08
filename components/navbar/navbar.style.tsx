import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    //   position: fixed;
    height: 3rem;
    width: 100%;
    background: var(--furf-background-dark);
    
    li {
      font-weight: 700;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem;

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
