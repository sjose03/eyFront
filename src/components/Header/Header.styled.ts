import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 15%;
  position: sticky;
  top: 0; 
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

  button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #2E2E38;
  cursor: pointer;
  border: 0;
  color: #FFF;
  /* margin-right: 1%; */
  /* transition: filter 0.2s; */
  /* &:not(:disabled):hover {
    filter: brightness(0.9);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  } */
  
  }

`;
