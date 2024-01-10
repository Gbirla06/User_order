const jwt = require('jsonwebtoken');
const secret = "Ganesh12345#";

function setUser(user){
    return jwt.sign({
        _id:user._id,
        phone_number:user.phone_number,
        name:user.name
    },
    secret
    );
};

function getUser(token){
    if(!token)
        return null;

    try{
        return jwt.verify(token,secret);
    }
    catch(error){
        return null;
    }
};

module.exports = {
    setUser,
    getUser
}