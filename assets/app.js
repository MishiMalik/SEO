function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active-tab", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active-tab";
  }
  document.getElementById("defaultOpen").click();

    // Gets the video src from the data-src on each button
    
    // var $videoSrc;  
    // $('.video-btn').click(function() {
    //     $videoSrc = $(this).data( "src" );
      
    // });

    // console.log($videoSrc);
      
    // $('#myModal').on('shown.bs.modal', function (e) {
        
    // $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    // })
      
    
    
    // $('#myModal').on('hide.bs.modal', function (e) {
    //     $("#video").attr('src',$videoSrc); 
    // }) 
        
        

    
    