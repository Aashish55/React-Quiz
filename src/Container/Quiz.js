import React, { Component } from 'react';
import QuizPart from '../Component/QuizPart'
import HeadingPart from '../Component/HeadingPart'
import axios from 'axios';
import './Quiz.css'

class Quiz extends Component{
    state={
        question:'',
        correctAnswer:'',
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        questionNumber:0,
        responseData:''
    }
    
    componentDidMount(){
        axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple').then(response=>{
        //    console.log(response.data.results[this.state.questionNumber])
        this.setState({responseData:response.data.results})

        this.setState({
            question:this.state.responseData[this.state.questionNumber].question,
            correctAnswer:this.state.responseData[this.state.questionNumber].correct_answer,
            option1:this.state.responseData[this.state.questionNumber].correct_answer,
            option2:this.state.responseData[this.state.questionNumber].incorrect_answers[0],
            option3:this.state.responseData[this.state.questionNumber].incorrect_answers[1],
            option4:this.state.responseData[this.state.questionNumber].incorrect_answers[2],
        })
        
        });
    }

    nextButtonHandler=()=>{
        this.setState(prevState => ({
            questionNumber:prevState.questionNumber++,
            question:this.state.responseData[this.state.questionNumber].question,
            correctAnswer:this.state.responseData[this.state.questionNumber].correct_answer,
            option1:this.state.responseData[this.state.questionNumber].correct_answer,
            option2:this.state.responseData[this.state.questionNumber].incorrect_answers[0],
            option3:this.state.responseData[this.state.questionNumber].incorrect_answers[1],
            option4:this.state.responseData[this.state.questionNumber].incorrect_answers[2],
        }));
    }
    optionClickHandler=()=>{
        
    }
    render(){
        return (
            <div className='QuizSection'>
            <HeadingPart />
            <QuizPart questionNumber={this.state.questionNumber+1}
            question={this.state.question}
            option1={this.state.option1}
            option2={this.state.option2}
            option3={this.state.option3}
            option4={this.state.option4}
            optionClickHandler={this.optionClickHandler}
            />
            <button className='nextButton' onClick={this.nextButtonHandler}>Next</button>
            </div>
        );
    }
}

export default Quiz;