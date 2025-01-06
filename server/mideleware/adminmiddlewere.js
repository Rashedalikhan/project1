const adminmiddlewere = (req, res, next) => {
    try {
        const {isAdmin} = req.body;
        console.log(isAdmin);
        if(!isAdmin){
            return res.status(401).json({msg: "You are not admin"})
        }
        next();
    } catch (error) {
        console.log(error)
    }
}

module.exports = adminmiddlewere;