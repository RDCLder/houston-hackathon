'use strict';

module.exports = (sequelize, DataTypes) => {
    const item = sequelize.define('item',
        {
            name: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            filters: DataTypes.ARRAY(DataTypes.STRING),
            weight: DataTypes.DECIMAL,
            status: DataTypes.STRING(10),
        },
        {
            freezeTableName: true
        }
    );

    item.associate = models => {
        models.item.belongsTo(models.category, {
            foreignKey: 'category_name',
            allowNull: false
        });
        models.item.belongsTo(models.user, {
            foreignKey: 'owner_id'
        });
        models.item.belongsTo(models.request, {
            foreignKey: 'request_id'
        });
        models.item.belongsTo(models.donation, {
            foreignKey: 'donation_id'
        });
    }

    return item;
};