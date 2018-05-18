'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'members',
      {
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: Sequelize.STRING
      })
      .then(() => queryInterface.createTable(
        'memberEmailVerificationToken',
        {
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE,
          expires_at: Sequelize.DATE,
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          value: {
            type: Sequelize.STRING,
            allowNull: false
          }, 
          has_been_used: {
            type: Sequelize.BOOLEAN,
            allowNull: false
          }, 
          memberId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'members',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
          }
        }
      ));
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('memberEmailVerificationToken')
      .then(() => queryInterface.dropTable('members'));
  }
};