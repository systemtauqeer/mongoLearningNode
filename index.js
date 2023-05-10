const express = require("express");
require("./config/database_connection");

const users_route = require("./routes/users_routes");

const app = express();

app.use(express.json());

app.use("/api", users_route);

app.listen(3030, () => {
    console.log("Server is running on port 3030");
})