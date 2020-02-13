// Core içerisinde gelen http kütüphanesini dahil ediyoruz.
const http = require('http');

/**
 * Http'den bir server türetiyoruz. 
 * Bu server request, response olmak üzere iki parametre alır.
 */
const server = http.createServer((req, res) => {
    console.log('Server starting...');

    res.end('Hello Nodejs!')
});

/**
 * Yukarıda açılan serverı belli bir porttan dinliyoruz.
 * http://localhost:3000 yazınca Hello Nodejs yazısı ile karşılaşırız.
 */
server.listen(3000);