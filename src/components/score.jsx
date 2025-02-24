import Title from "./title";
import Game from "./game";
import { useState } from "react";

export default function Score(){
    const [score, setScore] = useState({current : 0, best : 0});

    return (
        <div>
            <Title score={score} setScore={setScore}/>
            <Game score={score} setScore={setScore}/>
        </div>
    )
}