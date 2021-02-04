const bcrypt = require('bcryptjs')

module.exports = {
    register: async(req, res) => {
        const {username, email, password} = req.body
        const db = req.app.get('db')

        const [foundUser] = await db.users.check_user({ email })
        if(foundUser){
            return res.status(400).send('Email already in use')
        }

        let salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.users.register_user({username, email, hash})

        req.session.user = newUser
        res.status(201).send(req.session.user)
    },
    login: async(req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')

        const [foundUser] = await db.users.check_user({email})
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
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    getSessionUser: (req, res) => {
        const {blush_user} =req.session
        if(blush_user){
            res.send(blush_user)
        } else {
            res.send('')
        }
    }
}