import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';

const LanguagesModel = database.define('languages', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
});

export { LanguagesModel };
