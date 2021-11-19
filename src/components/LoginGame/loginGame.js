import React from 'react';
import { Box, Grid, Typography, TextField } from '@material-ui/core';
// import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import Avatar from '@mui/material/Avatar';
// import useSWR from 'swr';
// import axios from 'axios';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/router';

// const fetcher = (url) => axios.get(url).then((res) => res.data);
const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  width: '95%',
};

function LoginGame() {
  // const [newData, setNewData] = React.useState('');
  const [mesa, setMesa] = React.useState('');
  const [validarMesa, setValidarMesa] = React.useState('sim');

  const router = useRouter();
  // const url = `${window.location.origin}/api/consultaGame/${mesa}`;
  // console.log('data');
  // const { data, error } = useSWR('/api/consultaGames', fetcher);
  //  const router = useRouter();

  // if (data) console.log(data);
  // if (error) return <div>An error occured.</div>;
  // if (!data) return <div>Loading ...</div>;
  const entrarNoJogo = async () => {
    /* if (mesa) {
        const dadosUser = data.filter(
        (val) => String(val.codigo) === String(mesa),
      ); 
      //     console.log('ola testeando', dadosUser[0]);
      if (dadosUser.length) {
        setNumeroMesa(dadosUser);
        try {
          const body = {
            status: 'ON',
          };

          let urlCreate = '';
          if (mesa.length === 0) {
            urlCreate = `${window.location.origin}/api/criarEvento`;
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
        setOpen(true);
      } 
    } */

    router.push({
      pathname: '/games',
      query: { mesa },
    });
  };
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

export default LoginGame;
