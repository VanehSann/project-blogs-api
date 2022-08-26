module.exports = (sequelize, DataTypes) => {
  const Caterogies = sequelize.define('Category', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: DataTypes.STRING,
   },
{
  timestamps: false,
});

return Caterogies;
};
