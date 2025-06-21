document.addEventListener('DOMContentLoaded', function() {
            const videoContainer = document.getElementById('videoContainer');
            if (!videoContainer) {
                console.warn('Elemen #videoContainer tidak ditemukan. JSON-LD tidak akan dibuat.');
                return;
            }

            const videoPlayerElem = document.getElementById('video-iframe'); // Selektor ID diperbaiki di sini
            if (!videoPlayerElem) {
                console.warn('Elemen #video-iframe tidak ditemukan. JSON-LD tidak akan dibuat.');
                return;
            }

            // Ambil data dari atribut data-* pada div#videoContainer
            const videoName = videoContainer.getAttribute('data-video-name') || 'Judul Video Default';
            const description = videoContainer.getAttribute('data-video-description') || 'Deskripsi video tidak tersedia.';
            const thumbnailUrl = videoContainer.getAttribute('data-thumbnail-url') || '';

            // Ambil data dari atribut data-* pada iframe#video-iframe
            const embedUrl = videoPlayerElem.getAttribute('data-embed-url') || videoPlayerElem.src;
            const duration = videoPlayerElem.getAttribute('data-duration') || '';
            const uploadDate = videoPlayerElem.getAttribute('data-upload-date') || '';

            // Buat objek JSON-LD
            const videoSchema = {
                "@context": "https://schema.org",
                "@type": "VideoObject",
                "name": videoName,
                "description": description,
                "uploadDate": uploadDate,
                "duration": duration,
                "thumbnailUrl": thumbnailUrl,
                "embedUrl": embedUrl,
                "publisher": {
                    "@type": "Organization",
                    "name": "kingbokep",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://kingasli.github.io/logo.svg",
                        "width": 600,
                        "height": 60
                    }
                },
                "potentialAction": {
                    "@type": "WatchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": window.location.href, // Menggunakan URL halaman saat ini
                        "actionPlatform": [
                            "http://schema.org/DesktopWebPlatform",
                            "http://schema.org/MobileWebPlatform",
                            "http://schema.org/AndroidPlatform",
                            "http://schema.org/IOSPlatform"
                        ]
                    }
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": window.location.href // Menggunakan URL halaman saat ini
                }
            };

            // Tambahkan elemen script JSON-LD ke head dokumen
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(videoSchema, null, 2);
            document.head.appendChild(script);

            console.log('JSON-LD VideoObject berhasil dibuat dan ditambahkan:', videoSchema);
        });