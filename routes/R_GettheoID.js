const express = require('express');
const router = express.Router()

const Lich = require('../models/Lich')

const BDSmark = require('../models/BDSmark')

// get theo id
router.get('/:id', async (req, res) => {
    try {
        const l = await Lich.find({ _id: req.params.id });
        if (!l) throw Error("No items");
        else {
            res.status(200).json(l);
        }
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})


// get theo id user
router.get('/BDSmark/:id', async (req, res) => {
    try {
        const l = await BDSmark.find({ IDuser: req.params.id });
        if (!l) throw Error("No items");
        else {
            res.status(200).json(l);
        }
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})







module.exports = router;