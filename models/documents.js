
module.exports = (sequelize, DataTypes) => {
  const Documents = sequelize.define('Documents', {
    status: DataTypes.ENUM('draft', 'negotiation', 'needsAttention', 'pending', 'approvedInitial', 'approvedFinal'),
    type: DataTypes.STRING,
  }, {});
  Documents.associate = () => {
  };
  return Documents;
};
