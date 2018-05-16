module.exports = function(sequelize, DataTypes){
    var event_owners = sequelize.define("event_owners",{
        eventOwnerId: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
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
        },      
    },
{
    freezeTableName: true,
    tableName: "event_owners"
},
{
    timestamps: false
});
    return event_owners;
};