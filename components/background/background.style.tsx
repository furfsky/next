import styled from "styled-components";

const Background = styled.main<{backgroundImage: string}>`
  .content {
    display: flex;
    flex-direction: row;
    
    .content-main {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
      gap: 1.6rem;
      
      .btn-group {
        display: flex;
        gap: 1.6rem;
      }
    }
    
  }
  &::before {
    content: '';
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    background: #1c1d31;
    opacity: 0.5;
  }
  &::after {
    --blur: 1.5rem; //change blur amount here, it will auto adjust hollow effect from blur with calc
    content: '';
    background-image: url("${props => props.backgroundImage}");
    background-size: cover;
    background-position: center;
    filter: blur(var(--blur));
    position: fixed;
    top: calc((var(--blur)*10) / -2);
    left: calc((var(--blur)*10) / -2);
    right: calc((var(--blur)*10) / -2);
    bottom: calc((var(--blur)*10) / -2);
    z-index: -2;
  }
`;
// not working :(

export default Background;
