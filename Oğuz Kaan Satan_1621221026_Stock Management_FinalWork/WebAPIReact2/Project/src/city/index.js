import React, { useEffect,useState } from 'react'
import CityTable from '../tables/CityTable'
import axios from 'axios'

export const City = () => {
	// Data
	let citiesData = [];

	const [ cities, setCities ] = useState(citiesData);
	
	useEffect(() => {
		getData();

	  }, []);

	  const getData = async () => {
        let url = 'https://localhost:44343/api/Cities'

        const response = await axios.get(url)
        console.log('response', response)
        setCities(response.data)
    }



	

	return (
		<div className="container">
			<h1>Crud App</h1>
			<div className="flex-row">
				<div className="flex-large">
					<h2>View Cities</h2>
					<CityTable cities={cities}  />
				</div>
			</div>
		</div>
	)
}
