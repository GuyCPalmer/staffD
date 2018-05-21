module.exports = function(sequelize, DataType){

    var events = sequelize.define("events",{
        eventId: {
            type: DataType.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        eventOwner: {
            type: DataType.STRING,
module.exports = function(sequelize, DataTypes){
    var events = sequelize.define("events",{
        eventId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        eventOwner: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        eventDateTimeStart: {
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
            allowNull: false
        },
        staffd: {
            type: DataType.BOOLEAN
        },
        invitationsSent: {
            type: DataType.STRING
        },
        invConfirmed: {
            type: DataType.STRING
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
            allowNull: false
        },
        staffd: {
            type: DataTypes.BOOLEAN
        },
        invitationsSent: {
            type: DataTypes.STRING
        },
        invConfirmed: {
            type: DataTypes.STRING
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
