//fungsi data diri
function biodata(nama = 'dipa', umur = 19, kelamin = 'pria', alamat = 'denpasar') {
    var biodata = " Nama saya adalah " + nama + ", berumur " + umur +
        " tahun, berkelamin " + kelamin + " dan tinggal di " + alamat;
    return biodata;
}

var datadiri = "Saya adalah seorang manusia." + biodata();
console.log(datadiri);