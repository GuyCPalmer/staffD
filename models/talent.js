module.exports = function(sequelize, Sequelize){
    var talent = sequelize.define("talent",{
        talentId: {
            type: DataTypes.INTEGER
        },
        name: {
            type: Sequelize.STRING,
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
        address: {
            type: Sequelize.TINYTEXT,
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
            type: Sequelize.SET,
            allowNull: false
        },
        bio: {
            type: Sequelize.TEXT
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