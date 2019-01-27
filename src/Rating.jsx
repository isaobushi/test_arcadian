import React from 'react'
import axios from 'axios'


export default class Rating extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: props.data,
      rate: []
    }
  } 
  componentDidMount = async () => {
    const res = await axios.get(`https://raw.githubusercontent.com/arcadian-group/testing-resources/master/frontend/posts/${this.state.id}.json`)
        const rateRes = res.data.rating
        this.setState({rate: rateRes})
  }
  render(){
    return(
        <div>{this.state.rate}</div>
    )
  }
}
