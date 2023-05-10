// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//TODO Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',  //! might need to change to 'id'
});

//TODO Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',  //! might need to change to 'id'
});

//TODO Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'  //! might need to change to 'id'
});

//TODO Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'      //! might need to change to 'id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
