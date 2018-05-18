<<<<<<< HEAD

module.exports = function(sequelize, DataType){

    var events = sequelize.define("events",{
        eventId: {
            type: DataType.STRING,
=======
module.exports = function(sequelize, DataTypes){
    var tables = sequelize.define("events",{
        eventId: {
            type: DataTypes.STRING,
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
        eventDateTimeStart: {
<<<<<<< HEAD
            type: DataType.DATE,
            allowNull: false
        },
        eventDateTimeEnd: {
            type: DataType.DATE,
            allowNull: false
        },
        locationAddress: {
            type: DataType.TEXT,
            allowNull: false,
        },
        locationSpecialInst: {
            type: DataType.TEXT
        },
        onsiteContact: {
            type: DataType.INTEGER,
            allowNull: false
        },
        staffd: {
            type: DataType.BOOLEAN
        },
        invitationsSent: {
            type: DataType.STRING
        },
        invConfirmed: {
            type: DataType.STRING
=======
            type: DataTypes.DATE,
            allowNull: false
        },
        eventDateTimeEnd: {
            type: DataTypes.DATE,
            allowNull: false
        },
        locationAddress: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        locationSpecialInst: {
            type: DataTypes.TEXT
        },
        onsiteContact: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        staffd: {
            type: DataTypes.BOOLEAN
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
    tableName: "events"
},
{
<<<<<<< HEAD
    timestamps: true
=======
    timestamps: false
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855
});
    return events;
};