module.exports = function(sequelize, Sequelize){
    var event_owners = sequelize.define("event_owners",{
        eventOwnerId: {
            type: Sequelize.INTEGER,
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
        phone: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        coordinator: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ownerAddress: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        eventsOwned: {
            type: Sequelize.STRING
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
    tableName: "event_owners"
},
{
    timestamps: true
});
    return event_owners;
};