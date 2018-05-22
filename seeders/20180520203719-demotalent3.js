'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('talent', [{
        talentId: 1313131,
        talentName: 'A Adams',
        phone: 5124444,
        email: 'demo3@demo3.com',
        talentAddress: "999 Wat Road, Austin, Tx 78777",
        socSec: 444444,
        driverLic: false,
        driverLicNum: null,
        tabc: true,
        tabcNum: 444444,
        jobBar: false,
        jobServer: false,
        jobSales: false,
        jobModel: true,
        jobSecurity: false,
        bio: 'I am a model.',
        rating: 3

      }], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('talent', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
