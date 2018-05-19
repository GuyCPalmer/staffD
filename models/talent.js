<<<<<<< HEAD
module.exports = function (sequelize, DataTypes) {
    var talent = sequelize.define("talent", {
=======
module.exports = function(sequelize, DataTypes){
    var talent = sequelize.define("talent",{
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
        talentId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
<<<<<<< HEAD
        talentName: {
=======
        name: {
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
            type: DataTypes.STRING,
            allowNull: false,
            validate:
                {
                    len: [1, 140]
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
                    len: [1, 140]
                }
        },
<<<<<<< HEAD
        talentAddress: {
=======
        address: {
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
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
<<<<<<< HEAD
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
=======

        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
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
<<<<<<< HEAD
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
=======
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        } 



    },
<<<<<<< HEAD
        {
            freezeTableName: true,
            tableName: "talent"
        },
        {
            timestamps: true
        });
=======
{
    freezeTableName: true,
    tableName: "talent"
},
{
    timestamps: false
});
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
    return talent;
};
