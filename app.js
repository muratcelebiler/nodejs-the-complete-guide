// Nodejs path methodunu dahil ediyoruz
const path = require("path");

// Express kütüphanesini dahil ediyoruz.
const express = require("express");

// Body parser eklentisini dahil ediyoruz. Bu eklenti ile gelen requesti parse ediyoruz
const bodyParser = require("body-parser");

// Express core kısmında bir fonksiyon döndüğü için core kısmını initilaize ediyoruz.
const app = express();

// Router'ları dahil ediyoruz
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Body parser ile ana yapımızı kuruyoruz.
app.use(bodyParser.urlencoded({extended: false}));

// Router'ları express js içerisine tanımlıyoruz
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Sistemde olmayan sayfaları yakalamak için bir middleware ekledik.
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Express de default http modülü yüklü olarak(require) gelmektedir. 
// Biz app.listen() ile aslında http.createServer() methodunu çağırıp server oluşturmatayız.
// Detaylar için aşağıdaki url den expressjs'in github reposuna erişerek application.js dosyasındaki listen() methodunu inceleyebiliriz.
// Repo url: https://github.com/expressjs/express/blob/master/lib/application.js
app.listen(3000);