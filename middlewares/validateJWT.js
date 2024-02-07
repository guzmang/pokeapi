require('../config/config');
const jwt = require('jsonwebtoken');

const validateJWT = async( req, res, next ) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'There is no Token provided.'
        });
    }

    try {
        
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        req.uid = uid;
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Invalid Token'
        })
    }

}




module.exports = {
    validateJWT
}