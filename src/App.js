import React from 'react';
import { Provider } from 'react-redux';
import QuestionForm from './components/QuestionForm';
import Questions from './components/Questions';
import './App.css';

function App({ store }) {
  return (

    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <QuestionForm />
        <Questions />
      </header>
    </div>
    </Provider>
  );
}

export default App;
