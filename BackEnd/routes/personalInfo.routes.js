import Router from "express";
import {
  createPersonalInfo,
  getPersonalInfo,
  updatePersonalInfo,
  deletePersonalInfo,
} from "../controllers/personalInfo.controller.js";

const personalInfoRoutes = Router();

// Rota para criar uma nova entrada de "Personal Info"
personalInfoRoutes.post("/create", createPersonalInfo);

// Rota para obter todas as entradas de "Personal Info"
personalInfoRoutes.get("/", getPersonalInfo);

// Rota para atualizar uma entrada de "Personal Info" por ID
personalInfoRoutes.put("/:id", updatePersonalInfo);

// Rota para excluir uma entrada de "Personal Info" por ID
personalInfoRoutes.delete("/:id", deletePersonalInfo);

export { personalInfoRoutes };
