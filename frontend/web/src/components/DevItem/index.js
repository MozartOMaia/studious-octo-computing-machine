import React from 'react';

import './styles.css';

function DevItem(props){ //ou { dev }
    const { dev } = props;

    return (
        <li className='dev-item'>
        <header>
          <img alt={dev.name} src={dev.avatar} />
          <div className='user-info'>
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.username}`}>Acessar perfil no Github</a>
      </li>
    )
}

export default DevItem;