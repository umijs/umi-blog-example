import { UmiApiRequest, UmiApiResponse } from "umi";
import { PrismaClient } from '@prisma/client'
import * as fs from "fs";
import { join } from "path";

export default async function (req: UmiApiRequest, res: UmiApiResponse) {
  console.error(process.cwd())
  console.error(__dirname)
  console.error(fs.existsSync(join(__dirname, '../../../../schema.prisma')))
  switch (req.method) {
    case 'GET':
      const prisma = new PrismaClient();
      const allUsers = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          avatarUrl: true,
          passwordHash: false
        }
      });
      res.status(200).json(allUsers);
      await prisma.$disconnect()
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' })
  }
}