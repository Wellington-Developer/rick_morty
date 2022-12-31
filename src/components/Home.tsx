import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {

    const [id, setId] = useState(0)

    const url = '/personagem/' + id;

    return (
        <div className="container-home">
            <h1>Coloque o ID do personagem</h1>
            <form>
                <input type="number" value={ id } onChange={ (e) => setId(e.target.value) }/>
                <Link to={ url }>
                    <button>Ver personagem</button>
                </Link>
            </form>
        </div>
    )
}