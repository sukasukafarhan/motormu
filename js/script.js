// $(document).ready(function() {
//     $('.caricepatkategori').select2();
// });
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:40,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  })
});

let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')
    for (var i=0; i < thumbnails.length; i++){
        thumbnails[i].addEventListener('click', function(){
            console.log(activeImages)            
                if (activeImages.length > 0){
                    activeImages[0].classList.remove('active')
                }

                this.classList.add('active')
                document.getElementById('featured').src = this.src
        })
    }

let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');
buttonLeft.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft -= 180
})
buttonRight.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft += 180
})

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function showCicilan() {
  var x = document.getElementById("cicilan");
  var y = document.getElementById("formsimulasi");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none"
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}