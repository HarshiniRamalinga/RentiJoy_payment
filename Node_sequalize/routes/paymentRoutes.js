const {moviePayment,orderMovie}=require("../controllers/paymentController");

const payrouter=require("express").Router();

payrouter.post("/payment",moviePayment)
payrouter.get("/:productId",orderMovie)
module.exports=payrouter