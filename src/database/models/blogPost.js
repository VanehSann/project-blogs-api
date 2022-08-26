module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true  },
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: { type: DataTypes.INTEGER },
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
   },
{
  timestamps: false,
});

BlogPost.associate = (models) => {
  BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user'  });
};


return BlogPost;
};
