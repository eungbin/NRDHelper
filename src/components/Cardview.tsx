import React from 'react';
import styled from 'styled-components';

interface ICardProps {
  width: string;
  height: string;
  paddingTop: string;
  innerText: string;
}

export default function Cardview({width, height, paddingTop, innerText}: ICardProps) {
  return (
    <Card width={width} height={height} paddingTop={paddingTop}>
      <h2>{innerText}</h2>
    </Card>
  )
}

const Card = styled.div<{ width: string, height: string, paddingTop: string}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-top: ${(props) => props.paddingTop};
  background-color: white;
  border-radius: 15px;
  box-shadow: 3px 3px 5px 5px gray;
`;