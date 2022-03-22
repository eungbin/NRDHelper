import React from 'react';
import styled from "styled-components";

interface InputProps {
  width: string;
  height: string;
  id?: string;
}

export default function Input({width, height, id}: InputProps) {
  return (
    <CustomInput width={width} height={height} id={id}>
      {/* <span id={id} style={{width:"100%", textAlign:"center"}}></span> */}
    </CustomInput>
  )
}

const CustomInput = styled.input<{ width: string, height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 24px;
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;