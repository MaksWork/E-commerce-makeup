import React, { useContext } from 'react'
import { AuthContext } from '../../context'

import './Login.scss'
import MakeInput from '../../components/UI/input/MakeInput'
import MakeButton from '../../components/UI/button/MakeButton'

const Login = () => {
	let {isAuth, setAuth} = useContext(AuthContext)
	
	const login = (e) => {
		e.preventDefault();
		setAuth(true)
	}

	return(
		<div className='login_page'>
			<form onSubmit={login}>
				<h1>Login Page</h1>
				<MakeInput placeholder='Login'></MakeInput>
				<MakeInput placeholder='Password' type='password'></MakeInput>
				<MakeButton>Login</MakeButton>
			</form>
		</div>
	)
}
export default Login