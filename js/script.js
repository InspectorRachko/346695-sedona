 var link = document.querySelector(".search_form_button");
 var modal = document.querySelector(".modal");

 link.addEventListener("click", function(evt) {
      evt.preventDefault();
      modal.classList.toggle("hide_modal");
     });
