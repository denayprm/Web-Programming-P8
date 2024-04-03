// Ini adalah kode program script.js

// Mengambil elemen tombol untuk membuka popup
const mulaimengisipemintanPopupButton = document.querySelector('.mulaimengisipemintan-popup-button');

// Mengambil elemen tombol untuk membuka popup
const daftardiriPopupButton = document.querySelector('.daftardiri-popup-button');

// Mengambil elemen tombol untuk menutup popup
const closePopupButton = document.querySelector('.close-popup-button');

// Mengambil elemen popup
const popupdaftardiri = document.querySelector('.popup-daftardiri');

// Menambahkan event listener untuk tombol membuka popup
daftardiriPopupButton.addEventListener('click', () => {
    popupdaftardiri.style.display = 'block';
});

// Menambahkan event listener untuk tombol menutup popup
closePopupButton.addEventListener('click', () => {
    popupdaftardiri.style.display = 'none';
});

// Menambahkan event listener untuk menutup popup saat klik di luar popup
document.addEventListener('click', (event) => {
    if (event.target === popup) {
        popupdaftardiri.style.display = 'none';
    }
});
