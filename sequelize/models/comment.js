'use strict';
const User = require('./user');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
    }
  }
  Comment.init({
    body: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};