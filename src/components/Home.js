import React from 'react';
import { Link } from 'react-router-dom';
import balimg from '../images/HomeImages/balimg.png'; 
import './componentCSS/Home.css'

function Home() {
  return (
    <div className='home-container'>
      
      <div className="home-info">
        <h2>Explore the breathtaking nature of Bosnia and Herzegovina and learn more about interesting places that you may visit</h2>
        <Link to="/allplaces"><button>EXPLORE</button></Link>
      </div>

      <div className="bal-img">
        <img src={balimg} alt="" />
      </div>

    </div>
  )
}

export default Home