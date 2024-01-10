const User = require("../models/user");
const { setUser } = require("../service/auth");

async function handleUserSignup(req,res){
    const {name,phone_number,password} = req.body;
    
    await User.create({
        name,
        phone_number,
        password
    })

    return res.redirect("loginUser");
}

async function handleUserLogin(req,res){
    const {phone_number,password} = req.body;
    const user = await User.findOne({phone_number,password});

    if(!user && phone_number!== Nan){
        return res.render("loginUser", {
            error: "Invalid Username or password",
        });
    }
    const token = setUser(user);
    res.cookie("token",token);

    return res.redirect("/url/add-order")
}

module.exports = {
    handleUserLogin,
    handleUserSignup
}