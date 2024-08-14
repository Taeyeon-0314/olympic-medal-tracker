import React from 'react';

const MedalList = ({ countries, setCountries }) => {
  // 국가 삭제
  const handleDeleteCountry = (id) => {
    setCountries(countries.filter((item) => item.id !== id));
  };

  return (
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
  );
};

export default MedalList;
