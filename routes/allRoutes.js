const express = require("express");
const router = express.Router();
const {handleGenerateNewOrder,handleGetOrdersDetails} = require("../controllers/order")
const {handleUserSignup, handleUserLogin} = require("../controllers/user")


// Add user
router.post('/add-user',handleUserSignup);
router.get('/add-user',(req,res) => {
    return res.render("addUser");
});

// login user
router.post('/login-user',handleUserLogin);
router.get('/login-user',(req,res) => {
    return res.render("loginUser")
});

// Add order
router.post('/add-order',handleGenerateNewOrder);
router.get('/add-order',(req,res) =>{
    return res.render("addOrder")
});

// Get Order details
router.get('/get-order',handleGetOrdersDetails);

module.exports = router;