import jwt from 'jsonwebtoken';
import config from '../config/config.js';

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, config.jwtSecret, { expiresIn: '1h' });
};

export default generateToken;