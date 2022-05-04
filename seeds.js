const mongoose = require("./connection");
const seedData = require("./seed.json");
const Pets = require("./models/Pets");

Pets.deleteMany({})
  .then(() => {
    Pets.insertMany(seedData).then((Pets) => {
      console.log("We have Pets! 🦤");
      console.log(Pets);
      process.exit();
    });
  })
  .catch((err) => console.error(err));
