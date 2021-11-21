import prisma from 'src/lib/prisma';

export default async function handle(req, res) {
  // id = req;
  console.log('dados do api');
  const posts = await prisma.perguntasGame.findMany().finally(async () => {
    await prisma.$disconnect();
  });
  res.statuCode = 200;
  res.setHeader('Content-Type', 'aplication/json');
  //  res.end(JSON.stringify({ posts }));
  res.json(posts);
}
