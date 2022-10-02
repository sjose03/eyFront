import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 15%;
  background: #676580;
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
width: 20vw;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;

div{
  border: solid 1px rgba(255,255,255,0.5);
  height: 15%;
}

button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #676580;
  cursor: pointer;
  border: 0;
  color: #FFF;
  font-size: 0.5em;
  }
`;
