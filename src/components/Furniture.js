import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';
// import white_table from './white_table.jpg'



class Furniture extends Component{
  constructor(props){
    super(props)
    this.state = {
      furniture: []
    }
  }
  getFurniture = () => {
    axios.get('/api/furniture')
    .then(res => {
      this.setState({furniture: res.data})
    })
    .catch(err => console.log(err))
  }
  componentDidMount(){
    this.getFurniture()
  }

    render(){
      let furniture = this.state.furniture.map((furniture, i) => {
        if(furniture.image_url) {
          return (
            <section key={i}>
              <img width= '200' src={furniture.image_url}/>
            </section>
         );
        }
      });
    return(
      <section>
        <div>
            <h3>Furniture</h3>
              {furniture}
              {furniture.image_url}
        </div>
        </section>
    )
  }    
}
export default Furniture;