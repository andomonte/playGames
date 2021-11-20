import React from 'react';
import { Box, Grid, Typography, TextField } from '@material-ui/core';
import CardMedia from '@mui/material/CardMedia';
// import Avatar from '@mui/material/Avatar';
import useSWR, { mutate } from 'swr';
import axios from 'axios';
import { useRouter } from 'next/router';
import Fab from '@mui/material/Fab';
import Avatar from '@mui/material/Avatar';

// import TelaSemGame from './telas/telaSemGame';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  width: '95%',
};
function InicioGame() {
  const router = useRouter();
  const { data, error } = useSWR('/api/consultaGames', fetcher);
  const [mesa, setMesa] = React.useState('');
  // const [statusGame, setStatusGame] = React.useState('OFF');
  const [validarMesa, setValidarMesa] = React.useState('sim');
  let statusGame = 'OFF';

  if (data) {
    // setMesa(data.condigo);

    // dadosMesa = data.filter((val) => val.codigo === Number(mesa));
    // console.log('game', data[0].status);
    if (data[0].status === 'OFF') statusGame = 'OFF';
    if (data[0].status === 'ON-1') statusGame = 'ON-1';
  }
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;
  //  setMesa(CMesa);
  const entrarNoJogo = async () => {
    router.push({
      pathname: '/games',
      query: { mesa },
    });
  };
  console.log('game', mesa);
  mutate('/api/consultaGames');

  switch (statusGame) {
    case 'OFF':
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
              <h2>Seja bem vindo!!!</h2>
            </Box>
            <Box display="flex" flexDirection="row" mt={-2}>
              <Grid item xs={12} md={3}>
                <Box borderRadius={16} {...defaultProps}>
                  <CardMedia
                    component="img"
                    height="325"
                    image="/images/gamer/gabi01.jpeg"
                    alt="green iguana"
                    style={{ borderRadius: 16 }}
                  />
                </Box>
              </Grid>
            </Box>
            <Box mt={0}>
              <h2>Daqui a Pouco Iniciaremos</h2>
              <h2>nossas brincadeiras!!!</h2>
            </Box>
          </Box>
        </Box>
      );

    default:
      return (
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            height="100vh"
            bgcolor="#fce4ec"
          >
            <Box align="center" width="99%" bgcolor="#fce4ec">
              <Box display="flex" flexDirection="row" mt={2}>
                <Grid item xs={12} md={3}>
                  <Box borderRadius={16} {...defaultProps} bgcolor="#fce4ec">
                    <Box mt={0} display="flex" flexDirection="row">
                      <Grid item xs={12} md={9}>
                        <Box mt={3} ml={2} sx={{ fontSize: 'bold' }}>
                          <Avatar
                            sx={{ width: 106, height: 106 }}
                            alt="Remy Sharp"
                            src="https://sistemaidpb.s3.amazonaws.com/FOTO+(3).jpg"
                          />
                        </Box>
                        <Box mt={3} ml={2} sx={{ fontSize: 'bold' }}>
                          <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                          >
                            Digite o Codigo da Mesa
                          </Typography>
                        </Box>
                        <Box mt={2} textAlign="center">
                          <TextField
                            id="Mesa"
                            type="number"
                            inputProps={{
                              min: 0,
                              style: { textAlign: 'center' },
                            }} // the change is here
                            InputLabelProps={{
                              style: {
                                textTransform: 'uppercase',
                              },
                              shrink: true,
                            }}
                            value={mesa}
                            variant="outlined"
                            placeholder=""
                            size="small"
                            onBlur={
                              mesa === ''
                                ? () => setValidarMesa('nao')
                                : () => setValidarMesa('sim')
                            }
                            onChange={(e) => setMesa(e.target.value)}
                            error={validarMesa === 'nao'}
                            onFocus={(e) => setMesa(e.target.value)}
                          />
                        </Box>
                      </Grid>
                    </Box>
                    <Box mt={3}>
                      <Box sx={{ '& > :not(style)': { m: 1 } }} mt={3} mb={3}>
                        <Fab
                          onClick={entrarNoJogo}
                          style={{
                            background: '#ec407a',
                            color: 'white',
                          }}
                          variant="extended"
                        >
                          Ir para o Jogo
                        </Fab>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      );
  }
}

export default InicioGame;
