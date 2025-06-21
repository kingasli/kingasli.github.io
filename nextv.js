document.addEventListener('DOMContentLoaded', function() {
            // Ini adalah daftar tautan video acak Anda.
            // SILAKAN UBAH DAN ISI DENGAN DAFTAR TAUTAN VIDEO ASLI ANDA.
            const videoLinks = [
                "https://www.kingbokep.mom/",
                "https://www.kingbokep.mom/view/dimanja-ayang-hijab-tobrut-mulus"
            ];

            const randomVideoLinkElement = document.getElementById('randomVideoLink');

            if (randomVideoLinkElement) {
                randomVideoLinkElement.addEventListener('click', function(event) {
                    event.preventDefault(); // Mencegah perilaku default tautan
                    const randomIndex = Math.floor(Math.random() * videoLinks.length);
                    const targetUrl = videoLinks[randomIndex];
                    console.log("Mengalihkan ke video acak:", targetUrl);
                    window.location.href = targetUrl; // Menggunakan href agar tetap di riwayat browser
                });
            } else {
                console.warn("Elemen 'randomVideoLink' tidak ditemukan.");
            }
        });