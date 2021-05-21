export default function smoothScroll(SPEED = 0.5) {
    const scrolled = e => {

        const target = e.target;
        
        if (target.matches('[href^="#"]')) {
            e.preventDefault();
            let start = 0;
            const pageY = window.pageYOffset;
            const hash = target.getAttribute('href');
    
            if (hash === '#') return
    
            const elem = document.querySelector(hash);
            const coordinateElement = elem.getBoundingClientRect().top;
    
            const step = time => {
                if (!start) start = time;
                const progress = time - start;
    
                const r = (coordinateElement < 0 ?
                    Math.max(pageY - progress / SPEED, pageY + coordinateElement) :
                    Math.min(pageY + progress / SPEED, pageY + coordinateElement))
    
                window.scrollTo(0, r);
    
                if (r < pageY + coordinateElement) requestAnimationFrame(step);
            };
    
            requestAnimationFrame(step)
        }
    }
    
    document.body.addEventListener('click', scrolled);
} 