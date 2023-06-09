let Lists = document.getElementsByClassName("List");
let leftbox = document.getElementById("left");
let rightbox = document.getElementById("right");
let button = document.getElementById("button");
let originalLeftContent = leftbox.innerHTML;
let text =document.getElementById("text");

function handleDragStart(e) {
  let selected = e.target;

  //for left to right drag and drop
  rightbox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  rightbox.addEventListener("drop", function (e) {
    rightbox.appendChild(selected);
    selected = null;
  });

  //for right to left drag and drop
  leftbox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  leftbox.addEventListener("drop", function (e) {
    leftbox.appendChild(selected);
    selected = null;
  });
}

//loping for all elements of list 
for (let ele of Lists) {
  ele.addEventListener("dragstart", handleDragStart);
}

// // this function will set leftbox in that order they grab it does not maintain same order 
// function resetit(){
//     while (rightbox.firstChild) {
//         leftbox.appendChild(rightbox.firstChild);
//       }
// }


// this function arrange it in order
function resetit() {
  
  leftbox.innerHTML = originalLeftContent;
  rightbox.innerHTML="";

  //adding a alert 
  text.style.display="block";
  text.innerHTML= "Succesfully reset it in orignal state";

  //after adding it disapper after 3second
  setInterval(()=>{
    text.innerHTML="";
    text.style.display="none";
  },3000)

  for (let ele of Lists) {
    ele.addEventListener("dragstart", handleDragStart);
  }
}

button.addEventListener("click", resetit);
