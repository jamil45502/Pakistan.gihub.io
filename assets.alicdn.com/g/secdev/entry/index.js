(function(v, h, p, a, r, i, T) {
    if (v.__sec_entry_loaded || h.__no_sec_entry) {
        return
    }
    v.__sec_entry_loaded = true;
    var H = v.__baxia_entry_config__ || {};
    var o = h.head;
    if (!o) {
        return
    }
    var n = h.currentScript;
    var e = a.userAgent;
    var t = T("%58%75%65%58%69");
    var c = t.toLowerCase();
    if (e.indexOf(t) >= 0 || r.host.indexOf(c) >= 0 || top !== self && h.referrer.indexOf(c) >= 0) {
        return
    }

    function u(e) {
        var a = h.createElement("script");
        a.crossOrigin = "";
        a.referrerPolicy = "unsafe-url";
        a.src = e;
        if (H.sync && h.readyState === "loading" && n && !n.async) {
            h.write(a.outerHTML);
            return o.lastChild
        }
        if (p() < .01) {
            var t = Date.now();
            if (e.indexOf("/AWSC/et/") > 0) {
                a.onload = function() {
                    var e = Date.now();
                    _({
                        v: "entry_et",
                        e: "loadET",
                        tm: e - t,
                        u: r.host
                    }, "https://acjs.aliyun.com/error?")
                }
            }
        }
        return o.appendChild(a)
    }
    var l = "https://g.alicdn.com";
    var s = self.goldlog;
    if (s && s.getCdnPath) {
        l = s.getCdnPath()
    }
    if (n && n.src.indexOf("https://laz-g-cdn.alicdn.com") == 0) {
        l = "https://laz-g-cdn.alicdn.com"
    }
    if (n && n.src.indexOf("https://lzd-g.slatic.net/g") == 0) {
        l = "https://lzd-g.slatic.net/g"
    }
    if (n && n.src.indexOf("https://g.lazcdn.com/g") == 0) {
        l = "https://g.lazcdn.com/g"
    }
    var f = l + "/secdev/";
    var m = e.match(/Chrome\/(\d*)/);
    if (m) {
        m = +m[1]
    }
    if (!h._sufei_data2) {
        var d = p() < .1 ? "3.9.11" : "3.9.10";
        if (r.host == "www.miravia.es") {
            d = "3.9.12"
        }
        var g = u(f + "sufei_data/" + d + "/index.js");
        g.async = h.cookie.indexOf("isg=") < 0;
        g.id = "aplus-sufei"
    }

    function _(e, a) {
        var t = [];
        for (var r in e) {
            t.push(r + "=" + i(e[r]))
        }(new Image).src = a + t.join("&")
    }
    v.nsrprtrt = 1e-4;
    var x = 0;
    var y = ["taobao", "alibaba.com", "alipay.com", "tmall.com", "lazada", "aliexpress", "1688.com", "alimama.com", "tb.cn", "xiami.com", "amap.com", "cainiao.com", "aliyun.com", "etao.com", "fliggy.com", "liangxinyao.com", "damai.cn", "daraz", "tmall.hk", "jiyoujia.com", "taopiaopiao.com", "alitrip.com", "fliggy.hk", "alihealth.cn", "alitrip.hk", "ele.me", "gaode", "mp.dfkhgj.com", "mp.bcvbw.com", "m.dfkhgj.com", "pailitao.com", "youku.com", "jiaoyimao", "sm.cn", "dingtalk.com", "alibaba-inc", "guoguo-app", "kaola", "alicdn", "soku", "koubei.com"];
    for (var b = 0; b < y.length; b++) {
        if (~r.host.indexOf(y[b])) {
            x = 1;
            break
        }
    }
    if (x) {
        var q = ["1.0.85", "f", 94];
        var B = ["1.0.87", "f", 95];
        var F = 1e4;
        var j = q;
        if (r.host == "sycm.taobao.com" || r.host == "liveplatform.taobao.com") {
            v.nslog = .01
        }
        if ((p() * 1e4 | 0) < F) {
            j = B
        }
        if (!j) {
            return
        }
        var O = f;
        var k = true;
        if (r.hostname.indexOf("buyertrade.taobao.com") > -1 || /refund2\.taobao\.com$|refund2\.tmall\.com$/.test(r.hostname) && r.pathname === "/dispute/apply.htm") {
            if (!k) {
                O = O.replace("/secdev/", "??xlly/spl/index.js,secdev/")
            } else {
                O = O.replace("/secdev/", "??xlly/spl/index.js,xlly/spl/rp.js,secdev/")
            }
        } else if (k) {
            O = O.replace("/secdev/", "??xlly/spl/rp.js,secdev/")
        }
        var w = O + "nsv/" + j[0] + "/";
        var C = w + "ns_" + j[1] + "_" + j[2] + "_3_f.js?v=1";
        var S = w + "ns_" + j[1] + "_" + j[2] + "_3_n.js?v=1";

        function E() {
            var e = "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";
            if ("WebkitAppearance" in h.documentElement.style) {
                if (escape(a.javaEnabled.toString()) === e) {
                    return true
                }
            }
            return false
        }
        var M = e.match(/Edge\/([\d]*)/);
        var z = e.match(/Safari\/([\d]*)/);
        var L = e.match(/Firefox\/([\d]*)/);
        var A = e.match(/MSIE|Trident/);
        if (M) {
            u(C)
        } else if (m) {
            u(C)
        } else if (z || L || A) {
            u(S)
        } else {
            if (E()) {
                u(C)
            } else {
                u(S)
            }
        }
    } else {
        u(l + "/xlly/spl/rp.js")
    }

    function P() {
        var e = v.atob;
        if (!e) {
            return
        }
        var a = 0;
        var t = "";

        function r() {
            if (++a == 3) {
                clearInterval(s)
            }
            n()
        }
        var i;
        var o = p() * 1e8 | 0;

        function n() {
            if (!i) {
                return
            }
            var e = i.getUA({
                MaxMTLog: 500,
                MTInterval: 3
            });
            e = o + "|" + e;
            var a = {
                token: e,
                cna: t,
                ext: 7
            };
            _(a, "https://fourier.taobao.com/ts?")
        }
        var c = +localStorage._xlly;
        if (!c && /xlly=1/.test(h.cookie)) {
            c = +new Date;
            localStorage._xlly = c
        }
        if (c) {
            var l = new Date - c;
            if (l > 1e3 * 3600 * 24) {
                l = 0;
                delete localStorage._xlly
            }
            if (l < 1e3 * 60 * 20) {
                var s = setInterval(r, 1e3 * 60);
                if (v.addEventListener) {
                    v.addEventListener("unload", n)
                }
                var f = h.cookie.match(/cna=([^;]+)/);
                if (f) {
                    t = f[1]
                }
                var m = u(e("aHR0cHM6Ly9nLmFsaWNkbi5jb20vQVdTQy9BV1NDL2F3c2MuanM="));
                var d = unescape("%75%61%62");
                m.onload = function() {
                    v.AWSC && AWSC.use(d, function(e, a) {
                        if (e === "loaded") {
                            i = a
                        }
                    })
                }
            }
        }
    }
    try {
        P()
    } catch (e) {}
    v.etrprtrt = .01;
    var R = 0;
    for (var b = 0; b < y.length; b++) {
        if (r.host && ~r.host.indexOf(y[b])) {
            R = 1;
            break
        }
    }
    if (R) {
        var U = "1.62.7";
        var N = "1.66.1";
        var Q = .001;
        var V = U;
        if (p() < Q) {
            V = N
        }
        var $ = l + "/AWSC/et/" + V + "/";
        var D = $ + "et_f.js";
        var G = $ + "et_n.js";
        if (M) {
            u(D)
        } else if (m) {
            u(D)
        } else if (z || L || A) {
            u(G)
        } else {
            if (E()) {
                u(D)
            } else {
                u(G)
            }
        }
    }
    if (p() < .01) {
        if (!h.querySelector('meta[name="referrer"]')) {
            var I = h.createElement("meta");
            I.name = "referrer";
            I.content = "unsafe-url";
            o.appendChild(I)
        }
    }
    if (r.href.indexOf("https://account.aliyun.com/login/qr_login.htm") == 0 || r.href.indexOf("https://account.aliyun.com/register/qr_register.htm") == 0 || r.href.indexOf("https://mailsso.mxhichina.com/aliyun/register") == 0 || r.href.indexOf("https://passport.alibabacloud.com/mini_login.htm") == 0 || r.href.indexOf("https://reg.taobao.com/member/new_register.jhtml") == 0 || r.href.indexOf("https://passport.alibaba.com/member/reg/fast/union_reg.htm") == 0 || r.href.indexOf("https://passport.aliyun.com/mini_login.htm") == 0 || r.href.indexOf("https://passport.alibabacloud.com/mini_login.htm") == 0 || r.href.indexOf("https://passport.alibabacloud.com/register/enter_reg.htm") == 0 || r.href.indexOf("https://reg.taobao.com/member/reg/fast/union_reg") == 0) {
        var J = "";
        var K = "";
        var W = h.cookie.match(/cna=([^;]+)/);
        if (W) {
            J = W[1]
        }
        W = h.cookie.match(/isg=([^;]+)/);
        if (W) {
            K = W[1]
        }
        var X = Math.random() * 256 | 0;
        v.sampleContent = X;
        var Y = {
            ext: 53,
            data: J,
            random: p(),
            point: K,
            pid: X,
            e1: top === v,
            e2: innerWidth + "," + innerHeight
        };
        var Z = [];
        for (var ee in Y) {
            Z.push(ee + "=" + i(Y[ee]))
        }
        var ae = "https://fourier.taobao.com/rp?" + Z.join("&");
        u(ae)
    }
})(window, document, Math.random, navigator, location, encodeURIComponent, decodeURIComponent);