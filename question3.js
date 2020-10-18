window.onload = function () {
    try {
                var url_string = (window.location.href).toLowerCase();
                var url = new URL(url_string);
        var id = url.searchParams.get("id");
        console.log("ID= "+id);
            } catch (err) {
                console.log("Issues with Parsing URL Parameter's - " + err);
            }
			
	fetch('https://api.rawg.io/api/games?id='+id)
	   .then(response => response.json())
	   .then(games => showGames(games.results));
	   
	  showGames = games => {
	  const gamesDiv = document.querySelector('#here');	
		
	  games.forEach(game => {
		const gameElement = document.createElement('p');
		gameElement.innerHTML = '<b>ID:</b> <span id="ids">' + game.id + '</span>, ' + '<b>Name:</b> ' + game.name + ', ' + ' <b>Rating:</b> ' + game.rating + ', ' + ' <b>Slug:</b> ' + game.slug;
		console.log(gameElement);
		gamesDiv.append(gameElement);
	  });
	}
}

