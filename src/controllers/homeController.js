const connection = require('../configs/dbConnection')

const getHomepage = (req, res)=> {
    return res.render('home.ejs')
}

const postCreateUser = (req, res)=> {
    console.log('Check req body: ', req.body)
    let { email, name, city } = req.body
    console.log('email:', email, 'name:', name, 'city:', city)

    connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city],
        function(err, results) {
            // console.log(results);
            res.send('Create new user')
        }
    );
}

module.exports = {
    getHomepage, postCreateUser
}