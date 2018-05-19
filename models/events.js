<<<<<<< HEAD
module.exports = function(sequelize, DataType){

    var events = sequelize.define("events",{
        eventId: {
            type: DataType.STRING,
=======
module.exports = function(sequelize, DataTypes){
    var events = sequelize.define("events",{
        eventId: {
            type: DataTypes.STRING,
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        eventOwner: {
<<<<<<< HEAD
            type: DataType.STRING,
=======
            type: DataTypes.STRING,
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        eventDateTimeStart: {
<<<<<<< HEAD
            type: DataType.DATE,
            allowNull: false
        },
        eventDateTimeEnd: {
            type: DataType.DATE,
            allowNull: false
        },
        locationAddress: {
            type: DataType.STRING,
            allowNull: false,
        },
        locationSpecialInst: {
            type: DataType.STRING
        },
        onsiteContact: {
            type: DataType.INTEGER,
=======
            type: DataTypes.DATE,
            allowNull: false
        },
        eventDateTimeEnd: {
            type: DataTypes.DATE,
            allowNull: false
        },
        locationAddress: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        locationSpecialInst: {
            type: DataTypes.TEXT
        },
        onsiteContact: {
            type: DataTypes.INTEGER,
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
            allowNull: false
        },
        staffd: {
<<<<<<< HEAD
            type: DataType.BOOLEAN
        },
        invitationsSent: {
            type: DataType.STRING
        },
        invConfirmed: {
            type: DataType.STRING
=======
            type: DataTypes.BOOLEAN
        },
        invitationsSent: {
            type: DataTypes.STRING
        },
        invConfirmed: {
            type: DataTypes.STRING
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
        },      
    },
{
    freezeTableName: true,
    tableName: "events"
},
{
    timestamps: false
});
    return events;
};
