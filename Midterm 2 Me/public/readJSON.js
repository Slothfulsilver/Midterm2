
function TraerTodoPokemon(){
	//https://pokeapi.co/api/v2/pokemon?offset=20&limit=10
var nombre='<select id="npokemon" name="select">';
	
	/*<ul class="links">
                  <li><a href="#">HOME</a></li>
                  <li>
                    <a href="#">Types</a>
                    <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                    <ul class="htmlCss-sub-menu sub-menu">
                        <!--llenar con la lista de tipos-->
                    </ul>
                  </li>
                </ul>*/
	
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=905')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
			nombre=nombre+ "<option value='"+ pokemon.url +"'>"+pokemon.name+"</option>"
            // document.getElementById("respuestaJSON").innerHTML= nombre;
        })
		nombre=nombre+ "</select>";
		document.getElementById("respuestaJSON").innerHTML=nombre ;
    });
}

function TraerDatosPokemon(ruta){		
	var Habilidades="";
	var movimientos="";
	var experiencia="";
	var npoke="";
	var altura="";
	var peso="";
	var foto="";
    let url = ruta; 
        
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        //renderPokemon(pokeData)
		npoke="<div><h3>Pokemon</h3>Id "+ pokeData.id+" Name: "+ pokeData.name +"</div>";
		altura="<div><h3>Height</h3>"+ pokeData.height +"</div>";
		peso="<div><h3>Weight</h3>"+ pokeData.weight +"</div>";
		Habilidades=traerHabilidades(pokeData.abilities);
		movimientos=traerMovimiento(pokeData.moves);
		experiencia="<div><h3>Base Experience</h3>"+ pokeData.base_experience +"</div>";
		foto=traerImagenFront(pokeData.sprites);
		//document.getElementById("resultado").innerHTML= traerTypes(pokeData.types) 
		document.getElementById("resultado").innerHTML=npoke+ foto + altura+peso+ Habilidades +movimientos+ experiencia;
		
    })

}

function traerTypes(types){
	var tipos="";
    types.forEach(function(type){
        //let typeLi = document.createElement('li');
        //typeLi.innerText = type['type']['name'];
		tipos=tipos+type['type']['name'];
        //ul.append(typeLi)
    })
	return tipos;
}

function traerHabilidades(abilities){
	var abilidad="<div ><h3>Habilidades</h3>";
    abilities.forEach(function(abilitie){
        //let typeLi = document.createElement('li');
        //typeLi.innerText = type['type']['name'];
		abilidad=abilidad+"<p>"+ abilitie['ability']['name']+"</p>";
        //ul.append(typeLi)
    })
	abilidad=abilidad+"</div>";
	return abilidad;
}

function traerMovimiento(movs){
	var movi="<div ><h3>Movimientos</h3>";
    movs.forEach(function(mov){
        //let typeLi = document.createElement('li');
        //typeLi.innerText = type['type']['name'];
		movi=movi+"<p>"+ mov['move']['name']+"</p>";
        //ul.append(typeLi)
    })
	movi=movi+"</div>";
	return movi;
}
function traerImagenFront(imgs){
	var image="<div ><h3>Foto</h3>";
   // imgs.forEach(function(img){
        //let typeLi = document.createElement('li');
        //typeLi.innerText = type['type']['name'];
		//image=image+"<img src=''"+ mov['front_default']['name']+"' />";
		image="<img src='"+ imgs.front_default +"' />";
        //ul.append(typeLi)
    //})
	image=image+"</div>";
	return image;
}

(document).ready(function(){
	
	TraerTodoPokemon();	
                
	$( "#buscar" ).click(function() {
  //alert( "Handler for .click() called." );
		//alert($('#npokemon option:selected').val());
		
		TraerDatosPokemon($('#npokemon option:selected').val());
});
	
	        });