var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("myBtn1");

var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2");

var span = document.querySelectorAll(".close");

btn1.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

for(var i = 0; i < span.length; i++){
  span[i].onclick = function() {
      //modal1.style.display = "none";
      //console.log(this.closest('.modal'));
      this.closest('.modal').style.display = "none";
  }
}