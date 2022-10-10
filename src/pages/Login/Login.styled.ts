import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  border: solid 1px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`;
export const Line = styled.div `
  border: solid 1px rgba(103,101,128,0.25);
  height: 70vh;
  width: 1px;
  `;
export const Input = styled.input `
  border: solid 1px ;
  border-color: #FEF17C;
  color: #676580;
  width: 80%;
  height: 10%;
  margin-top:10px;
  border-radius: 3px;
  /* background: #222222; */

  ::placeholder {
    color: #676580;
  }
`;

export const Banner = styled.img `
    margin-top: 10px;
    width: 70%;
    height:70%;
    margin-left: 7%;
`;

export const Blocks = styled.div `
  height: 70vh;
  width: 45vw;

  img {
    margin-top: 10px;

    :nth-child(1){
    margin-top: 10%;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 50%;
    margin-top: 20px;

    small {
      font-family: 'Inter', sans-serif;
      :nth-child(1) {
        margin-right: 60%;
        color: rgb(255,255,255,0.5);
        margin-bottom: 0;
  };
      :nth-child(6) {
            margin-left: 50%;
            margin-top: 1%;
            color: rgb(255,255,255,0.5);
            margin-bottom: 0;
      }
    }

  }
  :nth-child(1) {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  :nth-child(3) {
    margin-right: 10px;
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
  width: 80%;
  height: 10%;
  margin-left: 2px;
  color: #676580;
  border: 0;
  transition: filter 0.2s;
  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ButtonFalse = styled(Link)`
  text-decoration:none;
  margin-top: 12px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 10%;
  margin-left: 2px;
  color: #676580;
  border: solid 1px #FEF17C;
  transition: filter 0.2s;
  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;