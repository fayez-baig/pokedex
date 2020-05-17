import React, { Component } from 'react';
import './PokeCard.css'
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class PokeCard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="pokecard">
                <h1>{this.props.name}</h1>

                <div className="pokecard-image">
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                <div className="pokecard-data">Type:{this.props.type}</div>
                <div className="pokecard-data"> EXP:{this.props.exp}</div>
            </div>
        );
    }
}

export default PokeCard;