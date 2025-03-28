import React from "react";
import { useState } from "react";
import CardInfo from "./CardInfo";


const Card = ({question, answer}) => {
    const [flippedToFront, setFlip] = useState(true);
    const updateFlip = () => setFlip(!flippedToFront)
    
    return (
        <div className="Flashcard" onClick={updateFlip}>
            <CardInfo content={flippedToFront ? question : answer}/>
        </div>

    )
}

export default Card;