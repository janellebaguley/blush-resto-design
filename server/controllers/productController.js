module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db');

        db.products.view_furniture()
        .then(furniture => res.status(200).send(furniture))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops!"})
            console.log(err)
        })
    },
    addToCart: (req,res) => {

    },
    updateQuantity: (req, res) => {

    },
    removeProduct: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')

        db.orders.remove_furniture(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}