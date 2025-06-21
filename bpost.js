document.addEventListener('DOMContentLoaded', function() {
            const articleContainer = document.getElementById('articleContainer');
            if (!articleContainer) {
                console.warn('Elemen #articleContainer tidak ditemukan. JSON-LD BlogPosting tidak akan dibuat.');
                return;
            }

            // Ambil data dari atribut data-* pada div#articleContainer
            const headline = articleContainer.getAttribute('data-headline') || document.title;
            const description = articleContainer.getAttribute('data-description') || '';
            const imageUrlsAttr = articleContainer.getAttribute('data-image-urls');
            const imageUrls = imageUrlsAttr ? imageUrlsAttr.split(',') : [];
            const publishedDate = articleContainer.getAttribute('data-published-date') || '';
            const modifiedDate = articleContainer.getAttribute('data-modified-date') || publishedDate;
            const authorName = articleContainer.getAttribute('data-author-name') || 'Unknown Author';
            const publisherName = articleContainer.getAttribute('data-publisher-name') || 'Your Website Name';
            const publisherLogoUrl = articleContainer.getAttribute('data-publisher-logo-url') || '';
            const publisherLogoWidth = parseInt(articleContainer.getAttribute('data-publisher-logo-width')) || 600;
            const publisherLogoHeight = parseInt(articleContainer.getAttribute('data-publisher-logo-height')) || 60;
            const canonicalUrl = articleContainer.getAttribute('data-canonical-url') || window.location.href;

            if (imageUrls.length === 0) {
                 imageUrls.push('https://i.pinimg.com/236x/5d/c4/cf/5dc4cf963762e53de2d6aef5f6778b5f.jpg');
                 console.warn('Tidak ada data-image-urls yang ditemukan. Menggunakan gambar default:', imageUrls[0]);
            }

            // Buat objek JSON-LD BlogPosting
            const blogPostingSchema = {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                },
                "headline": headline,
                "image": imageUrls,
                "datePublished": publishedDate,
                "dateModified": modifiedDate,
                "author": {
                    "@type": "Person",
                    "name": authorName,
                    "url": "https://justpaste.it/u/KingBokep"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": publisherName,
                    "logo": {
                        "@type": "ImageObject",
                        "url": publisherLogoUrl,
                        "width": publisherLogoWidth,
                        "height": publisherLogoHeight
                    }
                },
                "description": description
            };

            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(blogPostingSchema, null, 2);
            document.head.appendChild(script);

            console.log('JSON-LD BlogPosting berhasil dibuat dan ditambahkan:', blogPostingSchema);
        });