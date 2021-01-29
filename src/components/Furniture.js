import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';


class Furniture extends Component{
  constructor(props){
    super(props)
    this.state = {
      furniture: [],
      image: ''
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
    return(
      <section>
      
        <div>
          <section>{this.state.furniture.map((i) => (
            <section key={i}>
              <button>Add</button>
            </section>
          ))}</section>
          
        </div>
        </section>
    )
  }    
}
export default Furniture;