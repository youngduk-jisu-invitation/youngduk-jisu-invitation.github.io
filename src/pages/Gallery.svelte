<script>
    let currentPage = 0;
    let selectedImage = null;
    const imagesPerPage = 9;
    let galleryImages = [];

    // 갤러리 이미지 로드 (실제로는 public/images/gallery에서 로드)
    // 나중에 동적으로 이미지를 로드할 수 있도록 설정
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
    }

    function closeModal() {
        selectedImage = null;
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
                    <div class="gallery-item" on:click={() => openModal(image)}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                {/each}
            {/if}
        </div>

        {#if galleryImages.length > 0}
            <div class="gallery-pagination">
                <button on:click={prevPage} disabled={currentPage === 0}>←</button>
                <span>{currentPage + 1} / {totalPages}</span>
                <button on:click={nextPage} disabled={currentPage === totalPages - 1}
                    >→</button
                >
            </div>
        {/if}
    </div>
</section>

{#if selectedImage}
    <div class="modal-overlay" on:click={closeModal}>
        <div class="modal-content" on:click={(e) => e.stopPropagation()}>
            <button class="modal-close" on:click={closeModal}>✕</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
        </div>
    </div>
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
    }

    .gallery-item {
        aspect-ratio: 1;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s ease;
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
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
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
