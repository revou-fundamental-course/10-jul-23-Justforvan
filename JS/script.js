

//Fungsi untuk mengambil data dari form dengan parameter "event"
function submitForm(event) {
    //masukkan masing-masing nilai ke dalam variabel agar mudah dipanggil kembali
    let jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    let beratBadan = document.getElementById('berat-badan').value;
    let tinggi = document.getElementById('tinggi').value;
  
    // fiksasi dulu ukuran tinggi. Karena submit dalam centimeter maka dibagi 100 agar menjadi meter
    let fiksasiTinggi = tinggi / 100;

    //mengukur IMT
    let ukurIMT = (beratBadan / (fiksasiTinggi * fiksasiTinggi)).toFixed(2);
  

    //mengecek kategori dari IMT
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

    //melakukan generate keterangan IMT berdasar kategori
    function keteranganIMT() {
      if (ukurIMT < 18.40) {
        return "Peringatan! Kekurangan berat badan dapat berdampak serius pada kesehatan Anda. Segera ambil langkah untuk meningkatkan berat badan secara sehat. Konsultasikan dengan profesional kesehatan dan fokus pada pola makan seimbang dan olahraga yang tepat. Prioritaskan kesehatan Anda untuk mencapai berat badan yang sehat dan kesejahteraan yang optimal.";
      } else if (ukurIMT >= 18.40 && ukurIMT <= 25.00) {
        return "Selamat! Berat badan normal Anda adalah prestasi luar biasa. Anda telah menunjukkan komitmen terhadap kesehatan dan kesejahteraan pribadi. Teruslah menjadi inspirasi bagi orang lain dan jadikan hidup sehat sebagai gaya hidup yang berkelanjutan. Selamat atas pencapaian Anda yang luar biasa!";
      } else {
        return "Perhatian! Kelebihan berat badan bisa berisiko serius bagi kesehatan. Penting untuk segera mengambil tindakan untuk menurunkan berat badan. Pilih pola makan sehat dan tingkatkan aktivitas fisik untuk mencapai berat badan yang ideal dan mengurangi risiko kesehatan. Jaga kesehatan Anda dengan langkah-langkah kecil yang konsisten.";
      }
    }
    
    //manipulasi DOM "hasil" untuk memasukkan hasil, kategori, dan keterangan IMT menggunakan atribut innerHTML
    let hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = '<h3>IMT Anda: </h3><p> <strong>' + ukurIMT + '</strong>, termasuk kategori <strong>' + cekKategoriIMT().toUpperCase() + '</strong></p>' +
                        '<p>' + keteranganIMT() + '</p>' + 
                        '<button id="reset-ukuran">Ukur Ulang</button>';
  
    //menambah event listener ke tombol "Ukur" untuk melakukan reset (membersihkan innerHTML yang digenerate sebelumnya)
    let ukurButton = document.getElementById('reset-ukuran');
    ukurButton.addEventListener('click', resetHasilDiv);
  

    return false; // mencegah reload pada halaman
  }
  
  //fungsi untuk melakukan reset. Dengan hoisting, fungsi bisa diletakkan di luar.
  function resetHasilDiv() {
    let hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = '<h3>BERHASIL RESET' + '<br />' + 'Silakan isi data kembali.</h3>'; // Reset the inner HTML
  }
  