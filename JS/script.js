function submitForm(event) {
  
    let jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    let beratBadan = document.getElementById('berat-badan').value;
    let tinggi = document.getElementById('tinggi').value;
  
    let fiksasiTinggi = tinggi / 100;
    let ukurIMT = (beratBadan / (fiksasiTinggi * fiksasiTinggi)).toFixed(2);
  


    function cekKategoriIMT() {
      if (ukurIMT < 17.00) {
        return "Sangat kekurangan berat badan";
      } else if (ukurIMT >= 17.00 && ukurIMT <= 18.40) {
        return "Kekurangan berat badan";
      } else if (ukurIMT > 18.40 && ukurIMT <= 25.00) {
        return "Berat badan normal";
      } else if (ukurIMT > 25.00 && ukurIMT <= 27.00) {
        return "Kelebihan berat badan";
      } else if (ukurIMT > 27.00) {
        return "Sangat kelebihan berat badan";
      };

    }
    


    let hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = '<h3>IMT Anda: </h3><p> <strong>' + ukurIMT + '</strong>, termasuk kategori <strong>' + cekKategoriIMT().toUpperCase() + '</strong></p>' +
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
  