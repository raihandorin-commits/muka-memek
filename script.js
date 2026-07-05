// Script untuk interaktivitas halaman

// Tambahkan event listener untuk gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        console.log('Foto diklik');
    });
});

// Log ketika musik dimulai
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('audio');
    if (audio) {
        audio.addEventListener('play', function() {
            console.log('Musik sedang diputar');
        });
        audio.addEventListener('pause', function() {
            console.log('Musik dijeda');
        });
    }
});