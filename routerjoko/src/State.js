import React, { useState } from "react";

function State() {
    const [color, setColor] = useState("red");
    return (
        <>
            <h1>Favorite color {color}</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >
                Change Color to Blue
            </button>
        </>
    );
}

export default State;
