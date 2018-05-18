'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('talent', [{
        talentId: '',
        talentName: 'J Doe',
        phone: 5122222222,
        email: 'demo@demo.com',
        talentAddress: "999 Ugly Road, Austin, Tx 78777",
        socSec: 3334445555,
        driverLic: true,
        driverLicNum: 88888888,
        tabc: true,
        tabcNum: 9999999999999,
        jobBar: true,
        jobServer: false,
        jobSales: true,
        jobModel: false,
        jobSecurity: false,
        bio: 'I like dogs. I like tending bar.',
        rating: 4

      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('talent', null, {});
  }
};