const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const imgBox = document.getElementById("imgBox");

const generateQR = () =>{
    if(qrText.value.length > 0)
    {
        qrImage.src = URL + qrText.value;
        imgBox.classList.add("show-img");
    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}