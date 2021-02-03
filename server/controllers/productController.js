module.exports = {
    getProducts: (req, res) => {
     const db = req.app.get('db')
     
        db.products.view_furniture()
     .then(furniture => res.status(200).send(furniture))
        .catch(err => res.status(500).send(err))
    },
    addToCart: (req,res) => {
        const {order_id,
            product_id, 
            quantity,
            order_total} = req.body
        const db = req.app.get('db');
        
        db.orders.add_to_cart({order_id2: order_id, product_id2: product_id, quantity2: quantity, order_total2: order_total})
        .then(order_item => res.status(200).send(order_item))
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