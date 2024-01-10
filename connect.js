const mongoose = require("mongoose");

async function connectToMongoDB(url){
    return mongoose.connect(url)
            .then(() => console.log("MongoDB Connceted"));
}

module.exports = {
    connectToMongoDB,
}