import React from 'react'

import './Footer.scss'

const Footer = () => { //Yes I know this is bootstrap copy
	return(
		<div className='footer'>
			<div className='footer-content'>
				<div className='column'>
					<h4>Services</h4>
					<h5>Web design</h5>
					<h5>Development</h5>
					<h5>Hosting</h5>
				</div>
				<div className='column'>
					<h4>About</h4>
					<h5>Company</h5>
					<h5>Team</h5>
					<h5>Careers</h5>
				</div>
				<div className='column'>
					<h4>Company</h4>
					<h5>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem<br/> lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu<br/> eget velit pulvinar dictum vel in justo.</h5>
				</div>
			</div>
		</div>
	)
}
export default Footer