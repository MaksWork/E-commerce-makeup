import React from 'react'

import './Home.scss'

import HomeImages from '../../components/HomeImages.js'

const Home = () => {
	return(
		<div className="home-page">
      		<span className='home-title'>Makeup World</span>
      		<p>E-Commerce website for looking makeup and buy it</p>
      		<HomeImages/>
    	</div>
	)
}
export default Home