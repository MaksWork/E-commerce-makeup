import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
	return(
		<ul className='navbar'>
			<li><Link to={'/'}>Home</Link></li>
			<li><Link to={'/products'}>Products</Link></li>
			<li><Link to={'/about'}>About</Link></li>
		</ul>
	)
}
export default Navbar