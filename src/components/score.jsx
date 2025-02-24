import Title from "./title";
import Game from "./game";
import { useState } from "react";

export default function Score(){
    // Score and gameOn is shared by both the children component.
    const [score, setScore] = useState({current : 0, best : 0});
    const [gameOn, setGameOn] = useState(true);

    return (
        // Made Score component parent of Title and Game component 
        // because it will be easy to maintain the data in common parent and pass.
        // than to create states in child component.
        <div>
            <Title score={score} setScore={setScore} gameOn={gameOn}/>
            <Game score={score} setScore={setScore} gameOn={gameOn} setGameOn={setGameOn}/>
        </div>
    )
}