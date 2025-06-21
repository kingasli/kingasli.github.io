document.addEventListener('DOMContentLoaded', function() {
            const videoLinks = [
                "https://www.kingbokep.mom/view/ukhti-baru-pertama-kali-ngewe",
                "https://www.kingbokep.mom/view/dimanja-ayang-hijab-tobrut-mulus"
            ];

            const randomVideoLinkElement = document.getElementById('randomVideoLink');

            if (randomVideoLinkElement) {
                randomVideoLinkElement.addEventListener('click', function(event) {
                    event.preventDefault();
                    const randomIndex = Math.floor(Math.random() * videoLinks.length);
                    const targetUrl = videoLinks[randomIndex];
                    console.log("Mengalihkan ke video acak:", targetUrl);
                    window.location.href = targetUrl;
                });
            } else {
                console.warn("Elemen 'randomVideoLink' tidak ditemukan.");
            }
        });