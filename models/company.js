module.exports = function(sequelize, Sequelize) {
    var company = sequelize.define('company', {
        eventOwnerId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        }, 
        eventOwner: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        phone: {

        },
        email: {

        },
        address: {

        },
        photo: {
            
        }
    });
}; // end of 