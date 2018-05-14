module.exports = function(sequelize, DataTypes){
    var burgers = sequelize.define("burgers",{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: 
            {
                len: [1,140]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
        
    },
{
    freezeTableName: true,
    tableName: "burgers"
},
{
    timestamps: false
});
    return burgers;
};//moudle.exports 