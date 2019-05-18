'use strict';

module.exports = (sequelize, DataTypes) => {
    const item = sequelize.define('item',
        {
            name: DataTypes.STRING(30),
            type: DataTypes.STRING(30),
            filters: DataTypes.ARRAY(DataTypes.STRING),
            weight: DataTypes.DECIMAL,
            zipCode: DataTypes.INTEGER(5),
            status: DataTypes.STRING(10),
        },
        {
            freezeTableName: true
        }
    );

    return item;
};