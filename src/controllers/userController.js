import { check, validationResult } from "express-validator";
import { Usuario } from "../models/index.js";
import { generateJWT } from "../helpers/tokens.js";

const createUser = async (req, res) => {
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

const login = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) {
    return res.status(400).send("El usuario no existe!");
  }
  const verify = await usuario.verificarPassword(password);
  if (!verify) {
    return res.status(400).send("Contraseña incorrecta!");
  }
  const token = generateJWT({ id: usuario.id });
  return res.status(201).send(token);
};

export { createUser, getUser, login };
