import { AppDataSource } from '../datasource/index.js';
import { User } from '../datasource/entities/user.entity.js';
// import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface UserInterface {
  id: string;
  username: string;
}

export const getUser = async (token: string): Promise<UserInterface | null> => {
  try {
    if (!token) return null;
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY) as any;
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id: decodedToken.id },
    });
    return user ? { id: user.id.toString(), username: user.username } : null;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export const authenticateUser = async (
  username: string,
  password: string
): Promise<string | null> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { username } });

  // if (user && await bcrypt.compare(password, user.password)) {
  if (user) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );
    return token;
  }
  return null;
};
