
const instance = require("../instance")

const paymentCheck = async(req,res)=>{
    try{
       
        const  options = {
            amount: 50000,  // amount in the smallest currency unit
            currency: "INR",
          };
        const order = await  instance.orders.create(options);

            console.log(order);

        return res.status(200).json({
            success:true,
            message:"your payment has been made"
        });

    }catch(err){
          
        return res.status(401).json({
            success:false,
            message:"something went while doing the payment ",
        })
        
    }
  

}

module.exports=paymentCheck;