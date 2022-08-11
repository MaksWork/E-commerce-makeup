import React from 'react'

import './MakeButton.scss';

const MakeButton = ({children, ...props}) => {
	return(
		<button className='make_button' {...props}>{children}</button>
	)
}
export default MakeButton