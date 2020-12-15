import React, { useState, useEffect } from 'react';
import CardVenta from './CardVenta';

const Venta = (props) => {

    const [people, setPeople] = useState({});
    const [hasError, setErrors] = useState(false);

    async function fetchData() {
        const url ='https://swapi.dev/api/people/' + props.peopleId;
        const res = await fetch(url);

        res
            .json()
            .then(res => setPeople(res))
            .catch(err => setErrors(err));

}

    useEffect(() => {
        //Llamar a Api
        fetchData();
    }, []);



    return (
    <CardVenta character={people}/>
    );
}

export default Venta;