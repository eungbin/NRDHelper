import React, { useState } from 'react';
import '../css/Holding.css';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Pick = () => {
  const [users, setUsers] = useState({
    user1: "",
    user2: "",
  });

  const navigate = useNavigate();

  const onChangeUsers = (e) => {
    if(e.target.id === "firstUser") {
      users.user1 = e.target.value;
    } else if(e.target.id === "secondUser") {
      users.user2 = e.target.value;
    }
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
        </Grid>
      </Box>
    </div>
  );
};

export default Pick;