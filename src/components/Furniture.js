import React, {Component} from 'react';
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
        <div>furniture!</div>
    )
  }    
}
export default Furniture;