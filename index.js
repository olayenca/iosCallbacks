function backToApp () {
    if (window.location.href.indexOf('code') > 0) {
        const parameters = {};
        window.location.search
            .substring(1)
            .split('&')
            .forEach(param => {
                parameters[param.split('=')[0]] = param.split('=')[1];
            });

        document.querySelector('body').innerHTML =
            "<div style='display:flex;justify-content:center;align-items:center;height:100%;'><button onclick='backToApp()'>Return to App</button></div>";

        window.location = new URL(`appName://?code=${parameters.code}`);
        console.log('Page url has code parameter, callback triggered');
    }
}
