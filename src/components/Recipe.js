import react from 'react';
import style from './recipe.module.css';



const Recipe = ({title,calories,image,ingredients}) =>
{
 return(

    <div className = {style.recipe}>
        <img className={style.image} src = {image} ></img>
        <h2 style={{color:'rgb(138 130 227)',fontSize:'17px'}}>{title}</h2>
        
          <h4 style={{color:'#fdf0ff'}}>Steps to do it </h4>
        <ul style={{color: '#e9f4f4',width:'80%'}}>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ul>
      
       

    </div>
 )


}

export default Recipe;