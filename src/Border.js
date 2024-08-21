import React, { useState } from 'react';
import Buttons from './Buttons';

export default function Border() {

    //used to bring user back to region selection
    const [displayHomeButton, setDisplayHomeButton] = useState(false);
    const updateHomeButton = () => {
        setDisplayHomeButton(!displayHomeButton);
    }

    //used to bring back to region's pokedex
    const [displayPokedexButton, setDisplayPokedexButton] = useState(false);
    // const updatePokedexButton = (truth) => {
    //     setDisplayPokedexButton(truth);
    // }

    return (
        <>
        <div className='border'>
            <div className='navButtons'> {/**link to API, back to home/regions, back to pokedex */}
                <button title='Link to API'><a href='https://pokeapi.co/' target='_blank'><i class="fa-solid fa-table-list"></i></a></button>
                {displayHomeButton && <button id="regionStartButton" title='Back to Pokémon Regions'><i class="fa-solid fa-earth-americas"></i></button>}
                {displayPokedexButton && <button id="pokedexStartButton"><i class="fa-solid fa-circle-arrow-left"></i></button>}
            </div>
            <span>NaTioNaL PoKéDeX</span>
        </div>
        <Buttons
            updateHomeButton = {updateHomeButton} 
            // displayHomeButton={displayHomeButton}
            // setDisplayHomeButton={setDisplayHomeButton}
            // displayPokedexButton={displayPokedexButton}
            // setDisplayPokedexButton={setDisplayPokedexButton}
        />
        </>
    );
}