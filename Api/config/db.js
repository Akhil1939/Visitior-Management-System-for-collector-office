const mongoose = require("mongoose");

const connectDb = () => {
    mongoose.connect(process.env.DB_URI)
        .then(data => {
            console.log("Mongodb connected with server");
        })
}

module.exports = connectDb;