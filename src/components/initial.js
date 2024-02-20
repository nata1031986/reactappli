import React, { useRef, useState, useContext } from 'react';
import { MyContext } from '../context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Initial = () => {
    const textInput = useRef();
    const context = useContext(MyContext);
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

           // setShowError(true);
           toast.error("Too long!", {
            position:toast.POSITION.TOP_LEFT
           })
            return false;
        } else {
            setShowError(false);
           
        }

        context.goTo(1);
        context.question(value)
    }

    return (
        <div>
            <h2>Ask your question  🤓</h2>
            <div className="input-group mb-3">
                <input
                    ref={textInput}
                    onChange={handleChange}
                    name="question"
                    type="text"
                    className="form-control"
                />
                {showNext && 
                    <button className="btn animate_animated animate__fadeIn" onClick={handleSubmit}>Next</button>
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
