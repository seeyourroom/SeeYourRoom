(function() {
    var script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TPCE6REMBJ';
    script.async = true;
    document.head.appendChild(script);

    script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TPCE6REMBJ');
    };
})();
