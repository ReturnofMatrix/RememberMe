/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import '../styles/homepage.css';
//There are 15 pokemon array .
const pokemon = ["pikachu", "charizard", "bulbasaur", "squirtle","jigglypuff", "gengar", "eevee", "mewtwo", "snorlax", "dragonite", "chikorita", "cyndaquil","totodile", "lugia", "ho-oh"];

export default function Game({score, setScore, gameOn, setGameOn}){
    const [imageUrls, setUrl] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            let images = [];

            for(let pok of pokemon){
                try{
                    // because there each api request is different based
                    //  on pokemon name so loop is used and stored in images [].
                    // till all the requests are done.
                    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pok}`);
                    if(!response.ok){
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    images.push({ imageUrl : data.sprites.front_default, imageName : data.species.name, imageStatus : 0});
                }catch(error){
                    console.log(error);
                }
            }
            // so when all the images are gotten in images array we will
            //  update the imageUrls
            //  so that the component re-renders with all the images. 
            setUrl(images);
        };
        fetchData();
    }, []);

    // If pokemon div is clicked this function runs.
    function pokemonClick(image){
        // each pokemon has status to remember whether was clicked before or no.
        image.imageStatus++;
        // if pokemon is clicked more then twice it will not be 0 or 1.
        let on = imageUrls.every((img) => img.imageStatus == 0 || img.imageStatus == 1); 
        if(on){
            // Score updation of the component.
            let currentScore = score.current + 1;
            let best = score.best;
            if(currentScore > best){
                best = currentScore;
            }
            setScore({current : currentScore , best : best});

            //Shuffle because game is on. [ Fisher-Yates Shuffle]
            let shuffle = [...imageUrls];
            for(let i = shuffle.length - 1; i > 0; i--){
                let j = Math.floor( Math.random() * (i + 1) );
                [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
            }
            // besecause of setter setUrl component will re-render.
            setTimeout(() => setUrl(shuffle), 250);
        }else{
            // Means div was clicked more then 1 time. and stop the game.
            setGameOn(false);
        }
    }

    function replay(){
        // reset all variables from as start except best Score that we should remember.
        setScore({current : 0 , best : score.best});
        setGameOn(true);
        imageUrls.map((image) => {
            image.imageStatus = 0;
        })
    }

    if(gameOn)
    {   //If game is on then return pokemon grid div
        return(
            <div className="pokemonsDiv">
            {   imageUrls.map(  (image) => 
            <div key={image.imageName} className="pokemon" onClick={() => pokemonClick(image)}>
                <img src = {image.imageUrl} alt='Image of a pokemon'/>
                <p> {image.imageName} </p>
            </div>
            )} 
            </div>
        ) 
    }
    return ( // if game is off then game over page.
        <div className="gameOver">
            <h2>Game Over</h2>
            <h4>Name your score is {score.current}</h4>
            <h4>Hishest score is {score.best}</h4>
            <button onClick={replay}>Play Again</button>
        </div>
    )
}