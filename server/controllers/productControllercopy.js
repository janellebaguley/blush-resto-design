module.exports = {
    getProducts: (req, res) => {
     const db = req.app.get('db')
     
        db.furntiure.get_furniture()
     .then(furniture => res.status(200).send(furniture))
        .catch(err => res.status(500).send(err))
    },
    
    addToCart: async(req,res) => {
           const {order_id, furnitureId, quantity, price} = req.body
        // console.log(order_id, furnitureId, quantity)
        const db = req.app.get('db');
        
       await db.cart.add_to_cart(order_id, furnitureId, quantity, price)
        .then(res.status(200))
        .catch(err => res.status(500).send(err))
    },
    getCart: async(req, res) => {
        const {id} = req.params
        const db = req.app.get('db')

        await db.cart.get_user_cart(id)
        .then(orderItems => res.status(200).send(orderItems))
        .catch(err => res.status(500).send(err))
    },
    updateQuantity: async(req, res) => {
        const{id} = req.params;
        const {quantity, price} = req.body
        const db = req.app.get('db')
        await db.cart.update_item_qty(quantity, price, id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    getOrderHistory: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.user.get_order_history(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    removeProduct: async(req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        await db.cart.delete_cart_item(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}