
// $.get({
//     //url: "https://api.weatherbit.io/v2.0/current?city=Los Angeles&key=ec388f75c6e34fe2874d06e7e206d30f",
//     url: "https://api.themoviedb.org/3/movie/now_playing?api_key=23dbd5682cf640400787240e583312ce&language=en-US&page=1",
//     data: data,
//     success: success,
//     // dataType: dataType
//   });
function weather(city){
    $.get("https://api.weatherbit.io/v2.0/current?city=" + city + "&key=ec388f75c6e34fe2874d06e7e206d30f", function(data){
    let temp = (data.data[0].temp)*(9/5) + 32;
    temp = Math.floor(temp * 100) / 100;
    let desc = data.data[0].weather.description;
    let feel = data.data[0].app_temp;
    let full = "Today's weather in " + city + " " + temp + "˚ " + desc +  ". Feels like " + feel + "˚";
    $("#desc").html(full);
    //console.log(data.data[0]);
    });
}


weather("Los Angeles");

$(".hlist").on("click", function() {
    
    weather($(this).text().trim());
});



  function success() {
    console.log(data);
  }
  



$("form").on("submit", function(event){
    event.preventDefault();
    var list = $('<li class="item"> </li>');
    var icon = $('<i class="far fa-square"></i>');
    
    // icon.on("click", function() {
    //     console.log(event.target);
         
    //     event.stopImmediatePropagation();
    //     $(icon).parent().fadeOut(500, function() {
    //     });
    // });
    
    list.append(icon);
    list.append($('.search').val());
    $('.list').append(list);
    
});

$(".fas").on("click", function() {
    //$(this).next().toggleClass("hide");
    
    $(".s").slideToggle(100, function() {
        //Fade out and then remove from list
        
    });
    
});

$(".list").on("click", 'i', function(event) {
    
    event.stopPropagation();
    $(this).parent().fadeOut(500, function() {
    });  
});


$(".list").on("click", '.item' ,function() {
    
    if($(this).val() == 0){
        $(this).css('font-style', 'italic');
        $(this).css('text-decoration', 'line-through');
        $(this).css('color', 'rgb(150, 150, 150)');
        $(this).val("1"); 
    }
    else {
        $(this).css('font-style', 'normal');
        $(this).css('text-decoration', 'none');
        $(this).css('color', 'black');
        $(this).val("0"); 
    }
    
});

function check(){
    console.log("Clicking");
    if($(this).val() == 0){
        $(this).css('font-style', 'italic');
        $(this).css('text-decoration', 'line-through');
        $(this).css('color', 'rgb(150, 150, 150)');
        $(this).val("1"); 
    }
    else {
        $(this).css('font-style', 'normal');
        $(this).css('text-decoration', 'none');
        $(this).css('color', 'black');
        $(this).val("0"); 
    }
}