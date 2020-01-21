$(document).ready(function() {
  $("button").click(function() {
    $.get("https://api.chucknorris.io/jokes/random ", function(data) {
      $("#display").html(
        "Date: " +
          data.created_at +
          "<br>" +
          "Icon: " +
          data.icon_url +
          "<br>" +
          "Joke: " +
          data.value
      );
      console.log(data.created_at, data.icon_url, data.value);
    });
  });
});
