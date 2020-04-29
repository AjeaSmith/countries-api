import React from 'react';
import { Link } from 'react-router-dom'

const Countries = ({ data }) => {
    return (
        <div className="countries_wrapper">
            {!data.length ? <p>{data.message}</p> : data.map((country, i) => {
                return (
                    <div className="country" key={i}>
                        <img src={country.flag} alt="Country Flag" />
                        <div className="country_content">
                            <h2><Link to={`/detail/${country.name}`.replace(/ /g, '-')}>{country.name}</Link></h2>
                            <ul>
                                <li>
                                    <span className="title">Population</span>: <span>{country.population}</span>
                                </li>
                                <li>
                                    <span className="title">Region</span>: <span>{country.region} </span>
                                </li>
                                <li>
                                    <span className="title">Capital</span>: <span> {country.capital}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}
export default Countries;
