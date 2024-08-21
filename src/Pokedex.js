import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';

export default function Pokedex( props ) {

    //URL prop
    const URL = props.pokedexURL;
    const [pokemon, setPokemon]= useState([]);
    const [pokemonSpecifics, setPokemonSpecifics] = useState([]); //will contain the URL of each specific pokemon

    //retrieve other props values
    const updateHomeButton = props.updateHomeButton;
    const homeButtonClick = () => {
        updateHomeButton(true)
    }

    const updateShowButtons = props.updateShowButtons;
    const updateShowButtonsOnClick = () => {
        updateShowButtons()
    }

    const updateRegion = props.updateRegion;
    const updateRegionOnClick = () => {
        updateRegion()
    }

    useEffect(() => {
        axios.get(URL).then(res => {
            setPokemon(res.data.results.map(p => p.name));
            setPokemonSpecifics(res.data.results.map(p => p.url));
        })
        const regionStarter = document.getElementById("regionStartButton");
        regionStarter.addEventListener("click", function() {
            homeButtonClick(false); //hides home button
            updateRegionOnClick(); //disables pokedex of that region
            updateShowButtonsOnClick(true); //re-enables buttons on home screen
        })
    }, [])

    return (
        <div className='displayPokedex'>
            {pokemon.map((p, index) => ( //loops through each useState const and adds data as a prop to new component
                <Pokemon key={p} name={p} url={pokemonSpecifics[index]}/>
            ))}
        </div>
    );
}
