import React, { useState } from 'react';
import '../css/Holding.css';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import rareUnits from '../data/Rare.json';
import CreateTable from './CreateTable';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const 노말혹은매직 = (unit: string) => {
  let index: number = -1;

  switch(unit) {
    case "나루토[노말]":
      index = 0;
      break;
    case "사쿠라[노말]":
      index = 1;
      break;
    case "사스케[노말]":
      index = 2;
      break;
    case "사이[노말]":
      index = 3;
      break;
    case "사소리[노말]":
      index = 4;
      break;
    case "카린[노말]":
      index = 5;
      break;
    case "암부[노말]":
      index = 6;
      break;
    case "카부토[노말]":
      index = 7;
      break;
    case "야마토[노말]":
      index = 8;
      break;
    case "사스케 주인1[매직]":
      index = 9;
      break;
    case "쥬고[매직]":
      index = 10;
      break;
    case "오로치마루[매직]":
      index = 11;
      break;
    case "지라이야[매직]":
      index = 12;
      break;
    case "제츠[매직":
      index = 13;
      break;
    case "츠나데[매직]":
      index = 14;
      break;
    case "테마리[매직]":
      index = 15;
      break;
    case "쵸지[매직]":
      index = 16;
      break;
  }

  return index;
}

const 유닛등급얻기 = (unit: string) => {
  const 등급: string = unit.substring(unit.indexOf("[")+1, unit.indexOf("]"));
  return 등급;
}

const 하위유닛얻기 = (unit: string) => {
  const 하위유닛: string[] = rareUnits[unit]["하위"];
  return 하위유닛;
}

const 재료유닛얻기 = (unit: string) => {
  let 재료유닛: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const 베이스유닛등급: string = 유닛등급얻기(unit);
  let 하위유닛: string[];

  if(베이스유닛등급 !== "노말" && 베이스유닛등급 !== "매직") {
    하위유닛 = 하위유닛얻기(unit);
  }

  for(let i=0; i<하위유닛.length; i++) {
    let index = 노말혹은매직(하위유닛[i]);
    if(index !== -1) {
      재료유닛[index] += 1;
    } else {
      let 하위재료유닛 = 재료유닛얻기(하위유닛[i]);
      for(let j=0; j<하위재료유닛.length; j++) {
        재료유닛[j] += 하위재료유닛[j];
      }
    }
  }

  // console.log("재료유닛");
  // console.log(재료유닛);
  
  return 재료유닛;
}

const Holding = () => {
  const rareUnitNames: string[] = Object.keys(rareUnits);
  const normalOrMagic: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  console.log(재료유닛얻기('가마켄[레어]'));

  const [rare, setRare] = useState({
    names: rareUnitNames,
  });

  const [result, setResult] = useState({
    names: rareUnitNames,
  });

  const navigate = useNavigate();

  const onChangeSearch = (e) => {
    const keyword = e.target.value;
    changeResult(keyword);
  }

  const changeResult = (keyword) => {
    const returnUnits = rare.names.filter(item => {
      if(item.includes(keyword)) return item;
    });
    setResult({
      names: returnUnits,
    });
  }

  return (
    <div className="pickContainer">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}>
            <Input width={"300px"} height={"30px"} fontSize={"20px"} id={"searchUnit"} onChange={onChangeSearch} placeholder={"이름으로 검색"} />
          </Grid>
          <Grid item xs={4}>
          </Grid>

          {result.names.map((item, index) => {return (
            <Grid key={index} item xs={6}>
              {item}<br />
              <CreateTable units={normalOrMagic}/>
            </Grid>
          )})}
        </Grid>
      </Box>
    </div>
  );
};

export default Holding;