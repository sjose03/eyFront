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
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const WelcomeBanner = styled.div `
  /* border: solid 1px; */
  width: 20vw;
  height: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top:3%;
  justify-content: space-between;

p {
  text-justify: auto;
  text-align: center;
  font-size: 0.8em;
  width: 80%;
  height: 40%;
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
    width: 60vw;
    height: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top:3%;
    margin-bottom:3%;
    box-shadow: 0px 13px 6px -10px rgba(0,0,0,0.5);

    p {
    /* border: solid 1px; */
    text-justify: auto;
    text-align: center;
    font-size: 0.6em;
    width: 50%;
    height: 13%;

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
    justify-content: space-around;
    margin-top:1%;
`;
export const Button = styled.button`
  background: #FEF17C;
  margin-top: 12px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  height: 20%;
  margin-left: 2px;
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