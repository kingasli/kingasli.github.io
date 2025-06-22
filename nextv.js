document.addEventListener('DOMContentLoaded', function() {
    const videoLinks = [
        "https://www.kingbokep.mom/view/ukhti-baru-pertama-kali-ngewe",
        "https://www.kingbokep.mom/view/dimanja-ayang-hijab-tobrut-mulus",
        "https://www.kingbokep.mom/view/jilbab-hitam-lagi-colmek-ketahuan-abang",
        "https://www.kingbokep.mom/view/chella-dini-cantik-tobrut-mulus-sange"
    ];

    const randomVideoLinkElement = document.getElementById('randomVideoLink');

    if (randomVideoLinkElement) {
        randomVideoLinkElement.addEventListener('click', function(event) {
            event.preventDefault();

            // Mendapatkan URL halaman saat ini
            const currentUrl = window.location.href;

            // Membuat salinan array videoLinks untuk diolah
            let availableLinks = [...videoLinks];

            // Menghapus URL saat ini dari daftar tautan yang tersedia
            // Ini memastikan tautan yang sedang aktif tidak akan dipilih lagi
            availableLinks = availableLinks.filter(link => link !== currentUrl);

            // Jika semua tautan sudah dikunjungi, mungkin Anda ingin menambahkan logika khusus di sini,
            // seperti menampilkan pesan atau mereset daftar.
            // Untuk saat ini, jika tidak ada tautan lain, kita akan memilih dari daftar asli.
            if (availableLinks.length === 0) {
                console.warn("Semua tautan sudah dikunjungi atau tidak ada tautan lain yang tersedia. Memilih dari daftar asli.");
                availableLinks = [...videoLinks]; // Menggunakan daftar asli jika tidak ada opsi lain
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