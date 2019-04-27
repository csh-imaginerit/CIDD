import styled from 'styled-components';

export const Header = styled.h1`

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Instructions = styled.h3`

`;

export const OptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 25vh;
  height: 25vh;
  margin: 20px 6vh;
  border-radius: 10px;

  background-color: ${props => props.hovered ? "#b0197E" : "white"};
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  `;

export const OptionLabel = styled.p`
  text-align: center;
  font-size: 22px;
  color: ${props => props.hovered ? "#b0197E" : "white"};
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;