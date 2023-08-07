import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../constants.js';

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization; // la cookie creada
  if (!authHeader) {
    return res.status(401).json({
      error: 'Not authenticated'
    });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (error, credentials) => {
    if (error) {
      return res.status(403).json({ error: 'Not authorized'});
    }
    req.user = credentials;
    next();
  });
};

export default auth