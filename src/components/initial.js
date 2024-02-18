import React, { useRef, useState } from 'react';

const Initial = () => {
    const textInput = useRef();
    const [showNext, setShowNext] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleChange = () => {
        if(textInput.current.value.length >= 5) {
            setShowNext(true);
        } else {
            setShowNext(false);
        }
    }

    const handleSubmit = () => {
        const value = textInput.current.value;
        if(value.length >= 30) {
            setShowError(true);
            return false;
        } else {
            setShowError(false);
            alert('NEXT');
        }
    }

    return (
        <div>
            <h2>Ask your question</h2>
            <div className="input-group mb-3">
                <input
                    ref={textInput}
                    onChange={handleChange}
                    name="question"
                    type="text"
                    className="form-control"
                />
                {showNext && 
                    <button className="btn" onClick={handleSubmit}>Next</button>
                }
                {showError &&
                    <div className="error">
                        <h5>The question is too long</h5>
                    </div>
                }
            </div>
        </div>
    );
}

export default Initial;
