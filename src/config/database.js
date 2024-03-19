module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123456',
    database: 'tasklist',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};

// export const dialect = 'postgres';
// export const host = 'localhost';
// export const username = 'postgres';
// export const password = '123456';
// export const database = 'tasklist';
// export const define = {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
// };
