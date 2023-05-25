const connection = require('../configs/dbConnection')

const getHomepage = (req, res)=> {
    return res.render('home.ejs')
}
const getCreatePage = (req, res)=> {
    return res.render('create.ejs')
}

const postCreateUser = async (req, res)=> {
    console.log('Check req body: ', req.body)
    let { email, name, city } = req.body
    console.log('email:', email, 'name:', name, 'city:', city)

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city]
    )
    res.send('Created user succeed')
}

module.exports = {
    getHomepage, postCreateUser,
    getCreatePage
}