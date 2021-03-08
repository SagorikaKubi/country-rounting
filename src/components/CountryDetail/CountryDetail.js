import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CountryDetail = () => {
    const { name } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountry(data)
                // console.log(data)
            })
    }, [name])

    const flagStyle = {
        height: "150px",
        width: "150px"
    }

    return (
        <div>
            <h1>Country Details of {name}</h1>
            {
                country.map(cntry => <div>
                    <img style={flagStyle} src={cntry.flag} alt="" />
                    <h3>Name: {cntry.name}</h3>
                    <p>capital: {cntry.capital}</p>
                    <p>Region: {cntry.region}</p>
                </div>)
            }
        </div>
    );
};

export default CountryDetail;