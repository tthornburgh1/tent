$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var modelInput = $("input#model").val();
    var colorInput = $("input#color").val();
    var nameInput= $("input#name").val();
    var addressInput = $("input#address").val();

    $(".model").text(modelInput);
    $(".color").text(colorInput);
    $(".name").text(nameInput);
    $(".address").text(addressInput);

    $("#story").show();

    event.preventDefault();
  });
});
