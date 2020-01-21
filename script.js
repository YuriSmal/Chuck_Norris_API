$(document).ready(function() {
  $("button").click(function() {
    $.get("https://api.chucknorris.io/jokes/random ", function(date) {
      $("#display").html(
        "Date: " +
          date.created_at +
          "<br>" +
          "Icon: " +
          date.icon_url +
          "<br>" +
          "Joke: " +
          date.value
      );
      console.log(date.created_at, date.icon_url, date.value);
    });
  });
});
