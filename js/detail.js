document.addEventListener('DOMContentLoaded', () => {
    // Get ID from URL
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id');
    // Try to parse as integer for legacy IDs, but keep as string if not a number
    const id = !isNaN(idParam) ? parseInt(idParam) : idParam;

    if (!id) {
        window.location.href = 'index.html';
        return;
    }

    // Find asset
    const asset = assets.find(a => a.id === id);

    if (!asset) {
        document.querySelector('.content-col').innerHTML = '<h1>素材が見つかりませんでした。</h1><p><a href="index.html">トップページに戻る</a></p>';
        return;
    }

    // Update DOM
    document.title = `${asset.title} | V-Assets`;

    // Image/Preview
    const previewImg = document.querySelector('.preview-img');
    if (asset.image) {
        previewImg.style.backgroundImage = `url('${encodeURI(asset.image)}')`;
        previewImg.style.backgroundSize = 'contain';
        previewImg.style.backgroundPosition = 'center';
        previewImg.style.backgroundRepeat = 'no-repeat';
        previewImg.style.backgroundColor = 'transparent';
    } else {
        previewImg.style.backgroundColor = asset.color;
        if (asset.border) previewImg.style.border = asset.border;
    }

    // Meta
    document.getElementById('detail-category').textContent = getCategoryName(asset.category);
    document.getElementById('detail-title').textContent = asset.title;

    // Download Button
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.onclick = (e) => {
            e.preventDefault();

            if (!asset.image) {
                alert('ダウンロード可能な画像がありません。');
                return;
            }

            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = encodeURI(asset.image);

            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;

                const hue = document.getElementById('hueSlider').value;
                const contrast = document.getElementById('contrastSlider').value;
                const brightness = document.getElementById('brightnessSlider').value;
                ctx.filter = `hue-rotate(${hue}deg) contrast(${contrast}%) brightness(${brightness}%)`;

                ctx.drawImage(img, 0, 0);

                const link = document.createElement('a');
                link.download = `${asset.title}_${hue}.png`;
                link.href = canvas.toDataURL('image/png');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };

            img.onerror = () => {
                const link = document.createElement('a');
                link.download = asset.title + '.png';
                link.href = encodeURI(asset.image);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
        };
    }

    // Color Adjustment
    const hueSlider = document.getElementById('hueSlider');
    const hueValue = document.getElementById('hueValue');
    const contrastSlider = document.getElementById('contrastSlider');
    const contrastValue = document.getElementById('contrastValue');
    const brightnessSlider = document.getElementById('brightnessSlider');
    const brightnessValue = document.getElementById('brightnessValue');

    function updateFilters() {
        if (!hueSlider || !contrastSlider || !brightnessSlider || !previewImg) return;
        const hue = hueSlider.value;
        const contrast = contrastSlider.value;
        const brightness = brightnessSlider.value;

        hueValue.textContent = hue;
        contrastValue.textContent = contrast;
        brightnessValue.textContent = brightness;

        previewImg.style.filter = `hue-rotate(${hue}deg) contrast(${contrast}%) brightness(${brightness}%)`;
    }

    if (hueSlider && contrastSlider && brightnessSlider && previewImg) {
        hueSlider.addEventListener('input', updateFilters);
        contrastSlider.addEventListener('input', updateFilters);
        brightnessSlider.addEventListener('input', updateFilters);
    }

    // CSS/HTML Asset Logic
    if (asset.fileUrl) {
        const colorAdjustment = document.querySelector('.color-adjustment');
        if (colorAdjustment) colorAdjustment.style.display = 'none';

        if (downloadBtn) {
            downloadBtn.style.display = 'none';
        }

        // Live Preview via Iframe
        if (previewImg) {
            previewImg.style.backgroundImage = 'none';
            previewImg.style.backgroundColor = '#ffffff';
            previewImg.innerHTML = '';

            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
            iframe.style.overflow = 'hidden';

            // Allow scripts for HTML assets
            iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');

            if (asset.fileUrl.endsWith('.html')) {
                iframe.src = asset.fileUrl;
            } else {
                const htmlContent = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="UTF-8">
                        <link rel="stylesheet" href="${asset.fileUrl}">
                        <style>
                            body { 
                                margin: 0; 
                                overflow: hidden;
                                background: transparent; 
                            }
                        </style>
                    </head>
                    <body>
                    </body>
                    </html>
                `;
                iframe.srcdoc = htmlContent;
            }
            previewImg.appendChild(iframe);
        }

        // OBS URL Section
        const obsUrlSection = document.getElementById('obs-url-section');
        const obsUrlInput = document.getElementById('obs-url-input');
        const copyObsUrlBtn = document.getElementById('copy-obs-url-btn');

        if (obsUrlSection && obsUrlInput && copyObsUrlBtn) {
            obsUrlSection.style.display = 'block';

            const absoluteUrl = new URL(asset.fileUrl, window.location.href).href;
            obsUrlInput.value = absoluteUrl;

            copyObsUrlBtn.onclick = () => {
                obsUrlInput.select();
                obsUrlInput.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(absoluteUrl).then(() => {
                    const originalText = copyObsUrlBtn.textContent;
                    copyObsUrlBtn.textContent = 'Copied!';
                    setTimeout(() => {
                        copyObsUrlBtn.textContent = originalText;
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                    alert('コピーに失敗しました。');
                });
            };
        }
    }
});

function getCategoryName(category) {
    switch (category) {
        case 'hands': return '手素材';
        case 'items': return '小物・装飾';
        case 'equipment': return '配信機材';
        case 'css': return 'CSS素材';
        default: return 'その他';
    }
}
