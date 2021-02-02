// Express kütüphanesini dahil ediyoruz.
const express = require("express");

// Express içerisindeki router modülünü çağırıyoruz.
const router = express.Router();

// ürünlerin kaydedilmesi için bir form oluşturduk.
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// ürünlerin kaydedileceği endpointi oluşturduk. 
router.post('/product', (req, res, next) => {
    console.log(req.body);

    // Bu komutu eklemediğimizde bir sonraki aşamaya geçemiyoruz ve bu middleware içerisinde hapsoluyoruz.
    next();
});

module.exports = router;