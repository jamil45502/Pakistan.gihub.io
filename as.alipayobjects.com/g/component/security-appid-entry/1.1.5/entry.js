(function(a) {
    var f = a.EBUCKLER_API_KEY || "",
        e = a.EBUCKLER_TOKEN || "",
        g = a.MERCHANT_USER_ID || "",
        h = a.MERCHANT_SESSION || "";
    if (e.length == 0) {
        e = "JT_" + Math.random() * Math.pow(10, 15).toString() + Math.random() * Math.pow(10, 15).toString() + (new Date()).getTime().toString();
        e = e.replace(new RegExp(/\./g), "");
        a.EBUCKLER_TOKEN = e;
    }
    d = document.createElement("iframe");
    d.src = "https://itscenter.alipay.com/home/pc.htm?apikey=" + encodeURIComponent(f) + "&token=" + encodeURIComponent(e) + "&userid=" + encodeURIComponent(g) + "&sid=" + encodeURIComponent(h) + "&href=" + encodeURIComponent(location.href);
    d.style.display = "none";
    (function c() {
        document.body ? document.body.appendChild(d) : setTimeout(c, 25)
    })();
    void
    function() {
        function c(b) {
            "https://itscenter.alipay.com" === b.origin && b.data &&
                0 === b.data.indexOf("ebuckler_token-") && (a.EBUCKLER_TOKEN = b.data.slice(15))
        }
        e || ("postMessage" in a ? a.addEventListener ? a.addEventListener("message", c, !1) : a.attachEvent ? a.attachEvent("onmessage", c) : a.onmessage = c : a.navigator["ebuckler_token-callback"] = function(b) {
            b && (a.EBUCKLER_TOKEN = b)
        })
    }()
})(window);