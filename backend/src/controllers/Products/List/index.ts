import { Request, Response } from 'express';
import { Exception } from '../../../lib/Exceptions';
import { prismaClient } from '../../../lib/Prisma';

export async function ListProductsController(req: Request, res: Response) {
  try {
    const response = await prismaClient.product.findMany();

    return res.status(200).json(response);
  } catch (error) {
    return new Exception(error).response(res);
  }
}
