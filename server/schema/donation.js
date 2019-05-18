'use strict';

module.exports = (sequelize, DataTypes) => {
    const donation = sequelize.define(
        'donation',
        {
            name: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            description: {
                type: DataTypes.STRING(100),
                allowNull: false
            }
            ,
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
            foreignKey: 'category_id'
        });
        models.donation.belongsTo(models.user, {
            foreignKey: 'author_id'
        });
    };

    return donation;
};