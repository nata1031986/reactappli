import React, { useRef, useState } from 'react';

const Initial = () => {
    const textInput = useRef();
    const [showNext, setShowNext] = useState(false);
    const handleChange = () => {
        if(textInput.current.value.length >= 5) setShowNext(true);
        else setShowNext(false);
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
                    <button className="btn" type="button">Next</button>
                }
            </div>
        </div>
    );
}

export default Initial;
