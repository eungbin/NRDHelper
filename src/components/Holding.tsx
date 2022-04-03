import React, { useState } from 'react';
import '../css/Holding.css';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import normalUnits from '../../data/normal.json';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Holding = () => {
  const [normal, setNormal] = useState({
    units: normalUnits.units,
  });

  const navigate = useNavigate();

  const onChangeUsers = (e) => {

  }

  return (
    <div className="pickContainer">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}>
            <Input width={"300px"} height={"30px"} fontSize={"20px"} id={"firstUser"} onChange={onChangeUsers} placeholder={"이름으로 검색"} />
          </Grid>
          <Grid item xs={4}>
          </Grid>

          {normal.units.map((item, index) => {return (
            <Grid item xs={6}>
              {item}
            </Grid>
          )})}
        </Grid>
      </Box>
    </div>
  );
};

export default Holding;