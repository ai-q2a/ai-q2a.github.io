
// كود إعلان Popunder
(function() {
    var popunderUrl = "https://actingprofessionshiny.com/apd3i9w8cf?key=1ca491697c381fe5291aaf85e43c7ec0";
    
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function openPopunder() {
        if (!getCookie("popunder_opened")) {
            window.open(popunderUrl, '_blank');
            setCookie("popunder_opened", "true", 1); // يفتح مرة واحدة في اليوم لكل مستخدم
        }
    }

    document.addEventListener('click', function() {
        openPopunder();
    }, { once: true }); // يفتح عند أول ضغطة للمستخدم في أي مكان في الصفحة
})();
