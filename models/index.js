const Sequelize = require('sequelize');
const sequelize = new Sequelize('demo', 'SA', 'Root@123', {
    host: 'localhost',
    dialect: 'mssql',
    port: '1433',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }

})

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;