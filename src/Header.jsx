import React from 'react'


export default function Header(){
  
  return (
  <header className="main-header">
    <nav className="top-nav">
      <ul className="list-nav">
        <li className="nav-item main-logo">
        <img className="bunnings-logo" src="https://vignette.wikia.nocookie.net/logopedia/images/7/72/Bunnings_Warehouse.svg/revision/latest?cb=20140912204721" alt="Bunnings-logo"/></li>
        <li className="nav-item">Articles</li>
        <li className="nav-item">Search</li>
        <li className="nav-item">News</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">About</li> 
      </ul>
    </nav>
  </header>
  )
}