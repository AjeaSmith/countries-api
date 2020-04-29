import React, { Fragment, useEffect, useState } from 'react';
import { searchByName } from '../../api';
import { GlobalStyles } from '../../global/detail';
import '../../css/detail.scss';
import { Link } from 'react-router-dom';

const Detail = ({ match: { params: { id } } }) => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const response = await searchByName(id);
            return setdata(response);
        }
        fetchAPI();
    }, [])
    const test = () => {
        console.log("hello")
    }
    return (
        <Fragment>
            <GlobalStyles />
            <main className="detail_main">
                <div className="country_wrapper">
                    <div className="back_btn">
                        <button type="button" onClick={test}><i className="fas fa-arrow-left"></i>
                            <Link to="/">Back</Link>
                        </button>
                    </div>
                    <div className="detail_wrapper">
                        {!data.length ? <p>{data.message}</p> : data.map((country, i) => {
                            return (
                                <div className="detail" key={i}>
                                    <img src={country.flag} alt="a placeholder image" />
                                    <div className="detail_content">
                                        <h2>{country.name}</h2>
                                        <div className="split_content">
                                            <ul>
                                                <li>
                                                    <p>Native Name: <span>{country.nativeName}</span></p>
                                                </li>
                                                <li>
                                                    <p>Population: <span>{country.population}</span></p>
                                                </li>
                                                <li>
                                                    <p>Region: <span>{country.region}</span></p>
                                                </li>
                                                <li>
                                                    <p>Sub Region: <span>{country.subregion}</span></p>
                                                </li>
                                                <li>
                                                    <p>Capital: <span>{country.capital}</span></p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <p>Top Level Domain: <span>{country.topLevelDomain}</span></p>
                                                </li>
                                                <li>
                                                    {country.currencies.map((current, i) => {
                                                        return (
                                                            <p key={i}>Currencies: <span>{current.code}</span></p>
                                                        )
                                                    })}
                                                </li>
                                                <li>
                                                    <p>Languages: {country.languages.map((lang, i) => {
                                                        return (
                                                            <span key={i}> {lang.name} </span>
                                                        )
                                                    })}</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="borders">
                                            <p>Border Countries:</p>
                                            <div className="btn_container">
                                                {country.borders.map((btn, i) => {
                                                    return (<button type="button" key={i}>{btn}</button>)
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
export default Detail;
