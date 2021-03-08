import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, []);
    const {name, population, region, subregion, capital, flag} = country;

    return (
        <div className='d-flex justify-content-center align-items-center p-5'>
            <div className="card" style={{width: "18rem"}}>
            <img src={flag} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Population: {population}</p>
                <p className="card-text">region: {region}</p>
                <p className="card-text">subregion: {subregion}</p>
                <p className="card-text">capital: {capital}</p>
                <a href="/" className="btn btn-primary">Back</a>
            </div>
            </div>
        </div>
    );
};

export default CountryDetails;