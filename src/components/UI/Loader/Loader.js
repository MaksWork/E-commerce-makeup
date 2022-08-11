import React from 'react'

import './Loader.scss'

const Loader = () => {
	return(
		<div className='loader_container'>
			<svg viewBox="25 25 50 50">
      			<circle cx="50" cy="50" r="20"></circle>
    		</svg>
		</div>
	)
}
export default Loader