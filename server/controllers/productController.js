module.exports = {
    getProducts: (req, res) => {
        const {product_id, product_name, product_price, image_url} = req.body;
        const db = req.app.get('db');

        db.products.view_furniture([product_id, product_name, product_price, image_url])
        .then(furniture => res.status(200).send(furniture))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops!"})
            console.log(err)
        })
    },
    addToCart: (req,res) => {
        const {product_id} = req.params;
        const db = req.app.get('db');
        
        db.orders.add_to_cart(product_id)
        .then(furniture => res.status(200).send(furniture))
        .catch(err => res.status(500).send(err))
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