function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    let jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    let beratBadan = document.getElementById('berat-badan').value;
    let tinggi = document.getElementById('tinggi').value;
  
    let fiksasiTinggi = tinggi / 100;
    let ukurBMI = (beratBadan / (fiksasiTinggi * fiksasiTinggi)).toFixed(2);
  
    let hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = '<h3>IMT Anda: </h3><p>' + ukurBMI + '</p>' +
                        '<h3>Anda termasuk Kategori: </h3><p>' + ukurBMI + '</p>' +
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
  