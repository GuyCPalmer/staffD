

'use strict';
module.exports = {
  up: function(queryInterface, DataTypes) {
    return queryInterface.createTable('events', {
        eventId: {
            type: DataType.STRING,
            allowNull: false,
        },
        eventOwner: {
            type: DataType.STRING,
            allowNull: false,
        },
        eventDateTimeStart: {
            type: DataType.DATE,
            allowNull: false
        },
        eventDateTimeEnd: {
            type: DataType.DATE,
            allowNull: false
        },
        locationAddress: {
            type: DataType.STRING,
            allowNull: false,
        },
        locationSpecialInst: {
            type: DataType.STRING
        },
        onsiteContact: {
            type: DataType.INTEGER,
            allowNull: false
        },
        staffd: {
            type: DataType.BOOLEAN
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