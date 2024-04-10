const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const app = express()

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/nod',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("database connection successful");
    }).catch((err) => {
        console.log("database is not connected", err);
    })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ "msg": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaappppppppppppI" });
})

let PORT = 7896
require('./router/app.router')(app)

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}  port`);
})