
var icon = document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle("darkmode")
        if(document.body.classList.contains("darkmode")){
      icon.src="Image/Mode/Lightmode.PNG";
      document.body.classList.toggle("darkmode")
    }
    else{
        icon.src="Image/Mode/Darkmode.PNG";
    }
}

