const express = require('express')
const cors =require('cors')
const Razorpay = require("razorpay")
const userRouter =require('./Routers/Router')
const contactRouter = require('./Routers/Contact-Router')
const productRouter = require("./Routers/Product-Router");
const adminUser = require("./Routers/Admin-user");
const paymentRouter = require("./Routers/Payment");
const {connection}=require('./Models/Model');
const dotenv =require("dotenv");
const errorMiddleware  =require('./Middleware/Error-middleware');

const app = express();

dotenv.config({path:"./Config/config.env"});
app.use(cors());
app.use(express.json());

app.use('/api/User',userRouter);
app.use('/api/Contact',contactRouter);
app.use('/api/Product',productRouter);
app.use('/api/admin',adminUser);
app.use('/api/payment',paymentRouter);


app.use(errorMiddleware);


 const instance = new Razorpay({
  
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  
});

connection();
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

module.exports = instance;
// shivam coding
// coding testing 