'use strict';

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user",
        {
            username: DataTypes.STRING(30),
            password: DataTypes.STRING(30),
            email: DataTypes.STRING(30),
            type: DataTypes.STRING(20),
            status: DataTypes.STRING(100),
            bio: DataTypes.STRING(500),
        },
        {
            freezeTableName: true
        }
    );

    user.associate = models => {
        models.user.hasMany(models.topic, {
            foreignKey: 'author_id'
        });
        models.user.hasMany(models.comment, {
            foreignKey: 'author_id'
        });
        // models.user.belongsTo(models.community, {
        //     foreignKey: ''
        // })
    };

    return user;
};