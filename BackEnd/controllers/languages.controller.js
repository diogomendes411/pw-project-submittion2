import { LanguagesModel } from "../models/languages.js";

// Controlador para criar uma nova entrada de "Languages"
export const createLanguages = async (req, res) => {
  try {
    const { name } = req.body;

    const language = await LanguagesModel.create({
      name,
    });

    return res.json(language);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao criar entrada de Languages" });
  }
};

// Controlador para obter todas as entradas de "Languages"
export const getLanguages = async (req, res) => {
  try {
    const languages = await LanguagesModel.findAll();

    return res.json(languages);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao obter entradas de Languages" });
  }
};

// Controlador para atualizar uma entrada de "Languages" por ID
export const updateLanguages = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const language = await LanguagesModel.findByPk(id);

    if (!language) {
      return res
        .status(404)
        .json({ message: "Entrada de Languages não encontrada" });
    }

    await language.update({
      name,
    });

    return res.json(language);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao atualizar entrada de Languages" });
  }
};

// Controlador para excluir uma entrada de "Languages" por ID
export const deleteLanguages = async (req, res) => {
  try {
    const { id } = req.params;

    const language = await LanguagesModel.findByPk(id);

    if (!language) {
      return res
        .status(404)
        .json({ message: "Entrada de Languages não encontrada" });
    }

    await language.destroy();

    return res.json({ message: "Entrada de Languages excluída com sucesso" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao excluir entrada de Languages" });
  }
};
