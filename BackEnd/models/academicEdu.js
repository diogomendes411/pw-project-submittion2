import { INTEGER, STRING } from "sequelize";
import { database } from "../config/context/database.js";

const AcademicEducationModel = database.define("academicEdu", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  institution: {
    type: STRING,
    allowNull: false,
  },
  courseName: {
    type: STRING,
    allowNull: false,
  },
  courseType: {
    type: STRING,
    allowNull: false,
  },
});

export { AcademicEducationModel };
