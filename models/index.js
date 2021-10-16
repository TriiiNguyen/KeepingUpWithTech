const User = require('./User');
const Posts = require('./Posts');
const Comments = require('./Comments');

User.hasMany(Posts, Comments {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Posts.belongsTo(User, {
  foreignKey: 'user_id'
});

Comments.belongsTo(Posts, {
  foreignKey: 'posts.id'
});

Posts.hasMany(Comments, {
  foreignKey:'posts_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comments, {
  foreignKey: 'user_id',

})

module.exports = { User, Posts, Comments };
