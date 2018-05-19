<<<<<<< HEAD
module.exports = function(sequelize, DataTypes){
    var event_owners = sequelize.define("event_owners",{
        eventOwnerId: {
            type: DataTypes.INTEGER,
=======
module.exports = function(sequelize, DataType){
    var eventOwners = sequelize.define("event_owners",{
        eventOwnerId: {
            type: DataType.INTEGER,
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
        phone: {
<<<<<<< HEAD
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
=======
            type: DataType.INTEGER,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
<<<<<<< HEAD
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        eventsOwned: {
            type: DataTypes.STRING
        },
        invitationsSent: {
            type: DataTypes.STRING
        },
        invConfirmed: {
            type: DataTypes.STRING
=======
        coordinator: {
            type: DataType.STRING,
            allowNull: false
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
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
        },      
    },
{
    freezeTableName: true,
    tableName: "event_owners"
},
{
    timestamps: false
});
<<<<<<< HEAD
    return event_owners;
};
=======
    return eventOwners;
};
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
