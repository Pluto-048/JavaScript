function Hitung() {
  let nama = document.getElementById("Input-1").value;
  let usia = document.getElementById("Input-2").value;
  let Tinggi = parseFloat(document.getElementById("Input-3").value);
  let Berat = parseFloat(document.getElementById("Input-4").value);
  // Validasi sederhana jika kolom tinggi/berat masih kosong
  if (isNaN(Tinggi) || isNaN(Berat)) {
    document.getElementById("Hasil").innerHTML =
      "Harap masukan Tinggi dan Berat Badan!";
    return;
  }
  let Hasil_hitung = Tinggi - 100 - (Tinggi - 100) * 0.1;
  let kurang = Hasil_hitung - Hasil_hitung * 0.1;
  let kelebihan = Hasil_hitung + Hasil_hitung * 0.1;
  let dock;
  if (Berat <= kurang) {
    dock = "Kekurangan Berat Badan";
  } else if (Berat >= kurang && Berat <= kelebihan) {
    dock = "Berat Badan Ideal";
  } else {
    dock = "Berat Badan Kelebihan";
  }
  document.getElementById("Hasil").innerHTML =
    "Halo " + nama + ", status Anda: <b>" + dock + "</b>";
}