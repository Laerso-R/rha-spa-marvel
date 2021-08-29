import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [char, setChar] = useState([])
  const [offset, setOffset] = useState(0)
  
  const initialURL = `https://gateway.marvel.com:443/v1/public/characters?limit=100&offset=${offset}&ts=146097&apikey=c3be1e0fe9ab77d727ab9e0496108c6f&hash=cda3c0e1591878e1e1b29c52fecc8269`

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
  }, [initialURL, offset])
  
  function prevPage () {
    setOffset(offset-40)
  }
  function nextPage () {
    setOffset(offset+40)
  }

  console.log(offset)

  return (
    <div className="bar">
      <header className="header">
        <img src="https://theme.zdassets.com/theme_assets/2376335/f68b4cede823c3050cf95809224868d201a3d53a.jpg" alt="" />
        { offset > 0 ? <button className="button" onClick={prevPage}>Previous Page</button> : null} 
        <button className="button" onClick={nextPage}>Next Page</button> 
      </header>
      
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
