
document.addEventListener('DOMContentLoaded', () => {

    const selectLang = document.querySelector('.langSelect');
          ruElements = document.querySelectorAll('[data-language="ru"]');
          esElements = document.querySelectorAll('[data-language="es"]');
          enElements = document.querySelectorAll('[data-language="en"]');

    const setLanguage = () => {
        ruElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'none');
        esElements.forEach(el => el.style.display = 'block');
    }

    setLanguage();

    const changeLanguage = () => {
        const language = selectLang.value;
        if (language == 'ES') {
            enElements.forEach(el => el.style.display = 'none');
            ruElements.forEach(el => el.style.display = 'none');
            esElements.forEach(el => el.style.display = 'block');
        } else if (language == 'RU') {
            enElements.forEach(el => el.style.display = 'none');
            esElements.forEach(el => el.style.display = 'none');
            ruElements.forEach(el => el.style.display = 'block');
        } else if (language == 'EN') {
            ruElements.forEach(el => el.style.display = 'none');
            esElements.forEach(el => el.style.display = 'none');
            enElements.forEach(el => el.style.display = 'block');
        }
    }

    selectLang.addEventListener('change', () => changeLanguage());

    
    const btn = document.querySelector('.button__up');
    btn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;

    })

    if (document.documentElement.scrollTop == 0) {
        btn.style.display = 'none';
    }
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 800) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    })

})



