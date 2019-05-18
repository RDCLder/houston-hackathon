'use strict';

module.exports = (sequelize, DataTypes) => {
    const request = sequelize.define(
        'request',
        {
            name: DataTypes.STRING(20),
            description: DataTypes.STRING(100),

        },
        {
            freezeTableName: true
        }
    );

    request.associate = models => {
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