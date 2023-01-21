

import React, { useState, useEffect } from 'react';
import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';




function App() {
  const [github_username, setUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
    
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);
  


  return (
    <div id ="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor='github_username'>Usuario do github</label>
            <input name="github_username" 
            id="github_username" 
            required 
            value={github_username}
            onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor='techs'>Tecnologias</label>
            <input name="techs" 
            id="techs" 
            required 
            value={techs}
            onChange={e => setTechs(e.target.value)}
            />
          </div>
          <div className='input-group'>
            <div className="input-block">
              <label htmlFor='latitude'>Latitude</label>
              <input name="latitude" id="latitude" required value={latitude}/>
            </div>
          </div>
          <div className="input-block">
            <label htmlFor='longitude'>Longitude</label>
            <input name="longitude" id="longitude" required value={longitude}/>
          </div>

          <button type='submit'>Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className='dev-item'>
            <header>
              <img src="https://avatars.githubusercontent.com/u/37476677?v=4"></img>
              <div className='user-info'>
                <strong>Mozart Maia</strong>
                <span>Python, Django, React</span>
              </div>
            </header>
            <p>Desenvolvedor web lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,</p>
            <a href='https://github.com/MozartOMaia'>Acessar perfil no Github</a>
          </li>
          <li className='dev-item'>
            <header>
              <img src="https://avatars.githubusercontent.com/u/37476677?v=4"></img>
              <div className='user-info'>
                <strong>Mozart Maia</strong>
                <span>Python, Django, React</span>
              </div>
            </header>
            <p>Desenvolvedor web lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,</p>
            <a href='https://github.com/MozartOMaia'>Acessar perfil no Github</a>
          </li>
          <li className='dev-item'>
            <header>
              <img src="https://avatars.githubusercontent.com/u/37476677?v=4"></img>
              <div className='user-info'>
                <strong>Mozart Maia</strong>
                <span>Python, Django, React</span>
              </div>
            </header>
            <p>Desenvolvedor web lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,</p>
            <a href='https://github.com/MozartOMaia'>Acessar perfil no Github</a>
          </li>
          <li className='dev-item'>
            <header>
              <img src="https://avatars.githubusercontent.com/u/37476677?v=4"></img>
              <div className='user-info'>
                <strong>Mozart Maia</strong>
                <span>Python, Django, React</span>
              </div>
            </header>
            <p>Desenvolvedor web lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,</p>
            <a href='https://github.com/MozartOMaia'>Acessar perfil no Github</a>
          </li>
        </ul>

      </main>      
    </div>    
  );
}

export default App;
