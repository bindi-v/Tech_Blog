'use strict';
const User = require('./user');
const Comment = require('./comment');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });

      Post.hasMany(Comment, {
        foreignKey: 'postId',
        onDelete: 'CASCADE'
      });
    }
  }
  Post.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};