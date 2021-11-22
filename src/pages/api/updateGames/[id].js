import prisma from 'src/lib/prisma';

// POST /api/user
// Required fields in body: name, email
export default async function handle(req, res) {
  const postId = req.query.id;
  // console.log('valor:', postId);
  const result = await prisma.games
    .update({
      where: { codigo: Number(postId) },
      data: {
        ...req.body,
      },
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  res.json(result);
}
