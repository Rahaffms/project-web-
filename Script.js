var icon = document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle("Darkmode")
        if(document.body.classList.contains("Darkmode")){
      icon.src="Image/Mode/Lightmode.PNG";
    }
    else{
        icon.src="Image/Mode/Darkmode.PNG";
    }
}