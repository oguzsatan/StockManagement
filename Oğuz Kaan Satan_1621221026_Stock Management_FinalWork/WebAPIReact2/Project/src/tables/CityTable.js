import React from 'react'

const CityTable = props => (
  <table>
    <thead>
      <tr>
        <th>City Name</th>
      </tr>
    </thead>
    <tbody>
      {props.cities.length > 0 ? (
        props.cities.map(city => (
          <tr key={city.id}>
            <td>{city.cityName}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No city</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default CityTable
