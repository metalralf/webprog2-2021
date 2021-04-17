import { addElement } from '../utils/DOMUtils.js';
import Application from './Application.js';

class GuessingGame extends Application {
    constructor(options) {
        super(options);

        super.displayStats();
    }

    validate() {
        super.validate();

        const min = parseInt(this.min);
        const max = parseInt(this.max);

        this.min = min || 0;
        this.max = max === 0 ? 0 : max || 100;

        if(this.max <= this.min){
            throw new Error('Maximum must be higher than minimum.');
        }
    }

    init() {
        super.init();
        this.guess = Math.round(Math.random() * (this.max - this.min) + this.min);

        addElement(this.target, 'p', 'guessing-greet', `I thought of a number between ${this.min} and ${this.max}. Can you guess it?`);
        
        this.input = addElement(this.target, 'input', 'guess-input');
        this.input.type = 'number';
        const btn = addElement(this.target, 'button', 'guessing-btn', 'Guess');
        this.feedback = addElement(this.target, 'p', 'guessing-feedback');

        btn.addEventListener('click', function(evt) {
            const val = parseInt(this.input.value);

            if (val < this.guess) {
                this.feedback.textContent = 'Higher.';
            } else if (val > this.guess) {
                this.feedback.textContent = 'Lower.';
            } else {
                this.feedback.textContent = 'Correct.';
            }
        }.bind(this));
    }

    destroy() {
        super.destroy();
    }
}

export default GuessingGame;