'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo_Album = sequelize.define('Photo_Album', {
    photoId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  Photo_Album.associate = function(models) {
    Photo_Album.belongsTo(models.Album, {foreignKey: 'albumId'})
    Photo_Album.belongsTo(models.Photo, {foreignKey: 'photoId'})
  };
  return Photo_Album;
};
