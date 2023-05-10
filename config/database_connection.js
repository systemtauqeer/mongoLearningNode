const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.set("strictQuery");

mongoose.connect(process.env.LOCAL_DATABASE_URL).then(() => {
    console.log("Database is attatched.");
}).catch((error) => {
    console.log(error, "ERROR DB");
})