const express = require('express');
const router = express.Router()

const Lich = require('../models/Lich')


//get all
router.get('/', async (req, res) => {
    try {
        const l = await Lich.find();
        if (!l) throw Error("No items");
        else {
            res.status(200).json(l);
        }
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})
// get theo id
router.get('/:id', async (req, res) => {
    try {
        const l = await Lich.find({ IDuser: req.params.id });
        if (!l) throw Error("No items");
        else {
            res.status(200).json(l);
        }
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})


//create
router.post('/', async (req, res) => {
    const newLich = new Lich(req.body);
    try {
        const l = await newLich.save();
        if (!l) throw Error("Something went wrong Loai BDS");
        res.status(200).json(l);
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})

//delete
// api/Lich/:id
router.delete('/:id', async (req, res) => {
    try {
        const l = await Lich.findOneAndDelete({ _id: req.params.id })
        if (!l) throw Error("No items");
        res.status(200).json({ success: true });
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})


//update
// api/Lich/:id
router.put('/:id', async (req, res) => {
    try {
        const l = await Lich.findOneAndUpdate({ _id: req.params.id }, req.body)
        if (!l) throw Error("No items");
        res.status(200).json({ success: true });
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})


module.exports = router;