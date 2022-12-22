import React, { useState } from 'react'

export default function Textform(props) {
    const changeup = (event) => {
        console.log("onchange event")
        settext(event.target.value);

    }
    const uppercase = () => {
        console.log( text);
       let newtext = text.toUpperCase();  
        settext(newtext)  
    }
    const lowercase = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext)
    }
    const [text, settext] = useState(" ")
    return (
        <div>

            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label Htmlfor="mybox" class="form-label"></label>
                <textarea className="form-control"    onChange={changeup}   value={text} id="mybox" rows="8"></textarea>
                {/* <textarea className="form-control"  id="mybox" rows="8"></textarea> */}
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={uppercase}>Convert to uppercase</button>
            <button type="button" className="btn btn-primary" onClick={lowercase}>Convert to lowercase</button>
            <p>{text.length-1} character {text.split(" ").length-1} Words</p>
            {/* <p>{text.length-1} character {text.split(" ").length-1} Words</p> */}
            <h2>Preview</h2>
            <p>{text}</p>
        </div>




    )
}
