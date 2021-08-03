const express = require('express');
const router = express.Router()

const BDSmark = require('../models/BDSmark')

//get all
router.get('/', async (req, res) => {
    try {
        const bds = await BDSmark.find();
        if (!bds) throw Error("No items");
        else {
            res.status(200).json(bds);
        }
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})

// get theo id
router.get('/:id', async (req, res) => {
    try {
        const bds = await BDSmark.find({ _id: req.params.id });
        if (!bds) throw Error("No items");
        else {
            res.status(200).json(bds);
        }
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})

//create
router.post('/', async (req, res) => {
    const newBDS = new BDSmark(req.body);
    try {
        const bds = await newBDS.save();
        if (!bds) throw Error("Something went wrong BDS");
        res.status(200).json(bds);
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})

//update
// api/BDS/:id
router.put('/:id', async (req, res) => {
    try {
        const bds = await BDSmark.findOneAndUpdate({ _id: req.params.id }, req.body)
        if (!bds) throw Error("No items");
        res.status(200).json({ success: true });
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})

// delete
// api/BDS/:id
router.delete('/:id', async (req, res) => {
    try {
        const bds = await BDSmark.findOneAndDelete({ _id: req.params.id })
        if (!bds) throw Error("No items");
        res.status(200).json({ success: true });
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})



module.exports = router;