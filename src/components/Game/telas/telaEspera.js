import React from 'react';
import { Box, Grid } from '@material-ui/core';
import CardMedia from '@mui/material/CardMedia';
// import Avatar from '@mui/material/Avatar';

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  width: '95%',
};
function EsperaGame({ RespostaMesa }) {
  return (
    <Box
      bgcolor="#fce4ec"
      display="flex"
      flexDirection="row"
      alignItems="center"
      height="100vh"
    >
      <Box align="center" width="99%">
        <Box mt={-5}>
          <h2>A Resposta da Mesa foi:</h2>
        </Box>
        <Box display="flex" flexDirection="row" mt={-2}>
          <Grid item xs={12} md={3}>
            <Box borderRadius={16} {...defaultProps}>
              <CardMedia
                component="img"
                height="325"
                image="/images/gamer/gabi02.jpeg"
                alt="green iguana"
                style={{ borderRadius: 16 }}
              />
            </Box>
          </Grid>
        </Box>
        <Box mt={0}>
          <h2>Na letra {RespostaMesa}</h2>
          <h2>aguarde a proxima etapa!!!</h2>
        </Box>
      </Box>
    </Box>
  );
}

export default EsperaGame;
