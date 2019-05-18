'use strict';

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user',
        {
            username: {
                type: DataTypes.STRING(30),
                unique: true,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(30),
                unique: true,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            phone: DataTypes.STRING(20),
            status: DataTypes.STRING(100),
            bio: DataTypes.STRING(500),
        },
        {
            freezeTableName: true
        }
    );

    user.associate = models => {
        models.user.hasMany(models.donation, {
            foreignKey: 'author_id'
        });
        models.user.hasMany(models.request, {
            foreignKey: 'author_id'
        });
        models.user.hasMany(models.comment, {
            foreignKey: 'author_id'
        });
    };

    return user;
};