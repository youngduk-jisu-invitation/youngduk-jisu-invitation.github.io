<script>
    import Header from './components/Header.svelte';
    import MainCover from './pages/MainCover.svelte';
    import Quote from './pages/Quote.svelte';
    import Invitation from './pages/Invitation.svelte';
    import Gallery from './pages/Gallery.svelte';
    import Schedule from './pages/Schedule.svelte';
    import Countdown from './pages/Countdown.svelte';
    import Gift from './pages/Gift.svelte';
    import Ending from './pages/Ending.svelte';
    import './styles/global.css';
    import './styles/layout.css';

    let menuOpen = false;
    let activeSection = 'main';

    const sections = [
        { id: 'main', label: '시작' },
        { id: 'quote', label: '인사말' },
        { id: 'invitation', label: '초대' },
        { id: 'gallery', label: '갤러리' },
        { id: 'schedule', label: '예식 일시' },
        { id: 'countdown', label: '남은 시간' },
        { id: 'gift', label: '마음 전하실 곳' },
        { id: 'ending', label: '감사' },
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
    <MainCover />
    <Quote />
    <Invitation />
    <Gallery />
    <Schedule />
    <Countdown />
    <Gift />
    <Ending />
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }

    .container {
        max-width: 480px;
        margin: 0 auto;
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
</style>
