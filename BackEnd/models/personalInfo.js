import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';

const PersonalInfoModel = database.define('personal_info', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  phone: {
    type: STRING,
    allowNull: false,
  },
});

export { PersonalInfoModel };
