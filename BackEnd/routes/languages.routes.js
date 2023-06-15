import Router from "express";
import {
  createLanguages,
  getLanguages,
  updateLanguages,
  deleteLanguages,
} from "../controllers/languages.controller.js";

const languagesRoutes = Router();

// Rota para criar uma nova entrada de "Languages"
languagesRoutes.post("/create", createLanguages);

// Rota para obter todas as entradas de "Languages"
languagesRoutes.get("/", getLanguages);

// Rota para atualizar uma entrada de "Languages" por ID
languagesRoutes.put("/:id", updateLanguages);

// Rota para excluir uma entrada de "Languages" por ID
languagesRoutes.delete("/:id", deleteLanguages);

export { languagesRoutes };
