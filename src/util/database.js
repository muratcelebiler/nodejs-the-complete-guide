// Veritabanı bağlantısı için mysql2 kütüphanesini çağırıyoruz
const mysql = require('mysql2');

// Bağlantı için pool oluşturuyoruz
const pool = mysql.createPool({
    host: 'database',
    port: '3306',
    database: 'app',
    user: 'root',
    password: 'V4pQNJYuyHeDRAbNuMUjxwqL4raCAVUE'
});

module.exports = pool.promise();