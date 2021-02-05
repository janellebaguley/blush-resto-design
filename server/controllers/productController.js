module.exports = {
    getProducts: (req, res) => {
     const db = req.app.get('db')
     
        db.products.view_furniture()
     .then(furniture => res.status(200).send(furniture))
        .catch(err => res.status(500).send(err))
    },
    
    addToCart: async(req,res) => {
           const {order_id, product_id, quantity, price} = req.body
        // console.log(order_id, furnitureId, quantity)
        const db = req.app.get('db');
        
       await db.orders.add_to_cart(order_id, product_id, quantity, price)
        .then(res.status(200))
        .catch(err => res.status(500).send(err))
    },
    getCart: async(req, res) => {
        const {id} = req.params
        const db = req.app.get('db')

        await db.orders.get_cart(id)
        .then(orderItems => res.status(200).send(orderItems))
        .catch(err => res.status(500).send(err))
    },
    updateQuantity: async(req, res) => {
        const{id} = req.params;
        const {quantity, price} = req.body
        const db = req.app.get('db')
        await db.orders.update_quantity(quantity, price, id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    removeProduct: async(req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        await db.orders.remove_furniture(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}