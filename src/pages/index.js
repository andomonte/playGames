import React from 'react';
import LoginGame from 'src/components/LoginGame/index';
import prisma from 'src/lib/prisma';
import InicioGame from 'src/components/IniciarGame';
// import { Box, Grid } from '@material-ui/core';
// import CardMedia from '@mui/material/CardMedia';
// import Avatar from '@mui/material/Avatar';
function Home({ games }) {
  console.log(games[0].status);
  switch (games[0].status) {
    case 'ON-1':
      return <LoginGame title="Niver Gabrielle" />;
    case 'OFF':
      return <InicioGame title="Niver Gabrielle" />;

    default:
      return (
        <LoginGame title="Niver Gabrielle" />

        /*         <Box
          bgcolor="#fce4ec"
          display="flex"
          flexDirection="row"
          alignItems="center"
          height="100vh"
        >
          <Box align="center" width="99%">
            <Box mt={-5}>
              <h2>Infelizmente o Jogo já Começou</h2>
            </Box>
            <Box display="flex" flexDirection="row" mt={-2}>
              <Grid item xs={12} md={3}>
                <Box borderRadius={16} {...defaultProps}>
                  <CardMedia
                    component="img"
                    height="325"
                    image="/images/gamer/começou.png"
                    alt="green iguana"
                    style={{ borderRadius: 16 }}
                  />
                </Box>
              </Grid>
            </Box>
            <Box mt={0}>
              <h2>mas, não fique triste, ainda</h2>
              <h2> teremos muita diversão</h2>
            </Box>
          </Box>
        </Box>
 */
      );
  }
  //  return <LoginGame title="Niver Gabrielle" />;
}

export const getStaticProps = async () => {
  // pega o valor do banco de dados

  const posts = await prisma.games.findMany().finally(async () => {
    await prisma.$disconnect();
  });
  return {
    props: {
      games: JSON.parse(JSON.stringify(posts)),
    }, // will be passed to the page component as props
    revalidate: 15, // faz atualizar a pagina de 15 em 15 segundo sem fazer build
  };
};
export default Home;
