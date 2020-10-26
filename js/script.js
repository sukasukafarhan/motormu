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
