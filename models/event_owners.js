module.exports = function(sequelize, DataTypes){
    var tables = sequelize.define("event_owners",{
        eventOwnerId: {
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
        phone: {
            type: DataTypes.INT,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        photo: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        eventsOwned: {
            type: DataTypes.STRING
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
    tableName: "event_owners"
},
{
    timestamps: false
});
    return eventOwners;
};