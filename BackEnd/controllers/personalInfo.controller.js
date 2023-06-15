import { PersonalInfoModel } from "../models/personalInfo.js";

// Controlador para criar uma nova entrada de "Personal Info"
export const createPersonalInfo = async (req, res) => {
  try {
    const { nome, descricao, email, telefone } = req.body;

    const personalInfo = await PersonalInfoModel.create({
      nome,
      descricao,
      email,
      telefone,
    });

    return res.json(personalInfo);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao criar entrada de Personal Info" });
  }
};

// Controlador para obter todas as entradas de "Personal Info"
export const getPersonalInfo = async (req, res) => {
  try {
    const personalInfos = await PersonalInfoModel.findAll();

    return res.json(personalInfos);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao obter entradas de Personal Info" });
  }
};

// Controlador para atualizar uma entrada de "Personal Info" por ID
export const updatePersonalInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao, email, telefone } = req.body;

    const personalInfo = await PersonalInfoModel.findByPk(id);

    if (!personalInfo) {
      return res
        .status(404)
        .json({ message: "Entrada de Personal Info não encontrada" });
    }

    await personalInfo.update({
      nome,
      descricao,
      email,
      telefone,
    });

    return res.json(personalInfo);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao atualizar entrada de Personal Info" });
  }
};

// Controlador para excluir uma entrada de "Personal Info" por ID
export const deletePersonalInfo = async (req, res) => {
  try {
    const { id } = req.params;

    const personalInfo = await PersonalInfoModel.findByPk(id);

    if (!personalInfo) {
      return res
        .status(404)
        .json({ message: "Entrada de Personal Info não encontrada" });
    }

    await personalInfo.destroy();

    return res.json({
      message: "Entrada de Personal Info excluída com sucesso",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao excluir entrada de Personal Info" });
  }
};
