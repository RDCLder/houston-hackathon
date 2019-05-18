'use strict';

module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define(
        'comment',
        {
            text: DataTypes.STRING(500),
            hasParent: DataTypes.BOOLEAN
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
        models.comment.belongsTo(models.comment, {
            foreignKey: 'parent_id'
        });
        models.comment.hasMany(models.comment, {
            foreignKey: 'parent_id'
        });
    };

    return comment;
};