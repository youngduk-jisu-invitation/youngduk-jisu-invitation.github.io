<script>
    let expandedSide = null;
    let copiedAccount = null;

    const giftData = {
       groom: [
            { relationship: '신랑', name: '박영덕', account: '신한은행 110-500-695235' },
            { relationship: '신랑 아버지', name: '박용선', account: '농협은행 302-7389-3535-91' },
            { relationship: '신랑 어머니', name: '오혜숙', account: '농협은행 356-0947-4525-53' },
        ],
        bride: [
            { relationship: '신부', name: '오지수', account: '우리은행 1002-163-190051' },
            { relationship: '신부 아버지', name: '오종찬', account: '국민은행 337-21-0041-805' },
            { relationship: '신부 어머니', name: '윤장숙', account: '농협은행 302-1430-6587-91' },
        ],
    };

    function toggleSide(side) {
        expandedSide = expandedSide === side ? null : side;
    }

    async function copyToClipboard(account) {
        try {
            await navigator.clipboard.writeText(account);
            copiedAccount = account;
            setTimeout(() => {
                copiedAccount = null;
            }, 2000);
        } catch (err) {
            console.error('복사 실패:', err);
        }
    }
</script>

<section id="gift" class="section">
    <div class="gift-content">
        <h2 class="gift-title">마음 전하실 곳</h2>

        <div class="gift-info">
            <p class="gift-message">
                따뜻한 축하의 마음을 전하고 싶으시다면
                <br />
                아래 신랑/신부측을 선택해주세요.
            </p>

            <div class="button-group">
                <button
                    class="side-button {expandedSide === 'groom' ? 'active' : ''}"
                    on:click={() => toggleSide('groom')}
                >
                    신랑측
                    <span class="dropdown-icon {expandedSide === 'groom' ? 'open' : ''}">▼</span>
                </button>
                <button
                    class="side-button {expandedSide === 'bride' ? 'active' : ''}"
                    on:click={() => toggleSide('bride')}
                >
                    신부측
                    <span class="dropdown-icon {expandedSide === 'bride' ? 'open' : ''}">▼</span>
                </button>
            </div>

            {#if expandedSide}
                <div class="account-list">
                    {#each giftData[expandedSide] as person (person.name)}
                        <div class="account-item">
                            <p class="account-relationship">{person.relationship}</p>
                            <p class="account-holder">{person.name}</p>
                            <div class="account-row">
                                <p class="account-number">{person.account}</p>
                                <button
                                    class="copy-button {copiedAccount === person.account
                                        ? 'copied'
                                        : ''}"
                                    on:click={() => copyToClipboard(person.account)}
                                >
                                    {copiedAccount === person.account ? '✓ 복사됨' : '복사'}
                                </button>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}

            <p class="gift-note">계좌 이체 시 송금자명에 이름을 기입하여 주시면 감사하겠습니다.</p>
        </div>
    </div>
</section>

<style>
    .gift-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        width: 100%;
        max-width: 450px;
    }

    .gift-title {
        font-size: 32px;
        font-weight: 300;
        color: #333;
        margin: 0;
    }

    .gift-info {
        width: 100%;
        padding: 24px;
        background: #f9f9f9;
        border-radius: 8px;
    }

    .gift-message {
        text-align: center;
        font-size: 14px;
        color: #666;
        margin: 0 0 20px 0;
        line-height: 1.6;
    }

    .button-group {
        display: flex;
        gap: 12px;
        margin-bottom: 20px;
    }

    .side-button {
        flex: 1;
        padding: 12px 16px;
        border: 2px solid #d4956f;
        border-radius: 6px;
        background: white;
        color: #d4956f;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .side-button:hover {
        background-color: #ffe4d6;
    }

    .side-button.active {
        background-color: #d4956f;
        color: white;
    }

    .dropdown-icon {
        font-size: 12px;
        transition: transform 0.3s ease;
        display: inline-block;
    }

    .dropdown-icon.open {
        transform: rotate(180deg);
    }

    .account-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 20px;
        animation: expandDown 0.4s ease-out forwards;
    }

    @keyframes expandDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
        }
        to {
            opacity: 1;
            transform: translateY(0);
            max-height: 500px;
        }
    }

    .account-item {
        background: white;
        padding: 12px;
        border-radius: 6px;
        border: 1px solid #eee;
    }

    .account-relationship {
        font-size: 11px;
        color: #999;
        margin: 0 0 4px 0;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .account-holder {
        font-size: 13px;
        font-weight: 600;
        color: #333;
        margin: 0 0 6px 0;
    }

    .account-row {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: space-between;
    }

    .account-number {
        font-size: 12px;
        color: #d4956f;
        margin: 0;
        font-family: 'Courier New', monospace;
        flex: 1;
        line-height: 1.4;
    }

    .copy-button {
        padding: 6px 10px;
        border: 1px solid #d4956f;
        border-radius: 4px;
        background: white;
        color: #d4956f;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
    }

    .copy-button:hover {
        background-color: #ffe4d6;
    }

    .copy-button.copied {
        background-color: #d4956f;
        color: white;
        border-color: #d4956f;
    }

    .gift-note {
        font-size: 11px;
        color: #999;
        margin: 0;
        line-height: 1.5;
        word-break: keep-all;
        overflow-wrap: break-word;
        text-align: center;
    }

    @media (min-width: 768px) {
        .gift-note {
            font-size: 12px;
        }
    }
</style>
