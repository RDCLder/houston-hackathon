"use strict";

module.exports = (sequelize, DataTypes) => {
    const item = sequelize.define("item",
        {
            iname: DataTypes.STRING(30),
            type: DataTypes.STRING(30),
            weight: DataTypes.INTEGER,
            location: DataTypes.STRING(30),
            status: DataTypes.STRING(10),
        },
        {
            freezeTableName: true
        }
    );


    return item;
};