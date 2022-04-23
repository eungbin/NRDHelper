import React, { useState } from 'react';
import styled from "styled-components";
import { getHighTierPotential } from '../libs/highTierPotential';

export default function InputTable({}) {
  const [units, setUnits] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const handleChange = (e) => {
    let changeList = units;
    let index = parseInt((e.target.id).substring(4, 5))-1;
    changeList[index] = parseInt(e.target.value);
    setUnits([...changeList]);
  }

  return (
    <CustomTable>
      <tbody>
        <tr>
          <td style={{width: "40px", height: "40px"}}>나루토</td>
          <td style={{width: "20px"}}><CustomInput type="number" min="0" max="999" id="unit1" onChange={handleChange} /></td>
          <td style={{width: "40px"}}>사쿠라</td>
          <td style={{width: "20px"}}><CustomInput type="number" min="0" max="999" id="unit2" onChange={handleChange} /></td>
          <td style={{width: "40px"}}>사스케</td>
          <td style={{width: "20px"}}><CustomInput type="number" min="0" max="999" id="unit3" onChange={handleChange} /></td>
          <td style={{width: "40px"}}>사이</td>
          <td style={{width: "20px"}}><CustomInput type="number" min="0" max="999" id="unit4" onChange={handleChange} /></td>
          <td style={{width: "40px"}}>사소리</td>
          <td style={{width: "20px"}}><CustomInput type="number" min="0" max="999" id="unit5" onChange={handleChange} /></td>
          <td style={{width: "40px", height: "40px"}}>카린</td>
          <td style={{width: "20px"}}><CustomInput type="number" min="0" max="999" id="unit6" onChange={handleChange} /></td>
          <td style={{width: "40px"}}>암부</td>
          <td style={{width: "20px"}}><CustomInput type="number" min="0" max="999" id="unit7" onChange={handleChange} /></td>
          <td style={{width: "40px"}}>카부토</td>
          <td style={{width: "20px"}}><CustomInput type="number" min="0" max="999" id="unit8" onChange={handleChange} /></td>
          <td style={{width: "40px"}}>야마토</td>
          <td style={{width: "20px"}}><CustomInput type="number" min="0" max="999" id="unit9" onChange={handleChange} /></td>
          <td style={{width: "40px"}}>-</td>
          <td style={{width: "20px"}}>-</td>
        </tr>

        <tr>
          <td style={{height: "40px"}}>사주</td>
          <td><CustomInput type="number" min="0" max="999" id="unit10" onChange={handleChange} /></td>
          <td>쥬고</td>
          <td><CustomInput type="number" min="0" max="999" id="unit11" onChange={handleChange} /></td>
          <td>오로치</td>
          <td><CustomInput type="number" min="0" max="999" id="unit12" onChange={handleChange} /></td>
          <td>지라</td>
          <td><CustomInput type="number" min="0" max="999" id="unit13" onChange={handleChange} /></td>
          <td>제츠</td>
          <td><CustomInput type="number" min="0" max="999" id="unit14" onChange={handleChange} /></td>
          <td>츠나데</td>
          <td><CustomInput type="number" min="0" max="999" id="unit15" onChange={handleChange} /></td>
          <td>테마리</td>
          <td><CustomInput type="number" min="0" max="999" id="unit16" onChange={handleChange} /></td>
          <td>쵸지</td>
          <td><CustomInput type="number" min="0" max="999" id="unit17" onChange={handleChange} /></td>
          <td>토비</td>
          <td><CustomInput type="number" min="0" max="999" id="unit18" onChange={handleChange} /></td>
          <td>목재</td>
          <td><CustomInput type="number" min="0" max="999" id="unit19" onChange={handleChange} /></td>
        </tr>

      </tbody>
    </CustomTable>
  )
}

const CustomTable = styled.table<{}>`
  font-size: 12px;
  background-color: white;
  margin: 0 auto;
  border-radius: 10px 10px;
  margin-bottom: 20px;
  margin-top: 5px;
  padding: 5px;
  box-shadow: 2px 2px 4px 4px gray;
`;

const CustomInput = styled.input<{}>`
width: 40px;
height: 15px;
border-radius: 5px 5px;
border: 2px solid #757575;
margin-right: 10px;
`