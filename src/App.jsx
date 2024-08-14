import React, { useState } from 'react';
import './App.css';
import H1Title from './components/H1Title';
import InputMedal from './components/InputMedal';
import MedalList from './components/MedalList';

function App() {
  // 상태관리
  const [countries, setCountries] = useState([]); // 국가 리스트

  return (
    <div className="container">
      <H1Title />
      <InputMedal countries={countries} setCountries={setCountries} />
      <MedalList countries={countries} setCountries={setCountries} />
    </div>
  );
}

export default App;
