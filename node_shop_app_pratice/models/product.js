const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    console.log(products);
    return products;
  }
};
