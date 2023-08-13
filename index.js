const submit = document.querySelector(".button");

const qr = document.getElementById("qrcode");

const generateQR = () => {

    clear();

    const url = document.querySelector(".input").value;

    if (url === '') alert("Enter a valid URL");
    else createQR(url);
}

const createQR = (url) => {

    const qrCode = new QRCode('qrcode', {

        text: url,
        width: 300,
        height: 300,
    });

    setTimeout(() => {

        const saveURL = qr.querySelector('img').src;
        saveButton(saveURL);
    }, 50)
}

const clear = () => {

    qr.innerHTML = "";
    const saveBtn = document.getElementById("save-link");

    if (saveBtn) saveBtn.remove();
}

const saveButton = (saveUrl) => {

    const link = document.createElement('a');
    link.id = 'save-link';

    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.querySelector(".bottom").appendChild(link);
};

submit.addEventListener("click", generateQR);