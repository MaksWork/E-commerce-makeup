import { useState } from "react"

export const useFetching = (callback) =>{
	let [isLoading, setLoading] = useState(false);
	let [error, setError] = useState('');

	const fething = async () =>{
		try {
			setLoading(true);
			await callback();
		} catch (error) {
			setError(error.message)
		}
		finally{
			setLoading(false);
		}
	}

	return [fething, isLoading, error];
}