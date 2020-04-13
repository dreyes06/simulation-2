import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import store, {HOME_INFO} from '../../store'


// console.log({store})
class Step_1 extends Component {
 constructor(){
     super()
     const reduxState = store.getState()
    //  console.log({reduxState})
     this.state = {
         name: reduxState?.name,
         address: reduxState?.address,
         city: reduxState?.city,
         state: reduxState?.state,
         zip: reduxState?.zip
        }
 }

 componentDidMount = () => {
    store.subscribe((() => {
        const reduxState = store.getState()
        this.state = {
         name: reduxState?.name,
         address: reduxState?.address,
         city: reduxState?.city,
         state: reduxState?.state,
         zip: reduxState?.zip
        }
    }))
  }
 
 handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
}

// handleClick = () => {
//     const {name, address, city, state, zip} = this.state
//     axios.post('/api/home', {
//         name,
//         address,
//         city,
//         state,
//         zip
//     }).then(response => {
//         this.setState({
//             name: '',
//             address: '',
//             city: '',
//             state: '',
//             zip: ''
//         })
//     }).catch(error => {
//         console.log(error)
//     })
//  }

handleClick = () => {
    const reduxState = store.getState()
    store.dispatch({
        type: HOME_INFO,
        payload: {
        name: reduxState?.name,
         address: reduxState?.address,
         city: reduxState?.city,
         state: reduxState?.state,
         zip: reduxState?.zip
        }
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
                <Link to='/wizard/step2'><button onClick={this.handleClick}>
                Next Step</button></Link>
                

            </div>
        )
    }
}

export default Step_1