const mongoose = require('./connection');
const seedData = require('./seeds.json');
const Pets = require('/Users/lindsayellis/SEI/projects/project4-backend/models/Pets.js');


Pets.deleteMany({})
	.then(() => {
		Pets.insertMany(seedData).then((Pets) => {
			console.log('We have Pets');
			console.log(Pets);
			process.exit();
		});
	})
	.catch((err) => console.error(err));