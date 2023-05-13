require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const userRouter = require('./routes/userRoutes')
const vanRouter = require('./routes/vanRoutes')
var cors = require('cors')

// middlewares
app.use(cors())
app.use(express.json());
app.use((req, res,next) => {
    console.log(req.path, req.method)
    next();
})


app.use("/api/host", userRouter);
app.use("/api/vans", vanRouter);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology:true})
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Db connected and Listening on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log(error)
})