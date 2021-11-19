import React from 'react';
import Telas from 'src/components/Game/telas/telas';

// import InicioGame from 'src/components/Game/index';
import { useRouter } from 'next/router';
import prisma from 'src/lib/prisma';

function Games({ games, perguntas }) {
  const router = useRouter();
  const { mesa } = router.query;
  let nMesa;
  let codigo;
  const dadosMesa = games.filter((val) => val.codigo === Number(mesa));
  if (dadosMesa.length !== 0) {
    nMesa = dadosMesa[0].Mesa;
    codigo = dadosMesa[0].codigo;
  }
  return (
    <>
      {mesa ? (
        <Telas mesa={nMesa} codigoMesa={codigo} perguntas={perguntas} />
      ) : (
        <h3> Carregando o Jogo</h3>
      )}
    </>
  );
}
export const getStaticProps = async () => {
  // pega o valor do banco de dados

  const posts = await prisma.games.findMany().finally(async () => {
    await prisma.$disconnect();
  });
  const perguntas = await prisma.perguntasGame.findMany().finally(async () => {
    await prisma.$disconnect();
  });
  return {
    props: {
      games: JSON.parse(JSON.stringify(posts)),
      perguntas: JSON.parse(JSON.stringify(perguntas)),
    }, // will be passed to the page component as props
    //  revalidate: 15, // faz atualizar a pagina de 15 em 15 segundo sem fazer build
  };
};
export default Games;
