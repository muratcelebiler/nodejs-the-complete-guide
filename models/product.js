// filesystem core modülünü dahil ediyoruz
const fs = require('fs');

// path modülünü dail diyoruz
const path = require('path');

// Verilerin ekleneceği dosya
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

// Ürünleri dosyadan okur
const getProductsFromFile = (cb) => {
    // Dosyayı okuyoruz
    fs.readFile(p, (err, fileContent) => {
        if(err) {
            cb([]);
        } else {
            // products.json dosyasını silince undefined hatası veriyor. Dosyayı bulamadığı için içinden veri de okuyamıyoruz.
            fileContent === 'undefined' ? [] : fileContent;

            // Dosyadan dönen dataları okuyoruz
            cb(JSON.parse(fileContent));
        }
    });
}

// Product sınıfını oluşturarak export ediyoruz.
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    // Ürün kaydetme
    save() {
        getProductsFromFile(products => {
            // Form'dan gelen verileri aktarıyoruz
            products.push(this);

            // Dosyaya son verileri yazıdıryoruz
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.log('Hata: ', err);
                }
            });
        });
    }

    // Get all products
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
};