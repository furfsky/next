import styled from "styled-components";

const SubtitleWrapper = styled.div`
  font-family: Minecraft, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 146.5%;
  max-width: 40rem;
  margin-top: 3.2rem;

  text-align: center;
  color: #FBCC6C; // TODO changing to vars somehow messes up the style, idk why probs some ssr bs
  text-shadow: 4px 4px 0 #441A08; // TODO changing to vars somehow messes up the style, idk why probs some ssr bs
`;

export default SubtitleWrapper;
