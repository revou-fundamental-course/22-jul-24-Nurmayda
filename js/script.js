/* Ini Javascript */

function formValidation() {
    let name = document.getElementById('input-name').value;
    console.log('name');

    // Pengecekan dimana name tidak boleh kosong
    if (name == '') {
        // Code ini akan di eksekusi ketika name = ''
        alert('Maaf inputan anda kosong');
    } else {
        // Code ini akan di eksekusi ketika name tidak ''
        alert ('Sukses Menginput')
    }
}

let indexSlide = 1; // [0, 1, 2]
showSlide();

nextSlide(1)

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide() {
    let listImage = document.getElementsByClassName('main-content-banner');
    console.log(listImage);

    // Algoritma untuk mereset index dari slidenya
    if (n >listImage.length) indexSlide = 1;

    // Algoritma untuk mengilangkan semua gambar
    let index = 0;
    while (index < listImage.length) {
        listImage [index].style.display = 'none';
        index++;
    }
    // Algoritma untuk memunculkan 1 gambar saja
    listImage[indexSlide - 1].style.display = 'block';
}

Algoritma untuk auto slide
setInterval(() => nextSlide(1), 3000);