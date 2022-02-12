
// const ObjectId = require(ObjectId)
const mongoose = require('../connection')
const Schema = mongoose.Schema


// import { ObjectId } from 'mongodb'
// const ObjectId = require(ObjectId)

const SpeciesSchema = new Schema(
    {
        defaultColor: String,
        likes: String,
        dislikes: String,
        bio: String,
    },
    { versionKey: false, autoIndex: true }
)


const PetsSchema = new Schema(
    {
        name: String,
        color: String,
        species_id: [{type: Schema.Types.ObjectId, ref: 'Species'}]
    },
    { versionKey: false, autoIndex: true }
)

const Pets = mongoose.model("Pets", PetsSchema);
const Species = mongoose.model("Species", SpeciesSchema);

module.exports = Pets, Species;