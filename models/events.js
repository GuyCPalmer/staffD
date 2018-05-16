module.exports = function(sequelize, DataTypes){
    var tables = sequelize.define("events",{
        eventId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
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
            type: DataTypes.DATETIME,
            allowNull: false
        },
        eventDateTimeEnd: {
            type: DataTypes.DATETIME,
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
            type: DataTypes.INT,
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