const User = require('./User');
const Posts = require('./Posts');

User.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Posts.belongsTo(User, {
  foreignKey: 'user_id'
});

Comments.belongsTo(Posts, {
  foreignKey: ''
  
})

module.exports = { User, Posts };
