fetch('https://api.edamam.com/doc/open-api/recipe-search-v2.json')
.then(function(res) {
  console.log(res);
  return res.json();
}) .then(function(data){
  console.log("after json()", data)
});