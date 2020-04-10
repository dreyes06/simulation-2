import React, { Component } from 'react'

export default class Step_2 extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }
    
    handleChange = e => {
       this.setState({[e.target.name]: e.target.value})
   }
   
   handleClick = () => {
       const {name, address, city, state, zip} = this.state
       axios.post('/api/home', {
           name,
           address,
           city,
           state,
           zip
       }).then(response => {
           this.setState({
               name: '',
               address: '',
               city: '',
               state: '',
               zip: ''
           })
       }).catch(error => {
           console.log(error)
       })
    }   
    
    render() {
        const {name, address, city, state, zip} = this.state
        return (
            <div>
                Add New Listing
                <input placeholder='Property Name' type='text' onChange={this.handleChange} name='name' value={name} />
                <input placeholder='Address' type='text' onChange={this.handleChange} name='address' value={address} />
                <input placeholder='City' type='text' onChange={this.handleChange} name='city' value={city} />
                <input placeholder='State' type='text' onChange={this.handleChange} name='state' value={state} />
                <input placeholder='Zip' type='text' onChange={this.handleChange} name='zip' value={zip} />
                <Link to='/'><button onClick={this.handleClick}>
                Complete</button></Link>
            </div>
        )
    }
}
