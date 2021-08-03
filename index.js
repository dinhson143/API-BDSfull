require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const authRouter = require('./routes/auth')
const UserIFRouter = require('./routes/R_UserInfor')
const UserRouter = require('./routes/R_User')
const LoaiBdsRouter = require('./routes/R_LoaiBDS')
const BdsRouter = require('./routes/R_BDS')
const BdstheoLoaiRouter = require('./routes/R_BDStheoLoai')
const BdsMarkRouter = require('./routes/R_BDSmark')

const LichRouter = require('./routes/R_Lich')
const GetRouter = require('./routes/R_GettheoID')


const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@bds-db.twb9x.mongodb.net/BDS-db?retryWrites=true&w=majority`, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const app = express()

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/userInfor', UserIFRouter)
app.use('/api/user', UserRouter)
app.use('/api/loaiBDS', LoaiBdsRouter)
app.use('/api/BDS', BdsRouter)
app.use('/api/BDStheoLoai', BdstheoLoaiRouter)
app.use('/api/BDSmark', BdsMarkRouter)
app.use('/api/Lich', LichRouter)

app.use('/api/Get', GetRouter)


const PORT = 5000

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))