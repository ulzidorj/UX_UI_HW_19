$(document).ready(function () {
  $("button").hover(
    function () {
      $(this).animate(
        {
          width: "20%",
          height: "20%",
          fontSize: "20px",
        },
        100
      );
    },
    function () {
      $(this).animate(
        {
          width: "15%",
          height: "15%",
          fontSize: "20px",
        },
        100
      );
    }
  );
});

console.log("your index is loaded");
