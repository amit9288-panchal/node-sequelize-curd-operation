'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Item', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true, // Sequelize will automatically manage `createdAt` and `updatedAt`
    });
};
