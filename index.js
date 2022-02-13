const express = require('express');
const app = express();
const cors = require('cors');
const SpeciesController = require('./controllers/Species.js');
const PetsController = require('./controllers/Pets.js');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (req, res) => {
	res.redirect('/species');
});
app.get('/', (req, res) => {
	res.redirect('/pets');
});

// Controllers
// Forward all requests to localhost:3111/icecreams to the ice cream controller
app.use('/species', SpeciesController);
app.use('/pets', PetsController);

app.listen(3111, () => {
	console.log('yaaayyyy look at all the SPECIES! 🦔 🦥');
});
