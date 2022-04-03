import React from 'react';
import styled from "styled-components";

interface IcreateTable {
  unit: string;
}

export default function CreateTable({unit}: IcreateTable) {
  return (
    <CustomTable>
      <tr>
        <td style={{width: "50px", height: "20px"}}>{unit}</td>
        <td style={{width: "50px"}}></td>
        <td style={{width: "50px"}}></td>
        <td style={{width: "50px"}}></td>
        <td style={{width: "50px"}}></td>
        <td style={{width: "50px"}}></td>
      </tr>

      <tr>
        <td style={{height: "20px"}}></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td style={{height: "20px"}}></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td style={{height: "20px"}}></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </CustomTable>
  )
}

const CustomTable = styled.table<{}>`
  font-size: 12px;
  background-color: aqua;
  margin: 0 auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;