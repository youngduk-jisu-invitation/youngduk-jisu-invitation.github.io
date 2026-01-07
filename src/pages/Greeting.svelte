<script>
</script>

<section id="greeting" class="section">
    <div class="greeting-content">
        <h2 class="greeting-title">You're Invited!</h2>

        <div class="greeting-couple">
            <div class="couple-info">
                <img src="/images/middle-cover/cover1.jpg" alt="신랑 신부" />
            </div>
        </div>

        <div class="greeting-names">
            <div class="groom-side">
                <p class="parents">박용선·오혜숙 아들</p>
                <p class="name">박 영 덕</p>
            </div>
            <span class="heart">💕</span>
            <div class="bride-side">
                <p class="parents">오종찬·윤장숙 딸</p>
                <p class="name">오 지 수</p>
            </div>
        </div>

        <p class="greeting-message">
            두 사람의 함께 걸어갈 인생길에
            <br />
            따뜻한 응원과 축복을 나누어 주시기를 부탁드립니다.
        </p>

        <p class="greeting-description">
            귀한 걸음으로 자리를 빛내주시면
            <br />
            큰 기쁨이 될 것입니다.
        </p>
    </div>
</section>

<style>
    .greeting-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        text-align: center;
    }

    .greeting-title {
        font-size: 32px;
        font-weight: 300;
        color: #333;
        margin: 0;
        letter-spacing: 1px;
    }

    .greeting-couple {
        width: 100%;
        max-width: 350px;
    }

    @media (min-width: 768px) {
        .greeting-couple {
            max-width: 500px;
        }
    }

    .couple-info img {
        width: 100%;
        border-radius: 8px;
    }

    .greeting-names {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 16px 0;
    }

    .groom-side,
    .bride-side {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }

    .parents {
        font-size: 12px;
        color: #999;
        margin: 0;
    }

    .name {
        font-size: 18px;
        font-weight: 600;
        color: #d4956f;
        margin: 0;
    }

    .heart {
        font-size: 20px;
    }

    .greeting-message {
        font-size: 13px;
        color: #333;
        line-height: 1.8;
        margin: 0;
        max-width: 300px;
        word-break: keep-all;
        overflow-wrap: break-word;
    }

    .greeting-description {
        font-size: 12px;
        color: #666;
        line-height: 1.6;
        margin: 0;
        max-width: 300px;
        word-break: keep-all;
        overflow-wrap: break-word;
    }

    @media (min-width: 768px) {
        .greeting-message {
            font-size: 14px;
        }

        .greeting-description {
            font-size: 13px;
        }
    }
</style>
