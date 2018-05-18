<<<<<<< HEAD
module.exports = function(sequelize, DataType){
    var talent = sequelize.define("talent", {
=======
module.exports = function(sequelize, DataTypes){
    var tables = sequelize.define("talent",{
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855
        talentId: {
            type: DataType.INTEGER
        },
        name: {
<<<<<<< HEAD
            type: DataType.STRING,
=======
            type: DataTypes.STRING,
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        phone: {
<<<<<<< HEAD
            type: DataType.INTEGER,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
=======
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        address: {
<<<<<<< HEAD
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
=======
            type: DataTypes.TINYTEXT,
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
            type: DataTypes.SET,
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
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855
        },


        
    },
{
    freezeTableName: true,
    tableName: "talent"
},
{
<<<<<<< HEAD
    timestamps: true
=======
    timestamps: false
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855
});
    return talent;
};