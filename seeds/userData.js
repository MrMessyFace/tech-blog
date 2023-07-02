const { User } = require('../models');

const userdata = [
    {
        username: 'DrPepper',
        password: 'pw1234',
    },
    {
        username: 'ColSanders',
        password: '11herbs',
    },
    {
        username: 'RonMcDon',
        password: 'bksucks2',
    },
    {
        username: 'TheRealBurgerKing',
        password: 'mcsucker1',
    },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
