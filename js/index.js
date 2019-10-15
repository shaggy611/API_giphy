





$( '.find_gif' ).click(function(){
	$('.inner').empty();
	
	const urll1 = 'https://api.giphy.com/v1/gifs/search?api_key=SgnTA4vBgLnDDQZY6EqmK5I5V51j097Q&q=';
	let gif_keyword = $('.gif_keyword').val();
	let urll2 = '&limit=';
  let count = $('.gif_count').val();
  let other = '&offset=0&rating=G&lang=en';
  /*const urll = 'https://api.giphy.com/v1/gifs/random?api_key=SgnTA4vBgLnDDQZY6EqmK5I5V51j097Q&tag=car&rating=G';*/
  /*const urll = 'https://api.giphy.com/v1/gifs/trending?api_key=SgnTA4vBgLnDDQZY6EqmK5I5V51j097Q&limit=25&rating=G';*/
  let full = urll1 + gif_keyword + urll2 + count + other;
	
$.getJSON(full, function (data) {
  
  let first;
  for(let i = 0; i < data.data.length; i++){
    first = data.data[i].images.downsized.url;
      console.log(first);
  $('.inner').append('<img src="' + first + '"/> ');
    /*$('.inner').html('</br> ');*/
  }
});
});

$( '.find_gif_rand' ).click(function(){
	$('.inner').empty();
	const random_gif = 'https://api.giphy.com/v1/gifs/random?api_key=SgnTA4vBgLnDDQZY6EqmK5I5V51j097Q&tag=car&rating=G';
	console.log(random_gif);
	$.getJSON(random_gif, function (data1) {
  
  let second;
  
    second = data1.data.images.downsized.url;
      
  $('.inner').append('<div class="row"><div class="col s4 offset-s4"><img src="' + second + '"/></div></div>');
    /*$('.inner').html('</br> ');*/
  
});
});















