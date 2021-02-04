module.exports = {
    getProducts: (req, res) => {
     const db = req.app.get('db')
     
        db.products.view_furniture()
     .then(furniture => res.status(200).send(furniture))
        .catch(err => res.status(500).send(err))
    },
    getCart: async(req, res) => {
        const db = req.app.get('db')

        if (req.session.user) {
            const {id} =req.session.user
            const user_id = id
            const cart = await db.orders.get_cart([user_id])

            res.status(200).send(cart)
        } else {
            res.sendStatus(400)
        }
    },
    addToCart: async(req,res) => {
           const db = req.app.get('db')

    if (req.session.user) {
   let {product_id, quantity} = req.body
   console.log('product_id ' + product_id)
   const {id} = req.session.user
   const user_id = id

//    const [product] = await db.cart.get_product_in_cart([user_id, product_id])
   if (product) {
     quantity += product.quantity
     await db.cart.change_quantity([quantity, user_id, product_id])

   } else {
     await db.cart.add_to_cart([user_id, product_id, quantity])
   }

   const cart = await db.cart.get_cart([user_id])

   res.status(200).send(cart)
 }
    //     const {order_id, furnitureId, quantity} = req.body
    //     console.log(order_id, furnitureId, quantity)
    //     const db = req.app.get('db');
        
    //    await db.orders.add_to_cart(order_id, furnitureId, quantity)
    //     .then(res.status(200))
    //     .catch(err => res.status(500).send(err))
    },
    updateQuantity: async(req, res) => {
        const {id} = req.session.user
        const user_id = id
        const {quantity, product_id} = req.body
        const db = req.app.get('db')

        await db.orders.update_quantity([quantity, user_id, product_id])

        const cart = await db.orders.get_cart([user_id])
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    removeProduct: async(req, res) => {
        const {id} = req.session.user
        const db = req.app.get('db')
        const {product_id} = req.query
        console.log('product_id is ' + product_id)
        const user_id = id

        await db.orders.remove_furniture([user_id, product_id])
        const cart = await db.orders.get_cart([user_id])
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    clearCart: async(req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const user_id = id

        await db.orders.clear_cart([user_id])
        const cart = await db.cart.get_cart([user_id])
        res.status(200).send(cart)
    }
}