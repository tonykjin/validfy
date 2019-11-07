module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      type: Sequelize.UUID,
    },
    password: DataTypes.CHAR,
    firstName: DataTypes.CHAR,
    lastName: DataTypes.CHAR,
    repCompany: DataTypes.CHAR,
    createdAt: {
      allowNull: false,
      defaultValue: Sequelize.NOW,
      type: Sequelize.DATE,
    },
    updatedAt: DataTypes.DATE,
  }, {});
  Users.associate = (models) => {
    Users.hasMany(models.Documents);
  };
  return Users;
};