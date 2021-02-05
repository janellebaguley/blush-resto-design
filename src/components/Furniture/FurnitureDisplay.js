import React, {Component} from 'react'
// import {Link} from 'react-router-dom'

class FurnitureDisplay extends Component {
    addToCart = () => {
        this.props.addToCart(this.props.furniture.product_id, this.props.furniture.price)
    }

    render(){
        return(
            <div>
                <section>
                    {this.props.furniture.product_description}
                </section>
                <div>
                    <button onClick={this.addToCart}>Add</button>
                </div>
            </div>
        )
    }

}
export default FurnitureDisplay