import { addElement } from '../utils/DOMUtils.js';
import Application from './Application.js';

class TextLoader extends Application{
    constructor(options) {
        super(options);

        this.name = 'Text loader';

        this.displayStats();
    }

    init() {
        const container = addElement(this.target, 'p', '', '');

        const xhr = new XMLHttpRequest();

        xhr.open('GET', '../res/text.txt');

        xhr.addEventListener('load', function(evt){
            const text = xhr.responseText;
            
            container.textContent = text;
        });

        xhr.send();
    }
}

export default TextLoader;