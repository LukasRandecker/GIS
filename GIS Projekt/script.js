//animation of the text in index.html
window.onscroll = function(){
    document.getElementById("main_text_box").style.animation ="slideInL_R .8s ease-in-out" ; 
  };

window.onload= function(){
    document.getElementById('main_text_box2').style.animation="slideInR_L .8s ease-in-out"; 
}


//Popup management

//some Parts of the function addfilter and removefilter are Ai generated
function addfilter(){
  const overlay = document.getElementById('overlay');
  const body = document.querySelector('body');
  overlay.style.display = 'block';
  body.classList.add('overlayed'); 
}

function removefilter(){
  const overlay = document.getElementById('overlay');
  const body = document.querySelector('body'); 
  overlay.style.display = 'none';
  body.classList.remove('overlayed');  
}

function openRegPopup(){
  closePopup(); 
  addfilter(); 
  document.getElementById("regPopup").style.visibility= "visible";
}

function openLogPopup(){
  
  closePopup(); 
  addfilter(); 
  document.getElementById("loginPopup").style.visibility ="visible" ; 
}

function closePopup(){
  removefilter(); 
  document.getElementById("regPopup").style.visibility ="hidden" ; 
  document.getElementById("loginPopup").style.visibility ="hidden" ;
}