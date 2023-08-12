const submit = document.querySelector(".button");

const qr = document.getElementById("qrcode");

const generateQR = () => {

    clear();

    const url = document.querySelector(".input").value;

    if (url === '') alert("Enter a valid URL");
    else createQR(url);
}

const createQR = (url) => {

    const el = document.getElementById("qrcode");
    const size = document.querySelector(".size").value;

    const qrCode = new QRCode('qrcode', {

        text: url,
        width: 300,
        height: 300,
    })
}

const clear = () => {

    qr.innerHTML = "";
}

submit.addEventListener("click", generateQR);