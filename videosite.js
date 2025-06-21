document.addEventListener('DOMContentLoaded', function() {
            const videoContainer = document.getElementById('videoContainer');
            if (!videoContainer) return;

            const videoName = videoContainer.getAttribute('data-video-name') || 'Judul Video Default';
            const description = videoContainer.getAttribute('data-video-description') || 'Deskripsi video tidak tersedia.';
            const thumbnailUrl = videoContainer.getAttribute('data-thumbnail-url') || '';
            const embedUrl = document.getElementById('video-iframe')?.getAttribute('data-embed-url') || document.getElementById('video-iframe')?.src || '';
            const durationISO = document.getElementById('video-iframe')?.getAttribute('data-duration') || 'PT0M0S';
            const uploadDate = videoContainer.getAttribute('data-upload-date') || '';
            const videoPageUrl = window.location.href;

            function iso8601DurationToSeconds(isoDuration) {
                const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
                if (match) {
                    const hours = parseInt(match[1]) || 0;
                    const minutes = parseInt(match[2]) || 0;
                    const seconds = parseInt(match[3]) || 0;
                    return hours * 3600 + minutes * 60 + seconds;
                }
                return 0;
            }

            const durationSeconds = iso8601DurationToSeconds(durationISO);

            const videoSitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
        <loc>${videoPageUrl}</loc>
        <video:video>
            <video:thumbnail_loc>${thumbnailUrl}</video:thumbnail_loc>
            <video:title>${videoName}</video:title>
            <video:description>${description}</video:description>
            <video:player_loc allow_embed="yes">${embedUrl}</video:player_loc>
            <video:duration>${durationSeconds}</video:duration>
            <video:publication_date>${uploadDate}</video:publication_date>
        </video:video>
    </url>
</urlset>`;

            // Opsi untuk menggunakan string XML yang dihasilkan:
            // 1. Anda bisa menampilkannya di elemen textarea untuk disalin:
            const textarea = document.createElement('textarea');
            textarea.value = videoSitemapXML;
            textarea.style.width = '100%'; // Contoh styling
            textarea.style.height = '300px';
            document.body.appendChild(textarea);

            // 2. Atau Anda bisa mengirimnya ke server Anda jika Anda memiliki endpoint untuk menyimpan file:
            /*
            fetch('/api/save-video-sitemap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/xml'
                },
                body: videoSitemapXML
            })
            .then(response => response.json())
            .then(data => console.log('Sitemap saved:', data))
            .catch(error => console.error('Error saving sitemap:', error));
            */
        });