import React, { useState } from 'react';
import '../css/Units.css';
import Input from './Input';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import CreateTable from './CreateTable';
import { getUnitNames } from '../libs/totalData';

import { 재료유닛얻기 } from '../libs/GetCraftData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Holding = () => {
  const location = useLocation();
  const keyword = location.state;
  let tableSize: number = 0;

  let browserSize = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
  };

  if(browserSize.width >= 1600) {
    tableSize = 3;
  } else if(browserSize.width >= 1200) {
    tableSize = 4;
  } else {
    tableSize = 6;
  }

  console.log(browserSize);

  const unitNames: string[] = getUnitNames(keyword);

  const [totalUnits, setTotalUnits] = useState({
    names: unitNames,
  });

  const [result, setResult] = useState({
    names: unitNames,
  });

  const onChangeSearch = (e) => {
    const keyword = e.target.value;
    changeResult(keyword);
  }

  const changeResult = (keyword) => {
    const returnUnits = totalUnits.names.filter(item => {
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
            <Grid key={index} item xs={tableSize}>
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