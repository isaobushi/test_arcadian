import React from 'react'
import Rating from './Rating'


export default class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: props.data.id,
      title: props.data.title,
      imgUrl: props.data.imgUrl,
      altDescription: props.data.altDescription,
      exerpt: props.data.exerpt,
      author: props.data.author,
      styleTile: {opacity: '0'},
      styleImg: {transform: 'scale(1)'}
    }
  }

  appear = () => {
    this.setState({
      styleTile: {opacity: '1'},
      styleImg: {
        transform: 'scale(.95)'
        }
    })
  }
  disappear = () => {
    this.setState({
      styleTile: {opacity: '0'},
      styleImg: {transform: 'scale(1)'}
    })
  }
  render(){
     
    const {id, title, imgUrl, altDescription, exerpt, author, styleTile, styleImg} = this.state

    return(
      <div 
        className={`wrapper-tile tile-${id}`}
        onMouseOver={() => this.appear()}
        onMouseOut={() => this.disappear()}
      >

        <div 
          className='post-title'
        >{title}
        </div>
          <Rating data = {id} />
          <img 
          style={styleImg}
          className='post-image'
          src={`${imgUrl}`} 
          alt={`"${altDescription}"`}
          />
          <div 
            className='exerpt'
            style={styleTile}
            >{exerpt} 
            
          
        <div
          className='author'
          style={styleTile}
        >{author}</div></div>
        <a className='link-tile' href="#">
              <span
              style={styleTile}className='link-read-more' > Read more...</span >
        </a>
       </div>
    )
  }
}

