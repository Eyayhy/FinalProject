import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import Recipe from  './components/Recipe';
import {FcSearch} from "react-icons/fc";

const App =() =>
{

  const APP_ID ='d4753d33';
  const APP_KEY='8de2394c12665d90ac759e16f92111ef';


  const [recipes,setRecipes] = useState ([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState('smoothies');

  
  
  useEffect( ()=>{
  
    getRecipes();

  }, [query]);

 const getRecipes= async () => {

  const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);

  
 };

const updateSearch = e => {
  
  setSearch(e.target.value);

}

const getSearch = e =>
{

   e.preventDefault();
   setQuery(search);
}


  return (
  <div className="App">

    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" value={search} onChange={updateSearch} type="text"/>
      <button className="search-button" type="submit"><FcSearch />
      </button>
    </form>
     <div className="recipes">
      {recipes.map(recipe => (
         <Recipe 
         key={recipe.recipe.label} 
         image={recipe.recipe.image}
         title={recipe.recipe.label} 
         ingredients={recipe.recipe.ingredients}
         
         
         
         />

      )
        
        
        )} 

</div>

    

  </div>

  );
};
export default App;
