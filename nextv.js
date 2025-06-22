document.addEventListener('DOMContentLoaded', function() {
    const videoLinks = [
        "https://www.kingbokep.mom/view/ukhti-baru-pertama-kali-ngewe",
        "https://www.kingbokep.mom/view/dimanja-ayang-hijab-tobrut-mulus",
        "https://www.kingbokep.mom/view/jilbab-hitam-lagi-colmek-ketahuan-abang",
        "https://www.kingbokep.mom/view/chella-dini-cantik-tobrut-mulus-sange",
        "https://www.kingbokep.mom/view/chella-dini-colmek-dikamar-kasur-pink",
        "https://www.kingbokep.mom/view/chella-dini-colmek-muncrat-muncrat",
        "https://www.kingbokep.mom/view/percakapan-ngewe-abis-makan",
        "https://www.kingbokep.mom/view/dibolehin-crot-didalem-pacar-puas",
        "https://www.kingbokep.mom/view/enaknya-punya-cewe-penurut-crotin-ayang",
        "https://www.kingbokep.mom/view/talent-vavyvio-colmek-sempit",
        "https://www.kingbokep.mom/view/abg-sma-omek-sampe-kejang"
    ];

    const randomVideoLinkElement = document.getElementById('randomVideoLink');

    if (randomVideoLinkElement) {
        randomVideoLinkElement.addEventListener('click', function(event) {
            event.preventDefault();
            const currentUrl = window.location.href;
            let availableLinks = [...videoLinks];
            availableLinks = availableLinks.filter(link => link !== currentUrl);
            if (availableLinks.length === 0) {
                console.warn("Semua tautan sudah dikunjungi atau tidak ada tautan lain yang tersedia. Memilih dari daftar asli.");
                availableLinks = [...videoLinks];
            }

            const randomIndex = Math.floor(Math.random() * availableLinks.length);
            const targetUrl = availableLinks[randomIndex];

            console.log("Mengalihkan ke video acak:", targetUrl);
            window.location.href = targetUrl;
        });
    } else {
        console.warn("Elemen 'randomVideoLink' tidak ditemukan.");
    }
});