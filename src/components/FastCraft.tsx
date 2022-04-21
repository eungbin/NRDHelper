import React from 'react';
import '../css/FastCraft.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const FastCraft = () => {
  return (
      <div className="mainContainer">
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>노말/매직으로 보는 가장 빠른 상위유닛</h1>
          </Grid>

        </Grid>
      </Box>
      </div>
  );
};

export default FastCraft;