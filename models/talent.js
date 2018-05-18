<<<<<<< HEAD
module.exports = function(sequelize, DataTypes){
    var talent = sequelize.define("talent", {
        talentId: {
            type: DataTypes.INTEGER
        },
        talentName: {
            type: DataTypes.STRING,
=======
module.exports = function(sequelize, Sequelize){
    var talent = sequelize.define("talent",{
        talentId: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING,
>>>>>>> f9cf6b2a530d6456643ada6d5b3ecf3c02027ccc
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        phone: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
<<<<<<< HEAD
        talentAddress: {
            type: DataTypes.STRING,
=======
        address: {
            type: Sequelize.STRING,
>>>>>>> f9cf6b2a530d6456643ada6d5b3ecf3c02027ccc
            allowNull: false,
        },
        socSec: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        driverLic: {
            type: Sequelize.BOOLEAN,
        },
        driverLicNum: {
            type: Sequelize.INTEGER
        },
        tabc: {
            type: Sequelize.BOOLEAN
        },
        tabcNum: {
            type: Sequelize.INTEGER
        },

        type: {
<<<<<<< HEAD
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.STRING
=======
            type: Sequelize.STRING,
            allowNull: false
        },
        bio: {
            type: Sequelize.STRING
>>>>>>> f9cf6b2a530d6456643ada6d5b3ecf3c02027ccc
        },
        rating: {
            type: Sequelize.INTEGER
        },
        invitationsAvail: {
            type: Sequelize.STRING
        },
        currentEvents: {
            type: Sequelize.STRING
        },
        previousEvents: {
            type: Sequelize.STRING
        },


        
    },
{
    freezeTableName: true,
    tableName: "talent"
},
{
    timestamps: true
});
    return talent;
};