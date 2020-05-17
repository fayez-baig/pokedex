import React, { Component } from 'react'
import './Pokedex.css';
import PokeCard from "./PokeCard";


class Pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="pokedex-winner">WINNING HAND</h1>
        }
        else {
            title = <h1 className="pokedex-looser">LOOSING HAND</h1>
        }
        return (
            <div className="Pokedex">
                {title}
                <h4 className='total'>Total Experinece: {this.props.exp}</h4>
                <div className="pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <PokeCard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div >
        );
    }
}

export default Pokedex;


