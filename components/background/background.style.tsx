import styled from "styled-components";

export const Background = styled.main`
  &::after {
    --blur: 15px; //change blur amount here, it will auto adjust hollow effect from blur with calc
    content: '';
    background-image: url("https://hypixel.net/attachments/2019-07-26_20-10-04-png.1252524/");
    background-size: cover;
    background-position: center;
    filter: blur(var(--blur));
    position: fixed;
    top: calc((var(--blur)*10) / -2);
    left: calc((var(--blur)*10) / -2);
    right: calc((var(--blur)*10) / -2);
    bottom: calc((var(--blur)*10) / -2);
    z-index: -1;
  }
`;
// not working :(
