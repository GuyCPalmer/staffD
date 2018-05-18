
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
        },      
    },
{
    freezeTableName: true,
    tableName: "events"
},
{
    timestamps: true
});
    return events;
};