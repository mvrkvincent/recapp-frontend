// need ability to submit a question
// need ability to fetch questions when mounted
// need access to all of the questions after they are fetched

import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const receiveQuestions = createAction('RECEIVE_QUESTIONS');
export const receiveQuestion = createAction('RECEIVE_QUESTION');


export const fetchQuestions = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/questions');
        dispatch(receiveQuestions(res.data)); // many questions
    } catch (err) {
        console.log('oh no! questions are broken :(')
    }
}

export const submitQuestion = question => async dispatch => {
    try {
        const res = await axios.post('http://localhost:5000/api/questions', question);
        dispatch(receiveQuestion(res.data)); // one question
    } catch (err) {
        console.log('oh no! question is broken :(')
    }
}