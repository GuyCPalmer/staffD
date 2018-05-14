$(function(){

  $(".change-devoured").on("click",function(event){
      var id = $(this).data("id");
      
      // send the PUT REQUEST 
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: id
        } ).then(
          function() {
            console.log("changed devour state");
            location.reload();
            console.log(this);

          }
        );
  });///change-devoured

  $(".create-burgers").on("submit",function (event){
    event.preventDefault();

   var name = $("input#ca").val().trim();
   var devoured = 0;
   var newburgers = {
     name,
        devoured
   };

    // send the fucking post request
    $.ajax("/api/burgers", {
        type: "POST",
        data: newburgers
      }).then(
        function() {
          location.reload();
        }
      );
  }); // create form

  $(".delete-burgers").on("click", function(event){
      var id = $(this).data("id");

      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted burgers", id);
          location.reload();
        }
      );
  }); // delete-burgers
}); // beginning

