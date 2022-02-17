const express = require('express');
const Pets = require('/Users/lindsayellis/SEI/projects/project4-backend/models/Pets.js');
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const pets = await Pets.find({});
		res.json(pets);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const pets = await Pets.findById(req.params.id);
		if (pets) {
			res.status(200).json(pets);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newPets = await Pets.create(req.body);
		res.status(201).json(newPets);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const deletedPets = await Pets.findByIdAndDelete(req.params.id);
		if (deletedPets) {
			res.status(204).json(deletedPets);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
