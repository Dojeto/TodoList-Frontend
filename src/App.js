import React,{Fragment} from 'react';
import InputTodo from './components/InputTodo'
import ListTodo from './components/ListTodo'
import './App.css';

function App() {
  return (
      <Fragment>
        <InputTodo/>
        <ListTodo/>
      </Fragment>
  );
}

export default App;
