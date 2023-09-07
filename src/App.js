import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx'
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About'; 
import Detail from './components/Detail';



function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }


   
   const onClose = (id) =>{
      const characterFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(characterFiltered)
   }
  

   return (
      <div className='App'>
         <Nav onSearch ={onSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters= {characters} onClose={onClose} />} />

            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>

         </Routes>

      </div>
   );
}

export default App;
