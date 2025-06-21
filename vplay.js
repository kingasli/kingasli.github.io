const DOMAIN_MAP = {
            "meki": "https://videq.xyz/e/",
            "peler": "https://videq.xyz/e/",
        };

        const videoPlayer = {
            /**
             * @param {string} videoSource - String dengan format "domain:video_id".
             * @param {boolean} [autoplay=false] - Apakah video akan diputar otomatis (tidak disarankan untuk fullscreen).
             */
            loadVideo: function(videoSource, autoplay = false) {
                const videoIframe = document.getElementById("video-iframe");

                if (!videoIframe) {
                    console.error("Error: Elemen #video-iframe tidak ditemukan.");
                    return;
                }

                const [domainPrefix, videoId] = videoSource.split(":");

                if (!domainPrefix || !videoId) {
                    console.error("Format sumber video tidak valid. Harusnya 'domain:video_id'.", videoSource);
                    return;
                }

                const baseUrl = DOMAIN_MAP[domainPrefix]; 

                if (!baseUrl) {
                    console.error(`Tipe domain tidak valid atau tidak didukung: ${domainPrefix}`);
                    return;
                }

                let videoUrl = "";

                switch (domainPrefix) {
                    case "meki":
                        videoUrl = `${baseUrl}${videoId}`; 
                        break;
                    case "peler":
                        videoUrl = `${baseUrl}${videoId}`; 
                        break;
                    default:
                        videoUrl = `${baseUrl}${videoId}`; 
                }

                videoIframe.src = videoUrl;
                console.log(`Memuat video dari ${domainPrefix}: ${videoId}. URL: ${videoUrl}`);
            }
        };

        // M
        document.addEventListener('DOMContentLoaded', () => {
            if (VIDEO_SOURCES.length > 0) { 
                videoPlayer.loadVideo(VIDEO_SOURCES[0], false);
            } else {
                console.warn("Tidak ada sumber video yang ditentukan dalam VIDEO_SOURCES.");
            }
        });