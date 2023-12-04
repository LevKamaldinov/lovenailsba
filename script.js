
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider__wrapper__photo');
          nextButton = document.querySelector('.slider__button__next');
          prevButton = document.querySelector('.slider__button__prev');

    if (document.body.offsetWidth < 640) {
        nextButton.style.display = 'none';
        prevButton.style.display = 'none';
    }

    let slideIndex = 0;

    const showSlide = (i) => {
        if (i > slides.length - 1) {
            slideIndex = 0;
        }
        if (i < 0) {
            slideIndex = slides.length - 1;
        }

        slides.forEach(el => el.style.display = 'none');
        slides[slideIndex].style.display = 'block';
    }

    showSlide(slideIndex);

    const nextSlide = (n) => {
        showSlide(slideIndex += n);
    }

    const timerId = setInterval(() => {
        nextSlide(1);
    }, 5000);

    nextButton.addEventListener('click', () => nextSlide(1));
    prevButton.addEventListener('click', () => nextSlide(-1));

    slides.forEach(el => {
        let count = 0;
        el.addEventListener('click', () => {
            count++;

            const width = el.offsetWidth;
                height = el.offsetHeight;

            if (count % 2 != 0) {
                // el.style.width = `${width * 2}px`;
                // el.style.height = `${height * 2}px`;
                el.style.width = '1280px';
                el.style.height = '640px';
            } else {
                // el.style.width = `${width / 2}px`;
                // el.style.height = `${height / 2}px`;
                el.style.width = '640px';
                el.style.height = '320px';
            }

            window.addEventListener('click', (e) => {
                if (!e.target.closest('.slider__wrapper__photo')) {
                    el.style.width=`640px`;
                    el.style.height=`320px`;
                    count = 0;
                }
            })
            // if (count == 1) {
            //     count = 0;
            //     el.style.width = `${width / 2}px`;
            //     el.style.height = `${height / 2}px`;
            // }
            // el.firstElementChild.style.height='200%';
            // window.addEventListener('click', (e) => {
            //     if (!e.target.closest('.slider__wrapper__photo')) {
            //         el.firstElementChild.style.width='100%';
            //         el.firstElementChild.style.height='100%';
            //     }
            // })
            // el.firstElementChild.style.width='200%';
            // el.firstElementChild.style.height='200%';
            // window.addEventListener('click', (e) => {
            //     if (!e.target.closest('.slider__wrapper__photo')) {
            //         el.firstElementChild.style.width='100%';
            //         el.firstElementChild.style.height='100%';
            //     }
            // })

            // const touch = new Touch({identifier: 1, target: el});
            // console.log(touch);
        })

        let manager = new Hammer.Manager(el);
        let Swipe = new Hammer.Swipe();

        manager.add(Swipe);

        manager.on('swipe', (e) => {
            count = 0;
            let direction = e.offsetDirection;
            if (direction === 2) {
                nextSlide(1);
            }
            if (direction === 4) {
                nextSlide(-1);
            }
        })
    })

    const selectLang = document.querySelector('.langSelect');
        //   buttonLang = document.querySelector('.langSelect');
          ruElements = document.querySelectorAll('[data-language="ru"]');
          esElements = document.querySelectorAll('[data-language="es"]');
          enElements = document.querySelectorAll('[data-language="en"]');

    // let language = 'es';

    const setLanguage = () => {
        // buttonLang.style.background = 'linear-gradient(to right, gold 50%, white 50%)'
        ruElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'none');
        esElements.forEach(el => el.style.display = 'block');
    }

    setLanguage();

    const changeLanguage = () => {
        const language = selectLang.value;
        if (language == 'ES') {
            // buttonLang.style.background = 'linear-gradient(to right, white 50%, gold 50%)'
            enElements.forEach(el => el.style.display = 'none');
            ruElements.forEach(el => el.style.display = 'none');
            esElements.forEach(el => el.style.display = 'block');
        } else if (language == 'RU') {
            // buttonLang.style.background = 'linear-gradient(to right, gold 50%, white 50%)'
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

})



