import Router from "express";
import {
  createAcademicEducation,
  getAcademicEducation,
  updateAcademicEducation,
  deleteAcademicEducation,
} from "../controllers/academicEdu.controller.js";

const academicEducationRoutes = Router();

// Rota para criar uma nova entrada de "Academic Education"
academicEducationRoutes.post("/create", createAcademicEducation);

// Rota para obter todas as entradas de "Academic Education"
academicEducationRoutes.get("/get", getAcademicEducation);

// Rota para atualizar uma entrada de "Academic Education" por ID
academicEducationRoutes.put("/:id", updateAcademicEducation);

// Rota para excluir uma entrada de "Academic Education" por ID
academicEducationRoutes.delete("/:id", deleteAcademicEducation);

export { academicEducationRoutes };
