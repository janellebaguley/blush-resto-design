const OrderHistory = (props) => {
    return(
        <div>
            <section>
            <p>{this.props.furniture.product_name}</p>
            </section>
            <section>
                <p>${this.props.order.price}</p>
            </section>
            <section>
                <p>{this.props.order.quantity}</p>
            </section>
        </div>
    )
}
export default OrderHistory;