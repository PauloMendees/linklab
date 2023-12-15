import { Request, Response } from 'express';
import { Exception } from '../../../lib/Exceptions';
import { CreateProductParser } from './parser';
import { prismaClient } from '../../../lib/Prisma';

export async function CreateProductController(req: Request, res: Response) {
  try {
    const payload = CreateProductParser(req);

    const createdProduct = await prismaClient.product.create({
      data: payload,
    });

    return res.status(200).json(createdProduct);
  } catch (error) {
    return new Exception(error).response(res);
  }
}
