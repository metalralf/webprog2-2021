import Application from './Application.js';

class Form extends Application {
    constructor(options) {
        super(options);

        this.name = 'Form';

        this.displayStats();
    }

    init() {
        super.init();

        document.getElementById("app-form").addEventListener('submit', function(evt){
            evt.preventDefault();
            this.clearValidationMessages();

            const form = evt.target;

            if (!form.password.value) {
                form.password.nextElementSibling.textContent = 'Password is required!';
            }

            if (!form.passconf.value) {
                form.passconf.nextElementSibling.textContent = 'Confirm password is required!';
            }
        }.bind(this));
    }

    clearValidationMessages() {
        const form = document.getElementById('app-form');
        const validations = form.getElementsByClassName('validation');

        for (let i = 0; i < validations.length; i++) {
            validations[i].textContent = '';
        }
    }

}

export default Form;