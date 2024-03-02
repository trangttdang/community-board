import React from "react";
const Card = (card) => {
    return (
        <div className={"Card"}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            <h1>Test</h1>
            {/* <button className="btn btn-primary" onClick={onButtonClick}>{buttonText}</button> */}
        </div>
    )
}

export default Card;