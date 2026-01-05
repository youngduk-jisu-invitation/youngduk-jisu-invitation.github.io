<script>
    let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    function calculateTimeLeft() {
        const weddingDate = new Date('2026-05-30T16:20:00').getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance > 0) {
            timeLeft = {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / 1000 / 60) % 60),
                seconds: Math.floor((distance / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    }

    // 초기 계산
    calculateTimeLeft();

    // 매초 업데이트
    setInterval(calculateTimeLeft, 1000);
</script>

<section id="countdown" class="section">
    <div class="countdown-content">
        <h2 class="countdown-title">남은 시간</h2>

        <div class="countdown-timer">
            <div class="time-unit">
                <div class="time-value">{String(timeLeft.days).padStart(2, '0')}</div>
                <div class="time-label">일</div>
            </div>

            <div class="time-separator">:</div>

            <div class="time-unit">
                <div class="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div class="time-label">시간</div>
            </div>

            <div class="time-separator">:</div>

            <div class="time-unit">
                <div class="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div class="time-label">분</div>
            </div>

            <div class="time-separator">:</div>

            <div class="time-unit">
                <div class="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div class="time-label">초</div>
            </div>
        </div>

        <p class="countdown-message">행복한 날을 기다립니다.</p>
    </div>
</section>

<style>
    .countdown-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }

    .countdown-title {
        font-size: 32px;
        font-weight: 300;
        color: #333;
        margin: 0;
    }

    .countdown-timer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-family: 'Courier New', monospace;
    }

    .time-unit {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .time-value {
        font-size: 40px;
        font-weight: 600;
        color: #d4956f;
        line-height: 1;
    }

    .time-label {
        font-size: 12px;
        color: #999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .time-separator {
        font-size: 28px;
        color: #d4956f;
        margin: 0 4px;
        font-weight: 300;
    }

    .countdown-message {
        font-size: 14px;
        color: #666;
        margin: 0;
    }

    @media (min-width: 768px) {
        .time-value {
            font-size: 48px;
        }
    }
</style>
