import { validationResult, check } from "express-validator";

const validateUserFields = async (req, res, next) => {
  // Validar el campo 'name'
  await check("name")
    .notEmpty()
    .withMessage("El nombre no puede ir vacío")
    .run(req);

  // Validar el campo 'password'
  await check("password")
    .notEmpty()
    .withMessage("La contraseña no puede ir vacía")
    .run(req);

  // Validar el campo 'email'
  await check("email")
    .isEmail()
    .withMessage("Eso no parece un correo electrónico")
    .run(req);

  // Verificar si hay errores de validación
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Si no hay errores, continuar con el siguiente middleware
  next();
};

export default validateUserFields;
