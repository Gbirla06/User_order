const express = require("express");
const path = require("path");
const {connectToMongoDB} = require("./connect");
const routes = require("./routes/allRoutes");
const {checkForAuthentication} = require("./middlewares/auth")
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/user_order_platform");

app.set("view engine","ejs");
app.set("views", path.resolve("./views"));


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(checkForAuthentication);

app.use("/url", routes)

app.listen(PORT, () => console.log(`Server start at port ${PORT}`));
