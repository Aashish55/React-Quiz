import React from 'react';
import './HeadingPart.css';

const HeadingPart = (props) => {
    return (
        <div className='HeadingPart'>
            <h2>
                Welcome to AJ Quiz App.
            </h2>
            <p>
                This Quiz contains 10 questions.
            </p>
        </div>
    );
}

export default HeadingPart;