"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var data_1 = require("./data");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
//Endpoint 1 
app.get('/countries', function (req, res) {
    var result = data_1.countries.map(function (country) { return ({
        id: country.id,
        name: country.name
    }); });
    try {
        res.status(200).send(result);
        console.log(result);
    }
    catch (_a) {
        res.status(200).send;
    }
});
var server = app.listen(process.env.PORT || 3003, function () {
    if (server) {
        var address = server.address();
        console.log("server is running in http://localhost: " + address.port);
    }
    else {
        console.error("failure upon starting server");
    }
});
// Endpoint 2
// app.get('/countries/:id', (req: Request, res: Response) => {
// if(req.params.id) {
//     res.send("id")
// } else {
//     res.send("id")
// }
// })
console.log("hello,world");
