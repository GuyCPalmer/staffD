'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('talent', [{
        talentId: 6666666,
        talentName: 'B Baker',
        phone: 5122222,
        email: 'demo2@demo2.com',
        talentAddress: "22 2nd Road, Austin, Tx 78777",
        socSec: 2222222,
        driverLic: true,
        driverLicNum: 222222,
        tabc: false,
        tabcNum: null,
        jobBar: false,
        jobServer: false,
        jobSales: true,
        jobModel: true,
        jobSecurity: true,
        bio: 'I am sales, model, and security.',
        rating: 5

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
