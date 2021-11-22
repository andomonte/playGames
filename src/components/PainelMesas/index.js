import React from 'react';
import { Box, Grid, Button } from '@material-ui/core';
import useSWR, { mutate } from 'swr';
import axios from 'axios';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const fetcher = (url) => axios.get(url).then((res) => res.data);

function PainelMesas({ perguntasGame }) {
  const { data, error } = useSWR('/api/consultaGames', fetcher);
  const [contMes, setContMes] = React.useState(1);
  const [showPontos, setShowPontos] = React.useState(false);

  let mesas = 'Esperando pergunta do Banco de Dados';
  if (data) {
    mesas = data;
  }
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;

  const submitData = async (valor) => {
    let statusValor = `ON-${valor}`;
    if (valor === 0) statusValor = 'OFF';
    console.log(statusValor);
    try {
      const body = {
        status: statusValor,
      };

      let urlCreate = '';

      urlCreate = `${window.location.origin}/api/updateGames/1020`;

      await fetch(urlCreate, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      //    setLoading('enviado');
    } catch (errors) {
      console.errors();
    }
  };
  mutate('/api/consultaGames');
  const handleSubMes = () => {
    let temCont = contMes - 1;
    if (temCont < 0) temCont = 10;
    setContMes(temCont);
    submitData(temCont);
  };
  const handleAddMes = () => {
    let temCont = contMes + 1;
    if (temCont > 10) temCont = 0;
    setContMes(temCont);
    submitData(temCont);
  };
  const handlePontos = () => {
    setShowPontos(!showPontos);
  };

  let PontosMesa01 = 0;
  const respMesa01 = [];
  respMesa01[0] = mesas[0].resposta1;
  respMesa01[1] = mesas[0].resposta2;
  respMesa01[2] = mesas[0].resposta3;
  respMesa01[3] = mesas[0].resposta4;
  respMesa01[4] = mesas[0].resposta5;
  respMesa01[5] = mesas[0].resposta6;
  respMesa01[6] = mesas[0].resposta7;
  respMesa01[7] = mesas[0].resposta8;
  respMesa01[8] = mesas[0].resposta9;
  respMesa01[9] = mesas[0].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa01[i] === perguntasGame[i].gabarito) PontosMesa01 += 10;
  }

  let PontosMesa02 = 0;
  const respMesa02 = [];
  respMesa02[0] = mesas[1].resposta1;
  respMesa02[1] = mesas[1].resposta2;
  respMesa02[2] = mesas[1].resposta3;
  respMesa02[3] = mesas[1].resposta4;
  respMesa02[4] = mesas[1].resposta5;
  respMesa02[5] = mesas[1].resposta6;
  respMesa02[6] = mesas[1].resposta7;
  respMesa02[7] = mesas[1].resposta8;
  respMesa02[8] = mesas[1].resposta9;
  respMesa02[9] = mesas[1].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa02[i] === perguntasGame[i].gabarito) PontosMesa02 += 10;
  }
  let PontosMesa03 = 0;
  const respMesa03 = [];
  respMesa03[0] = mesas[2].resposta1;
  respMesa03[1] = mesas[2].resposta2;
  respMesa03[2] = mesas[2].resposta3;
  respMesa03[3] = mesas[2].resposta4;
  respMesa03[4] = mesas[2].resposta5;
  respMesa03[5] = mesas[2].resposta6;
  respMesa03[6] = mesas[2].resposta7;
  respMesa03[7] = mesas[2].resposta8;
  respMesa03[8] = mesas[2].resposta9;
  respMesa03[9] = mesas[2].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa03[i] === perguntasGame[i].gabarito) PontosMesa03 += 10;
  }

  let PontosMesa04 = 0;
  const respMesa04 = [];
  respMesa04[0] = mesas[3].resposta1;
  respMesa04[1] = mesas[3].resposta2;
  respMesa04[2] = mesas[3].resposta3;
  respMesa04[3] = mesas[3].resposta4;
  respMesa04[4] = mesas[3].resposta5;
  respMesa04[5] = mesas[3].resposta6;
  respMesa04[6] = mesas[3].resposta7;
  respMesa04[7] = mesas[3].resposta8;
  respMesa04[8] = mesas[3].resposta9;
  respMesa04[9] = mesas[3].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa04[i] === perguntasGame[i].gabarito) PontosMesa04 += 10;
  }

  let PontosMesa05 = 0;
  const respMesa05 = [];
  respMesa05[0] = mesas[4].resposta1;
  respMesa05[1] = mesas[4].resposta2;
  respMesa05[2] = mesas[4].resposta3;
  respMesa05[3] = mesas[4].resposta4;
  respMesa05[4] = mesas[4].resposta5;
  respMesa05[5] = mesas[4].resposta6;
  respMesa05[6] = mesas[4].resposta7;
  respMesa05[7] = mesas[4].resposta8;
  respMesa05[8] = mesas[4].resposta9;
  respMesa05[9] = mesas[4].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa05[i] === perguntasGame[i].gabarito) PontosMesa05 += 10;
  }

  let PontosMesa06 = 0;
  const respMesa06 = [];
  respMesa06[0] = mesas[5].resposta1;
  respMesa06[1] = mesas[5].resposta2;
  respMesa06[2] = mesas[5].resposta3;
  respMesa06[3] = mesas[5].resposta4;
  respMesa06[4] = mesas[5].resposta5;
  respMesa06[5] = mesas[5].resposta6;
  respMesa06[6] = mesas[5].resposta7;
  respMesa06[7] = mesas[5].resposta8;
  respMesa06[8] = mesas[5].resposta9;
  respMesa06[9] = mesas[5].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa06[i] === perguntasGame[i].gabarito) PontosMesa06 += 10;
  }
  let PontosMesa07 = 0;
  const respMesa07 = [];
  respMesa07[0] = mesas[6].resposta1;
  respMesa07[1] = mesas[6].resposta2;
  respMesa07[2] = mesas[6].resposta3;
  respMesa07[3] = mesas[6].resposta4;
  respMesa07[4] = mesas[6].resposta5;
  respMesa07[5] = mesas[6].resposta6;
  respMesa07[6] = mesas[6].resposta7;
  respMesa07[7] = mesas[6].resposta8;
  respMesa07[8] = mesas[6].resposta9;
  respMesa07[9] = mesas[6].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa07[i] === perguntasGame[i].gabarito) PontosMesa07 += 10;
  }
  let PontosMesa08 = 0;
  const respMesa08 = [];
  respMesa08[0] = mesas[7].resposta1;
  respMesa08[1] = mesas[7].resposta2;
  respMesa08[2] = mesas[7].resposta3;
  respMesa08[3] = mesas[7].resposta4;
  respMesa08[4] = mesas[7].resposta5;
  respMesa08[5] = mesas[7].resposta6;
  respMesa08[6] = mesas[7].resposta7;
  respMesa08[7] = mesas[7].resposta8;
  respMesa08[8] = mesas[7].resposta9;
  respMesa08[9] = mesas[7].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa08[i] === perguntasGame[i].gabarito) PontosMesa08 += 10;
  }
  let PontosMesa09 = 0;
  const respMesa09 = [];
  respMesa09[0] = mesas[8].resposta1;
  respMesa09[1] = mesas[8].resposta2;
  respMesa09[2] = mesas[8].resposta3;
  respMesa09[3] = mesas[8].resposta4;
  respMesa09[4] = mesas[8].resposta5;
  respMesa09[5] = mesas[8].resposta6;
  respMesa09[6] = mesas[8].resposta7;
  respMesa09[7] = mesas[8].resposta8;
  respMesa09[8] = mesas[8].resposta9;
  respMesa09[9] = mesas[8].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa09[i] === perguntasGame[i].gabarito) PontosMesa09 += 10;
  }

  let PontosMesa10 = 0;
  const respMesa10 = [];
  respMesa10[0] = mesas[9].resposta1;
  respMesa10[1] = mesas[9].resposta2;
  respMesa10[2] = mesas[9].resposta3;
  respMesa10[3] = mesas[9].resposta4;
  respMesa10[4] = mesas[9].resposta5;
  respMesa10[5] = mesas[9].resposta6;
  respMesa10[6] = mesas[9].resposta7;
  respMesa10[7] = mesas[9].resposta8;
  respMesa10[8] = mesas[9].resposta9;
  respMesa10[9] = mesas[9].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa10[i] === perguntasGame[i].gabarito) PontosMesa10 += 10;
  }
  let PontosMesa11 = 0;
  const respMesa11 = [];
  respMesa11[0] = mesas[10].resposta1;
  respMesa11[1] = mesas[10].resposta2;
  respMesa11[2] = mesas[10].resposta3;
  respMesa11[3] = mesas[10].resposta4;
  respMesa11[4] = mesas[10].resposta5;
  respMesa11[5] = mesas[10].resposta6;
  respMesa11[6] = mesas[10].resposta7;
  respMesa11[7] = mesas[10].resposta8;
  respMesa11[8] = mesas[10].resposta9;
  respMesa11[9] = mesas[10].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa11[i] === perguntasGame[i].gabarito) PontosMesa11 += 10;
  }
  let PontosMesa12 = 0;
  const respMesa12 = [];
  respMesa12[0] = mesas[11].resposta1;
  respMesa12[1] = mesas[11].resposta2;
  respMesa12[2] = mesas[11].resposta3;
  respMesa12[3] = mesas[11].resposta4;
  respMesa12[4] = mesas[11].resposta5;
  respMesa12[5] = mesas[11].resposta6;
  respMesa12[6] = mesas[11].resposta7;
  respMesa12[7] = mesas[11].resposta8;
  respMesa12[8] = mesas[11].resposta9;
  respMesa12[9] = mesas[11].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa12[i] === perguntasGame[i].gabarito) PontosMesa12 += 10;
  }

  let PontosMesa13 = 0;
  const respMesa13 = [];
  respMesa13[0] = mesas[12].resposta1;
  respMesa13[1] = mesas[12].resposta2;
  respMesa13[2] = mesas[12].resposta3;
  respMesa13[3] = mesas[12].resposta4;
  respMesa13[4] = mesas[12].resposta5;
  respMesa13[5] = mesas[12].resposta6;
  respMesa13[6] = mesas[12].resposta7;
  respMesa13[7] = mesas[12].resposta8;
  respMesa13[8] = mesas[12].resposta9;
  respMesa13[9] = mesas[12].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa13[i] === perguntasGame[i].gabarito) PontosMesa13 += 10;
  }
  let PontosMesa14 = 0;
  const respMesa14 = [];
  respMesa14[0] = mesas[13].resposta1;
  respMesa14[1] = mesas[13].resposta2;
  respMesa14[2] = mesas[13].resposta3;
  respMesa14[3] = mesas[13].resposta4;
  respMesa14[4] = mesas[13].resposta5;
  respMesa14[5] = mesas[13].resposta6;
  respMesa14[6] = mesas[13].resposta7;
  respMesa14[7] = mesas[13].resposta8;
  respMesa14[8] = mesas[13].resposta9;
  respMesa14[9] = mesas[13].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa14[i] === perguntasGame[i].gabarito) PontosMesa14 += 10;
  }
  let PontosMesa15 = 0;
  const respMesa15 = [];
  respMesa15[0] = mesas[14].resposta1;
  respMesa15[1] = mesas[14].resposta2;
  respMesa15[2] = mesas[14].resposta3;
  respMesa15[3] = mesas[14].resposta4;
  respMesa15[4] = mesas[14].resposta5;
  respMesa15[5] = mesas[14].resposta6;
  respMesa15[6] = mesas[14].resposta7;
  respMesa15[7] = mesas[14].resposta8;
  respMesa15[8] = mesas[14].resposta9;
  respMesa15[9] = mesas[14].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa15[i] === perguntasGame[i].gabarito) PontosMesa15 += 10;
  }
  let PontosMesa16 = 0;
  const respMesa16 = [];
  respMesa16[0] = mesas[15].resposta1;
  respMesa16[1] = mesas[15].resposta2;
  respMesa16[2] = mesas[15].resposta3;
  respMesa16[3] = mesas[15].resposta4;
  respMesa16[4] = mesas[15].resposta5;
  respMesa16[5] = mesas[15].resposta6;
  respMesa16[6] = mesas[15].resposta7;
  respMesa16[7] = mesas[15].resposta8;
  respMesa16[8] = mesas[15].resposta9;
  respMesa16[9] = mesas[15].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa16[i] === perguntasGame[i].gabarito) PontosMesa16 += 10;
  }

  let PontosMesa17 = 0;
  const respMesa17 = [];
  respMesa17[0] = mesas[16].resposta1;
  respMesa17[1] = mesas[16].resposta2;
  respMesa17[2] = mesas[16].resposta3;
  respMesa17[3] = mesas[16].resposta4;
  respMesa17[4] = mesas[16].resposta5;
  respMesa17[5] = mesas[16].resposta6;
  respMesa17[6] = mesas[16].resposta7;
  respMesa17[7] = mesas[16].resposta8;
  respMesa17[8] = mesas[16].resposta9;
  respMesa17[9] = mesas[16].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa17[i] === perguntasGame[i].gabarito) PontosMesa17 += 10;
  }

  let PontosMesa18 = 0;
  const respMesa18 = [];
  respMesa18[0] = mesas[17].resposta1;
  respMesa18[1] = mesas[17].resposta2;
  respMesa18[2] = mesas[17].resposta3;
  respMesa18[3] = mesas[17].resposta4;
  respMesa18[4] = mesas[17].resposta5;
  respMesa18[5] = mesas[17].resposta6;
  respMesa18[6] = mesas[17].resposta7;
  respMesa18[7] = mesas[17].resposta8;
  respMesa18[8] = mesas[17].resposta9;
  respMesa18[9] = mesas[17].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa18[i] === perguntasGame[i].gabarito) PontosMesa18 += 10;
  }
  let PontosMesa19 = 0;
  const respMesa19 = [];
  respMesa19[0] = mesas[18].resposta1;
  respMesa19[1] = mesas[18].resposta2;
  respMesa19[2] = mesas[18].resposta3;
  respMesa19[3] = mesas[18].resposta4;
  respMesa19[4] = mesas[18].resposta5;
  respMesa19[5] = mesas[18].resposta6;
  respMesa19[6] = mesas[18].resposta7;
  respMesa19[7] = mesas[18].resposta8;
  respMesa19[8] = mesas[18].resposta9;
  respMesa19[9] = mesas[18].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa19[i] === perguntasGame[i].gabarito) PontosMesa19 += 10;
  }

  let PontosMesa20 = 0;
  const respMesa20 = [];
  respMesa20[0] = mesas[19].resposta1;
  respMesa20[1] = mesas[19].resposta2;
  respMesa20[2] = mesas[19].resposta3;
  respMesa20[3] = mesas[19].resposta4;
  respMesa20[4] = mesas[19].resposta5;
  respMesa20[5] = mesas[19].resposta6;
  respMesa20[6] = mesas[19].resposta7;
  respMesa20[7] = mesas[19].resposta8;
  respMesa20[8] = mesas[19].resposta9;
  respMesa20[9] = mesas[19].resposta10;
  for (let i = 0; i < 10; i += 1) {
    if (respMesa20[i] === perguntasGame[i].gabarito) PontosMesa20 += 10;
  }

  if (PontosMesa01 === 0) PontosMesa01 = '00';
  if (PontosMesa02 === 0) PontosMesa02 = '00';
  if (PontosMesa03 === 0) PontosMesa03 = '00';
  if (PontosMesa04 === 0) PontosMesa04 = '00';
  if (PontosMesa05 === 0) PontosMesa05 = '00';
  if (PontosMesa06 === 0) PontosMesa06 = '00';
  if (PontosMesa07 === 0) PontosMesa07 = '00';
  if (PontosMesa08 === 0) PontosMesa08 = '00';
  if (PontosMesa09 === 0) PontosMesa09 = '00';
  if (PontosMesa10 === 0) PontosMesa10 = '00';
  if (PontosMesa11 === 0) PontosMesa11 = '00';
  if (PontosMesa12 === 0) PontosMesa12 = '00';
  if (PontosMesa13 === 0) PontosMesa13 = '00';
  if (PontosMesa14 === 0) PontosMesa14 = '00';
  if (PontosMesa15 === 0) PontosMesa15 = '00';
  if (PontosMesa16 === 0) PontosMesa16 = '00';
  if (PontosMesa17 === 0) PontosMesa17 = '00';
  if (PontosMesa18 === 0) PontosMesa18 = '00';
  if (PontosMesa19 === 0) PontosMesa19 = '00';
  if (PontosMesa20 === 0) PontosMesa20 = '00';

  //  if (mesas[0].resposta1 !== 0)respMesa01[0]=mesas[0].resposta1
  return (
    <Box
      p={0}
      mt={-2}
      height={695}
      style={{
        backgroundImage: `url(/images/gamer/PAINEL.png)`,
        backgroundRepeat: 'round',
      }}
    >
      <Box mt={2} display="flex" flexDirection="row">
        <Grid item xs={12} md={10}>
          <Box
            mt={11}
            width="auto"
            height="auto"
            ml={74}
            style={{ fontSize: '34px', color: '#10aa', fontWeight: 'bold' }}
          >
            <strong>QUIZ DA GABI</strong>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            mt={13}
            width="auto"
            height="auto"
            ml={14}
            style={{ fontSize: '34px', color: '#10aa', fontWeight: 'bold' }}
          >
            <Box mr={1} mb={2} mt={-1}>
              <ButtonGroup
                size="small"
                color="secondary"
                aria-label="large outlined primary button group"
                variant="contained"
              >
                <Button
                  style={{
                    backgroundColor: '#e4b1ce',
                    height: 40,
                  }}
                >
                  <ArrowLeftIcon
                    style={{ fontSize: 35, color: '#000' }}
                    color="primary"
                    onClick={handleSubMes}
                    type="button"
                  />
                </Button>
                <Button
                  style={{
                    width: 120,
                    backgroundColor: '#e4b1ce',
                    fontSize: '12px',
                    height: 40,
                  }}
                >
                  <Box
                    color="#000"
                    style={{ fontSize: '20px' }}
                    align="center"
                    position="fixed"
                  >
                    <strong>{contMes}</strong>
                  </Box>
                </Button>
                <Button
                  style={{
                    backgroundColor: '#e4b1ce',
                    height: 40,
                  }}
                >
                  <ArrowRightIcon
                    style={{ fontSize: 35, color: '#000' }}
                    color="primary"
                    onClick={handleAddMes}
                  />
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Grid>
      </Box>
      <Box mt={2} display="flex" flexDirection="row">
        <Grid item xs={12} md={12}>
          <Box
            mt={-3}
            width="auto"
            height="auto"
            ml={72}
            style={{ fontSize: '34px', color: '#10aa', fontWeight: 'bold' }}
          >
            {contMes > 0 ? (
              <strong>{perguntasGame[contMes - 1].Pergunta}</strong>
            ) : (
              <strong>Esperando o Início do Jogo</strong>
            )}
          </Box>
        </Grid>
      </Box>
      <Box mt={2} display="flex" flexDirection="row">
        <Grid item xs={12} md={4}>
          <Box
            mt={0}
            width="auto"
            height="auto"
            ml={30.5}
            style={{ fontSize: '34px', color: '#10aa', fontWeight: 'bold' }}
          >
            <Box mr={1} mb={2} mt={-1}>
              <Button
                style={{
                  height: 70,
                  width: 100,
                }}
                onClick={handlePontos}
              />
            </Box>
          </Box>
        </Grid>
      </Box>

      <Box mt={2} display="flex" flexDirection="row">
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={33}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa01[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa01 > 99 ? 31.5 : 33}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa01}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={34}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa06[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa06 > 99 ? 33 : 35}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa06}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={33}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa11[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa11 > 99 ? 32 : 33.5}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa11}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={32}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa16[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa16 > 99 ? 30.5 : 32.5}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa16}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
      </Box>
      <Box mt={3.5} display="flex" flexDirection="row">
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={33}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa02[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa02 > 99 ? 31.5 : 33}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa02}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={34}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa07[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa07 > 99 ? 33 : 35}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa07}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={33}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa12[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa12 > 99 ? 32 : 33.5}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa12}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={32}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa17[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa17 > 99 ? 30.5 : 32.5}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa17}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
      </Box>
      <Box mt={3} display="flex" flexDirection="row">
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={33}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa03[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa03 > 99 ? 31.5 : 33}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa03}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={34}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa08[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa08 > 99 ? 33 : 35}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa08}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={33}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa13[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa13 > 99 ? 32 : 33.5}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa13}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={32}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa18[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa18 > 99 ? 30.5 : 32.5}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa18}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
      </Box>
      <Box mt={3} display="flex" flexDirection="row">
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={33}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa04[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa04 > 99 ? 31.5 : 33}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa04}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={34}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa09[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa09 > 99 ? 33 : 35}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa09}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={33}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa14[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa14 > 99 ? 32 : 33.5}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa14}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={32}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa19[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa19 > 99 ? 30.5 : 32.5}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa19}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
      </Box>
      <Box mt={3} display="flex" flexDirection="row">
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={33}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa05[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa05 > 99 ? 31.5 : 33}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa05}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={34}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa10[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa10 > 99 ? 33 : 35}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa10}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={33}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa15[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa15 > 99 ? 32 : 33.5}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa15}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          {showPontos ? (
            <Box
              mt={-1.5}
              width="auto"
              height="auto"
              ml={32}
              // style={{ fontSize: '25px', color: '#10aa', fontWeight: 'bold' }}
            >
              {respMesa20[contMes - 1] === '0' ? (
                <CancelIcon style={{ color: 'red', fontSize: 60 }} />
              ) : (
                <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
              )}
            </Box>
          ) : (
            <Box
              mt={-2}
              width="auto"
              height="auto"
              ml={PontosMesa20 > 99 ? 30.5 : 32.5}
              style={{ fontSize: '50px', color: '#10aa', fontWeight: 'bold' }}
            >
              {PontosMesa20}
              {/* <strong>{PontosMesa01}</strong> */}
            </Box>
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default PainelMesas;
