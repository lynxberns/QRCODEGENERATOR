function generateQRCode() {
    const value = document.getElementById('qr-code-value').value;
    
    if (!value) {
        alert("Please enter text or a URL.");
        return;
    }

    const qrCode = new QRious({
        value: value,
        size: 300,
        level: 'H'
    });

    document.getElementById('qr-code-image').src = qrCode.toDataURL();
}
