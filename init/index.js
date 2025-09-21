const mongoose = require("mongoose");
const Listing = require("../models/listing");
const initData = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";

main()
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDb = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68c1a909fedcdcff63448c5b",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDb();
