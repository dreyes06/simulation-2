import React, { Component } from 'react'

export default class Step_3 extends Component {
    constructor(){
        super()
        this.state = {
            img: ''
        }
    }
   
componentDidMount = () => {
    this.setState({img: this.props.img})
}
  
    handleChange = e => {
       this.setState({[e.target.name]: e.target.value})
   }
   
  
    
    render() {
        const {img} = this.state
        return (
            <div>
                Add New Listing
                <input placeholder='Property Name' type='text' onChange={this.handleChange} name='img' value={img} />
                <Link to='/'><button onClick={this.handleClick}>
                Complete</button></Link>
            </div>
        )
    }
}
