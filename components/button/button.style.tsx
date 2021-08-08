import styled from "styled-components";

type ButtonProps = {
  isPrimary?: boolean;
  gridArea?: string;
}

const Button = styled.button<ButtonProps>`
  color: ${props => props.isPrimary ? 'var(--furf-legendary)' : 'white'};
  font-weight: ${props => props.isPrimary && 'bold'};
  text-shadow: 0.2rem 0.2rem 0 var(${props => props.isPrimary ? '--furf-legendary-shadow' : '--furf-white-shadow'});
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 3.2rem;
  font-size: 1.6rem;
  grid-area: ${props => props.gridArea};
  max-height: 5.8rem;

  background: #2c354d;
  border: 0.32rem solid #000000;
  box-shadow: inset -0.4rem -0.4rem 0px var(--furf-background-dark),
  inset 0.4rem 0.4rem 0px var(--furf-background);

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  
  cursor: pointer;
  
  .plus {
    color: #C65DF0;
    font-weight: bold;
    margin-left: 0.5rem;
  }
  
  &:hover {
    border-color: var(--furf-orange);
    color: var(--furf-gold);
  }
`;

export default Button;
