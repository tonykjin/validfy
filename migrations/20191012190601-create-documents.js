
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Documents', {
    id: {
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    status: {
      type: Sequelize.ENUM('draft', 'negotiation', 'needsAttention', 'pending', 'approvedInitial', 'approvedFinal'),
    },
    type: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Documents'),
};
