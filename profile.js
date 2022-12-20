console.log("hello world");

const color = document.querySelector('#color');
color.addEventListener("click", function(){ alert("My favorite color is purple.");
} );
color.classList.add("button");

const place = document.querySelector('#place');
place.addEventListener("click", function(){ alert("My favorite place is my bed."); });
place.classList.add("button");

const ritual = document.querySelector('#ritual');
ritual.addEventListener("click", function(){ alert("My favorite ritual is my morning and night skincare routine."); });
ritual.classList.add("button");

