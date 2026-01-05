<script>
</script>

<section id="schedule" class="section">
    <div class="schedule-content">
        <h2 class="schedule-title">예식 일시</h2>

        <div class="schedule-info">
            <p class="date">2026년 05월 30일 (토) 오후 4시 20분</p>
            <p class="venue">KDW 웨딩 마이더스홀</p>
        </div>

        <div class="location-preview">
            <h3 class="location-title">Location</h3>

            <div class="map-preview">
                <p>강동역 ⊙---------- KDW 웨딩</p>
            </div>

            <div class="address-info">
                <p><strong>주소</strong></p>
                <p>서울 강동구 천호대로 1102 KDW 웨딩</p>

                <p><strong>찾아오는 길</strong></p>
                <p>강동역 3번 출구 바로 앞</p>

                <p><strong>버스</strong></p>
                <p>130, 341, 342, 370, 3214, 3316</p>

                <p><strong>주차</strong></p>
                <p>웨딩홀 지하 1층~3층 (1시간 30분 무료 주차)</p>
            </div>

            <div class="map-buttons">
                <button class="map-btn naver">네이버지도</button>
                <button class="map-btn kakao">카카오네비</button>
                <button class="map-btn tmap">티맵</button>
            </div>
        </div>
    </div>
</section>

<style>
    .schedule-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        width: 100%;
        max-width: 450px;
    }

    .schedule-title {
        font-size: 32px;
        font-weight: 300;
        color: #333;
        margin: 0;
    }

    .schedule-info {
        text-align: center;
    }

    .date {
        font-size: 16px;
        font-weight: 500;
        color: #333;
        margin: 0 0 8px 0;
    }

    .venue {
        font-size: 14px;
        color: #d4956f;
        margin: 0;
    }

    .location-preview {
        width: 100%;
        padding: 24px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }

    .location-title {
        font-size: 20px;
        font-weight: 300;
        color: #d4956f;
        margin: 0 0 16px 0;
        text-align: center;
    }

    .map-preview {
        background: #f5f5f5;
        padding: 16px;
        border-radius: 6px;
        text-align: center;
        font-size: 13px;
        color: #666;
        margin-bottom: 16px;
    }

    .address-info {
        font-size: 12px;
        color: #666;
        line-height: 1.8;
    }

    .address-info p {
        margin: 8px 0;
    }

    .address-info strong {
        color: #333;
        display: block;
        margin-top: 12px;
        font-weight: 600;
    }

    .address-info p:first-child strong {
        margin-top: 0;
    }

    .map-buttons {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }

    .map-btn {
        flex: 1;
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 6px;
        background: white;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-weight: 500;
    }

    .map-btn:hover {
        border-color: #d4956f;
        color: #d4956f;
        background-color: #fff5f0;
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
        .schedule-content {
            max-width: 100%;
        }

        .map-buttons {
            gap: 12px;
        }

        .map-btn {
            font-size: 13px;
        }
    }
</style>
