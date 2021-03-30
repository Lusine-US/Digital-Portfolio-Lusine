// JavaScript Document

const likeBtn = document.querySelector(".like_btn");

let likeIcon = document.querySelector(".icon");
let count = document.querySelector(".count");

let clicked = false;

likeBtn.addEventListener("click", () =>{
	if(!clicked){
		clicked = true;
		likeIcon.innerHTML ='<i class="fas fa-heart"></i>'
		count.textContent ++;
	}
	else{
		clicked = false;
		likeIcon.innerHTML ='<i class="fas fa-heart"></i>'
		count.textContent --;
	}
});



var myButton = document.getElementById("myBtn");
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = "block";
    }else{
        myButton.style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
