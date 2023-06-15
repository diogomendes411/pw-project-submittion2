import { INTEGER, STRING } from "sequelize";
import { database } from "../config/context/database.js";

const InterestSubjectsModel = database.define("interest_Subjects", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nameMainSubj: {
    type: STRING,
    allowNull: false,
  },
  nameSubSubj: {
    type: STRING,
    allowNull: false,
  },
});

export { InterestSubjectsModel };
