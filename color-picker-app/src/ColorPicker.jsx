import {useState} from "react";

function ColorPicker() {
    const [color, setColor]= useState("#ffffff");
    function updateColor(event) {
        setColor(event.target.value)
    }

    return(
        <div className="colorContainer">
            <h1>COLOR PICKER</h1>
            <h2>PICK A COLOR</h2>
            <div className="colorDisplay" style={{backgroundColor:color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color:</label> <br />
            <input type="color" value={color} onChange={updateColor} />
        </div>
    )
}
export default ColorPicker