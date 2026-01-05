<script>
</script>

<section id="location" class="section">
    <div class="location-content">
        <h2 class="location-title">Location</h2>

        <div class="location-info">
            <div class="location-detail">
                <p class="detail-label">주소</p>
                <p class="detail-text">서울 강동구 천호대로 1102 KDW 웨딩 마이더스홀</p>
            </div>

            <div class="location-detail">
                <p class="detail-label">찾아오는 길</p>
                <p class="detail-text">강동역 3번 출구 바로 앞</p>
            </div>

            <div class="location-detail">
                <p class="detail-label">버스</p>
                <p class="detail-text">130, 341, 342, 370, 3214, 3316</p>
            </div>

            <div class="location-detail">
                <p class="detail-label">주차</p>
                <p class="detail-text">웨딩홀 지하 1층~3층 (1시간 30분 무료 주차)</p>
            </div>
        </div>

        <div class="map-buttons">
            <button class="map-btn naver">네이버지도</button>
            <button class="map-btn kakao">카카오네비</button>
            <button class="map-btn tmap">티맵</button>
        </div>
    </div>
</section>

<style>
    .location-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        width: 100%;
        max-width: 450px;
    }

    .location-title {
        font-size: 32px;
        font-weight: 300;
        color: #333;
        margin: 0;
    }

    .location-info {
        width: 100%;
        padding: 24px;
        background: #f9f9f9;
        border-radius: 8px;
    }

    .location-detail {
        margin-bottom: 16px;
    }

    .location-detail:last-child {
        margin-bottom: 0;
    }

    .detail-label {
        font-size: 12px;
        font-weight: 600;
        color: #d4956f;
        margin: 0 0 6px 0;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .detail-text {
        font-size: 13px;
        color: #333;
        line-height: 1.6;
        margin: 0;
    }

    .map-buttons {
        display: flex;
        gap: 10px;
        width: 100%;
    }

    .map-btn {
        flex: 1;
        padding: 14px 16px;
        border: 1px solid #ddd;
        border-radius: 6px;
        background: white;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .map-btn:hover {
        border-color: #d4956f;
        color: #d4956f;
    }

    .map-btn.naver {
        border-color: #00c73c;
        color: #00c73c;
    }

    .map-btn.naver:hover {
        background-color: #f0fff0;
    }

    .map-btn.kakao {
        border-color: #ffe600;
        color: #333;
    }

    .map-btn.kakao:hover {
        background-color: #fffef0;
    }

    .map-btn.tmap {
        border-color: #ff6b00;
        color: #ff6b00;
    }

    .map-btn.tmap:hover {
        background-color: #fff5f0;
    }

    @media (min-width: 768px) {
        .location-content {
            max-width: 100%;
        }

        .map-buttons {
            gap: 12px;
        }
    }
</style>
