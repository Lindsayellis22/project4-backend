const express = require('express');
const app = express();
const cors = require('cors');
const PetsController = require('./controllers/Pets');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (req, res) => {
	res.redirect('/pets');
});

// Controllers
// Forward all requests to localhost:3111/icecreams to the ice cream controller
app.use('/pets', PetsController);

app.listen(3111, () => {
	console.log('Mmm ice cream...🍦🍦🍦');
});
