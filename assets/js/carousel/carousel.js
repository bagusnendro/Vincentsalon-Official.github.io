<script>
$('#myCarousel').on('slide.bs.carousel', function () {
  var id = ev.relatedTarget.id;
switch (id) {
case "0":
  // do something the id is 1
  break;
case "1":
  // do something the id is 2
  break;
case "2":
  // do something the id is 3
  break;             
default:
  //the id is none of the above
}
})
</script>