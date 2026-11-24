import jwt from 'jsonwebtoken';

const ADMIN_USER = {
  id: 1,
  email: 'admin@gmail.com',
  password: '123456',
  role: 'admin'
};

export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Debe ingresar email y contraseña.' });
  }

  if (email !== ADMIN_USER.email || password !== ADMIN_USER.password) {
    return res.status(401).json({ error: 'Credenciales inválidas.' });
  }

  const token = jwt.sign(
    { id: ADMIN_USER.id, email: ADMIN_USER.email, role: ADMIN_USER.role },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );

  res.status(200).json({
    message: 'Inicio de sesión exitoso',
    token
  });
};