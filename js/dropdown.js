var dropdown = function()
{
    //alert("Button clicked, id "+this.id+", text"+this.innerHTML);
    console.log(this.value);
    if(this.value == 0){
      document.querySelector("p").style.display = "block";
      console.log("0");
      this.value = 1;
      return;
    }

    if(this.value == 1){
      console.log("1");
      document.querySelector("p").style.display = "none";
      this.value = 0;
      return;
    }
}
document.querySelector("#one").onclick = dropdown;
//document.getElementById('2').onclick = dropdown;
//document.getElementById('3').onclick = dropdown;
