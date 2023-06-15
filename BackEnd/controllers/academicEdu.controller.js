import { AcademicEducationModel } from "../models/academicEdu.js";

// Controlador para criar uma nova entrada de "Academic Education"
export const createAcademicEducation = async (req, res) => {
  try {
    const { institution, courseName, courseType } = req.body;

    const academicEducation = await AcademicEducationModel.create({
      institution,
      courseName,
      courseType,
    });

    return res.json(academicEducation);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao criar entrada de Academic Education" });
  }
};

// Controlador para obter todas as entradas de "Academic Education"
export const getAcademicEducation = async (req, res) => {
  try {
    const academicEducations = await AcademicEducationModel.findAll();

    return res.json(academicEducations);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao obter entradas de Academic Education" });
  }
};

// Controlador para atualizar uma entrada de "Academic Education" por ID
export const updateAcademicEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const { institution, courseName, courseType } = req.body;

    const academicEducation = await AcademicEducationModel.findByPk(id);

    if (!academicEducation) {
      return res
        .status(404)
        .json({ message: "Entrada de Academic Education não encontrada" });
    }

    await academicEducation.update({
      institution,
      courseName,
      courseType,
    });

    return res.json(academicEducation);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao atualizar entrada de Academic Education" });
  }
};

// Controlador para excluir uma entrada de "Academic Education" por ID
export const deleteAcademicEducation = async (req, res) => {
  try {
    const { id } = req.params;

    const academicEducation = await AcademicEducationModel.findByPk(id);

    if (!academicEducation) {
      return res
        .status(404)
        .json({ message: "Entrada de Academic Education não encontrada" });
    }

    await academicEducation.destroy();

    return res.json({
      message: "Entrada de Academic Education excluída com sucesso",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao excluir entrada de Academic Education" });
  }
};
