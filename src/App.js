import React, { useEffect, useState } from 'react';
import './App.css'
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data)

  return (
    
    <div className='container'>
      <div className='image-container'>
        {data && (
          <img src={data.picture.medium} alt="alt"/>
        )}
      </div>
      <div className='content'>
        <div className='names'>
        <div className='firstName'>
          {data && (
          <h3>{data.name.first}</h3>
          )}
        </div>
        <div className='lastName'>
        {data && (
          <h3>{data.name.last}</h3>
          )}
        </div>
        </div>
        <div className='Gender'>
        {data && (
          <h3>{data.gender}</h3>
          )}
        </div>
        <div className='phoneNumber'>
        {data && (
          <h3>{data.phone}</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
