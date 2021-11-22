import React from 'react';
// import CardMedia from '@mui/material/CardMedia';
import useSWR, { mutate } from 'swr';
import axios from 'axios';
import TelaGame01 from './telaGame01';
import TelaGame02 from './telaGame02';
import TelaGame03 from './telaGame03';
import TelaGame04 from './telaGame04';
import TelaGame05 from './telaGame05';
import TelaGame06 from './telaGame06';
import TelaGame07 from './telaGame07';
import TelaGame08 from './telaGame08';
import TelaGame09 from './telaGame09';
import TelaGame10 from './telaGame10';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Telas({ mesa, codigoMesa, perguntas }) {
  // const classes = useStyles();
  const [statusMesa, setStatusMesa] = React.useState('');
  const url = `${window.location.origin}/api/consultaGames`;
  const { data, error } = useSWR(url, fetcher);

  // const { data, error } = useSWR('/api/consultaGames', fetcher);
  //  const [mesas, setMesas] = React.useState('');
  const codigo = codigoMesa;

  React.useEffect(() => {
    if (data) {
      setStatusMesa(data[0].status);

      const dadosMesa = data.filter((val) => val.codigo === Number(codigo));
      if (dadosMesa) {
        //        RespostaMesa = dadosMesa[0].resposta1;
        //  setStatusMesa(dadosMesa[0].status);
      }
    }
    //     mutate(["/api/albums/list?id=", appUser.id]);
    if (error) return <div>An error occured.</div>;
    if (!data) return <div>Loading ...</div>;

    return 0;
  }, [data]);

  mutate(url);

  if (statusMesa === 'ON-1') {
    return (
      <TelaGame01 mesa={mesa} codigoMesa={codigoMesa} perguntas={perguntas} />
    );
  }
  if (statusMesa === 'ON-2') {
    return (
      <TelaGame02 mesa={mesa} codigoMesa={codigoMesa} perguntas={perguntas} />
    );
  }
  if (statusMesa === 'ON-3') {
    return (
      <TelaGame03 mesa={mesa} codigoMesa={codigoMesa} perguntas={perguntas} />
    );
  }
  if (statusMesa === 'ON-4') {
    return (
      <TelaGame04 mesa={mesa} codigoMesa={codigoMesa} perguntas={perguntas} />
    );
  }
  if (statusMesa === 'ON-5') {
    return (
      <TelaGame05 mesa={mesa} codigoMesa={codigoMesa} perguntas={perguntas} />
    );
  }
  if (statusMesa === 'ON-6') {
    return (
      <TelaGame06 mesa={mesa} codigoMesa={codigoMesa} perguntas={perguntas} />
    );
  }
  if (statusMesa === 'ON-7') {
    return (
      <TelaGame07 mesa={mesa} codigoMesa={codigoMesa} perguntas={perguntas} />
    );
  }
  if (statusMesa === 'ON-8') {
    return (
      <TelaGame08 mesa={mesa} codigoMesa={codigoMesa} perguntas={perguntas} />
    );
  }
  if (statusMesa === 'ON-9') {
    return (
      <TelaGame09 mesa={mesa} codigoMesa={codigoMesa} perguntas={perguntas} />
    );
  }
  if (statusMesa === 'ON-10') {
    return (
      <TelaGame10 mesa={mesa} codigoMesa={codigoMesa} perguntas={perguntas} />
    );
  }

  return 'Carregando...';
}
