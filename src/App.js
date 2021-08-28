import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const initialURL ="https://gateway.marvel.com:443/v1/public/characters?limit=40&offset=0&ts=146097&apikey=c3be1e0fe9ab77d727ab9e0496108c6f&hash=cda3c0e1591878e1e1b29c52fecc8269"
  const [char, setChar] = useState([])
  

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setChar(data.data.results)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchCharacters(initialURL)
  }, [])

  console.log(char)

  return (
    <div >
      <div className="bg"></div>
      <div className="App">
        <div className="card">
          <ul>
            {char.map((list, index) => 
              <li key={index} className="Character">
                <img src={list.thumbnail.path + '.' + list.thumbnail.extension} className="img" alt="" />
                <p>{list.name}</p>              
              </li> )}
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default App;
