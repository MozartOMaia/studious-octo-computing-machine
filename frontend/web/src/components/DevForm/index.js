import React, {useEffect, useState} from 'react';


function DevForm({ onSubmit }){

  const [username, setUsername] = useState('');
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

  async function handleSubmit(e){
    e.preventDefault();

    await onSubmit({
        username,
        techs,
        latitude,
        longitude,
    });

    setUsername(''); //limpar campos
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor='username'>Usuario do github</label>
            <input name="username" 
            id="username" 
            required 
            value={username}
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
              <input name="latitude" id="latitude" required value={latitude}
              onChange={e => setLatitude(e.target.value)}
              />
            </div>
          </div>
          <div className="input-block">
            <label htmlFor='longitude'>Longitude</label>
            <input name="longitude" id="longitude" required value={longitude}
            onChange={e => setLongitude(e.target.value)}
            />
          </div>

          <button type='submit' onClick={handleSubmit}>Salvar</button>
        </form>
  );

}

export default DevForm;