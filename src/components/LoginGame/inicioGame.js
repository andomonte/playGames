import React from 'react';
import { Box, Grid } from '@material-ui/core';
// import CardMedia from '@mui/material/CardMedia';
// import TelaSemGame from './telas/telaSemGame';
import { useRouter } from 'next/router';

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  width: '95%',
};
function InicioGame({ numeroMesa }) {
  // const [game, setGame] = React.useState('');

  const nMesa = numeroMesa[0].codigo;
  console.log(nMesa);
  const router = useRouter();
  return (
    <Box
      bgcolor="#fce4ec"
      display="flex"
      flexDirection="row"
      alignItems="center"
      height="100vh"
    >
      <Box align="center" width="99%">
        <Box display="flex" flexDirection="row" mt={2}>
          <Grid item xs={12} md={3}>
            <Box borderRadius={16} {...defaultProps}>
              Carregando o Jogo...
              {router.push({
                pathname: '/games',
                query: { nMesa },
              })}
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default InicioGame;
