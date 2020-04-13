import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store, {ADD_IMAGE} from '../../store'

export default class Step_2 extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            img: reduxState?.img,
        }
    }
    
    componentDidMount = () => {
        store.subscribe((() => {
            const reduxState = store.getState()
            this.state = {
                img: reduxState?.img
            }
        }))
      }

    handleChange = e => {
       this.setState({[e.target.name]: e.target.value})
   }

   handleClick = () => {
    const reduxState = store.getState()
    store.dispatch({
        type: ADD_IMAGE,
        payload: {
            img: reduxState?.img
        }
    })
}
     
    
    render() {
        const {img} = this.state
        return (
            <div>
                Add New Listing
                <input placeholder='Image' type='text' onChange={this.handleChange} name='img' value={img} />
                <Link to='/wizard/step3'><button onClick={this.handleClick}>
                Next Step</button></Link>
            </div>
        )
    }
}
