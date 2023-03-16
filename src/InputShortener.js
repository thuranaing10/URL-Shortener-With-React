import React, { useState } from "react";

const InputShortener = ({setInputValue}) => {
    const [value, setValue] = useState("");

    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }

    return (
        <div className="inputContainer">
            <h1>URL <span>Shortener</span></h1>

            <input type="text" placeholder="Enter a long url" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={handleClick}>Shorten</button>
        </div>
    )
}

export default InputShortener;