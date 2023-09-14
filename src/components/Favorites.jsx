/*import React from 'react';
import { connect } from 'react-redux';
import Card from './Card/Card';

const Favorites = (props) => {
    const { myFavorites } = props;  

    const removeFromFavorites = (id) => {
        
    };

    return (
        <div>
            Aquí estarán tus personajes favoritos.
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

export default connect(mapStateToProps)(Favorites);  */
