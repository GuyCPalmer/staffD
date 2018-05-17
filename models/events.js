module.exports = function(sequelize, Sequelize){
    var events = sequelize.define("events",{
        eventId: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        eventOwner: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        eventDateTimeStart: {
            type: Sequelize.DATE,
            allowNull: false
        },
        eventDateTimeEnd: {
            type: Sequelize.DATE,
            allowNull: false
        },
        locationAddress: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        locationSpecialInst: {
            type: Sequelize.TEXT
        },
        onsiteContact: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        staffd: {
            type: Sequelize.BOOLEAN
        },
        invitationsSent: {
            type: Sequelize.STRING
        },
        invConfirmed: {
            type: Sequelize.STRING
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