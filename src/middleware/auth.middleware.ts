import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authCode = req.query.authCode;

    if (authCode !== process.env.AUTH_CODE)
      throw new UnauthorizedException('invalid authentication code');

    next();
  }
}
