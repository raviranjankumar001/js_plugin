// function to include html popup code------------------------------------

function includePopupHtml() {
  let html = `<div id="popup">
      <img src="lightbox/imageslogo/back.png" alt="" id="left" />
      <img src="lightbox/imageslogo/next.png" alt="" id="right" />
      <span id="close-con" onclick="closepopup()">
        <img src="lightbox/imageslogo/cancel.png" alt="" id="close" />
      </span>
      <img src="img/img4.jpg" alt=""   id="img-pop"/>
    </div>`;

  let popdiv = document.createElement("div");
  popdiv.innerHTML = html;

  document.body.insertBefore(popdiv, document.body.firstChild);
}



let img; // gobal variable
let currentindex; // gobal variable





//function to init plugin__________________

function imagePopupInit(target) {
  //select all image with class trget
  img = document.getElementsByClassName(target);

  //add event listener on all selected image
  for(var i  = 0; i < img.length ; i++){
    //add pointer
    img[i].style.cursor = 'pointer';


    //add event lister----

    img[i].addEventListener('click',function(){
        document.getElementById("img-pop").src = this.src; // change src from old to recent click

        document.getElementById("popup").style.display = "block";

        checkarrow(); // also check for show arrow
    });
  }



  includePopupHtml();

  //next button
  document.getElementById('right').addEventListener('click',function(){
    nextimg();
  });

  //prev button
  document.getElementById('left').addEventListener('click',function(){
    previmg();
  });
}




//close popup--------------------

function closepopup(){
    document.getElementById("img-pop").src = ""; // change src from old to recent click

        document.getElementById("popup").style.display = "none";
}

// current image index----
function getcurrenting(){
    for(var i = 0; i < img.length; i++){
        if(img[i].src == document.getElementById("img-pop").src){
            currentindex = i;
        }
    }
}

// next image
function nextimg(){
    getcurrenting();
    currentindex++;
    
    document.getElementById("img-pop").src = img[currentindex].src;
    checkarrow();
    
} 



// prev image
function previmg(){
    getcurrenting();
    currentindex--;
    document.getElementById("img-pop").src = img[currentindex].src;
    checkarrow();
    
}


//function for show arrow or not
function checkarrow(){
    getcurrenting();
    if(currentindex == 0){
        document.getElementById('left').style.display = "none";
    }else if(currentindex == img.length-1){
        document.getElementById('right').style.display = "none";
    }else{
        document.getElementById('left').style.display = "block";
        document.getElementById('right').style.display = "block";
    }
}