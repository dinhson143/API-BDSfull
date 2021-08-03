const express = require('express');
const router = express.Router()

const UserInfor = require('../models/UserInfor')

//update
// api/userinfor/:id
router.put('/:id', async (req, res) => {
    const { Phone, Address, Name, Role, Email, Password } = req.body
    try {
        const lsp = await UserInfor.findOneAndUpdate({ _id: req.params.id }, req.body)
        if (!lsp) throw Error("No Item To Update");
        res.status(200).json({ success: true });
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})



module.exports = router;