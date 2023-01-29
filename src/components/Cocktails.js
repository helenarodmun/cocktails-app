import React from "react";
import '../'
//Cocktails, que recibe un objeto de propiedades como argumento.
//Esta función devuelve un elemento JSX que se renderiza en el navegador.
export function Cocktails(props) {
  const { cocktails, setCocktails } = props;
  //resetCocktails para establecer el valor de cocktails a null
  const resetCocktails = () => {
    setCocktails(null);
  };
  console.log(props);

  return (
    <div className="cocktails">
      <h1 className="title">Cocktails</h1>
      <button className="btn btn-info m-5 " onClick={resetCocktails}>
      Don't fancy these? Try other suggestions
      </button>

      <div className="row">
        {/* iteración sobre el objeto cocktails con el método map() para generar un elemento JSX para cada elemento de cocktails. */}
        {cocktails.map((cocktail, index) => (
          //   / El atributo 'key' es necesario para identificar de forma única cada elemento JSX. Esto es esencial para que el navegador pueda rastrear correctamente cada elemento
          <div className='col mb-4'>
            <div className="card" key={index}>
           
              <img style={{maxWidth:'98%'}} className='m-2 p-2 img-thumbnail rounded mx-auto d-block' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            
              <div className="card-body">
                <h3 className="card-title">{cocktail.strDrink}</h3>
                <hr/>
                {/* Object.keys() es un método  que se utiliza para devolver un array de las claves de un objeto dado. Esto significa que si hay un objeto con
                varias propiedades, Object.keys() devolverá un array de todas las claves de ese objeto. Por ejemplo, si hay un objeto con las claves "a", "b" y "c",
                Object.keys() devolverá una matriz que contiene ["a", "b", "c"]. Esto puede ser útil para iterar sobre los objetos y recuperar información específica sobre cada uno. */}
                {/* iteracion a través del objeto cocktail, utilizando el método Object.keys() para obtener un array de claves del objeto cocktail y  utilizo Map()
                para recorrer el arrayz de claves y devolver una matriz de elementos JSX. */}

                {Object.keys(cocktail).map((key, index) => {
                  //  Por cada iteración se asigna un ingrediente y una medida a una variable
                  let ingredient = cocktail["strIngredient" + (index + 1)];
                  let measure = cocktail["strMeasure" + (index + 1)];                  
                  // compruebo si hay un ingrediente y una medida, y si es así, se devuelve un elemento JSX para mostrarlo
                  if (ingredient) {
                    return (
                    // El atributo 'key' se utiliza como identificador único para cada elemento
                    <div key={index}>
                      <span>{`${ingredient} : ${measure}`}</span>                     
                      </div>
                  );
                }
                return null;
                })}
                <div  className="instructions">
                 <h6>Instruction:</h6>
                      <p >{cocktail.strInstructions}</p>
                      </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
