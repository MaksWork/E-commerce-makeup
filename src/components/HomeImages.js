import React from 'react'

import '../styles/HomeImages.scss'

import center from '../imgs/HomePage/centerImage.png'
import sideUpRight from '../imgs/HomePage/sideImage.png'
import sideBotRight from '../imgs/HomePage/sideImage2.png'
import sideUpLeft from '../imgs/HomePage/sideImage3.png'
import sideBotLeft from '../imgs/HomePage/sideImage4.png'


const HomeImages = () => {
	return(
		<div className='home-images'>
			<div className='side'>
				<img alt='' src={sideUpRight}></img>
				<img alt='' src={sideBotRight}></img>
			</div>
			<div className='center'>
				<img alt='' src={center}></img>
			</div>
			<div className='side'>
				<img alt='' src={sideUpLeft}></img>
				<img alt='' src={sideBotLeft}></img>
			</div>
		</div>
	)
}
export default HomeImages