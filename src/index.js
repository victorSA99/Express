import express from "express";
import { routerUser } from "./routes/index.js";
import db from "./config/db.js";

const app = express();

app.use(express.json());

//conexion a la base de datos
try {
  await db.authenticate();
  db.sync();
  console.log("Conexion correcta a la base de datos");
} catch (error) {
  console.log(error);
}

//routing
app.use("/", routerUser);

const port = 3000;
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
