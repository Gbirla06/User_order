const Order = require("../models/order");
const {getUser} = require("../service/auth");

function checkAuthorization(user_id, tokenCookie){
    
    const token = tokenCookie;
    const user = getUser(token);
    if(user._id !== user_id){
        return true;
    }
    return false;
}

async function handleGenerateNewOrder(req, res){
    const {user_id,phone_number,sub_total} = req.body;
    const tokenCookie = req.cookies?.token;
    
    if(checkAuthorization(user_id, tokenCookie)){
        return res.render("loginUser");
    };    
    
    await Order.create({
        user_id,
        sub_total,
        phone_number
    })
    console.log("Hey")
    return res.render("addOrder",{
        msge:"Order Added Successfully"
    });
};

async function handleGetOrdersDetails(req, res){
    const user_id = req.query.user_id;
    const tokenCookie = req.cookies?.token;
    req.user = null;

    if(checkAuthorization(user_id, tokenCookie)){
        return res.render("loginUser");
    }; 

    const allOrders = await Order.find({user_id: user_id});

    return res.render("allOrder",{
        allOrders
    });
}

module.exports = {
    handleGetOrdersDetails,
    handleGenerateNewOrder
}