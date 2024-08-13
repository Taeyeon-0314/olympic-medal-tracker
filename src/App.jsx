import React, { useState } from 'react';
import './App.css';

function App() {
  // 상태관리
  const [countries, setCountries] = useState([]); // 국가 리스트
  const [country, setCountry] = useState(''); // 국가명
  const [gold, setGold] = useState(0); // 금메달
  const [silver, setSilver] = useState(0); // 은메달
  const [bronze, setBronze] = useState(0); // 동메달

  // 국가 추가
  const handleAddCountry = (event) => {
    event.preventDefault(); // form 제출시 페이지 새로고침 안되게하기
    const existingCountryIndex = countries.findIndex(
      (item) => item.name === country
    );
    if (existingCountryIndex !== -1) {
      alert('이미 등록된 국가입니다.');
    } else if (country === '') {
      alert('국가명을 입력해주세요.');
    } else {
      const newCountry = {
        id: countries.length + 1,
        name: country,
        gold: gold,
        silver: silver,
        bronze: bronze,
      };
      setCountries([...countries, newCountry]);
    }
    setCountry('');
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  //국가 업데이트
  const handleUpdateCountry = () => {
    const existingCountryIndex = countries.findIndex(
      (item) => item.name === country
    );

    if (existingCountryIndex !== -1) {
      const updatedCountries = [...countries];
      updatedCountries[existingCountryIndex] = {
        ...updatedCountries[existingCountryIndex],
        gold: gold,
        silver: silver,
        bronze: bronze,
      };
      setCountries(updatedCountries);
    } else {
      alert('등록되지 않은 국가입니다.');
    }
    setCountry('');
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  // 국가 삭제
  const handleDeleteCountry = (id) => {
    setCountries(countries.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">
        <span className="titleBlack">2024 </span>
        <span className="titleBlue">파</span>
        <span className="titleYellow">리</span>
        <span className="titleblack">올</span>
        <span className="titleGreen">림</span>
        <span className="titleRed">픽</span>
      </h1>
      <form className="inputGroup" onSubmit={handleAddCountry}>
        <div className="inputDiv">
          <label className="labelClass">국가명</label>
          <input
            type="text"
            placeholder="국가 입력"
            value={country}
            onChange={(event) =>
              setCountry(event.target.value.replaceAll(' ', ''))
            }
          />
        </div>
        <div className="inputDiv">
          <label className="labelClass">금메달🥇</label>
          <input
            type="number"
            placeholder="0"
            value={gold}
            onChange={(event) => setGold(parseInt(event.target.value) || 0)}
            min="0"
          />
        </div>
        <div className="inputDiv">
          <label className="labelClass">은메달🥈</label>
          <input
            type="number"
            placeholder="0"
            value={silver}
            onChange={(event) => setSilver(parseInt(event.target.value) || 0)}
            min="0"
          />
        </div>
        <div className="inputDiv">
          <label className="labelClass">동메달🥉</label>
          <input
            type="number"
            placeholder="0"
            value={bronze}
            onChange={(event) => setBronze(parseInt(event.target.value) || 0)}
            min="0"
          />
        </div>
        <div className="formButton">
          <button type="submit">국가 추가</button>
          <button type="button" onClick={handleUpdateCountry}>
            업데이트
          </button>
        </div>
      </form>

      <div className="countryList">
        {countries.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>국가명</th>
                <th>금메달🥇</th>
                <th>은메달🥈</th>
                <th>동메달🥉</th>
                <th>총메달수</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              {countries
                .sort((a, b) => {
                  if (b.gold !== a.gold) return b.gold - a.gold;
                  if (b.silver !== a.silver) return b.silver - a.silver;
                  return b.bronze - a.bronze;
                })
                .map((country) => (
                  <tr key={country.id}>
                    <td>{country.name}</td>
                    <td>{country.gold}</td>
                    <td>{country.silver}</td>
                    <td>{country.bronze}</td>
                    <td>{country.gold + country.silver + country.bronze}</td>
                    <td>
                      <button onClick={() => handleDeleteCountry(country.id)}>
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <p className="noMedalpTag">
            아직 추가된 국가가 없습니다. 메달을 추적하세요!!!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
