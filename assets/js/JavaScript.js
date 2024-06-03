const ingredientEl = document.getElementById("ingredients")
const dishEl = document.getElementById("Dish")
const directionEl = document.getElementById("Directions")
const buttonEl =document.getElementById("click-me")
const image = document.getElementById("img")


const getFoodInfo = function() {
  fetch ('https://www.themealdb.com/api/json/v1/1/random.php').
  then (function (res) {
    return res.json();
    }).then(function (allData) {
    console.log(allData);
    console.log(allData.meals[0].strIngredient1) //dot notation to access 
    console.log(allData.meals[0].strMeal)
    console.log(allData.meals[0].strInstructions)

    const directionName = document.createElement("h4")

    directionName.textContent=[`
    ${allData.meals[0].strInstructions}`]

    directionEl.append(directionName)

    const dishName = document.createElement("h1")

    dishName.textContent= [`
    ${allData.meals[0].strMeal}`]
    
    dishEl.append(dishName)

    const ingredientList = document.createElement("h4");
    
    //don't know why measurements and Ingredients weren't in an array
    ingredientList.textContent = [`
    ${allData.meals[0].strMeasure1} - ${allData.meals[0].strIngredient1} 
    ${allData.meals[0].strMeasure2} - ${allData.meals[0].strIngredient2} 
    ${allData.meals[0].strMeasure3} - ${allData.meals[0].strIngredient3} 
    ${allData.meals[0].strMeasure4} - ${allData.meals[0].strIngredient4} 
    ${allData.meals[0].strMeasure5} - ${allData.meals[0].strIngredient5} 
    ${allData.meals[0].strMeasure6} - ${allData.meals[0].strIngredient6} 
    ${allData.meals[0].strMeasure7} - ${allData.meals[0].strIngredient7} 
    ${allData.meals[0].strMeasure8} - ${allData.meals[0].strIngredient8} 
    ${allData.meals[0].strMeasure9} - ${allData.meals[0].strIngredient9} 
    ${allData.meals[0].strMeasure10} - ${allData.meals[0].strIngredient10} 
    ${allData.meals[0].strMeasure11} - ${allData.meals[0].strIngredient11} 
    ${allData.meals[0].strMeasure12} - ${allData.meals[0].strIngredient12} 
    ${allData.meals[0].strMeasure13} - ${allData.meals[0].strIngredient13} 
    ${allData.meals[0].strMeasure14} - ${allData.meals[0].strIngredient14} 
    ${allData.meals[0].strMeasure15} - ${allData.meals[0].strIngredient15} 
    ${allData.meals[0].strMeasure16} - ${allData.meals[0].strIngredient16} 
    ${allData.meals[0].strMeasure17} - ${allData.meals[0].strIngredient17} 
    ${allData.meals[0].strMeasure18} - ${allData.meals[0].strIngredient18} 
    ${allData.meals[0].strMeasure19} - ${allData.meals[0].strIngredient19} 
    ${allData.meals[0].strMeasure20} - ${allData.meals[0].strIngredient20}
    `]

    ingredientEl.append(ingredientList)
  
    
  });
}

buttonEl.addEventListener('click', getFoodInfo);