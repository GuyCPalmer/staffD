/////just started editing from a template///

module.exports = {
  up: function(queryInterface, DataTypes) {
    return queryInterface.createTable('event_owners', {
      talentId: {
        type: DataTypes.INTEGER
    },
    talentName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    talentAddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    socSec: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    driverLic: {
        type: DataTypes.BOOLEAN,
    },
    driverLicNum: {
        type: DataTypes.INTEGER
    },
    tabc: {
        type: DataTypes.BOOLEAN
    },
    tabcNum: {
        type: DataTypes.INTEGER
    },
    jobBar: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    jobServer: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    jobSales: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    jobModel: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    jobSecurity: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    bio: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER
    },
    invitationsAvail: {
        type: DataTypes.STRING
    },
    currentEvents: {
        type: DataTypes.STRING
    },
    previousEvents: {
        type: DataTypes.STRING
    },      
   });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('event_owners');
  }
};