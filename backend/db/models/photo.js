'use strict';

const photo_album = require("./photo_album");

module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User, {foreignKey: 'userId'})
    Photo.hasMany(models.Photo_Album, {foreignKey: 'photoId', onDelete: 'cascade', hooks: true})
    Photo.belongsToMany(models.Album, {through: models.Photo_Album, foreignKey: 'photoId', otherKey: 'albumId'})
  };
  return Photo;
};
