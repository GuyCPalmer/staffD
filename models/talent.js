<<<<<<< HEAD
module.exports = function(sequelize, DataTypes){
    var talent = sequelize.define("talent",{
=======
module.exports = function (sequelize, DataTypes) {
    var talent = sequelize.define("talent", {
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
        talentId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
<<<<<<< HEAD
        name: {
=======
        talentName: {
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
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
        address: {
=======
        talentAddress: {
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
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

        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT
=======
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
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
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
=======
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
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
    timestamps: false
});
=======
        {
            freezeTableName: true,
            tableName: "talent"
        },
        {
            timestamps: true
        });
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
    return talent;
};
