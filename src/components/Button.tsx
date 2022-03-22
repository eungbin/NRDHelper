import React from 'react';
import styled from "styled-components";

interface ButtonProps {
  width: string;
  height: string;
  color: string;
  text: string;
  hColor: string;
  aColor: string;
  onClick?: (e: any) => void;
  id?: string;
}

export default function Button({width, height, color, text, hColor, aColor, onClick, id}: ButtonProps) {
  return (
    <CustomButton width={width} height={height} color={color} hColor={hColor} aColor={aColor}>
      <span id={id} onClick={onClick} style={{width:"100%", textAlign:"center"}}>{text}</span>
    </CustomButton>
  )
}

const CustomButton = styled.button<{ width: string, height: string, color: string, hColor: string, aColor: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    background-color: ${(props) => props.hColor};
  };
  &:active {
    background-color: ${(props) => props.aColor};
  }
`;