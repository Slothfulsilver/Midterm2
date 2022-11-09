function loadPokemon(){
    let nombre='<select id="npokemon" name="select">';
      const pokemondiv= document.querySelector('#respuestaJSON');
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=0')
      .then(response => response.json())
      .then(function(allpokemon){
          allpokemon.results.forEach(function(pokemon){
              nombre=nombre+ "<option value='"+ pokemon.url +"'>"+pokemon.name+"</option>"
              
          })
          nombre=nombre+ "</select>";
      pokemondiv.innerHTML=nombre;
          
      });
  
  }


	
	    