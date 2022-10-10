import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #ffffff;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden; 
  overflow-y: hidden; 
`;
export const Content = styled.div `
  /* border: solid 1px; */
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* border: solid 1px; */
  width: 30%;
  height: 45px;

  p{
      text-align: center;
      margin:0;

    :first-child{
      font-weight: bold;
      margin-bottom:1px;
    }
    }
`;

export const Blocks = styled.div `
  width:97%;
  height: 5%;
  border-radius: 8px;
  margin-top: 2%;
  margin-bottom:1%;
  /* border: solid 1px; */
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: start;
`;

export const FirtsDiv = styled.div `
  width:100vw;
  height: 33%;
  /* border: solid 1px red; */
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SecondDiv = styled.div `
  width:97vw;
  height: 40%;
  /* border: solid 1px blue; */
  margin:0;
  padding:0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  section{
    /* margin-right:2%; */
    background: #F9F9F9;
    width: 49%;
    height: 100%;
    /* border: solid 1px; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
  /* box-shadow: 0px 10px 7px -3px rgba(0,0,0,0.4); */

  :nth-child(2){
    border: none
  }

  img {
    width: 100%;
    height: 100%;
  }


  article{
    /* margin-left:1%; */
    margin-top: 3%;
    /* border: solid 1px; */
    width: 95%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

  }

  }


`;

export const Button = styled(Link)`
  background: #FEF17C;
  text-decoration:none;
  /* margin-top: 12px; */
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 90%;
  font-weight: bold;
  /* margin-left: 43%; */
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