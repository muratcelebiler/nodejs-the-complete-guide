// Express kütüphanesini dahil ediyoruz.
const express = require('express');

// Body parser eklentisini dahil ediyoruz. Bu eklenti ile gelen requesti parse ediyoruz
const bodyParser = require('body-parser');

// Express core kısmında bir fonksiyon döndüğü için core kısmını initilaize ediyoruz.
const app = express();

// Body parser ile ana yapımızı kuruyoruz.
app.use(bodyParser.urlencoded({extended: false}));

// add-product endpointine gidince bir form oluşturduk.
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// Middleware ekliyoruz.
// Middleware sadece belli url adreslerine göre çalışabilirler. Örneğin aşağıdaki middleware sadece product url adresine istek atılınca çalışmaktadır.
// app.use() tüm html methodlarını kapsarken biz aynı zaman app.get(), app.post() etc. ile bir takım methodları özel olarak tanımlayabiliriz. Örneğin product endpointi sadece post isteklerinde çalışmaktadır.
app.post('/product', (req, res, next) => {
    console.log(req.body);

    // Bu komutu eklemediğimizde bir sonraki aşamaya geçemiyoruz ve bu middleware içerisinde hapsoluyoruz.
    next();
});

// Express de default http modülü yüklü olarak(require) gelmektedir. 
// Biz app.listen() ile aslında http.createServer() methodunu çağırıp server oluşturmatayız.
// Detaylar için aşağıdaki url den expressjs'in github reposuna erişerek application.js dosyasındaki listen() methodunu inceleyebiliriz.
// Repo url: https://github.com/expressjs/express/blob/master/lib/application.js
app.listen(3000);