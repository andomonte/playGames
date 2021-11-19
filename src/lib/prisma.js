import { PrismaClient } from '@prisma/client';

const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
else global.prisma = '';
export default prisma;

/* import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default prisma;
 */
