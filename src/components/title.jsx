/* eslint-disable react/prop-types */
import '../styles/title.css';

export default function Title({score, gameOn}){
    // component to only display the title and score.
        if(gameOn){
            return(
                <div className="title">
                    <h2>Remember Me</h2>
                    <h4 className='scoreCard'>Current Score : {score.current}   Best Score : {score.best}</h4>
                </div>
            )
        }
        return null
}