module.exports = function(sequelize, DataTypes){
    var talent = sequelize.define("talent", {
        talentId: {
            type: DataTypes.INTEGER
        },
        talentName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
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