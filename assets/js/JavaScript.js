fetch ('https://www.themealdb.com/api/json/v1/1/random.php').
then (function (res) {
  console.log(res);
  return res.json();
  }).then(function (data) {
console.log("after json()", data); 
  
});
