let qrtext = document.getElementById("qrtext")
let qrcode = document.getElementById("qrcode")
let generate = document.getElementById("generate")
let imagebox = document.querySelector(".imagebox")


function generateqr(){
    if(qrtext.value.length > 0){
    qrcode.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value
    imagebox.classList.add("add")
    }
    else{
        qrtext.classList.add("error")
        setTimeout(()=>{
            qrtext.classList.remove("error")
        },3000)
    
    }
}
