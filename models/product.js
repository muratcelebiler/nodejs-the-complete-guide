// Ana product sabitimiz
const products = [];

// Product sınıfını oluşturarak export ediyoruz.
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    // Save product
    save() {
        products.push(this);
    }

    // Get all products
    static fetchAll() {
        return products;
    }
};