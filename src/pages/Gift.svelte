<script>
</script>

<section id="gift" class="section">
    <div class="gift-content">
        <h2 class="gift-title">마음 전하실 곳</h2>

        <div class="gift-info">
            <p class="gift-message">따뜻한 축하의 마음을 전하고 싶으시다면 아래 계좌로 축의금을 보내주세요.</p>

            <div class="account-list">
                <div class="account-item">
                    <p class="account-holder">신랑 박영덕</p>
                    <p class="account-number">하나은행 123-456789-01</p>
                </div>

                <div class="account-item">
                    <p class="account-holder">신부 오지수</p>
                    <p class="account-number">우리은행 987-654321-01</p>
                </div>
            </div>

            <p class="gift-note">
                계좌 이체 시 송금자명에 신분증상의 이름을 기입하여 주시면 감사하겠습니다.
            </p>
        </div>
    </div>
</section>

<style>
    .gift-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        width: 100%;
        max-width: 450px;
    }

    .gift-title {
        font-size: 32px;
        font-weight: 300;
        color: #333;
        margin: 0;
    }

    .gift-info {
        width: 100%;
        padding: 24px;
        background: #f9f9f9;
        border-radius: 8px;
    }

    .gift-message {
        font-size: 13px;
        color: #666;
        margin: 0 0 16px 0;
        line-height: 1.6;
    }

    .account-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 16px;
    }

    .account-item {
        background: white;
        padding: 12px;
        border-radius: 6px;
        border: 1px solid #eee;
    }

    .account-holder {
        font-size: 13px;
        font-weight: 600;
        color: #333;
        margin: 0 0 4px 0;
    }

    .account-number {
        font-size: 12px;
        color: #d4956f;
        margin: 0;
        font-family: 'Courier New', monospace;
    }

    .gift-note {
        font-size: 12px;
        color: #999;
        margin: 0;
        line-height: 1.5;
    }

    @media (min-width: 768px) {
        .gift-content {
            max-width: 100%;
        }
    }
</style>
