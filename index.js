function backToApp () {
    if (window.location.href.indexOf('code') > 0) {
        const qr = {};
        window.location.search
            .substring(1)
            .split("&")
            .forEach(p => {
                qr[p.split("=")[0]] = p.split("=")[1];
            });
        document.querySelector('body').innerHTML = `<div style='display:flex; justify-content:center;align-items:center;height:100%;'><button onclick='backToApp()'>Return to App</button></div>`;
        window.location = new URL('appName://?code=${qr.code}');
        console.log("has code, callback triggered");
    }
}
