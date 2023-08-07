import jwt from 'jsonwebtoken';
import SECRET_KEY  from './constants.js';

const generateToken = (user) => {
  const token = jwt.sign({ ...user }, SECRET_KEY, { expiresIn: '24h' }); 
  return token;
};

export default generateToken