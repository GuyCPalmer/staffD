/////just started editing from a template///

'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('event_owners', {
      eventOwnerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
      },
      eventOwner: {
        type: DataType.STRING,
        allowNull: false,
      },
      phone: {
        type: DataType.INTEGER,
            allowNull: false
      },
      coordinator: {
        type: DataType.STRING,
        allowNull: false
    },
    ownerAddress: {
        type: DataType.TEXT,
        allowNull: false,
    },
    eventsOwned: {
        type: DataType.STRING
    },
    invitationsSent: {
        type: DataType.STRING
    },
    invConfirmed: {
        type: DataType.STRING
    },      
   });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('event_owners');
  }
};