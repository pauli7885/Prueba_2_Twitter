$(function(){ 
    //Al hacer click en el boton se agrega el contenido a la 2da columna
    $("#boton").on("click", function(e){
        e.preventDefault()
        var name = $("#tweet").val()
         $("#tweetEscrito").append('<div class="contenido">'+'<div class="row notification-box1" id="tweetE">'+
                                        '<img style="width:10%" src="http://www.highvalueinfotech.com/images/person-flat.png" class="avatar">'+
                                        name +
                                    '</div>'+                    
                                    '<div class="row">'+                    
                                            '<a href=""><i style="text-align:right; float:left" id="color" class="fa fa-thumbs-o-up likeable" aria-hidden="true"></i></a>'+ '<br>'+
                                            '<input class="delete" id="boton2" type="submit" value="Delete">'+
                                    '</div>'+
                                    '</div>')      
    })
    // Al hacer click en el icono se suma 1 al contador de likes
    $("body").on("click", ".likeable", function(e){
        e.preventDefault()
        $(this).parent().children().css({"color": "green"}).html(function(i, val) { return val*1+1 });
    });
    //Al hacer click en delete se borra el twitt
    $("body").on("click", ".delete", function(e){
        e.preventDefault()
        $('.contenido').eq(0).remove()
    })
})

   


