import { typesData } from "./categoryTagsData"

export const getRandomCategory = () =>{
	const categories = typesData;

	return categories[Math.floor(Math.random()*categories.length)].value
}