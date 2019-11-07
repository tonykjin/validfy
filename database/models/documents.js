module.exports = (sequelize, DataTypes) => {
  const Documents = sequelize.define('Documents', {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    docType: DataTypes.ENUM('property equipment lease', 'general employment contract', 'nda', 'security agreement', 'partnership agreement', 'Indemnity', 'bill of sale', 'purchase order', 'noncompete agreement', 'independent contractor agreement'),
    ownedBy: DataTypes.CHAR,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  }, {});
  Documents.associate = (models) => {
    // associations can be defined here
  };
  return Documents;
};
