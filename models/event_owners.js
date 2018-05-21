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
            primaryKey: true,
            autoIncrement: true
        },
        eventOwner: {
            type: DataTypes.STRING,
>>>>>>> 8e94677232ffc13309626feaee76ec416b55a321
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
<<<<<<< HEAD
        eventOwner: {
            type: DataType.STRING,
=======
        purchasingContact: {
            type:  DataTypes.STRING,
>>>>>>> 8e94677232ffc13309626feaee76ec416b55a321
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
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        coordinator: {
            type:  DataTypes.STRING,
>>>>>>> 8e94677232ffc13309626feaee76ec416b55a321
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
        ownerAddress: {
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
>>>>>>> 8e94677232ffc13309626feaee76ec416b55a321
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
<<<<<<< HEAD
{
    freezeTableName: true,
    tableName: "event_owners"
},
{
    timestamps: false
});
    return eventOwners;
=======
        {
            freezeTableName: true,
            tableName: "event_owners"
        },
        {
            timestamps: true
        });
    return event_owners;
>>>>>>> 8e94677232ffc13309626feaee76ec416b55a321
};
