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
`;
export const Content = styled.div `
  /* border: solid 1px; */
  width: 100vw;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeBanner = styled.div `
  /* border: solid 1px; */
  width: 17vw;
  height: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top:1%;
  justify-content: space-between;

p {
  /* border: solid 1px; */
  text-justify: auto;
  text-align: center;
  font-size: 0.8em;
  width: 80%;
  height: 20%;
}

img {
  width: 100%;
  margin:0;
  height: 90%;
}
`;

export const UploadSection = styled.section `
    /* border: solid 1px; */
    background: rgba(249,249,249,1);
    width: 40vw;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top:1%;
    /* margin-bottom:3%; */
    box-shadow: 0px 13px 6px -10px rgba(0,0,0,0.5);

    p {
    /* border: solid 1px; */
    text-justify: auto;
    text-align: center;
    font-size: 0.6em;
    width: 50%;
    height: 20%;

    :nth-child(2){
    width: 70%;
    font-size: 0.8em;
    }
}
`;
export const BoxUpload = styled.section `
    /* border: solid 1px; */
    background: rgba(249,249,249,1);
    width: 70%;
    height: 73%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-top:1%;

    div{
    border: dashed 1px;
    border-radius: 90px;
    width: 40%;
    height: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;


    p {
    /* border: solid 1px; */
    text-justify: auto;
    text-align: center;
    font-size: 0.4em;
    width: 50%;
    height: 13%;
    font-weight: bold;
    }
    
    }
`;
export const ButtonUpload = styled.button`
  background: none;
  margin-top: 12px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 30%;
  margin-top: 8%;
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

export const Button = styled(Link)`
  text-decoration:none;
  background: #FEF17C;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 10%;
  margin-left: 78%;
  margin-top: 10%;
  margin-bottom:10px;
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
  :nth-child(1){
  width: 15%;
  height: 77%;
  /* margin-left: 78%; */
  }
`;
export const Upload = styled.section `
    /* border: solid 1px; */
    background: rgba(249,249,249,1);
    width: 30%;
    height: 50%;
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