/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import '../styles/homepage.css';
//There are 15 pokemon array .
const pokemon = ["pikachu", "charizard", "bulbasaur", "squirtle","jigglypuff", "gengar", "eevee", "mewtwo", "snorlax", "dragonite", "chikorita", "cyndaquil","totodile", "lugia", "ho-oh"];

export default function Game({score, setScore}){
    // imageUrls is an state because we are getting the pokemon images
    //  with fetch request in a async function.
    const [imageUrls, setUrl] = useState([]);
    const [gameOn, setGameOn] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            let images = [];

            for(let pok of pokemon){
                try{
                    // because there each api request is different based
                    //  on pokemon name so loop is used.
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
            console.log(images);
        };
        fetchData();
    }, []);

    function pokemonClick(image){
        console.log('inside clikck');
        image.imageStatus++;
        console.log(image.imageStatus);
        //Every function checks the condition for all the images in the array.
        let on = imageUrls.every((img) => img.imageStatus == 0 || img.imageStatus == 1); 
        if(on){
            //Shuffle because game is on.
            let currentScore = score.current + 1;
            let best = score.best;
            if(currentScore > best){
                best = currentScore;
            }
            setScore({current : currentScore , best : best});
        }else{
            setGameOn(false);
        }
    }

    function replay(){
        setScore({current : 0 , best : score.best});
        setGameOn(true);
        imageUrls.map((image) => {
            image.imageStatus = 0;
        })
    }

    if(gameOn)
    {
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
    return (
        <div>
            <h2>Game Over</h2>
            <h4>Name your score is {score.current}</h4>
            <h4>Hishest score is {score.best}</h4>
            <button onClick={replay}>Replay</button>
        </div>
    )
}