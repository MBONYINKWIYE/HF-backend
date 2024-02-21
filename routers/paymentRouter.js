const express = require("express");
const router = express.Router();
const { requestPayment, cashOut, checkBalance, callback } = require("../controllers/paymentController")

router.post("/pay", requestPayment);
router.post("/cashout", cashOut);
router.get("/checkBalance", checkBalance);
router.post("/webhook", callback);

module.exports = router;