import { check, validationResult } from "express-validator";
import Usuario from "../models/Usuarios.js";

const createUser = async (req, res) => {
  await check("name")
    .notEmpty()
    .withMessage("El nombre no puede ir vacio")
    .run(req);
  await check("password")
    .notEmpty()
    .withMessage("El Contraseña no puede ir vacia")
    .run(req);
  await check("email")
    .isEmail()
    .withMessage("eso no parece un correo electronico")
    .run(req);

  let resultado = validationResult(req);

  if (!resultado.isEmpty()) {
    res.json(resultado.array());
  }
  const existeUsuario = await Usuario.findOne({
    where: { email: req.body.email },
  });
  if (existeUsuario) {
    res.json("Este Usuario ya existe");
    return;
  }

  const usuario = await Usuario.create(req.body);
  res.json(usuario);
};

const getUser = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json({ usuarios });
};

export { createUser, getUser };
