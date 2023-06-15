import { InterestSubjectsModel } from "../models/interestSubjects.js";

// Controlador para criar uma nova entrada de "Interest Subjects"
export const createInterestSubjects = async (req, res) => {
  try {
    const { nameMainSubj, nameSubSubj } = req.body;

    const interestSubjects = await InterestSubjectsModel.create({
      nameMainSubj,
      nameSubSubj,
    });

    return res.json(interestSubjects);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao criar entrada de Interest Subjects" });
  }
};

// Controlador para obter todas as entradas de "Interest Subjects"
export const getInterestSubjects = async (req, res) => {
  try {
    const interestSubjects = await InterestSubjectsModel.findAll();

    return res.json(interestSubjects);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao obter entradas de Interest Subjects" });
  }
};

// Controlador para atualizar uma entrada de "Interest Subjects" por ID
export const updateInterestSubjects = async (req, res) => {
  try {
    const { id } = req.params;
    const { nameMainSubj, nameSubSubj } = req.body;

    const interestSubjects = await InterestSubjectsModel.findByPk(id);

    if (!interestSubjects) {
      return res
        .status(404)
        .json({ message: "Entrada de Interest Subjects não encontrada" });
    }

    await interestSubjects.update({
      nameMainSubj,
      nameSubSubj,
    });

    return res.json(interestSubjects);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao atualizar entrada de Interest Subjects" });
  }
};

// Controlador para excluir uma entrada de "Interest Subjects" por ID
export const deleteInterestSubjects = async (req, res) => {
  try {
    const { id } = req.params;

    const interestSubjects = await InterestSubjectsModel.findByPk(id);

    if (!interestSubjects) {
      return res
        .status(404)
        .json({ message: "Entrada de Interest Subjects não encontrada" });
    }

    await interestSubjects.destroy();

    return res.json({
      message: "Entrada de Interest Subjects excluída com sucesso",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao excluir entrada de Interest Subjects" });
  }
};
