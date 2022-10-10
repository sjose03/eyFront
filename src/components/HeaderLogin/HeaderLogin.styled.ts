import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 15%;
  background: #2E2E38;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    margin:10px;
    width:6%;
    height:70%;
  }

`;

export const DivIcons = styled.div`
/* border: solid 1px; */
width: 40vw;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;

div{
  border: solid 1px rgba(255,255,255,0.5);
  height: 15%;
}
`;

export const Button = styled(Link) `
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #2E2E38;
  cursor: pointer;
  border: 0;
  color: #FFF;
  font-size: 0.6em;
  margin-left:5px;


`

export const Button2 = styled.button `
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #2E2E38;
  cursor: pointer;
  border: 0;
  color: #FFF;
  font-size: 0.6em;
  margin-left:5px;


`