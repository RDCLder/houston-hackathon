'use strict';

module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define(
        'category',
        {
            name: {
                type: DataTypes.STRING(20),
                unique: true,
                allowNull: false
            },
            description: DataTypes.STRING(100)
        },
        {
            freezeTableName: true
        }
    );

    category.associate = models => {
        models.category.hasMany(models.request, {
            foreignKey: 'category_name'
        });
        models.category.hasMany(models.donation, {
            foreignKey: 'category_name'
        });
        models.category.hasMany(models.item, {
            foreignKey: 'category_name'
        });
    };

    return category;
};