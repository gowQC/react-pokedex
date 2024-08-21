import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Pokemon( props ) {

    const url = props.url;
    const name = props.name.charAt(0).toUpperCase() + props.name.slice(1); //capitalizes names properly

    const nameConversion = { //used to manage pokemon with names from API that include specific genders, forms, or unwanted hyphens
        "Nidoran-f" : "Nidoran ♀",
        "Nidoran-m" : "Nidoran ♂", 
        "Deoxys-normal": "Deoxys", 
        "Wormadam-plant" : "Wormadam",
        "Mime-jr" : "Mime Jr.",
        "Porygon-z" : "Porygon-Z",
        "Giratina-altered" : "Giratina",
        "Shaymin-land" : "Shaymin",
        "Basculin-red-striped" : "Basculin",
        "Darmanitan-standard" : "Darmanitan",
        "Tornadus-incarnate" : "Tornadus",
        "Thundurus-incarnate" : "Thundurus",
        "Landorus-incarnate" : "Landorus",
        "Keldeo-ordinary" : "Keldeo",
        "Meloetta-aria" : "Meloetta",
        "Meowstic-male" : "Meowstic",
        "Aegislash-shield" : "Aegislash",
        "Pumpkaboo-average" : "Pumpkaboo",
        "Gourgeist-average" : "Gourgeist",
        "Zygarde-50" : "Zygarde",
        "Oricorio-baile" : "Oricorio",
        "Lycanroc-midday" : "Lycanroc",
        "Wishiwashi-solo" : "Wishiwashi",
        "Minior-red-meteor" : "Minior",
        "Mimikyu-disguised" : "Mimikyu",
        "Tapu-koko" : "Tapu Koko",
        "Tapu-lele" : "Tapu Lele",
        "Tapu-bulu" : "Tapu Bulu",
        "Tapu-fini" : "Tapu Fini",
        "Toxtricity-amped" : "Toxtricity",
        "Mr-rime" : "Mr. Rime",
        "Eiscue-ice" : "Eiscue",
        "Indeedee-male" : "Indeedee",
        "Morpeko-full-belly" : "Morpeko",
        "Urshifu-single-strike" : "Urshifu",
        "Basculegion-male" : "Basculegion",
        "Enamorus-incarnate" : "Enamorus",
        "Great-tusk" : "Great Tusk",
        "Scream-tail" : "Scream Tail",
        "Brute-bonnet" : "Brute Bonnet",
        "Flutter-mane" : "Flutter Mane",
        "Slither-wing" : "Slither Wing",
        "Sandy-shocks" : "Sandy Shocks",
        "Iron-treads" : "Iron Treads",
        "Iron-bundle" : "Iron Bundle",
        "Iron-hands" : "Iron Hands",
        "Iron-jugulis" : "Iron Jugulis",
        "Iron-moth" : "Iron Moth",
        "Iron-thorns" : "Iron Thorns",
        "Wo-chien" : "Wo-Chien",
        "Chien-pao" : "Chien-Pao",
        "Ting-lu" : "Ting-Lu",
        "Chi-yu" : "Chi-Yu",
        "Roaring-moon" : "Roaring Moon",
        "Iron-valiant" : "Iron Valiant",
        "Walking-wake" : "Walking Wake",
        "Iron-leaves" : "Iron Leaves",
        "Gouging-fire" : "Gouging Fire",
        "Raging-bolt" : "Raging Bolt",
        "Iron-boulder" : "Iron Boulder",
        "Iron-crown" : "Iron Crown"
    }

    const typeColors = { //identify proper background color for each type
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    }

    const [pokemonSprite, setPokemonSprite] = useState(''); // *** will need to map through and create image slider for each pokemon card for each form
    const [pokemonCry, setPokemonCry] = useState('');
    const [pokemonTypes, setPokemonTypes] = useState([]);

    //used for audio tag
    const audioRef = useRef(null);
    if (audioRef.current) { //sets default volume
        audioRef.current.volume = 0.25;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const sprite = response.data.sprites.front_default;
                setPokemonSprite(sprite);
                const cry = response.data.cries.latest;
                setPokemonCry(cry);
                
                const types = response.data.types.map(p => p.type.name)
                setPokemonTypes(types);
            }
            catch (error) {
                console.error('Error fetching data:', error)
            }
        };
        fetchData();
    }, []);

    return (
        <div className='pokemonCard'> 
            {/**if undefined, just print name*/}
            <div>{nameConversion[name] !== undefined ? nameConversion[name] : name}</div>
            {/**eventually want to replace single sprite with image slider component*/}
            {pokemonSprite ? <img src={pokemonSprite} alt="Pokemon Sprite" /> : <p>Loading...</p>}
            <audio className='pokemonAudio' controls ref={audioRef} preload="auto" src={pokemonCry}></audio>
            <div className='types'>
                {pokemonTypes[0] != null && <button style={{backgroundColor: typeColors[pokemonTypes[0]]}}>{pokemonTypes[0].charAt(0).toUpperCase() + pokemonTypes[0].slice(1)}</button>}
                {pokemonTypes[1] != null && <button style={{backgroundColor: typeColors[pokemonTypes[1]]}}>{pokemonTypes[1].charAt(0).toUpperCase() + pokemonTypes[1].slice(1)}</button>}
            </div>
        </div>
    );
}