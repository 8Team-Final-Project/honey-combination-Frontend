import React from 'react';
import styled from "styled-components";

const RedButton = ({value, onClick}) => {
  return(
      <RButton onClick={onClick}>{value}</RButton>
  )
}

RedButton.defaultProps = {
  value: '',
  onClick: ()=>{}
};

const RButton = styled.button`
  width: 100%;
  height: 70px;
  background-color: #FF7775;
  padding: 12px 0px;
  border-radius: 10px;
  color: #f0f0f0;
  font-weight: bold;
  font-size: 18px;
  cursor:pointer
`


export default RedButton;