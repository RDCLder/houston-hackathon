'use strict';

module.exports = (sequelize, DataTypes) => {
    const donation = sequelize.define(
        'donation',
        {
            name: DataTypes.STRING(20),
            description: DataTypes.STRING(100),

        },
        {
            freezeTableName: true
        }
    );

    donation.associate = models => {
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