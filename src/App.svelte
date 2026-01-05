<script>
    import Header from './components/Header.svelte';
    import './styles/global.css';
    import './styles/layout.css';

    let menuOpen = false;
    let activeSection = 'main';

    const sections = [
        { id: 'main', label: '메인' },
        { id: 'quote', label: '글귀' },
        { id: 'greeting', label: '인사말' },
        { id: 'gallery', label: '갤러리' },
        { id: 'schedule', label: '예식 일시' },
        { id: 'countdown', label: '남은 시간' },
        { id: 'location', label: '예식 장소' },
        { id: 'gift', label: '마음 전하실 곳' },
        { id: 'ending', label: '마무리' },
    ];

    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            activeSection = id;
            menuOpen = false;
        }
    }

    function handleScroll() {
        // 현재 스크롤 위치에 따라 activeSection 업데이트
        for (const section of sections) {
            const element = document.getElementById(section.id);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2) {
                    activeSection = section.id;
                }
            }
        }
    }
</script>

<svelte:window on:scroll={handleScroll} />

<Header bind:menuOpen />

<nav class="sidebar" class:open={menuOpen}>
    <button class="close-btn" on:click={() => (menuOpen = false)}>✕</button>
    <ul class="menu-list">
        {#each sections as section}
            <li>
                <button
                    class={activeSection === section.id ? 'active' : ''}
                    on:click={() => scrollToSection(section.id)}
                >
                    {section.label}
                </button>
            </li>
        {/each}
    </ul>
</nav>

<main class="container">
    <section id="main" class="section main-section">
        <h1>Main Cover</h1>
        <p>메인 커버 섹션</p>
    </section>

    <section id="quote" class="section">
        <h2>Quote</h2>
        <p>글귀 섹션</p>
    </section>

    <section id="greeting" class="section">
        <h2>Greeting</h2>
        <p>인사말 섹션</p>
    </section>

    <section id="gallery" class="section">
        <h2>Gallery</h2>
        <p>갤러리 섹션</p>
    </section>

    <section id="schedule" class="section">
        <h2>Schedule</h2>
        <p>예식 일시 섹션</p>
    </section>

    <section id="countdown" class="section">
        <h2>Countdown</h2>
        <p>남은 시간 섹션</p>
    </section>

    <section id="location" class="section">
        <h2>Location</h2>
        <p>예식 장소 섹션</p>
    </section>

    <section id="gift" class="section">
        <h2>Gift</h2>
        <p>
            마음 전하실 곳
            섹션ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
        </p>
    </section>

    <section id="ending" class="section">
        <h2>Ending</h2>
        <p>마무리 섹션</p>
    </section>
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }

    .container {
        max-width: 480px;
        margin: 0 auto;
        padding-bottom: 2rem;
    }

    @media (min-width: 768px) {
        .container {
            max-width: 90%;
            max-width: 800px;
        }
    }

    .sidebar {
        position: fixed;
        left: -300px;
        top: 0;
        width: 280px;
        height: 100vh;
        background-color: #fff;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
        transition: left 0.3s ease;
        z-index: 99;
        overflow-y: auto;
        padding-top: 60px;
    }

    .sidebar.open {
        left: 0;
    }

    .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
    }

    .menu-list {
        list-style: none;
        margin: 0;
        padding: 20px 0;
    }

    .menu-list li {
        margin: 0;
    }

    .menu-list button {
        display: block;
        width: 100%;
        padding: 16px 24px;
        background: none;
        border: none;
        text-align: left;
        font-size: 16px;
        cursor: pointer;
        color: #333;
        transition: background-color 0.2s ease;
    }

    .menu-list button:hover {
        background-color: #f5f5f5;
    }

    .menu-list button.active {
        background-color: #ffe4d6;
        color: #d4956f;
        font-weight: 500;
    }

    .section {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px 20px;
        border-bottom: 1px solid #eee;
    }

    @media (min-width: 768px) {
        .section {
            min-height: auto;
            padding: 80px 40px;
        }
    }

    .main-section {
        background: linear-gradient(135deg, #fff5e6 0%, #ffe4d6 100%);
    }
</style>
