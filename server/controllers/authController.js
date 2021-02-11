const bcrypt = require('bcryptjs')
// const validator = require('email-validator')

module.exports = {
    register: async(req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const {session} = req

        const foundUser = await db.users.check_user(email)
        if(!foundUser){
            return res.status(400).send('Email already in use')
        }

        let salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await db.users.register_user(email, hash)
        newUser = newUser[0]
        delete newUser.password
        let userCart = await db.users.create_user_cart(newUser.user_id)
        userCart = userCart [0]
        newUser = {...newUser, ...userCart}
        session.user = newUser
        res.status(201).send(session.user)
        .catch(err => res.status(500).send(err))
    },
    login: async(req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')

        const foundUser = await db.users.check_user(email)
        if(!foundUser){
            return res.status(400).send('Email not found')
        }

        const authenticated = bcrypt.compareSync(password, foundUser.password)
        if(!authenticated){
            return res.status(401).send('Password is incorrect')
        }

        delete foundUser.password
        req.session.user = foundUser
        res.status(202).send(req.session.user)
        .catch(err => res.status(500).send(err))
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
        .catch(err => res.status(500).send(err))
    },
    getSessionUser: (req, res) => {
        const {user} =req.session
        if(user){
            res.send(user)
        } else {
            res.send('')
        }
    }
}