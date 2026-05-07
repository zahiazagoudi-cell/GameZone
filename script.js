// Language data
const translations = {
    en: {
        menuTitle: "Menu",
        homeText: "Home",
        aboutText: "About",
        gamesTitle: "Our Games",
        gamesSubtitle: "Choose your favorite game and start playing now!",
        playText: "Play Now",
        gta5Desc: "Experience an open-world adventure in a massive metropolis with unlimited possibilities and thrilling missions.",
        forzaDesc: "Race across stunning landscapes in high-speed competitions with amazing graphics and intense gameplay.",
        rdr2Desc: "Immerse yourself in the Wild West with epic storylines, realistic characters, and breathtaking adventures.",
        fallguysDesc: "Join fun multiplayer challenges and compete with players worldwide in hilarious obstacle courses.",
        godofwarDesc: "Battle legendary creatures and gods in an epic Norse mythology adventure with stunning combat systems.",
        fortniteDesc: "Battle royale action with creative building mechanics, intense gameplay, and constant new content.",
        ffScriptDesc: "Advanced script tool for Free Fire with automatic headshot detection and precision aiming assistance.",
        aboutTitle: "About GameZone",
        aboutText1: "Welcome to GameZone, your ultimate destination for amazing games and entertainment!",
        aboutText2: "We provide a carefully curated collection of the best games from around the world. Whether you're into action, adventure, racing, or competitive gaming, GameZone has something for everyone.",
        aboutText3: "Follow us on social media for the latest updates, game releases, and exclusive content. Join our gaming community today!",
        gamesCount: "Games",
        freeLabel: "Free",
        supportLabel: "Support",
        langText: "العربية",
        searchPlaceholder: "Search games...",
        searchHintText: "Start typing to find your favorite game..."
    },
    ar: {
        menuTitle: "القائمة",
        homeText: "الرئيسية",
        aboutText: "عنا",
        gamesTitle: "ألعابنا",
        gamesSubtitle: "اختر لعبتك المفضلة وابدأ اللعب الآن!",
        playText: "العب الآن",
        gta5Desc: "اختبر مغامرة عالم مفتوح في مدينة ضخمة بإمكانيات غير محدودة ومهام مثيرة.",
        forzaDesc: "تنافس عبر مناظر طبيعية مذهلة في سباقات عالية السرعة برسوميات رائعة وألعاب مكثفة.",
        rdr2Desc: "انغمس في الغرب البري برواية ملحمية وشخصيات واقعية ومغامرات خلابة.",
        fallguysDesc: "شارك في تحديات متعددة اللاعبين والتنافس مع اللاعبين من جميع أنحاء العالم في مسارات عقبات مضحكة.",
        godofwarDesc: "حارب الكائنات الأسطورية والآلهة في مغامرة ملحمية للأساطير الإسكندنافية مع أنظمة قتال مذهلة.",
        fortniteDesc: "حركة معركة ملكية مع ميكانيكا بناء إبداعية وألعاب مكثفة ومحتوى جديد مستمر.",
        ffScriptDesc: "أداة script متقدمة لـ Free Fire مع كشف رؤية الرأس التلقائي ومساعدة التصويب الدقيق.",
        aboutTitle: "عن GameZone",
        aboutText1: "مرحباً بك في GameZone، وجهتك النهائية للألعاب والترفيه المذهلة!",
        aboutText2: "نحن نوفر مجموعة منتقاة بعناية من أفضل الألعاب من جميع أنحاء العالم. سواء كنت مهتماً بألعاب الحركة أو المغامرة أو السباق أو الألعاب التنافسية، فإن GameZone لديها شيء للجميع.",
        aboutText3: "تابعنا على وسائل التواصل الاجتماعي لآخر التحديثات والألعاب الجديدة والمحتوى الحصري. انضم إلى مجتمعنا اللاعب اليوم!",
        gamesCount: "ألعاب",
        freeLabel: "مجاني",
        supportLabel: "الدعم",
        langText: "English",
        searchPlaceholder: "ابحث عن ألعاب...",
        searchHintText: "ابدأ الكتابة للعثور على لعبتك المفضلة..."
    }
};

// Game data for search
const gamesData = [
    {
        name: "Grand Theft Auto V",
        img: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
        rating: "4.8",
        href: "https://gamezone771.blogspot.com/?m=1"
    },
    {
        name: "Forza Horizon 5 Mobile",
        img: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg",
        rating: "4.7",
        href: "https://gamezone771.blogspot.com/?m=1"
    },
    {
        name: "Red Dead Redemption 2",
        img: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
        rating: "4.9",
        href: "https://gamezone771.blogspot.com/?m=1"
    },
    {
        name: "Fall Guys: Ultimate Knockout",
        img: "https://img.utdstc.com/icon/121/3e2/1213e2bac4111360c073483b82c033bae5691ebb752bb639acf5413efdf7938b:200",
        rating: "4.5",
        href: "https://gamezone771.blogspot.com/?m=1"
    },
    {
        name: "God of War",
        img: "https://m.media-amazon.com/images/M/MV5BNjJiNTFhY2QtNzZkYi00MDNiLWEzNGEtNWE1NzBkOWIxNmY5XkEyXkFqcGc@._V1_.jpg",
        rating: "4.8",
        href: "https://gamezone771.blogspot.com/?m=1"
    },
    {
        name: "Fortnite",
        img: "https://play-lh.googleusercontent.com/FxJDPDIDJKlG9C8lOxaS041X27A0SrHAa46SGDIpPusAd4IEJihZTyGf-8rTZ_GpF34aeLvULilVuO0cpCJxTg=w600-h300-pc0xffffff-pd",
        rating: "4.6",
        href: "https://gamezone771.blogspot.com/?m=1"
    },
    {
        name: "Free Fire Script Headshot",
        img: "https://storage.googleapis.com/cdn.vcgamers.com/news/wp-content/uploads/2023/12/Script-FF-Auto-Headshot.jpg",
        rating: "4.7",
        href: "https://gamezone771.blogspot.com/?m=1"
    }
];

// Current language
let currentLang = localStorage.getItem('language') || 'en';
let highlightedIndex = -1;

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    updatePageDirection();
    setupHamburgerMenu();
    setupSearchModal();
});

// Hamburger Menu
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.remove('active'));
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            mobileMenu.classList.remove('active');
        }
    });
}

// Search Modal
function setupSearchModal() {
    const overlay = document.getElementById('searchModal');
    const modalInput = document.getElementById('searchModalInput');
    const clearBtn = document.getElementById('searchClear');
    const closeBtn = document.getElementById('searchClose');
    const searchToggle = document.getElementById('searchToggle');
    const resultsContainer = document.getElementById('searchResults');

    function openModal() {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => modalInput.focus(), 50);
        highlightedIndex = -1;
        renderHint();
    }

    function closeModal() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        modalInput.value = '';
        clearBtn.classList.remove('visible');
        renderHint();
        highlightedIndex = -1;
    }

    function renderHint() {
        const lang = translations[currentLang];
        resultsContainer.innerHTML = `
            <div class="search-hint">
                <i class="fas fa-gamepad"></i>
                <p>${lang.searchHintText}</p>
            </div>`;
    }

    function highlightText(text, query) {
        if (!query) return text;
        const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
    }

    function renderResults(query) {
        const trimmed = query.trim().toLowerCase();
        if (!trimmed) { renderHint(); return; }

        const matches = gamesData.filter(g => g.name.toLowerCase().includes(trimmed));

        if (!matches.length) {
            resultsContainer.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search"></i>
                    <p>No games found for "<strong>${query}</strong>"</p>
                </div>`;
            return;
        }

        resultsContainer.innerHTML = matches.map((game, i) => `
            <a href="${game.href}" class="search-result-item" data-index="${i}" target="_blank" rel="noopener">
                <img class="search-result-img" src="${game.img}" alt="${game.name}" loading="lazy">
                <div class="search-result-info">
                    <div class="search-result-name">${highlightText(game.name, query)}</div>
                    <div class="search-result-meta">
                        <span class="search-result-badge">FREE</span>
                        <span class="search-result-rating"><i class="fas fa-star"></i> ${game.rating}</span>
                    </div>
                </div>
                <i class="fas fa-arrow-right search-result-arrow"></i>
            </a>
        `).join('');

        highlightedIndex = -1;
    }

    function getResultItems() {
        return resultsContainer.querySelectorAll('.search-result-item');
    }

    function applyHighlight(items, index) {
        items.forEach((item, i) => {
            item.classList.toggle('highlighted', i === index);
        });
        if (index >= 0 && items[index]) {
            items[index].scrollIntoView({ block: 'nearest' });
        }
    }

    // Open modal
    searchToggle.addEventListener('click', openModal);

    // Close modal
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            overlay.classList.contains('active') ? closeModal() : openModal();
        }
        if (!overlay.classList.contains('active')) return;
        const items = getResultItems();
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            highlightedIndex = Math.min(highlightedIndex + 1, items.length - 1);
            applyHighlight(items, highlightedIndex);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            highlightedIndex = Math.max(highlightedIndex - 1, -1);
            applyHighlight(items, highlightedIndex);
        } else if (e.key === 'Enter' && highlightedIndex >= 0 && items[highlightedIndex]) {
            items[highlightedIndex].click();
        }
    });

    // Input events
    modalInput.addEventListener('input', () => {
        const val = modalInput.value;
        clearBtn.classList.toggle('visible', val.length > 0);
        renderResults(val);
    });

    clearBtn.addEventListener('click', () => {
        modalInput.value = '';
        clearBtn.classList.remove('visible');
        renderHint();
        modalInput.focus();
    });
}

// Language toggle
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLang);
    setLanguage(currentLang);
    updatePageDirection();
});

// Set language
function setLanguage(lang) {
    Object.keys(translations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) element.textContent = translations[lang][key];
    });

    const searchToggle = document.getElementById('searchToggle');
    if (searchToggle) searchToggle.title = lang === 'ar' ? 'بحث عن ألعاب' : 'Search games';
}

// Update page direction
function updatePageDirection() {
    const htmlElement = document.documentElement;
    if (currentLang === 'ar') {
        htmlElement.setAttribute('dir', 'rtl');
        htmlElement.setAttribute('lang', 'ar');
        document.body.style.direction = 'rtl';
    } else {
        htmlElement.setAttribute('dir', 'ltr');
        htmlElement.setAttribute('lang', 'en');
        document.body.style.direction = 'ltr';
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
