import React, { useContext } from 'react'
import { AuthContext } from '../../context'
import MakeButton from '../../components/UI/button/MakeButton'
import { useNavigate } from 'react-router-dom';

import './Account.scss';

const Account = () => {
	let {setAuth} = useContext(AuthContext)
	let navigate = useNavigate();

	return(
		<div className='account_page'>
			<div className='acc-main-info'>
				<i class="fa-solid fa-user-large"></i> {/*//THIS FOR TIME */}
				<div>
					<strong>Name Surname</strong>
					<strong>Login</strong>
					<strong>City</strong>
				</div>
			</div>
			<MakeButton onClick={() => navigate('/cart')}>View Cart</MakeButton>
			<MakeButton onClick={() => setAuth(false)}>Log out</MakeButton>
		</div>
	)
}
export default Account