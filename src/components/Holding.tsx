import React, { useState } from 'react';
import '../css/Holding.css';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import CreateTable from './CreateTable';
import { totalData } from '../libs/totalData';

import { 재료유닛얻기, 히든유닛이름, 전설유닛이름, 인주력유닛이름, 미수유닛이름, 엘리트유닛이름,
리미트유닛이름, 에픽유닛이름, 인피니티유닛이름 } from '../libs/GetCraftData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Holding = () => {
  const rareUnitNames: string[] = totalData;

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
              <CreateTable units={재료유닛얻기(item)}/>
            </Grid>
          )})}
        </Grid>
      </Box>
    </div>
  );
};

export default Holding;