// Language data
const translations = {
    en: {
        menuTitle: "Menu",
        homeText: "Home",
        aboutText: "About",
        homeLink: "🏠 Home",
        aboutLink: "ℹ️ About",
        gamesTitle: "Our Games",
        gamesSubtitle: "Choose your favorite game and start playing now!",
        playBtn: "Play Now",
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
        langText: "العربية"
    },
    ar: {
        menuTitle: "القائمة",
        homeText: "الرئيسية",
        aboutText: "عنا",
        homeLink: "🏠 الرئيسية",
        aboutLink: "ℹ️ عنا",
        gamesTitle: "ألعابنا",
        gamesSubtitle: "اختر لعبتك المفضلة وابدأ اللعب الآن!",
        playBtn: "العب الآن",
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
        langText: "English"
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    updatePageDirection();
    setupHamburgerMenu();
});

// Hamburger Menu
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            mobileMenu.classList.remove('active');
        }
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
        if (element) {
            element.textContent = translations[lang][key];
        }
    });
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
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
