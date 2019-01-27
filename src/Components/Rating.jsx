import React from 'react'
import axios from 'axios'


export default class Rating extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: props.data,
      rate: [],
      styleTile: {opacity: '1'}

    }
  } 
  componentDidMount = async () => {
    const res = await axios.get(`https://raw.githubusercontent.com/arcadian-group/testing-resources/master/frontend/posts/${this.state.id}.json`)
        const rateRes = res.data.rating
        this.setState({rate: rateRes})
  }
  
  render(){
    let rating = Math.round(this.state.rate * 100) /100
    let starOn = `fa fa-star checked`
    let starOff = `fa fa-star`

    return(
        <div 
          style={this.state.styleTile}
          className='rate'>
          <span className={rating >= 1 ? starOn : starOff}></span>
          <span className={rating >= 2 ? starOn : starOff}></span>
          <span className={rating >= 3 ? starOn : starOff}></span>
          <span className={rating >= 4 ? starOn : starOff}></span>
          <span className={rating >= 5 ? starOn : starOff}></span> {rating}</div>
    )
  }
}
