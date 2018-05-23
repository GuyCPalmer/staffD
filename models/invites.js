module.exports = function(sequelize, DataTypes){
    var invites = sequelize.define("invites",{
        inviteId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        currentUserEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
                {
                    len: [1, 140]
                }
        },
        selectedUserEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
                {
                    len: [1, 140]
                }
        },
        eventIdInvited: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        inviteMessage: {
            type: DataTypes.TEXT
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
            tableName: "invites"
        },
        {
            timestamps: true
        });
    return invites;
};