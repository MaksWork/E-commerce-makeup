import React, { useContext } from 'react'

import {Route, Routes} from 'react-router-dom'
import { AuthContext } from '../context/index.js';
import { publicRoutes, privateRoutes } from '../router/index.js'
import Login from '../pages/Login/Login.js';

const AppRouter = () => {
	const {isAuth} = useContext(AuthContext);
	
	return(
		<Routes>
			{isAuth 
				?	
				privateRoutes.map((route, i) =>{
					return <Route key={i} path={route.path} element={<route.element/>}/>
				})
				:
				publicRoutes.map((route, i) =>{
					return <Route key={i} path={route.path} element={<route.element/>}/>
				})
			}
			<Route path='*' element={<Login/>}/>
      	</Routes>
	)
}
export default AppRouter