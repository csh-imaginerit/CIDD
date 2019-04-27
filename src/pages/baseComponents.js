import styled from 'styled-components';

export const RowFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RowFlexClose = styled.div`
  display: flex;
`;

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: grey;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.a`
  padding: 15px 30px;
  border: 1px solid blue;
  border-radius: 4px;
  margin: 15px;
`;

export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin: 24px 10%;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const TableHeader = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const TableData = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const Option = styled.option`
  margin: 10px;
`;

export const Select = styled.select`
  margin-right: 10px;
`;

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

export const BigImg = styled.img`
  height: 50vh
`;

export const SmImg = styled.img`
  height: 30vh;
  width: auto;
  margin: 8px;
`;

export const WhiteDiv = styled.div`
  background-color: white;
  height: 800px;
`;

export const Logo = styled.img`
  height: auto;
  width: 100%;
  margin: 8px;
`;