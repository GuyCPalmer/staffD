<<<<<<< HEAD
module.exports = function(sequelize, DataType){
    var eventOwners = sequelize.define("event_owners",{
        eventOwnerId: {
            type: DataType.INTEGER,
=======
module.exports = function(sequelize, DataTypes){
    var tables = sequelize.define("event_owners",{
        eventOwnerId: {
            type: DataTypes.INTEGER,
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855
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
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855
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
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        address: {
<<<<<<< HEAD
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
            type: DataTypes.TINYTEXT,
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
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855
        },      
    },
{
    freezeTableName: true,
    tableName: "event_owners"
},
{
<<<<<<< HEAD
    timestamps: true
=======
    timestamps: false
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855
});
    return eventOwners;
};