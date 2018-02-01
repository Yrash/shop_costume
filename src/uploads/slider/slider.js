var state = 0,
	counter = 0,
	array = $('.slider__item'),
	width = $('.slider__content').width(),
	bulean = false ;



$('.slider__item').css({
			'width': ''+width+'px'


})
$('#items').css({
			'width': ''+(width * array.length)+'px',
			'left': '0px',
			'position': 'absolute',
});

var timerId = setInterval(function() {
   right()
}, 2500);


$('.slider').hover(function(){
        clearInterval(timerId);
    },
    function(){
        timerId=setInterval(function() {
   		right()
	},2500);
});


function left(){
	
		var array = $('.slider__item');
		
		if(counter <= 0 ){
			counter = array.length -2 
			animation(array,counter,'left')
		}else{
			counter= counter - 1
			animation(array,counter,'left')
		}



}
function right(){
		

	
		var array = $('.slider__item');

		
		if(counter >= (array.length - 1)){
			counter = 0
			setTimeout(function(){
				counter = counter +1
				
				animation(array,counter,'right' )
			},100)
			animation(array,counter,'right')

		}else{
			counter = counter + 1
			animation(array,counter,'right')
		}



}
function animation( array, counter , type){
	
	var width = $('.slider__content').width();	
	
	if((Number(counter) === 0) && (type === 'right')){
		$('.slider__item').css({
			'width': ''+width+'px'
		})
		$('#items').css({
			'width': ''+(width * array.length)+'px',
			'left': '-'+(width * counter)+'px',
			'position': 'absolute',
			'transition':'all 0s ease-in-out'
		});
	}else{

		$('.slider__item').css({
			'width': ''+width+'px'


		})
		$('#items').css({
			'width': ''+(width * array.length)+'px',
			'left': '-'+(width * counter)+'px',
			'position': 'absolute',
			'transition':'all 0.4s ease-in-out'
		});
	}

}
function append(s, counter){
	var array = $('.slider__item')
	var div = array[0].cloneNode(true)
	array[0].parentNode.insertBefore(div, array[array.length - 1].nextSibling);
}

append(array, counter)
right()
left()


$(window).resize(function(){
 	var state = 0,
	counter = 0,
	array = $('.slider__item'),
	width = $('.slider__content').width();
	$('.slider__item').css({
				'width': ''+width+'px'


	})
	$('#items').css({
				'width': ''+(width * array.length)+'px',
				'left': '0px',
				'position': 'absolute',
	});

});

var  click = false

$('#nav_min').on('click',function(){
	if(click){
		click= false
		$('#nav').css({
			'transition':'all 1s ease-in-out',
			'height':'0',
		})
	}else{
		click=true
		$('#nav').css({
			'transition':'all 1s ease-in-out',
			'height':'150px',
			 		
		})
	}

})