const mongoose = require('../connection')
const Schema = mongoose.Schema
import { ObjectId } from 'mongodb'


const PetsSchema = new Schema(
    {
        name: String,
        color: String,
        species_Id: {
            ObjectId,
            ref: "SpeciesModel",
            index: true,
            required: true,
        },
    },
    { versionKey: false, autoIndex: true }
)

const Pets = mongoose.model("Pets", PetsSchema)

module.exports = Pets