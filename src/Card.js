import React from "react";
import './Card.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
const Card = ({ id, name, type, exp }) => {
    let imgSrc = `${POKE_API}${padToThree(id)}.png`;
    return (
        <div className="card">
            <div className="card-img">
                <img src={imgSrc} alt="" />
            </div>
            <div className="card-body">
                <h2>
                    {name}
                </h2>
                <p>
                    Type: {type}
                </p>
                <p>
                    Exp: {exp}
                </p>
            </div>
        </div>


    );
};


export default Card;