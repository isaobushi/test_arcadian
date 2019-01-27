import React from 'react'


export default function Header(){
  
  return (
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
  )
}