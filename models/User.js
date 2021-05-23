
module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define('User', {

        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: `ID`
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            field: `name`
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            field: `email`
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            field: `password`
        },
        mobileNumber: {
            type: Sequelize.STRING,
            allowNull: false,
            field: `mobileNumber`
        },
    },
        {
            timestamps: false
        });

    return User;

}