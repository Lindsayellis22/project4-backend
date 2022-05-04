const mongoose = require("../connection");
const Schema = mongoose.Schema;

const SpeciesSchema = new Schema({
  defaultColor: String,
  likes: String,
  dislikes: String,
  speciesName: String,
  temperament: String,
});

const Species = mongoose.model("Species", SpeciesSchema);

module.exports = Species;
