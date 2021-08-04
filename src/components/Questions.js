import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import { fetchQuestions } from '../actions/question_actions';

class Questions extends React.Component {

    componentDidMount() {
        this.props.fetch();
    }

    generateQuestionsList() {
        return this.props.questions.map((question, i) => 
            <Question 
                key={`question-${i}`}
                question={question}
            />
        )
    }

    render() {
        return(
            <>
                {this.props.questions[0] ? this.generateQuestionsList() : 'No Questions :('}
            </>
        )
    }
}

const msp = ({questions}) => ({
    questions: questions ? Object.values(questions) : [],
})

const mdp = dispatch => ({
    fetch: () => dispatch(fetchQuestions())
})

export default connect(msp, mdp)(Questions);


// need ability to fetch questions when mounted
// need access to all of the questions after they are fetched