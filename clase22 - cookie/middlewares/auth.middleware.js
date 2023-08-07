import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../constants.js';

const auth = (req, res, next) => {
  const token = req.cookies['codercookie'];
  if (!token) {
    return res.status(401).json({
      error: 'Not authenticated'
    });
  }
  jwt.verify(token, SECRET_KEY, (error, credentials) => {
    if (error) {
      return res.status(403).json({ error: 'Not authorized'});
    }
    req.user = credentials;
    next();
  });
};


export default auth