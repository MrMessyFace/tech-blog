const { Post } = require('../models');

const postData = [
    {
        title: 'We are the best soda!',
        body: 'We have 23 flavors!',
        userId: 1
    },
    {
        title: 'Come get some chicken!',
        body: 'Its finger lickin good!',
        userId: 2
    },
    {
        title: 'Burger King sucks!',
        body: 'Come to McDonalds instead!',
        userId: 3
    },
    {
        title: 'Big Mac Sauce is no secret!',
        body: 'Its just Thousand Island dressing...',
        userId: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
