const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
