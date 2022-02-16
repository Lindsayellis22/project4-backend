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
        species_id: { type: Schema.Types.ObjectId, ref: 'Species'}
    },
);

const Pets = mongoose.model("Pets", PetsSchema);

module.exports = Pets