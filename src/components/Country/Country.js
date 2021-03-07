import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const { name, capital, region } = props.country;
    const history = useHistory();

    const handleClick = (name) => {
        const url = `/country/${name}`;
        history.push(url)
    }

    const countryStyle = {
        border: "1px solid purple",
        borderRadius: "20px",
        padding: "20px",
        margin: "20px"
    }
    return (
        <div style={countryStyle}>
            <h3>Country Name: {name}</h3>
            <p>Capital Name: {capital}</p>
            <p>Region: {region}</p>

            <Link to={`/country/${name}`}>
                <button onClick={() => handleClick(name)}>show details of country {name}</button>
            </Link>

        </div>
    );
};

export default Country;