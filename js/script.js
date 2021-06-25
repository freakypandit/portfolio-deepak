
function ShowAndHide(x) {

    if(x == 'education'){
        if(document.getElementById('timeline-education').style.display == 'block' 
            && document.getElementById('timeline-experience').style.display == 'none'){
            
              document.getElementById('timeline-education').style.display='block';
        }

        else if(document.getElementById('timeline-experience').style.display == 'block' 
            && document.getElementById('timeline-education').style.display == 'none'){
              
              document.getElementById('timeline-experience').style.display='none';
              document.getElementById('timeline-education').style.display='block';
              
        }
    }

    else if(x == 'experience'){
      if(document.getElementById('timeline-education').style.display == 'block' 
          && document.getElementById('timeline-experience').style.display == 'none'){
          
            document.getElementById('timeline-experience').style.display='block';
            document.getElementById('timeline-education').style.display='none';
      }

      else if(document.getElementById('timeline-experience').style.display == 'block' 
          && document.getElementById('timeline-education').style.display == 'none'){
          
            document.getElementById('timeline-experience').style.display='block';
      }
    }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.
    pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




