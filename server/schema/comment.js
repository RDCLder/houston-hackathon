'use strict';

module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define(
        'comment',
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

    comment.associate = models => {
        models.comment.belongsTo(models.user, {
            foreignKey: 'author_id',
            allowNull: false
        });
        models.comment.belongsTo(models.donation, {
            foreignKey: 'donation_id'
        });
        models.comment.belongsTo(models.request, {
            foreignKey: 'request_id'
        });
    };

    return comment;
};