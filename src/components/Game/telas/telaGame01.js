import React from 'react';
import Fab from '@mui/material/Fab';
import { Box, Grid } from '@material-ui/core';
// import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import useSWR, { mutate } from 'swr';
import axios from 'axios';
// import TelaGame02 from './telaGame02';
import TelaEspera from './telaEspera';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const defaultProps = {
  // bgcolor: 'background.paper',
  m: 1,
  border: 1,
  width: '95%',
};

export default function TelaGame01({ mesa, codigoMesa, perguntas }) {
  // const classes = useStyles();
  const [colorA, setColorA] = React.useState('#fff');
  const [colorB, setColorB] = React.useState('#fff');
  const [colorC, setColorC] = React.useState('#fff');
  const [colorD, setColorD] = React.useState('#fff');
  const [statusMesa, setStatusMesa] = React.useState('');
  const [RespostaMesa, setRespostaMesa] = React.useState('');
  const [resposta, setResposta] = React.useState('0');
  const [esperar, setEsperar] = React.useState(false);
  //  console.log('peg', perguntas);
  const url = `${window.location.origin}/api/consultaGames`;
  const { data, error } = useSWR(url, fetcher);

  // const { data, error } = useSWR('/api/consultaGames', fetcher);
  //  const [mesas, setMesas] = React.useState('');
  const codigo = codigoMesa;

  //  let RespostaMesa = '0';
  let PontosMesa = '0';
  //  let StatusMesa = '0';
  React.useEffect(() => {
    if (data) {
      const dadosMesa = data.filter((val) => val.codigo === Number(codigo));
      if (dadosMesa) {
        //        RespostaMesa = dadosMesa[0].resposta1;
        PontosMesa = dadosMesa[0].pontos;
        //    StatusMesa = dadosMesa[0].status;
        setStatusMesa(dadosMesa[0].status);
        setRespostaMesa(dadosMesa[0].resposta1);
        setResposta(dadosMesa[0].resposta1);
      }
    }
    //     mutate(["/api/albums/list?id=", appUser.id]);
    if (error) return <div>An error occured.</div>;
    if (!data) return <div>Loading ...</div>;
    if (RespostaMesa === 'A') {
      setColorA('#7c4dff');
    } else setColorA('#fff');
    if (RespostaMesa === 'B') {
      setColorB('#7c4dff');
    } else setColorB('#fff');
    if (RespostaMesa === 'C') {
      setColorC('#7c4dff');
    } else setColorC('#fff');
    if (RespostaMesa === 'D') {
      setColorD('#7c4dff');
    } else setColorD('#fff');

    return 0;
  }, [data]);

  const submitData = async (valor) => {
    try {
      const body = {
        resposta1: valor,
      };

      let urlCreate = '';

      urlCreate = `${window.location.origin}/api/updateGames/${codigo}`;

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
    //  } // else //setLoading('naoPreenchido');
  };
  const confirmar = (valor) => {
    if (valor === perguntas[0].gabarito) {
      PontosMesa = Number(PontosMesa) + 10;
      submitData(valor);
    } else {
      console.log('erro');
      submitData(valor);
    }
    setEsperar(true);
  };
  mutate(url);

  const checkGame = (valor) => {
    setResposta(valor);
    if (valor === 'A') {
      setColorA('#7c4dff');
    } else setColorA('#fff');
    if (valor === 'B') {
      setColorB('#7c4dff');
    } else setColorB('#fff');
    if (valor === 'C') {
      setColorC('#7c4dff');
    } else setColorC('#fff');
    if (valor === 'D') {
      setColorD('#7c4dff');
    } else setColorD('#fff');
  };
  //  console.log('st:', statusMesa, RespostaMesa);
  /*   if (RespostaMesa !== '0' && statusMesa === 'ON-2' && esperar === false) {
    return (
      <TelaGame02 mesa={mesa} codigoMesa={codigoMesa} perguntas={perguntas} />
    );
  }
 */ if (RespostaMesa !== '0' && statusMesa === 'ON-1') {
    return <TelaEspera RespostaMesa={RespostaMesa} />;
  }
  if (esperar === true) {
    setEsperar(false);
  }

  return (
    <>
      {console.log(esperar)}
      {esperar && <TelaEspera RespostaMesa={RespostaMesa} />}
      <Box
        bgcolor="#fce4ec"
        display="flex"
        flexDirection="row"
        alignItems="center"
        height="100vh"
      >
        <Box align="center" width="99%">
          <Box mt={-15}>
            <h2>MESA - {mesa}</h2>
          </Box>
          <Box display="flex" flexDirection="row" mt={2}>
            <Grid item xs={12} md={3}>
              <Box mt={1} ml={2} sx={{ fontSize: 'bold' }}>
                <Avatar
                  sx={{ width: 86, height: 86 }}
                  alt="Remy Sharp"
                  src="/images/gamer/quizGabi.png"
                />
              </Box>
            </Grid>
          </Box>
          <Box display="flex" flexDirection="row" mt={2}>
            <Grid item xs={12} md={3}>
              <Box borderRadius={16} {...defaultProps}>
                <Box width="100%">
                  <h3>
                    <strong>{perguntas[0].Pergunta}</strong>{' '}
                  </h3>
                </Box>
              </Box>
            </Grid>
          </Box>
          <Box display="flex" flexDirection="row" mt={2}>
            <Grid item xs={12} md={3}>
              <Box bgcolor={colorA} borderRadius={16} {...defaultProps}>
                <Box
                  mt={2}
                  onClick={() => {
                    if (RespostaMesa === '0') checkGame('A');
                  }}
                >
                  <img width={40} src="/images/gamer/letra A.png" alt="onde" />
                </Box>
                <Box>
                  <strong>{perguntas[0].LetraA}</strong>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box bgcolor={colorB} borderRadius={16} {...defaultProps}>
                <Box
                  mt={2}
                  onClick={() => {
                    if (RespostaMesa === '0') checkGame('B');
                  }}
                >
                  <img width={34} src="/images/gamer/letra B.png" alt="onde" />
                </Box>{' '}
                <Box>
                  <strong>{perguntas[0].LetraB}</strong>
                </Box>
              </Box>
            </Grid>
          </Box>
          <Box display="flex" flexDirection="row" mt={2}>
            <Grid item xs={12} md={3}>
              <Box bgcolor={colorC} borderRadius={16} {...defaultProps}>
                <Box
                  mt={2}
                  onClick={() => {
                    if (RespostaMesa === '0') checkGame('C');
                  }}
                >
                  <img width={31} src="/images/gamer/letra C.png" alt="onde" />
                </Box>
                <Box>
                  <strong>{perguntas[0].LetraC}</strong>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box bgcolor={colorD} borderRadius={16} {...defaultProps}>
                <Box
                  mt={2}
                  onClick={() => {
                    if (RespostaMesa === '0') checkGame('D');
                  }}
                >
                  <img width={32} src="/images/gamer/letra D.png" alt="onde" />
                </Box>{' '}
                <Box>
                  <strong>{perguntas[0].LetraD}</strong>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box mt={-10} display="flex" align="center" justifyContent="center">
        <Box sx={{ '& > :not(style)': { m: 1 } }} mb={0}>
          {RespostaMesa === '0' &&
            (resposta === '0' ? (
              <Fab
                style={{
                  background: '#10bea5',
                  color: 'white',
                }}
                variant="extended"
              >
                Click em uma das Alternativas
              </Fab>
            ) : (
              <Fab
                style={{
                  background: '#ec407a',
                  color: 'white',
                }}
                variant="extended"
                onClick={() => {
                  confirmar(resposta);
                }}
              >
                CONFIRMAR
              </Fab>
            ))}
          {RespostaMesa !== '0' && (
            <Fab
              style={{
                background: '#1c407a',
                color: 'white',
              }}
              variant="extended"
            >
              A MESA JÁ VOTOU
            </Fab>
          )}
        </Box>
      </Box>
    </>
  );
}
