import { Router } from "express";
import { atualizarTarefa, criarTarefa, deleteTarefa, listarTarefas, listarTarefasPorId } from "../controllers/tarefasController.js";

const router = Router();

router
  .get("/tarefas", listarTarefas)
  .post("/tarefas", criarTarefa)
  .get("/tarefas/:objectId", listarTarefasPorId)
  .put("/tarefas/:objectId", atualizarTarefa)
  .delete("/tarefas/:objectId", deleteTarefa)

export default router;