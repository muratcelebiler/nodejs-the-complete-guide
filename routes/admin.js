// Nodejs core kütüphanesinden path modülünü dahil ediyoruz
const path = require("path");

// Express kütüphanesini dahil ediyoruz.
const express = require("express");

// Util
const pathDir = require("../util/path");

// Express içerisindeki router modülünü çağırıyoruz.
const router = express.Router();

// ürünlerin kaydedilmesi için bir form oluşturduk.
router.get('/add-product', (req, res, next) => {
    // Views anadizinine erişmek için path.join methodunu kullanarak ardışık klasör ve dosyaları yanyana gelecek şekilde sıralıyoruz.
    res.sendFile(path.join(pathDir, 'views', 'add-product.html'));
});

// ürünlerin kaydedileceği endpointi oluşturduk. 
router.post('/add-product', (req, res, next) => {
    console.log(req.body);

    res.send('<h1>Add Product POST Method</h1>')
});

module.exports = router;