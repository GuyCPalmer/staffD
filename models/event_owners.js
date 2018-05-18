module.exports = function(sequelize, DataType){
    var eventOwners = sequelize.define("event_owners",{
        eventOwnerId: {
            type: DataType.INTEGER,
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
        phone: {
            type: DataType.INTEGER,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        coordinator: {
            type: DataType.STRING,
            allowNull: false,
        },
        ownerAddress: {
            type: DataType.TEXT,
            allowNull: false,
        },
        eventsOwned: {
            type: DataType.STRING
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
    tableName: "event_owners"
},
{
    timestamps: true
});
    return eventOwners;
};