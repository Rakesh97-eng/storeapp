import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


export const  Media =(props)=> {
  const { isLoading = false } = props;
  let data = [1,2,3,4];
  return (
    <Grid container wrap="wrap" >
      {(isLoading ? Array.from(new Array(4)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 210, margin: 5, my: 5 }}>
          {item ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <>
             <Skeleton variant="rectangular" width={210} height={180} />
             <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
            </>
           
            
          )}
        </Box>
      ))}
    </Grid>
  );
}
Media.propTypes = {
  isLoading: PropTypes.bool,
};