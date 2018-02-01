var  click = false

$('#nav_min').on('click',function(){
	if(click){
		click= false
		$('#nav').css({
			'transition':'all 1s ease-in-out',
			'height':'0',
		})
		this.className = 'header_nav__min';
		
	}else{
		click=true
		$('#nav').css({
			'transition':'all 1s ease-in-out',
			'height':'150px',
			 		
		})
		this.className = 'header_nav__min--of';
	}

})