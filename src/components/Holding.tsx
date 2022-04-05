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
  const rareUnitNames = Object.keys(rareUnits);
  
  const [rare, setRare] = useState({
    units: rareUnitNames,
  });

  const [result, setResult] = useState({
    units: rareUnitNames,
  });

  const navigate = useNavigate();

  const onChangeSearch = (e) => {
    const keyword = e.target.value;
    changeResult(keyword);
  }

  const changeResult = (keyword) => {
    const returnUnits = rare.units.filter(item => {
      if(item.includes(keyword)) return item;
    });
    setResult({
      units: returnUnits,
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

          {result.units.map((item, index) => {return (
            <Grid key={index} item xs={6}>
              {item}<br />
              <CreateTable unit={"나루토"}/>
            </Grid>
          )})}
        </Grid>
      </Box>
    </div>
  );
};

export default Holding;