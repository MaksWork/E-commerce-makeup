import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Makeup from "../pages/MakeUp/Makeup";
import ProductById from "../pages/ProductById/ProductById";

export const routes = [
	{path: '/', element: Home},
	{path: '/products/', element: Makeup}, 
	{path: '/products/:id', element: ProductById},
	{path: '/about', element: About}
]
