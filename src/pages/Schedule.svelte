<script>
    import naverIcon from '../assets/icons/navermap-icon.png';
    import kakaoIcon from '../assets/icons/kakao-icon.png';
    import tmapIcon from '../assets/icons/tmap-icon.png';
</script>

<section id="schedule" class="section">
    <div class="schedule-content">
        <h2 class="schedule-title">예식 일시</h2>

        <div class="schedule-info">
            <p class="date">2026년 05월 30일 (토) 오후 4시 20분</p>
            <p class="venue">KDW 웨딩 마이더스홀</p>
        </div>

        <div class="map-preview">
            <picture>
                <source srcset="/images/location-map.webp" type="image/webp" alt="강동역에서 KDW 웨딩 위치 지도" />
                <img src="/images/location-map.jpg" alt="강동역에서 KDW 웨딩 위치 지도" />
            </picture>
        </div>

        <div class="location-info">
            <p><strong>주소</strong></p>
            <p>서울 강동구 천호대로 1102 KDW 웨딩 마이더스홀</p>

            <p><strong>찾아오는 길</strong></p>
            <p>강동역 3번 출구 바로 앞</p>

            <p><strong>버스</strong></p>
            <p>130, 341, 342, 370, 3214, 3316</p>

            <p><strong>주차</strong></p>
            <p>웨딩홀 지하 1층~3층 (1시간 30분 무료 주차)</p>
        </div>

        <div class="map-buttons">
            <a
                href="https://map.naver.com/index.nhn?query=KDW웨딩"
                target="_blank"
                rel="noopener noreferrer"
                class="map-btn naver"
            >
                <img src={naverIcon} alt="네이버지도 아이콘" class="map-icon" />
                <span>네이버지도</span>
            </a>
            <a
                href="https://map.kakao.com/?urlLevel=3&q=KDW웨딩"
                target="_blank"
                rel="noopener noreferrer"
                class="map-btn kakao"
            >
                <img src={kakaoIcon} alt="카카오네비 아이콘" class="map-icon" />
                <span>카카오네비</span>
            </a>
            <a
                href="https://tmap.life/0c5de346"
                target="_blank"
                rel="noopener noreferrer"
                class="map-btn tmap"
            >
                <img src={tmapIcon} alt="티맵 아이콘" class="map-icon" />
                <span>티맵</span>
            </a>
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

    .map-preview {
        width: 100%;
        max-width: 400px;
        margin: 24px 0;
    }

    .map-preview img {
        width: 100%;
        height: auto;
        display: block;
    }

    .location-info {
        width: 100%;
        font-size: 12px;
        color: #666;
        line-height: 1.8;
    }

    .location-info p {
        margin: 8px 0;
    }

    .location-info strong {
        color: #333;
        display: block;
        margin-top: 12px;
        font-weight: 600;
    }

    .location-info p:first-child strong {
        margin-top: 0;
    }

    .map-buttons {
        display: flex;
        gap: 6px;
        margin-top: 20px;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-wrap: nowrap;
    }

    .map-btn {
        flex: 1;
        padding: 8px 8px;
        border: 2px solid #d4956f;
        border-radius: 6px;
        background: white;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-weight: 500;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
        color: #d4956f;
        min-width: 0;
    }

    .map-icon {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        object-fit: contain;
    }

    .map-btn:hover {
        background-color: #ffe4d6;
        transform: translateY(-2px);
    }

    .map-btn.naver {
    }

    .map-btn.naver:hover {
    }

    .map-btn.kakao {
    }

    .map-btn.kakao:hover {
    }

    .map-btn.tmap {
    }

    .map-btn.tmap:hover {
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
