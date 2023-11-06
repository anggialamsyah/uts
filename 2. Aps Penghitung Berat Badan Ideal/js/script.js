// FUNGSI Menghitung Berat Badan Ideal

function menghitungBeratBadanIdeal() {
    // Mengambil input tinggi badan
    let tinggiBadan = parseFloat(document.getElementById("inputtinggi").value);

    // Memastikan jika inputan berupa angka
    if (isNaN(tinggiBadan) || tinggiBadan <= 0) {
        alert("Tinggi badan harus dalam angka yang valid.");
        return;
    }

    // Rumus Menghitung berat badan ideal
    let beratBadanIdeal = tinggiBadan - 100 - (0.1 * (tinggiBadan - 100));

    // Menampilkan hasil berat badan ideal
    document.getElementById("hasilBeratBadan").innerHTML = `Berat Badan Ideal : ${beratBadanIdeal.toFixed(2)} kg`;
}

// FUNGSI RESET
function reset() {
    document.getElementById("inputtinggi").value = "0"
    document.getElementById("hasilBeratBadan").innerHTML = "-"
}