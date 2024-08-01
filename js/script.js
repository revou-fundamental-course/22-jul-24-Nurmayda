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

showSlide();
function showSlide() {
    let listImage = document.getElementsByClassName('main-content-banner');
    console.log(listImage);
}