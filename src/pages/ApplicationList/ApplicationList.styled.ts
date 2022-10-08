import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #ffffff;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const Content = styled.div `
  /* border: solid 1px; */
  width: 98vw;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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
  width:55%;
  height: 95%;
  /* border: solid 1px; */
  border-radius: 4px;
  margin-right:2%;
  display: flex;
  align-items: center;
  flex-direction: column;

  section {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: solid 1px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    p{
      text-align: center;
    }

    }
`;

export const SecondDiv = styled.div `
  width:40%;
  height: 95%;
  border: solid 1px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  p{
    text-align: center;
  }

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