'use strict';


module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    Album.belongsToMany(models.Photo, {through: models.Photo_Album, foreignKey: 'albumId', otherKey: 'photoId'})
    Album.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Album;
};
