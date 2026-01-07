<script>
    export let menuOpen = false;

    function handleMenuClick() {
        menuOpen = !menuOpen;
    }
</script>

<header class="header">
    <div class="header-content">
        <button class="hamburger" on:click={handleMenuClick} aria-label="메뉴 열기">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <div class="header-title">
            <span class="groom">🤵</span>
            <span class="names">영덕</span>
            <span class="heart">💕</span>
            <span class="names">지수</span>
            <span class="bride">👰</span>
        </div>
    </div>
</header>

<style>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        z-index: 100;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .header-content {
        max-width: 480px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 20px;
        position: relative;
    }

    .hamburger {
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .hamburger span {
        width: 24px;
        height: 3px;
        background-color: #333;
        transition: all 0.3s ease;
        border-radius: 2px;
    }

    .header-title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1px;
        white-space: nowrap;
        flex-wrap: nowrap;
    }

    .groom,
    .bride,
    .heart {
        font-size: 20px;
    }

    .names {
        color: #d4956f;
        font-weight: 600;
    }
</style>
