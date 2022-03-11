import { UmiApiRequest, UmiApiResponse } from "umi";
import { PrismaClient } from '@prisma/client'

export default async function (req: UmiApiRequest, res: UmiApiResponse) {
  let prisma: PrismaClient;
  switch (req.method) {
    case 'GET':
      prisma = new PrismaClient();
      const post = await prisma.post.findUnique({
        where: { id: +req.params.postId },
        include: { author: true }
      });
      res.status(200).json(post);
      await prisma.$disconnect()
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' })
  }
}
