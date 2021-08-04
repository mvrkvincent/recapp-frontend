import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    questions: {}
}

export const questionReducer = createReducer(initialState, builder => {
    builder
        .addCase("RECEIVE_QUESTIONS", (state, action) => {
            const questions = {};
            action.payload.map(question => questions[question._id] = question);
            state.questions = questions;
        })
        .addCase("RECEIVE_QUESTION", (state, action) => {
            state.questions[action.payload._id] = action.payload
        })
})