var jq321 = $.noConflict(true);
//
// form change checkbox type
//

$(document).ready(function() {
  $(":checkbox").addClass("filled-in");
});

//
//  about.html
//
(function($) {
  $(document).ready(function() {
    $('.collapsible').collapsible();
  });
}(jq321));

//
// become-sponsor-2.html
// 

(function($) {
  $(document).ready(function() {
     $('select').material_select();
  });
}(jq321));


//
// about.html 
//
  new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "Africa",
          backgroundColor: "#40c4ff",
          data: [133,221,783,2478]
        }, {
          label: "Europe",
          backgroundColor: "#aeea00",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)',
        fontColor: "white"
      },
      legend: {
        labels: {
          fontColor: "white"
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "white"
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: "white"
          }
        }]
      }
    }
});

// about.html
//
// var map;
// function initMap() {
// map = new google.maps.Map(document.getElementById('map'), {
//   center: {lat: -34.397, lng: 150.644},
//   zoom: 8
// });
// }

//
// about.html, community.html
//

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
//   x[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " w3-white";
// }

