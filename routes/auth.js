const express = require('express');
const router = express.Router()
const argon2 = require('argon2');
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const UserInfor = require('../models/UserInfor')

//@route POST api/auth/register
// @desc Register User
// @access Public
router.post('/register', async (req, res) => {
    const { Phone, Address, Name, Role, Email, Password } = req.body
    //simple validate
    if (!Phone || !Address || !Name || !Role || !Email || !Password)
        return res.status(400).json({ success: false, message: "Missing Information" });
    try {
        //Check for existing user
        const user = await User.findOne({ Email: Email })
        if (user)
            return res.status(400).json({ success: false, message: " Email is use" })
        // All good
        const hashedPassword = await argon2.hash(Password);
        const newUserInfo = new UserInfor({ Phone, Address, Name, Role })
        await newUserInfo.save();
        const newUser = new User({ Email, Password: hashedPassword, UserInfor: newUserInfo._id })
        await newUser.save();

        // Return Token
        // const accessToken = jwt.sign({ userId: newUserInfo._id }, process.env.ACESS_TOKEN_SECRET)

        res.json({ success: true, message: "Tạo Thành Công Tài Khoản"})
        // res.json({ success: true, message: "Tạo Thành Công Tài Khoản" })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
})


//@route POST api/auth/login
// @desc Login User
// @access Public

router.post('/login', async (req, res) => {
    const { Email, Password } = req.body;
    if (!Email || !Password)
        return res
            .status(400)
            .json({ success: false, message: "Missing Information" })

    try {
        //check for existing user
        const user = await User.findOne({ Email })
        if (!user)
            return res.status(400).json({ success: false, message: "Incorect Email" })
           
        //Email found
        const passwordValid = await argon2.verify(user.Password, Password)       
        if (!passwordValid)
            return res.status(400).json({ success: false, message: "Incorect Password" })
        
        const accessToken = jwt.sign({ userId: user._id }, process.env.ACESS_TOKEN_SECRET)
        res.json({ success: true, message: "Login Thành Công" , accessToken:accessToken})
        // //
        // const user = await User.findOne({ Email, Password }).populate({ path: 'UserInfor' });
        // if (!user)
        //     return res.status(400).json({ success: false, message: "Incorect Email or Password" })
        // res.json({
        //     success: true,
        //     message: "Login thành công",
        //     user
        // })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
})





//delete
//delete/:id
router.delete('/delete/:id/:id1', async (req, res) => {
    try {
        const userIF = await UserInfor.findOneAndDelete({ _id: req.params.id1 });
        if (!userIF) throw Error("No user");

        const user = await User.findOneAndDelete({ _id: req.params.id });
        if (!user) throw Error("No user");



        res.status(200).json({ success: true });
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})



module.exports = router;