document.addEventListener('DOMContentLoaded', function() {
    let app;

    const btns = document.getElementsByTagName('button');
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function(evt) {
            destroyApp(app);

            import('./app/' + btns[i].getAttribute('data-module') + '.js').then(function(appClass) {
                const params = getParamters(appClass.default);
                app = new appClass.default(params);
            });
        });
    }
});

function destroyApp(app) {
    if (app) {
        app.destroy();
    }
}

function getParamters(appType) {
    const defaultParams = {
        target: 'app',
        statBar: 'stats'
    }

    switch(appType.name){
        case 'GuessingGame':
            defaultParams.min = 150;
            defaultParams.max = 3500;
            break;

        default: break;
    }

    return defaultParams;
}