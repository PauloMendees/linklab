import { Request } from 'express';
import { z } from 'zod';

const bodyObject = z.object({
  name: z.string(),
  image: z.string(),
  value: z.number(),
  rate: z.number(),
});

export function CreateProductParser(req: Request) {
  return bodyObject.parse(req.body);
}

export type CreateProductPayload = z.infer<typeof bodyObject>;
