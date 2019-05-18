'use strict';

module.exports = (sequelize, DataTypes) => {
    const request = sequelize.define(
        'request',
        {
            name: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            description: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
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
            foreignKey: 'category_id'
        });
        models.request.belongsTo(models.user, {
            foreignKey: 'author_id'
        });
    };

    return request;
};