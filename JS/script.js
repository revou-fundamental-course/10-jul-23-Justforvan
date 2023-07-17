function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    let jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    let beratBadan = document.getElementById('berat-badan').value;
    let tinggi = document.getElementById('tinggi').value;
    
    let fiksasiTinggi = tinggi / 100;
    let ukurBMI = (beratBadan / (fiksasiTinggi * fiksasiTinggi)).toFixed(2)

    let hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = '<h3>IMT Anda: </h3><p>' + ukurBMI + '</p>' +
                        '<h3>Anda termasuk Kategori: </h3><p>' + ukurBMI + '</p>'
    return false; // Prevent page reload    
}

