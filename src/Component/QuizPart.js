import React from 'react';
import './QuizPart.css';

const QuizPart = (props) => {

    return (
        <div className='QuizPart'>
        <h3>{props.questionNumber} ) {props.question}</h3>
        

        <div className='OptionSection'>
            <button onClick={props.optionClickHandler}>{props.option1}</button>
            <button onClick={props.optionClickHandler}>{props.option2}</button>
            <button onClick={props.optionClickHandler}>{props.option4}</button>
            <button onClick={props.optionClickHandler}>{props.option3}</button>
        </div>
        
        </div>
    );
}

export default QuizPart;