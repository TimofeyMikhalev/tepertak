// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'


// //слайдер
// var swiper = new Swiper(".slider__body", {
//     cssMode: true,
//     navigation: {
//       nextEl: ".arrow__next",
//       prevEl: ".arrow__prev",
// },
//     mousewheel: true,
//     keyboard: true,
// });

// const slides = document.querySelectorAll('.slider__elem');
// const prevButton = document.querySelector('.arrow__prev');
// const nextButton = document.querySelector('.arrow__next');

// let slidePosition = 0;

// prevButton.addEventListener('click', () => {
//     if (slidePosition > 0) {
//         slidePosition--;
//         updateSlides();
//     }
// });

// nextButton.addEventListener('click', () => {
//     if (slidePosition < slides.length - 3) { // Показывать 3 изображения одновременно
//         slidePosition++;
//         updateSlides();
//     }
// });

// function updateSlides() {
//     slides.forEach((slide, index) => {
//         if (index >= slidePosition && index < slidePosition + 3) {
//             slide.style.display = 'block';
//             slide.classList.add('show')
//         } else {
//             slide.style.display = 'none';
//             slide.classList.remove('show')
//         }
//     });
// }

// updateSlides(); // Показать первые четыре изображения при загрузке страницы


//slider

let scroll = document.getElementById('scroll');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.addEventListener('click', function() {
	scroll.scrollBy({left:-360, top:0, behavior:"smooth"});
}, true);
next.addEventListener('click', function() {
	scroll.scrollBy({left:360, top:0, behavior:"smooth"});
}, true);


//факты открытие закрытие 

let btnFacts = document.querySelector('.facts__btn'),
    btnOnenBlock = document.querySelector('.facts__header_btn'),
    blockFacts = document.querySelector('.facts__header'),
    blockContent = document.querySelector('.facts__body');


    btnFacts.addEventListener('click', function(){
        blockFacts.style.display = 'none'
        blockContent.style.display = 'flex'
    })

    btnOnenBlock.addEventListener('click', function(){
        blockContent.style.display = 'none'
        blockFacts.style.display = 'flex'
    })



//Блок с слайдерами 

    document.addEventListener("DOMContentLoaded", function() {
        // Устанавливаем первый блок видимым при загрузке страницы
        document.getElementById('block-global-1').style.display = 'flex';
        document.querySelector('button[data-block="1"]').classList.add('reduce__btn_action');

        let buttons = document.querySelectorAll('.reduce__btn');
        let blocks = document.querySelectorAll('.slider__body');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                let blockNum = this.getAttribute('data-block');

                blocks.forEach(block => {
                    block.style.display = 'none';
                });

                document.getElementById('block-global-' + blockNum).style.display = 'flex';


                buttons.forEach(btn => {
                    btn.classList.remove('reduce__btn_action');
                });
                this.classList.add('reduce__btn_action');
            });
        });
    });



    //внутриность блока со слайдером(переключение между вкладками)

    document.addEventListener("DOMContentLoaded", function() {
        // Устанавливаем первый блок видимым при загрузке страницы
        document.getElementById('slider1').style.display = 'flex';
        

        let buttonsOption = document.querySelectorAll('.option__btn');
        let blocksOption = document.querySelectorAll('.slider__content');

        buttonsOption.forEach(button => {

            button.addEventListener('click', function() {

                let blockNum = this.getAttribute('data-option');

                blocksOption.forEach(block => {
                    block.style.display = 'none';
                });

                document.getElementById('slider' + blockNum).style.display = 'flex';


                buttonsOption.forEach(btn => {
                    btn.classList.remove('option__btn_active');
                });
                
                this.classList.add('option__btn_active');
            });

        });
    });

    let buttonsbtn = document.querySelectorAll('.option__btn_2');
    let blocksContent = document.querySelectorAll('.slider__content_2');

    buttonsbtn.forEach(button => {

        button.addEventListener('click', function() {

            let blockNum = this.getAttribute('data-btn');

            blocksContent.forEach(block => {
                block.style.display = 'none';
            });

            document.getElementById('content' + blockNum).style.display = 'flex';


            buttonsbtn.forEach(btn => {
                btn.classList.remove('option__btn_active');
            });
            
            this.classList.add('option__btn_active');
        });

    });