import styled from "styled-components";

const DownloadButtons = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-areas: 'download-primary download-primary download-primary download-primary'
    'download-secondary-plus download-secondary-plus download-secondary download-secondary'
    'discord twitter youtube hypixel';
`;

export default DownloadButtons;
