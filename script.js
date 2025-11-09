// Language switch
const translations = {
    en: {
        home: 'Home',
        products: 'Products',
        customize: 'Customize',
        about: 'About',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        welcome: 'Welcome to Opus Atelier Ltd',
        desc: 'Specializing in affordable custom fashion jewelry made from synthetic materials. No precious metals or stones.',
        // Add more translations as needed
    },
    zh: {
        home: '首页',
        products: '产品',
        customize: '定制',
        about: '关于我们',
        contact: '联系',
        privacy: '隐私政策',
        terms: '服务条款',
        welcome: '欢迎来到OpusAtelier Ltd',
        desc: '专注于使用合成材料制作的实惠定制时尚首饰。不涉及贵金属或宝石。',
        // Add more
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
        el.textContent = translations[lang][el.dataset.key] || el.textContent;
    });
    localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'en';
    switchLanguage(lang);
    
    // Carousel
    const images = document.querySelectorAll('.carousel img');
    let current = 0;
    setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }, 3000);
    images[0].classList.add('active');
    
    // Form submit
    const form = document.getElementById('customForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Order submitted! We will contact you for payment via Wise/Revolut business account.');
        });
    }
});
