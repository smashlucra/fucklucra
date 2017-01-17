state = 0;
function menu(){
    console.log("menu");
    if(state == 0){
      document.querySelector("nav ul").style.display = "flex";
      console.log("0");
      state = 1;
      return;
    }

    if(state == 1){
      console.log("1");
      document.querySelector("nav ul").style.display = "none";
      state = 0;
      return;
    }
}
