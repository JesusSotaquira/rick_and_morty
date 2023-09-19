import  axios  from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return () => setCharacter({}); 
    }, [id]);


    return (
        <div>
        <h1>Simulo el detail</h1>
        {character.name && <h2>{character.name}</h2>}
        {character.status && <p>Status: {character.status}</p>}
        {character.species && <p>Species: {character.species}</p>}
        {character.gender && <p>Gender: {character.gender}</p>}
        {character.origin && character.origin.name && <p>Origin: {character.origin.name}</p>}
        {character.image && <img src={character.image} alt={character.name || "Imagen del personaje"} />}
    </div>
    )
}


export default Detail;