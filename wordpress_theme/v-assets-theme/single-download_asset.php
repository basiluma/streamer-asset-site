<?php get_header(); ?>

<main>
    <div class="container">
        <?php
        while ( have_posts() ) :
            the_post();
            $image_url = get_post_meta( get_the_ID(), 'asset_image_url', true );
            $color = get_post_meta( get_the_ID(), 'asset_color', true );
            if ( has_post_thumbnail() ) {
                $image_url = get_the_post_thumbnail_url( get_the_ID(), 'full' );
            }
            $cats = get_the_terms( get_the_ID(), 'asset_category' );
            $cat_name = $cats ? $cats[0]->name : 'その他';
            ?>
            <div class="detail-layout">
                <!-- Left Column: Content -->
                <div class="content-col">
                    <div class="preview-area">
                        <div class="preview-img" id="preview-img" style="
                            background-color: <?php echo esc_attr($color); ?>;
                            <?php if($image_url): ?>
                                background-image: url('<?php echo esc_url($image_url); ?>');
                                background-size: contain;
                                background-position: center;
                                background-repeat: no-repeat;
                                background-color: transparent;
                            <?php endif; ?>
                        "></div>
                        <div class="asset-meta">
                            <span class="asset-category"><?php echo esc_html($cat_name); ?></span>
                            <h1 style="margin: 10px 0;"><?php the_title(); ?></h1>
                            <div style="color: #666;">
                                <?php the_content(); ?>
                                <p>
                                    配信画面に重ねて使える、Vtuber・ストリーマー向けのフリー素材です。<br>
                                    配信の雰囲気に合わせてお使いください。<br>
                                    色味調整や加工も自由に行っていただけます。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Sidebar -->
                <aside class="sidebar-col">
                    <div class="download-section">
                        <h3 style="margin-bottom: 15px;">無料ダウンロード</h3>
                        <button class="btn btn-primary" id="download-btn"
                            style="width: 100%; margin-bottom: 10px;" data-image-url="<?php echo esc_url($image_url); ?>" data-filename="<?php the_title(); ?>">ダウンロード (.png)</button>
                        <p style="font-size: 0.8rem; color: #999;">商用利用OK / クレジット不要</p>

                        <!-- Color Adjustment -->
                        <div class="color-adjustment" style="margin-top: 20px; text-align: left;">
                            <h3>色調整</h3>
                            <div class="slider-container">
                                <label for="hueSlider">色相 (Hue): <span id="hueValue">0</span>°</label>
                                <input type="range" id="hueSlider" min="0" max="360" value="0" style="width: 100%;">
                            </div>
                            <div class="slider-container" style="margin-top: 15px;">
                                <label for="contrastSlider">コントラスト (Contrast): <span id="contrastValue">100</span>%</label>
                                <input type="range" id="contrastSlider" min="0" max="200" value="100" style="width: 100%;">
                            </div>
                            <div class="slider-container" style="margin-top: 15px;">
                                <label for="brightnessSlider">明度 (Brightness): <span id="brightnessValue">100</span>%</label>
                                <input type="range" id="brightnessSlider" min="0" max="200" value="100" style="width: 100%;">
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar Ad -->
                    <div class="ad-container ad-rect" style="margin: 20px auto;">
                        広告スペース (300x250)
                    </div>
                </aside>
            </div>
        <?php endwhile; ?>

        <!-- Bottom Ad -->
        <div class="ad-container ad-banner">
            広告スペース (728x90)
        </div>
    </div>
</main>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const previewImg = document.getElementById('preview-img');
    const hueSlider = document.getElementById('hueSlider');
    const hueValue = document.getElementById('hueValue');
    const contrastSlider = document.getElementById('contrastSlider');
    const contrastValue = document.getElementById('contrastValue');
    const brightnessSlider = document.getElementById('brightnessSlider');
    const brightnessValue = document.getElementById('brightnessValue');
    const downloadBtn = document.getElementById('download-btn');

    function updateFilters() {
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

    downloadBtn.onclick = (e) => {
        e.preventDefault();
        const imageUrl = downloadBtn.dataset.imageUrl;
        const filename = downloadBtn.dataset.filename;

        if (!imageUrl) {
            alert('ダウンロード可能な画像がありません。');
            return;
        }

        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imageUrl;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;

            // Apply filter
            const hue = hueSlider.value;
            const contrast = contrastSlider.value;
            const brightness = brightnessSlider.value;
            ctx.filter = `hue-rotate(${hue}deg) contrast(${contrast}%) brightness(${brightness}%)`;

            ctx.drawImage(img, 0, 0);

            // Trigger download
            const link = document.createElement('a');
            link.download = `${filename}_${hue}.png`;
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        img.onerror = () => {
            // Fallback
            const link = document.createElement('a');
            link.download = filename + '.png';
            link.href = imageUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    };
});
</script>

<?php get_footer(); ?>
