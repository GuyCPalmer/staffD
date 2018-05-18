module.exports = function(sequelize, DataType){
    var talent = sequelize.define("talent", {
        talentId: {
            type: DataType.INTEGER
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        phone: {
            type: DataType.INTEGER,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        address: {
            type: DataType.TEXT,
            allowNull: false,
        },
        socSec: {
            type: DataType.INTEGER,
            allowNull: false
        },
        driverLic: {
            type: DataType.BOOLEAN,
        },
        driverLicNum: {
            type: DataType.INTEGER
        },
        tabc: {
            type: DataType.BOOLEAN
        },
        tabcNum: {
            type: DataType.INTEGER
        },

        type: {
            type: DataType.SET,
            allowNull: false
        },
        bio: {
            type: DataType.TEXT
        },
        rating: {
            type: DataType.INTEGER
        },
        invitationsAvail: {
            type: DataType.STRING
        },
        currentEvents: {
            type: DataType.STRING
        },
        previousEvents: {
            type: DataType.STRING
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