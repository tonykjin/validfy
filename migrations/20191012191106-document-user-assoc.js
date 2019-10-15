
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Documents',
    'user_id',
    {
      type: Sequelize.UUID,
      references: {
        model: 'Users',
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
  ),
  down: (queryInterface) => queryInterface.removeColumn(
    'Documents',
    'user_id',
  ),
};
