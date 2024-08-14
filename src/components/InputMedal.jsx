import React, { useState } from 'react';

const InputMedal = ({ countries, setCountries }) => {
  const [country, setCountry] = useState(''); // 국가명
  const [gold, setGold] = useState(0); // 금메달
  const [silver, setSilver] = useState(0); // 은메달
  const [bronze, setBronze] = useState(0); // 동메달

  const regExp = /[^a-zA-Z0-9ㄱ-ㅎ가-힣]/gi;
  // 국가 추가
  const handleAddCountry = (event) => {
    event.preventDefault(); // form 제출시 페이지 새로고침 안되게하기
    const existingCountryIndex = countries.findIndex(
      (item) => item.name === country
    );
    if (existingCountryIndex !== -1) {
      alert('이미 등록된 국가입니다.');
      return;
    } else if (country === '') {
      alert('국가명을 입력해주세요.');
      return;
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
      return;
    }
    setCountry('');
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  const inputRegExp = (event) => {
    const inputValue = event.target.value;
    const replaceValue = inputValue.replaceAll(regExp, '');
    setCountry(replaceValue);
  };

  return (
    <div>
      <form className="inputGroup" onSubmit={handleAddCountry}>
        <div className="inputDiv">
          <label className="labelClass">국가명</label>
          <input
            type="text"
            placeholder="국가 입력"
            value={country}
            onChange={inputRegExp}
          />
        </div>
        <div className="inputDiv">
          <label className="labelClass">금메달🥇</label>
          <input
            type="text"
            placeholder="0"
            value={gold}
            onChange={(event) => setGold(parseInt(event.target.value) || 0)}
            min="0"
          />
        </div>
        <div className="inputDiv">
          <label className="labelClass">은메달🥈</label>
          <input
            type="text"
            placeholder="0"
            value={silver}
            onChange={(event) => setSilver(parseInt(event.target.value) || 0)}
            min="0"
          />
        </div>
        <div className="inputDiv">
          <label className="labelClass">동메달🥉</label>
          <input
            type="text"
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
    </div>
  );
};

export default InputMedal;
