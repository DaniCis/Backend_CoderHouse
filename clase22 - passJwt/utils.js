import jwt from 'jsonwebtoken';
import SECRET_KEY  from './constants.js';

const generateToken = (user) => {
  const token = jwt.sign({ ...user }, SECRET_KEY, { expiresIn: '24h' }); 
  return token;
};

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) { // si existe la cookie
    token = req.cookies['codercookie'];
  }
  return token;
};

export default {generateToken, cookieExtractor}