<script>
</script>

<section id="notice" class="section">
    <div class="notice-content">
        <h2 class="notice-title">축하의 마음만 <br class="mobile-br" />감사히 받겠습니다</h2>

        <div class="notice-body">
            <p>
                축의 화환은 정중히 사양합니다.
                <br />
                따뜻한 축하의 마음만 소중히 받겠습니다.
            </p>
            <p>
                저희의 앞날을 축복해 주시는 마음만으로도
                <br />
                충분히 감사합니다.
            </p>
            <p>
                보내주시는 따뜻한 마음,
                <br />
                오래도록 간직하겠습니다.
            </p>
        </div>
    </div>
</section>

<style>
    .notice-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 28px;
        text-align: center;
        max-width: 400px;
    }

    .notice-title {
        font-size: 24px;
        font-weight: 300;
        color: #333;
        margin: 0;
        letter-spacing: 1px;
    }

    .notice-title :global(.mobile-br) {
        display: none;
    }

    @media (max-width: 480px) {
        .notice-title :global(.mobile-br) {
            display: inline;
        }
    }

    .notice-body {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .notice-body p {
        font-size: 14px;
        font-weight: 300;
        color: #666;
        line-height: 1.8;
        margin: 0;
        word-break: keep-all;
        overflow-wrap: break-word;
    }
</style>
