const express = require('express');
const router = express.Router()

const BDS = require('../models/BDS')

router.get('/:id', async (req, res) => {
    try {
        const bds = await BDS.find({ maloaiBDS: req.params.id });
        if (!bds) throw Error("No items");
        else {
            res.status(200).json(bds);
        }
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})


module.exports = router;