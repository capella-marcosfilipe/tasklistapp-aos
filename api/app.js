import express from "express";
import "dotenv/config";
import cors from "cors";
import tarefas from './routes/tarefasRoutes.js';


const app = express()
app.set("trust proxy", true);

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send(`Bem-vindo ao Express de Marcos Capella!`);
});

app.use("/tarefas", tarefas);

// A porta do servidor, com fallback para 3000
const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});