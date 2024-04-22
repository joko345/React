import React, { useState } from 'react';

function DropDown(){
    const [myName, setMyName] = useState("Mano");
    const handleChange = (event) => {
        setMyName(event.target.value)
    }

        return(
            <form>
                <select value = {myName} onChange={handleChange}>
                    <option value = 'Joko'>Joko</option>
                    <option value = 'Hanzo' selected>Hanzo</option>
                 {/* pada html selected merupakan nilai default, pada reactJS default diatur pada useState value */}    
                    <option value = 'Mano'>Mano</option>
                </select>
            </form>
        )
}
export default DropDown;