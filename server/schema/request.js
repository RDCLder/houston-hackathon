'use strict';

module.exports = (sequelize, DataTypes) => {
    const request = sequelize.define(
        'request',
        {
            title: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            description: {
                type: DataTypes.STRING(1000),
                allowNull: false
            },
            filters: DataTypes.ARRAY(DataTypes.STRING),
            zipCode: {
                type: DataTypes.INTEGER(5),
                allowNull: false
            }
        },
        {
            freezeTableName: true
        }
    );

    request.associate = models => {
        models.request.hasMany(models.item, {
            foreignKey: 'request_id'
        });
        models.request.hasMany(models.comment, {
            foreignKey: 'request_id'
        });
        models.request.belongsTo(models.category, {
            foreignKey: 'category_name',
            allowNull: false
        });
        models.request.belongsTo(models.user, {
            foreignKey: 'author_id',
            allowNull: false
        });
    };

    return request;
};