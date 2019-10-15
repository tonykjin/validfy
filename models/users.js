
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    hashedPassword: 'VARCHAR',
    hashedLicense: 'VARCHAR',
  }, {});
  Users.associate = (models) => {
    Users.hasMany(models.Documents);
  };
  return Users;
};
