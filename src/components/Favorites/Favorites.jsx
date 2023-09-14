import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';

const Favorites = ({ myFavorites }) => {

    const [aux, setAux] = useState(false);
    const dispatch = useDispatch ();
    const removeFromFavorites = (id) => {
    };

    const handleOrder = (event) =>{
        dispatch(orderCards(event.targer.value)),
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
        
    };

    return (
        <div>

        <select onChange={handleOrder}>
            <option value="Ascendente">Ascendente</option>
            <option value="descendente">descendente</option>
        </select>

        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        
            {
                myFavorites && myFavorites.map(character => (
                    <Card 
                        key={character.id} 
                        id={character.id}
                        name={character.name} 
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin.name}
                        image={character.image}
                        onClose={removeFromFavorites}
                    />
                ))
            }
        </div>
    );
};

const mapStateToProps = state => ({
    myFavorites: state.myFavorites
});

export default connect(mapStateToProps)(Favorites);  
