import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #ffffff;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
export const Content = styled.div `
  /* border: solid 1px; */
  width: 98vw;
  height: 85%;
  display: flex;
  margin-top:2%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const PictureProfile = styled.div `

  border: solid 1px;
  border-radius:50%;
  width: 20%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p{
    font-size: 0.7em;
  }
`;

export const Blocks = styled.div `

  background: #F9F9F9;
  border-radius: 8px;
  height:30vh;
  margin-top:10px;
  box-shadow: 0px 10px 7px -3px rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  :nth-child(1){
  /* background: black; */
  height:30vh;
  margin-top:0;
  justify-content: start;


  section{
    border: solid 1px;
    background: #676580;
    height: 50%;
    width: 100%;
    border-radius: 8px;
  }
  }
`;

export const FirtsDiv = styled.div `
  width:70%;
  height: 100%;
  /* border: solid 1px red; */
  margin-right: 2%;
`;

export const SecondDiv = styled.div `
  width: 25%;
  height: 100%;
  /* border: solid 1px blue; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  section{
    margin-right:2%;
    background: #F9F9F9;
    width: 80%;
    height: 45%;
    min-height: 450px;
    margin-left: 20px;
    margin-bottom: 2%;
    /* border: solid 1px; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  box-shadow: 0px 10px 7px -3px rgba(0,0,0,0.4);

  p{
    font-size: 0.6pc;
  }

  :nth-child(3){
    background: none;
    min-height: 50px;
    box-shadow:none;
  }

  }


`;

export const Button = styled.button`
  background: #FEF17C;
  margin-top: 12px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5%;
  height: 5%;
  margin-left: 43%;
  color: #676580;
  border: 0;
  font-size: 0.6em;
  transition: filter 0.2s;
  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
export const Upload = styled.section `
    /* border: solid 1px; */
    background: rgba(249,249,249,1);
    width: 30%;
    height: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top:3%;
    border-radius:5%;
    box-shadow: 0px 7px 11px 0px rgba(0,0,0,0.2);
`;
export const Line = styled.div `
  border: solid 1px rgba(103,101,128,0.45);
  height: 90%;
  width: 1px;
  `;