import React from "react";
import Card from './Card'


const CardList = ({cards}) =>{
    console.log(cards);
    return (
    <div className="CardList">
        {cards.map((card, index) => (
            <Card key ={index} title = {card.title} content = {card.content}/>
        ))}
    </div>
    )
}

export default CardList;