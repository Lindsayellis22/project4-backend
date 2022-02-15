const mongoose = require('../connection');
const Schema = mongoose.Schema;

const PetsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true
        }, 
        renderSpecies: { type: Schema.Types.ObjectId, ref: 'Species'}
    },
);

const SpeciesSchema = new Schema(
    {
        defaultColor: String,
        likes: String,
        dislikes: String,
        speciesName: String,
        temperament: String,
    },
);

const Pets = mongoose.model("Pets", PetsSchema);
const Species = mongoose.model("Species", SpeciesSchema);

module.exports = Pets, Species;