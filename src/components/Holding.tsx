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

const Holding = () => {
  const rareUnitNames: string[] = Object.keys(rareUnits);
  const normalOrMagic: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  // const 하위유닛 = rareUnitNames.map(i => {
  //   return rareUnits[i]["하위"];
  // });

  // console.log(하위유닛);

  // console.log(재료유닛얻기())

  const [rare, setRare] = useState({
    names: rareUnitNames,
  });

  const [result, setResult] = useState({
    names: rareUnitNames,
  });

  const 재료유닛얻기 = (unit: string) => {
    const 하위유닛: string[] = rareUnits[unit]["하위"];
    console.log(하위유닛);
  }

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