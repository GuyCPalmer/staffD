module.exports = function(sequelize, DataTypes){
    var users = sequelize.define("users",{
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            unique: true,
            validate: {
                len: [1,140]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            unique: true,
            validate: {
                len: [1,140]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userTalent: {
            type: DataTypes.BOOLEAN
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }, 
        passwordResetToken: {
            type: DataTypes.STRING
        },
        passwordResetExpires: {
            type: DataTypes.STRING
        },
        emailConfirmationToken: {
            type: DataTypes.STRING
        },
        isEmailConfirmed: {
            type: DataTypes.BOOLEAN
        },

    },
        {
            freezeTableName: true,
            tableName: "users"
        },
        {
            timestamps: true
        });
    return users;
};
