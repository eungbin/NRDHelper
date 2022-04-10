import React from 'react';
import styled from "styled-components";

interface IcreateTable {
  units: number[];
}

export default function CreateTable({units}: IcreateTable) {
  return (
    <CustomTable>
      <tbody>
        <tr>
          <td style={{width: "40px", height: "20px"}}>나루토</td>
          <td style={{width: "20px"}}>{units[0]}</td>
          <td style={{width: "40px"}}>사쿠라</td>
          <td style={{width: "20px"}}>{units[1]}</td>
          <td style={{width: "40px"}}>사스케</td>
          <td style={{width: "20px"}}>{units[2]}</td>
          <td style={{width: "40px"}}>사이</td>
          <td style={{width: "20px"}}>{units[3]}</td>
          <td style={{width: "40px"}}>사소리</td>
          <td style={{width: "20px"}}>{units[4]}</td>
        </tr>

        <tr>
          <td style={{height: "20px"}}>카린</td>
          <td>{units[5]}</td>
          <td>암부</td>
          <td>{units[6]}</td>
          <td>카부토</td>
          <td>{units[7]}</td>
          <td>야마토</td>
          <td>{units[8]}</td>
          <td>-</td>
          <td>-</td>
        </tr>

        <tr>
          <td style={{height: "20px"}}>사주</td>
          <td>{units[9]}</td>
          <td>쥬고</td>
          <td>{units[10]}</td>
          <td>오로치</td>
          <td>{units[11]}</td>
          <td>지라</td>
          <td>{units[12]}</td>
          <td>제츠</td>
          <td>{units[13]}</td>
        </tr>

        <tr>
          <td style={{height: "20px"}}>츠나데</td>
          <td>{units[14]}</td>
          <td>테마리</td>
          <td>{units[15]}</td>
          <td>쵸지</td>
          <td>{units[16]}</td>
          <td>토비</td>
          <td>{units[17]}</td>
          <td>목재</td>
          <td>{units[18]}</td>
        </tr>
      </tbody>
    </CustomTable>
  )
}

const CustomTable = styled.table<{}>`
  font-size: 12px;
  background-color: white;
  margin: 0 auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 10px 10px;
  margin-bottom: 20px;
  margin-top: 5px;
  padding: 5px;
  box-shadow: 2px 2px 4px 4px gray;
`;