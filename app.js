// Express kütüphanesini dahil ediyoruz.
const express = require('express');

// Express core kısmında bir fonksiyon döndüğü için core kısmını initilaize ediyoruz.
const app = express();

// Middleware ekliyoruz
app.use((req, res, next) => {
    console.log("Middleware 1");

    // Bu komutu eklemediğimizde bir sonraki aşamaya geçemiyoruz ve bu middleware içerisinde hapsoluyoruz.
    next();
});

// Express de default http modülü yüklü olarak(require) gelmektedir. 
// Biz app.listen() ile aslında http.createServer() methodunu çağırıp server oluşturmatayız.
// Detaylar için aşağıdaki url den expressjs'in github reposuna erişerek application.js dosyasındaki listen() methodunu inceleyebiliriz.
// Repo url: https://github.com/expressjs/express/blob/master/lib/application.js
app.listen(3000);