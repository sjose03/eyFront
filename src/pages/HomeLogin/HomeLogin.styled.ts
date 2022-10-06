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
  /* justify-content: center; */
  flex-direction: column;
`;

export const PictureProfile = styled.div `

  border: solid 1px;
  border-radius:50%;
  width: 10%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p{
    font-size: 0.7em;
    text-align: center
  }
`;

export const Blocks = styled.div `
  width:97%;
  height: 10%;
  border-radius: 8px;
  margin-top:2%;
  /* border: solid 1px; */
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: start;
`;

export const FirtsDiv = styled.div `
  width:97%;
  height: 23%;
  /* border: solid 1px red; */
  border-radius: 8px;
  background: #FEF17C;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;

  section {
    width: 40%;
    height: 80%;
    border: solid 1px;
    margin-left: 1%;
  }
`;

export const SecondDiv = styled.div `
  width:97%;
  height: 60%;
  /* border: solid 1px blue; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  section{
    /* margin-right:2%; */
    background: #F9F9F9;
    width: 49%;
    height: 100%;
    border: solid 3px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  /* box-shadow: 0px 10px 7px -3px rgba(0,0,0,0.4); */


  article{
    margin-left:1%;
    margin-top: 3%;
    /* border: solid 1px; */
    width: 95%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    p{
      text-align: center;
      font-weight: bold;
    }
  }

  }


`;

export const Button = styled.button`
  background: #FEF17C;
  /* margin-top: 12px; */
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 50%;
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