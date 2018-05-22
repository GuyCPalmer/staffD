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
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }      
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
