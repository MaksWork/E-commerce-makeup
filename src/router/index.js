import Account from "../pages/Account/Account.js"
import Login from "../pages/Login/Login.js";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Makeup from "../pages/MakeUp/Makeup";
import ProductById from "../pages/ProductById/ProductById";
import Cart from "../pages/Cart/Cart.js";

export const privateRoutes = [
	{path: '/', element: Home},
	{path: '/products/', element: Makeup}, 
	{path: '/products/:id', element: ProductById},
	{path: '/about', element: About},
	{path: '/account', element: Account},
	{path: '/cart', element: Cart}
]

export const publicRoutes = [
	{path: '/', element: Home},
	{path: '/login', element: Login}
]
