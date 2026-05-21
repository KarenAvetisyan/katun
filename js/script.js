document.addEventListener('DOMContentLoaded', function(){
        /*Easy selector helper function */
        const select = (el, all = false) => {
                if (!el || typeof el !== 'string') return null;
                el = el.trim();
                if (all) {
                        return [...document.querySelectorAll(el)];
                } else {
                        return document.querySelector(el);
                }
        }
        /* Easy event listener function */
        const on = (type, el, listener, all = false) => {
                let selectEl = select(el, all)
                if (selectEl) {
                if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
                } else {
                selectEl.addEventListener(type, listener)
                }
                }
        }
        /* Easy on scroll event listener  */
        const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
        }
        
        // хедер при при скролле 
        let selectHeader = select('.header')
        if (selectHeader) {
        const headerScrolled = () => {
                if (window.scrollY > 50) {
                        selectHeader.classList.add('scrolling')
                } else {
                        selectHeader.classList.remove('scrolling')
                }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(window, headerScrolled)
        }
      
        // бургер
        on('click', '.js-burger', function(e){
                select('.js-burger').classList.toggle('clicked');
                select('.header__nav').classList.toggle('show');
        })
      

})
