<<<<<<< HEAD
module.exports = function(sequelize, DataType){
    var eventOwners = sequelize.define("event_owners",{
        eventOwnerId: {
            type: DataType.INTEGER,
=======
module.exports = function(sequelize, Sequelize){
    var event_owners = sequelize.define("event_owners",{
        eventOwnerId: {
            type: Sequelize.INTEGER,
>>>>>>> f9cf6b2a530d6456643ada6d5b3ecf3c02027ccc
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
            type: Sequelize.STRING,
>>>>>>> f9cf6b2a530d6456643ada6d5b3ecf3c02027ccc
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        phone: {
<<<<<<< HEAD
            type: DataType.INTEGER,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
=======
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
>>>>>>> f9cf6b2a530d6456643ada6d5b3ecf3c02027ccc
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
<<<<<<< HEAD
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
=======
        address: {
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
>>>>>>> f9cf6b2a530d6456643ada6d5b3ecf3c02027ccc
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