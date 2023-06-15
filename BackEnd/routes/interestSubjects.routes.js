import Router from "express";
import {
  createInterestSubjects,
  getInterestSubjects,
  updateInterestSubjects,
  deleteInterestSubjects,
} from "../controllers/interestSubjects.controller.js";

const interestSubjectsRoutes = Router();

// Rota para criar uma nova entrada de "Interest Subjects"
interestSubjectsRoutes.post("/create", createInterestSubjects);

// Rota para obter todas as entradas de "Interest Subjects"
interestSubjectsRoutes.get("/get", getInterestSubjects);

// Rota para atualizar uma entrada de "Interest Subjects" por ID
interestSubjectsRoutes.put("/:id", updateInterestSubjects);

// Rota para excluir uma entrada de "Interest Subjects" por ID
interestSubjectsRoutes.delete("/:id", deleteInterestSubjects);

export { interestSubjectsRoutes };
