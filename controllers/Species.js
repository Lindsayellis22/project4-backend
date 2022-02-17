const express = require('express');
const Species = require('/Users/lindsayellis/SEI/projects/project4-backend/models/Species.js');
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const species = await Species.find({});
		res.json(species);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const species = await Species.findById(req.params.id);
		if (species) {
			res.status(200).json(species);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newSpecies = await Species.create(req.body);
		res.status(201).json(newSpecies);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
