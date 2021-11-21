import React from 'react';
import { Box, Grid, Button } from '@material-ui/core';
import useSWR, { mutate } from 'swr';
import axios from 'axios';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const fetcher = (url) => axios.get(url).then((res) => res.data);

function PainelMesas() {
  const { data, error } = useSWR('/api/consultaPerguntas', fetcher);
  const [contMes, setContMes] = React.useState(1);

  let Pergunta = 'Esperando pergunta do Banco de Dados';
  if (data) {
    Pergunta = data;
  }
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;

  const submitData = async (valor) => {
    const statusValor = ` ON-${valor}`;
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

  const handleSubMes = () => {
    let temCont = contMes - 1;
    if (temCont < 1) temCont = 10;
    setContMes(temCont);
    submitData(temCont);
  };
  const handleAddMes = () => {
    let temCont = contMes + 1;
    if (temCont > 10) temCont = 1;
    setContMes(temCont);
    submitData(temCont);
  };
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
            <strong>{Pergunta[contMes - 1].Pergunta}</strong>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default PainelMesas;
