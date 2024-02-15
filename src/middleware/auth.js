import jwt from "jsonwebtoken";

const protegerRuta = async (req, res, next) => {
  const _authHeader = req.headers["authorization"];

  if (!_authHeader) {
    res.status(401).send("Se requiere autenticación");
  }
  const _token = _authHeader.split(" ")[1];
  try {
    jwt.verify(_token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).send("Token no valido");
  }
  next();
};

export default protegerRuta;
