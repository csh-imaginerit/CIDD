import styled from 'styled-components';

export const Header = styled.h1`

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Instructions = styled.h3`

`;

export const OptionBox = styled.div`
  padding: 20px;
  border: 1px solid black;
  height: 200px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 20px;
  border-radius: 10px;
  a {
    color: grey;
    font-size: 22px;
    text-decoration: none;
  }

  background-color: ${props => props.hovered ? "red" : "white"};

  &:before {
    content: "${props => props.content}";
    color: black;
    left: 10px;
    top: 10px;
    position: relative;
  }

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  flex-wrap: wrap;
`;