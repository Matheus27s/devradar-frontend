import React from 'react';

import './style.css';

export default function DevItem({ dev }) {
    
    return(

        <li className="dev-item" key={dev._id}>
            <header>
                <img src={ dev.avatar_url } alt={ dev.name }/>
                <div className="user-info">
                    <strong>{ dev.name }</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{ dev.bio }</p>
            <a target="_blank" href={`https://github.com/${dev.github_username}`}>
                Acessar perfil no Github</a>
        </li>
    );

}

//L153 - join(, ) - Separo o que estiver dentro do array com virgula e espaço


