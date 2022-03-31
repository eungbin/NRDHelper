import React from 'react';
import '../css/Main.css';
import Cardview from './Cardview';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Main = () => {
  return (
      <div className="mainContainer">
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>나랜디 도우미</h1>
          </Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <Link to="/holding">
              <Cardview width={"240px"} height={"150px"} paddingTop={"70px"} innerText={"홀딩"} />
            </Link>
          </Grid>
          <Grid item xs={0.5}></Grid>
          <Grid item xs={3}>
            <Cardview width={"240px"} height={"150px"} paddingTop={"70px"} innerText={"마에보"} />
          </Grid>
          <Grid item xs={0.5}></Grid>
          <Grid item xs={3}>
            <Cardview width={"240px"} height={"150px"} paddingTop={"70px"} innerText={"물에보"} />
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <Link to="/holding">
              <Cardview width={"240px"} height={"150px"} paddingTop={"70px"} innerText={"마법라인"} />
            </Link>
          </Grid>
          <Grid item xs={0.5}></Grid>
          <Grid item xs={3}>
            <Cardview width={"240px"} height={"150px"} paddingTop={"70px"} innerText={"물리라인"} />
          </Grid>
          <Grid item xs={0.5}></Grid>
          <Grid item xs={3}>
            <Cardview width={"240px"} height={"150px"} paddingTop={"70px"} innerText={"방깎"} />
          </Grid>
          <Grid item xs={1}></Grid>

        </Grid>
      </Box>
      </div>
  );
};

export default Main;