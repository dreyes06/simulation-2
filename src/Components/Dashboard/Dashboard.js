import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
constructor() {
    super() 
    this.state = {
        houses: []
        // amendStatus: false
    }
    this.componentDidMount = this.componentDidMount.bind(this)
}

componentDidMount () {
    this.getHouses()
}

// changeAmendStatus = () => {
//     this.setState({ amendStatus: !this.state.amendStatus });
//   };

getHouses = () => {
    axios
    .get('/api/dashboard')
    .then(response => {
        this.setState({
            houses: response.data
        })
    }).catch(error => {
        console.log(error)
    })
}

// updateBlogPost = (id) => {
//     const {name} = this.state;
//     axios
//       .put(`/api/blog/${id}`, { name })
//       .then(response => {
//         this.setState({ amendStatus: !this.state.amendStatus, houses: response.data });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

deleteHouse = (id) => {
    console.log(id)
    axios
        .delete(`/api/home/${id}`)
        .then(() => this.getHouses())
}


render() {
    let mappedHouses = this.state.houses.map((val) => {
        return <House  house={val} key={val.house_id} deleteHouse={this.deleteHouse}/>})
        return (
            <div>
                <h1>Dashboard</h1>
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
                {mappedHouses}
            </div>
        )
    }
}

export default Dashboard