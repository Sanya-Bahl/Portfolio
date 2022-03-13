
$(document).ready(function(){

    $('.a-1').waypoint(function(direction){
        $('.a-1').addClass('animate__animated animate__fadeInLeft')
    },
    {
        offset: '600px'
    })

    $('.a-2').waypoint(function(direction){
        $('.a-2').addClass('animate__animated animate__fadeInRight')
    },
    {
        offset: '600px'
    })
    $('.a-3').waypoint(function(direction){
        $('.a-3').addClass('animate__animated animate__fadeIn')
    },
    {
        offset: '250px'
    })
    $('.a-4').waypoint(function(direction){
        $('.a-4').addClass('animate__animated animate__zoomIn')
    },
    {
        offset: '350px'
    })
    $('.a-5').waypoint(function(direction){
        $('.a-5').addClass('animate__animated animate__zoomIn')
    },
    {
        offset: '610px'
    })
    $('.a-6').waypoint(function(direction){
        $('.a-6').addClass('animate__animated animate__zoomIn')
    },
    {
        offset: '720px'
    })
    $('.a-7').waypoint(function(direction){
        $('.a-7').addClass('animate__animated animate__zoomIn')
    },
    {
        offset: '740px'
    })
    $('.margin-1').waypoint(function(direction){
        $('.margin-1').addClass('animate__animated animate__fadeInUp')
    },
    {
        offset: '400px'
    })
    $('.margin-2').waypoint(function(direction){
        $('.margin-2').addClass('animate__animated animate__fadeInUp')
    },
    {
        offset: '400px'
    })
    $('.margin-3').waypoint(function(direction){
        $('.margin-3').addClass('animate__animated animate__fadeInUp')
    },
    {
        offset: '400px'
    })
    $(function(){
	 
        $('.circlechart').circlechart();
       
      })
      $( ".mr-auto .nav-item" ).bind( "click", function(event) {
        event.preventDefault();
        var clickedItem = $( this );
        $( ".mr-auto .nav-item" ).each( function() {
            $( this ).removeClass( "active" );
        });
        clickedItem.addClass( "active" );
    });
});

