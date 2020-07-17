import React from 'react';
import './QuizPart.css';

const QuizPart = (props) => {
    return (
        <div className='QuizPart'>
        <h3>This is Question</h3>

        <div className='OptionSection'>
            <button>Options 1</button>
            <button>Options 2</button>
            <button>Options 3</button>
            <button>Options 4</button>
        </div>
        <button className='nextButton'>Next</button>
        </div>
    );
}

export default QuizPart;