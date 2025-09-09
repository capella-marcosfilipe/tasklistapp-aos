import { Router } from "express";
import { atualizarTarefa, criarTarefa, deleteTarefa, listarTarefas, listarTarefasPorId } from "../controllers/tarefasController.js";

const router = Router();

router
  .get("/", listarTarefas)           
  .post("/", criarTarefa)            
  .get("/:objectId", listarTarefasPorId)  
  .put("/:objectId", atualizarTarefa)     
  .delete("/:objectId", deleteTarefa); 

export default router;