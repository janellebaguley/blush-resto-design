module.exports = {
    getProducts: async(req, res) => {
     const db = req.app.get('db')
     const furniture = await db.view_furniture([req.session.furniture.id])

     .then(furniture => res.status(200).send(furniture))
        .catch(err => res.status(500).send(err))
    },
    addToCart: (req,res) => {
        const {id, image_url} = req.params;
        const db = req.app.get('db');
        
        db.orders.add_to_cart({id, image_url: furniture.image_url})
        .then(furniture => res.status(200).send(furniture))
        .catch(err => res.status(500).send(err))
    },
    updateQuantity: (req, res) => {
        const {id} = req.params
        const {quantity} = req.body
        const db = req.app.get('db')

        db.orders.update_quantity(quantity, id)
        .then(order => res.status(200).send(order))
        .catch(err => res.status(500).send(err))
    },
    removeProduct: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')

        db.orders.remove_furniture(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}