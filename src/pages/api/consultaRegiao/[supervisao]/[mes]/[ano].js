import prisma from 'src/lib/prisma';

export default async function handle(req, res) {
  // id = req;
  const {
    query: { supervisao, ano },
  } = req;

  // const action = `${rel}.findMany`
  const posts = await prisma.relatorios
    .findMany({
      where: {
        AND: [{ supervisao }, { ano }],
      },
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  res.statuCode = 200;
  res.setHeader('Content-Type', 'aplication/json');
  //  res.end(JSON.stringify({ posts }));
  res.json(posts);
}
