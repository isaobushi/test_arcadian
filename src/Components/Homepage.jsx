import React from 'react';
import Post from './Post';

export default class Homepage extends React.Component {

	constructor() {
		
		super();
		this.state = {
			collection: [
				{
					id: 1,
					imgUrl: 'https://raw.githubusercontent.com/arcadian-group/testing-resources/master/frontend/posts/1.jpeg',
					altDescription: '',
					title: 'Iste et et culpa recusandae neque natus',
					exerpt: 'Quisquam in tempora qui rem',
					author: 'Trisha Quitzon',
				},
				{
					id: 2,
					imgUrl: 'https://raw.githubusercontent.com/arcadian-group/testing-resources/master/frontend/posts/2.jpeg',
					altDescription: '',
					title: 'Dolores ipsum incidunt et',
					exerpt: 'Natus et incidunt quasi ipsum eos',
					author: 'Vena Balistreri',
				},
				{
					id: 3,
					imgUrl: 'https://raw.githubusercontent.com/arcadian-group/testing-resources/master/frontend/posts/3.jpeg',altDescription: '',
					title: 'Et beatae commodi distinctio vel explicabo',
					exerpt: 'Omnis omnis et mollitia quis dolorum',
					author: 'Cecile Davis',
				},
				{
					id: 4,
					imgUrl: 'https://raw.githubusercontent.com/arcadian-group/testing-resources/master/frontend/posts/4.jpeg',
					altDescription: '',
					title: 'Accusamus eveniet sed consectetur',
					exerpt: 'Voluptate delectus aspernatur corrupti',
					author: 'Citlalli Wisozk',
				},
				{
					id: 5,
					imgUrl: 'https://raw.githubusercontent.com/arcadian-group/testing-resources/master/frontend/posts/5.jpeg',
					altDescription: '',
					title: 'Est et modi sed quo quasi quisquam',
					exerpt: 'Explicabo mollitia minima id',
					author: 'Camron Dickens',
				},
				{
					id: 6,
					imgUrl: 'https://raw.githubusercontent.com/arcadian-group/testing-resources/master/frontend/posts/6.jpeg',
					altDescription: '',
					title: 'Perspiciatis dolorem quo corporis ipsa',
					exerpt: 'Nobis fugiat natus atque saepe',
					author: 'Kenyon Halvorson',
				},
			]
		};
	}
	
	render() {
		const collectionPosts = this.state.collection
		return (
      <div className='main-wrapper' >
				<header className="main-header">
    <nav className="top-nav">
      <ul className="list-nav">
        <li className=" main-logo">
        <img className="bunnings-logo" src="https://vignette.wikia.nocookie.net/logopedia/images/7/72/Bunnings_Warehouse.svg/revision/latest?cb=20140912204721" alt="Bunnings-logo"/></li>
        <input className='search-bar'type="text"/>
        <a href="#" className='link-nav'><li className="nav-item">News</li></a>
        <a href="#" className='link-nav'><li className="nav-item">Contact</li></a>
        <a href="#" className='link-nav'><li className="nav-item">About</li> </a>
      </ul>
    </nav>
  </header>
				<div className="wrapper-tiles">
				{
				collectionPosts.map(post =>  {
					return (
						<Post key={post.id} data = {post} className={`post-tile`} /> 
						)
				}) 
				}
				</div>
			<footer className="footer-nav">
				<a href="#" className="footer-link" >Contacts</a>
				<a href="#" className="footer-link" >Services</a>
				<a href="#" className="footer-link" >Our Sites</a>
			</footer>
			</div>		
		)	
	}
}