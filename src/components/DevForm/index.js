import React, { useState, useEffect } from 'react';

export default function DevForm( { onSubmit } ) {

    
    //Estado para armazenar o valor de latitude e longitude
    const [ github_username, setGithubUsername ] = useState('');
    const [ techs, setTechs ] = useState('');

    const [ latitude, setLatitude ] = useState('');
    const [ longitude, setLongitude ] = useState('');

    //Será disparado toda vez que uma informação alterar ou uma única vez
  useEffect(() => {

    /*  Vamos carregar a localização do usuário carregando a API de geoloca
        lização do navegador pra obter a latitude e longitude.
    
        Vamos precisar da função do navegador: 
        navigator.geolocation.getCurrentPosition
    
        - Ela precisa ser executada apenas uma vez na aplicação
    
        - Precisamos controlar quando essa função será executada, se 
          colocar-mosdiretamente no código toda vez que for alterado 
          um estado a função será executada. Vamos precisar do 'userEffet'
    
     */
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

      async function handleSubmit(e) {

        e.preventDefault();

        await onSubmit({

            github_username,
            techs,
            latitude,
            longitude,

        });

        setGithubUsername('');
        setTechs('');
      }

    return(
        <form onSubmit={handleSubmit}>

        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" 
            id="github_username" 
            required 
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}//Seta o valor no estado
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input 
            name="techs" 
            id="techs" 
            required 
            value={techs}
            onChange={e => setTechs(e.target.value)}//Seta o valor no estado
          />
        </div>

        <div className="input-group">

          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
              name="latitude" 
              id="latitude" 
              required 
              value={latitude}
              onChange={e => setLatitude(e.target.value)}//Seta o valor no estado
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
            />
          </div>

        </div>

        <button type="submit">Salvar</button>

      </form>
    );
}