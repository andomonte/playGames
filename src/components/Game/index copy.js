import React from 'react';
import { Box, Grid } from '@material-ui/core';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import useSWR from 'swr';
import axios from 'axios';
import TelaGame01 from './telas/telas';
import TelaGame02 from './telas/telaGame02';
import TelaGame03 from './telas/telaGame03';
import TelaGame04 from './telas/telaGame04';
// import TelaSemGame from './telas/telaSemGame';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  width: '95%',
};
async function InicioGame({ mesa }) {
  const [game, setGame] = React.useState('0');
  const [dadosMesa, setDadosMesa] = React.useState('');
  console.log('valor da mesa:', mesa);

  // const url = `${window.location.origin}/api/consultaGame/${mesa}`;

  /*  const { data, error } = useSWR('/api/consultaGames', fetcher);

  if (data) console.log('data', data);
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>; 

  if (data) {
    const dadosUser = data.filter((val) => String(val.codigo) === String(mesa));
    //     console.log('ola testeando', dadosUser[0]);
    setDadosMesa(dadosUser);
    console.log('data', dadosUser[0]);
    if (dadosUser.length) {
      try {
        const body = {
          status: 'ON',
        };

        let urlCreate = '';
        if (mesa.length === 0) {
          // urlCreate = `${window.location.origin}/api/criarEvento`;
        } else {
          urlCreate = `${window.location.origin}/api/updateGames/${dadosUser[0].codigo}`;
        }

        await fetch(urlCreate, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        //    setLoading('enviado');
      } catch (errors) {
        //  setLoading('falha');

        console.errors();
      }
    }
  }
  */
  const checkGame = (valor) => {
    console.log(valor);
    setGame(valor);
  };
  switch (game) {
    case '1':
      return <TelaGame01 />;

    case '2':
      return <TelaGame02 />;

    case '3':
      return <TelaGame03 />;

    case '4':
      return <TelaGame04 />;

    default:
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
              <h2>MESA - {dadosMesa[0].Mesa}</h2>
            </Box>
            <Box mt={1} ml={2} sx={{ fontSize: 'bold' }}>
              <Avatar
                sx={{ width: 86, height: 86 }}
                alt="Remy Sharp"
                src="https://sistemaidpb.s3.amazonaws.com/FOTO+(3).jpg"
              />
            </Box>
            <Box display="flex" flexDirection="row" mt={2}>
              <Grid item xs={12} md={3}>
                <Box
                  borderRadius={16}
                  {...defaultProps}
                  onClick={() => {
                    checkGame('1');
                  }}
                >
                  <img
                    width={100}
                    src="/images/gamer/17973872.jpg"
                    alt="onde"
                  />
                  <Box>
                    <strong>Onde foi Isso</strong>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
                <Box
                  borderRadius={16}
                  {...defaultProps}
                  onClick={() => {
                    checkGame('2');
                  }}
                >
                  <CardMedia
                    component="img"
                    height="125"
                    image="/images/gamer/quizGabi.png"
                    alt="green iguana"
                    style={{ borderRadius: 16 }}
                  />
                </Box>
              </Grid>
            </Box>
            <Box display="flex" flexDirection="row" mt={2}>
              <Grid item xs={12} md={3}>
                <Box borderRadius={16} {...defaultProps}>
                  <img
                    width={100}
                    src="/images/gamer/17973872.jpg"
                    alt="onde"
                  />
                  <Box>
                    <strong>Onde foi Isso</strong>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
                <Box borderRadius={16} {...defaultProps}>
                  <img
                    width={100}
                    src="/images/gamer/17973872.jpg"
                    alt="onde"
                  />
                  <Box>
                    <strong>Onde foi Isso</strong>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Box>
      );
  }
}

export default InicioGame;
