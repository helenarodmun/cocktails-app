import React from "react";
import imgHome from "./img/martini-g0f1cae9e4_640.jpg";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Cocktails } from "./components/Cocktails";
// import  Pagination  from "./components/Pagination";

function App() {

  // variable de estado se inicializa con un valor de nulo
  const [cocktails, setCocktails] = useState(null);
  //Luego, defino 'requestAPI' para realizar una solicitud a la API. Esta solicitud se realiza utilizando el método 'fetch'
  const requestAPI = async () => {
    // Obtener una letra aleatoria del alfabeto
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    const api = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    // se obtiene un objeto JSON con la respuesta
    const cocktailApi = await api.json();
    // lña respuesta se almacena en una variable y se establece el valor de 'cocktails' usando la propiedad 'setCocktails'
    setCocktails(cocktailApi.drinks);
  };
  // renderizado del componente principal
  return (
    <>
     <Navbar brand="Cocktails 2.0 App" />    
        <div className="container mt-5">
        {/* se comprueba si hay un valor en el estado, si es así se renderiza el componente 'Cocktails' pasando como 
        propiedades 'cocktails' y 'setCocktails', si no, se renderizan una imagen de inicio y un botón para iniciar la solicitud a la API.
        como lo inicializamos en null simpre nos mostrará la imagen y el botón, ya que el estado cambiará cuando el usuario
         haga click en el botón y se realice la consulta a la API */}
        {cocktails ? ( 
          // <Pagination/>
          <Cocktails cocktails={cocktails} setCocktails={setCocktails} />
        
          ) : (
     <div>
       <img className="img-fluid img-thumbnail" src={imgHome} alt="Cócteles"></img>
            <button  onClick={requestAPI} className="btn btn-success m-5">
            What will be your cocktail today?
            </button>
     </div>
        )}      
        </div>

   </>
   
  );
}

export default App;
