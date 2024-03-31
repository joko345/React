import React, { useState } from "react";

function StateObject() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "mountain",
        year: "2012"    
    });

    const update = () => {
        setCar(previousState => {
            return {...previousState, year: "2020"}; // Mengubah elemen pada state
        });
    };
    //jika tidak menggunakan previousState maka update elemen akan menimpa semua object state
    return (
        <>
            <h1>My car {car.brand} {car.model} from {car.year}</h1>
            <button
                type="button"
                onClick={update} 
            >2020</button>
        </>
    );
}

export default StateObject;
