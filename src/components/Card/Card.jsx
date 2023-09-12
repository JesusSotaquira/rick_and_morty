import { Link } from "react-router-dom";
import './Card.css'; 
import { addFav, removeFav } from "../../redux/actions"; 
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) { 
            setIsFav(true);
         }
      });
   }, [myFavorites, id]); 

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, status, species, gender, origin, image });
      }
   };

   return (
      <div className="card-container">
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
      </div>
   );
}

const mapStateToProps = (state) => ({
   myFavorites: state.myFavorites
});

const mapDispatchToProps = (dispatch) => ({
   addFav: (character) => dispatch(addFav(character)),
   removeFav: (id) => dispatch(removeFav(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
