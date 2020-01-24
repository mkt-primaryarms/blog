
// // document.querySelectorAll(".card-img-top")


// document.addEventListener("mouseover", myFunction);


// function myFunction()
// {
//     document.getElementById("esse").setAttribute("style", "opacity: 0.5");
//   };

function myFunction() {
    var a, i;
    a = document.querySelectorAll(".card");
    for (i = 0; i < a.length; i++) {
      a[i].style.boxShadow = "0 0 12px rgba(0, 0, 0, .5)";
     }
  }

  myFunction()
