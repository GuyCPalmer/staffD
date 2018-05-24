module.exports = function(sequelize, DataTypes){
    var event_owners = sequelize.define("event_owners",{
        eventOwnerId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        eventOwner: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        purchasingContact: {
            type:  DataTypes.STRING,
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
            isEmail: true,
            validate: 
            {
                len: [1,140]
            }
        },
        coordinator: {
            type:  DataTypes.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
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
        {
            freezeTableName: true,
            tableName: "event_owners"
        },
        {
            timestamps: true
        });
    return event_owners;
};
