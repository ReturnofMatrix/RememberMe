/* eslint-disable react/prop-types */
import '../styles/title.css';

export default function Title({score}){
    return (
        <div className="title">
            <h4>Name</h4>
            <h2>Remember Me</h2>
            <h4>Current Score : {score.current}   Best Score : {score.best}</h4>
        </div>
    )
}