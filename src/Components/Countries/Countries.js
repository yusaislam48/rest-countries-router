import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);

    return (
        
        <div className="d-flex justify-content-center align-items-center mt-2">
        <div className="container">
            <div class="row">
                {
                    countries.map(country => <Country key={country.alpha2Code} country={country}></Country>)
                }
            </div>
        </div>
        </div>
    );
};

export default Countries;