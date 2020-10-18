function foo(){
	fetch('https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating')
	   .then(response => response.json())
	   .then(games => showGames(games.results));
	   
	  showGames = games => {
	  const gamesDiv = document.querySelector('#my-games');	
		
	  games.forEach(game => {
		const gameElement = document.createElement('p');
		gameElement.innerHTML = '<b>ID:</b> <span id="ids">' + game.id + '</span>, ' + '<b>Name:</b> ' + game.name + ', ' + ' <b>Rating:</b> ' + game.rating + ', ' + ' <b>Slug:</b> ' + game.slug;
		console.log(gameElement);
		gamesDiv.append(gameElement);
		document.getElementById("btnQueryString").onclick = function () {
            var url = "question3.html?id=" + encodeURIComponent(game.id);
            window.location.href = url;
        }
	  });
	}
	
}
