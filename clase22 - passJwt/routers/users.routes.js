import { Router } from 'express';
import { authorization } from '../middlewares/auth.middleware.js';
import { generateToken } from '../utils.js';

const router = Router();

const authMiddlewares = [
  passportCustom('jwt'), // traemos la mejora 
  authorization('user'),
  // ...
];

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'prueba@gmail.com' && password === '1234') {
    const access_token = generateToken({ email });
    res.cookie('codercookie', access_token, {
      maxAge: 60*60*1000,
      httpOnly: true,
    });
    res.json({ payload: 'OK' });
  }
});

router.get('/current', authMiddlewares, (req, res) => {
  res.json({ payload: req.user });
});

module.exports = router;