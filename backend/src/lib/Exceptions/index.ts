import { ZodError } from 'zod';
import { Response } from 'express';
import { AxiosError } from 'axios';

export class Exception {
  constructor(private error: unknown) {}

  response(res: Response) {
    if (this.error instanceof AxiosError) {
      return res.status(422).json(this.error.response?.data);
    }

    if (this.error instanceof ZodError) {
      return res.status(406).json({
        message: 'Error on fields validation.',
        fields: this.error.issues.map((issue) => issue.path[0]),
      });
    }
    if (this.error instanceof Error) {
      return res.status(400).json({
        message: this.error.message,
      });
    }
    return res.status(500).json({
      message: 'Internal server error.',
    });
  }
}
