const express = require("express")
const paymentCheck = require("../Controllers/Payment-controllers")

router = express.Router();


router.post("/check",paymentCheck);


module.exports=router;