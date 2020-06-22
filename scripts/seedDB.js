const mongoose = require("mongoose");
const insertPrimaria3roy4to = require("./devdata/insertPrimaria3roy4to");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mathDB";
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((error) => console.log(error));

insertPrimaria3roy4to();
