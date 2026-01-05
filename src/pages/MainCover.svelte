<script>
</script>

<section id="main" class="section main-section">
    <div class="cover-content">
        <h1 class="subtitle">BETTER TOGETHER</h1>
        <h2 class="title">Only love</h2>
        <div class="cover-image">
            <img src="/images/main-cover/main.jpg" alt="메인 커버 이미지" />
        </div>
        <p class="couple-name">YOUNGDUK & JISU</p>
        <p class="description">
            함께 하는 인생의 가장 소중한 순간에
            <br />
            따뜻한 축복과 축복을 나누고자 합니다.
        </p>
    </div>
</section>

<style>
    .main-section {
        background: linear-gradient(135deg, #fff5e6 0%, #ffe4d6 100%);
        padding: 40px 20px;
    }

    @media (min-width: 768px) {
        .main-section {
            min-height: auto;
            padding: 80px 40px;
        }
    }

    .cover-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        text-align: center;
    }

    .subtitle {
        font-size: 14px;
        letter-spacing: 2px;
        color: #666;
        font-weight: 500;
        margin: 0;
    }

    .title {
        font-size: 48px;
        font-weight: 300;
        color: #d4956f;
        margin: 0;
        line-height: 1.2;
        letter-spacing: 1px;
    }

    .cover-image {
        width: 100%;
        max-width: 300px;
        aspect-ratio: 1;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .cover-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .couple-name {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 2px;
        color: #333;
        margin: 0;
    }

    .description {
        font-size: 14px;
        color: #666;
        line-height: 1.8;
        margin: 0;
        max-width: 300px;
    }
</style>
