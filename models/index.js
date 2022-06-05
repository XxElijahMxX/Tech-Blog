// this will import the models
const Users = require('./Users');
const Posts = require('./Posts');
const Comments= require('./Comments');


// this makes a 1 to many relationship
Users.hasMany(Posts, {
    // includes foreign key with designated source
    foreignKey: 'user_id',
});

Users.hasMany(Comments, {
    foreignKey:'user_id',

    // cascade if the foreign key isnt null
    onDelete: 'CASCADE'
});

Posts.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});
Comments.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Posts, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Comments,
    Users,
    Posts
};