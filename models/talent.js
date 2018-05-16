module.exports = function(sequelize, DataTypes){
    var talent = sequelize.define("talent",{
        talentId: {
            type: DataTypes.INTEGER
        },
        name: {
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
        address: {
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

        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT
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
    timestamps: false
});
    return talent;
};