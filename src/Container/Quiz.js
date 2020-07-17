import React, { Component } from 'react';
import QuizPart from '../Component/QuizPart'
import HeadingPart from '../Component/HeadingPart'
import './Quiz.css'

class Quiz extends Component{
    render(){
        return (
            <div className='QuizSection'>
            <HeadingPart />
            <QuizPart />
            </div>
        );
    }
}

export default Quiz;