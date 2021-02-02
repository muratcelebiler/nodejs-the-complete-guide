// Nodejs core kütüphanesinden path modülünü dahil ediyoruz.
const path = require("path");

// Express kütüphanesini dahil ediyoruz.
const express = require("express");

// Util
const pathDir = require("../util/path");

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(pathDir, 'views', 'shop.html'));
});

module.exports = router;