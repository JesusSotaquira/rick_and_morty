import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { ORDER, FILTER } from '../../redux/action-types';

const Favorites = (props) => {
    const { myFavorites } = props;  

    const removeFromFavorites = (id) => {
        
    };

    return (
        <div>

        <select>
            <option value="Ascendente">Ascendente</option>
            <option value="descendente">descendente</option>
        </select>
        <select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        
            Personajes Favoritos.
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
