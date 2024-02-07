const { generateJWT } = require('../helpers/generateJWT');

const login = async(req, res) => {

    const { uid } = req.body;

    try {
        // Generar el JWT
        const token = await generateJWT( uid );
        return res.status(200).send({
            token
        });
    } catch(e) {
        return res.status(404).send(
            'Not found'
        )
    }
}

module.exports = {
    login
}