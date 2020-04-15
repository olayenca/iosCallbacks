function backToApp () {
    if (window.location.href.indexOf('code') > 0) {
        document.querySelector('body').innerHTML = `<div style='display:flex; justify-content:center;align-items:center;height:100%;'><button onclick='backToApp()'>Return to App</button></div>`;
        window.location = new URL('appName://');
    }
}
