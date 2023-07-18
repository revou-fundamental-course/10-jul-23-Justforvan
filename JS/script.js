function submitForm(event) {
  
    let jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    let beratBadan = document.getElementById('berat-badan').value;
    let tinggi = document.getElementById('tinggi').value;
  
    let fiksasiTinggi = tinggi / 100;
    let ukurBMI = (beratBadan / (fiksasiTinggi * fiksasiTinggi)).toFixed(2);
  


    function cekKategoriBMI() {
      if (ukurBMI < 17.00) {
        return "Sangat kekurangan berat badan";
      } else if (ukurBMI >= 17.00 && ukurBMI <= 18.40) {
        return "Kekurangan berat badan";
      } else if (ukurBMI > 18.40 && ukurBMI <= 25.00) {
        return "Berat badan normal";
      } else if (ukurBMI > 25.00 && ukurBMI <= 27.00) {
        return "Kelebihan berat badan";
      } else if (ukurBMI > 27.00) {
        return "Sangat kelebihan berat badan";
      }
     ;
    }
    


    let hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = '<h3>IMT Anda: </h3><p>' + ukurBMI + '</p>' +
                        '<h3>Anda termasuk Kategori: </h3><p>' + cekKategoriBMI() + '</p>' +
                        '<button id="reset-ukuran">Ukur Ulang</button>';
  
    // Add an event listener to the "Ukur" button
    let ukurButton = document.getElementById('reset-ukuran');
    ukurButton.addEventListener('click', resetHasilDiv);
  

    return false; // Prevent page reload
  }
  
  function resetHasilDiv() {
    let hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = '<h3>BERHASIL RESET' + '<br />' + 'Silakan isi data kembali.</h3>'; // Reset the inner HTML
  }
  