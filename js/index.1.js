//fungsi data diri
function biodata(nama = 'dipa', umur = 19, kelamin = 'pria', alamat = 'denpasar') {
    var biodata = " Nama saya adalah " + nama + ", berumur " + umur +
        " tahun, berkelamin " + kelamin + " dan tinggal di " + alamat;
    return biodata;
}

var datadiri = "Saya adalah seorang manusia." + biodata();
console.log(datadiri);

//array excercise

var makanan = ["bakso", "capcay", "nasi goreng", "babi guling"];
makanan.push("siobak", "sayur ijo");
console.log(makanan);

makanan.pop(); //pop tidak menerima parameter
console.log(makanan);

makanan.unshift("soto", "rawon"); //menambahkan data baru ke depan array
console.log(makanan);

makanan.shift(); //hanya bisa menghapus satu kode paling depan 
console.log(makanan);

makanan.sort(); //mengurutkan data dari kecil ke besar
console.log(makanan);

makanan.sort(function (value1, value2) { return value1 < value2 }); //mengurutkan data angka dari besar ke kecil
console.log(makanan);

//untuk fungtion lainnya coba lihat di lodash.com

//playing with object
var dipadana = {
    nama: "dipadana",
    umur: 19,
    kelamin: "pria",
    favorite: { makanan: ["bakso", "nasigoreng",], hobby: ["baca", "ngegame"] },
    tinggi: 179,
    berat: 55,
}

//pasti pakai looping, manipulasi dom
