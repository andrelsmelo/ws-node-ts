import jwt from 'jsonwebtoken';

const secretKey = 'secreto';

export const generateToken = (userId: number): string => {
  return jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
};

export const verifyToken = (token: string): number | null => {
  try {
    const decoded = jwt.verify(token, secretKey) as { userId: number };
    return decoded.userId;
  } catch (error) {
    return null;
  }
};
