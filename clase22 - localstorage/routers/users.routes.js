import { Router } from 'express';
import { auth } from '../middlewares/auth.middleware.js';
import { generateToken } from '../utils.js';

const router = Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'prueba@gmail.com' && password === '1234') {
    const access_token = generateToken({ email });
    res.json({ access_token }); // entrega los datos del acceso
  }
});

router.get('/current', auth, (req, res) => {
  res.json({ payload: req.user });
});

module.exports = router;