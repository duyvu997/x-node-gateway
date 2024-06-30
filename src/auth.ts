import { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';

const SECRET_KEY = 'yourSecretKey'; // Replace with a secure key in production

export function generateToken(user: any): string {
  return jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
}

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    (req as any).user = user;
    next();
  });
}
