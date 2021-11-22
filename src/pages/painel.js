import React from 'react';
import PainelMesas from 'src/components/PainelMesas/index';
import prisma from 'src/lib/prisma';

// import { Box, Grid } from '@material-ui/core';
// import CardMedia from '@mui/material/CardMedia';
// import Avatar from '@mui/material/Avatar';
function Painel({ perguntasGame }) {
  console.log('perg-', perguntasGame);
  return <PainelMesas title="Niver Gabrielle" perguntasGame={perguntasGame} />;
}
export const getStaticProps = async () => {
  // pega o valor do banco de dados

  const posts = await prisma.perguntasGame.findMany().finally(async () => {
    await prisma.$disconnect();
  });
  return {
    props: {
      perguntasGame: JSON.parse(JSON.stringify(posts)),
    }, // will be passed to the page component as props
    revalidate: 15, // faz atualizar a pagina de 15 em 15 segundo sem fazer build
  };
};

export default Painel;
