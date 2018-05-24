// AJAx call
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       var response = JSON.parse(xhttp.responseText);
        display(response);
      }
    };
    xhttp.open("GET", "https://rallycoding.herokuapp.com/api/music_albums", true);
    xhttp.send();
  }
  
  // Display the response
  function display(response){
    for(i=0;i<response.length;i++)
    { 
      document.getElementById("albums").innerHTML+=
       "<div class='card' id='card"+i+"'>"+
          "<div class='card-head'>"+
            "<img src='"+response[i]['thumbnail_image']+"' class='thumbnail'/>"+
            "<div class='header'>"+
                "<h3 class='title'>"+response[i].title+"</h3>"+
                "<h5 class='artist'>"+response[i].artist+"</h5>"+
            "</div>"+
          "</div>"+
             "<img src='"+response[i].image+"' class='image'/>"+
              "<div class='btns'>"+
                "<a href='javascript:void(0)' class=' btn hide' onclick='remove("+i+")'>HIDE</a>"+
                "<a href='javascript:void(0)' class='btn buy' onclick='add("+i+")'>BUY</a>"+
                "<a href='"+response[i].url+"' class='btn confirm'>CONFIRM</a>"+
              "</div>"+
        "</div>";
    }
  }
  
  //  Hide the card
  function remove(i){
    document.getElementById("card"+i).style.display="none";
  }
  
  // Display confirm button
  function add(i){
    var hidebtn = document.getElementById("card"+i).children[2].children[0];
    var buybtn = document.getElementById("card"+i).children[2].children[1];
    var confirmbtn = document.getElementById("card"+i).children[2].children[2];
    hidebtn.style.display="none";
    buybtn.style.display="none";
    confirmbtn.style.display="block";
  }
  loadDoc();
  
  