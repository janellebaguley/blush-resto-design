module.exports = {
    getProducts: (req, res) => {
     const db = req.app.get('db')
     
        db.products.view_furniture()
     .then(furniture => res.status(200).send(furniture))
        .catch(err => res.status(500).send(err))
    },
    addToCart: async(req,res) => {
        const {order_id, furnitureId, quantity} = req.body
        console.log(order_id, furnitureId, quantity)
        const db = req.app.get('db');
        
       await db.orders.add_to_cart(order_id, furnitureId, quantity)
        .then(res.status(200))
        .catch(err => res.status(500).send(err))
    },
    updateQuantity: (req, res) => {
        const {id} = req.params
        const {quantity, price} = req.body
        const db = req.app.get('db')

        db.orders.update_quantity(quantity, price, id)
        .then(order => res.sendStatus(200))
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