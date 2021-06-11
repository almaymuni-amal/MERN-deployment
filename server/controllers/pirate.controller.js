// const Clothes = require("../models/clothes.model");
const {Pirates} = require("../models/pirate.model");


module.exports = {
    createPirate: (req, res) => {
        Pirates.create(req.body)
        .then((pirates) => res.json(pirates))
        .catch((err) => res.status(400).json(err));
    }
    ,
    getAll: (req, res) => {
        Pirates.find({}).sort("name")
            .then((pirates) => res.json(pirates))
            .catch((err) => res.status(400).json(err));
    }
    ,
    getOne: (req, res) => {
        Pirates.findOne({ _id: req.params.id })
            .then((pirate) => res.json(pirate))
            .catch((err) => res.status(400).json(err));
        }
        ,
    updatePirate: (req, res) => {
        Pirates.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((pirate) => res.json(pirate))
            .catch((err) => res.status(400).json(err));
        }
        ,
    deletePirate: (req, res) => {
        Pirates.deleteOne({ _id: req.params.id })
            .then((pirate) => res.json(pirate))
            .catch((err) => res.status(400).json(err));
        }
};


    