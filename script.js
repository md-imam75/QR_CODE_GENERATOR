let imgbox=document.getElementById("imgbox");

let qrImage=document.getElementById("qrImage");
let qrText=document.getElementById("qrText");

function generateQr(){

  if (qrText.value.trim() === "") {
    alert("Please enter text or a URL!");
    return;
  }
  if(qrText.value.length>0){
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
    imgbox.classList.add("show-img");
}
  else{
    qrText.classList.add("error");
    setTimeout(()=>{
      qrText.classList.remove("error");

    },1000);
  }
  qrText.value="";
}
