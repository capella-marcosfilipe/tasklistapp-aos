import Tarefa from "../models/Tarefa.js";

let tarefas = [];

export const criarTarefa = (req, res) => {
  try {
    const { descricao, concluida } = req.body;

    if (!descricao) {
      return res.status(400).json({ error: "A descrição da tarefa é obrigatória." });
    }

    const novaTarefa = new Tarefa(descricao, concluida);
    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

export const listarTarefas = (req, res) => {
    res.status(200).json(tarefas)
}

export const listarTarefasPorId = (req, res) => {
  const { objectId } = req.params;

  const tarefaEncontrada = tarefas.find(
    (tarefa) => tarefa.objectId === objectId
  );

  if (!tarefaEncontrada) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  res.status(200).json(tarefaEncontrada);
};

export const atualizarTarefa = (req, res) => {
  const { objectId } = req.params;
  const { descricao, concluida } = req.body;

  const tarefaEncontrada = tarefas.find(
    (tarefa) => tarefa.objectId === objectId
  );

  if (!tarefaEncontrada) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  if (descricao) {
    tarefaEncontrada.descricao = descricao;
  }

  if ("concluida" in req.body) {
    tarefaEncontrada.concluida = concluida;
  }

  res.status(200).json(tarefaEncontrada);
};

export const deleteTarefa = (req, res) => {
  const { objectId } = req.params;

  const tarefaIndex = tarefas.findIndex(
    (tarefa) => tarefa.objectId === objectId
  );

  if (tarefaIndex === -1) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  tarefas.splice(tarefaIndex, 1);

  res.status(204).send();
};