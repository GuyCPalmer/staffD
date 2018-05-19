<<<<<<< HEAD
module.exports = function(sequelize, DataTypes){
    var events = sequelize.define("events",{
        eventId: {
            type: DataTypes.STRING,
=======
module.exports = function(sequelize, DataType){

    var events = sequelize.define("events",{
        eventId: {
            type: DataType.STRING,
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        eventOwner: {
<<<<<<< HEAD
            type: DataTypes.STRING,
=======
            type: DataType.STRING,
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        eventDateTimeStart: {
<<<<<<< HEAD
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
=======
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
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
            allowNull: false
        },
        staffd: {
<<<<<<< HEAD
            type: DataTypes.BOOLEAN
        },
        invitationsSent: {
            type: DataTypes.STRING
        },
        invConfirmed: {
            type: DataTypes.STRING
=======
            type: DataType.BOOLEAN
        },
        invitationsSent: {
            type: DataType.STRING
        },
        invConfirmed: {
            type: DataType.STRING
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
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
