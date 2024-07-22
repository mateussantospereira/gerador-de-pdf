const express = require("express");
const app = express();
const port = 3002;
const routes = require("./router/routes");

app.use(express.static(__dirname + "/views"));
app.use("/public", express.static(__dirname + "/public"));
app.use("/", routes);

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }

    console.log(`Aplicação na porta ${port}`);
});