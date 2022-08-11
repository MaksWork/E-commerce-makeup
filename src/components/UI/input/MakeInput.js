import React from 'react'

import './MakeInput.scss'

const MakeInput = ({...props}) => {
	return(
		<input className='custom_input' {...props}></input>
	)
}
export default MakeInput