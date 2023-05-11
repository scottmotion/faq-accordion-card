
$( document ).ready(function() {

  var acc = document.getElementsByClassName("accordion");     // get all accordion buttons

  for (let i = 0; i < acc.length; i++) {                      // for each accordion button
    acc[i].addEventListener("click", function() {             // add click event listener to the button
      console.log("Clicked");
      for (let j = 0; j < acc.length; j++) {                  // for each accordion button
        console.log("Values: ", j)
        if (j !== i) {                                        // if not the button that was clicked
        acc[j].classList.remove("active");                    // remove active class
        console.log("active removed", j, i);
        var panel2 = acc[j].nextElementSibling;               // get this button's panel
        panel2.style.maxHeight = null;                        // close panel
        }
      }

      this.classList.toggle("active");                        // toggle active state on button clicked
      var panel = this.nextElementSibling;                    // get this button's panel
      if (panel.style.maxHeight) {                            // if panel is open
        panel.style.maxHeight = null;                         // close panel
      } else {                                                // else pane is not open
        panel.style.maxHeight = panel.scrollHeight + "px";    // open panel
      } 
    });
  }

});
