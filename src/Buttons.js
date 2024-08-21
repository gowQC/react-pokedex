import React, {useState} from 'react';
import Pokedex from './Pokedex';
// {displayHomeButton, setDisplayHomeButton, displayPokedexButton, setDisplayPokedexButton}
export default function Buttons( { updateHomeButton } ) {

    //when button is clicked, this handles hiding all other buttons
    const [showButtons, setShowButtons] = useState(true); 
    const updateShowButtons = () => {
        setShowButtons(!showButtons);
    }

    //value set to true based on what region is selected and presents respective pokedex
    const [isKanto, setIsKanto] = useState(false);
    const [isJohto, setIsJohto] = useState(false);
    const [isHoenn, setIsHoenn] = useState(false);
    const [isSinnoh, setIsSinnoh] = useState(false);
    const [isUnova, setIsUnova] = useState(false);
    const [isKalos, setIsKalos] = useState(false);
    const [isAlola, setIsAlola] = useState(false);
    const [isGalar, setIsGalar] = useState(false);
    const [isPaldea, setIsPaldea] = useState(false);

    const searchRegion = (region) => {
        if (region === "Kanto") setIsKanto(!isKanto);
        else if (region === "Johto") setIsJohto(!isJohto);
        else if (region === "Hoenn") setIsHoenn(!isHoenn);
        else if (region === "Sinnoh") setIsSinnoh(!isSinnoh);
        else if (region === "Unova") setIsUnova(!isUnova);
        else if (region === "Kalos") setIsKalos(!isKalos);
        else if (region === "Alola") setIsAlola(!isAlola);
        else if (region === "Galar") setIsGalar(!isGalar);
        else if (region === "Paldea") setIsPaldea(!isPaldea);
        else console.log("error");
        
        setShowButtons(false);
    }

    return (
        <>
        {showButtons && (
            <div className='regionButtons'>
            {/* anonymous functions/arrow functions called because directly referencing function with argument sets off the function immediately as the page loads*/}
            <button onClick={() => {
                searchRegion("Kanto")
                updateHomeButton(true)
            }}>Kanto</button>

            <button onClick={() => {
                searchRegion("Johto")
                updateHomeButton(true)
            }}>Johto</button>

            <button onClick={() => {
                searchRegion("Hoenn")
                updateHomeButton(true)
            }}>Hoenn</button>

            <button onClick={() => {
                searchRegion("Sinnoh")
                updateHomeButton(true)
            }}>Sinnoh</button>

            <button onClick={() => {
                searchRegion("Unova")
                updateHomeButton(true)
            }}>Unova</button>

            <button onClick={() => {
                searchRegion("Kalos")
                updateHomeButton(true)
            }}>Kalos</button>

            <button onClick={() => {
                searchRegion("Alola")
                updateHomeButton(true)
            }}>Alola</button>

            <button onClick={() => {
                searchRegion("Galar")
                updateHomeButton(true)
            }}>Galar</button>

            <button onClick={() => {
                searchRegion("Paldea")
                updateHomeButton(true)
            }}>Paldea</button>
        </div>
        )}
        {isKanto && 
            <Pokedex 
                pokedexURL="https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
                updateHomeButton = {() => updateHomeButton()}
                updateShowButtons = {() => updateShowButtons()}
                updateRegion = {() => searchRegion("Kanto")}
            />
        }
        {isJohto && 
            <Pokedex 
                pokedexURL="https://pokeapi.co/api/v2/pokemon?offset=151&limit=100"
                updateHomeButton = {() => updateHomeButton()}
                updateShowButtons = {() => updateShowButtons()}
                updateRegion = {() => searchRegion("Johto")}    
            />
        }
        {isHoenn && 
            <Pokedex 
                pokedexURL="https://pokeapi.co/api/v2/pokemon?offset=251&limit=135"
                updateHomeButton = {() => updateHomeButton()}
                updateShowButtons = {() => updateShowButtons()}
                updateRegion = {() => searchRegion("Hoenn")}
            />
        }
        {isSinnoh && 
            <Pokedex 
                pokedexURL="https://pokeapi.co/api/v2/pokemon?offset=386&limit=107"
                updateHomeButton = {() => updateHomeButton()}
                updateShowButtons = {() => updateShowButtons()}
                updateRegion = {() => searchRegion("Sinnoh")}
            />
        }
        {isUnova && 
            <Pokedex 
                pokedexURL="https://pokeapi.co/api/v2/pokemon?offset=493&limit=156"
                updateHomeButton = {() => updateHomeButton()}
                updateShowButtons = {() => updateShowButtons()}
                updateRegion = {() => searchRegion("Unova")}
            />
        }
        {isKalos && 
            <Pokedex 
                pokedexURL="https://pokeapi.co/api/v2/pokemon?offset=649&limit=72"
                updateHomeButton = {() => updateHomeButton()}
                updateShowButtons = {() => updateShowButtons()}
                updateRegion = {() => searchRegion("Kalos")}
            />
        }
        {isAlola && 
            <Pokedex 
                pokedexURL="https://pokeapi.co/api/v2/pokemon?offset=721&limit=88"
                updateHomeButton = {() => updateHomeButton()}
                updateShowButtons = {() => updateShowButtons()}
                updateRegion = {() => searchRegion("Alola")}
            />
        }
        {isGalar && 
            <Pokedex 
                pokedexURL="https://pokeapi.co/api/v2/pokemon?offset=809&limit=96"
                updateHomeButton = {() => updateHomeButton()}
                updateShowButtons = {() => updateShowButtons()}
                updateRegion = {() => searchRegion("Galar")}
            />
        }
        {isPaldea && 
            <Pokedex 
                pokedexURL="https://pokeapi.co/api/v2/pokemon?offset=905&limit=120"
                updateHomeButton = {() => updateHomeButton()}
                updateShowButtons = {() => updateShowButtons()}
                updateRegion = {() => searchRegion("Paldea")}
            />
        }
        </>
    );
}