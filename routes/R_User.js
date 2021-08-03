const express = require('express');
const router = express.Router()

const User = require('../models/User')
const UserIF = require('../models/UserInfor')

// .populate({ path: 'Product', select: ['Title', 'Photo'] });
// .populate('Product', 'Title')
//get all
router.get('/', async (req, res) => {
    try {
        const user = await User.find().populate({ path: 'UserInfor' });
        if (!user) throw Error("No items");
        else {
            res.status(200).json(user);
        }
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})
// get theo id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.find({ Email: req.params.id }).populate({ path: 'UserInfor' });
        if (!user) throw Error("No items");
        else {
            res.status(200).json(user);
        }
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})

//update
// api/user/:id
router.put('/:id', async (req, res) => {
    const { Phone, Address, Name, Role, Email, Password } = req.body
    try {
        const lsp = await User.findOneAndUpdate({ _id: req.params.id }, req.body)
        if (!lsp) throw Error("No Item To Update");
        res.status(200).json({ success: true, lsp });
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})





module.exports = router;