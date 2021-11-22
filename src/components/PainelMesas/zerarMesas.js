import React from 'react';
import { Box, Button } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function ZerarMesas() {
  const mesas = [
    1020, 1121, 1222, 1323, 1424, 1525, 1626, 1727, 1828, 1929, 2011, 2012,
    2020, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
  ];
  const [contMesa, setContMesa] = React.useState(1);
  const submitData = async (valor) => {
    try {
      const body = {
        resposta1: '0',
        resposta2: '0',
        resposta3: '0',
        resposta4: '0',
        resposta5: '0',
        resposta6: '0',
        resposta7: '0',
        resposta8: '0',
        resposta9: '0',
        resposta10: '0',
      };

      let urlCreate = '';

      urlCreate = `${window.location.origin}/api/updateGames/${mesas[valor]}`;

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

  const handleSubMesa = () => {
    let temCont = contMesa - 1;
    if (temCont < 0) temCont = 20;
    setContMesa(temCont);
    submitData(temCont);
  };
  const handleAddMesa = () => {
    let temCont = contMesa + 1;
    if (temCont > 20) temCont = 0;
    setContMesa(temCont);
    submitData(temCont);
  };

  return (
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
              onClick={handleSubMesa}
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
              <strong>{contMesa}</strong>
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
              onClick={handleAddMesa}
            />
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default ZerarMesas;
