import React from 'react';
import styled from 'styled-components';

interface ICardProps {
  width: string;
  height: string;
  innerText: string;
}

export default function Cardview({width, height, innerText}: ICardProps) {
  return (
    <Card width={width} height={height}>
      {innerText}
    </Card>
  )
}

const Card = styled.div<{ width: string, height: string}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: aqua;
`;