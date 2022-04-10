import React from 'react';
import styled from "styled-components";

interface InputProps {
  width: string;
  height: string;
  fontSize: string;
  placeholder?: string;
  id?: string;
  onChange?: (e: any) => void;
}

export default function Input({width, height, fontSize, placeholder, id, onChange}: InputProps) {
  return (
    <CustomInput type="text" 
      width={width} 
      height={height} 
      fontSize={fontSize} 
      id={id} onChange={onChange} 
      placeholder={placeholder} 
    />
  )
}

const CustomInput = styled.input<{ width: string, height: string, fontSize:string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-left: 10px;
  margin-top: 20px;
`;