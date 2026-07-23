document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById("bg-music");
    const musicText = document.getElementById("music-text");
    const musicIcon = document.getElementById("music-icon");
    const btnMusic = document.getElementById("btn-music");
    const btnFireworks = document.getElementById("btn-fireworks");

    // Tự động kích hoạt pháo hoa và bong bóng khi mở trang
    fireworks();
    createHearts();

    // Sự kiện nút Bật/Tắt Nhạc
    btnMusic.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicText.innerText = "Tắt Nhạc";
            musicIcon.innerText = "⏸️";
        } else {
            music.pause();
            musicText.innerText = "Phát Nhạc";
            musicIcon.innerText = "🎵";
        }
    });

    // Sự kiện nút Bắn Pháo Hoa
    btnFireworks.addEventListener('click', fireworks);
});

// Hàm hiệu ứng pháo hoa
function fireworks() {
    let duration = 3 * 1000;
    let animationEnd = Date.now() + duration;

    let interval = setInterval(function() {
        let timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        confetti({
            particleCount: 40,
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });
    }, 250);
}

// Hàm tạo hiệu ứng bong bóng bay
function createHearts() {
    const symbols = ['❤️', '💖', '🎂', '🎉', '✨'];
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 400);
}
