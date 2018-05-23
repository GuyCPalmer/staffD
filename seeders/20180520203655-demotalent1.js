'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('talent', [{
        talentId: 1212121,
        talentName: 'D Dell',
        phone: 5129999,
        email: 'demo1@demo1.com',
        talentAddress: "123 RuhRoh, Austin, Tx 78777",
        socSec: 999999,
        driverLic: false,
        driverLicNum: null,
        tabc: true,
        tabcNum: 1111111,
        jobBar: false,
        jobServer: true,
        jobSales: false,
        jobModel: false,
        jobSecurity: false,
        bio: 'I am a server.',
        rating: 2

      }], {});
   },

  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('talent', [{

        talentId: 111111111,
        talentName: 'C Clark',
        phone: 5124444,
        email: 'demo4@demo4.com',
        talentAddress: "444 InTHESameSeeder Road, Austin, Tx 78777",
        socSec: 1111111111,
        driverLic: false,
        driverLicNum: null,
        tabc: true,
        tabcNum: 1111111,
        jobBar: true,
        jobServer: true,
        jobSales: true,
        jobModel: true,
        jobSecurity: true,
        bio: 'I am everything.',
        rating: 1

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


