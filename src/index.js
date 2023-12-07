const express = require('express');
const app = express();
const port = 8080;
const products = require("./routes/products");
const orders = require("./routes/orders");
const login = require("./routes/login");

app.use("/products", products);
app.use("/orders", orders);
app.use("/login", login);

app.listen(port, () => {
    console.log('Listening on port ' + port);
});