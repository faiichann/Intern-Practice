import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import{ useEffect, useState, useMemo, useCallback} from 'react';
import Home from 'Home';
import { useCounter } from 'useCounter';
import { useCalculate } from 'useCalculate';
import  NumpadComponent from 'components/NumpadComponent';

import { AppProvider } from 'contexts/AppContext';
import  StudentBoard  from 'components/StudentBoard';
import StudentInput from 'components/StudentInput';

function App() {

  return (
    <div className="App">
      <NumpadComponent/>
    </div>
  );
}

export default App;
