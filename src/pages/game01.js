import React from 'react';
import TelaGame01 from 'src/components/Game/telas/telas';
import TelaGame02 from 'src/components/Game/telas/telaGame02';
import TelaGame03 from 'src/components/Game/telas/telaGame03';
import TelaGame04 from 'src/components/Game/telas/telaGame04';
import { useRouter } from 'next/router';
// import prisma from 'src/lib/prisma';

function Games() {
  const router = useRouter();
  const { dadosMesa2, numeroGame } = router.query;
  //  const dadosMesa = games.filter((val) => val.codigo === Number(mesa));
  console.log('dados:', dadosMesa2, numeroGame);
  switch (numeroGame) {
    case '1':
      return <TelaGame01 mesa={dadosMesa2} />;

    case '2':
      return <TelaGame02 mesa={dadosMesa2} />;

    case '3':
      return <TelaGame03 mesa={dadosMesa2} />;

    case '4':
      return <TelaGame04 mesa={dadosMesa2} />;

    default:
      return (
        <>
          <h2>game</h2>
          {/*       <Game01 title="Niver Gabrielle" mesa={mesa} />
           */}{' '}
        </>
      );
  }
}

export default Games;
