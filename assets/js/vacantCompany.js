$(".circle").hover(function(){
  $(this).addClass("flipping");
 },function(){
  $(this).removeClass("flipping");
 });
 
 $("#blokBack").on("click", function() {
   window.open("https://vacantcompany.bandcamp.com/album/blok", "_blank")
 })

 $("#gurdBack").on("click", function() {
  window.open("https://vacantcompany.bandcamp.com/album/gurd-days", "_blank")
})

$("#demoBack").on("click", function() {
  window.open("https://vacantcompany.bandcamp.com/album/demo", "_blank")
})