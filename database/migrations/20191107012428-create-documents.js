module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Documents', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      docType: {
        allowNull: false,
        type: Sequelize.ENUM('property equipment lease', 'general employment contract', 'nda', 'security agreement', 'partnership agreement', 'Indemnity', 'bill of sale', 'purchase order', 'noncompete agreement', 'independent contractor agreement'),
      },
      ownedBy: {
        type: Sequelize.CHAR,
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Documents');
  },
};
