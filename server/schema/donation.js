'use strict';

module.exports = (sequelize, DataTypes) => {
    const donation = sequelize.define(
        'donation',
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

    donation.associate = models => {
        models.donation.hasMany(models.item, {
            foreignKey: 'donation_id'
        });
        models.donation.hasMany(models.comment, {
            foreignKey: 'donation_id'
        });
        models.donation.belongsTo(models.category, {
            foreignKey: 'category_name',
            allowNull: false
        });
        models.donation.belongsTo(models.user, {
            foreignKey: 'author_id',
            allowNull: false
        });
    };

    return donation;
};