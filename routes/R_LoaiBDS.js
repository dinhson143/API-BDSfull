const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken')

const LoaiBDS = require('../models/LoaiBDS')
const verifyToken = require('../middleware/auth')


//get all
router.get('/', async (req, res) => {
    try {
        const lbds = await LoaiBDS.find();
        if (!lbds) throw Error("No items");
        else {
            res.status(200).json(lbds);
        }
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})
// get theo id
router.get('/:id', async (req, res) => {
    try {
        const lbds = await LoaiBDS.find({ _id: req.params.id });
        if (!lbds) throw Error("No items");
        else {
            res.status(200).json(lbds);
        }
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})

//create
router.post('/', async (req, res) => {
    const newLoaiBDS = new LoaiBDS(req.body);
    try {
        const loaiBDS = await newLoaiBDS.save();
        // const accessToken = jwt.sign({ loaiBDS: newLoaiBDS._id }, process.env.ACESS_TOKEN_SECRET) 
        if (!loaiBDS) throw Error("Something went wrong Loai BDS");
         res.status(200).json(loaiBDS);
        // res.json({ success: true, message: "Tạo Thành Công Loại BDS" ,accessToken: accessToken})
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})

//delete
// api/loaiBDS/:id
router.delete('/:id', async (req, res) => {
    try {
        const lbds = await LoaiBDS.findOneAndDelete({ _id: req.params.id })
        if (!lbds) throw Error("No items");
        res.status(200).json({ success: true });
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})



//update
// api/loaiBDS/:id
router.put('/:id', async (req, res) => {
    try {
        const lbds = await LoaiBDS.findOneAndUpdate({ _id: req.params.id }, req.body)
        if (!lbds) throw Error("No items");
        res.status(200).json({ success: true });
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})

module.exports = router;