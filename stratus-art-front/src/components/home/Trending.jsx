import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TrendingProducts from './shared/trendingProducts';

export default function Trending() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container>
        <Grid item xs={12} md={6}>
            <TrendingProducts />
        </Grid>
        <Grid item xs={12} md={6}>
            <TrendingProducts />
        </Grid>
      </Grid>
    </Box>
  );
}
