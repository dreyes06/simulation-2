import React, { Component } from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'

export default class Step_3 extends Component {
    constructor(){
        super()
        this.state = {
            mortgage: '',
            rent: ''
        }
    }

    componentDidMount = () => {
        let { mortgage, rent } = this.props
        this.setState({ mortgage, rent })
      }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    handleClick = () => {
        const {mortgage, rent} = this.state
        axios.post('/api/home', {
            mortgage,
            rent
        }).then(response => {
            this.setState({
                mortgage: '',
                rent: ''
            })
        }).catch(error => {
            console.log(error)
        })
     }
    
    render() {
        const {mortgage, rent} = this.state
        return (
            <div>
                Add New Listing
                <input placeholder='Monthly Mortgage' type='text' onChange={this.handleChange} name='mortgage' value={mortgage} />
                <input placeholder='Desired Rent' type='text' onChange={this.handleChange} name='rent' value={rent} />
                <Link to='/'><button onClick={this.handleClick}>
                Complete</button></Link>
            </div>
        )
    }
}
