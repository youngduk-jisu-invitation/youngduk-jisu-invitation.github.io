<script>
</script>

<section id="ending" class="section ending-section">
    <div class="ending-content">
        <div class="ending-image">
            <img src="/images/gallery/1.jpg" alt="행복한 순간" />
        </div>

        <h2 class="ending-title">감사합니다</h2>

        <p class="ending-message">
            저희의 인생에서 가장 특별한 날을 축하해 주시는 모든 분들께
            <br />
            진심으로 감사드립니다.
        </p>

        <p class="ending-closing">앞으로도 서로를 소중히 여기며 행복하게 살아가겠습니다.</p>

        <div class="ending-signature">
            <p>영덕과 지수 올림</p>
        </div>
    </div>
</section>

<style>
    .ending-section {
        background: linear-gradient(135deg, #fff5e6 0%, #ffe4d6 100%);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 100px 32px;
    }

    .ending-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        text-align: center;
        max-width: 400px;
    }

    .ending-image {
        width: 100%;
        max-width: 350px;
        aspect-ratio: 1;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .ending-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .ending-title {
        font-size: 32px;
        font-weight: 300;
        color: #333;
        margin: 0;
    }

    .ending-message {
        font-size: 14px;
        color: #333;
        line-height: 1.8;
        margin: 0;
    }

    .ending-closing {
        font-size: 12px;
        color: #666;
        line-height: 1.6;
        margin: 0;
        font-style: italic;
    }

    .ending-signature {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid #d4956f;
    }

    .ending-signature p {
        font-size: 14px;
        color: #d4956f;
        font-weight: 500;
        margin: 0;
    }

    @media (min-width: 768px) {
        .ending-content {
            max-width: 100%;
        }

        .ending-image {
            max-width: 500px;
        }
    }
</style>
