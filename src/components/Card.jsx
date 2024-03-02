import React from "react";
const Card = (card) => {
    console.log(card);
    return (
        <div className={"Card"}>
            <img alt={card.title} src={card.image}/>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            <a href={card.link} className="Button">Play Here</a>
        </div>
    )
}

export default Card;