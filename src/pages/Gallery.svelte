<script>
    import { onMount } from 'svelte';

    let currentPage = 0;
    let selectedImage = null;
    let modalRef;
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
            const imageCount = 31; // 갤러리에 있는 이미지 개수
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

    function openModal(image) {
        selectedImage = image;
        setTimeout(() => modalRef?.showModal(), 0);
    }

    function closeModal() {
        selectedImage = null;
        modalRef?.close();
    }
</script>

<section id="gallery" class="section">
    <div class="gallery-content">
        <h2 class="gallery-title">Gallery</h2>

        <div class="gallery-grid">
            {#if galleryImages.length === 0}
                <p class="no-images">갤러리 이미지가 없습니다.</p>
            {:else}
                {#each visibleImages as image (image.id)}
                    <button
                        type="button"
                        class="gallery-item"
                        on:click={() => openModal(image)}
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

{#if selectedImage}
    <dialog
        bind:this={modalRef}
        class="modal-overlay"
        on:close={closeModal}
    >
        <div class="modal-content">
            <button class="modal-close" on:click={closeModal} aria-label="닫기">✕</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
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
        max-width: 450px;
        min-height: 450px;
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
        max-width: 90vw;
        max-height: 90vh;
        border: none;
        border-radius: 8px;
        padding: 0;
        background: white;
    }

    .modal-overlay::backdrop {
        background: rgba(0, 0, 0, 0.7);
    }

    .modal-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        background: white;
        border-radius: 8px;
        overflow: auto;
    }

    .modal-content img {
        width: 100%;
        height: auto;
        display: block;
    }

    .modal-close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(255, 255, 255, 0.9);
        border: none;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        z-index: 1001;
    }

    .modal-close:hover {
        background: white;
    }

    @media (min-width: 768px) {
        .gallery-grid {
            max-width: 100%;
        }

        .modal-content {
            max-width: 600px;
            max-height: 600px;
        }
    }
</style>
