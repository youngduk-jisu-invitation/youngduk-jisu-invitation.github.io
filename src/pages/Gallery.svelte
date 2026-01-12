<script>
    import { onMount } from 'svelte';

    let currentPage = 0;
    let selectedImageIndex = null;
    let modalRef;
    let touchStartX = 0;
    let imageKey = 0; // 이미지 변경 감지용
    let slideDirection = null; // 'next' 또는 'prev'
    const imagesPerPage = 9;
    let galleryImages = [
        // 갤러리 이미지 목록 (실제 이미지는 public/images/gallery에 저장)
        // 이미지 파일명: 1.jpg, 2.jpg, 3.jpg ... 등
    ];

    // 갤러리 이미지 동적 로드
    async function loadGalleryImages() {
        try {
            // public/images/gallery 폴더의 이미지 목록을 동적으로 로드
            // 실제 구현 시 메타데이터 파일이 필요하거나, 서버에서 파일 목록을 제공해야 함
            // 현재는 예시 구조로 설정 (사용자가 이미지 추가 시 업데이트)
            const imageCount = 27; // 갤러리에 있는 이미지 개수
            for (let i = 1; i <= imageCount; i++) {
                galleryImages.push({
                    id: i,
                    src: `/images/gallery/${i}.jpg`,
                    alt: `갤러리 이미지 ${i}`,
                });
            }
            galleryImages = galleryImages; // 반응성 업데이트
        } catch (error) {
            console.error('갤러리 이미지 로드 실패:', error);
        }
    }

    // 컴포넌트 마운트 시 이미지 로드
    onMount(() => {
        loadGalleryImages();
    });

    $: totalPages = Math.ceil(galleryImages.length / imagesPerPage);
    $: visibleImages = galleryImages.slice(
        currentPage * imagesPerPage,
        (currentPage + 1) * imagesPerPage
    );

    function nextPage() {
        if (currentPage < totalPages - 1) {
            currentPage++;
        }
    }

    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
        }
    }

    function openModal(imageIndex) {
        selectedImageIndex = imageIndex;
        imageKey = imageIndex;
        setTimeout(() => modalRef?.showModal(), 0);
    }

    function closeModal() {
        selectedImageIndex = null;
        modalRef?.close();
    }

    function nextModalImage() {
        if (selectedImageIndex !== null) {
            slideDirection = 'next';
            selectedImageIndex = (selectedImageIndex + 1) % galleryImages.length;
            imageKey++;
        }
    }

    function prevModalImage() {
        if (selectedImageIndex !== null) {
            slideDirection = 'prev';
            selectedImageIndex =
                (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length;
            imageKey--;
        }
    }

    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
    }

    function handleTouchEnd(e) {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
            // 50px 이상 움직이면 반응
            if (diff > 0) {
                // 왼쪽으로 쓸어 (다음 이미지)
                nextModalImage();
            } else {
                // 오른쪽으로 쓸어 (이전 이미지)
                prevModalImage();
            }
        }
    }

    function handleKeydown(e) {
        if (selectedImageIndex !== null) {
            if (e.key === 'ArrowRight') {
                nextModalImage();
            } else if (e.key === 'ArrowLeft') {
                prevModalImage();
            }
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<section id="gallery" class="section">
    <div class="gallery-content">
        <h2 class="gallery-title">Gallery</h2>

        <div class="gallery-grid">
            {#if galleryImages.length === 0}
                <p class="no-images">갤러리 이미지가 없습니다.</p>
            {:else}
                {#each visibleImages as image, idx (image.id)}
                    <button
                        type="button"
                        class="gallery-item"
                        on:click={() => openModal(currentPage * imagesPerPage + idx)}
                        aria-label="{image.alt} 확대보기"
                    >
                        <img src={image.src} alt={image.alt} />
                    </button>
                {/each}
            {/if}
        </div>

        {#if galleryImages.length > 0}
            <div class="gallery-pagination">
                <button on:click={prevPage} disabled={currentPage === 0}>←</button>
                <span>{currentPage + 1} / {totalPages}</span>
                <button on:click={nextPage} disabled={currentPage === totalPages - 1}>→</button>
            </div>
        {/if}
    </div>
</section>

{#if selectedImageIndex !== null}
    <dialog
        bind:this={modalRef}
        class="modal-overlay"
        on:close={closeModal}
        on:touchstart={handleTouchStart}
        on:touchend={handleTouchEnd}
    >
        <div class="modal-content">
            {#key imageKey}
                <img
                    src={galleryImages[selectedImageIndex].src}
                    alt={galleryImages[selectedImageIndex].alt}
                    class="modal-image"
                    class:slide-in-left={slideDirection === 'prev'}
                    class:slide-in-right={slideDirection === 'next'}
                />
            {/key}

            <button class="modal-nav modal-prev" on:click={prevModalImage} aria-label="이전 이미지"
                >‹</button
            >
            <button class="modal-nav modal-next" on:click={nextModalImage} aria-label="다음 이미지"
                >›</button
            >

            <button class="modal-close" on:click={closeModal} aria-label="닫기">✕</button>

            <div class="modal-counter">{selectedImageIndex + 1} / {galleryImages.length}</div>
        </div>
    </dialog>
{/if}

<style>
    .gallery-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        width: 100%;
    }

    .gallery-title {
        font-size: 32px;
        font-weight: 300;
        color: #333;
        margin: 0;
    }

    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        width: 100%;
        max-width: 400px;
        min-height: 300px;
    }

    @media (min-width: 768px) {
        .gallery-grid {
            min-height: 736px;
        }
    }

    .gallery-item {
        aspect-ratio: 1;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s ease;
        background: none;
        border: none;
        padding: 0;
        font: inherit;
    }

    .gallery-item:hover {
        transform: scale(1.05);
    }

    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transform: scale(1.25);
    }

    .no-images {
        color: #999;
        font-size: 14px;
        margin: 40px 0;
    }

    .gallery-pagination {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-top: 16px;
    }

    .gallery-pagination button {
        background: none;
        border: 1px solid #ddd;
        padding: 8px 12px;
        cursor: pointer;
        border-radius: 4px;
        font-size: 16px;
        transition: all 0.2s ease;
    }

    .gallery-pagination button:hover:not(:disabled) {
        background-color: #f5f5f5;
        border-color: #d4956f;
    }

    .gallery-pagination button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .gallery-pagination span {
        font-size: 14px;
        color: #666;
        min-width: 60px;
        text-align: center;
    }

    /* Modal Styles */
    :global(html:has(dialog[open])) {
        overflow: hidden;
    }

    .modal-overlay {
        width: 100vw;
        height: 100vh;
        max-width: none;
        max-height: none;
        border: none;
        padding: 0;
        margin: 0;
        background: rgba(0, 0, 0, 0.85);
    }

    .modal-overlay::backdrop {
        background: transparent;
    }

    .modal-content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
    }

    .modal-content img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
    }

    .modal-image.slide-in-right {
        animation: slideInFromRight 0.5s ease-out;
    }

    .modal-image.slide-in-left {
        animation: slideInFromLeft 0.5s ease-out;
    }

    @keyframes slideInFromRight {
        from {
            transform: translateX(100%);
            opacity: 1;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideInFromLeft {
        from {
            transform: translateX(-100%);
            opacity: 1;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .modal-nav {
        position: absolute;
        background: none;
        border: none;
        color: rgba(212, 149, 111, 0.7);
        font-size: 48px;
        cursor: pointer;
        padding: 16px 20px;
        border-radius: 4px;
        transition: all 0.2s ease;
        z-index: 1000;
        user-select: none;
        outline: none;
        box-shadow: none;
        -webkit-tap-highlight-color: transparent;
    }

    .modal-nav:hover {
        background: none;
    }

    .modal-prev {
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
    }

    .modal-next {
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
    }

    .modal-close {
        position: absolute;
        top: 16px;
        right: 16px;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        border-radius: 50%;
        width: 44px;
        height: 44px;
        font-size: 28px;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        z-index: 1001;
    }

    .modal-close:hover {
        background: rgba(255, 255, 255, 0.4);
    }

    .modal-counter {
        position: absolute;
        bottom: 16px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 14px;
        z-index: 1000;
    }

    @media (min-width: 768px) {
        .gallery-grid {
            max-width: 100%;
        }
    }
</style>
