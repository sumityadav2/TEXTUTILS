import React, { useState } from 'react'


export default function TextForm(props) {

    const UpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }

    const LowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const ClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to ClipBoard", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText("fafvfe");
    return (
        <>
            <div className='container'>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={UpperClick}>Convert to UpperCase Letter</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={LowerClick}>Convert to LowerCase Letter</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={ClearClick}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy </button>
            </div>
            <div className='container my-3'>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)} minutes take time to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}