import { addElement } from '../utils/DOMUtils.js';
import Application from './Application.js';

class ScrollDynamic extends Application{
    constructor(options) {
        super(options);

        this.name = 'Scroll dynamics';

        this.displayStats();
    }

    init() {
        const container = document.getElementById('scroll-text-controller');

        const xhr = new XMLHttpRequest();

        xhr.open('GET', '../res/text.txt');

        xhr.addEventListener('load', function(evt){
            const text = xhr.responseText;
            
            container.textContent = text;
        });

        xhr.send();

        document.getElementById('scroll-fast').addEventListener('click', function(){
            this.mode = 'fast';
        }.bind(this));

        document.getElementById('scroll-page').addEventListener('click', function(){
            this.mode = 'page';
        }.bind(this));

        document.getElementById('scroll-idk').addEventListener('click', function(){
            this.mode = 'idk';
        }.bind(this));

        container.addEventListener('wheel', function(evt){
            evt.preventDefault();
            evt.stopPropagation();
            
            if (this.mode === 'fast') {
                container.scrollBy({
                    top: evt.deltaY * 20,
                    behavior: 'smooth'
                });
            } else if (this.mode === 'page') {
                const direction = evt. deltaY < 0 ? -1 : 1;

                container.scrollBy({
                    top: container.clientHeight * direction,
                    behavior: 'auto'
                });
            } else {
                container.scrollTop = Math.random() * container.scrollHeight;
            }
        });
    }
}

export default ScrollDynamic;