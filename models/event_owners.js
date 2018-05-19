<<<<<<< HEAD
module.exports = function(sequelize, DataType){
    var eventOwners = sequelize.define("event_owners",{
        eventOwnerId: {
            type: DataType.INTEGER,
=======
module.exports = function(sequelize, DataTypes){
    var event_owners = sequelize.define("event_owners",{
        eventOwnerId: {
            type: DataTypes.INTEGER,
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
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
            type: DataTypes.STRING,
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
<<<<<<< HEAD
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
=======
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
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
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
    return eventOwners;
};
=======
    return event_owners;
};
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
