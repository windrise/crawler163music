(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return !1
    }
    ;
    NEJ.P = function(DC0x) {
        if (!DC0x || !DC0x.length)
            return null;
        var bem8e = window;
        for (var a = DC0x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; bem8e = bem8e[a[i]] = bem8e[a[i]] || {},
        i++)
            ;
        return bem8e
    }
    ;
    NEJ.Q = function(bL1x, DC0x) {
        bL1x = bL1x || NEJ.O;
        var bs1x = DC0x.split(".");
        for (var i = 0, l = bs1x.length; i < l; i++) {
            bL1x = bL1x[bs1x[i]];
            if (!bL1x)
                break
        }
        return bL1x
    }
    ;
    NEJ.C = function() {
        var bJD7w = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bEl6f = function(D0x, bz1x) {
            for (var x in bz1x)
                if (D0x == bz1x[x])
                    return x;
            return null
        };
        var byb4f = {
            cw1x: 0,
            bl1x: 1,
            bC1x: 2,
            bW1x: 3,
            bJ1x: 4,
            fe2x: 5,
            kg4k: 6,
            eD2x: 7
        }
          , us7l = {
            cE1x: 0,
            bn1x: 1,
            bF1x: 2,
            ci1x: 3,
            bQ1x: 4,
            gM3x: 5,
            lq4u: 6,
            gj3x: 7
        };
        return function() {
            var fP3x = function() {
                this.bEI6C();
                return this.cw1x.apply(this, arguments)
            };
            fP3x.prototype.bEI6C = NEJ.F;
            fP3x.prototype.cw1x = NEJ.F;
            fP3x.N0x = function(BM9D, bKv8n) {
                if (bJD7w(BM9D))
                    return;
                if (bKv8n == null || !!bKv8n)
                    NEJ.X(this, BM9D, bJD7w);
                this.bWb2x = BM9D;
                this.cs1x = BM9D.prototype;
                var bI1x = function() {};
                bI1x.prototype = BM9D.prototype;
                this.prototype = new bI1x;
                var DF0x = this.prototype;
                DF0x.constructor = this;
                var cl1x;
                for (var x in byb4f) {
                    cl1x = bEl6f(byb4f[x], us7l);
                    if (!cl1x || !this.cs1x[x])
                        continue;
                    DF0x[x] = function(W1x) {
                        return function() {
                            this[W1x].apply(this, arguments)
                        }
                    }(cl1x)
                }
                var DG0x = {};
                for (var x in us7l) {
                    cl1x = bEl6f(us7l[x], byb4f);
                    if (!cl1x || !this.cs1x[cl1x])
                        continue;
                    DG0x[cl1x] = BM9D;
                    DF0x[x] = function(W1x) {
                        return function() {
                            var m0x, bI1x = this.bxT4X[W1x], bag7Z = bI1x.prototype[W1x];
                            this.bxT4X[W1x] = bI1x.bWb2x || BM9D;
                            if (!!bag7Z)
                                m0x = bag7Z.apply(this, arguments);
                            this.bxT4X[W1x] = BM9D;
                            return m0x
                        }
                    }(cl1x)
                }
                DF0x.bEI6C = function() {
                    this.bxT4X = NEJ.X({}, DG0x)
                }
                ;
                DF0x.cKt1x = DF0x.cE1x;
                return DF0x
            }
            ;
            return fP3x
        }
    }();
    NEJ.X = function(gq3x, bR1x, dZ2x) {
        if (!gq3x || !bR1x)
            return gq3x;
        dZ2x = dZ2x || NEJ.F;
        for (var x in bR1x) {
            if (bR1x.hasOwnProperty(x) && !dZ2x(bR1x[x], x))
                gq3x[x] = bR1x[x]
        }
        return gq3x
    }
    ;
    NEJ.EX = function(gq3x, bR1x) {
        if (!gq3x || !bR1x)
            return gq3x;
        for (var x in gq3x) {
            if (gq3x.hasOwnProperty(x) && bR1x[x] != null)
                gq3x[x] = bR1x[x]
        }
        return gq3x
    }
    ;
    var Ij1x = Function.prototype;
    Ij1x.eH2x = function(lM4Q, wJ8B) {
        var f = NEJ.F
          , wJ8B = wJ8B || f
          , lM4Q = lM4Q || f
          , dx2x = this;
        return function() {
            var d0x = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            lM4Q(d0x);
            if (!d0x.stopped) {
                d0x.value = dx2x.apply(this, d0x.args);
                wJ8B(d0x)
            }
            return d0x.value
        }
    }
    ;
    Ij1x.f0x = function() {
        var bf1x = arguments
          , gq3x = arguments[0]
          , bxO4S = this;
        return function() {
            var tG7z = NEJ.R.slice.call(bf1x, 1);
            NEJ.R.push.apply(tG7z, arguments);
            return bxO4S.apply(gq3x || window, tG7z)
        }
    }
    ;
    Ij1x.eA2x = function() {
        var bf1x = arguments
          , gq3x = NEJ.R.shift.call(bf1x)
          , bxO4S = this;
        return function() {
            NEJ.R.push.apply(arguments, bf1x);
            return bxO4S.apply(gq3x || window, arguments)
        }
    }
    ;
    var Ij1x = String.prototype;
    if (!Ij1x.trim) {
        Ij1x.trim = function() {
            var df2x = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(df2x, "")
            }
        }()
    }
    if (!window.MWF)
        window.MWF = NEJ;
    if (!window.mwf)
        window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , O0x = c0x("nej.p")
      , wg8Y = window.navigator.platform
      , uA7t = window.navigator.userAgent;
    var lt4x = {
        mac: wg8Y,
        win: wg8Y,
        linux: wg8Y,
        ipad: uA7t,
        ipod: uA7t,
        iphone: wg8Y,
        android: uA7t
    };
    O0x.Ik1x = lt4x;
    for (var x in lt4x)
        lt4x[x] = (new RegExp(x,"i")).test(lt4x[x]);
    lt4x.ios = lt4x.ipad || lt4x.iphone || lt4x.ipod;
    lt4x.tablet = lt4x.ipad;
    lt4x.desktop = lt4x.mac || lt4x.win || lt4x.linux && !lt4x.android;
    var iC3x = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    O0x.dr2x = iC3x;
    if (/msie\s+(.*?);/i.test(uA7t) || /trident\/.+rv:([\d\.]+)/i.test(uA7t)) {
        iC3x.engine = "trident";
        iC3x.browser = "ie";
        iC3x.version = RegExp.$1;
        iC3x.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var mM5R = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        iC3x.release = mM5R[document.documentMode] || mM5R[parseInt(iC3x.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(uA7t)) {
        iC3x.engine = "webkit";
        iC3x.release = RegExp.$1 || "";
        iC3x.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(uA7t)) {
        iC3x.engine = "gecko";
        iC3x.release = RegExp.$1 || "";
        iC3x.browser = "firefox";
        iC3x.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(uA7t))
            iC3x.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(uA7t)) {
        iC3x.engine = "presto";
        iC3x.release = RegExp.$1 || "";
        iC3x.browser = "opera";
        iC3x.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(uA7t))
            iC3x.version = RegExp.$1 || ""
    }
    if (iC3x.browser == "unknow") {
        var mM5R = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = mM5R.length, W1x; i < l; i++) {
            W1x = mM5R[i] == "safari" ? "version" : mM5R[i];
            if ((new RegExp(W1x + "/(.*?)(?=\\s|$)","i")).test(uA7t)) {
                iC3x.browser = mM5R[i];
                iC3x.version = RegExp.$1.trim();
                break
            }
        }
    }
    O0x.bMe8W = {};
    var bah7a = iC3x.engine != "trident";
    O0x.nB5G = {
        gecko: iC3x.engine != "gecko",
        webkit: iC3x.engine != "webkit",
        presto: iC3x.engine != "presto",
        trident0: bah7a || iC3x.release > "2.0",
        trident1: bah7a || iC3x.release < "6.0",
        trident2: bah7a || iC3x.release > "3.0",
        trident: bah7a || iC3x.release >= "6.0"
    }
}
)();
(function() {
    var iB3x = NEJ.P("nej.c")
      , R0x = {};
    var bxD4H = function() {
        var df2x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(Y1x) {
            Y1x = Y1x || "";
            if (df2x.test(Y1x))
                return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Qt3x = function() {
        var bOK9B = function(i0x, bz1x) {
            if (!i0x || !i0x.length)
                return;
            for (var i = 0, l = i0x.length, jR4V; i < l; i++) {
                jR4V = i0x[i];
                if (jR4V.indexOf("://") > 0)
                    bz1x[bxD4H(jR4V)] = jR4V
            }
        };
        var bh1x = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function(bR1x) {
            iB3x.It1x("root", bR1x.root || "/res/");
            var bxb4f, fZ3x = iB3x.B0x("root");
            for (var x in bh1x) {
                bxb4f = bh1x[x];
                iB3x.It1x(x, bR1x[bxb4f.name] || fZ3x + bxb4f.dft)
            }
            var CY0x = bR1x.p_csrf;
            if (CY0x == !0) {
                CY0x = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            iB3x.It1x("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, CY0x));
            R0x.frames = {};
            bOK9B(bR1x.p_frame, R0x.frames);
            R0x.flashs = {};
            bOK9B(bR1x.p_flash, R0x.flashs)
        }
    }();
    iB3x.It1x = function(K0x, D0x) {
        R0x[K0x] = D0x
    }
    ;
    iB3x.B0x = function(K0x) {
        return R0x[K0x]
    }
    ;
    iB3x.bWh2x = function(Y1x) {
        var qk6e = bxD4H(Y1x);
        return R0x.frames[qk6e] || qk6e + "/res/nej_proxy_frame.html"
    }
    ;
    iB3x.bWi2x = function(Y1x) {
        return R0x.flashs[bxD4H(Y1x)]
    }
    ;
    Qt3x(window.NEJ_CONF || NEJ.O)
}
)();
(function() {
    var c0x = NEJ.P
      , O0x = c0x("nej.p")
      , iB3x = c0x("nej.c")
      , bR1x = window.NEJ_CONF || NEJ.O;
    if (O0x.nB5G.trident)
        return;
    iB3x.It1x("storage.swf", bR1x.storage || iB3x.B0x("root") + "nej_storage.swf");
    if (O0x.dr2x.release < "4.0") {
        iB3x.It1x("blank.png", bR1x.blank || iB3x.B0x("root") + "nej_blank.gif")
    }
    var i0x = bR1x.xdr
      , gL3x = /^(https?:\/\/.*?)(?=\/|$)/i
      , kn4r = /[\/?=&]/i;
    var bJG7z = function(Y1x) {
        return (gL3x.test(Y1x) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i0x && !!i0x.length)
        for (var i = i0x.length - 1, Y1x, K0x; i >= 0; i--) {
            Y1x = i0x[i];
            K0x = bJG7z(Y1x);
            if (!!K0x)
                iB3x.It1x(K0x, Y1x)
        }
    iB3x.cKo1x = function(Y1x) {
        var K0x = bJG7z(Y1x);
        if (!K0x) {
            if (kn4r.test(Y1x)) {
                K0x = location.protocol + "//" + location.host
            } else if (Y1x.indexOf("://") < 0) {
                K0x = location.protocol + "//" + Y1x
            } else {
                K0x = Y1x
            }
        }
        return iB3x.B0x(K0x) || K0x + "/res/nej_xdomain.html"
    }
}
)();
(function() {
    var c0x = NEJ.P
      , iB3x = c0x("nej.c")
      , O0x = c0x("nej.g")
      , gG3x = +(new Date);
    O0x.cKn1x = 1e4 - gG3x;
    O0x.bwV4Z = 10001 - gG3x;
    O0x.cKl1x = 10002 - gG3x;
    O0x.bSM1x = 10003 - gG3x;
    O0x.bWp2x = 10004 - gG3x;
    O0x.cKj1x = 10005 - gG3x;
    O0x.bwC4G = 10006 - gG3x;
    O0x.bWt2x = 10007 - gG3x;
    O0x.yg8Y = "Content-Type";
    O0x.cKf1x = "text/plain";
    O0x.DH0x = "multipart/form-data";
    O0x.bWv2x = "application/x-www-form-urlencoded";
    O0x.bwt4x = iB3x.B0x("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
}
)();
(function() {
    var c0x = NEJ.P
      , fy2x = NEJ.R
      , O0x = c0x("nej.p")
      , a9j = c0x("nej.e")
      , h0x = c0x("nej.v")
      , k0x = c0x("nej.u")
      , be1x = c0x("nej.h");
    var kh4l = O0x.dr2x.prefix
      , bPD9u = O0x.bMe8W
      , bWz2x = {
        scale: "scale({x|1},{y|1})",
        rotate: "rotate({a})",
        translate: "translate({x},{y})"
    }
      , bWD2x = {
        scale: "scale3d({x|1},{y|1},{z|1})",
        rotate: "rotate3d({x},{y},{z},{a})",
        translate: "translate3d({x},{y},{z})"
    }
      , Te4i = {
        transition: !0,
        transform: !0,
        animation: !0,
        keyframes: !0,
        box: !0,
        "box-pack": !0,
        "box-flex": !0,
        marquee: !0,
        "border-radius": !0,
        "user-select": !0
    };
    var Qt3x = function() {
        var sX7Q = be1x.bBR5W();
        bPD9u.css3d = !!sX7Q && sX7Q.m41 != null;
        var df2x = /-([a-z])/g;
        for (var x in Te4i) {
            Te4i[bBT5Y(x)] = Te4i[x]
        }
    };
    var bBT5Y = function() {
        var df2x = /-([a-z])/g;
        return function(W1x) {
            W1x = W1x || "";
            return W1x.replace(df2x, function($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bBX5c = function(W1x) {
        return (!bPD9u.css3d ? bWz2x : bWD2x)[W1x]
    };
    var bCu5z = function() {
        var df2x = /\s+/;
        return function(fP3x) {
            fP3x = (fP3x || "").trim();
            return !!fP3x ? fP3x.split(df2x) : null
        }
    }();
    var bbv7o = function(F0x, u0x, fP3x) {
        F0x = a9j.B0x(F0x);
        if (!F0x)
            return;
        k0x.bd1x(bCu5z(fP3x), function(ed2x) {
            F0x.classList[u0x](ed2x)
        })
    };
    be1x.Ix1x = function(i0x) {
        return fy2x.slice.call(i0x, 0)
    }
    ;
    be1x.bwi4m = function(F0x) {
        return be1x.Ix1x(F0x.children)
    }
    ;
    be1x.bwc4g = function(F0x, fP3x) {
        return be1x.Ix1x(F0x.getElementsByClassName(fP3x))
    }
    ;
    be1x.bwb4f = function(F0x, Iy1x) {
        bbv7o(F0x, "add", Iy1x)
    }
    ;
    be1x.bvV4Z = function(F0x, Iz1x) {
        bbv7o(F0x, "remove", Iz1x)
    }
    ;
    be1x.Ux5C = function(F0x, Iz1x, Iy1x) {
        bbv7o(F0x, "remove", Iz1x);
        bbv7o(F0x, "add", Iy1x)
    }
    ;
    be1x.bvO4S = function(F0x, fP3x) {
        F0x = a9j.B0x(F0x);
        if (!F0x)
            return !1;
        var i0x = F0x.classList;
        if (!i0x || !i0x.length)
            return !1;
        return k0x.di2x(bCu5z(fP3x), function(ed2x) {
            return i0x.contains(ed2x)
        }) >= 0
    }
    ;
    be1x.bvN4R = function(F0x, ed2x) {}
    ;
    be1x.bvG4K = function(F0x) {}
    ;
    be1x.bvC4G = function(gf3x, nJ5O) {
        gf3x.selectionEnd = nJ5O.end || 0;
        gf3x.selectionStart = nJ5O.start || 0;
        gf3x.focus()
    }
    ;
    be1x.bvB4F = function(gf3x) {
        return {
            end: gf3x.selectionEnd,
            start: gf3x.selectionStart
        }
    }
    ;
    be1x.bvy4C = function() {
        var DL0x = function(ed2x, d0x) {
            var F0x = h0x.X1x(d0x);
            if (!F0x.value)
                a9j.x0x(F0x, ed2x)
        };
        var IJ1x = function(ed2x, d0x) {
            a9j.y0x(h0x.X1x(d0x), ed2x)
        };
        return function(F0x, fk2x, ed2x) {
            if (fk2x == 1) {
                h0x.s0x(F0x, "blur", DL0x.f0x(null, ed2x))
            }
            if (fk2x == 1 || fk2x == -1) {
                h0x.s0x(F0x, "focus", IJ1x.f0x(null, ed2x))
            }
        }
    }();
    be1x.buT4X = function(G0x) {
        return (new XMLSerializer).serializeToString(G0x) || ""
    }
    ;
    be1x.buK4O = function(CV0x) {
        var fZ3x = (new DOMParser).parseFromString(CV0x, "text/xml").documentElement;
        return fZ3x.nodeName == "parsererror" ? null : fZ3x
    }
    ;
    be1x.buG4K = function(F0x) {}
    ;
    be1x.nN5S = function(F0x) {
        return null
    }
    ;
    be1x.buD4H = function(F0x) {
        return null
    }
    ;
    be1x.buy4C = function(dR2x) {}
    ;
    be1x.but3x = function() {
        var bf1x = be1x.Ix1x(arguments);
        bf1x[0] = a9j.B0x(bf1x[0]);
        if (!bf1x[0])
            return null;
        bf1x[1] = (bf1x[1] || "").toLowerCase();
        if (!bf1x[1])
            return null;
        return bf1x
    }
    ;
    be1x.BF9w = function() {
        var wx8p = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }
          , jl4p = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var bWE2x = function(u0x) {
            return (kh4l.evt || kh4l.pro) + u0x
        };
        return function() {
            var bf1x = be1x.but3x.apply(be1x, arguments);
            if (!bf1x)
                return;
            var bcP8H = jl4p[bf1x[1]]
              , bcR8J = wx8p[bf1x[1]];
            if (!!bcP8H) {
                bf1x[4] = bf1x[1];
                bf1x[1] = bWE2x(bcP8H)
            } else if (!!bcR8J) {
                var W1x = "on" + bf1x[1];
                if (!(W1x in bf1x[0])) {
                    bf1x[4] = bf1x[1];
                    bf1x[1] = bcR8J
                }
            }
            return bf1x
        }
    }();
    be1x.bul3x = function() {
        var bf1x = arguments;
        bf1x[0].addEventListener(bf1x[1], bf1x[2], !!bf1x[3])
    }
    ;
    be1x.bdr8j = function() {
        var bf1x = arguments;
        bf1x[0].removeEventListener(bf1x[1], bf1x[2], !!bf1x[3])
    }
    ;
    be1x.buh3x = function(F0x, u0x, e0x) {
        var d0x = document.createEvent("Event");
        d0x.initEvent(u0x, !0, !0);
        NEJ.X(d0x, e0x);
        F0x.dispatchEvent(d0x)
    }
    ;
    be1x.bBR5W = function() {
        var gL3x = /\((.*?)\)/
          , kn4r = /\s*,\s*/
          , i0x = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var beP8H = function(sX7Q) {
            var in3x = {};
            if (gL3x.test(sX7Q || "")) {
                k0x.bd1x(RegExp.$1.split(kn4r), function(D0x, r0x) {
                    in3x[i0x[r0x]] = D0x || ""
                })
            }
            return in3x
        };
        return function(sX7Q) {
            if (!!window.CSSMatrix)
                return new CSSMatrix(sX7Q);
            var W1x = kh4l.clz + "CSSMatrix";
            if (!!window[W1x])
                return new window[W1x](sX7Q || "");
            return beP8H(sX7Q)
        }
    }();
    be1x.bFY6S = function() {
        var df2x = /\{(.*?)\}/g;
        return function(W1x, bz1x) {
            bz1x = bz1x || o;
            var oW5b = bBX5c(W1x);
            return !oW5b ? "" : oW5b.replace(df2x, function($1, $2) {
                var bs1x = $2.split("|");
                return bz1x[bs1x[0]] || bs1x[1] || "0"
            })
        }
    }();
    be1x.buc3x = function(F0x, W1x, D0x) {
        F0x.style[be1x.bJA7t(W1x)] = D0x
    }
    ;
    be1x.bJA7t = function() {
        var df2x = /^[a-z]/
          , btZ3x = kh4l.css;
        var bWF2x = function(W1x) {
            return W1x.replace(df2x, function($1) {
                return btZ3x + $1.toUpperCase()
            })
        };
        return function(W1x) {
            W1x = bBT5Y(W1x);
            var bWL2x = be1x.bWQ2x(W1x, Te4i);
            return bWL2x ? bWF2x(W1x) : W1x
        }
    }();
    be1x.bWQ2x = function() {
        var df2x = /^([a-z]+?)[A-Z]/;
        return function(W1x, bz1x) {
            if (!bz1x[W1x]) {
                if (df2x.test(W1x))
                    W1x = RegExp.$1
            }
            return !!bz1x[W1x]
        }
    }();
    be1x.bWW2x = function() {
        var df2x = /\$<(.*?)>/gi
          , btZ3x = "-" + kh4l.css.toLowerCase() + "-";
        return function(km4q) {
            return km4q.replace(df2x, function($1, $2) {
                var fu2x = $2
                  , bs1x = fu2x.split("|")
                  , oW5b = bBX5c(bs1x[0]);
                if (!!oW5b) {
                    return be1x.bFY6S(bs1x[0], k0x.hq3x(bs1x[1]))
                }
                return !be1x.bWX2x(fu2x, Te4i) ? fu2x : btZ3x + fu2x
            })
        }
    }();
    be1x.bWX2x = function(W1x, bz1x) {
        return !!bz1x[W1x]
    }
    ;
    be1x.btR3x = function(cj1x, km4q) {
        cj1x.textContent = km4q
    }
    ;
    be1x.btQ3x = function(cj1x, km4q) {
        var zH9y = cj1x.sheet
          , bq1x = zH9y.cssRules.length;
        zH9y.insertRule(km4q, bq1x);
        return zH9y.cssRules[bq1x]
    }
    ;
    be1x.cJS1x = function(F0x, e0x) {}
    ;
    be1x.WF5K = function(WL5Q) {
        return (WL5Q || "").toLowerCase() != "transparent"
    }
    ;
    be1x.bXb2x = function(F0x) {}
    ;
    be1x.btx3x = function(F0x, W1x) {
        if (!!F0x.getAttribute)
            return F0x.getAttribute(W1x);
        return ""
    }
    ;
    be1x.XC6w = function(eO2x) {
        a9j.cL1x(eO2x)
    }
    ;
    Qt3x()
}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , h0x = c0x("nej.v")
      , O0x = c0x("nej.p")
      , be1x = c0x("nej.h");
    if (O0x.nB5G.trident0)
        return;
    var gG3x = +(new Date);
    R0x = {};
    be1x.bvN4R = be1x.bvN4R.eH2x(function(d0x) {
        d0x.stopped = !0;
        var bf1x = d0x.args
          , C0x = a9j.lP4T(bf1x[0])
          , K0x = "hover-" + C0x;
        if (!C0x || !!R0x[K0x])
            return;
        R0x[K0x] = !0;
        h0x.s0x(C0x, "mouseenter", a9j.y0x.f0x(a9j, C0x, bf1x[1]));
        h0x.s0x(C0x, "mouseleave", a9j.x0x.f0x(a9j, C0x, bf1x[1]))
    });
    be1x.bvG4K = function() {
        var cJQ1x = function() {};
        return be1x.bvG4K.eH2x(function(d0x) {
            d0x.stopped = !0;
            var F0x = d0x.args[0]
              , C0x = "fixed-" + a9j.lP4T(F0x);
            if (!!R0x[C0x])
                return;
            var bh1x = {};
            R0x[C0x] = bh1x
        })
    }();
    be1x.buG4K = be1x.buG4K.eH2x(function(d0x) {
        d0x.stopped = !0;
        var F0x = d0x.args[0]
          , cj1x = F0x.style
          , bFF6z = a9j.oy5D();
        cj1x.width = bFF6z.scrollWidth + "px";
        cj1x.height = bFF6z.scrollHeight + "px"
    });
    be1x.nN5S = be1x.nN5S.eH2x(function(d0x) {
        d0x.stopped = !0;
        var F0x = d0x.args[0]
          , lp4t = R0x[F0x.msk];
        if (!lp4t) {
            F0x.msk = gG3x++;
            lp4t = a9j.dj2x("iframe");
            lp4t.style.position = "absolute";
            R0x[F0x.msk] = lp4t
        }
        d0x.value = lp4t;
        var cj1x = lp4t.style;
        cj1x.top = (parseInt(a9j.dh2x(F0x, "top")) || 0) + "px";
        cj1x.left = (parseInt(a9j.dh2x(F0x, "left")) || 0) + "px";
        cj1x.width = F0x.offsetWidth + "px";
        cj1x.height = F0x.offsetHeight + "px";
        F0x.insertAdjacentElement("beforeBegin", lp4t)
    });
    be1x.buD4H = be1x.buD4H.eH2x(function(d0x) {
        d0x.stopped = !0;
        var lp4t = R0x[d0x.args[0].msk];
        if (!!lp4t)
            a9j.mS5X(lp4t)
    })
}
)();
(function() {
    var c0x = NEJ.P
      , O0x = c0x("nej.p")
      , a9j = c0x("nej.e")
      , be1x = c0x("nej.h");
    if (O0x.nB5G.trident1)
        return;
    be1x.BF9w = function() {
        var wx8p = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return be1x.BF9w.eH2x(function(d0x) {
            var bf1x = be1x.but3x.apply(be1x, d0x.args);
            if (!bf1x) {
                d0x.stopped = !0;
                return
            }
            var u0x = wx8p[bf1x[1]];
            if (!!u0x && ("on" + u0x).toLowerCase()in bf1x[0]) {
                bf1x[4] = bf1x[1];
                bf1x[1] = u0x;
                d0x.stopped = !0;
                d0x.value = bf1x
            }
        })
    }();
    be1x.WF5K = function(WL5Q) {
        return !0
    }
    ;
    be1x.XC6w = be1x.XC6w.eH2x(function(d0x) {
        d0x.stopped = !0;
        var eO2x = d0x.args[0];
        a9j.ba1x(eO2x, "display", "none");
        try {
            eO2x.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , O0x = c0x("nej.p")
      , a9j = c0x("nej.e")
      , h0x = c0x("nej.v")
      , k0x = c0x("nej.u")
      , be1x = c0x("nej.h")
      , btv3x = {};
    if (O0x.nB5G.trident)
        return;
    be1x.Ix1x = be1x.Ix1x.eH2x(function(d0x) {
        d0x.stopped = !0;
        var i0x = d0x.args[0];
        if (!i0x) {
            d0x.value = null;
            return
        }
        var r0x = 0
          , m0x = [];
        while (!!i0x[r0x]) {
            m0x.push(i0x[r0x++])
        }
        d0x.value = m0x
    });
    be1x.bwi4m = be1x.bwi4m.eH2x(function(d0x) {
        d0x.stopped = !0;
        var bs1x = [];
        k0x.bd1x(d0x.args[0].childNodes, function(g0x) {
            if (g0x.nodeType == 1)
                bs1x.push(g0x)
        });
        d0x.value = bs1x
    });
    be1x.bwc4g = be1x.bwc4g.eH2x(function(d0x) {
        var F0x = d0x.args[0];
        if (!!F0x.getElementsByClassName)
            return;
        d0x.stopped = !0;
        var m0x = []
          , QP4T = new RegExp("(\\s|^)(?:" + d0x.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k0x.bd1x(F0x.getElementsByTagName("*"), function(g0x) {
            if (QP4T.test(g0x.className))
                m0x.push(g0x)
        });
        d0x.value = m0x
    });
    be1x.bvC4G = be1x.bvC4G.eH2x(function(d0x) {
        var gf3x = d0x.args[0]
          , nJ5O = d0x.args[1];
        if (gf3x.selectionStart == null) {
            d0x.stopped = !0;
            var dd1x = gf3x.createTextRange();
            dd1x.collapse(!0);
            dd1x.moveStart("character", nJ5O.start);
            dd1x.moveEnd("character", nJ5O.end - nJ5O.start);
            dd1x.select();
            gf3x.focus()
        }
    });
    be1x.bvB4F = be1x.bvB4F.eH2x(function(d0x) {
        var gf3x = d0x.args[0];
        gf3x.focus();
        if (gf3x.selectionStart == null) {
            d0x.stopped = !0;
            var bMS8K = document.selection.createRange();
            var bOi9Z = gf3x.createTextRange();
            bOi9Z.moveToBookmark(bMS8K.getBookmark());
            var btp3x = gf3x.createTextRange();
            btp3x.collapse(!0);
            btp3x.setEndPoint("EndToStart", bOi9Z);
            var hA3x = btp3x.text.length;
            d0x.value = {
                start: hA3x,
                end: hA3x + bMS8K.text.length
            }
        }
    });
    be1x.buT4X = be1x.buT4X.eH2x(function(d0x) {
        if (!!window.XMLSerializer)
            return;
        d0x.stopped = !0;
        var F0x = d0x.args[0];
        d0x.value = F0x.xml != null ? F0x.xml : F0x.outHTML
    });
    be1x.buK4O = function() {
        var Ra4e = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bXJ2x = function() {
            try {
                for (var i = 0, l = Ra4e.length; i < l; i++)
                    return new ActiveXObject(Ra4e[i])
            } catch (ex) {
                return null
            }
        };
        return be1x.buK4O.eH2x(function(d0x) {
            if (!!window.DOMParser)
                return;
            d0x.stopped = !0;
            var nY5d = bXJ2x();
            if (!!nY5d && nY5d.loadXML(d0x.args[0]) && !nY5d.parseError.errorCode)
                d0x.value = nY5d.documentElement
        })
    }();
    be1x.BF9w = function() {
        var jl4p = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in jl4p)
            btv3x[jl4p[x]] = !0;
        var bYb2x = function(F0x, u0x) {
            if ("on" + u0x in F0x)
                return null;
            return jl4p[u0x] || ""
        };
        var bYg2x = function(u0x, dx2x) {
            var cA1x = dx2x;
            switch (u0x) {
            case "readystatechange":
                cA1x = function(d0x) {
                    var F0x = h0x.X1x(d0x) || this;
                    if (F0x.readyState == "loaded" || F0x.readyState == "complete") {
                        d0x.target = F0x;
                        dx2x.call(F0x, d0x)
                    }
                }
                ;
                break;
            case "propertychange":
                cA1x = function(d0x) {
                    var F0x = h0x.X1x(d0x) || this;
                    if ("value"in F0x && d0x.propertyName == "value") {
                        d0x.target = F0x;
                        dx2x.call(F0x, d0x)
                    }
                }
                ;
                break
            }
            return cA1x
        };
        return be1x.BF9w.eH2x(function(d0x) {
            var bf1x = be1x.but3x.apply(be1x, d0x.args);
            if (!bf1x) {
                d0x.stopped = !0;
                return
            }
            var u0x = bYb2x(bf1x[0], bf1x[1]);
            if (!!u0x) {
                d0x.stopped = !0;
                bf1x[4] = bf1x[1];
                bf1x[1] = u0x;
                if (!!bf1x[2]) {
                    bf1x[5] = bf1x[2];
                    bf1x[2] = bYg2x(bf1x[1], bf1x[2])
                }
                d0x.value = bf1x
            }
        }, function(d0x) {
            var bf1x = d0x.value;
            if (!bf1x[0] || !k0x.gK3x(bf1x[2]))
                return;
            if (!k0x.gK3x(bf1x[5]))
                bf1x[5] = bf1x[2];
            bf1x[2] = bf1x[2].f0x(bf1x[0])
        })
    }();
    be1x.bul3x = be1x.bul3x.eH2x(function(d0x) {
        var bf1x = d0x.args;
        if (!!btv3x[bf1x[1]] || !document.addEventListener) {
            d0x.stopped = !0;
            bf1x[0].attachEvent("on" + bf1x[1], bf1x[2])
        }
    });
    be1x.bdr8j = be1x.bdr8j.eH2x(function(d0x) {
        var bf1x = d0x.args;
        if (!!btv3x[bf1x[1]] || !document.removeEventListener) {
            d0x.stopped = !0;
            bf1x[0].detachEvent("on" + bf1x[1], bf1x[2])
        }
    });
    be1x.buh3x = be1x.buh3x.eH2x(function(d0x) {
        if (!document.createEvent) {
            d0x.stopped = !0;
            var bf1x = d0x.args
              , bTU1x = document.createEventObject();
            NEJ.X(bTU1x, bf1x[2]);
            try {
                bf1x[0].fireEvent("on" + bf1x[1], bTU1x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    be1x.buc3x = be1x.buc3x.eH2x(function(d0x) {
        var bf1x = d0x.args
          , W1x = bf1x[1].toLowerCase();
        if (W1x == "opacity" && !(W1x in document.body.style)) {
            bf1x[1] = "filter";
            bf1x[2] = "alpha(opacity=" + bf1x[2] * 100 + ")"
        }
    });
    be1x.btR3x = function() {
        var fo2x = 30;
        return be1x.btR3x.eH2x(function(d0x) {
            var F0x = d0x.args[0];
            if (!F0x.styleSheet)
                return;
            d0x.stopped = !0;
            var km4q = d0x.args[1];
            var i0x = document.styleSheets;
            if (i0x.length > fo2x) {
                F0x = i0x[fo2x];
                km4q = F0x.cssText + km4q
            } else {
                F0x = F0x.styleSheet
            }
            F0x.cssText = km4q
        })
    }();
    be1x.btQ3x = be1x.btQ3x.eH2x(function(d0x) {
        var bf1x = d0x.args
          , zH9y = bf1x[0].sheet;
        if (!!zH9y)
            return;
        d0x.stopped = !0;
        var zH9y = bf1x[0].styleSheet
          , bq1x = zH9y.rules.length
          , bs1x = bf1x[1].split(/[\{\}]/);
        zH9y.addRule(bs1x[0], bs1x[1], bq1x);
        d0x.value = zH9y.rules[bq1x]
    });
    be1x.bvy4C = function() {
        var DL0x = function(ed2x, d0x) {
            a9j.x0x(h0x.X1x(d0x), ed2x)
        };
        return be1x.bvy4C.eH2x(function(d0x) {
            if (O0x.dr2x.release >= "4.0")
                return;
            var bf1x = d0x.args;
            if (bf1x[1] != 1) {
                h0x.s0x(bf1x[0], "blur", DL0x.f0x(null, bf1x[2]));
                bf1x[1] = -1
            }
        })
    }();
    be1x.WF5K = function(WL5Q) {
        return !0
    }
    ;
    be1x.btx3x = be1x.btx3x.eH2x(function(d0x) {
        var bf1x = d0x.args
          , g0x = (bf1x[0].attributes || bb1x)[bf1x[1]];
        if (!!g0x) {
            d0x.stopped = !0;
            d0x.value = g0x.value
        }
    }, function(d0x) {
        var bf1x = d0x.args;
        if (bf1x[1] == "maxlength" && d0x.value == 2147483647)
            d0x.value = ""
    });
    if (O0x.dr2x.release < 5) {
        be1x.buy4C = function() {
            var eg2x, eO2x, kt4x = [], bth3x = "cb-" + +(new Date), bo1x = '<script>parent.nej.h["' + bth3x + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bBY5d = function() {
                eg2x = window.clearTimeout(eg2x);
                if (!kt4x.length)
                    return;
                var dR2x = kt4x.shift();
                try {
                    var xv8n = eO2x.contentWindow.document;
                    xv8n.open();
                    xv8n.write("<head><title>");
                    xv8n.write(document.title);
                    xv8n.write("</title>");
                    xv8n.write(bo1x.replace("#<HASH>", encodeURIComponent(dR2x)));
                    xv8n.write("</head><body></body>");
                    if (location.hostname != document.domain)
                        xv8n.domain = document.domain;
                    xv8n.close();
                    be1x[bth3x] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    kt4x.unshift(dR2x)
                }
                eg2x = window.setTimeout(bBY5d, 50)
            };
            return be1x.buy4C.eH2x(function(d0x) {
                d0x.stopped = !0;
                var dR2x = d0x.args[0];
                if (!!be1x[bth3x] || !eO2x && !dR2x)
                    return;
                kt4x.push(dR2x);
                if (!eO2x)
                    eO2x = a9j.YH6B();
                bBY5d()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
}
)();
(function() {
    var c0x = NEJ.P
      , h0x = c0x("nej.v")
      , be1x = c0x("nej.h")
      , O0x = c0x("nej.p")
      , YW6Q = O0x.bMe8W;
    if (O0x.nB5G.gecko)
        return;
    var Qt3x = function() {
        YW6Q.css3d = YW6Q.css3d || "MozPerspective"in document.body.style;
        if (!document.body.insertAdjacentElement)
            HTMLElement.prototype.insertAdjacentElement = function(iP3x, F0x) {
                if (!iP3x || !F0x)
                    return;
                switch (iP3x) {
                case "beforeEnd":
                    this.appendChild(F0x);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(F0x, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(F0x) : this.insertBefore(F0x, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(F0x) : this.parentNode.insertBefore(F0x, this.nextSibling);
                    return
                }
            }
            ;
        if (!("innerText"in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(bo1x) {
                this.textContent = bo1x
            })
        }
    };
    be1x.BF9w = function() {
        var gL3x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return be1x.BF9w.eH2x(function(d0x) {
            var bf1x = d0x.args;
            if (gL3x.test(bf1x[1] || "")) {
                d0x.stopped = !0;
                d0x.value = bf1x
            }
        })
    }();
    be1x.bXb2x = function() {
        var bYi2x = function(d0x) {
            h0x.bg1x(d0x);
            h0x.X1x(d0x).control.click()
        };
        return function(F0x) {
            h0x.s0x(F0x, "click", bYi2x)
        }
    }();
    Qt3x()
}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , be1x = c0x("nej.h");
    var Zi6c = function() {
        var mM5R = !!document.body.classList;
        return function() {
            return mM5R
        }
    }();
    var bFw6q = function() {
        var df2x = /\s+/g;
        return function(fP3x) {
            fP3x = (fP3x || "").trim();
            return !fP3x ? null : new RegExp("(\\s|^)(?:" + fP3x.replace(df2x, "|") + ")(?=\\s|$)","g")
        }
    }();
    be1x.Ux5C = be1x.Ux5C.eH2x(function(d0x) {
        if (Zi6c())
            return;
        d0x.stopped = !0;
        var bf1x = d0x.args
          , F0x = a9j.B0x(bf1x[0]);
        if (!F0x || !bf1x[1] && !bf1x[2])
            return;
        var fP3x = F0x.className || "";
        var Iy1x = " " + (bf1x[2] || "")
          , Iz1x = bFw6q((bf1x[1] || "") + Iy1x);
        !!Iz1x && (fP3x = fP3x.replace(Iz1x, "$1"));
        F0x.className = (fP3x + Iy1x).replace(/\s+/g, " ").trim()
    });
    be1x.bwb4f = be1x.bwb4f.eH2x(function(d0x) {
        if (Zi6c())
            return;
        d0x.stopped = !0;
        var bf1x = d0x.args;
        be1x.Ux5C(bf1x[0], "", bf1x[1])
    });
    be1x.bvV4Z = be1x.bvV4Z.eH2x(function(d0x) {
        if (Zi6c())
            return;
        d0x.stopped = !0;
        var bf1x = d0x.args;
        be1x.Ux5C(bf1x[0], bf1x[1], "")
    });
    be1x.bvO4S = be1x.bvO4S.eH2x(function(d0x) {
        if (Zi6c())
            return;
        d0x.stopped = !0;
        var bf1x = d0x.args
          , F0x = a9j.B0x(bf1x[0]);
        if (!F0x) {
            d0x.value = !1;
            return
        }
        var df2x = bFw6q(bf1x[1]);
        d0x.value = !df2x ? !1 : df2x.test(F0x.className || "")
    })
}
)();
(function() {
    var c0x = NEJ.P
      , O0x = c0x("nej.p")
      , be1x = c0x("nej.h");
    if (O0x.nB5G.webkit)
        return;
    be1x.WF5K = function(WL5Q) {
        return !0
    }
}
)();
(function() {
    var c0x = NEJ.P
      , be1x = c0x("nej.h")
      , a9j = c0x("nej.e")
      , k0x = c0x("nej.u")
      , h0x = c0x("nej.v")
      , cZ1x = c0x("nej.x")
      , R0x = {};
    var bFG6A = function(F0x) {
        F0x = a9j.B0x(F0x);
        if (!F0x || !R0x[F0x.id])
            return;
        var Zj6d = !0
          , C0x = F0x.id;
        k0x.eI2x(R0x[C0x], function() {
            Zj6d = !1;
            return !0
        });
        if (Zj6d)
            delete R0x[C0x]
    };
    h0x.s0x = cZ1x.s0x = function() {
        var bZe2x = function() {
            var bf1x = be1x.BF9w.apply(be1x, arguments);
            if (!bf1x || !bf1x[2])
                return;
            var uo7h = a9j.lP4T(bf1x[0])
              , pk5p = R0x[uo7h] || {};
            R0x[uo7h] = pk5p;
            uo7h = bf1x[4] || bf1x[1];
            var BP9G = pk5p[uo7h] || [];
            pk5p[uo7h] = BP9G;
            BP9G.push({
                type: bf1x[1],
                func: bf1x[2],
                capt: !!bf1x[3],
                sfun: bf1x[5] || bf1x[2]
            });
            return bf1x.slice(0, 4)
        };
        return function() {
            var bf1x = bZe2x.apply(null, arguments);
            if (!!bf1x)
                be1x.bul3x.apply(be1x, bf1x);
            return this
        }
    }();
    h0x.mo4s = cZ1x.mo4s = function() {
        var bZf2x = function() {
            var tG7z = arguments
              , uo7h = a9j.lP4T(tG7z[0])
              , pk5p = R0x[uo7h]
              , u0x = (tG7z[1] || "").toLowerCase()
              , d0x = tG7z[2];
            if (!pk5p || !u0x || !d0x)
                return;
            pk5p = pk5p[u0x];
            if (!pk5p)
                return;
            var bZg2x = !!tG7z[3]
              , r0x = k0x.di2x(pk5p, function(jl4p) {
                return d0x == jl4p.sfun && bZg2x == jl4p.capt
            });
            if (r0x < 0)
                return;
            var jl4p = pk5p.splice(r0x, 1)[0];
            return !jl4p ? null : [a9j.B0x(uo7h), jl4p.type, jl4p.func, jl4p.capt]
        };
        return function() {
            var bf1x = bZf2x.apply(null, arguments);
            if (!!bf1x) {
                be1x.bdr8j.apply(be1x, bf1x);
                bFG6A(bf1x[0])
            }
            return this
        }
    }();
    h0x.he3x = cZ1x.he3x = function() {
        var bKB8t = function() {
            var tG7z = arguments
              , uo7h = a9j.lP4T(tG7z[0])
              , pk5p = R0x[uo7h]
              , BP9G = (tG7z[1] || "").toLowerCase();
            if (!pk5p || !BP9G)
                return;
            var F0x = a9j.B0x(uo7h);
            k0x.nk5p(pk5p[BP9G], function(jl4p, r0x, i0x) {
                be1x.bdr8j(F0x, jl4p.type, jl4p.func, jl4p.capt);
                i0x.splice(r0x, 1)
            });
            delete pk5p[BP9G]
        };
        var bZh2x = function(F0x) {
            F0x = a9j.B0x(F0x);
            if (!F0x)
                return;
            var C0x = F0x.id;
            k0x.eI2x(R0x[C0x], function(i0x, u0x) {
                bKB8t(C0x, u0x)
            });
            delete R0x[C0x]
        };
        return function(F0x, u0x) {
            !u0x ? bZh2x(F0x) : bKB8t(F0x, u0x);
            bFG6A(F0x);
            return this
        }
    }();
    h0x.X1x = function() {
        var bsH3x;
        var Jl1x = function(W1x, F0x) {
            var bs1x = W1x.split(":");
            if (bs1x.length > 1) {
                if (!bsH3x)
                    bsH3x = {
                        c: a9j.bE1x,
                        d: a9j.t0x,
                        a: a9j.gJ3x
                    };
                var Jm1x = bsH3x[bs1x[0]];
                if (!!Jm1x)
                    return !!Jm1x(F0x, bs1x[1]);
                W1x = bs1x[1]
            }
            return !!a9j.gJ3x(F0x, W1x) || !!a9j.t0x(F0x, W1x) || a9j.bE1x(F0x, W1x)
        };
        return function(d0x) {
            if (!d0x)
                return null;
            var F0x = d0x.target || d0x.srcElement
              , dZ2x = arguments[1];
            if (!dZ2x)
                return F0x;
            if (k0x.fC2x(dZ2x))
                dZ2x = Jl1x.f0x(null, dZ2x);
            if (k0x.gK3x(dZ2x)) {
                while (F0x) {
                    if (!!dZ2x(F0x))
                        return F0x;
                    F0x = F0x.parentNode
                }
                return null
            }
            return F0x
        }
    }();
    h0x.bg1x = function(d0x) {
        h0x.tW7P(d0x);
        h0x.cn1x(d0x);
        return this
    }
    ;
    h0x.tW7P = function(d0x) {
        if (!!d0x) {
            !!d0x.stopPropagation ? d0x.stopPropagation() : d0x.cancelBubble = !0
        }
        return this
    }
    ;
    h0x.cn1x = function(d0x) {
        if (!!d0x) {
            !!d0x.preventDefault ? d0x.preventDefault() : d0x.returnValue = !1
        }
        return this
    }
    ;
    h0x.cJG1x = function() {
        var ru6o = !1;
        var bZv2x = function() {
            if (ru6o)
                return;
            ru6o = !0;
            h0x.s0x(document, "click", bZK2x, !0)
        };
        var bZK2x = function(d0x) {
            var F0x = h0x.X1x(d0x)
              , bZW2x = a9j.t0x(F0x, "stopped");
            if (bZW2x == "true") {
                h0x.bg1x(d0x);
                a9j.t0x(F0x, "stopped", "false")
            }
        };
        return function(d0x) {
            if (!d0x)
                return;
            if (d0x.type == "click") {
                h0x.bg1x(d0x);
                return
            }
            bZv2x();
            a9j.t0x(h0x.X1x(d0x), "stopped", "true")
        }
    }();
    h0x.jG4K = function(d0x) {
        return d0x.pageX != null ? d0x.pageX : d0x.clientX + a9j.oy5D().scrollLeft
    }
    ;
    h0x.lZ4d = function(d0x) {
        return d0x.pageY != null ? d0x.pageY : d0x.clientY + a9j.oy5D().scrollTop
    }
    ;
    h0x.z0x = cZ1x.z0x = function(F0x, u0x, e0x) {
        var bf1x = be1x.BF9w(F0x, u0x);
        if (!!bf1x)
            be1x.buh3x(bf1x[0], bf1x[1], e0x);
        return this
    }
    ;
    c0x("dbg").dumpEV = function() {
        return R0x
    }
    ;
    cZ1x.isChange = !0
}
)();
(function() {
    var o = !0
      , w = null;
    (function(B) {
        function v(a) {
            if ("bug-string-char-index" == a)
                return "a" != "a"[0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify
                      , b = "function" == typeof d && l;
                    if (b) {
                        (f = function() {
                            return 1
                        }
                        ).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c)
                        return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a)
                        try {
                            if (0 === a("0") && !a(!1)) {
                                f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                var e = 5 == f.a.length && 1 === f.a[0];
                                if (e) {
                                    try {
                                        e = !a('"\t"')
                                    } catch (g) {}
                                    if (e)
                                        try {
                                            e = 1 !== a("01")
                                        } catch (i) {}
                                }
                            }
                        } catch (O) {
                            e = !1
                        }
                    if (!c)
                        return e
                }
                return b && e
            }
        }
        var m = {}.toString, p, C, r, D = typeof define === "function" && define.amd, k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify,
        k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l)
                var t = Math.floor
                  , J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                  , z = function(a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty))
                p = function(a) {
                    var f = {}, c;
                    if ((f.__proto__ = w,
                    f.__proto__ = {
                        toString: 1
                    },
                    f).toString != m)
                        p = function(a) {
                            var f = this.__proto__
                              , a = a in (this.__proto__ = w,
                            this);
                            this.__proto__ = f;
                            return a
                        }
                        ;
                    else {
                        c = f.constructor;
                        p = function(a) {
                            var f = (this.constructor || c).prototype;
                            return a in this && !(a in f && this[a] === f[a])
                        }
                    }
                    f = w;
                    return p.call(this, a)
                }
                ;
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function(a, f) {
                var c = 0, b, h, n;
                (b = function() {
                    this.valueOf = 0
                }
                ).prototype.valueOf = 0;
                h = new b;
                for (n in h)
                    p.call(h, n) && c++;
                b = h = w;
                if (c)
                    c = c == 2 ? function(a, f) {
                        var c = {}, b = m.call(a) == "[object Function]", d;
                        for (d in a)
                            !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                    }
                    : function(a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        for (b in a)
                            !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                        (d || p.call(a, b = "constructor")) && f(b)
                    }
                    ;
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function(a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a)
                            !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b))
                            ;
                    }
                }
                c(a, f)
            }
            ;
            if (!v("json-stringify")) {
                var L = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                }
                  , u = function(a, f) {
                    return ("000000" + (f || 0)).slice(-a)
                }
                  , G = function(a) {
                    var f = '"', b = 0, d = a.length, h = d > 10 && s, n;
                    for (h && (n = a.split("")); b < d; b++) {
                        var e = a.charCodeAt(b);
                        switch (e) {
                        case 8:
                        case 9:
                        case 10:
                        case 12:
                        case 13:
                        case 34:
                        case 92:
                            f = f + L[e];
                            break;
                        default:
                            if (e < 32) {
                                f = f + ("\\u00" + u(2, e.toString(16)));
                                break
                            }
                            f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                        }
                    }
                    return f + '"'
                }
                  , E = function(a, b, c, d, h, n, e) {
                    var g = b[a], i, j, k, l, q, s, v, x, y;
                    try {
                        g = b[a]
                    } catch (A) {}
                    if (typeof g == "object" && g) {
                        i = m.call(g);
                        if (i == "[object Date]" && !p.call(g, "toJSON"))
                            if (g > -1 / 0 && g < 1 / 0) {
                                if (z) {
                                    k = t(g / 864e5);
                                    for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++)
                                        ;
                                    for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++)
                                        ;
                                    k = 1 + k - z(i, j);
                                    l = (g % 864e5 + 864e5) % 864e5;
                                    q = t(l / 36e5) % 24;
                                    s = t(l / 6e4) % 60;
                                    v = t(l / 1e3) % 60;
                                    l = l % 1e3
                                } else {
                                    i = g.getUTCFullYear();
                                    j = g.getUTCMonth();
                                    k = g.getUTCDate();
                                    q = g.getUTCHours();
                                    s = g.getUTCMinutes();
                                    v = g.getUTCSeconds();
                                    l = g.getUTCMilliseconds()
                                }
                                g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                            } else
                                g = w;
                        else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON")))
                            g = g.toJSON(a)
                    }
                    c && (g = c.call(b, a, g));
                    if (g === w)
                        return "null";
                    i = m.call(g);
                    if (i == "[object Boolean]")
                        return "" + g;
                    if (i == "[object Number]")
                        return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                    if (i == "[object String]")
                        return G("" + g);
                    if (typeof g == "object") {
                        for (a = e.length; a--; )
                            if (e[a] === g)
                                throw TypeError();
                        e.push(g);
                        x = [];
                        b = n;
                        n = n + h;
                        if (i == "[object Array]") {
                            j = 0;
                            for (a = g.length; j < a; y || (y = o),
                            j++) {
                                i = E(j, g, c, d, h, n, e);
                                x.push(i === r ? "null" : i)
                            }
                            a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                        } else {
                            C(d || g, function(a) {
                                var b = E(a, g, c, d, h, n, e);
                                b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                y || (y = o)
                            });
                            a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                        }
                        e.pop();
                        return a
                    }
                };
                k.stringify = function(a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]")
                            h = b;
                        else if (m.call(b) == "[object Array]") {
                            j = {};
                            for (var e = 0, g = b.length, i; e < g; i = b[e++],
                            (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1))
                                ;
                        }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ")
                                    ;
                            }
                        } else
                            m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {},
                    i[""] = a,
                    i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode, N = {
                    92: "\\",
                    34: '"',
                    47: "/",
                    98: "\b",
                    116: "\t",
                    110: "\n",
                    102: "\f",
                    114: "\r"
                }, b, A, j = function() {
                    b = A = w;
                    throw SyntaxError()
                }, q = function() {
                    for (var a = A, f = a.length, c, d, h, k, e; b < f; ) {
                        e = a.charCodeAt(b);
                        switch (e) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            b++;
                            break;
                        case 123:
                        case 125:
                        case 91:
                        case 93:
                        case 58:
                        case 44:
                            c = s ? a.charAt(b) : a[b];
                            b++;
                            return c;
                        case 34:
                            c = "@";
                            for (b++; b < f; ) {
                                e = a.charCodeAt(b);
                                if (e < 32)
                                    j();
                                else if (e == 92) {
                                    e = a.charCodeAt(++b);
                                    switch (e) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        c = c + N[e];
                                        b++;
                                        break;
                                    case 117:
                                        d = ++b;
                                        for (h = b + 4; b < h; b++) {
                                            e = a.charCodeAt(b);
                                            e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                        }
                                        c = c + M("0x" + a.slice(d, b));
                                        break;
                                    default:
                                        j()
                                    }
                                } else {
                                    if (e == 34)
                                        break;
                                    e = a.charCodeAt(b);
                                    for (d = b; e >= 32 && e != 92 && e != 34; )
                                        e = a.charCodeAt(++b);
                                    c = c + a.slice(d, b)
                                }
                            }
                            if (a.charCodeAt(b) == 34) {
                                b++;
                                return c
                            }
                            j();
                        default:
                            d = b;
                            if (e == 45) {
                                k = o;
                                e = a.charCodeAt(++b)
                            }
                            if (e >= 48 && e <= 57) {
                                for (e == 48 && (e = a.charCodeAt(b + 1),
                                e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b),
                                e >= 48 && e <= 57); b++)
                                    ;
                                if (a.charCodeAt(b) == 46) {
                                    for (h = ++b; h < f && (e = a.charCodeAt(h),
                                    e >= 48 && e <= 57); h++)
                                        ;
                                    h == b && j();
                                    b = h
                                }
                                e = a.charCodeAt(b);
                                if (e == 101 || e == 69) {
                                    e = a.charCodeAt(++b);
                                    (e == 43 || e == 45) && b++;
                                    for (h = b; h < f && (e = a.charCodeAt(h),
                                    e >= 48 && e <= 57); h++)
                                        ;
                                    h == b && j();
                                    b = h
                                }
                                return +a.slice(d, b)
                            }
                            k && j();
                            if (a.slice(b, b + 4) == "true") {
                                b = b + 4;
                                return o
                            }
                            if (a.slice(b, b + 5) == "false") {
                                b = b + 5;
                                return false
                            }
                            if (a.slice(b, b + 4) == "null") {
                                b = b + 4;
                                return w
                            }
                            j()
                        }
                    }
                    return "$"
                }, F = function(a) {
                    var b, c;
                    a == "$" && j();
                    if (typeof a == "string") {
                        if ((s ? a.charAt(0) : a[0]) == "@")
                            return a.slice(1);
                        if (a == "[") {
                            for (b = []; ; c || (c = o)) {
                                a = q();
                                if (a == "]")
                                    break;
                                if (c)
                                    if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else
                                        j();
                                a == "," && j();
                                b.push(F(a))
                            }
                            return b
                        }
                        if (a == "{") {
                            for (b = {}; ; c || (c = o)) {
                                a = q();
                                if (a == "}")
                                    break;
                                if (c)
                                    if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else
                                        j();
                                (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                b[a.slice(1)] = F(q())
                            }
                            return b
                        }
                        j()
                    }
                    return a
                }, I = function(a, b, c) {
                    c = H(a, b, c);
                    c === r ? delete a[b] : a[b] = c
                }, H = function(a, b, c) {
                    var d = a[b], h;
                    if (typeof d == "object" && d)
                        if (m.call(d) == "[object Array]")
                            for (h = d.length; h--; )
                                I(d, h, c);
                        else
                            C(d, function(a) {
                                I(d, a, c)
                            });
                    return c.call(a, b, d)
                };
                k.parse = function(a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {},
                    d[""] = c,
                    d), "", f) : c
                }
            }
        }
        D && define(function() {
            return k
        })
    }
    )(this)
}
)();
(function() {
    var c0x = NEJ.P
      , O0x = c0x("nej.p");
    if (O0x.nB5G.trident0)
        return;
    JSON.parse = JSON.parse.eH2x(function(d0x) {
        var cO1x = d0x.args[0] || "";
        if (cO1x.length >= 5e5) {
            d0x.stopped = !0;
            d0x.value = eval("(" + cO1x + ")")
        }
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, em2x = c0x("nej.g"), a9j = c0x("nej.e"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), be1x = c0x("nej.h"), cZ1x = c0x("nej.x"), Jt1x, brW3x = {}, R0x = document.createDocumentFragment();
    a9j.lP4T = cZ1x.lP4T = function(F0x) {
        F0x = a9j.B0x(F0x);
        if (!F0x)
            return;
        var C0x = !!F0x.id ? F0x.id : "auto-id-" + k0x.TV4Z(16);
        F0x.id = C0x;
        if (a9j.B0x(C0x) != F0x)
            brW3x[C0x] = F0x;
        return C0x
    }
    ;
    a9j.B0x = cZ1x.B0x = function(F0x) {
        var g0x = brW3x["" + F0x];
        if (!!g0x)
            return g0x;
        if (!k0x.fC2x(F0x) && !k0x.sN7G(F0x))
            return F0x;
        return document.getElementById(F0x)
    }
    ;
    a9j.dk2x = cZ1x.dk2x = function(F0x, ed2x) {
        F0x = a9j.B0x(F0x);
        if (!F0x)
            return null;
        var i0x = be1x.bwi4m(F0x);
        if (!!ed2x)
            k0x.nk5p(i0x, function(g0x, r0x) {
                if (!a9j.bE1x(g0x, ed2x))
                    i0x.splice(r0x, 1)
            });
        return i0x
    }
    ;
    a9j.H0x = cZ1x.H0x = function(F0x, fP3x) {
        F0x = a9j.B0x(F0x);
        return !F0x ? null : be1x.bwc4g(F0x, fP3x.trim())
    }
    ;
    a9j.bFa6U = cZ1x.bFa6U = function(F0x) {
        F0x = a9j.B0x(F0x);
        if (!!F0x) {
            F0x = F0x.parentNode;
            while (!!F0x) {
                if (F0x.scrollHeight > F0x.clientHeight)
                    break;
                F0x = F0x.parentNode
            }
            if (!!F0x)
                return F0x
        }
        var pk5p = document.body.scrollHeight
          , BP9G = document.documentElement.scrollHeight;
        return BP9G >= pk5p ? document.documentElement : document.body
    }
    ;
    a9j.oy5D = function() {
        var bFs6m = function(i0x) {
            var m0x = 0;
            k0x.bd1x(i0x, function(eG2x) {
                if (!eG2x)
                    return;
                if (!m0x) {
                    m0x = eG2x
                } else {
                    m0x = Math.min(m0x, eG2x)
                }
            });
            return m0x
        };
        return function(xv8n) {
            var JB2x = xv8n || document
              , By9p = JB2x.body
              , BA9r = JB2x.documentElement
              , m0x = {
                scrollTop: Math.max(By9p.scrollTop, BA9r.scrollTop),
                scrollLeft: Math.max(By9p.scrollLeft, BA9r.scrollLeft),
                clientWidth: bFs6m([By9p.clientWidth, By9p.offsetWidth, BA9r.clientWidth, BA9r.offsetWidth]),
                clientHeight: bFs6m([By9p.clientHeight, By9p.offsetHeight, BA9r.clientHeight, BA9r.offsetHeight])
            };
            m0x.scrollWidth = Math.max(m0x.clientWidth, By9p.scrollWidth, BA9r.scrollWidth);
            m0x.scrollHeight = Math.max(m0x.clientHeight, By9p.scrollHeight, BA9r.scrollHeight);
            return m0x
        }
    }();
    a9j.cJA1x = function(fo2x, pq5v) {
        var m0x = NEJ.X({}, pq5v)
          , bHp7i = fo2x.width / fo2x.height
          , beE8w = pq5v.width / pq5v.height;
        if (bHp7i > beE8w && pq5v.height > fo2x.height) {
            m0x.height = fo2x.height;
            m0x.width = m0x.height * beE8w
        }
        if (bHp7i < beE8w && pq5v.width > fo2x.width) {
            m0x.width = fo2x.width;
            m0x.height = m0x.width / beE8w
        }
        return m0x
    }
    ;
    a9j.cJz1x = function() {
        var df2x = /\s+/;
        var vj7c = {
            left: function() {
                return 0
            },
            center: function(hF3x, pq5v) {
                return (hF3x.width - pq5v.width) / 2
            },
            right: function(hF3x, pq5v) {
                return hF3x.width - pq5v.width
            },
            top: function() {
                return 0
            },
            middle: function(hF3x, pq5v) {
                return (hF3x.height - pq5v.height) / 2
            },
            bottom: function(hF3x, pq5v) {
                return hF3x.height - pq5v.height
            }
        };
        return function(hF3x, pq5v, or5w) {
            var m0x = {}
              , bs1x = (or5w || "").split(df2x)
              , gy3x = vj7c[bs1x[1]] || vj7c.middle
              , gW3x = vj7c[bs1x[0]] || vj7c.center;
            m0x.top = gy3x(hF3x, pq5v);
            m0x.left = gW3x(hF3x, pq5v);
            return m0x
        }
    }();
    a9j.sO7H = cZ1x.sO7H = function(F0x, ed2x) {
        be1x.bvN4R(F0x, ed2x || a9j.t0x(F0x, "hover") || "js-hover");
        return this
    }
    ;
    a9j.JF2x = cZ1x.JF2x = function(F0x) {
        F0x = a9j.B0x(F0x);
        if (!F0x)
            return;
        be1x.bvG4K(F0x)
    }
    ;
    a9j.caw3x = cZ1x.caw3x = function() {
        var R0x = {}
          , bKU8M = 2;
        var caQ3x = function(C0x, ed2x, d0x) {
            R0x[C0x] = [h0x.jG4K(d0x), h0x.lZ4d(d0x)];
            a9j.y0x(C0x, ed2x)
        };
        var cbo3x = function(C0x, ed2x, d0x) {
            var bM1x = R0x[C0x];
            if (!k0x.eL2x(bM1x))
                return;
            var cbF3x = Math.abs(h0x.jG4K(d0x) - bM1x[0])
              , cbH3x = Math.abs(h0x.lZ4d(d0x) - bM1x[1]);
            if (cbF3x > bKU8M || cbH3x > bKU8M)
                bqA3x(C0x, ed2x)
        };
        var bqA3x = function(C0x, ed2x) {
            if (k0x.eL2x(R0x[C0x])) {
                R0x[C0x] = -1;
                a9j.x0x(C0x, ed2x)
            }
        };
        return function(F0x, ed2x) {
            var C0x = a9j.lP4T(F0x);
            if (!C0x || R0x[C0x] != null)
                return;
            R0x[C0x] = -1;
            ed2x = ed2x || a9j.t0x(C0x, "highlight") || "js-highlight";
            h0x.s0x(C0x, "touchstart", caQ3x.f0x(null, C0x, ed2x));
            h0x.s0x(document, "touchmove", cbo3x.f0x(null, C0x, ed2x));
            h0x.s0x(document, "touchend", bqA3x.f0x(null, C0x, ed2x));
            h0x.s0x(document, "touchcancel", bqA3x.f0x(null, C0x, ed2x))
        }
    }();
    a9j.AE9v = cZ1x.AE9v = function() {
        var cbX3x = function(C0x, ed2x, cbY3x) {
            var F0x = a9j.B0x(C0x)
              , d0x = {
                clazz: ed2x,
                target: F0x
            };
            if (a9j.bE1x(F0x, ed2x)) {
                d0x.toggled = !1;
                a9j.x0x(F0x, ed2x)
            } else {
                d0x.toggled = !0;
                a9j.y0x(F0x, ed2x)
            }
            cbY3x.call(null, d0x)
        };
        return function(F0x, e0x) {
            F0x = a9j.B0x(F0x);
            if (!!F0x) {
                var in3x = {
                    ontoggle: br1x,
                    clazz: "js-toggle",
                    element: F0x.parentNode
                };
                if (k0x.fC2x(e0x)) {
                    var g0x = a9j.B0x(e0x);
                    !!g0x ? in3x.element = g0x : in3x.clazz = e0x
                } else {
                    NEJ.EX(in3x, e0x);
                    in3x.element = a9j.B0x(in3x.element)
                }
                var C0x = a9j.lP4T(in3x.element);
                h0x.s0x(F0x, "click", cbX3x.f0x(null, C0x, in3x.clazz, in3x.ontoggle || br1x))
            }
            return this
        }
    }();
    a9j.my4C = cZ1x.my4C = function(F0x, e0x) {
        F0x = a9j.B0x(F0x);
        if (!F0x)
            return;
        var fk2x = 0
          , ed2x = "js-focus";
        if (k0x.sN7G(e0x)) {
            fk2x = e0x
        } else if (k0x.fC2x(e0x)) {
            ed2x = e0x
        } else if (k0x.lG4K(e0x)) {
            fk2x = e0x.mode || fk2x;
            ed2x = e0x.clazz || ed2x
        }
        var D0x = parseInt(a9j.t0x(F0x, "mode"));
        if (!isNaN(D0x))
            fk2x = D0x;
        D0x = a9j.t0x(F0x, "focus");
        if (!!D0x)
            ed2x = D0x;
        be1x.bvy4C(F0x, fk2x, ed2x);
        return this
    }
    ;
    a9j.dj2x = function() {
        var bz1x = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function(fw2x, fP3x, bI1x) {
            var F0x = document.createElement(fw2x);
            NEJ.X(F0x, bz1x[fw2x.toLowerCase()]);
            if (!!fP3x)
                F0x.className = fP3x;
            bI1x = a9j.B0x(bI1x);
            if (!!bI1x)
                bI1x.appendChild(F0x);
            return F0x
        }
    }();
    a9j.YH6B = function() {
        var ccA3x = function() {
            if (location.hostname == document.domain)
                return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var cdc3x = function(W1x) {
            W1x = W1x.trim();
            if (!W1x)
                return a9j.dj2x("iframe");
            var eO2x;
            try {
                eO2x = document.createElement('<iframe name="' + W1x + '"></iframe>');
                eO2x.frameBorder = 0
            } catch (e) {
                eO2x = a9j.dj2x("iframe");
                eO2x.name = W1x
            }
            return eO2x
        };
        return function(e0x) {
            e0x = e0x || bb1x;
            var eO2x = cdc3x(e0x.name || "");
            if (!e0x.visible)
                eO2x.style.display = "none";
            if (k0x.gK3x(e0x.onload))
                h0x.s0x(eO2x, "load", function(d0x) {
                    if (!eO2x.src)
                        return;
                    h0x.he3x(eO2x, "load");
                    e0x.onload(d0x)
                });
            var bI1x = e0x.parent;
            if (k0x.gK3x(bI1x)) {
                try {
                    bI1x(eO2x)
                } catch (e) {}
            } else {
                (a9j.B0x(bI1x) || document.body).appendChild(eO2x)
            }
            var cV1x = e0x.src || ccA3x();
            window.setTimeout(function() {
                eO2x.src = cV1x
            }, 0);
            return eO2x
        }
    }();
    a9j.cL1x = cZ1x.cL1x = function() {
        var bTt1x = function(Af9W) {
            Af9W.src = em2x.bwt4x
        };
        var bUy1x = function(en2x) {
            en2x.src = "about:blank"
        };
        return function(F0x, cds3x) {
            F0x = a9j.B0x(F0x);
            if (!F0x)
                return this;
            if (!cds3x)
                h0x.he3x(F0x);
            delete brW3x[F0x.id];
            var fw2x = F0x.tagName;
            if (fw2x == "IFRAME") {
                bUy1x(F0x)
            } else if (fw2x == "IMG") {
                bTt1x(F0x)
            } else if (!!F0x.getElementsByTagName) {
                k0x.bd1x(F0x.getElementsByTagName("img"), bTt1x);
                k0x.bd1x(F0x.getElementsByTagName("iframe"), bUy1x)
            }
            if (!!F0x.parentNode) {
                F0x.parentNode.removeChild(F0x)
            }
            return this
        }
    }();
    a9j.mS5X = cZ1x.mS5X = function(F0x) {
        F0x = a9j.B0x(F0x);
        if (!!F0x)
            R0x.appendChild(F0x);
        return this
    }
    ;
    a9j.bVz1x = cZ1x.bVz1x = function(F0x) {
        F0x = a9j.B0x(F0x);
        if (!F0x)
            return;
        k0x.nk5p(F0x.childNodes, function(g0x) {
            a9j.cL1x(g0x)
        })
    }
    ;
    a9j.JW2x = cZ1x.JW2x = function() {
        var ed2x, gL3x = /\s+/;
        var cdL3x = function() {
            if (!!ed2x)
                return;
            ed2x = a9j.to7h(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a9j.bzT5Y()
        };
        return function(F0x, e0x) {
            F0x = a9j.B0x(F0x);
            if (!F0x)
                return;
            cdL3x();
            e0x = e0x || bb1x;
            var bI1x = F0x.parentNode;
            if (!a9j.bE1x(bI1x, ed2x)) {
                bI1x = a9j.dj2x("span", ed2x);
                F0x.insertAdjacentElement("beforeBegin", bI1x);
                bI1x.appendChild(F0x)
            }
            var bBk5p = e0x.nid || ""
              , g0x = a9j.H0x(bI1x, bBk5p || ed2x + "-show")[0];
            if (!g0x) {
                var ec2x = ((e0x.clazz || "") + " " + bBk5p).trim();
                ec2x = ed2x + "-show" + (!ec2x ? "" : " ") + ec2x;
                g0x = a9j.dj2x(e0x.tag || "span", ec2x);
                bI1x.appendChild(g0x)
            }
            var ec2x = e0x.clazz;
            if (!!ec2x) {
                ec2x = (ec2x || "").trim().split(gL3x)[0] + "-parent";
                a9j.y0x(bI1x, ec2x)
            }
            return g0x
        }
    }();
    a9j.t0x = cZ1x.t0x = function() {
        var bqi2x = {}
          , fw2x = "data-"
          , df2x = /\-(.{1})/gi;
        var Eh0x = function(F0x) {
            var C0x = a9j.lP4T(F0x);
            if (!!bqi2x[C0x])
                return;
            var bz1x = {};
            k0x.bd1x(F0x.attributes, function(g0x) {
                var K0x = g0x.nodeName;
                if (K0x.indexOf(fw2x) != 0)
                    return;
                K0x = K0x.replace(fw2x, "").replace(df2x, function($1, $2) {
                    return $2.toUpperCase()
                });
                bz1x[K0x] = g0x.nodeValue || ""
            });
            bqi2x[C0x] = bz1x
        };
        return function(F0x, K0x, D0x) {
            F0x = a9j.B0x(F0x);
            if (!F0x)
                return null;
            var XB6v = F0x.dataset;
            if (!XB6v) {
                Eh0x(F0x);
                XB6v = bqi2x[F0x.id]
            }
            if (D0x !== undefined)
                XB6v[K0x] = D0x;
            return XB6v[K0x]
        }
    }();
    a9j.gJ3x = cZ1x.gJ3x = function(F0x, W1x, D0x) {
        F0x = a9j.B0x(F0x);
        if (!F0x)
            return "";
        if (D0x !== undefined && !!F0x.setAttribute)
            F0x.setAttribute(W1x, D0x);
        return be1x.btx3x(F0x, W1x)
    }
    ;
    a9j.nR5W = function(dV2x) {
        var rK6E = document.createElement("div");
        rK6E.innerHTML = dV2x;
        var i0x = a9j.dk2x(rK6E);
        return i0x.length > 1 ? rK6E : i0x[0]
    }
    ;
    a9j.cdX3x = cZ1x.cdX3x = function(F0x) {
        F0x = a9j.B0x(F0x);
        return !F0x ? "" : be1x.buT4X(F0x)
    }
    ;
    a9j.bEb6V = function(CV0x) {
        CV0x = (CV0x || "").trim();
        return !CV0x ? null : be1x.buK4O(CV0x)
    }
    ;
    a9j.ces4w = function(cK1x, u0x) {
        cK1x = cK1x || "";
        switch (u0x) {
        case "xml":
            cK1x = a9j.bEb6V(cK1x);
            break;
        case "json":
            try {
                cK1x = JSON.parse(cK1x)
            } catch (ex) {
                cK1x = null
            }
            break
        }
        return cK1x
    }
    ;
    a9j.hU3x = cZ1x.hU3x = function() {
        var cfl4p = function(F0x) {
            return F0x == document.body || F0x == document.documentElement
        };
        return function(ee2x, nb5g) {
            ee2x = a9j.B0x(ee2x);
            if (!ee2x)
                return null;
            nb5g = a9j.B0x(nb5g) || null;
            var m0x = {
                x: 0,
                y: 0
            }, bpG2x, dq2x, Yx6r;
            while (!!ee2x && ee2x != nb5g) {
                bpG2x = cfl4p(ee2x);
                dq2x = bpG2x ? 0 : ee2x.scrollLeft;
                Yx6r = parseInt(a9j.dh2x(ee2x, "borderLeftWidth")) || 0;
                m0x.x += ee2x.offsetLeft + Yx6r - dq2x;
                dq2x = bpG2x ? 0 : ee2x.scrollTop;
                Yx6r = parseInt(a9j.dh2x(ee2x, "borderTopWidth")) || 0;
                m0x.y += ee2x.offsetTop + Yx6r - dq2x;
                ee2x = ee2x.offsetParent
            }
            return m0x
        }
    }();
    a9j.mX5c = cZ1x.mX5c = function(F0x) {
        var bi1x = a9j.hU3x(F0x);
        window.scrollTo(bi1x.x, bi1x.y);
        return this
    }
    ;
    a9j.cIY1x = function(sX7Q) {
        sX7Q = (sX7Q || "").trim();
        return be1x.bBR5W(sX7Q)
    }
    ;
    a9j.cfp4t = cZ1x.cfp4t = function(F0x, W1x, bz1x) {
        F0x = a9j.B0x(F0x);
        if (!F0x)
            return this;
        var D0x = be1x.bFY6S(W1x, bz1x);
        if (!D0x)
            return this;
        a9j.ba1x(F0x, "transform", D0x);
        return this
    }
    ;
    a9j.fb2x = cZ1x.fb2x = function(F0x, bz1x) {
        F0x = a9j.B0x(F0x);
        if (!!F0x)
            k0x.eI2x(bz1x, function(D0x, W1x) {
                a9j.ba1x(F0x, W1x, D0x)
            });
        return this
    }
    ;
    a9j.cfE4I = cZ1x.cfE4I = function(gf3x, e0x) {
        gf3x = a9j.B0x(gf3x);
        if (!gf3x)
            return {
                start: 0,
                end: 0
            };
        if (k0x.sN7G(e0x))
            e0x = {
                start: e0x,
                end: e0x
            };
        if (e0x != null) {
            if (e0x.end == null)
                e0x.end = e0x.start || 0;
            be1x.bvC4G(gf3x, e0x)
        } else {
            e0x = be1x.bvB4F(gf3x)
        }
        return e0x
    }
    ;
    a9j.ba1x = cZ1x.ba1x = function(F0x, W1x, D0x) {
        F0x = a9j.B0x(F0x);
        if (!!F0x)
            be1x.buc3x(F0x, W1x, D0x);
        return this
    }
    ;
    a9j.dh2x = cZ1x.dh2x = function(F0x, W1x) {
        F0x = a9j.B0x(F0x);
        if (!F0x)
            return "";
        var hi3x = !window.getComputedStyle ? F0x.currentStyle || bb1x : window.getComputedStyle(F0x, null);
        return hi3x[be1x.bJA7t(W1x)] || ""
    }
    ;
    a9j.bHG7z = function() {
        var df2x = /[\s\r\n]+/gi;
        return function(cj1x) {
            cj1x = (cj1x || "").trim().replace(df2x, " ");
            if (!cj1x)
                return;
            var g0x = a9j.dj2x("style");
            document.head.appendChild(g0x);
            be1x.btR3x(g0x, be1x.bWW2x(cj1x));
            return g0x
        }
    }();
    a9j.bHS7L = function(Av9m) {
        try {
            Av9m = Av9m.trim();
            if (!!Av9m)
                return (new Function(Av9m))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    }
    ;
    a9j.to7h = function() {
        var df2x = /#<.*?>/g
          , gG3x = +(new Date);
        return function(km4q) {
            if (!Jt1x)
                Jt1x = [];
            var fP3x = "auto-" + gG3x++;
            Jt1x.push(km4q.replace(df2x, fP3x));
            return fP3x
        }
    }();
    a9j.bzT5Y = function() {
        if (!!Jt1x) {
            a9j.bHG7z(Jt1x.join(""));
            Jt1x = null
        }
        return this
    }
    ;
    a9j.cIV1x = function(cj1x, km4q) {
        cj1x = a9j.B0x(cj1x);
        return !cj1x ? null : be1x.btQ3x(cj1x, km4q)
    }
    ;
    a9j.y0x = cZ1x.y0x = function() {
        be1x.bwb4f.apply(be1x, arguments);
        return this
    }
    ;
    a9j.x0x = cZ1x.x0x = function() {
        be1x.bvV4Z.apply(be1x, arguments);
        return this
    }
    ;
    a9j.fj2x = cZ1x.fj2x = function() {
        be1x.Ux5C.apply(be1x, arguments);
        return this
    }
    ;
    a9j.bE1x = cZ1x.bE1x = function() {
        return be1x.bvO4S.apply(be1x, arguments)
    }
    ;
    if (!document.head)
        document.head = document.getElementsByTagName("head")[0] || document.body;
    cZ1x.isChange = !0
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , fy2x = NEJ.R
      , br1x = NEJ.F
      , a9j = c0x("nej.e")
      , be1x = c0x("nej.h")
      , k0x = c0x("nej.u");
    var El0x = function(j0x, u0x) {
        try {
            u0x = u0x.toLowerCase();
            if (j0x === null)
                return u0x == "null";
            if (j0x === undefined)
                return u0x == "undefined";
            return bb1x.toString.call(j0x).toLowerCase() == "[object " + u0x + "]"
        } catch (e) {
            return !1
        }
    };
    k0x.gK3x = function(j0x) {
        return El0x(j0x, "function")
    }
    ;
    k0x.fC2x = function(j0x) {
        return El0x(j0x, "string")
    }
    ;
    k0x.sN7G = function(j0x) {
        return El0x(j0x, "number")
    }
    ;
    k0x.cIU1x = function(j0x) {
        return El0x(j0x, "boolean")
    }
    ;
    k0x.Em0x = function(j0x) {
        return El0x(j0x, "date")
    }
    ;
    k0x.eL2x = function(j0x) {
        return El0x(j0x, "array")
    }
    ;
    k0x.lG4K = function(j0x) {
        return El0x(j0x, "object")
    }
    ;
    k0x.fv2x = function() {
        var df2x = /[^\x00-\xfff]/g;
        return function(bo1x) {
            return ("" + (bo1x || "")).replace(df2x, "**").length
        }
    }();
    k0x.di2x = function(i0x, p0x) {
        var dZ2x = k0x.gK3x(p0x) ? p0x : function(D0x) {
            return D0x === p0x
        }
          , r0x = k0x.eI2x(i0x, dZ2x);
        return r0x != null ? r0x : -1
    }
    ;
    k0x.cIQ1x = function() {
        var bKM8E;
        var NS3x = function(i0x, pp5u, po5t) {
            if (pp5u > po5t)
                return -1;
            var Eq0x = Math.ceil((pp5u + po5t) / 2)
              , m0x = bKM8E(i0x[Eq0x], Eq0x, i0x);
            if (m0x == 0)
                return Eq0x;
            if (m0x < 0)
                return NS3x(i0x, pp5u, Eq0x - 1);
            return NS3x(i0x, Eq0x + 1, po5t)
        };
        return function(i0x, Jm1x) {
            bKM8E = Jm1x || br1x;
            return NS3x(i0x, 0, i0x.length - 1)
        }
    }();
    k0x.nk5p = function(i0x, cA1x, P0x) {
        if (!i0x || !i0x.length || !k0x.gK3x(cA1x))
            return null;
        for (var i = i0x.length - 1; i >= 0; i--)
            if (!!cA1x.call(P0x, i0x[i], i, i0x))
                return i;
        return null
    }
    ;
    k0x.bd1x = function(i0x, cA1x, P0x) {
        if (!i0x || !i0x.length || !k0x.gK3x(cA1x))
            return this;
        if (!!i0x.forEach) {
            i0x.forEach(cA1x, P0x);
            return this
        }
        for (var i = 0, l = i0x.length; i < l; i++)
            cA1x.call(P0x, i0x[i], i, i0x);
        return this
    }
    ;
    k0x.eI2x = function(i0x, cA1x, P0x) {
        if (!i0x || !k0x.gK3x(cA1x))
            return null;
        if (i0x.length != null) {
            if (i0x.length > 0)
                for (var i = 0, l = i0x.length; i < l; i++)
                    if (!!cA1x.call(P0x, i0x[i], i, i0x))
                        return i
        }
        if (k0x.lG4K(i0x)) {
            for (var x in i0x)
                if (i0x.hasOwnProperty(x) && !!cA1x.call(P0x, i0x[x], x, i0x))
                    return x
        }
        return null
    }
    ;
    k0x.cgp4t = function(jq4u, cgs4w, e0x) {
        jq4u = jq4u || [];
        e0x = e0x || bb1x;
        var bPr9i = !!e0x.union
          , xt8l = !!e0x.begin
          , Zu6o = e0x.compare
          , cgP4T = bPr9i && xt8l ? k0x.nk5p : k0x.bd1x;
        cgP4T(cgs4w, function(p0x) {
            if (!!Zu6o)
                Zu6o = Zu6o.eA2x(p0x);
            var r0x = k0x.di2x(jq4u, Zu6o || p0x);
            if (r0x >= 0)
                jq4u.splice(r0x, 1);
            if (bPr9i)
                jq4u[xt8l ? "unshift" : "push"](p0x)
        });
        return jq4u
    }
    ;
    k0x.Dq0x = function(bz1x, bo1x) {
        if (!bz1x || !bo1x || !bo1x.replace)
            return bo1x || "";
        return bo1x.replace(bz1x.r, function($1) {
            var m0x = bz1x[!bz1x.i ? $1.toLowerCase() : $1];
            return m0x != null ? m0x : $1
        })
    }
    ;
    k0x.dH2x = function() {
        var bz1x = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function(bo1x) {
            return k0x.Dq0x(bz1x, bo1x)
        }
    }();
    k0x.Dw0x = function() {
        var bz1x = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function(bo1x) {
            return k0x.Dq0x(bz1x, bo1x)
        }
    }();
    k0x.ih3x = function() {
        var bz1x = {
            i: !0,
            r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
        }
          , cgV4Z = ["上午", "下午"]
          , cgX4b = ["A.M.", "P.M."]
          , boE2x = ["日", "一", "二", "三", "四", "五", "六"]
          , chc4g = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
          , chI4M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var Oo3x = function(gX3x) {
            gX3x = parseInt(gX3x) || 0;
            return (gX3x < 10 ? "0" : "") + gX3x
        };
        var chO4S = function(qf6Z) {
            return qf6Z < 12 ? 0 : 1
        };
        return function(bA1x, Kr2x, cia4e) {
            if (!bA1x || !Kr2x)
                return "";
            bA1x = k0x.baa7T(bA1x);
            bz1x.yyyy = bA1x.getFullYear();
            bz1x.yy = ("" + bz1x.yyyy).substr(2);
            bz1x.M = bA1x.getMonth() + 1;
            bz1x.MM = Oo3x(bz1x.M);
            bz1x.eM = chI4M[bz1x.M - 1];
            bz1x.cM = chc4g[bz1x.M - 1];
            bz1x.d = bA1x.getDate();
            bz1x.dd = Oo3x(bz1x.d);
            bz1x.H = bA1x.getHours();
            bz1x.HH = Oo3x(bz1x.H);
            bz1x.m = bA1x.getMinutes();
            bz1x.mm = Oo3x(bz1x.m);
            bz1x.s = bA1x.getSeconds();
            bz1x.ss = Oo3x(bz1x.s);
            bz1x.ms = bA1x.getMilliseconds();
            bz1x.w = boE2x[bA1x.getDay()];
            var bzH5M = chO4S(bz1x.H);
            bz1x.ct = cgV4Z[bzH5M];
            bz1x.et = cgX4b[bzH5M];
            if (!!cia4e) {
                bz1x.H = bz1x.H % 12
            }
            return k0x.Dq0x(bz1x, Kr2x)
        }
    }();
    k0x.baa7T = function(bA1x) {
        var da1x = bA1x;
        if (k0x.fC2x(bA1x))
            da1x = new Date(Date.parse(bA1x));
        if (!k0x.Em0x(bA1x))
            da1x = new Date(bA1x);
        return da1x
    }
    ;
    k0x.JF2x = function(cii4m, ciE5J) {
        return (new Number(cii4m)).toFixed(ciE5J)
    }
    ;
    k0x.bot2x = function() {
        var gL3x = /([^\/:])\/.*$/
          , kn4r = /\/[^\/]+$/
          , Ev0x = /[#\?]/
          , boq2x = location.href.split(/[?#]/)[0]
          , tz7s = document.createElement("a");
        var bom2x = function(jn4r) {
            return (jn4r || "").indexOf("://") > 0
        };
        var bCe5j = function(jn4r) {
            return (jn4r || "").split(Ev0x)[0].replace(kn4r, "/")
        };
        var ciI5N = function(jn4r, fZ3x) {
            if (jn4r.indexOf("/") == 0)
                return fZ3x.replace(gL3x, "$1") + jn4r;
            return bCe5j(fZ3x) + jn4r
        };
        boq2x = bCe5j(boq2x);
        return function(jn4r, fZ3x) {
            jn4r = (jn4r || "").trim();
            if (!bom2x(fZ3x))
                fZ3x = boq2x;
            if (!jn4r)
                return fZ3x;
            if (bom2x(jn4r))
                return jn4r;
            jn4r = ciI5N(jn4r, fZ3x);
            tz7s.href = jn4r;
            jn4r = tz7s.href;
            return bom2x(jn4r) ? jn4r : tz7s.getAttribute("href", 4)
        }
    }();
    k0x.cjc5h = function() {
        var df2x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(Y1x) {
            if (df2x.test(Y1x || ""))
                return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k0x.bCN6H = function(G0x, in3x) {
        if (!G0x)
            return in3x;
        var W1x = G0x.tagName.toLowerCase()
          , i0x = a9j.dk2x(G0x);
        if (!i0x || !i0x.length) {
            in3x[W1x] = G0x.textContent || G0x.text || "";
            return in3x
        }
        var cl1x = {};
        in3x[W1x] = cl1x;
        k0x.bd1x(i0x, function(g0x) {
            k0x.bCN6H(g0x, cl1x)
        });
        return in3x
    }
    ;
    k0x.cIt1x = function(CV0x) {
        try {
            return k0x.bCN6H(a9j.bEb6V(CV0x), {})
        } catch (ex) {
            return null
        }
    }
    ;
    k0x.OE3x = function(hX3x, OI3x) {
        var in3x = {};
        k0x.bd1x((hX3x || "").split(OI3x), function(W1x) {
            var bbu7n = W1x.split("=");
            if (!bbu7n || !bbu7n.length)
                return;
            var K0x = bbu7n.shift();
            if (!K0x)
                return;
            in3x[decodeURIComponent(K0x)] = decodeURIComponent(bbu7n.join("="))
        });
        return in3x
    }
    ;
    k0x.vH7A = function(gq3x, OI3x, ckh5m) {
        if (!gq3x)
            return "";
        var bs1x = [];
        for (var x in gq3x) {
            bs1x.push(encodeURIComponent(x) + "=" + (!!ckh5m ? encodeURIComponent(gq3x[x]) : gq3x[x]))
        }
        return bs1x.join(OI3x || ",")
    }
    ;
    k0x.hq3x = function(bv1x) {
        return k0x.OE3x(bv1x, "&")
    }
    ;
    k0x.cD1x = function(gq3x) {
        return k0x.vH7A(gq3x, "&", !0)
    }
    ;
    k0x.cIr1x = function(gq3x) {
        return be1x.Ix1x(gq3x)
    }
    ;
    k0x.cIq1x = function(i0x, dZ2x) {
        var m0x = {};
        k0x.bd1x(i0x, function(p0x) {
            var K0x = p0x;
            if (!!dZ2x) {
                K0x = dZ2x(p0x)
            }
            m0x[K0x] = p0x
        });
        return m0x
    }
    ;
    k0x.cIp1x = function(gX3x, gc3x) {
        var ckn5s = ("" + gX3x).length
          , ckq5v = Math.max(1, parseInt(gc3x) || 0)
          , dq2x = ckq5v - ckn5s;
        if (dq2x > 0) {
            gX3x = (new Array(dq2x + 1)).join("0") + gX3x
        }
        return "" + gX3x
    }
    ;
    k0x.bbS7L = function(gq3x, W1x) {
        if (!k0x.eL2x(W1x)) {
            try {
                delete gq3x[W1x]
            } catch (e) {
                gq3x[W1x] = undefined
            }
            return this
        }
        k0x.bd1x(W1x, k0x.bbS7L.f0x(k0x, gq3x));
        return this
    }
    ;
    k0x.TV4Z = function() {
        var bGr6l = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(bq1x) {
            bq1x = bq1x || 10;
            var m0x = [];
            for (var i = 0, bGs6m; i < bq1x; ++i) {
                bGs6m = Math.floor(Math.random() * bGr6l.length);
                m0x.push(bGr6l.charAt(bGs6m))
            }
            return m0x.join("")
        }
    }();
    k0x.DA0x = function(fE2x, fo2x) {
        return Math.floor(Math.random() * (fo2x - fE2x) + fE2x)
    }
    ;
    k0x.ol5q = function(bq1x) {
        bq1x = Math.max(0, Math.min(bq1x || 8, 30));
        var fE2x = Math.pow(10, bq1x - 1)
          , fo2x = fE2x * 10;
        return k0x.DA0x(fE2x, fo2x).toString()
    }
    ;
    k0x.bbZ7S = function() {
        var gG3x = +(new Date);
        return function() {
            return "" + gG3x++
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, fy2x = NEJ.R, br1x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"), O0x = c0x("nej.ut"), oI5N;
    if (!!O0x.cJ1x)
        return;
    O0x.cJ1x = NEJ.C();
    oI5N = O0x.cJ1x.prototype;
    O0x.cJ1x.A0x = function(e0x) {
        e0x = e0x || {};
        var cF1x = !!this.AV9M && this.AV9M.shift();
        if (!cF1x) {
            cF1x = new this(e0x);
            this.ckw5B = (this.ckw5B || 0) + 1
        }
        cF1x.bl1x(e0x);
        return cF1x
    }
    ;
    O0x.cJ1x.T0x = function() {
        var Po3x = function(p0x, r0x, i0x) {
            p0x.T0x();
            i0x.splice(r0x, 1)
        };
        return function(cF1x) {
            if (!cF1x)
                return null;
            if (!k0x.eL2x(cF1x)) {
                if (!(cF1x instanceof this)) {
                    var fP3x = cF1x.constructor;
                    if (!!fP3x.T0x)
                        fP3x.T0x(cF1x);
                    return null
                }
                if (cF1x == this.fg2x)
                    delete this.fg2x;
                if (cF1x == this.BB9s)
                    delete this.BB9s;
                cF1x.bC1x();
                if (!this.AV9M)
                    this.AV9M = [];
                if (k0x.di2x(this.AV9M, cF1x) < 0) {
                    this.AV9M.push(cF1x)
                }
                return null
            }
            k0x.nk5p(cF1x, Po3x, this)
        }
    }();
    O0x.cJ1x.gm3x = function(e0x) {
        e0x = e0x || {};
        if (!this.fg2x)
            this.fg2x = this.A0x(e0x);
        return this.fg2x
    }
    ;
    O0x.cJ1x.bKi8a = function(e0x, rT6N) {
        e0x = e0x || {};
        if (!!rT6N && !!this.BB9s) {
            this.BB9s.T0x();
            delete this.BB9s
        }
        if (!this.BB9s) {
            this.BB9s = this.A0x(e0x)
        } else {
            this.BB9s.bl1x(e0x)
        }
        return this.BB9s
    }
    ;
    oI5N.cw1x = function() {
        var gG3x = +(new Date);
        return function() {
            this.id = gG3x++;
            this.lV4Z = {};
            this.bKJ8B = {}
        }
    }();
    oI5N.bl1x = function(e0x) {
        this.bne2x(e0x)
    }
    ;
    oI5N.bC1x = function() {
        this.he3x();
        this.KO2x()
    }
    ;
    oI5N.bX1x = function() {
        var gG3x = +(new Date);
        var ckT5Y = function(bf1x) {
            if (!bf1x || bf1x.length < 3)
                return;
            this.bKJ8B["de-" + gG3x++] = bf1x;
            h0x.s0x.apply(h0x, bf1x)
        };
        return function(i0x) {
            k0x.bd1x(i0x, ckT5Y, this)
        }
    }();
    oI5N.KO2x = function() {
        var ckV5a = function(bf1x, K0x, bz1x) {
            delete bz1x[K0x];
            h0x.mo4s.apply(h0x, bf1x)
        };
        return function() {
            k0x.eI2x(this.bKJ8B, ckV5a)
        }
    }();
    oI5N.cIi1x = function(dZ2x) {
        dZ2x = dZ2x || br1x;
        k0x.eI2x(this, function(EC0x, K0x, bz1x) {
            if (!!EC0x && !!EC0x.T0x && !dZ2x(EC0x)) {
                delete bz1x[K0x];
                EC0x.T0x()
            }
        })
    }
    ;
    oI5N.T0x = function() {
        this.constructor.T0x(this)
    }
    ;
    oI5N.bmH2x = function(u0x) {
        var d0x = this.lV4Z[u0x.toLowerCase()];
        return !!d0x && d0x !== br1x
    }
    ;
    oI5N.s0x = function(u0x, d0x) {
        this.wq8i.apply(this, arguments);
        return this
    }
    ;
    oI5N.mo4s = function(u0x, d0x) {
        var u0x = (u0x || "").toLowerCase()
          , eh2x = this.lV4Z[u0x];
        if (!k0x.eL2x(eh2x)) {
            if (eh2x == d0x)
                delete this.lV4Z[u0x];
            return
        }
        k0x.nk5p(eh2x, function(ev2x, r0x, i0x) {
            if (ev2x == d0x)
                i0x.splice(r0x, 1)
        })
    }
    ;
    oI5N.wq8i = function(u0x, d0x) {
        if (!!u0x && k0x.gK3x(d0x))
            this.lV4Z[u0x.toLowerCase()] = d0x;
        return this
    }
    ;
    oI5N.bne2x = function() {
        var cmQ6K = function(d0x, u0x) {
            this.wq8i(u0x, d0x)
        };
        return function(eh2x) {
            k0x.eI2x(eh2x, cmQ6K, this);
            return this
        }
    }();
    oI5N.he3x = function() {
        var bmC2x = function(d0x, u0x) {
            this.he3x(u0x)
        };
        return function(u0x) {
            var u0x = (u0x || "").toLowerCase();
            if (!!u0x) {
                delete this.lV4Z[u0x]
            } else {
                k0x.eI2x(this.lV4Z, bmC2x, this)
            }
            return this
        }
    }();
    oI5N.bmB2x = function(u0x, d0x) {
        if (!u0x || !k0x.gK3x(d0x))
            return this;
        u0x = u0x.toLowerCase();
        var eh2x = this.lV4Z[u0x];
        if (!eh2x) {
            this.lV4Z[u0x] = d0x;
            return this
        }
        if (!k0x.eL2x(eh2x)) {
            this.lV4Z[u0x] = [eh2x]
        }
        this.lV4Z[u0x].push(d0x);
        return this
    }
    ;
    oI5N.z0x = function(u0x) {
        var d0x = this.lV4Z[(u0x || "").toLowerCase()];
        if (!d0x)
            return this;
        var bf1x = fy2x.slice.call(arguments, 1);
        if (!k0x.eL2x(d0x))
            return d0x.apply(this, bf1x);
        k0x.bd1x(d0x, function(dx2x) {
            try {
                dx2x.apply(this, bf1x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    }
    ;
    O0x.beT8L = function() {
        var R0x = {};
        return function(C0x, fP3x, e0x) {
            var fh2x = fP3x.cnQ6K;
            if (!fh2x) {
                fh2x = k0x.TV4Z(10);
                fP3x.cnQ6K = fh2x
            }
            var K0x = C0x + "-" + fh2x
              , cF1x = R0x[K0x];
            if (!!e0x && !cF1x) {
                cF1x = fP3x.A0x(e0x);
                cF1x.T0x = cF1x.T0x.eH2x(function(d0x) {
                    delete R0x[K0x];
                    delete cF1x.T0x
                });
                R0x[K0x] = cF1x
            }
            return cF1x
        }
    }()
}
)();
(function() {
    var o = NEJ.O
      , u = NEJ.P("nej.u")
      , j = NEJ.P("nej.j");
    j.gx3x = function() {
        var da1x = new Date
          , con6h = +da1x
          , bmp2x = 864e5;
        var coC6w = function(W1x) {
            var rE6y = document.cookie
              , ui7b = "\\b" + W1x + "="
              , Wt5y = rE6y.search(ui7b);
            if (Wt5y < 0)
                return "";
            Wt5y += ui7b.length - 2;
            var xe8W = rE6y.indexOf(";", Wt5y);
            if (xe8W < 0)
                xe8W = rE6y.length;
            return rE6y.substring(Wt5y, xe8W) || ""
        };
        return function(W1x, j0x) {
            if (j0x === undefined)
                return coC6w(W1x);
            if (u.fC2x(j0x)) {
                if (!!j0x) {
                    document.cookie = W1x + "=" + j0x + ";";
                    return j0x
                }
                j0x = {
                    expires: -100
                }
            }
            j0x = j0x || o;
            var rE6y = W1x + "=" + (j0x.value || "") + ";";
            delete j0x.value;
            if (j0x.expires !== undefined) {
                da1x.setTime(con6h + j0x.expires * bmp2x);
                j0x.expires = da1x.toGMTString()
            }
            rE6y += u.vH7A(j0x, ";");
            document.cookie = rE6y
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, iB3x = c0x("nej.c"), em2x = c0x("nej.g"), a9j = c0x("nej.e"), v0x = c0x("nej.j"), I0x = c0x("nej.ut"), O0x = c0x("nej.ut.j"), k0x = c0x("nej.u"), b0x;
    if (!!O0x.Lg2x)
        return;
    O0x.Lg2x = NEJ.C();
    b0x = O0x.Lg2x.N0x(I0x.cJ1x);
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.qb6V = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.qb6V, e0x);
        var CY0x = iB3x.B0x("csrf");
        if ((/^\/[^\/]/.test(this.qb6V.url) || this.qb6V.url.indexOf(location.protocol + "//" + location.host) == 0) && !!CY0x.cookie && !!CY0x.param) {
            var bv1x = encodeURIComponent(CY0x.param) + "=" + encodeURIComponent(v0x.gx3x(CY0x.cookie) || "")
              , OI3x = this.qb6V.url.indexOf("?") < 0 ? "?" : "&";
            this.qb6V.url += OI3x + bv1x
        }
        this.WB5G = e0x.headers || {};
        var bo1x = this.WB5G[em2x.yg8Y];
        if (bo1x == null)
            this.WB5G[em2x.yg8Y] = em2x.bWv2x
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        delete this.AH9y;
        delete this.qb6V;
        delete this.WB5G
    }
    ;
    b0x.coJ6D = function(bo1x) {
        var bz1x = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.qb6V.noescape) {
            return k0x.Dq0x(bz1x, bo1x)
        } else {
            return bo1x
        }
    }
    ;
    b0x.vy7r = function(d0x) {
        var ex2x = d0x.status;
        if (ex2x == -1) {
            this.z0x("onerror", {
                code: em2x.bSM1x,
                message: "请求[" + this.qb6V.url + "]超时！"
            });
            return
        }
        if (("" + ex2x).indexOf("2") != 0) {
            this.z0x("onerror", {
                data: ex2x,
                code: em2x.bwC4G,
                message: "服务器返回异常状态[" + ex2x + "]!",
                extData: d0x.result
            });
            return
        }
        this.z0x("onload", a9j.ces4w(this.coJ6D(d0x.result), this.qb6V.type))
    }
    ;
    b0x.cp1x = br1x;
    b0x.blW1x = function(j0x) {
        var Y1x = this.qb6V.url;
        if (!Y1x) {
            this.z0x("onerror", {
                code: em2x.bwV4Z,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.qb6V.data = j0x == null ? null : j0x;
            var d0x = {
                request: this.qb6V,
                headers: this.WB5G
            };
            try {
                this.z0x("onbeforerequest", d0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cp1x(d0x)
        } catch (e) {
            this.z0x("onerror", {
                code: em2x.bwC4G,
                message: "请求[" + Y1x + "]失败:" + e.message + "！"
            })
        }
        return this
    }
    ;
    b0x.ky4C = br1x
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, be1x = c0x("nej.h"), em2x = c0x("nej.g"), k0x = c0x("nej.u"), O0x = c0x("nej.ut.j"), R0x = {}, QG4K;
    if (!!O0x.WR5W)
        return;
    O0x.WR5W = NEJ.C();
    QG4K = O0x.WR5W.N0x(O0x.Lg2x);
    QG4K.bC1x = function() {
        this.bF1x();
        window.clearTimeout(this.ei2x);
        delete this.ei2x;
        try {
            this.sK7D.onreadystatechange = br1x;
            this.sK7D.abort()
        } catch (e) {}
        delete this.sK7D
    }
    ;
    QG4K.cp1x = function() {
        var coQ6K = function(D0x, K0x) {
            this.sK7D.setRequestHeader(K0x, D0x)
        };
        return function(e0x) {
            var gl3x = e0x.request
              , pe5j = e0x.headers;
            this.sK7D = be1x.blM1x();
            if (pe5j[em2x.yg8Y] === em2x.DH0x) {
                delete pe5j[em2x.yg8Y];
                this.sK7D.upload.onprogress = this.gu3x.f0x(this, 1);
                if (gl3x.data.tagName === "FORM")
                    gl3x.data = new FormData(gl3x.data)
            }
            this.sK7D.onreadystatechange = this.gu3x.f0x(this, 2);
            if (gl3x.timeout != 0) {
                this.ei2x = window.setTimeout(this.gu3x.f0x(this, 3), gl3x.timeout)
            }
            this.sK7D.open(gl3x.method, gl3x.url, !gl3x.sync);
            k0x.eI2x(pe5j, coQ6K, this);
            if (!!this.qb6V.cookie && "withCredentials"in this.sK7D)
                this.sK7D.withCredentials = !0;
            this.sK7D.send(gl3x.data)
        }
    }();
    QG4K.gu3x = function(u0x) {
        switch (u0x) {
        case 1:
            this.z0x("onuploading", arguments[1]);
            break;
        case 2:
            if (this.sK7D.readyState == 4)
                this.vy7r({
                    status: this.sK7D.status,
                    result: this.sK7D.responseText || ""
                });
            break;
        case 3:
            this.vy7r({
                status: -1
            });
            break
        }
    }
    ;
    QG4K.ky4C = function() {
        this.vy7r({
            status: 0
        });
        return this
    }
}
)();
(function() {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined")
            TrimPath = exports
    }
    var QZ4d = {}, XF6z = [], bDS6M = /\s+/g, gG3x = +(new Date), Lw2x, bR1x, hI3x;
    var EJ0x = function() {
        var gL3x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/
          , kn4r = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/
          , Ev0x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i
          , blm1x = /^new\s+/
          , cpm6g = /['"]/;
        var cpo6i = function(D0x) {
            if (gL3x.test(D0x))
                return;
            D0x = D0x.split(".")[0].trim();
            if (!D0x || cpm6g.test(D0x))
                return;
            D0x = D0x.replace(blm1x, "");
            try {
                if (Ev0x.test(D0x))
                    return;
                hI3x[D0x] = 1
            } catch (e) {}
        };
        return function(bo1x) {
            bo1x = bo1x || "";
            if (!bo1x || gL3x.test(bo1x))
                return;
            var bs1x = bo1x.split(kn4r);
            for (var i = 0, l = bs1x.length; i < l; i++)
                cpo6i(bs1x[i])
        }
    }();
    var cpq6k = function(dL2x) {
        if (dL2x[2] != "in")
            throw "bad for loop statement: " + dL2x.join(" ");
        XF6z.push(dL2x[1]);
        EJ0x(dL2x[3]);
        return "var __HASH__" + dL2x[1] + " = " + dL2x[3] + "," + dL2x[1] + "," + dL2x[1] + "_count=0;" + "if (!!__HASH__" + dL2x[1] + ")" + "for(var " + dL2x[1] + "_key in __HASH__" + dL2x[1] + "){" + dL2x[1] + " = __HASH__" + dL2x[1] + "[" + dL2x[1] + "_key];" + "if (typeof(" + dL2x[1] + ')=="function") continue;' + dL2x[1] + "_count++;"
    };
    var cps6m = function() {
        var dL2x = XF6z[XF6z.length - 1];
        return "}; if(!__HASH__" + dL2x + "||!" + dL2x + "_count){"
    };
    var cpt6n = function() {
        XF6z.pop();
        return "};"
    };
    var cpu6o = function(dL2x) {
        if (dL2x[2] != "as")
            throw "bad for list loop statement: " + dL2x.join(" ");
        var RP4T = dL2x[1].split("..");
        if (RP4T.length > 1) {
            EJ0x(RP4T[0]);
            EJ0x(RP4T[1]);
            return "for(var " + dL2x[3] + "," + dL2x[3] + "_index=0," + dL2x[3] + "_beg=" + RP4T[0] + "," + dL2x[3] + "_end=" + RP4T[1] + "," + dL2x[3] + "_length=parseInt(" + dL2x[3] + "_end-" + dL2x[3] + "_beg+1);" + dL2x[3] + "_index<" + dL2x[3] + "_length;" + dL2x[3] + "_index++){" + dL2x[3] + " = " + dL2x[3] + "_beg+" + dL2x[3] + "_index;"
        } else {
            EJ0x(dL2x[1]);
            return "for(var __LIST__" + dL2x[3] + " = " + dL2x[1] + "," + dL2x[3] + "," + dL2x[3] + "_index=0," + dL2x[3] + "_length=__LIST__" + dL2x[3] + ".length;" + dL2x[3] + "_index<" + dL2x[3] + "_length;" + dL2x[3] + "_index++){" + dL2x[3] + " = __LIST__" + dL2x[3] + "[" + dL2x[3] + "_index];"
        }
    };
    var cpv6p = function(dL2x) {
        if (!dL2x || !dL2x.length)
            return;
        dL2x.shift();
        var W1x = dL2x[0].split("(")[0];
        return "var " + W1x + " = function" + dL2x.join("").replace(W1x, "") + "{var __OUT=[];"
    };
    var cpw6q = function(dL2x) {
        if (!dL2x[1])
            throw "bad include statement: " + dL2x.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var blb1x = function(kh4l, dL2x) {
        EJ0x(dL2x.slice(1).join(" "));
        return kh4l
    };
    var cpB6v = function(dL2x) {
        return blb1x("if(", dL2x)
    };
    var cpI6C = function(dL2x) {
        return blb1x("}else if(", dL2x)
    };
    var cpM6G = function(dL2x) {
        return blb1x("var ", dL2x)
    };
    bR1x = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cpB6v,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cpI6C,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cpq6k,
                pmin: 3
            },
            forelse: {
                pfix: cps6m
            },
            "/for": {
                pfix: cpt6n
            },
            list: {
                pfix: cpu6o,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: cpM6G,
                sfix: ";"
            },
            macro: {
                pfix: cpv6p
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    Lw2x = !0
                }
            },
            "/trim": {
                pfix: function() {
                    Lw2x = null
                }
            },
            inline: {
                pfix: cpw6q,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(kh4l) {
                return (kh4l || "") + "" + gG3x
            },
            "default": function(D0x, kx4B) {
                return D0x || kx4B
            }
        }
    };
    var cpO6I = function() {
        var cqe6Y = /\\([\{\}])/g;
        return function(bo1x, jJ4N) {
            bo1x = bo1x.replace(cqe6Y, "$1");
            var dL2x = bo1x.slice(1, -1).split(bDS6M)
              , bh1x = bR1x.def[dL2x[0]];
            if (!bh1x) {
                YS6M(bo1x, jJ4N);
                return
            }
            if (!!bh1x.pmin && bh1x.pmin >= dL2x.length)
                throw "Statement needs more parameters:" + bo1x;
            jJ4N.push(!!bh1x.pfix && typeof bh1x.pfix != "string" ? bh1x.pfix(dL2x) : bh1x.pfix || "");
            if (!!bh1x.sfix) {
                if (dL2x.length <= 1) {
                    if (!!bh1x.pdft)
                        jJ4N.push(bh1x.pdft)
                } else {
                    for (var i = 1, l = dL2x.length; i < l; i++) {
                        if (i > 1)
                            jJ4N.push(" ");
                        jJ4N.push(dL2x[i])
                    }
                }
                jJ4N.push(bh1x.sfix)
            }
        }
    }();
    var bIj7c = function(LG2x, jJ4N) {
        if (!LG2x || !LG2x.length)
            return;
        if (LG2x.length == 1) {
            var bkJ1x = LG2x.pop();
            EJ0x(bkJ1x);
            jJ4N.push(bkJ1x == "" ? '""' : bkJ1x);
            return
        }
        var bkH1x = LG2x.pop().split(":");
        jJ4N.push("__MDF['" + bkH1x.shift() + "'](");
        bIj7c(LG2x, jJ4N);
        if (bkH1x.length > 0) {
            var bf1x = bkH1x.join(":");
            EJ0x(bf1x);
            jJ4N.push("," + bf1x)
        }
        jJ4N.push(")")
    };
    var YS6M = function(bo1x, jJ4N) {
        if (!bo1x)
            return;
        var wo8g = bo1x.split("\n");
        if (!wo8g || !wo8g.length)
            return;
        for (var i = 0, l = wo8g.length, hB3x; i < l; i++) {
            hB3x = wo8g[i];
            if (!!Lw2x) {
                hB3x = hB3x.trim();
                if (!hB3x)
                    continue
            }
            cqi6c(hB3x, jJ4N);
            if (!!Lw2x && i < l - 1)
                jJ4N.push("__OUT.push('\\n');")
        }
    };
    var cqi6c = function() {
        var cql6f = /\|\|/g
          , cqp6j = /#@@#/g;
        return function(bo1x, jJ4N) {
            var Sz4D = "}", SH4L = -1, bq1x = bo1x.length, xt8l, fX3x, LV2x, bar7k, Td4h;
            while (SH4L + Sz4D.length < bq1x) {
                xt8l = "${";
                fX3x = "}";
                LV2x = bo1x.indexOf(xt8l, SH4L + Sz4D.length);
                if (LV2x < 0)
                    break;
                if (bo1x.charAt(LV2x + 2) == "%") {
                    xt8l = "${%";
                    fX3x = "%}"
                }
                bar7k = bo1x.indexOf(fX3x, LV2x + xt8l.length);
                if (bar7k < 0)
                    break;
                bav7o(bo1x.substring(SH4L + Sz4D.length, LV2x), jJ4N);
                Td4h = bo1x.substring(LV2x + xt8l.length, bar7k).replace(cql6f, "#@@#").split("|");
                for (var i = 0, l = Td4h.length; i < l; Td4h[i] = Td4h[i].replace(cqp6j, "||"),
                i++)
                    ;
                jJ4N.push("__OUT.push(");
                bIj7c(Td4h, jJ4N);
                jJ4N.push(");");
                Sz4D = fX3x;
                SH4L = bar7k
            }
            bav7o(bo1x.substring(SH4L + Sz4D.length), jJ4N)
        }
    }();
    var bav7o = function() {
        var bz1x = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var cqx6r = function(bo1x) {
            return (bo1x || "").replace(bz1x.r, function($1) {
                return bz1x[$1] || $1
            })
        };
        return function(bo1x, jJ4N) {
            if (!bo1x)
                return;
            jJ4N.push("__OUT.push('" + cqx6r(bo1x) + "');")
        }
    }();
    var cqy6s = function() {
        var cqz6t = /\t/g
          , cqA6u = /\n/g
          , cqD6x = /\r\n?/g;
        var bND8v = function(bo1x, xt8l) {
            var r0x = bo1x.indexOf("}", xt8l + 1);
            while (bo1x.charAt(r0x - 1) == "\\") {
                r0x = bo1x.indexOf("}", r0x + 1)
            }
            return r0x
        };
        var cqF6z = function() {
            var bs1x = []
              , ES0x = arguments[0];
            for (var x in ES0x) {
                x = (x || "").trim();
                if (!x)
                    continue;
                bs1x.push(x + "=$v('" + x + "')")
            }
            return bs1x.length > 0 ? "var " + bs1x.join(",") + ";" : ""
        };
        return function(bo1x) {
            hI3x = {};
            bo1x = bo1x.replace(cqD6x, "\n").replace(cqz6t, "    ");
            var sL7E = ["if(!__CTX) return '';", ""];
            sL7E.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            sL7E.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            sL7E.push("__OUT=[];");
            var EU0x = -1
              , bq1x = bo1x.length;
            var nA5F, Mg2x, Tv4z, Tz4D, Cj9a, TA4E, biT0x, TD4H;
            while (EU0x + 1 < bq1x) {
                nA5F = EU0x;
                nA5F = bo1x.indexOf("{", nA5F + 1);
                while (nA5F >= 0) {
                    Mg2x = bND8v(bo1x, nA5F);
                    Tv4z = bo1x.substring(nA5F, Mg2x);
                    Tz4D = Tv4z.match(bR1x.blk);
                    if (!!Tz4D) {
                        Cj9a = Tz4D[1].length + 1;
                        TA4E = bo1x.indexOf("}", nA5F + Cj9a);
                        if (TA4E >= 0) {
                            biT0x = TA4E - nA5F - Cj9a <= 0 ? "{/" + Tz4D[1] + "}" : Tv4z.substr(Cj9a + 1);
                            Cj9a = bo1x.indexOf(biT0x, TA4E + 1);
                            if (Cj9a >= 0) {
                                YS6M(bo1x.substring(EU0x + 1, nA5F), sL7E);
                                TD4H = bo1x.substring(TA4E + 1, Cj9a);
                                switch (Tz4D[1]) {
                                case "cdata":
                                    bav7o(TD4H, sL7E);
                                    break;
                                case "minify":
                                    bav7o(TD4H.replace(cqA6u, " ").replace(bDS6M, " "), sL7E);
                                    break;
                                case "eval":
                                    if (!!TD4H)
                                        sL7E.push("__OUT.push((function(){" + TD4H + "})());");
                                    break
                                }
                                nA5F = EU0x = Cj9a + biT0x.length - 1
                            }
                        }
                    } else if (bo1x.charAt(nA5F - 1) != "$" && bo1x.charAt(nA5F - 1) != "\\" && Tv4z.substr(Tv4z.charAt(1) == "/" ? 2 : 1).search(bR1x.tag) == 0) {
                        break
                    }
                    nA5F = bo1x.indexOf("{", nA5F + 1)
                }
                if (nA5F < 0)
                    break;
                Mg2x = bND8v(bo1x, nA5F);
                if (Mg2x < 0)
                    break;
                YS6M(bo1x.substring(EU0x + 1, nA5F), sL7E);
                cpO6I(bo1x.substring(nA5F, Mg2x + 1), sL7E);
                EU0x = Mg2x
            }
            YS6M(bo1x.substring(EU0x + 1), sL7E);
            sL7E.push(';return __OUT.join("");');
            sL7E[1] = cqF6z(hI3x);
            hI3x = null;
            return new Function("__CTX","__MDF",sL7E.join(""))
        }
    }();
    TrimPath.seed = function() {
        return gG3x
    }
    ;
    TrimPath.merge = function() {
        var TF4J = {};
        TrimPath.dump = function() {
            return {
                func: TF4J,
                text: QZ4d
            }
        }
        ;
        return function(fh2x, j0x, kc4g) {
            try {
                j0x = j0x || {};
                if (!TF4J[fh2x] && !QZ4d[fh2x])
                    return "";
                if (!TF4J[fh2x]) {
                    TF4J[fh2x] = cqy6s(QZ4d[fh2x]);
                    delete QZ4d[fh2x]
                }
                if (!!kc4g) {
                    for (var x in bR1x.ext)
                        if (!kc4g[x])
                            kc4g[x] = bR1x.ext[x]
                }
                return TF4J[fh2x](j0x, kc4g || bR1x.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function() {
        var cqJ6D = +(new Date);
        return function(bo1x, fh2x) {
            if (!bo1x)
                return "";
            fh2x = fh2x || "ck_" + cqJ6D++;
            QZ4d[fh2x] = bo1x;
            return fh2x
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , k0x = c0x("nej.u")
      , ey2x = {}
      , bST1x = {};
    a9j.Mi2x = TrimPath.seed;
    a9j.cd1x = function() {
        var bTv1x = function(C0x) {
            return !a9j.iH3x ? "" : a9j.iH3x(C0x)
        };
        return function(fh2x, j0x, kc4g) {
            j0x = NEJ.X(NEJ.X({}, bST1x), j0x);
            j0x.inline = bTv1x;
            kc4g = NEJ.X(NEJ.X({}, ey2x), kc4g);
            kc4g.rand = k0x.ol5q;
            kc4g.format = k0x.ih3x;
            kc4g.escape = k0x.dH2x;
            kc4g.inline = bTv1x;
            return TrimPath.merge(fh2x, j0x, kc4g)
        }
    }();
    a9j.eB2x = function(bo1x, crg7Z) {
        if (!bo1x)
            return "";
        var fh2x, F0x = a9j.B0x(bo1x);
        if (!!F0x) {
            fh2x = F0x.id;
            bo1x = F0x.value || F0x.innerText;
            if (!crg7Z)
                a9j.cL1x(F0x)
        }
        return TrimPath.parse(bo1x, fh2x)
    }
    ;
    a9j.dA2x = function(bI1x, fh2x, j0x, kc4g) {
        bI1x = a9j.B0x(bI1x);
        if (!!bI1x)
            bI1x.innerHTML = a9j.cd1x(fh2x, j0x, kc4g);
        return this
    }
    ;
    a9j.cHv0x = function(bz1x) {
        NEJ.X(ey2x, bz1x)
    }
    ;
    a9j.crv7o = function(bz1x) {
        NEJ.X(bST1x, bz1x)
    }
    ;
    c0x("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
}
)();
(function() {
    var dy2x = NEJ.P("nej.p")
      , O0x = window
      , lt4x = dy2x.Ik1x
      , bVd1x = lt4x.ipad || lt4x.iphone;
    if (!bVd1x && !!O0x.requestAnimationFrame && !!O0x.cancelRequestAnimationFrame)
        return;
    var kh4l = dy2x.dr2x.prefix.pro;
    if (!bVd1x && !!O0x[kh4l + "RequestAnimationFrame"] && !!O0x[kh4l + "CancelRequestAnimationFrame"]) {
        O0x.requestAnimationFrame = O0x[kh4l + "RequestAnimationFrame"];
        O0x.cancelRequestAnimationFrame = O0x[kh4l + "CancelRequestAnimationFrame"];
        return
    }
    var bbz7s = lt4x.desktop ? 80 : lt4x.ios ? 50 : 30;
    O0x.requestAnimationFrame = function(cA1x) {
        return window.setTimeout(function() {
            try {
                cA1x(+(new Date))
            } catch (ex) {}
        }, 1e3 / bbz7s)
    }
    ;
    O0x.cancelRequestAnimationFrame = function(C0x) {
        window.clearTimeout(C0x);
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, k0x = c0x("nej.u"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), be1x = c0x("nej.h"), cZ1x = c0x("nej.x"), bbA7t = c0x("nej.ut.j.cb"), ge3x;
    if (!!a9j.sv6p)
        return;
    a9j.sv6p = cZ1x.sv6p = function() {
        var R0x = {}
          , gL3x = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d0x) {
            var C0x = decodeURIComponent(d0x.target)
              , u0x = d0x.type.toLowerCase();
            var dx2x = R0x[C0x + "-on" + u0x];
            if (!!dx2x) {
                try {
                    dx2x(d0x)
                } catch (e) {}
                return
            }
            var cR1x = R0x[C0x + "-tgt"];
            if (!!cR1x && gL3x.test(u0x)) {
                bzJ5O(cR1x, d0x)
            }
        }
        ;
        var biz0x = function(e0x) {
            var bI1x = a9j.B0x(e0x.parent) || document.body
              , dV2x = a9j.cd1x(ge3x, e0x);
            bI1x.insertAdjacentHTML(!e0x.hidden ? "beforeEnd" : "afterBegin", dV2x)
        };
        var bzJ5O = function(C0x, d0x) {
            var u0x = d0x.type.toLowerCase();
            requestAnimationFrame(function() {
                h0x.z0x(C0x, u0x)
            })
        };
        var crA7t = function(hW3x) {
            return !!hW3x && !!hW3x.inited && !!hW3x.inited()
        };
        var TQ4U = function(C0x) {
            var bs1x = [document.embeds[C0x], a9j.B0x(C0x), document[C0x], window[C0x]]
              , r0x = k0x.eI2x(bs1x, crA7t)
              , hW3x = bs1x[r0x]
              , biw0x = C0x + "-count";
            R0x[biw0x]++;
            if (!!hW3x || R0x[biw0x] > 100) {
                R0x[C0x](hW3x);
                delete R0x[C0x];
                delete R0x[biw0x];
                return
            }
            window.setTimeout(TQ4U.f0x(null, C0x), 300)
        };
        var crI7B = function(e0x) {
            var C0x = e0x.id
              , cm1x = e0x.params;
            if (!cm1x) {
                cm1x = {};
                e0x.params = cm1x
            }
            var hI3x = cm1x.flashvars || "";
            hI3x += (!hI3x ? "" : "&") + ("id=" + C0x);
            if (!e0x.hidden && (!!e0x.target || be1x.WF5K(cm1x.wmode))) {
                var hV3x = a9j.lP4T(e0x.target) || a9j.lP4T(e0x.parent)
                  , bbP7I = k0x.bbZ7S();
                bbA7t["cb" + bbP7I] = bzJ5O.f0x(null, hV3x);
                hI3x += "&onevent=nej.ut.j.cb.cb" + bbP7I;
                R0x[C0x + "-tgt"] = hV3x
            }
            cm1x.flashvars = hI3x;
            k0x.eI2x(e0x, function(D0x, K0x) {
                if (k0x.gK3x(D0x) && K0x != "onready") {
                    R0x[C0x + "-" + K0x] = D0x
                }
            })
        };
        return function(e0x) {
            e0x = NEJ.X({}, e0x);
            if (!e0x.src)
                return;
            var C0x = "flash_" + k0x.bbZ7S();
            e0x.id = C0x;
            crI7B(e0x);
            biz0x(e0x);
            if (!e0x.onready)
                return;
            R0x[C0x] = e0x.onready;
            R0x[C0x + "-count"] = 0;
            TQ4U(C0x)
        }
    }();
    ge3x = a9j.eB2x('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cZ1x.isChange = !0
}
)();
(function() {
    var c0x = NEJ.P, iB3x = c0x("nej.c"), a9j = c0x("nej.e"), k0x = c0x("nej.u"), O0x = c0x("nej.ut.j"), bbA7t = c0x("nej.ut.j.cb"), R0x = {}, gG3x = +(new Date), bir0x;
    if (!!O0x.bij0x)
        return;
    bbA7t["ld" + gG3x] = function(K0x, cK1x) {
        var jZ4d = R0x[K0x];
        if (!jZ4d)
            return;
        delete R0x[K0x];
        jZ4d.vy7r({
            status: 200,
            result: cK1x
        })
    }
    ;
    bbA7t["er" + gG3x] = function(K0x, ex2x) {
        var jZ4d = R0x[K0x];
        if (!jZ4d)
            return;
        delete R0x[K0x];
        jZ4d.vy7r({
            status: ex2x || 0
        })
    }
    ;
    O0x.bij0x = NEJ.C();
    bir0x = O0x.bij0x.N0x(O0x.Lg2x);
    bir0x.cp1x = function(e0x) {
        var hW3x = R0x.flash;
        if (k0x.eL2x(hW3x)) {
            hW3x.push(this.cp1x.f0x(this, e0x));
            return
        }
        if (!hW3x) {
            R0x.flash = [this.cp1x.f0x(this, e0x)];
            a9j.sv6p({
                hidden: !0,
                src: iB3x.B0x("ajax.swf"),
                onready: function(hW3x) {
                    if (!hW3x)
                        return;
                    var i0x = R0x.flash;
                    R0x.flash = hW3x;
                    k0x.nk5p(i0x, function(dx2x) {
                        try {
                            dx2x()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.AH9y = "swf-" + k0x.ol5q();
        R0x[this.AH9y] = this;
        var j0x = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e0x.request);
        j0x.key = this.AH9y;
        j0x.headers = e0x.headers;
        j0x.onerror = "nej.ut.j.cb.er" + gG3x;
        j0x.onloaded = "nej.ut.j.cb.ld" + gG3x;
        var bCG6A = iB3x.bWi2x(j0x.url);
        if (!!bCG6A)
            j0x.policyURL = bCG6A;
        hW3x.request(j0x)
    }
    ;
    bir0x.ky4C = function() {
        delete R0x[this.AH9y];
        this.vy7r({
            status: 0
        });
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , be1x = c0x("nej.h");
    be1x.bCM6G = function() {
        var df2x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(kR4V) {
            kR4V = kR4V || "";
            if (df2x.test(kR4V))
                return RegExp.$1;
            return "*"
        }
    }();
    be1x.big0x = function(j0x) {
        return j0x
    }
    ;
    be1x.bid0x = function(bci7b, e0x) {
        if (!bci7b.postMessage)
            return;
        e0x = e0x || bb1x;
        bci7b.postMessage(be1x.big0x(e0x.data), be1x.bCM6G(e0x.origin))
    }
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), O0x = c0x("nej.ut"), b0x;
    if (!!O0x.fK2x)
        return;
    O0x.fK2x = NEJ.C();
    b0x = O0x.fK2x.N0x(O0x.cJ1x);
    b0x.cw1x = function() {
        this.S0x = {};
        this.cE1x()
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.Uh5m = a9j.B0x(e0x.element) || window;
        this.bEG6A(e0x.event);
        this.crW7P();
        this.z0x("oninit")
    }
    ;
    b0x.bC1x = function() {
        var Ff0x = function(D0x, K0x, bz1x) {
            if (!k0x.eL2x(D0x)) {
                k0x.bbS7L(this.Uh5m, K0x)
            }
            delete bz1x[K0x]
        };
        return function() {
            this.bF1x();
            k0x.eI2x(this.S0x, Ff0x, this);
            delete this.Uh5m
        }
    }();
    b0x.bcp8h = function(F0x, u0x) {
        F0x = a9j.B0x(F0x);
        return F0x == this.Uh5m && (!u0x || !!this.S0x["on" + u0x])
    }
    ;
    b0x.bEG6A = function(d0x) {
        if (k0x.fC2x(d0x)) {
            var W1x = "on" + d0x;
            if (!this.S0x[W1x]) {
                this.S0x[W1x] = this.crY7R.f0x(this, d0x)
            }
            this.bER6L(d0x);
            return
        }
        if (k0x.eL2x(d0x)) {
            k0x.bd1x(d0x, this.bEG6A, this)
        }
    }
    ;
    b0x.bER6L = function(u0x) {
        var d0x = "on" + u0x
          , dx2x = this.Uh5m[d0x]
          , bES6M = this.S0x[d0x];
        if (dx2x != bES6M) {
            this.bcs8k(u0x);
            if (!!dx2x && dx2x != br1x)
                this.bFf6Z(u0x, dx2x);
            this.Uh5m[d0x] = bES6M
        }
    }
    ;
    b0x.bFf6Z = function(u0x, dx2x, crZ7S) {
        var i0x = this.S0x[u0x];
        if (!i0x) {
            i0x = [];
            this.S0x[u0x] = i0x
        }
        if (k0x.gK3x(dx2x)) {
            !crZ7S ? i0x.push(dx2x) : i0x.unshift(dx2x)
        }
    }
    ;
    b0x.bcs8k = function(u0x, dx2x) {
        var i0x = this.S0x[u0x];
        if (!i0x || !i0x.length)
            return;
        if (!dx2x) {
            delete this.S0x[u0x];
            return
        }
        k0x.nk5p(i0x, function(D0x, r0x, Mu2x) {
            if (dx2x === D0x) {
                Mu2x.splice(r0x, 1);
                return !0
            }
        })
    }
    ;
    b0x.crY7R = function(u0x, d0x) {
        d0x = d0x || {
            noargs: !0
        };
        d0x.type = u0x;
        this.z0x("ondispatch", d0x);
        if (!!d0x.stopped)
            return;
        k0x.bd1x(this.S0x[u0x], function(dx2x) {
            try {
                dx2x(d0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    }
    ;
    b0x.crW7P = function() {
        var bhq0x = function(d0x) {
            var bf1x = d0x.args
              , u0x = bf1x[1].toLowerCase();
            if (this.bcp8h(bf1x[0], u0x)) {
                d0x.stopped = !0;
                this.bER6L(u0x);
                this.bFf6Z(u0x, bf1x[2], bf1x[3]);
                this.z0x("oneventadd", {
                    type: u0x,
                    listener: bf1x[2]
                })
            }
        };
        var csa7T = function(d0x) {
            var bf1x = d0x.args
              , u0x = bf1x[1].toLowerCase();
            if (this.bcp8h(bf1x[0], u0x)) {
                d0x.stopped = !0;
                this.bcs8k(u0x, bf1x[2])
            }
        };
        var bmC2x = function(d0x) {
            var bf1x = d0x.args
              , u0x = (bf1x[1] || "").toLowerCase();
            if (this.bcp8h(bf1x[0])) {
                if (!!u0x) {
                    this.bcs8k(u0x);
                    return
                }
                k0x.eI2x(this.S0x, function(D0x, K0x) {
                    if (k0x.eL2x(D0x)) {
                        this.bcs8k(K0x)
                    }
                }, this)
            }
        };
        var csK7D = function(d0x) {
            var bf1x = d0x.args
              , u0x = bf1x[1].toLowerCase();
            if (this.bcp8h(bf1x[0], u0x)) {
                d0x.stopped = !0;
                bf1x[0]["on" + u0x].apply(bf1x[0], bf1x.slice(2))
            }
        };
        return function() {
            if (!!this.csN7G)
                return;
            this.csN7G = true;
            h0x.s0x = h0x.s0x.eH2x(bhq0x.f0x(this));
            h0x.mo4s = h0x.mo4s.eH2x(csa7T.f0x(this));
            h0x.he3x = h0x.he3x.eH2x(bmC2x.f0x(this));
            h0x.z0x = h0x.z0x.eH2x(csK7D.f0x(this))
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P
      , O0x = c0x("nej.p")
      , be1x = c0x("nej.h")
      , k0x = c0x("nej.u")
      , h0x = c0x("nej.v")
      , I0x = c0x("nej.ut");
    if (O0x.nB5G.trident)
        return;
    if (!!window.postMessage) {
        be1x.big0x = be1x.big0x.eH2x(function(d0x) {
            d0x.stopped = !0;
            d0x.value = JSON.stringify(d0x.args[0])
        });
        return
    }
    var K0x = "MSG|"
      , kt4x = [];
    var ctY7R = function() {
        var W1x = unescape(window.name || "").trim();
        if (!W1x || W1x.indexOf(K0x) != 0)
            return;
        window.name = "";
        var m0x = k0x.OE3x(W1x.replace(K0x, ""), "|")
          , kR4V = (m0x.origin || "").toLowerCase();
        if (!!kR4V && kR4V != "*" && location.href.toLowerCase().indexOf(kR4V) != 0)
            return;
        h0x.z0x(window, "message", {
            data: JSON.parse(m0x.data || "null"),
            source: window.frames[m0x.self] || m0x.self,
            origin: be1x.bCM6G(m0x.ref || document.referrer)
        })
    };
    var cut7m = function() {
        var bdo8g;
        var cuN7G = function(bz1x, r0x, i0x) {
            if (k0x.di2x(bdo8g, bz1x.w) < 0) {
                bdo8g.push(bz1x.w);
                i0x.splice(r0x, 1);
                bz1x.w.name = bz1x.d
            }
        };
        return function() {
            bdo8g = [];
            k0x.nk5p(kt4x, cuN7G);
            bdo8g = null
        }
    }();
    be1x.bid0x = function() {
        var cve8W = function(j0x) {
            var m0x = {};
            j0x = j0x || bb1x;
            m0x.origin = j0x.origin || "";
            m0x.ref = location.href;
            m0x.self = j0x.source;
            m0x.data = JSON.stringify(j0x.data);
            return K0x + k0x.vH7A(m0x, "|", !0)
        };
        return be1x.bid0x.eH2x(function(d0x) {
            d0x.stopped = !0;
            var bf1x = d0x.args;
            kt4x.unshift({
                w: bf1x[0],
                d: escape(cve8W(bf1x[1]))
            })
        })
    }();
    I0x.fK2x.A0x({
        element: window,
        event: "message"
    });
    window.setInterval(cut7m, 100);
    window.setInterval(ctY7R, 20)
}
)();
(function() {
    var c0x = NEJ.P
      , be1x = c0x("nej.h")
      , a9j = c0x("nej.e")
      , v0x = c0x("nej.j");
    v0x.cvr8j = function() {
        var gC3x = window.name || "_parent"
          , cvu8m = {
            gy3x: window.top,
            gC3x: window,
            bI1x: window.parent
        };
        return function(cR1x, e0x) {
            if (typeof cR1x == "string") {
                cR1x = cvu8m[cR1x] || window.frames[cR1x];
                if (!cR1x)
                    return this
            }
            var j0x = NEJ.X({
                origin: "*",
                source: gC3x
            }, e0x);
            be1x.bid0x(cR1x, j0x);
            return this
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P, iB3x = c0x("nej.c"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), v0x = c0x("nej.j"), O0x = c0x("nej.ut.j"), R0x = {}, bdx8p;
    if (!!O0x.bgK9B)
        return;
    O0x.bgK9B = NEJ.C();
    bdx8p = O0x.bgK9B.N0x(O0x.Lg2x);
    bdx8p.cw1x = function() {
        var fa2x = "NEJ-AJAX-DATA:"
          , Eh0x = !1;
        var bgH9y = function(d0x) {
            var j0x = d0x.data;
            if (j0x.indexOf(fa2x) != 0)
                return;
            j0x = JSON.parse(j0x.replace(fa2x, ""));
            var jZ4d = R0x[j0x.key];
            if (!jZ4d)
                return;
            delete R0x[j0x.key];
            j0x.result = decodeURIComponent(j0x.result || "");
            jZ4d.vy7r(j0x)
        };
        var bgz9q = function() {
            if (!Eh0x) {
                Eh0x = !0;
                h0x.s0x(window, "message", bgH9y)
            }
        };
        return function() {
            this.cE1x();
            bgz9q()
        }
    }();
    bdx8p.cp1x = function(e0x) {
        var gl3x = e0x.request
          , jZ4d = iB3x.bWh2x(gl3x.url)
          , en2x = R0x[jZ4d];
        if (k0x.eL2x(en2x)) {
            en2x.push(this.cp1x.f0x(this, e0x));
            return
        }
        if (!en2x) {
            R0x[jZ4d] = [this.cp1x.f0x(this, e0x)];
            a9j.YH6B({
                src: jZ4d,
                visible: !1,
                onload: function(d0x) {
                    var i0x = R0x[jZ4d];
                    R0x[jZ4d] = h0x.X1x(d0x).contentWindow;
                    k0x.nk5p(i0x, function(dx2x) {
                        try {
                            dx2x()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.AH9y = "frm-" + k0x.ol5q();
        R0x[this.AH9y] = this;
        var j0x = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, gl3x);
        j0x.key = this.AH9y;
        j0x.headers = e0x.headers;
        v0x.cvr8j(R0x[jZ4d], {
            data: j0x
        })
    }
    ;
    bdx8p.ky4C = function() {
        delete R0x[this.AH9y];
        this.vy7r({
            status: 0
        });
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, em2x = c0x("nej.g"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), v0x = c0x("nej.j"), O0x = c0x("nej.ut.j"), R0x = {}, MC2x;
    if (!!O0x.bgs9j)
        return;
    O0x.bgs9j = NEJ.C();
    MC2x = O0x.bgs9j.N0x(O0x.Lg2x);
    MC2x.cw1x = function() {
        var fa2x = "NEJ-UPLOAD-RESULT:"
          , Eh0x = !1;
        var bgH9y = function(d0x) {
            var j0x = d0x.data;
            if (j0x.indexOf(fa2x) != 0)
                return;
            j0x = JSON.parse(j0x.replace(fa2x, ""));
            var jZ4d = R0x[j0x.key];
            if (!jZ4d)
                return;
            delete R0x[j0x.key];
            jZ4d.vy7r(decodeURIComponent(j0x.result))
        };
        var bgz9q = function() {
            if (!Eh0x) {
                Eh0x = !0;
                h0x.s0x(window, "message", bgH9y)
            }
        };
        return function() {
            this.cE1x();
            bgz9q()
        }
    }();
    MC2x.bC1x = function() {
        this.bF1x();
        a9j.cL1x(this.bgo9f);
        delete this.bgo9f;
        window.clearTimeout(this.ei2x);
        delete this.ei2x
    }
    ;
    MC2x.vy7r = function(cK1x) {
        var Q0x;
        try {
            Q0x = JSON.parse(cK1x);
            this.z0x("onload", Q0x)
        } catch (e) {
            this.z0x("onerror", {
                code: em2x.bWp2x,
                message: cK1x
            })
        }
    }
    ;
    MC2x.cp1x = function() {
        var cvA8s = function() {
            var mT5Y, cK1x;
            try {
                var mT5Y = this.bgo9f.contentWindow.document.body
                  , cK1x = mT5Y.innerText || mT5Y.textContent
            } catch (e) {
                return
            }
            this.vy7r(cK1x)
        };
        var bgm9d = function(Y1x, fk2x, rE6y) {
            v0x.bm1x(Y1x, {
                type: "json",
                method: "POST",
                cookie: rE6y,
                mode: parseInt(fk2x) || 0,
                onload: function(j0x) {
                    if (!this.ei2x)
                        return;
                    this.z0x("onuploading", j0x);
                    this.ei2x = window.setTimeout(bgm9d.f0x(this, Y1x, fk2x, rE6y), 1e3)
                }
                .f0x(this),
                onerror: function(ca1x) {
                    if (!this.ei2x)
                        return;
                    this.ei2x = window.setTimeout(bgm9d.f0x(this, Y1x, fk2x, rE6y), 1e3)
                }
                .f0x(this)
            })
        };
        return function(e0x) {
            var gl3x = e0x.request
              , pe5j = e0x.headers
              , fm2x = gl3x.data
              , W1x = "fom-" + k0x.ol5q();
            R0x[W1x] = this;
            fm2x.target = W1x;
            fm2x.method = "POST";
            fm2x.enctype = em2x.DH0x;
            fm2x.encoding = em2x.DH0x;
            var Y1x = fm2x.action || ""
              , lw4A = Y1x.indexOf("?") <= 0 ? "?" : "&";
            fm2x.action = Y1x + lw4A + "_proxy_=form";
            this.bgo9f = a9j.YH6B({
                name: W1x,
                onload: function(d0x) {
                    var en2x = h0x.X1x(d0x);
                    h0x.s0x(en2x, "load", cvA8s.f0x(this));
                    fm2x.submit();
                    var bKC8u = (fm2x.nej_query || bb1x).value;
                    if (!bKC8u)
                        return;
                    var fk2x = (fm2x.nej_mode || bb1x).value
                      , rE6y = (fm2x.nej_cookie || bb1x).value == "true";
                    this.ei2x = window.setTimeout(bgm9d.f0x(this, bKC8u, fk2x, rE6y), 100)
                }
                .f0x(this)
            })
        }
    }();
    MC2x.ky4C = function() {
        this.z0x("onerror", {
            code: em2x.bWt2x,
            message: "客户端终止文件上传"
        });
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , be1x = c0x("nej.h")
      , O0x = c0x("nej.ut.j");
    be1x.blM1x = function() {
        return new XMLHttpRequest
    }
    ;
    be1x.bgg9X = function(fk2x, bei8a, e0x) {
        var bz1x = !!bei8a ? {
            2: O0x.bgs9j
        } : {
            2: O0x.bgK9B,
            3: O0x.bij0x
        };
        return (bz1x[fk2x] || O0x.WR5W).A0x(e0x)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , O0x = c0x("nej.p")
      , be1x = c0x("nej.h");
    if (O0x.nB5G.trident)
        return;
    be1x.blM1x = function() {
        var Ra4e = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cwj8b = function() {
            for (var i = 0, l = Ra4e.length; i < l; i++) {
                try {
                    return new ActiveXObject(Ra4e[i])
                } catch (e) {}
            }
            return null
        };
        return be1x.blM1x.eH2x(function(d0x) {
            if (!!window.XMLHttpRequest)
                return;
            d0x.stopped = !0;
            d0x.value = cwj8b()
        })
    }();
    be1x.bgg9X = function() {
        var DG0x = {
            0: 2,
            1: 3
        };
        return be1x.bgg9X.eH2x(function(d0x) {
            var bf1x = d0x.args
              , fk2x = bf1x[0] || 0;
            bf1x[0] = !!bf1x[1] ? 2 : DG0x[fk2x] || fk2x
        })
    }()
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , br1x = NEJ.F
      , be1x = c0x("nej.h")
      , em2x = c0x("nej.g")
      , k0x = c0x("nej.u")
      , v0x = c0x("nej.j")
      , O0x = c0x("nej.ut.j")
      , oj5o = {}
      , Jl1x = br1x;
    v0x.ky4C = function(fh2x) {
        var R0x = oj5o[fh2x];
        if (!R0x)
            return this;
        R0x.req.ky4C();
        return this
    }
    ;
    v0x.ben8f = function(dZ2x) {
        Jl1x = dZ2x || br1x;
        return this
    }
    ;
    v0x.bm1x = function() {
        var jL4P = (location.protocol + "//" + location.host).toLowerCase();
        var cwo8g = function(Y1x) {
            var kR4V = k0x.cjc5h(Y1x);
            return !!kR4V && kR4V != jL4P
        };
        var cwq8i = function(pe5j) {
            return (pe5j || bb1x)[em2x.yg8Y] == em2x.DH0x
        };
        var cwv8n = function(e0x) {
            var bei8a = cwq8i(e0x.headers);
            if (!cwo8g(e0x.url) && !bei8a)
                return O0x.WR5W.A0x(e0x);
            return be1x.bgg9X(e0x.mode, bei8a, e0x)
        };
        var Ff0x = function(fh2x) {
            var R0x = oj5o[fh2x];
            if (!R0x)
                return;
            if (!!R0x.req)
                R0x.req.T0x();
            delete oj5o[fh2x]
        };
        var bNu8m = function(fh2x, u0x) {
            var R0x = oj5o[fh2x];
            if (!R0x)
                return;
            Ff0x(fh2x);
            try {
                var d0x = {
                    type: u0x,
                    result: arguments[2]
                };
                Jl1x(d0x);
                if (!d0x.stopped)
                    (R0x[u0x] || br1x)(d0x.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var yX8P = function(fh2x, j0x) {
            bNu8m(fh2x, "onload", j0x)
        };
        var Az9q = function(fh2x, ca1x) {
            bNu8m(fh2x, "onerror", ca1x)
        };
        return function(Y1x, e0x) {
            e0x = e0x || {};
            var fh2x = k0x.ol5q()
              , R0x = {
                onload: e0x.onload || br1x,
                onerror: e0x.onerror || br1x
            };
            oj5o[fh2x] = R0x;
            e0x.onload = yX8P.f0x(null, fh2x);
            e0x.onerror = Az9q.f0x(null, fh2x);
            if (!!e0x.query) {
                var lw4A = Y1x.indexOf("?") < 0 ? "?" : "&"
                  , bv1x = e0x.query;
                if (k0x.lG4K(bv1x))
                    bv1x = k0x.cD1x(bv1x);
                if (!!bv1x)
                    Y1x += lw4A + bv1x
            }
            e0x.url = Y1x;
            R0x.req = cwv8n(e0x);
            R0x.req.blW1x(e0x.data);
            return fh2x
        }
    }();
    v0x.hP3x = function(fm2x, e0x) {
        var dM2x = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(dM2x, e0x);
        dM2x.data = fm2x;
        dM2x.method = "POST";
        dM2x.timeout = 0;
        dM2x.headers[em2x.yg8Y] = em2x.DH0x;
        return v0x.bm1x(fm2x.action, dM2x)
    }
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, em2x = c0x("nej.g"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), I0x = c0x("nej.ut"), O0x = c0x("nej.ut.j"), mv4z, gS3x = 6e4;
    if (!!O0x.Vw5B)
        return;
    O0x.Vw5B = NEJ.C();
    mv4z = O0x.Vw5B.N0x(I0x.cJ1x);
    mv4z.cw1x = function() {
        this.cE1x();
        this.Vz5E = {
            onerror: this.cww8o.f0x(this),
            onloaded: this.cwx8p.f0x(this)
        };
        if (!this.constructor.S0x)
            this.constructor.S0x = {
                loaded: {}
            }
    }
    ;
    mv4z.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.MP2x = e0x.version;
        this.bfP8H = e0x.timeout;
        this.Vz5E.version = this.MP2x;
        this.Vz5E.timeout = this.bfP8H
    }
    ;
    mv4z.bRR1x = function(K0x) {
        delete this.constructor.S0x[K0x]
    }
    ;
    mv4z.AX9O = function(K0x) {
        return this.constructor.S0x[K0x]
    }
    ;
    mv4z.bSh1x = function(K0x, j0x) {
        this.constructor.S0x[K0x] = j0x
    }
    ;
    mv4z.beQ8I = br1x;
    mv4z.bSt1x = function(gl3x) {
        h0x.he3x(gl3x)
    }
    ;
    mv4z.bfL8D = function(gl3x) {
        gl3x.src = this.ld4h;
        document.head.appendChild(gl3x)
    }
    ;
    mv4z.Bm9d = function() {
        var R0x = this.AX9O(this.ld4h);
        if (!R0x)
            return;
        window.clearTimeout(R0x.timer);
        this.bSt1x(R0x.request);
        delete R0x.bind;
        delete R0x.timer;
        delete R0x.request;
        this.bRR1x(this.ld4h);
        this.AX9O("loaded")[this.ld4h] = !0
    }
    ;
    mv4z.beW8O = function(W1x) {
        var R0x = this.AX9O(this.ld4h);
        if (!R0x)
            return;
        var i0x = R0x.bind;
        this.Bm9d();
        if (!!i0x && i0x.length > 0) {
            var cF1x;
            while (i0x.length) {
                cF1x = i0x.shift();
                try {
                    cF1x.z0x(W1x, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cF1x.T0x()
            }
        }
    }
    ;
    mv4z.dO2x = function(ca1x) {
        this.beW8O("onerror", ca1x)
    }
    ;
    mv4z.bTh1x = function() {
        this.beW8O("onloaded")
    }
    ;
    mv4z.cwz8r = function(Y1x) {
        this.constructor.A0x(this.Vz5E).MU2x(Y1x)
    }
    ;
    mv4z.bTx1x = function(ca1x) {
        var R0x = this.AX9O(this.xy8q);
        if (!R0x)
            return;
        if (!!ca1x)
            R0x.error++;
        R0x.loaded++;
        if (R0x.loaded < R0x.total)
            return;
        this.bRR1x(this.xy8q);
        this.z0x(R0x.error > 0 ? "onerror" : "onloaded")
    }
    ;
    mv4z.cww8o = function(ca1x) {
        this.bTx1x(!0)
    }
    ;
    mv4z.cwx8p = function() {
        this.bTx1x()
    }
    ;
    mv4z.MU2x = function(Y1x) {
        Y1x = k0x.bot2x(Y1x);
        if (!Y1x) {
            this.z0x("onerror", {
                code: em2x.bwV4Z,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.ld4h = Y1x;
        if (!!this.MP2x)
            this.ld4h += (this.ld4h.indexOf("?") < 0 ? "?" : "&") + this.MP2x;
        if (this.AX9O("loaded")[this.ld4h]) {
            try {
                this.z0x("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.T0x();
            return this
        }
        var R0x = this.AX9O(this.ld4h), gl3x;
        if (!!R0x) {
            R0x.bind.unshift(this);
            R0x.timer = window.clearTimeout(R0x.timer)
        } else {
            gl3x = this.beQ8I();
            R0x = {
                request: gl3x,
                bind: [this]
            };
            this.bSh1x(this.ld4h, R0x);
            h0x.s0x(gl3x, "load", this.bTh1x.f0x(this));
            h0x.s0x(gl3x, "error", this.dO2x.f0x(this, {
                code: em2x.bwC4G,
                message: "无法加载指定资源文件[" + this.ld4h + "]！"
            }))
        }
        if (this.bfP8H != 0)
            R0x.timer = window.setTimeout(this.dO2x.f0x(this, {
                code: em2x.bSM1x,
                message: "指定资源文件[" + this.ld4h + "]载入超时！"
            }), this.bfP8H || gS3x);
        if (!!gl3x)
            this.bfL8D(gl3x);
        this.z0x("onloading");
        return this
    }
    ;
    mv4z.bTN1x = function(i0x) {
        if (!i0x || !i0x.length) {
            this.z0x("onerror", {
                code: em2x.bwV4Z,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.xy8q = k0x.ol5q();
        var R0x = {
            error: 0,
            loaded: 0,
            total: i0x.length
        };
        this.bSh1x(this.xy8q, R0x);
        for (var i = 0, l = i0x.length; i < l; i++) {
            if (!i0x[i]) {
                R0x.total--;
                continue
            }
            this.cwz8r(i0x[i])
        }
        this.z0x("onloading");
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), be1x = c0x("nej.h"), O0x = c0x("nej.ut.j"), VR5W;
    if (!!O0x.bfx8p)
        return;
    O0x.bfx8p = NEJ.C();
    VR5W = O0x.bfx8p.N0x(O0x.Vw5B);
    VR5W.beQ8I = function() {
        var eO2x = a9j.dj2x("iframe");
        eO2x.width = 0;
        eO2x.height = 0;
        eO2x.style.display = "none";
        return eO2x
    }
    ;
    VR5W.bfL8D = function(gl3x) {
        gl3x.src = this.ld4h;
        document.body.appendChild(gl3x)
    }
    ;
    VR5W.dO2x = function(ca1x) {
        var eO2x = (this.AX9O(this.ld4h) || bb1x).request;
        this.beW8O("onerror", ca1x);
        be1x.XC6w(eO2x)
    }
    ;
    VR5W.bTh1x = function() {
        var mT5Y = null
          , eO2x = (this.AX9O(this.ld4h) || bb1x).request;
        try {
            mT5Y = eO2x.contentWindow.document.body
        } catch (ex) {}
        this.beW8O("onloaded", mT5Y);
        be1x.XC6w(eO2x)
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), O0x = c0x("nej.ut.j"), bfy8q;
    if (!!O0x.bfb8T)
        return;
    O0x.bfb8T = NEJ.C();
    bfy8q = O0x.bfb8T.N0x(O0x.Vw5B);
    bfy8q.beQ8I = function() {
        return a9j.dj2x("link")
    }
    ;
    bfy8q.bfL8D = function(gl3x) {
        gl3x.href = this.ld4h;
        document.head.appendChild(gl3x)
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), O0x = c0x("nej.ut.j"), beZ8R;
    if (!!O0x.beV8N)
        return;
    O0x.beV8N = NEJ.C();
    beZ8R = O0x.beV8N.N0x(O0x.Vw5B);
    beZ8R.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.bVa1x = e0x.async;
        this.bfK8C = e0x.charset;
        this.Vz5E.async = !1;
        this.Vz5E.charset = this.bfK8C
    }
    ;
    beZ8R.beQ8I = function() {
        var gl3x = a9j.dj2x("script");
        if (this.bVa1x != null)
            gl3x.async = !!this.bVa1x;
        if (this.bfK8C != null)
            gl3x.charset = this.bfK8C;
        return gl3x
    }
    ;
    beZ8R.bSt1x = function(gl3x) {
        a9j.cL1x(gl3x)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , v0x = c0x("nej.j")
      , O0x = c0x("nej.ut.j");
    v0x.cwA8s = function(Y1x, e0x) {
        O0x.beV8N.A0x(e0x).MU2x(Y1x);
        return this
    }
    ;
    v0x.cwB8t = function(i0x, e0x) {
        O0x.beV8N.A0x(e0x).bTN1x(i0x);
        return this
    }
    ;
    v0x.cGp0x = function(Y1x, e0x) {
        O0x.bfb8T.A0x(e0x).MU2x(Y1x);
        return this
    }
    ;
    v0x.cxv8n = function(i0x, e0x) {
        O0x.bfb8T.A0x(e0x).bTN1x(i0x);
        return this
    }
    ;
    v0x.bzg5l = function(Y1x, e0x) {
        O0x.bfx8p.A0x(e0x).MU2x(Y1x);
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , a9j = c0x("nej.e")
      , h0x = c0x("nej.v")
      , k0x = c0x("nej.u")
      , v0x = c0x("nej.j")
      , I0x = c0x("nej.ut")
      , R0x = {}
      , sU7N = +(new Date) + "-";
    a9j.cX1x = function() {
        var cz1x = 0;
        var VA5F = function() {
            if (cz1x > 0)
                return;
            cz1x = 0;
            h0x.z0x(document, "templateready");
            h0x.he3x(document, "templateready")
        };
        var beM8E = function(gf3x, e0x) {
            var cV1x = a9j.t0x(gf3x, "src");
            if (!cV1x)
                return;
            e0x = e0x || bb1x;
            var fZ3x = e0x.root;
            if (!fZ3x) {
                fZ3x = gf3x.ownerDocument.location.href
            } else {
                fZ3x = k0x.bot2x(fZ3x)
            }
            cV1x = cV1x.split(",");
            k0x.bd1x(cV1x, function(D0x, r0x, i0x) {
                i0x[r0x] = k0x.bot2x(D0x, fZ3x)
            });
            return cV1x
        };
        var cxE8w = function(gf3x, e0x) {
            if (!gf3x)
                return;
            var cV1x = beM8E(gf3x, e0x);
            if (!!cV1x)
                v0x.cxv8n(cV1x, {
                    version: a9j.t0x(gf3x, "version")
                });
            a9j.bHG7z(gf3x.value)
        };
        var cxF8x = function(D0x) {
            cz1x--;
            a9j.bHS7L(D0x);
            VA5F()
        };
        var cxI8A = function(gf3x, e0x) {
            if (!gf3x)
                return;
            var cV1x = beM8E(gf3x, e0x)
              , fu2x = gf3x.value;
            if (!!cV1x) {
                cz1x++;
                var e0x = {
                    version: a9j.t0x(gf3x, "version"),
                    onloaded: cxF8x.f0x(null, fu2x)
                };
                window.setTimeout(v0x.cwB8t.f0x(v0x, cV1x, e0x), 0);
                return
            }
            a9j.bHS7L(fu2x)
        };
        var cxK8C = function(mT5Y) {
            cz1x--;
            a9j.cX1x(mT5Y);
            VA5F()
        };
        var cxL8D = function(gf3x, e0x) {
            if (!gf3x)
                return;
            var cV1x = beM8E(gf3x, e0x)[0];
            if (!!cV1x) {
                cz1x++;
                var e0x = {
                    version: a9j.t0x(gf3x, "version"),
                    onloaded: cxK8C
                };
                window.setTimeout(v0x.bzg5l.f0x(v0x, cV1x, e0x), 0)
            }
        };
        var cxM8E = function(C0x, cK1x) {
            cz1x--;
            a9j.ML2x(C0x, cK1x || "");
            VA5F()
        };
        var cxN8F = function(gf3x, e0x) {
            if (!gf3x || !gf3x.id)
                return;
            var C0x = gf3x.id
              , cV1x = beM8E(gf3x, e0x)[0];
            if (!!cV1x) {
                cz1x++;
                var Y1x = cV1x + (cV1x.indexOf("?") < 0 ? "?" : "&") + (a9j.t0x(gf3x, "version") || "")
                  , e0x = {
                    type: "text",
                    method: "GET",
                    onload: cxM8E.f0x(null, C0x)
                };
                window.setTimeout(v0x.bm1x.f0x(v0x, Y1x, e0x), 0)
            }
        };
        var cyk8c = function(g0x, e0x) {
            var u0x = g0x.name.toLowerCase();
            switch (u0x) {
            case "jst":
                a9j.eB2x(g0x, !0);
                return;
            case "txt":
                a9j.ML2x(g0x.id, g0x.value || "");
                return;
            case "ntp":
                a9j.jm4q(g0x.value || "", g0x.id);
                return;
            case "js":
                cxI8A(g0x, e0x);
                return;
            case "css":
                cxE8w(g0x, e0x);
                return;
            case "html":
                cxL8D(g0x, e0x);
                return;
            case "res":
                cxN8F(g0x, e0x);
                return
            }
        };
        I0x.fK2x.A0x({
            element: document,
            event: "templateready",
            oneventadd: VA5F
        });
        return function(F0x, e0x) {
            F0x = a9j.B0x(F0x);
            if (!!F0x) {
                var i0x = F0x.tagName == "TEXTAREA" ? [F0x] : F0x.getElementsByTagName("textarea");
                k0x.bd1x(i0x, function(g0x) {
                    cyk8c(g0x, e0x)
                });
                a9j.cL1x(F0x, !0)
            }
            VA5F();
            return this
        }
    }();
    a9j.ML2x = function(K0x, D0x) {
        R0x[K0x] = D0x || "";
        return this
    }
    ;
    a9j.iH3x = function(K0x) {
        return R0x[K0x] || ""
    }
    ;
    a9j.jm4q = function(F0x, K0x) {
        K0x = K0x || k0x.ol5q();
        F0x = a9j.B0x(F0x) || F0x;
        a9j.ML2x(sU7N + K0x, F0x);
        a9j.mS5X(F0x);
        return K0x
    }
    ;
    a9j.dD2x = function(K0x) {
        if (!K0x)
            return null;
        K0x = sU7N + K0x;
        var D0x = a9j.iH3x(K0x);
        if (!D0x)
            return null;
        if (k0x.fC2x(D0x)) {
            D0x = a9j.nR5W(D0x);
            a9j.ML2x(K0x, D0x)
        }
        return D0x.cloneNode(!0)
    }
    ;
    a9j.CH0x = function() {
        var Jl1x = function(D0x, K0x) {
            return K0x == "offset" || K0x == "limit"
        };
        return function(i0x, p0x, e0x) {
            var bs1x = [];
            if (!i0x || !i0x.length || !p0x)
                return bs1x;
            e0x = e0x || bb1x;
            var dt2x = i0x.length
              , jY4c = parseInt(e0x.offset) || 0
              , fX3x = Math.min(dt2x, jY4c + (parseInt(e0x.limit) || dt2x))
              , ct1x = {
                total: i0x.length,
                range: [jY4c, fX3x]
            };
            NEJ.X(ct1x, e0x, Jl1x);
            for (var i = jY4c, cF1x; i < fX3x; i++) {
                ct1x.index = i;
                ct1x.data = i0x[i];
                cF1x = p0x.A0x(ct1x);
                var C0x = cF1x.Fp0x();
                R0x[C0x] = cF1x;
                cF1x.T0x = cF1x.T0x.eH2x(function(C0x, cF1x) {
                    delete R0x[C0x];
                    delete cF1x.T0x
                }
                .f0x(null, C0x, cF1x));
                bs1x.push(cF1x)
            }
            return bs1x
        }
    }();
    a9j.bCH6B = function(C0x) {
        return R0x[C0x]
    }
    ;
    a9j.cFZ0x = function(ec2x, e0x) {
        e0x = e0x || bb1x;
        a9j.cX1x(e0x.tid || "template-box");
        h0x.s0x(document, "templateready", function() {
            ec2x.A0x().z0x("onshow", e0x)
        })
    }
    ;
    c0x("dbg").dumpTC = function() {
        return R0x
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), k0x = c0x("nej.u"), I0x = c0x("nej.ut"), O0x = c0x("nej.ui"), b0x;
    if (!!O0x.el2x)
        return;
    O0x.el2x = NEJ.C();
    b0x = O0x.el2x.N0x(I0x.cJ1x);
    b0x.cw1x = function() {
        this.cE1x();
        a9j.bzT5Y();
        this.ch1x();
        this.bW1x()
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.cym8e(e0x.clazz);
        this.bDm6g(e0x.parent)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        this.bDE6y();
        delete this.gh3x;
        a9j.mS5X(this.o0x);
        a9j.x0x(this.o0x, this.bfZ9Q);
        delete this.bfZ9Q
    }
    ;
    b0x.ch1x = br1x;
    b0x.bW1x = function() {
        if (!this.cf1x)
            this.MJ2x();
        this.o0x = a9j.dD2x(this.cf1x);
        if (!this.o0x)
            this.o0x = a9j.dj2x("div", this.mj4n);
        a9j.y0x(this.o0x, this.mj4n)
    }
    ;
    b0x.MJ2x = br1x;
    b0x.cym8e = function(ed2x) {
        this.bfZ9Q = ed2x || "";
        a9j.y0x(this.o0x, this.bfZ9Q)
    }
    ;
    b0x.czS9J = function() {
        if (!this.mj4n)
            return;
        a9j.y0x(this.gh3x, this.mj4n + "-parent")
    }
    ;
    b0x.bDE6y = function() {
        if (!this.mj4n)
            return;
        a9j.x0x(this.gh3x, this.mj4n + "-parent")
    }
    ;
    b0x.lB4F = function() {
        return this.o0x
    }
    ;
    b0x.bDm6g = function(bI1x) {
        if (!this.o0x)
            return this;
        this.bDE6y();
        if (k0x.gK3x(bI1x)) {
            this.gh3x = bI1x(this.o0x)
        } else {
            this.gh3x = a9j.B0x(bI1x);
            if (!!this.gh3x)
                this.gh3x.appendChild(this.o0x)
        }
        this.czS9J();
        return this
    }
    ;
    b0x.J0x = function() {
        if (!this.gh3x || !this.o0x || this.o0x.parentNode == this.gh3x)
            return this;
        this.gh3x.appendChild(this.o0x);
        return this
    }
    ;
    b0x.bt1x = function() {
        a9j.mS5X(this.o0x);
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), k0x = c0x("nej.u"), be1x = c0x("nej.h"), O0x = c0x("nej.ui"), wB8t, bEU6O;
    if (!!O0x.Vk5p)
        return;
    O0x.Vk5p = NEJ.C();
    wB8t = O0x.Vk5p.N0x(O0x.el2x);
    bEU6O = O0x.Vk5p.cs1x;
    wB8t.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.wq8i("oncontentready", e0x.oncontentready || this.czV9M.f0x(this));
        this.cAq9h = !!e0x.nohack;
        this.cAv9m = !!e0x.destroyable;
        this.MG2x(e0x.content)
    }
    ;
    wB8t.bC1x = function() {
        this.z0x("onbeforerecycle");
        this.bF1x();
        this.bdW8O();
        this.MG2x("");
        a9j.fb2x(this.o0x, {
            top: "",
            left: ""
        })
    }
    ;
    wB8t.czV9M = br1x;
    wB8t.ME2x = br1x;
    wB8t.bdW8O = function() {
        a9j.mS5X(this.o0x);
        if (!!this.nN5S) {
            this.nN5S = be1x.buD4H(this.o0x);
            delete this.nN5S
        }
    }
    ;
    wB8t.MG2x = function(bo1x) {
        if (!this.o0x || !this.AF9w || bo1x == null)
            return this;
        bo1x = bo1x || "";
        k0x.fC2x(bo1x) ? this.AF9w.innerHTML = bo1x : this.AF9w.appendChild(bo1x);
        this.z0x("oncontentready", this.AF9w);
        return this
    }
    ;
    wB8t.gD3x = function(bi1x) {
        var D0x = bi1x.top;
        if (D0x != null) {
            D0x += "px";
            a9j.ba1x(this.o0x, "top", D0x);
            a9j.ba1x(this.nN5S, "top", D0x)
        }
        var D0x = bi1x.left;
        if (D0x != null) {
            D0x += "px";
            a9j.ba1x(this.o0x, "left", D0x);
            a9j.ba1x(this.nN5S, "left", D0x)
        }
        return this
    }
    ;
    wB8t.J0x = function() {
        a9j.ba1x(this.o0x, "visibility", "hidden");
        bEU6O.J0x.apply(this, arguments);
        this.ME2x();
        a9j.ba1x(this.o0x, "visibility", "");
        if (!this.cAq9h) {
            this.nN5S = be1x.nN5S(this.o0x)
        }
        return this
    }
    ;
    wB8t.bt1x = function() {
        this.cAv9m ? this.T0x() : this.bdW8O();
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, k0x = c0x("nej.u"), a9j = c0x("nej.e"), O0x = c0x("nej.ui"), BW9N;
    if (!!O0x.bdS8K)
        return;
    O0x.bdS8K = NEJ.C();
    BW9N = O0x.bdS8K.N0x(O0x.el2x);
    BW9N.bl1x = function(e0x) {
        this.UY5d();
        this.bn1x(this.cAA9r(e0x));
        this.cg1x.onbeforerecycle = this.T0x.f0x(this);
        this.oU5Z = this.bgC9t()
    }
    ;
    BW9N.bC1x = function() {
        this.z0x("onbeforerecycle");
        this.bF1x();
        delete this.cg1x;
        a9j.mS5X(this.o0x);
        var AU9L = this.oU5Z;
        if (!!AU9L) {
            delete this.oU5Z;
            AU9L.T0x()
        }
    }
    ;
    BW9N.bgC9t = br1x;
    BW9N.cAA9r = function(e0x) {
        var m0x = {};
        k0x.eI2x(e0x, function(p0x, K0x) {
            this.cg1x.hasOwnProperty(K0x) ? this.cg1x[K0x] = p0x : m0x[K0x] = p0x
        }, this);
        return m0x
    }
    ;
    BW9N.UY5d = function() {
        this.cg1x = {
            clazz: "",
            parent: null,
            content: this.o0x,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    }
    ;
    BW9N.J0x = function() {
        if (!!this.oU5Z)
            this.oU5Z.J0x();
        this.z0x("onaftershow");
        return this
    }
    ;
    BW9N.bt1x = function() {
        if (!!this.oU5Z)
            this.oU5Z.bt1x();
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, em2x = c0x("nej.g"), be1x = c0x("nej.h"), a9j = c0x("nej.e"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), O0x = c0x("nej.ui"), UR5W, bHh7a;
    if (!!O0x.MB2x)
        return;
    var iX3x = a9j.to7h(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + em2x.bwt4x + ");}");
    O0x.MB2x = NEJ.C();
    UR5W = O0x.MB2x.N0x(O0x.el2x);
    bHh7a = O0x.MB2x.cs1x;
    UR5W.bl1x = function(e0x) {
        this.bn1x(e0x);
        var bo1x = e0x.content || "&nbsp;";
        k0x.fC2x(bo1x) ? this.o0x.innerHTML = bo1x : this.o0x.appendChild(bo1x)
    }
    ;
    UR5W.bC1x = function() {
        this.bF1x();
        this.o0x.innerHTML = "&nbsp;"
    }
    ;
    UR5W.ch1x = function() {
        this.mj4n = iX3x
    }
    ;
    UR5W.J0x = function() {
        be1x.buG4K(this.o0x);
        bHh7a.J0x.apply(this, arguments);
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), O0x = c0x("nej.ut"), wp8h;
    if (!!O0x.wb8T)
        return;
    O0x.wb8T = NEJ.C();
    wp8h = O0x.wb8T.N0x(O0x.cJ1x);
    wp8h.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.cAW9N = !!e0x.overflow;
        this.o0x = a9j.B0x(e0x.body);
        this.Bk9b = a9j.B0x(e0x.view) || a9j.bFa6U(this.o0x);
        this.bJi7b = a9j.B0x(e0x.mbar) || this.o0x;
        this.bdC8u = parseInt(e0x.direction) || 0;
        if (!!e0x.isRelative) {
            this.o0x.style.position = "relative";
            this.bgL9C = true;
            this.bgM9D()
        }
        this.bX1x([[document, "mouseup", this.bgR9I.f0x(this)], [document, "mousemove", this.bgX9O.f0x(this)], [this.bJi7b, "mousedown", this.UJ5O.f0x(this)]])
    }
    ;
    wp8h.bgM9D = function() {
        if (!!this.bgL9C) {
            this.My2x = a9j.hU3x(this.o0x, this.Bk9b);
            this.My2x.x -= parseInt(a9j.dh2x(this.o0x, "left")) || 0;
            this.My2x.y -= parseInt(a9j.dh2x(this.o0x, "top")) || 0
        }
    }
    ;
    wp8h.bC1x = function() {
        this.bF1x();
        delete this.o0x;
        delete this.bJi7b;
        delete this.Bk9b
    }
    ;
    wp8h.bhl0x = function() {
        return {
            x: Math.max(this.Bk9b.clientWidth, this.Bk9b.scrollWidth) - this.o0x.offsetWidth,
            y: Math.max(this.Bk9b.clientHeight, this.Bk9b.scrollHeight) - this.o0x.offsetHeight
        }
    }
    ;
    wp8h.UJ5O = function(d0x) {
        h0x.bg1x(d0x);
        if (!!this.hT3x)
            return;
        this.hT3x = {
            x: h0x.jG4K(d0x),
            y: h0x.lZ4d(d0x)
        };
        this.bKA8s = this.bhl0x();
        this.z0x("ondragstart", d0x)
    }
    ;
    wp8h.bgX9O = function(d0x) {
        if (!this.hT3x)
            return;
        var bi1x = {
            x: h0x.jG4K(d0x),
            y: h0x.lZ4d(d0x)
        };
        var pu5z = bi1x.x - this.hT3x.x
          , px5C = bi1x.y - this.hT3x.y
          , D0x = {
            top: (parseInt(a9j.dh2x(this.o0x, "top")) || 0) + px5C,
            left: (parseInt(a9j.dh2x(this.o0x, "left")) || 0) + pu5z
        };
        if (this.bgL9C) {
            this.bgM9D();
            D0x.top = D0x.top + this.My2x.y;
            D0x.left = D0x.left + this.My2x.x
        }
        this.hT3x = bi1x;
        this.gD3x(D0x)
    }
    ;
    wp8h.bgR9I = function(d0x) {
        if (!this.hT3x)
            return;
        delete this.bKA8s;
        delete this.hT3x;
        this.z0x("ondragend", this.bhp0x())
    }
    ;
    wp8h.gD3x = function(d0x) {
        if (!this.cAW9N) {
            var bKL8D = this.bKA8s || this.bhl0x();
            d0x.top = Math.min(bKL8D.y, Math.max(0, d0x.top));
            d0x.left = Math.min(bKL8D.x, Math.max(0, d0x.left))
        }
        var cj1x = this.o0x.style;
        if (this.bgL9C) {
            this.bgM9D();
            d0x.top = d0x.top - this.My2x.y;
            d0x.left = d0x.left - this.My2x.x
        }
        if (this.bdC8u == 0 || this.bdC8u == 2)
            cj1x.top = d0x.top + "px";
        if (this.bdC8u == 0 || this.bdC8u == 1)
            cj1x.left = d0x.left + "px";
        this.z0x("onchange", d0x);
        return this
    }
    ;
    wp8h.bhp0x = function() {
        return {
            left: parseInt(a9j.dh2x(this.o0x, "left")) || 0,
            top: parseInt(a9j.dh2x(this.o0x, "top")) || 0
        }
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = NEJ.P("nej.e"), h0x = NEJ.P("nej.v"), k0x = NEJ.P("nej.u"), I0x = NEJ.P("nej.ut"), O0x = NEJ.P("nej.ui"), iX3x, ge3x, b0x, L0x;
    if (!!O0x.bcS8K)
        return;
    O0x.bcS8K = NEJ.C();
    b0x = O0x.bcS8K.N0x(O0x.Vk5p);
    L0x = O0x.bcS8K.cs1x;
    b0x.cw1x = function() {
        this.rP6J = {};
        this.kG4K = {
            onchange: this.bgX9O.f0x(this)
        };
        this.cE1x()
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.cBA9r(e0x.mask);
        this.cBI9z(e0x.align);
        this.BR9I(e0x.title);
        if (!e0x.draggable)
            return;
        this.iS3x = I0x.wb8T.A0x(this.kG4K)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        delete this.qH6B;
        delete this.Uy5D;
        if (!!this.BX9O) {
            this.BX9O.T0x();
            delete this.BX9O
        }
        if (!!this.iS3x) {
            this.iS3x.T0x();
            delete this.iS3x
        }
    }
    ;
    b0x.ch1x = function() {
        this.mj4n = iX3x;
        this.cf1x = ge3x
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i0x = a9j.dk2x(this.o0x);
        this.AF9w = i0x[1];
        this.kG4K.mbar = i0x[0];
        this.kG4K.body = this.o0x;
        h0x.s0x(i0x[2], "mousedown", this.cCa9R.f0x(this));
        h0x.s0x(this.kG4K.mbar, "mousedown", this.UJ5O.f0x(this));
        this.bNR8J = a9j.dk2x(this.kG4K.mbar)[0]
    }
    ;
    b0x.cCa9R = function(d0x) {
        h0x.bg1x(d0x);
        this.z0x("onclose", d0x);
        if (!d0x.stopped) {
            this.bt1x()
        }
    }
    ;
    b0x.UJ5O = function(d0x) {
        h0x.z0x(document, "click")
    }
    ;
    b0x.bgX9O = function(d0x) {
        if (!this.nN5S)
            return;
        a9j.fb2x(this.nN5S, {
            top: d0x.top + "px",
            left: d0x.left + "px"
        })
    }
    ;
    b0x.ME2x = function() {
        var ev2x = [function() {
            return 0
        }
        , function(nW5b, mR5W, bi1x, K0x) {
            if (K0x == "top" && window.top != window.self) {
                var bcJ8B = 0
                  , Fw0x = 0;
                if (top.g_topBarHeight)
                    bcJ8B = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight)
                    Fw0x = top.g_bottomBarHeight;
                if (nW5b.top <= bcJ8B) {
                    var bhA0x = Math.max(0, (mR5W.height - (bcJ8B - nW5b.top) - Fw0x - bi1x.height) / 2);
                    return bhA0x + bcJ8B
                } else {
                    var bhA0x = Math.max(0, (mR5W.height - Fw0x - bi1x.height) / 2);
                    return bhA0x + nW5b.top
                }
            }
            return Math.max(0, nW5b[K0x] + (mR5W[iy3x[K0x]] - bi1x[iy3x[K0x]]) / 2)
        }
        , function(nW5b, mR5W, bi1x, K0x) {
            return nW5b[K0x] + (mR5W[iy3x[K0x]] - bi1x[iy3x[K0x]])
        }
        ]
          , cCr9i = ["left", "top"]
          , iy3x = {
            left: "width",
            top: "height"
        };
        return function() {
            var D0x = {}
              , cj1x = this.o0x.style
              , jD4H = a9j.oy5D()
              , nW5b = {
                left: jD4H.scrollLeft,
                top: jD4H.scrollTop
            }
              , mR5W = {
                width: jD4H.clientWidth,
                height: jD4H.clientHeight
            }
              , bi1x = {
                width: this.o0x.offsetWidth,
                height: this.o0x.offsetHeight
            }
              , dq2x = {
                left: jD4H.clientWidth - this.o0x.offsetWidth,
                top: jD4H.clientHeight - this.o0x.offsetHeight
            };
            k0x.bd1x(cCr9i, function(K0x, r0x) {
                var dx2x = ev2x[this.qH6B[r0x]];
                if (!dx2x)
                    return;
                D0x[K0x] = dx2x(nW5b, mR5W, bi1x, K0x)
            }, this);
            this.gD3x(D0x)
        }
    }();
    b0x.cCw9n = function() {
        if (!this.BX9O) {
            if (!this.Uy5D)
                return;
            this.rP6J.parent = this.gh3x;
            this.BX9O = this.Uy5D.A0x(this.rP6J)
        }
        this.BX9O.J0x()
    }
    ;
    b0x.bdW8O = function() {
        if (!!this.BX9O)
            this.BX9O.bt1x();
        L0x.bdW8O.apply(this, arguments)
    }
    ;
    b0x.cBA9r = function(lp4t) {
        if (!!lp4t) {
            if (lp4t instanceof O0x.MB2x) {
                this.BX9O = lp4t;
                return
            }
            if (k0x.gK3x(lp4t)) {
                this.Uy5D = lp4t;
                return
            }
            this.Uy5D = O0x.MB2x;
            if (k0x.fC2x(lp4t))
                this.rP6J.clazz = lp4t;
            return
        }
        this.Uy5D = null
    }
    ;
    b0x.BR9I = function(ep2x, dV2x) {
        if (!!this.bNR8J) {
            var bag7Z = !dV2x ? "innerText" : "innerHTML";
            this.bNR8J[bag7Z] = ep2x || "标题"
        }
        return this
    }
    ;
    b0x.cBI9z = function() {
        var df2x = /\s+/
          , cCx9o = {
            left: 0,
            center: 1,
            right: 2,
            auto: 3
        }
          , cCy9p = {
            top: 0,
            middle: 1,
            bottom: 2,
            auto: 3
        };
        return function(or5w) {
            this.qH6B = (or5w || "").split(df2x);
            var cl1x = cCx9o[this.qH6B[0]];
            if (cl1x == null)
                cl1x = 1;
            this.qH6B[0] = cl1x;
            var cl1x = cCy9p[this.qH6B[1]];
            if (cl1x == null)
                cl1x = 1;
            this.qH6B[1] = cl1x;
            return this
        }
    }();
    b0x.J0x = function() {
        L0x.J0x.apply(this, arguments);
        this.cCw9n();
        return this
    }
    ;
    iX3x = a9j.to7h(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    ge3x = a9j.jm4q('<div class="' + iX3x + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
}
)();
(function() {
    var c0x = NEJ.P, k0x = c0x("nej.u"), O0x = c0x("nej.ui"), bhD0x;
    if (!!O0x.bcA8s)
        return;
    O0x.bcA8s = NEJ.C();
    bhD0x = O0x.bcA8s.N0x(O0x.bdS8K);
    bhD0x.bgC9t = function() {
        return O0x.bcS8K.A0x(this.cg1x)
    }
    ;
    bhD0x.UY5d = function() {
        O0x.bcA8s.cs1x.UY5d.apply(this, arguments);
        this.cg1x.mask = null;
        this.cg1x.title = "标题";
        this.cg1x.align = "";
        this.cg1x.draggable = !1;
        this.cg1x.onclose = null
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), bc1x = c0x("nej.ui"), n0x = c0x("nm.l"), b0x, L0x;
    n0x.eo2x = NEJ.C();
    b0x = n0x.eo2x.N0x(bc1x.bcA8s);
    b0x.bl1x = function(e0x) {
        e0x.clazz = "m-layer z-show " + (e0x.clazz || "");
        e0x.nohack = true;
        e0x.draggable = true;
        this.bn1x(e0x)
    }
    ;
    b0x.dY2x = function(g0x, bG1x) {
        if (!g0x)
            return;
        a9j.ba1x(g0x, "display", !bG1x ? "none" : "");
        g0x.lastChild.innerText = bG1x || ""
    }
    ;
    b0x.dS2x = function(gP3x, db1x, Ur5w, Up5u) {
        var ec2x = "js-lock";
        if (db1x === undefined)
            return a9j.bE1x(gP3x, ec2x);
        !db1x ? a9j.x0x(gP3x, ec2x) : a9j.y0x(gP3x, ec2x);
        gP3x.firstChild.innerText = !db1x ? Ur5w : Up5u
    }
    ;
    n0x.eo2x.J0x = function(e0x) {
        e0x = e0x || {};
        if (e0x.mask === undefined)
            e0x.mask = "m-mask";
        if (e0x.parent === undefined)
            e0x.parent = document.body;
        if (e0x.draggable === undefined)
            e0x.draggable = true;
        !!this.fg2x && this.fg2x.T0x();
        this.fg2x = this.A0x(e0x);
        this.fg2x.J0x(e0x);
        return this.fg2x
    }
    ;
    n0x.eo2x.bt1x = function() {
        !!this.fg2x && this.fg2x.T0x()
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), n0x = c0x("nm.l"), b0x, L0x;
    n0x.bhK0x = NEJ.C();
    b0x = n0x.bhK0x.N0x(n0x.eo2x);
    L0x = n0x.bhK0x.cs1x;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        if (e0x.bubble === undefined)
            e0x.bubble = true;
        this.Uj5o = e0x.bubble;
        this.qR6L = e0x.message || ""
    }
    ;
    b0x.ch1x = function() {
        this.cf1x = a9j.jm4q('<div class="lyct f-cb f-tc"></div>')
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        h0x.s0x(this.o0x, "click", this.cM1x.f0x(this))
    }
    ;
    b0x.cM1x = function(d0x) {
        var g0x = h0x.X1x(d0x, "d:action");
        if (!g0x)
            return;
        if (g0x.href)
            h0x.cn1x(d0x);
        if (a9j.t0x(g0x, "action") == "close")
            this.bt1x();
        if (this.Uj5o === !1)
            h0x.tW7P(d0x);
        this.z0x("onaction", a9j.t0x(g0x, "action"))
    }
    ;
    b0x.J0x = function() {
        L0x.J0x.call(this);
        this.o0x.innerHTML = this.qR6L
    }
    ;
    var gG3x = a9j.eB2x('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l0x.mV5a = function() {
        var eg2x;
        var cF1x;
        var bhQ0x = function(eN2x, V0x) {
            if (k0x.gK3x(eN2x, "function") && eN2x(V0x) != -1)
                cF1x.T0x()
        };
        var Dt0x = function() {
            !!cF1x && cF1x.bt1x()
        };
        return function(e0x) {
            clearTimeout(eg2x);
            e0x = e0x || {};
            e0x.title = e0x.title || "提示";
            e0x.clazz = e0x.clazz || "";
            e0x.parent = e0x.parent || document.body;
            e0x.buttons = e0x.buttons || [];
            e0x.message = a9j.cd1x(gG3x, e0x);
            e0x.onaction = bhQ0x.f0x(null, e0x.action);
            if (e0x.mask === undefined)
                e0x.mask = true;
            if (e0x.draggable === undefined)
                e0x.draggable = true;
            !!cF1x && cF1x.T0x();
            cF1x = n0x.bhK0x.A0x(e0x);
            cF1x.J0x();
            if (e0x.autoclose)
                eg2x = setTimeout(Dt0x.f0x(null), 2e3);
            return cF1x
        }
    }();
    l0x.fs2x = function(e0x) {
        e0x = e0x || {};
        e0x.clazz = e0x.clazz || "m-layer-w1";
        e0x.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e0x.btntxt || "确定"
        }];
        var cF1x = l0x.mV5a(e0x);
        return cF1x
    }
    ;
    l0x.ho3x = function(e0x) {
        e0x = e0x || {};
        e0x.clazz = e0x.clazz || "m-layer-w2";
        e0x.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e0x.btnok || "确定",
            style: e0x.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e0x.btncc || "取消",
            style: e0x.ccstyle || ""
        }];
        var cF1x = l0x.mV5a(e0x);
        return cF1x
    }
}
)();
(function() {
    var c0x = NEJ.P
      , br1x = NEJ.F
      , a9j = c0x("nej.e")
      , h0x = c0x("nej.v")
      , k0x = c0x("nej.u");
    a9j.cCD9u = function() {
        var gL3x = /[\r\n]/gi
          , R0x = {};
        var cCJ9A = function(cO1x) {
            return (cO1x || "").replace(gL3x, "aa").length
        };
        var bVs1x = function(C0x) {
            var bh1x = R0x[C0x]
              , bVy1x = a9j.B0x(C0x)
              , qV6P = a9j.B0x(C0x + "-counter");
            if (!bVy1x || !bh1x)
                return;
            var d0x = {
                input: bVy1x.value
            };
            d0x.length = bh1x.onlength(d0x.input);
            d0x.delta = bh1x.max - d0x.length;
            bh1x.onchange(d0x);
            qV6P.innerHTML = d0x.value || "剩余" + d0x.delta + "个字"
        };
        return function(F0x, e0x) {
            var C0x = a9j.lP4T(F0x);
            if (!C0x || !!R0x[C0x])
                return;
            var bh1x = NEJ.X({}, e0x);
            bh1x.onchange = bh1x.onchange || br1x;
            bh1x.onlength = cCJ9A;
            if (!bh1x.max) {
                var bVT2x = parseInt(a9j.gJ3x(C0x, "maxlength"))
                  , byx4B = parseInt(a9j.t0x(C0x, "maxLength"));
                bh1x.max = bVT2x || byx4B || 100;
                if (!bVT2x && !!byx4B)
                    bh1x.onlength = k0x.fv2x
            }
            R0x[C0x] = bh1x;
            h0x.s0x(C0x, "input", bVs1x.f0x(null, C0x));
            var g0x = a9j.JW2x(C0x, {
                nid: bh1x.nid || "js-counter",
                clazz: bh1x.clazz
            });
            bh1x.xid = C0x + "-counter";
            g0x.id = bh1x.xid;
            bVs1x(C0x)
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , be1x = c0x("nej.h");
    be1x.bhV0x = function(F0x, ed2x) {}
}
)();
(function() {
    var c0x = NEJ.P
      , br1x = NEJ.F
      , O0x = c0x("nej.p")
      , a9j = c0x("nej.e")
      , h0x = c0x("nej.v")
      , be1x = c0x("nej.h");
    if (O0x.nB5G.trident)
        return;
    be1x.bhV0x = function() {
        var R0x = {};
        var IJ1x = function(d0x) {
            var dn2x = h0x.X1x(d0x);
            if (!!dn2x.value)
                return;
            a9j.ba1x(a9j.JW2x(dn2x), "display", "none")
        };
        var DL0x = function(d0x) {
            var dn2x = h0x.X1x(d0x);
            if (!!dn2x.value)
                return;
            a9j.ba1x(a9j.JW2x(dn2x), "display", "")
        };
        var cCM9D = function(dn2x, ed2x) {
            var C0x = a9j.lP4T(dn2x)
              , iV3x = a9j.JW2x(dn2x, {
                tag: "label",
                clazz: ed2x
            });
            iV3x.htmlFor = C0x;
            var cK1x = a9j.gJ3x(dn2x, "placeholder") || "";
            iV3x.innerText = cK1x == "null" ? "" : cK1x;
            var ce1x = dn2x.offsetHeight + "px";
            a9j.fb2x(iV3x, {
                left: 0,
                display: !dn2x.value ? "" : "none"
            })
        };
        return be1x.bhV0x.eH2x(function(d0x) {
            d0x.stopped = !0;
            var bf1x = d0x.args
              , dn2x = a9j.B0x(bf1x[0]);
            if (!!R0x[dn2x.id])
                return;
            cCM9D(dn2x, bf1x[1]);
            R0x[dn2x.id] = !0;
            h0x.s0x(dn2x, "blur", DL0x.f0x(null));
            h0x.s0x(dn2x, "focus", IJ1x.f0x(null))
        })
    }()
}
)();
(function() {
    var c0x = NEJ.P
      , be1x = c0x("nej.h")
      , a9j = c0x("nej.e")
      , cZ1x = c0x("nej.x");
    a9j.gr3x = cZ1x.gr3x = function(F0x, ed2x) {
        be1x.bhV0x(F0x, a9j.t0x(F0x, "holder") || ed2x || "js-placeholder");
        return this
    }
    ;
    cZ1x.isChange = !0
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), O0x = c0x("nej.ut"), hN3x;
    if (!!O0x.Ue5j)
        return;
    O0x.Ue5j = NEJ.C();
    hN3x = O0x.Ue5j.N0x(O0x.cJ1x);
    hN3x.cw1x = function() {
        this.cE1x();
        this.Fz0x = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    }
    ;
    hN3x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.go3x = document.forms[e0x.form] || a9j.B0x(e0x.form);
        this.bX1x([[this.go3x, "keypress", this.cCQ9H.f0x(this)]]);
        this.qR6L = e0x.message || {};
        this.qR6L.pass = this.qR6L.pass || "&nbsp;";
        var fk2x = this.pS6M(this.go3x, "focusMode", 1);
        if (!isNaN(fk2x)) {
            this.bAi5n = {
                mode: fk2x,
                clazz: e0x.focus
            }
        }
        this.AQ9H = e0x.holder;
        this.Fz0x.tp.clazz = "js-mhd " + (e0x.tip || "js-tip");
        this.Fz0x.ok.clazz = "js-mhd " + (e0x.pass || "js-pass");
        this.Fz0x.er.clazz = "js-mhd " + (e0x.error || "js-error");
        this.bAs5x = e0x.invalid || "js-invalid";
        this.cCZ9Q(e0x);
        this.gI3x();
        if (!!this.AS9J)
            this.AS9J.focus()
    }
    ;
    hN3x.bC1x = function() {
        this.bF1x();
        delete this.qR6L;
        delete this.AS9J;
        delete this.FA0x;
        delete this.go3x;
        delete this.bBt5y;
        delete this.TR4V
    }
    ;
    hN3x.pS6M = function(g0x, xA8s, u0x) {
        var D0x = a9j.t0x(g0x, xA8s);
        switch (u0x) {
        case 1:
            return parseInt(D0x);
        case 2:
            return (D0x || "").toLowerCase() == "true";
        case 3:
            return this.biA0x(D0x)
        }
        return D0x
    }
    ;
    hN3x.Bb9S = function(D0x, u0x) {
        if (u0x == "date")
            return this.biA0x(D0x);
        return parseInt(D0x)
    }
    ;
    hN3x.bbH7A = function() {
        var kn4r = /^button|submit|reset|image|hidden|file$/i;
        return function(g0x) {
            g0x = this.B0x(g0x) || g0x;
            var u0x = g0x.type;
            return !!g0x.name && !kn4r.test(g0x.type || "")
        }
    }();
    hN3x.cDd9U = function() {
        var kn4r = /^hidden$/i;
        return function(g0x) {
            if (this.bbH7A(g0x))
                return !0;
            g0x = this.B0x(g0x) || g0x;
            var u0x = g0x.type || "";
            return kn4r.test(u0x)
        }
    }();
    hN3x.biA0x = function() {
        var df2x = /[-\/]/;
        var cDS0x = function(D0x) {
            if (!D0x)
                return "";
            D0x = D0x.split(df2x);
            D0x.push(D0x.shift());
            return D0x.join("/")
        };
        return function(D0x) {
            if ((D0x || "").toLowerCase() == "now")
                return +(new Date);
            return Date.parse(cDS0x(D0x))
        }
    }();
    hN3x.cCQ9H = function(d0x) {
        if (d0x.keyCode != 13)
            return;
        this.z0x("onenter", d0x)
    }
    ;
    hN3x.cEa0x = function(C0x, W1x) {
        var sq6k = this.TR4V[W1x]
          , D0x = this.pS6M(C0x, W1x);
        if (!D0x || !sq6k)
            return;
        this.bbE7x(C0x, sq6k);
        this.biC0x(C0x, W1x, D0x)
    }
    ;
    hN3x.cEc0x = function(C0x, W1x) {
        try {
            var bCL6F = this.pS6M(C0x, W1x);
            if (!bCL6F)
                return;
            var D0x = new RegExp(bCL6F);
            this.biC0x(C0x, W1x, D0x);
            this.bbE7x(C0x, this.TR4V[W1x])
        } catch (e) {}
    }
    ;
    hN3x.cEj0x = function(C0x, W1x) {
        var sq6k = this.TR4V[W1x];
        if (!!sq6k && this.pS6M(C0x, W1x, 2))
            this.bbE7x(C0x, sq6k)
    }
    ;
    hN3x.biI0x = function(C0x, W1x, D0x) {
        D0x = parseInt(D0x);
        if (isNaN(D0x))
            return;
        this.biC0x(C0x, W1x, D0x);
        this.bbE7x(C0x, this.TR4V[W1x])
    }
    ;
    hN3x.bCW6Q = function(C0x, W1x) {
        this.biI0x(C0x, W1x, this.pS6M(C0x, W1x))
    }
    ;
    hN3x.bCY6S = function(C0x, W1x) {
        this.biI0x(C0x, W1x, a9j.gJ3x(C0x, W1x))
    }
    ;
    hN3x.bDa6U = function(C0x, W1x, u0x) {
        var D0x = this.Bb9S(this.pS6M(C0x, W1x), this.pS6M(C0x, "type"));
        this.biI0x(C0x, W1x, D0x)
    }
    ;
    hN3x.cEo0x = function() {
        var gL3x = /^input|textarea$/i;
        var IJ1x = function(d0x) {
            this.pZ6T(h0x.X1x(d0x))
        };
        var DL0x = function(d0x) {
            var g0x = h0x.X1x(d0x);
            if (!this.pS6M(g0x, "ignore", 2)) {
                this.bDl6f(g0x)
            }
        };
        return function(g0x) {
            if (this.pS6M(g0x, "autoFocus", 2))
                this.AS9J = g0x;
            var rl6f = a9j.gJ3x(g0x, "placeholder");
            if (!!rl6f && rl6f != "null")
                a9j.gr3x(g0x, this.AQ9H);
            if (!!this.bAi5n && gL3x.test(g0x.tagName))
                a9j.my4C(g0x, this.bAi5n);
            var C0x = a9j.lP4T(g0x);
            this.cEj0x(C0x, "required");
            this.cEa0x(C0x, "type");
            this.cEc0x(C0x, "pattern");
            this.bCY6S(C0x, "maxlength");
            this.bCY6S(C0x, "minlength");
            this.bCW6Q(C0x, "maxLength");
            this.bCW6Q(C0x, "minLength");
            this.bDa6U(C0x, "min");
            this.bDa6U(C0x, "max");
            var W1x = g0x.name;
            this.qR6L[W1x + "-tip"] = this.pS6M(g0x, "tip");
            this.qR6L[W1x + "-error"] = this.pS6M(g0x, "message");
            this.pZ6T(g0x);
            var bx1x = this.FA0x[C0x]
              , j0x = (bx1x || bb1x).data || bb1x
              , TH4L = this.pS6M(g0x, "counter", 2);
            if (TH4L && (j0x.maxlength || j0x.maxLength)) {
                a9j.cCD9u(C0x, {
                    nid: this.Fz0x.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!bx1x && gL3x.test(g0x.tagName)) {
                this.bX1x([[g0x, "focus", IJ1x.f0x(this)], [g0x, "blur", DL0x.f0x(this)]])
            } else if (this.pS6M(g0x, "focus", 2)) {
                this.bX1x([[g0x, "focus", IJ1x.f0x(this)]])
            }
        }
    }();
    hN3x.cCZ9Q = function() {
        var FC0x = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return !v || !isNaN(this.biA0x(v))
            }
        };
        var cEp0x = {
            required: function(g0x) {
                var u0x = g0x.type
                  , cEv0x = !g0x.value
                  , cEy0x = (u0x == "checkbox" || u0x == "radio") && !g0x.checked;
                if (cEy0x || cEv0x)
                    return -1
            },
            type: function(g0x, e0x) {
                var df2x = this.bBt5y[e0x.type]
                  , fu2x = g0x.value.trim()
                  , cEA0x = !!df2x.test && !df2x.test(fu2x)
                  , cEU0x = k0x.gK3x(df2x) && !df2x.call(this, fu2x);
                if (cEA0x || cEU0x)
                    return -2
            },
            pattern: function(g0x, e0x) {
                if (!e0x.pattern.test(g0x.value))
                    return -3
            },
            maxlength: function(g0x, e0x) {
                if (g0x.value.length > e0x.maxlength)
                    return -4
            },
            minlength: function(g0x, e0x) {
                if (g0x.value.length < e0x.minlength)
                    return -5
            },
            maxLength: function(g0x, e0x) {
                if (k0x.fv2x(g0x.value) > e0x.maxLength)
                    return -4
            },
            minLength: function(g0x, e0x) {
                if (k0x.fv2x(g0x.value) < e0x.minLength)
                    return -5
            },
            min: function(g0x, e0x) {
                var gX3x = this.Bb9S(g0x.value, e0x.type);
                if (isNaN(gX3x) || gX3x < e0x.min)
                    return -6
            },
            max: function(g0x, e0x) {
                var gX3x = this.Bb9S(g0x.value, e0x.type);
                if (isNaN(gX3x) || gX3x > e0x.max)
                    return -7
            }
        };
        return function(e0x) {
            this.bBt5y = NEJ.X(NEJ.X({}, FC0x), e0x.type);
            this.TR4V = NEJ.X(NEJ.X({}, cEp0x), e0x.attr)
        }
    }();
    hN3x.bbE7x = function(C0x, zc8U) {
        if (!k0x.gK3x(zc8U))
            return;
        var bx1x = this.FA0x[C0x];
        if (!bx1x || !bx1x.func) {
            bx1x = bx1x || {};
            bx1x.func = [];
            this.FA0x[C0x] = bx1x
        }
        bx1x.func.push(zc8U)
    }
    ;
    hN3x.biC0x = function(C0x, W1x, D0x) {
        if (!W1x)
            return;
        var bx1x = this.FA0x[C0x];
        if (!bx1x || !bx1x.data) {
            bx1x = bx1x || {};
            bx1x.data = {};
            this.FA0x[C0x] = bx1x
        }
        bx1x.data[W1x] = D0x
    }
    ;
    hN3x.bDl6f = function(g0x) {
        g0x = this.B0x(g0x) || g0x;
        var bx1x = this.FA0x[a9j.lP4T(g0x)];
        if (!g0x || !bx1x || !this.bbH7A(g0x))
            return !0;
        var m0x;
        k0x.eI2x(bx1x.func, function(ev2x) {
            m0x = ev2x.call(this, g0x, bx1x.data);
            return m0x != null
        }, this);
        if (m0x == null) {
            var d0x = {
                target: g0x,
                form: this.go3x
            };
            this.z0x("oncheck", d0x);
            m0x = d0x.value
        }
        var d0x = {
            target: g0x,
            form: this.go3x
        };
        if (m0x != null) {
            d0x.code = m0x;
            this.z0x("oninvalid", d0x);
            if (!d0x.stopped) {
                this.cEZ0x(g0x, d0x.value || this.qR6L[g0x.name + m0x])
            }
        } else {
            this.z0x("onvalid", d0x);
            if (!d0x.stopped)
                this.cEY0x(g0x, d0x.value)
        }
        return m0x == null
    }
    ;
    hN3x.zk9b = function() {
        var cEX0x = function(bcP8H, bcR8J) {
            return bcP8H == bcR8J ? "block" : "none"
        };
        var cEW0x = function(g0x, u0x, bG1x) {
            var rl6f = bEX6R.call(this, g0x, u0x);
            if (!rl6f && !!bG1x)
                rl6f = a9j.JW2x(g0x, this.Fz0x[u0x]);
            return rl6f
        };
        var bEX6R = function(g0x, u0x) {
            var rl6f;
            if (u0x == "tp")
                rl6f = a9j.B0x(g0x.name + "-tip");
            if (!rl6f)
                rl6f = a9j.H0x(g0x.parentNode, this.Fz0x[u0x].nid)[0];
            return rl6f
        };
        return function(g0x, bG1x, u0x) {
            g0x = this.B0x(g0x) || g0x;
            if (!g0x)
                return;
            u0x == "er" ? a9j.y0x(g0x, this.bAs5x) : a9j.x0x(g0x, this.bAs5x);
            var rl6f = cEW0x.call(this, g0x, u0x, bG1x);
            if (!!rl6f && !!bG1x)
                rl6f.innerHTML = bG1x;
            k0x.eI2x(this.Fz0x, function(D0x, K0x) {
                a9j.ba1x(bEX6R.call(this, g0x, K0x), "display", cEX0x(u0x, K0x))
            }, this)
        }
    }();
    hN3x.pZ6T = function(g0x, bG1x) {
        this.zk9b(g0x, bG1x || this.qR6L[g0x.name + "-tip"], "tp");
        return this
    }
    ;
    hN3x.cEY0x = function(g0x, bG1x) {
        this.zk9b(g0x, bG1x || this.qR6L[g0x.name + "-pass"] || this.qR6L.pass, "ok");
        return this
    }
    ;
    hN3x.cEZ0x = function(g0x, bG1x) {
        this.zk9b(g0x, bG1x || this.qR6L[g0x.name + "-error"], "er");
        return this
    }
    ;
    hN3x.iO3x = function() {
        var gL3x = /^(?:radio|checkbox)$/i;
        var cEV0x = function(D0x) {
            return D0x == null ? "" : D0x
        };
        var bFk6e = function(D0x, g0x) {
            if (gL3x.test(g0x.type || "")) {
                g0x.checked = D0x == g0x.value
            } else {
                g0x.value = cEV0x(D0x)
            }
        };
        return function(W1x, D0x) {
            var g0x = this.B0x(W1x);
            if (!g0x)
                return this;
            if (g0x.tagName == "SELECT" || !g0x.length) {
                bFk6e(D0x, g0x)
            } else {
                k0x.bd1x(g0x, bFk6e.f0x(null, D0x))
            }
            return this
        }
    }();
    hN3x.B0x = function(W1x) {
        return this.go3x.elements[W1x]
    }
    ;
    hN3x.cFb0x = function() {
        return this.go3x
    }
    ;
    hN3x.baX7Q = function() {
        var gL3x = /^radio|checkbox$/i
          , kn4r = /^number|date$/;
        var cET0x = function(bz1x, g0x) {
            var W1x = g0x.name
              , D0x = g0x.value
              , bx1x = bz1x[W1x]
              , u0x = this.pS6M(g0x, "type");
            if (kn4r.test(u0x))
                D0x = this.Bb9S(D0x, u0x);
            if (gL3x.test(g0x.type) && !g0x.checked) {
                D0x = this.pS6M(g0x, "value");
                if (!D0x)
                    return
            }
            if (!!bx1x) {
                if (!k0x.eL2x(bx1x)) {
                    bx1x = [bx1x];
                    bz1x[W1x] = bx1x
                }
                bx1x.push(D0x)
            } else {
                bz1x[W1x] = D0x
            }
        };
        return function() {
            var m0x = {};
            k0x.bd1x(this.go3x.elements, function(g0x) {
                if (this.cDd9U(g0x))
                    cET0x.call(this, m0x, g0x)
            }, this);
            return m0x
        }
    }();
    hN3x.To4s = function() {
        var cES0x = function(g0x) {
            if (this.bbH7A(g0x))
                this.pZ6T(g0x)
        };
        return function() {
            this.go3x.reset();
            k0x.bd1x(this.go3x.elements, cES0x, this);
            return this
        }
    }();
    hN3x.cHL1x = function() {
        this.go3x.submit();
        return this
    }
    ;
    hN3x.gI3x = function() {
        var cEF0x = function(g0x) {
            if (this.bbH7A(g0x))
                this.cEo0x(g0x)
        };
        return function() {
            this.FA0x = {};
            k0x.bd1x(this.go3x.elements, cEF0x, this);
            return this
        }
    }();
    hN3x.cEE0x = function(g0x) {
        g0x = this.B0x(g0x) || g0x;
        if (!!g0x)
            return this.bDl6f(g0x);
        var m0x = !0;
        k0x.bd1x(this.go3x.elements, function(g0x) {
            var jw4A = this.cEE0x(g0x);
            m0x = m0x && jw4A
        }, this);
        return m0x
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), I0x = c0x("nej.ut"), k0x = c0x("nej.u"), l0x = c0x("nm.x"), n0x = c0x("nm.l"), b0x, L0x;
    n0x.baG7z = NEJ.C();
    b0x = n0x.baG7z.N0x(n0x.eo2x);
    L0x = n0x.baG7z.cs1x;
    b0x.bW1x = function() {
        this.ci1x();
        h0x.s0x(this.o0x, "click", this.cM1x.f0x(this));
        h0x.s0x(document, "mousewheel", this.Co9f.f0x(this));
        if (!!document.body.addEventListener)
            document.body.addEventListener("DOMMouseScroll", this.Co9f.f0x(this))
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        if (e0x.jst) {
            this.o0x.innerHTML = a9j.cd1x(e0x.jst, e0x.data)
        } else if (e0x.ntp) {
            this.o0x.appendChild(a9j.dD2x(e0x.ntp))
        } else if (e0x.txt) {
            this.o0x.innerHTML = a9j.iH3x(e0x.txt)
        } else if (e0x.html) {
            this.o0x.innerHTML = e0x.html
        }
        var Tf4j = this.o0x.getElementsByTagName("form");
        if (Tf4j.length) {
            this.go3x = I0x.Ue5j.A0x({
                form: Tf4j[0]
            })
        }
        this.FG0x = a9j.dk2x(this.o0x)[0]
    }
    ;
    b0x.bC1x = function() {
        this.z0x("ondestroy");
        this.bF1x();
        this.o0x.innerHTML = "";
        delete this.FG0x
    }
    ;
    b0x.cM1x = function(d0x) {
        var g0x = h0x.X1x(d0x, "d:action")
          , j0x = this.go3x ? this.go3x.baX7Q() : null
          , d0x = {
            action: a9j.t0x(g0x, "action")
        };
        if (j0x)
            d0x.data = j0x;
        if (d0x.action) {
            this.z0x("onaction", d0x);
            if (d0x.stopped)
                return;
            this.bt1x()
        }
    }
    ;
    b0x.Co9f = function(d0x) {
        if (!this.FG0x)
            return;
        h0x.bg1x(d0x);
        var dq2x = d0x.wheelDelta || -d0x.detail;
        this.FG0x.scrollTop -= dq2x
    }
    ;
    l0x.ki4m = function(e0x) {
        e0x.destroyable = e0x.destroyable || true;
        e0x.title = e0x.title || "提示";
        e0x.draggable = true;
        e0x.parent = e0x.parent || document.body;
        e0x.mask = e0x.mask || true;
        var AU9L = n0x.baG7z.A0x(e0x);
        AU9L.J0x();
        return AU9L
    }
}
)();
(function() {
    var p = NEJ.P("nej.u");
    var bGB6v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , Tb4f = {}
      , FH0x = {};
    for (var i = 0, l = bGB6v.length, c; i < l; i++) {
        c = bGB6v.charAt(i);
        Tb4f[i] = c;
        FH0x[c] = i
    }
    var cED0x = function(iD3x) {
        var r0x = 0, c, m0x = [];
        while (r0x < iD3x.length) {
            c = iD3x[r0x];
            if (c < 128) {
                m0x.push(String.fromCharCode(c));
                r0x++
            } else if (c > 191 && c < 224) {
                m0x.push(String.fromCharCode((c & 31) << 6 | iD3x[r0x + 1] & 63));
                r0x += 2
            } else {
                m0x.push(String.fromCharCode((c & 15) << 12 | (iD3x[r0x + 1] & 63) << 6 | iD3x[r0x + 2] & 63));
                r0x += 3
            }
        }
        return m0x.join("")
    };
    var cEz0x = function() {
        var hB3x = /\r\n/g;
        return function(j0x) {
            j0x = j0x.replace(hB3x, "\n");
            var m0x = []
              , mM5R = String.fromCharCode(237);
            if (mM5R.charCodeAt(0) < 0)
                for (var i = 0, l = j0x.length, c; i < l; i++) {
                    c = j0x.charCodeAt(i);
                    c > 0 ? m0x.push(c) : m0x.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                }
            else
                for (var i = 0, l = j0x.length, c; i < l; i++) {
                    c = j0x.charCodeAt(i);
                    if (c < 128)
                        m0x.push(c);
                    else if (c > 127 && c < 2048)
                        m0x.push(c >> 6 | 192, c & 63 | 128);
                    else
                        m0x.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                }
            return m0x
        }
    }();
    var LY2x = function(iD3x) {
        var r0x = 0
          , m0x = []
          , fk2x = iD3x.length % 3;
        if (fk2x == 1)
            iD3x.push(0, 0);
        if (fk2x == 2)
            iD3x.push(0);
        while (r0x < iD3x.length) {
            m0x.push(Tb4f[iD3x[r0x] >> 2], Tb4f[(iD3x[r0x] & 3) << 4 | iD3x[r0x + 1] >> 4], Tb4f[(iD3x[r0x + 1] & 15) << 2 | iD3x[r0x + 2] >> 6], Tb4f[iD3x[r0x + 2] & 63]);
            r0x += 3
        }
        if (fk2x == 1)
            m0x[m0x.length - 1] = m0x[m0x.length - 2] = "=";
        if (fk2x == 2)
            m0x[m0x.length - 1] = "=";
        return m0x.join("")
    };
    var bHl7e = function() {
        var rT6N = /\n|\r|=/g;
        return function(j0x) {
            var r0x = 0
              , m0x = [];
            j0x = j0x.replace(rT6N, "");
            for (var i = 0, l = j0x.length; i < l; i += 4)
                m0x.push(FH0x[j0x.charAt(i)] << 2 | FH0x[j0x.charAt(i + 1)] >> 4, (FH0x[j0x.charAt(i + 1)] & 15) << 4 | FH0x[j0x.charAt(i + 2)] >> 2, (FH0x[j0x.charAt(i + 2)] & 3) << 6 | FH0x[j0x.charAt(i + 3)]);
            var bq1x = m0x.length
              , fk2x = j0x.length % 4;
            if (fk2x == 2)
                m0x = m0x.slice(0, bq1x - 2);
            if (fk2x == 3)
                m0x = m0x.slice(0, bq1x - 1);
            return m0x
        }
    }();
    p.cFe0x = function(j0x) {
        return cED0x(bHl7e(j0x))
    }
    ;
    p.cEu0x = function(j0x) {
        var iD3x = bHl7e(j0x), dt2x = iD3x.length, iB3x;
        var r0x = 0;
        while (iB3x = iD3x[r0x]) {
            if (iB3x > 128) {
                iD3x[r0x] = iB3x - 256
            }
            r0x++
        }
        return iD3x
    }
    ;
    p.cEt0x = function(j0x) {
        try {
            return window.btoa(j0x)
        } catch (ex) {
            return LY2x(cEz0x(j0x))
        }
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), v0x = c0x("nej.j"), O0x = c0x("nej.p"), k0x = c0x("nej.u"), n0x = c0x("nm.l"), w0x = c0x("nm.w"), bD1x = c0x("nej.ui"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, L0x;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    n0x.bII7B = NEJ.C();
    b0x = n0x.bII7B.N0x(n0x.eo2x);
    b0x.ch1x = function() {
        this.cf1x = "m-download-layer"
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i0x = a9j.H0x(this.o0x, "j-flag");
        this.bjX1x = i0x[0];
        this.bka1x = i0x[1];
        this.bJf7Y = i0x[2];
        v0x.bm1x("/client/version/get", {
            type: "json",
            onload: this.cEs0x.f0x(this)
        });
        if (O0x.Ik1x.mac) {
            a9j.x0x(this.bjX1x.parentNode, "f-hide");
            a9j.y0x(this.bka1x.parentNode, "f-hide");
            a9j.y0x(this.bJf7Y, "f-hide")
        } else {
            a9j.y0x(this.bjX1x.parentNode, "f-hide");
            a9j.x0x(this.bka1x.parentNode, "f-hide");
            a9j.x0x(this.bJf7Y, "f-hide")
        }
    }
    ;
    b0x.bl1x = function(e0x) {
        e0x.clazz = " m-layer-down";
        e0x.parent = e0x.parent || document.body;
        e0x.title = "下载";
        e0x.draggable = !0;
        e0x.destroyalbe = !0;
        e0x.mask = true;
        this.bn1x(e0x);
        this.bX1x([[this.o0x, "click", this.bT1x.f0x(this)]]);
        this.ez2x = TYPE_MAP[e0x.type];
        this.gY3x = e0x.id
    }
    ;
    b0x.bC1x = function() {
        this.bF1x()
    }
    ;
    b0x.De0x = function() {
        this.bt1x()
    }
    ;
    b0x.FK0x = function(d0x) {
        this.z0x("onok", D0x);
        this.bt1x()
    }
    ;
    b0x.bT1x = function(d0x) {
        var g0x = h0x.X1x(d0x, "d:action");
        switch (a9j.t0x(g0x, "action")) {
        case "download":
            this.bt1x();
            window.open(a9j.t0x(g0x, "src"));
            break;
        case "orpheus":
            this.bt1x();
            location.href = "orpheus://" + k0x.cEt0x(JSON.stringify({
                type: this.ez2x,
                id: this.gY3x,
                cmd: "download"
            }));
            break
        }
    }
    ;
    b0x.cEs0x = function(d0x) {
        if ((d0x || bb1x).code == 200) {
            this.MP2x = d0x.data;
            this.bjX1x.innerText = "V" + this.MP2x.mac;
            this.bka1x.innerText = "V" + this.MP2x.pc
        }
    }
    ;
    l0x.LU2x = function(e0x) {
        n0x.bII7B.A0x(e0x).J0x()
    }
}
)();
(function() {
    var c0x = NEJ.P
      , l0x = c0x("nm.x");
    var FullscreenApi = {};
    var apiMap = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]];
    var specApi = apiMap[0];
    var browserApi;
    for (var i = 0; i < apiMap.length; i++) {
        if (apiMap[i][1]in document) {
            browserApi = apiMap[i];
            break
        }
    }
    if (browserApi) {
        for (var i = 0; i < browserApi.length; i++) {
            FullscreenApi[specApi[i]] = browserApi[i]
        }
    }
    l0x.FL0x = FullscreenApi
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , k0x = c0x("nej.u")
      , q0x = c0x("nm.d")
      , bR1x = {};
    q0x.B0x = function(K0x) {
        return bR1x[K0x]
    }
    ;
    q0x.ne5j = function(K0x, bh1x) {
        bR1x[K0x] = bh1x
    }
    ;
    q0x.fp2x = function(j0x) {
        k0x.eI2x(j0x, function(p0x, K0x) {
            var bh1x = bR1x[K0x] || {};
            NEJ.X(bh1x, p0x);
            bR1x[K0x] = bh1x
        })
    }
}
)();
(function() {
    var c0x = NEJ.P
      , br1x = NEJ.F
      , be1x = c0x("nej.h");
    be1x.ZL7E = function(K0x) {
        return localStorage.getItem(K0x)
    }
    ;
    be1x.ZH7A = function(K0x, D0x) {
        localStorage.setItem(K0x, D0x)
    }
    ;
    be1x.bkg1x = function(K0x) {
        localStorage.removeItem(K0x)
    }
    ;
    be1x.bkh1x = function() {
        localStorage.clear()
    }
    ;
    be1x.cEr0x = function() {
        var m0x = [];
        for (var i = 0, l = localStorage.length; i < l; i++)
            m0x.push(localStorage.key(i));
        return m0x
    }
    ;
    be1x.bkn1x = function() {
        (document.onstorageready || br1x)()
    }
    ;
    be1x.bko1x = function() {
        return !0
    }
}
)();
(function() {
    var c0x = NEJ.P, O0x = c0x("nej.p"), iB3x = c0x("nej.c"), be1x = c0x("nej.h"), ti7b;
    if (O0x.nB5G.trident || !!window.localStorage)
        return;
    var cEq0x = function() {
        var rK6E, eg2x;
        var biz0x = function() {
            rK6E = document.createElement("div");
            NEJ.X(rK6E.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", rK6E);
            rK6E.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iB3x.B0x("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var TQ4U = function() {
            eg2x = window.clearTimeout(eg2x);
            var hW3x = rK6E.getElementsByTagName("object")[0];
            if (!!hW3x.initStorage) {
                delete rK6E;
                ti7b = hW3x;
                ti7b.initStorage("nej-storage");
                (document.onstorageready || br1x)();
                return
            }
            eg2x = window.setTimeout(TQ4U, 500)
        };
        return function() {
            if (!!ti7b)
                return;
            biz0x();
            TQ4U()
        }
    }();
    be1x.ZL7E = be1x.ZL7E.eH2x(function(d0x) {
        d0x.stopped = !0;
        if (!ti7b)
            return;
        d0x.value = ti7b.getItem(d0x.args[0])
    });
    be1x.ZH7A = be1x.ZH7A.eH2x(function(d0x) {
        d0x.stopped = !0;
        if (!ti7b)
            return;
        var bf1x = d0x.args;
        ti7b.setItem(bf1x[0], bf1x[1])
    });
    be1x.bkg1x = be1x.bkg1x.eH2x(function(d0x) {
        d0x.stopped = !0;
        if (!ti7b)
            return;
        ti7b.removeItem(d0x.args[0])
    });
    be1x.bkh1x = be1x.bkh1x.eH2x(function(d0x) {
        d0x.stopped = !0;
        if (!!ti7b)
            ti7b.clear()
    });
    be1x.bkn1x = be1x.bkn1x.eH2x(function(d0x) {
        d0x.stopped = !0;
        cEq0x()
    });
    be1x.bko1x = be1x.bko1x.eH2x(function(d0x) {
        d0x.stopped = !0;
        d0x.value = !!ti7b
    })
}
)();
(function() {
    var c0x = NEJ.P
      , k0x = c0x("nej.u")
      , h0x = c0x("nej.v")
      , be1x = c0x("nej.h")
      , v0x = c0x("nej.j")
      , I0x = c0x("nej.ut")
      , R0x = {};
    v0x.vF7y = function(K0x, D0x) {
        var bLo8g = JSON.stringify(D0x);
        try {
            be1x.ZH7A(K0x, bLo8g)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bLo8g != be1x.ZL7E(K0x))
            R0x[K0x] = D0x;
        return this
    }
    ;
    v0x.tu7n = function(K0x) {
        var j0x = JSON.parse(be1x.ZL7E(K0x) || "null");
        return j0x == null ? R0x[K0x] : j0x
    }
    ;
    v0x.bLI8A = function(K0x, D0x) {
        var j0x = v0x.tu7n(K0x);
        if (j0x == null) {
            j0x = D0x;
            v0x.vF7y(K0x, j0x)
        }
        return j0x
    }
    ;
    v0x.LP2x = function(K0x) {
        delete R0x[K0x];
        be1x.bkg1x(K0x);
        return this
    }
    ;
    v0x.cFg0x = function() {
        var bkA1x = function(p0x, K0x, bz1x) {
            delete bz1x[K0x]
        };
        return function() {
            k0x.eI2x(R0x, bkA1x);
            be1x.bkh1x();
            return this
        }
    }();
    v0x.cFh0x = function(m0x) {
        m0x = m0x || {};
        k0x.bd1x(be1x.cEr0x(), function(K0x) {
            m0x[K0x] = v0x.tu7n(K0x)
        });
        return m0x
    }
    ;
    I0x.fK2x.A0x({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (be1x.bko1x()) {
                document.onstorageready()
            }
        }
    });
    var cEn0x = function() {
        var cEl0x = function(D0x, K0x, bz1x) {
            be1x.ZH7A(K0x, JSON.stringify(D0x));
            delete bz1x[K0x]
        };
        return function() {
            k0x.eI2x(R0x, cEl0x)
        }
    }();
    h0x.s0x(document, "storageready", cEn0x);
    be1x.bkn1x()
}
)();
(function() {
    var c0x = NEJ.P, h0x = c0x("nej.v"), k0x = c0x("nej.u"), O0x = c0x("nej.ut"), LK2x;
    if (!!O0x.bkI1x)
        return;
    O0x.bkI1x = NEJ.C();
    LK2x = O0x.bkI1x.N0x(O0x.cJ1x);
    LK2x.cw1x = function() {
        var gG3x = +(new Date)
          , na5f = "dat-" + gG3x;
        return function() {
            this.cE1x();
            var R0x = this.constructor[na5f];
            if (!R0x) {
                R0x = {};
                this.constructor[na5f] = R0x
            }
            this.S0x = R0x
        }
    }();
    LK2x.B0x = function(K0x) {
        return this.S0x[K0x]
    }
    ;
    LK2x.ne5j = function(K0x, D0x) {
        var mZ5e = this.S0x[K0x];
        this.S0x[K0x] = D0x;
        h0x.z0x(localCache, "cachechange", {
            key: K0x,
            type: "set",
            oldValue: mZ5e,
            newValue: D0x
        });
        return this
    }
    ;
    LK2x.cL1x = function(K0x) {
        var mZ5e = this.S0x[K0x];
        k0x.bbS7L(this.S0x, K0x);
        h0x.z0x(localCache, "cachechange", {
            key: K0x,
            type: "delete",
            oldValue: mZ5e,
            newValue: undefined
        });
        return mZ5e
    }
    ;
    LK2x.Za6U = function(DC0x) {
        return NEJ.Q(this.S0x, DC0x)
    }
    ;
    window.localCache = O0x.bkI1x.A0x();
    O0x.fK2x.A0x({
        element: localCache,
        event: "cachechange"
    })
}
)();
(function() {
    var c0x = NEJ.P, fy2x = NEJ.R, br1x = NEJ.F, k0x = c0x("nej.u"), v0x = c0x("nej.j"), O0x = c0x("nej.ut"), na5f = "dat-" + +(new Date), mY5d;
    if (!!O0x.bkK1x)
        return;
    O0x.bkK1x = NEJ.C();
    mY5d = O0x.bkK1x.N0x(O0x.cJ1x);
    mY5d.cw1x = function() {
        this.cE1x();
        this.S0x = this.constructor[na5f];
        if (!this.S0x) {
            this.S0x = {};
            this.S0x[na5f + "-l"] = {};
            this.constructor[na5f] = this.S0x
        }
    }
    ;
    mY5d.rC6w = function(K0x) {
        return this.S0x[K0x]
    }
    ;
    mY5d.qu6o = function(K0x, D0x) {
        this.S0x[K0x] = D0x
    }
    ;
    mY5d.lQ4U = function(K0x, kx4B) {
        var j0x = this.rC6w(K0x);
        if (j0x == null) {
            j0x = kx4B;
            this.qu6o(K0x, j0x)
        }
        return j0x
    }
    ;
    mY5d.cEk0x = function(K0x) {
        if (K0x != null) {
            delete this.S0x[K0x];
            return
        }
        k0x.eI2x(this.S0x, function(p0x, K0x) {
            if (K0x == na5f + "-l")
                return;
            this.cEk0x(K0x)
        }, this)
    }
    ;
    mY5d.cFi0x = function(K0x) {
        if (!!v0x.LP2x)
            return v0x.LP2x(K0x)
    }
    ;
    mY5d.cEf0x = function(K0x) {
        if (!!v0x.tu7n)
            return v0x.tu7n(K0x)
    }
    ;
    mY5d.cEe0x = function(K0x, D0x) {
        if (!!v0x.vF7y)
            v0x.vF7y(K0x, D0x)
    }
    ;
    mY5d.FX1x = function(K0x, kx4B) {
        var j0x = this.RR4V(K0x);
        if (j0x == null) {
            j0x = kx4B;
            this.wI8A(K0x, j0x)
        }
        return j0x
    }
    ;
    mY5d.RR4V = function(K0x) {
        var j0x = this.rC6w(K0x);
        if (j0x != null)
            return j0x;
        j0x = this.cEf0x(K0x);
        if (j0x != null)
            this.qu6o(K0x, j0x);
        return j0x
    }
    ;
    mY5d.wI8A = function(K0x, D0x) {
        this.cEe0x(K0x, D0x);
        this.qu6o(K0x, D0x)
    }
    ;
    mY5d.bRz0x = function(K0x) {
        if (K0x != null) {
            delete this.S0x[K0x];
            if (!!v0x.LP2x)
                v0x.LP2x(K0x);
            return
        }
        k0x.eI2x(this.S0x, function(p0x, K0x) {
            if (K0x == na5f + "-l")
                return;
            this.bRz0x(K0x)
        }, this)
    }
    ;
    mY5d.cFj0x = function() {
        this.bRz0x();
        return this
    }
    ;
    mY5d.cFk0x = function(K0x) {
        var j0x = this.S0x[na5f + "-l"];
        delete j0x[K0x]
    }
    ;
    mY5d.blc1x = function(K0x) {
        var j0x = this.S0x[na5f + "-l"]
          , bf1x = fy2x.slice.call(arguments, 1);
        k0x.bd1x(j0x[K0x], function(cA1x) {
            try {
                cA1x.apply(null, bf1x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j0x[K0x]
    }
    ;
    mY5d.bld1x = function(K0x, cA1x) {
        cA1x = cA1x || br1x;
        var i0x = this.S0x[na5f + "-l"][K0x];
        if (!i0x) {
            i0x = [cA1x];
            this.S0x[na5f + "-l"][K0x] = i0x;
            return !1
        }
        i0x.push(cA1x);
        return !0
    }
    ;
    mY5d.cDZ0x = function(i0x, bi1x, gc3x) {
        if (!i0x)
            return !1;
        bi1x = parseInt(bi1x) || 0;
        gc3x = parseInt(gc3x) || 0;
        if (!gc3x) {
            if (!i0x.loaded)
                return !1;
            gc3x = i0x.length
        }
        if (!!i0x.loaded)
            gc3x = Math.min(gc3x, i0x.length - bi1x);
        for (var i = 0; i < gc3x; i++)
            if (!i0x[bi1x + i])
                return !1;
        return !0
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, k0x = c0x("nej.u"), O0x = c0x("nej.ut"), b0x, L0x;
    if (!!O0x.RO4S)
        return;
    O0x.RO4S = NEJ.C();
    b0x = O0x.RO4S.N0x(O0x.bkK1x);
    L0x = O0x.RO4S.cs1x;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.xy8q = e0x.key || "id";
        this.bk1x = e0x.data || bb1x;
        this.cDY0x = !!e0x.autogc;
        this.cDW0x(e0x.id)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        if (!!this.ei2x) {
            this.bSL1x()
        }
    }
    ;
    b0x.cDW0x = function(C0x) {
        var R0x;
        if (!!C0x) {
            R0x = this.S0x[C0x];
            if (!R0x) {
                R0x = {};
                this.S0x[C0x] = R0x
            }
        }
        R0x = R0x || this.S0x;
        R0x.hash = R0x.hash || {};
        this.RN4R = R0x
    }
    ;
    b0x.bSL1x = function() {
        this.ei2x = window.clearTimeout(this.ei2x);
        var bz1x = {};
        k0x.eI2x(this.RN4R, function(i0x, K0x) {
            if (K0x == "hash")
                return;
            if (!k0x.eL2x(i0x))
                return;
            k0x.bd1x(i0x, function(p0x) {
                if (!p0x)
                    return;
                bz1x[p0x[this.xy8q]] = !0
            }, this)
        }, this);
        k0x.eI2x(this.Yq6k(), function(p0x, C0x, dR2x) {
            if (!bz1x[C0x]) {
                delete dR2x[C0x]
            }
        })
    }
    ;
    b0x.cDV0x = function() {
        if (!!this.ei2x) {
            this.ei2x = window.clearTimeout(this.ei2x)
        }
        this.ei2x = window.setTimeout(this.bSL1x.f0x(this), 150)
    }
    ;
    b0x.Bs9j = function(p0x, Yj6d) {
        p0x = this.bTf1x(p0x, Yj6d) || p0x;
        if (!p0x)
            return null;
        var K0x = p0x[this.xy8q];
        if (K0x != null) {
            var ib3x = this.Yq6k()[K0x];
            if (!!ib3x)
                p0x = NEJ.X(ib3x, p0x);
            this.Yq6k()[K0x] = p0x
        }
        delete p0x.bTi1x;
        return p0x
    }
    ;
    b0x.bTf1x = br1x;
    b0x.blh1x = function(K0x, p0x) {
        if (!p0x)
            return;
        if (!k0x.eL2x(p0x)) {
            var i0x = this.hD3x(K0x)
              , p0x = this.Bs9j(p0x, K0x);
            if (!!p0x)
                i0x.unshift(p0x);
            return
        }
        k0x.nk5p(p0x, this.blh1x.f0x(this, K0x))
    }
    ;
    b0x.RA4E = function(K0x, cB1x) {
        var i0x = this.hD3x(K0x);
        i0x.length = Math.max(i0x.length, cB1x);
        this.bli1x(K0x);
        return this
    }
    ;
    b0x.kw4A = function(K0x) {
        return this.hD3x(K0x).length
    }
    ;
    b0x.bli1x = function(K0x, ox5C) {
        this.hD3x(K0x).loaded = ox5C != !1;
        return this
    }
    ;
    b0x.Ye6Y = function(K0x) {
        return !!this.hD3x(K0x).loaded
    }
    ;
    b0x.wh8Z = function(K0x, i0x) {
        this.vw7p(K0x);
        this.blj1x({
            key: K0x,
            offset: 0,
            limit: i0x.length + 1
        }, {
            list: i0x,
            total: i0x.length
        })
    }
    ;
    b0x.hD3x = function() {
        var FY1x = function(K0x) {
            return (K0x || "") + (!K0x ? "" : "-") + "list"
        };
        return function(K0x) {
            var K0x = FY1x(K0x)
              , i0x = this.RN4R[K0x];
            if (!i0x) {
                i0x = [];
                this.RN4R[K0x] = i0x
            }
            return i0x
        }
    }();
    b0x.Yq6k = function() {
        var dR2x = this.RN4R.hash;
        if (!dR2x) {
            dR2x = {};
            this.RN4R.hash = dR2x
        }
        return dR2x
    }
    ;
    b0x.blp1x = function() {
        var FY1x = function(e0x) {
            return "r-" + e0x.key
        };
        return function(e0x) {
            var iY3x = NEJ.X({}, e0x)
              , nZ5e = FY1x(iY3x);
            if (!this.bld1x(nZ5e, this.z0x.f0x(this))) {
                iY3x.rkey = nZ5e;
                iY3x.onload = this.cDU0x.f0x(this, iY3x);
                this.z0x("dopullrefresh", iY3x)
            }
            return this
        }
    }();
    b0x.cDU0x = function(e0x, i0x) {
        this.blh1x(e0x.key, i0x);
        this.blc1x(e0x.rkey, "onpullrefresh", e0x)
    }
    ;
    b0x.lO4S = function() {
        var FY1x = function(e0x) {
            return "r-" + e0x.key + "-" + e0x.offset + "-" + e0x.limit
        };
        return function(e0x) {
            e0x = e0x || bb1x;
            var iY3x = {
                key: "" + e0x.key || "",
                ext: e0x.ext || null,
                data: e0x.data || null,
                offset: parseInt(e0x.offset) || 0,
                limit: parseInt(e0x.limit) || 0
            }
              , i0x = this.hD3x(iY3x.key);
            if (this.cDZ0x(i0x, iY3x.offset, iY3x.limit)) {
                this.z0x("onlistload", iY3x);
                return this
            }
            var nZ5e = FY1x(iY3x);
            if (!this.bld1x(nZ5e, this.z0x.f0x(this))) {
                iY3x.rkey = nZ5e;
                iY3x.onload = this.blj1x.f0x(this, iY3x);
                this.z0x("doloadlist", iY3x)
            }
            return this
        }
    }();
    b0x.blj1x = function() {
        var Ff0x = function(p0x, r0x, i0x) {
            if (!!p0x) {
                return !0
            }
            i0x.splice(r0x, 1)
        };
        return function(e0x, m0x) {
            e0x = e0x || bb1x;
            var K0x = e0x.key
              , bi1x = e0x.offset
              , bVJ1x = this.hD3x(K0x);
            var i0x = m0x || [];
            if (!k0x.eL2x(i0x)) {
                i0x = m0x.result || m0x.list || [];
                var cB1x = parseInt(m0x.total);
                if (!isNaN(cB1x) || cB1x > i0x.length) {
                    this.RA4E(K0x, cB1x)
                }
            }
            k0x.bd1x(i0x, function(p0x, r0x) {
                bVJ1x[bi1x + r0x] = this.Bs9j(p0x, K0x)
            }, this);
            if (i0x.length < e0x.limit) {
                this.bli1x(K0x);
                k0x.nk5p(bVJ1x, Ff0x)
            }
            this.blc1x(e0x.rkey, "onlistload", e0x)
        }
    }();
    b0x.vw7p = function() {
        var Ff0x = function(p0x, r0x, i0x) {
            i0x.splice(r0x, 1)
        };
        return function(K0x) {
            var i0x = this.hD3x(K0x);
            k0x.nk5p(i0x, Ff0x);
            this.bli1x(K0x, !1);
            if (this.cDY0x) {
                this.cDV0x()
            }
            return this
        }
    }();
    b0x.bVS1x = function(p0x, Yj6d) {
        return !p0x.bTi1x
    }
    ;
    b0x.eJ2x = function(C0x) {
        return this.Yq6k()[C0x]
    }
    ;
    b0x.cFl0x = function(C0x) {
        var p0x = this.eJ2x(C0x);
        if (!!p0x)
            p0x.bTi1x = !0
    }
    ;
    b0x.XY6S = function() {
        var FY1x = function(e0x) {
            return "r-" + e0x.key + "-" + e0x.id
        };
        return function(e0x) {
            e0x = e0x || bb1x;
            var C0x = e0x[this.xy8q]
              , iY3x = {
                id: C0x,
                ext: e0x.ext,
                data: e0x.data || {},
                key: "" + e0x.key || ""
            };
            p0x = this.eJ2x(C0x);
            iY3x.data[this.xy8q] = C0x;
            if (!!p0x && this.bVS1x(p0x, iY3x.key)) {
                this.z0x("onitemload", iY3x);
                return this
            }
            var nZ5e = FY1x(iY3x);
            if (!this.bld1x(nZ5e, this.z0x.f0x(this))) {
                iY3x.rkey = nZ5e;
                iY3x.onload = this.cDR0x.f0x(this, iY3x);
                this.z0x("doloaditem", iY3x)
            }
            return this
        }
    }();
    b0x.cDR0x = function(e0x, p0x) {
        e0x = e0x || bb1x;
        this.Bs9j(p0x, e0x.key);
        this.blc1x(e0x.rkey, "onitemload", e0x)
    }
    ;
    b0x.jI4M = function(e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.onload = this.yM8E.f0x(this, e0x);
        this.z0x("doadditem", e0x)
    }
    ;
    b0x.yM8E = function(e0x, p0x) {
        var K0x = e0x.key;
        p0x = this.Bs9j(p0x, K0x);
        if (!!p0x) {
            var fa2x = 0
              , i0x = this.hD3x(K0x);
            if (!e0x.push) {
                fa2x = -1;
                var bi1x = e0x.offset || 0;
                i0x.splice(bi1x, 0, p0x)
            } else if (i0x.loaded) {
                fa2x = 1;
                i0x.push(p0x)
            } else {
                i0x.length++
            }
        }
        var d0x = {
            key: K0x,
            flag: fa2x,
            data: p0x,
            action: "add",
            ext: e0x.ext
        };
        this.z0x("onitemadd", d0x);
        return d0x
    }
    ;
    b0x.Lx2x = function(e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.onload = this.bls1x.f0x(this, e0x);
        this.z0x("dodeleteitem", e0x)
    }
    ;
    b0x.bls1x = function(e0x, bzq5v) {
        var p0x, K0x = e0x.key;
        if (!!bzq5v) {
            p0x = this.eJ2x(e0x.id) || null;
            var C0x = e0x.id
              , cDQ0x = this.xy8q
              , i0x = this.hD3x(K0x)
              , r0x = k0x.di2x(i0x, function(ib3x) {
                return !!ib3x && ib3x[cDQ0x] == C0x
            });
            if (r0x >= 0)
                i0x.splice(r0x, 1)
        }
        var d0x = {
            key: K0x,
            data: p0x,
            action: "delete",
            ext: e0x.ext
        };
        this.z0x("onitemdelete", d0x);
        return d0x
    }
    ;
    b0x.XU6O = function(e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.onload = this.cDO0x.f0x(this, e0x);
        this.z0x("doupdateitem", e0x)
    }
    ;
    b0x.cDO0x = function(e0x, p0x) {
        var K0x = e0x.key;
        if (!!p0x)
            p0x = this.Bs9j(p0x, K0x);
        var d0x = {
            key: K0x,
            data: p0x,
            action: "update",
            ext: e0x.ext
        };
        this.z0x("onitemupdate", d0x);
        return d0x
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, k0x = c0x("nej.u"), O0x = c0x("nej.ut"), b0x;
    if (!!O0x.blv1x)
        return;
    O0x.blv1x = NEJ.C();
    b0x = O0x.blv1x.N0x(O0x.RO4S);
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.bne2x({
            doloadlist: this.XR6L.f0x(this),
            doloaditem: this.blw1x.f0x(this),
            doadditem: this.bzO5T.f0x(this),
            dodeleteitem: this.XP6J.f0x(this),
            doupdateitem: this.XN6H.f0x(this),
            dopullrefresh: this.bAb5g.f0x(this)
        })
    }
    ;
    b0x.XR6L = br1x;
    b0x.bAb5g = br1x;
    b0x.blw1x = br1x;
    b0x.bzO5T = br1x;
    b0x.XP6J = br1x;
    b0x.XN6H = br1x
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, k0x = c0x("nej.u"), h0x = c0x("nej.v"), v0x = c0x("nej.j"), I0x = c0x("nej.ut"), l0x = c0x("nm.x"), q0x = c0x("nm.d"), b0x, L0x;
    q0x.hJ3x = NEJ.C();
    b0x = q0x.hJ3x.N0x(I0x.blv1x);
    b0x.cp1x = function() {
        var CI0x = location.protocol + "//" + location.host;
        var cDN0x = function(bs1x, j0x) {
            var bz1x = {
                conf: {},
                data: {},
                urls: []
            };
            k0x.bd1x(bs1x, function(K0x, r0x, i0x) {
                var bh1x = q0x.B0x(K0x);
                if (!bh1x)
                    return;
                var bly1x = bAz5E(bh1x.url, j0x[K0x]);
                bz1x.urls.push(bly1x);
                bz1x.conf[bly1x] = bh1x;
                bz1x.data[bly1x] = JSON.stringify(j0x[K0x] == null ? "" : j0x[K0x])
            });
            return bz1x
        };
        var bAz5E = function(Y1x, j0x) {
            return Y1x.replace(/\{(.*?)\}/gi, function($1, $2) {
                return j0x[$2] || $1
            })
        };
        var bAF5K = function(bh1x, e0x, d0x) {
            h0x.z0x(window, "requesterror", d0x);
            if (!!d0x.stopped)
                return;
            var CN0x = bh1x.onerror || e0x.onerror;
            if (k0x.fC2x(CN0x)) {
                this.z0x(CN0x, d0x, e0x)
            } else {
                (CN0x || br1x).call(this, d0x, e0x)
            }
            var d0x = {
                result: d0x,
                option: e0x
            };
            this.z0x("onerror", d0x);
            if (!d0x.stopped)
                (bh1x.onmessage || br1x).call(this, d0x.result.code, d0x.result)
        };
        var bBb5g = function(Q0x, bh1x, e0x) {
            var m0x = Q0x;
            if (k0x.gK3x(bh1x.format)) {
                m0x = bh1x.format.call(this, Q0x, e0x)
            }
            return m0x
        };
        var yX8P = function(Q0x, bh1x, e0x, us7l) {
            if (k0x.gK3x(bh1x.beforeload)) {
                bh1x.beforeload.call(this, Q0x, e0x, bh1x)
            }
            if (Q0x && Q0x.code != null && Q0x.code != 200) {
                bAF5K.call(this, bh1x, e0x, {
                    key: e0x.key,
                    code: Q0x.code,
                    message: Q0x.message || "",
                    captchaId: Q0x.captchaId,
                    ext: Q0x
                });
                return
            }
            var m0x = Q0x;
            if (!us7l) {
                m0x = bBb5g.call(this, Q0x, bh1x, e0x)
            } else if (k0x.gK3x(bh1x.format)) {
                var blz1x = [];
                k0x.bd1x(us7l.urls, function(Y1x) {
                    blz1x.push(bBb5g.call(this, Q0x[Y1x], us7l.conf[Y1x], e0x))
                }, this);
                blz1x.push(e0x);
                m0x = bh1x.format.apply(this, blz1x)
            }
            var ou5z = bh1x.onload || e0x.onload
              , bBs5x = bh1x.finaly || e0x.finaly || br1x;
            if (k0x.fC2x(ou5z)) {
                bBs5x.call(this, this.z0x(ou5z, m0x), e0x)
            } else {
                bBs5x.call(this, (ou5z || br1x).call(this, m0x), e0x)
            }
        };
        var Az9q = function(bh1x, e0x, ca1x) {
            bAF5K.call(this, bh1x, e0x, {
                key: e0x.key,
                code: ca1x.code || -1,
                message: ca1x.message || ""
            })
        };
        return function(bh1x, e0x) {
            if (k0x.fC2x(bh1x)) {
                bh1x = q0x.B0x(bh1x)
            }
            delete e0x.value;
            (bh1x.filter || br1x).call(this, e0x, bh1x);
            var Q0x = e0x.value;
            if (!!Q0x) {
                yX8P.call(this, Q0x, bh1x, e0x);
                return
            }
            var Y1x, j0x = e0x.data || bb1x, Ai9Z = {
                cookie: !0,
                type: bh1x.rtype || "json",
                method: bh1x.type || "POST",
                onerror: Az9q.f0x(this, bh1x, e0x),
                noescape: bh1x.noescape
            };
            if (k0x.eL2x(bh1x.url)) {
                var us7l = cDN0x(bh1x.url, j0x);
                Y1x = CI0x + "/api/batch";
                Ai9Z.data = k0x.cD1x(us7l.data);
                Ai9Z.onload = yX8P.eA2x(this, bh1x, e0x, us7l);
                Ai9Z.headers = {
                    "batch-method": "POST"
                };
                delete us7l.data
            } else {
                var kh4l = bh1x.url.indexOf(":") < 0 ? CI0x : "";
                Y1x = bAz5E(kh4l + bh1x.url, j0x);
                Ai9Z.data = k0x.cD1x(e0x.data);
                Ai9Z.onload = yX8P.eA2x(this, bh1x, e0x)
            }
            if (Ai9Z.method == "GET")
                Ai9Z.query = Ai9Z.data;
            return v0x.bm1x(Y1x, Ai9Z)
        }
    }();
    b0x.Gb1x = function() {
        var gL3x = /^get|list|pull$/i;
        return function(bBF5K, e0x) {
            var K0x = e0x.key
              , bh1x = q0x.B0x(K0x.split("-")[0] + "-" + bBF5K);
            if (gL3x.test(bBF5K) && K0x.indexOf("post-") < 0)
                bh1x.type = "GET";
            this.cp1x(bh1x, e0x)
        }
    }();
    b0x.cFm0x = function(K0x, i0x) {
        var cB1x = i0x.length;
        this.blj1x({
            key: K0x,
            offset: 0,
            limit: cB1x + 1
        }, {
            list: i0x,
            total: cB1x
        })
    }
    ;
    b0x.XR6L = function(e0x) {
        this.Gb1x("list", e0x)
    }
    ;
    b0x.blw1x = function(e0x) {
        this.Gb1x("get", e0x)
    }
    ;
    b0x.bAb5g = function(e0x) {
        this.Gb1x("pull", e0x)
    }
    ;
    b0x.bzO5T = function(e0x) {
        this.Gb1x("add", e0x)
    }
    ;
    b0x.XP6J = function(e0x) {
        this.Gb1x("del", e0x)
    }
    ;
    b0x.XN6H = function(e0x) {
        this.Gb1x("update", e0x)
    }
    ;
    b0x.cDI0x = function(p0x) {
        this.Bs9j(p0x)
    }
    ;
    I0x.fK2x.A0x({
        element: window,
        event: "requesterror"
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, h0x = c0x("nej.v"), I0x = c0x("nej.ut"), q0x = c0x("nm.d"), blB1x = {}, b0x, L0x;
    var vq7j = function(m0x, e0x) {
        m0x.conf = e0x.conf;
        return m0x
    };
    q0x.fp2x({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(Q0x, e0x) {
                return vq7j({
                    mv: Q0x
                }, e0x)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function(m0x, e0x) {
                if (!!m0x.songs && m0x.songs.length > 0)
                    m0x.song = m0x.songs[0];
                else
                    m0x.song = blB1x;
                delete m0x.songs;
                return vq7j(m0x, e0x)
            },
            filter: function(e0x) {
                e0x.data.ids = "[" + e0x.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: vq7j
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: vq7j
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(m0x, e0x) {
                m0x.playlist = m0x.result;
                delete m0x.result;
                return vq7j(m0x, e0x)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: vq7j
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: vq7j
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: vq7j
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e0x) {
                var i0x = e0x.data.id.split("-");
                e0x.data.radioId = i0x[0];
                e0x.data.asc = i0x[1] == 2;
                e0x.data.limit = 1e3;
                delete e0x.data.id
            },
            format: function(Q0x, e0x) {
                var cDH0x = {
                    id: e0x.data.radioId,
                    programs: Q0x.programs
                };
                return vq7j({
                    djradio: cDH0x
                }, e0x)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: vq7j
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e0x) {
                e0x.data.lv = 0;
                e0x.data.tv = 0
            },
            format: function(m0x, e0x) {
                var wy8q = {
                    lyric: "",
                    nolyric: true
                };
                if (m0x.code == 200 && m0x.lrc && m0x.lrc.lyric) {
                    wy8q.lyric = m0x.lrc.lyric;
                    wy8q.nolyric = false
                } else {
                    wy8q.nolyric = true
                }
                return vq7j({
                    lyric: wy8q
                }, e0x)
            }
        }
    });
    q0x.wC8u = NEJ.C();
    b0x = q0x.wC8u.N0x(q0x.hJ3x);
    b0x.cDF0x = function(u0x, cS1x) {
        return this.rC6w(this.XE6y(u0x, cS1x))
    }
    ;
    b0x.Rn4r = function(u0x, cS1x, e0x) {
        e0x = e0x || {};
        var j0x = this.rC6w(this.XE6y(u0x, cS1x));
        if (j0x && (u0x != 13 && u0x != 19 || e0x.conf && e0x.conf.useCache)) {
            this.z0x("onresourceload", u0x, cS1x, j0x, e0x.conf);
            return
        }
        e0x.data = {
            id: cS1x
        };
        e0x.onload = this.cDE0x.f0x(this, u0x, cS1x);
        e0x.onerror = this.cDD0x.f0x(this, u0x, cS1x);
        this.cp1x("res-" + this.Do0x(u0x) + "-get", e0x)
    }
    ;
    b0x.cDE0x = function(u0x, cS1x, m0x) {
        var j0x = m0x[this.Do0x(u0x)];
        this.qu6o(this.XE6y(u0x, cS1x), j0x);
        this.z0x("onresourceload", u0x, cS1x, j0x, m0x.conf)
    }
    ;
    b0x.cDD0x = function(u0x, cS1x, m0x, e0x) {
        if (m0x.code != 404) {
            this.z0x("onresourceerror", u0x, cS1x, m0x.code);
            return
        }
        this.qu6o(this.XE6y(u0x, cS1x), blB1x);
        this.z0x("onresourceload", u0x, cS1x, blB1x, e0x.conf)
    }
    ;
    b0x.cFn0x = function(u0x, e0x) {
        this.cp1x("res-" + this.Do0x(u0x) + "-play", e0x)
    }
    ;
    b0x.XE6y = function(u0x, cS1x) {
        return "res-" + this.Do0x(u0x) + "-" + cS1x
    }
    ;
    b0x.Do0x = function(u0x) {
        var bz1x = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bz1x[u0x]
    }
    ;
    q0x.wC8u.Ls2x = function(u0x, cS1x) {
        if (!this.fg2x)
            this.fg2x = q0x.wC8u.A0x({});
        return this.fg2x.cDF0x(u0x, cS1x)
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"), I0x = c0x("nej.ut"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), blF1x = /^[1-9][0-9]*$/, b0x, L0x;
    var LOCAL_LOG_KEY = "local-log";
    q0x.fp2x({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    q0x.hO3x = NEJ.C();
    b0x = q0x.hO3x.N0x(q0x.hJ3x);
    b0x.eV2x = function(V0x, bh1x) {
        if (!V0x || !bh1x)
            return;
        if (k0x.fC2x(bh1x)) {
            try {
                bh1x = JSON.parse(bh1x)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a9j)
                }
            }
        }
        if (!k0x.lG4K(bh1x))
            return;
        this.cp1x("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: V0x,
                    json: bh1x
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + V0x + ", json=" + JSON.stringify(bh1x))
        }
    }
    ;
    b0x.Xk5p = function(on5s) {
        if (!k0x.eL2x(on5s))
            return;
        this.cp1x("bi-batch-log", {
            data: {
                logs: JSON.stringify(on5s)
            }
        })
    }
    ;
    b0x.bDh6b = function(bh1x) {
        if (!bh1x || !bh1x.type || !bh1x.rid)
            return;
        var om5r = bh1x.type;
        if (blF1x.test(om5r)) {
            om5r = this.Do0x(om5r)
        }
        if (!om5r)
            return;
        if (om5r == "playlist")
            om5r = "list";
        this.eV2x("search", {
            type: om5r,
            id: bh1x.rid || null,
            keyword: bh1x.keyword || null
        })
    }
    ;
    b0x.QY4c = function() {
        var cDy0x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(bh1x) {
            if (!bh1x || !bh1x.type || !bh1x.rid)
                return;
            if (bh1x.play === undefined)
                bh1x.play = true;
            var om5r = bh1x.type;
            if (blF1x.test(om5r)) {
                om5r = this.Do0x(om5r)
            }
            if (!om5r)
                return;
            if (om5r == "playlist")
                om5r = "list";
            var Q0x = {
                id: bh1x.rid,
                type: om5r
            };
            if (om5r == "song" && bh1x.source) {
                Q0x.source = this.bDz6t(bh1x.source);
                if (!!bh1x.sourceid)
                    Q0x.sourceid = bh1x.sourceid
            }
            this.eV2x(!bh1x.play ? "addto" : "play", Q0x);
            if (om5r == "song" && bh1x.hash && bh1x.hash.match(cDy0x)) {
                this.eV2x(!bh1x.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b0x.blN1x = function(C0x, bA1x, ee2x, Gc1x) {
        var Q0x = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cDv0x = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        Q0x.id = C0x;
        Q0x.time = Math.round(bA1x);
        Q0x.end = k0x.fC2x(Gc1x) ? Gc1x : cDv0x[Gc1x] || "";
        if (ee2x && ee2x.fid) {
            Q0x.source = this.bDz6t(ee2x.fid);
            Q0x.sourceId = ee2x.fdata
        }
        this.eV2x("play", Q0x)
    }
    ;
    b0x.bDT6N = function(u0x, cS1x) {
        if (!u0x || !cS1x)
            return;
        if (blF1x.test(u0x))
            u0x = this.Do0x(u0x);
        if (u0x != "playlist" && u0x != "dj")
            return;
        var bh1x = q0x.B0x("plus-" + u0x + "-count");
        if (!bh1x)
            return !1;
        this.cp1x(bh1x, {
            data: {
                id: cS1x
            }
        });
        var R0x = this.lQ4U("play-hist-" + u0x, []);
        if (k0x.di2x(R0x, cS1x) < 0) {
            R0x.push(cS1x);
            return !0
        }
        return !1
    }
    ;
    b0x.Do0x = function(u0x) {
        var bz1x = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bz1x[u0x]
    }
    ;
    b0x.bDz6t = function(Lm2x) {
        var bz1x = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bz1x[Lm2x]
    }
    ;
    b0x.bEi6c = function(hc3x) {
        var on5s = this.FX1x(LOCAL_LOG_KEY, []);
        on5s.unshift(hc3x);
        if (on5s.length > 200) {
            on5s.length = 200
        }
        this.wI8A(LOCAL_LOG_KEY, on5s)
    }
    ;
    b0x.cDt0x = function() {
        return this.RR4V(LOCAL_LOG_KEY)
    }
    ;
    b0x.eq2x = function(Q0x) {
        this.eV2x("play", Q0x)
    }
    ;
    var bEy6s = q0x.hO3x.gm3x();
    l0x.sA6u = function() {
        bEy6s.eV2x.apply(bEy6s, arguments)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , br1x = NEJ.F
      , h0x = c0x("nej.v")
      , v0x = c0x("nej.j")
      , I0x = c0x("nej.ut")
      , a9j = c0x("nej.e")
      , k0x = c0x("nej.u")
      , n0x = c0x("nm.l")
      , l0x = c0x("nm.x")
      , q0x = c0x("nm.d");
    var FullscreenApi = l0x.FL0x || {};
    if (!q0x.wC8u)
        return;
    var R0x = q0x.wC8u.A0x({
        onresourceload: cDr0x
    });
    var wd8V = q0x.hO3x.gm3x();
    function cDr0x(u0x, cS1x, j0x, bh1x) {
        var i0x = [];
        switch (parseInt(u0x)) {
        case 2:
            i0x = j0x;
            break;
        case 13:
            i0x = j0x.tracks;
            break;
        case 18:
            i0x.push(j0x);
            break;
        case 19:
            i0x = j0x.songs;
            break;
        case 21:
            if (j0x.mp && j0x.mp.fee && j0x.mp.pl <= 0) {
                l0x.WX5c(j0x.data.id, j0x.mp.fee);
                return
            }
            break
        }
        if (l0x.Lj2x(i0x, true, null, u0x == 19 ? {
            source: "album",
            sourceid: cS1x
        } : null) == 0) {
            return
        }
        l0x.fs2x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bh1x.message
        })
    }
    function cDq0x(d0x, oc5h, yo8g, ey2x) {
        ey2x = ey2x || {};
        if (d0x.action == "ok") {
            if (yo8g) {
                location.dispatch2("/payfee?songId=" + yo8g)
            } else {
                location.dispatch2("/payfee?fee=" + oc5h || 1)
            }
            wd8V.eV2x("click", {
                type: "tobuyvip",
                name: "box",
                source: ey2x.source || "song",
                sourceid: ey2x.sourceid || yo8g || 0
            })
        } else if (d0x.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + yo8g);
            wd8V.eV2x("click", {
                type: "tobuyone",
                name: "box",
                source: ey2x.source || "song",
                sourceid: ey2x.sourceid || yo8g || 0
            })
        }
    }
    function QI4M(bG1x) {
        l0x.fs2x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bG1x,
            btntxt: "知道了"
        })
    }
    function QH4L(bG1x, Q0x) {
        QI4M((Q0x || bb1x).toast || bG1x)
    }
    l0x.iu3x = function(bG1x, C0x, u0x, cDo0x, bj1x) {
        bG1x = bG1x || "由于版权保护，您所在的地区暂时无法使用。";
        if (cDo0x && bj1x && bj1x.privilege && bj1x.privilege.toast) {
            v0x.bm1x("/api/song/toast", {
                query: {
                    id: bj1x.id
                },
                type: "json",
                onload: QH4L.f0x(this, bG1x),
                onerror: QH4L.f0x(this, bG1x)
            })
        } else if (C0x && u0x) {
            R0x.Rn4r(u0x, C0x, {
                conf: {
                    message: bG1x,
                    useCache: u0x != 18
                }
            })
        } else {
            QI4M(bG1x)
        }
    }
    ;
    l0x.uX7Q = function(oc5h, yo8g, u0x, ey2x, nq5v) {
        var bR1x, oW5b = "m-popup-info", blU1x = "单首购买", bmb1x = "马上去开通", cU1x = "唱片公司要求，当前歌曲须付费使用。", bFx6r = true;
        try {
            bR1x = top.api.feeMessage || {}
        } catch (e) {
            bR1x = {}
        }
        if (oc5h == 1 || oc5h == 8 || oc5h == 16) {
            if (u0x == "song") {
                oW5b = "m-popup-song-buy";
                cU1x = bR1x["vip2"] || cU1x;
                bmb1x = bR1x["vip2button"] || "包月购买";
                blU1x = bR1x["vip2link"] || blU1x;
                if (nq5v && nq5v.flag !== undefined) {
                    var bs1x = nq5v.flag.toString(2).split("");
                    if (parseInt(bs1x.pop(), 10) == 1) {
                        bFx6r = false
                    }
                }
            } else {
                cU1x = bR1x["vip"] || cU1x
            }
        } else if (oc5h == 4) {
            cU1x = bR1x["album"] || cU1x;
            bmb1x = "立即订购"
        } else {
            cU1x = bR1x["unknow"] || cU1x
        }
        l0x.ki4m({
            clazz: "m-layer-w5",
            html: a9j.cd1x(oW5b, {
                songTxt: blU1x,
                tip: cU1x,
                oktext: bmb1x,
                cctext: "以后再说",
                showSongText: bFx6r
            }),
            onaction: cDq0x.eA2x(null, oc5h, yo8g, ey2x)
        })
    }
    ;
    l0x.bFB6v = function(hy3x, gi3x) {
        l0x.ho3x({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(u0x) {
                if (u0x == "ok") {
                    l0x.LU2x({
                        id: hy3x,
                        type: gi3x
                    })
                }
            }
        })
    }
    ;
    l0x.WX5c = function(kB4F, oc5h) {
        var bR1x, cU1x = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bR1x = top.api.feeMessage || {}
        } catch (e) {
            bR1x = {}
        }
        if (oc5h == 1 || oc5h == 8) {
            cU1x = bR1x["vip"] || cU1x
        } else if (oc5h == 4) {
            cU1x = bR1x["album"] || cU1x
        } else {
            cU1x = bR1x["unknow"] || cU1x
        }
        return l0x.ki4m({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a9j.cd1x("m-popup-info", {
                tip: cU1x,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function(d0x) {
                if (d0x.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + kB4F);
                    wd8V.eV2x("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: kB4F || 0
                    })
                }
            }
        })
    }
    ;
    l0x.Lj2x = function() {
        function compareFee(cDn0x, cDk9b) {
            var bz1x = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bz1x[cDn0x] || 0) - (bz1x[cDk9b] || 0)
        }
        return function(i0x, cU1x, rQ6K, ey2x) {
            rQ6K = rQ6K || {};
            var zc8U = []
              , Li2x = {}
              , bFZ6T = 0
              , bGc6W = 0
              , Lh2x = null;
            if (!i0x || !i0x.length)
                return zc8U;
            k0x.bd1x(i0x, function(bj1x) {
                var fA2x = l0x.qq6k(bj1x);
                if (fA2x == 0) {
                    zc8U.push(bj1x)
                } else if (fA2x == 10) {
                    if (bj1x.privilege) {
                        bj1x.fee = bj1x.privilege.fee
                    }
                    if (compareFee(bj1x.fee, Li2x.fee) > 0) {
                        Li2x = bj1x
                    }
                } else if (fA2x == 11) {
                    ++bFZ6T;
                    if (!rQ6K.play)
                        zc8U.push(bj1x)
                } else if (fA2x == 1e3) {
                    ++bGc6W;
                    if (!rQ6K.download)
                        zc8U.push(bj1x)
                } else if (fA2x == 100) {
                    Lh2x = bj1x
                }
            });
            if (zc8U.length == 0 && cU1x) {
                if (bFZ6T == i0x.length) {
                    var uj7c = i0x[0].privilege || {};
                    if (uj7c.payed) {
                        l0x.iu3x("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l0x.uX7Q(uj7c.fee, null, null, ey2x)
                    }
                } else if (bGc6W == i0x.length) {
                    l0x.iu3x("因版权方要求，该歌曲不支持下载")
                } else if (Li2x.id) {
                    l0x.uX7Q(Li2x.fee, Li2x.id, null, ey2x, Li2x.privilege)
                } else {
                    if (Lh2x && i0x.length == 1 && Lh2x.privilege && Lh2x.privilege.st < 0 && Lh2x.privilege.toast) {
                        l0x.iu3x(null, null, null, true, Lh2x)
                    } else {
                        l0x.iu3x()
                    }
                }
            }
            return zc8U
        }
    }();
    l0x.qq6k = function(bj1x) {
        if (!bj1x)
            return 0;
        var fA2x = bj1x.privilege;
        if (bj1x.program)
            return 0;
        if (window.GAbroad)
            return 100;
        if (fA2x) {
            if (fA2x.st != null && fA2x.st < 0) {
                return 100
            }
            if (fA2x.fee > 0 && fA2x.fee != 8 && fA2x.payed == 0 && fA2x.pl <= 0)
                return 10;
            if (fA2x.fee == 16)
                return 11;
            if ((fA2x.fee == 0 || fA2x.payed) && fA2x.pl > 0 && fA2x.dl == 0)
                return 1e3;
            if (fA2x.pl == 0 && fA2x.dl == 0)
                return 100;
            return 0
        } else {
            var ex2x = bj1x.status != null ? bj1x.status : bj1x.st != null ? bj1x.st : 0;
            if (bj1x.status >= 0)
                return 0;
            if (bj1x.fee > 0)
                return 10;
            return 100
        }
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, fy2x = NEJ.R, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), I0x = c0x("nej.ut"), w0x = c0x("nm.w"), b0x;
    if (!!w0x.bGt6n)
        return;
    var cl1x = ~[];
    cl1x = {
        bGw6q: ++cl1x,
        cDi9Z: (![] + "")[cl1x],
        kl4p: ++cl1x,
        Lf2x: (![] + "")[cl1x],
        Wq5v: (cl1x[cl1x] + "")[cl1x],
        bGX7Q: ++cl1x,
        cFp0x: ({} + "")[cl1x],
        cDf9W: (cl1x[cl1x] + "")[cl1x],
        cDe9V: (![] + "")[cl1x],
        Qj3x: ++cl1x,
        VZ5e: (!"" + "")[cl1x],
        cFq0x: ++cl1x,
        BD9u: ++cl1x,
        bHr7k: ({} + "")[cl1x],
        wW8O: ++cl1x,
        cDb9S: ++cl1x,
        cFr0x: ++cl1x,
        cFs0x: ++cl1x
    };
    cl1x.KY2x = (cl1x.KY2x = cl1x + "")[cl1x.BD9u] + (cl1x.KX2x = cl1x.KY2x[cl1x.kl4p]) + (cl1x.bfp8h = (cl1x.Gl1x + "")[cl1x.kl4p]) + (!cl1x + "")[cl1x.Qj3x] + (cl1x.Gm1x = cl1x.KY2x[cl1x.wW8O]) + (cl1x.Gl1x = (!"" + "")[cl1x.kl4p]) + (cCW9N = (!"" + "")[cl1x.bGX7Q]) + cl1x.KY2x[cl1x.BD9u] + cl1x.Gm1x + cl1x.KX2x + cl1x.Gl1x;
    cl1x.bfp8h = cl1x.Gl1x + (!"" + "")[cl1x.Qj3x] + cl1x.Gm1x + cCW9N + cl1x.Gl1x + cl1x.bfp8h;
    cl1x.Gl1x = cl1x.bGw6q[cl1x.KY2x][cl1x.KY2x];
    w0x.bGt6n = cl1x
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), O0x = c0x("nej.ui"), b0x;
    if (!!O0x.bfj8b)
        return;
    var iX3x = a9j.to7h(".#<uispace>{position:absolute;background:#fff;}");
    O0x.bfj8b = NEJ.C();
    b0x = O0x.bfj8b.N0x(O0x.Vk5p);
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.bX1x([[document, "click", this.sV7O.f0x(this)]]);
        this.cCU9L = !!e0x.nostop;
        this.bJB7u = {
            top: e0x.top,
            left: e0x.left
        }
    }
    ;
    b0x.bC1x = function() {
        delete this.xO8G;
        delete this.bmy2x;
        delete this.qH6B;
        delete this.bJH7A;
        delete this.bfe8W;
        delete this.bJB7u;
        this.bF1x()
    }
    ;
    b0x.ch1x = function() {
        this.mj4n = iX3x
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        this.AF9w = this.o0x;
        h0x.s0x(this.o0x, "click", this.cCT9K.f0x(this))
    }
    ;
    b0x.sV7O = function(d0x) {
        if (d0x.button != 2)
            this.bt1x()
    }
    ;
    b0x.cCT9K = function(d0x) {
        if (this.cCU9L)
            return;
        h0x.tW7P(d0x);
        var F0x = h0x.X1x(d0x);
        if (F0x.tagName == "A")
            h0x.cn1x(d0x)
    }
    ;
    b0x.cCS9J = function() {
        var df2x = /\s+/i;
        return function(or5w) {
            or5w = (or5w || "").trim().toLowerCase().split(df2x);
            or5w[0] = or5w[0] || "bottom";
            or5w[1] = or5w[1] || "left";
            this.qH6B = or5w
        }
    }();
    b0x.cCR9I = function(or5w) {
        var m0x = {}
          , nd5i = this.bmy2x
          , cFt0x = a9j.oy5D()
          , cC1x = this.o0x.offsetWidth
          , ce1x = this.o0x.offsetHeight;
        switch (or5w[0]) {
        case "top":
            m0x.top = nd5i.top - ce1x;
            m0x.left = or5w[1] == "right" ? nd5i.left + nd5i.width - cC1x : nd5i.left;
            break;
        case "left":
            m0x.left = nd5i.left - cC1x;
            m0x.top = or5w[1] == "bottom" ? nd5i.top + nd5i.height - ce1x : nd5i.top;
            break;
        case "right":
            m0x.left = nd5i.left + nd5i.width;
            m0x.top = or5w[1] == "bottom" ? nd5i.top + nd5i.height - ce1x : nd5i.top;
            break;
        default:
            m0x.top = nd5i.top + nd5i.height;
            m0x.left = or5w[1] == "right" ? nd5i.left + nd5i.width - cC1x : nd5i.left;
            break
        }
        return m0x
    }
    ;
    b0x.ME2x = function() {
        if (!this.bJH7A) {
            this.gD3x(this.bJB7u);
            return
        }
        if (!!this.bfe8W) {
            this.gD3x(this.xO8G);
            return
        }
        if (!!this.bmy2x)
            this.gD3x(this.cCR9I(this.qH6B))
    }
    ;
    b0x.cCP9G = function(F0x, dq2x, d0x) {
        dq2x = dq2x || bb1x;
        var bKE8w = a9j.oy5D()
          , cZ1x = h0x.jG4K(d0x) + (dq2x.left || 0)
          , hv3x = h0x.lZ4d(d0x) + (dq2x.top || 0)
          , cC1x = F0x.offsetWidth + (dq2x.right || 0)
          , ce1x = F0x.offsetHeight + (dq2x.bottom || 0)
          , KS2x = bKE8w.scrollWidth
          , bmN2x = bKE8w.scrollHeight
          , bmO2x = cZ1x + cC1x
          , bmP2x = hv3x + ce1x;
        switch (this.qH6B[0]) {
        case "top":
            hv3x = bmP2x > bmN2x ? hv3x - ce1x : hv3x;
            if (this.qH6B[1] == "right") {
                cZ1x = cZ1x - cC1x < 0 ? 0 : cZ1x - cC1x
            } else {
                cZ1x = bmO2x > KS2x ? KS2x - cC1x : cZ1x
            }
            break;
        case "left":
            cZ1x = bmO2x > KS2x ? KS2x - cC1x : cZ1x;
            if (this.qH6B[1] == "top") {
                hv3x = bmP2x > bmN2x ? hv3x - ce1x : hv3x
            } else {
                hv3x = hv3x - ce1x < 0 ? hv3x : hv3x - ce1x
            }
            break;
        case "right":
            cZ1x = cZ1x - cC1x < 0 ? 0 : cZ1x - cC1x;
            if (this.qH6B[1] == "top") {
                hv3x = bmP2x > bmN2x ? hv3x - ce1x : hv3x
            } else {
                hv3x = hv3x - ce1x < 0 ? hv3x : hv3x - ce1x
            }
            break;
        default:
            hv3x = hv3x - ce1x < 0 ? hv3x : hv3x - ce1x;
            if (this.qH6B[1] == "left") {
                cZ1x = bmO2x > KS2x ? KS2x - cC1x : cZ1x
            } else {
                cZ1x = cZ1x - cC1x < 0 ? 0 : cZ1x - cC1x
            }
            break
        }
        return {
            top: hv3x,
            left: cZ1x
        }
    }
    ;
    b0x.bmQ2x = function() {
        var cCN9E = function(F0x, dq2x) {
            F0x = a9j.B0x(F0x);
            if (!F0x)
                return;
            dq2x = dq2x || bb1x;
            var bi1x = a9j.hU3x(F0x);
            return {
                top: bi1x.y - (dq2x.top || 0),
                left: bi1x.x - (dq2x.left || 0),
                width: F0x.offsetWidth + (dq2x.right || 0),
                height: F0x.offsetHeight + (dq2x.bottom || 0)
            }
        };
        return function(e0x) {
            e0x = e0x || bb1x;
            this.bfe8W = e0x.event;
            this.cCS9J(e0x.align);
            if (!!this.bfe8W)
                this.xO8G = this.cCP9G(e0x.target, e0x.delta, this.bfe8W);
            this.bmy2x = cCN9E(e0x.target, e0x.delta);
            this.bJH7A = !!e0x.fitable;
            this.J0x();
            return this
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), O0x = c0x("nej.ui"), b0x, L0x;
    if (!!O0x.CE0x)
        return;
    O0x.CE0x = NEJ.C();
    b0x = O0x.CE0x.N0x(O0x.bdS8K);
    L0x = O0x.CE0x.cs1x;
    O0x.CE0x.cFu0x = function() {
        var cCL9C = function(d0x, C0x, fP3x, kr4v, PH3x) {
            var cF1x, K0x = C0x + "-i", R0x = fP3x.zg9X, bMs8k = !!kr4v.noclear, bMI8A = !!kr4v.toggled;
            if (k0x.gK3x(kr4v.onbeforeclick)) {
                var bdL8D = kr4v.noclear
                  , cCK9B = kr4v.toggled;
                try {
                    kr4v.onbeforeclick(kr4v)
                } catch (e) {}
                bMs8k = !!kr4v.noclear;
                bMI8A = !!kr4v.toggled;
                kr4v.toggled = cCK9B;
                kr4v.noclear = bdL8D
            }
            var EC0x = R0x[K0x];
            if (bMI8A && !!EC0x) {
                EC0x.bt1x();
                return
            }
            h0x.bg1x(d0x);
            if (!bMs8k) {
                h0x.z0x(document, "click");
                cF1x = fP3x.A0x(kr4v)
            } else {
                cF1x = fP3x.bKi8a(kr4v, !0)
            }
            R0x[K0x] = cF1x;
            cF1x.wq8i("onbeforerecycle", function() {
                delete R0x[K0x]
            });
            cF1x.bmQ2x(PH3x)
        };
        return function(g0x, e0x) {
            g0x = a9j.B0x(g0x);
            if (!g0x)
                return this;
            if (!this.zg9X)
                this.zg9X = {};
            var C0x = a9j.lP4T(g0x);
            if (!!this.zg9X[C0x])
                return this;
            e0x = NEJ.X({}, e0x);
            var PH3x = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e0x);
            PH3x.target = C0x;
            e0x.destroyable = !0;
            if (!e0x.fixed) {
                PH3x.fitable = !0;
                e0x.parent = document.body
            }
            this.zg9X[C0x] = [C0x, e0x.event || "click", cCL9C.eA2x(null, C0x, this, e0x, PH3x)];
            h0x.s0x.apply(h0x, this.zg9X[C0x]);
            return this
        }
    }();
    O0x.CE0x.cFv0x = function(g0x) {
        if (!this.zg9X)
            return this;
        var C0x = a9j.lP4T(g0x)
          , d0x = this.zg9X[C0x];
        if (!d0x)
            return this;
        delete this.zg9X[C0x];
        h0x.mo4s.apply(h0x, d0x);
        var cF1x = this.zg9X[C0x + "-i"];
        if (!!cF1x)
            cF1x.bt1x();
        return this
    }
    ;
    b0x.bgC9t = function() {
        return O0x.bfj8b.A0x(this.cg1x)
    }
    ;
    b0x.UY5d = function() {
        L0x.UY5d.apply(this, arguments);
        this.cg1x.top = null;
        this.cg1x.left = null;
        this.cg1x.nostop = !1
    }
    ;
    b0x.bmQ2x = function(e0x) {
        if (!!this.oU5Z)
            this.oU5Z.bmQ2x(e0x);
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, bc1x = c0x("nej.ui"), n0x = c0x("nm.l"), b0x, L0x;
    n0x.bna2x = NEJ.C();
    b0x = n0x.bna2x.N0x(bc1x.CE0x);
    b0x.bl1x = function(e0x) {
        e0x.nohack = true;
        this.bn1x(e0x)
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), n0x = c0x("nm.l"), l0x = c0x("nm.x"), b0x, L0x;
    var FullscreenApi = l0x.FL0x || {};
    n0x.Z1x = NEJ.C();
    b0x = n0x.Z1x.N0x(n0x.bna2x);
    L0x = n0x.Z1x.cs1x;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.ez2x = e0x.type || 1
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        this.o0x = a9j.nR5W(this.cCH9y());
        var i0x = a9j.dk2x(this.o0x);
        this.ry6s = i0x[0];
        this.cu1x = i0x[1]
    }
    ;
    b0x.cCH9y = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    }
    ;
    b0x.ME2x = function() {
        var D0x = {}
          , cj1x = this.o0x.style
          , jD4H = a9j.oy5D()
          , nW5b = {
            left: jD4H.scrollLeft,
            top: jD4H.scrollTop
        }
          , dq2x = {
            left: jD4H.clientWidth - this.o0x.offsetWidth,
            top: jD4H.clientHeight - this.o0x.offsetHeight
        };
        D0x.top = Math.max(0, nW5b.top + dq2x.top / 2);
        D0x.left = Math.max(0, nW5b.left + dq2x.left / 2);
        this.oU5Z.gD3x(D0x)
    }
    ;
    b0x.J0x = function(e0x) {
        L0x.J0x.call(this);
        this.ME2x();
        this.ez2x == 1 ? a9j.fj2x(this.ry6s, "u-icn-32", "u-icn-31") : a9j.fj2x(this.ry6s, "u-icn-31", "u-icn-32");
        this.cu1x.innerHTML = e0x.tip || ""
    }
    ;
    window.g_showTipCard = n0x.Z1x.J0x = function() {
        var eg2x;
        return function(e0x) {
            clearTimeout(eg2x);
            if (e0x.parent === undefined)
                e0x.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e0x.autoclose === undefined)
                e0x.autoclose = true;
            e0x.clazz = "m-sysmsg";
            !!this.fg2x && this.fg2x.T0x();
            this.fg2x = this.A0x(e0x);
            this.fg2x.J0x(e0x);
            if (e0x.autoclose)
                eg2x = setTimeout(this.bt1x.f0x(this), 2e3)
        }
        .f0x(n0x.Z1x)
    }();
    n0x.Z1x.bt1x = function() {
        !!this.fg2x && this.fg2x.bt1x()
    }
}
)();
(function() {
    var c0x = NEJ.P
      , v0x = c0x("nej.j")
      , k0x = c0x("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v0x.bm1x = v0x.bm1x.eH2x(function(d0x) {
            e0x = d0x.args[1];
            e0x.query = e0x.query || {};
            if (k0x.fC2x(e0x.query))
                e0x.query = k0x.hq3x(e0x.query);
            e0x.query.ref = "mail"
        })
    }
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, fy2x = NEJ.R, I0x = c0x("nej.ut"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), v0x = c0x("nej.j"), q0x = c0x("nm.d"), n0x = c0x("nm.l"), K0x = "playlist-tracks_", b0x;
    q0x.fp2x({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(Q0x, e0x) {
                this.cCG9x(Q0x.playlist);
                return {
                    total: 0,
                    list: fy2x
                }
            },
            onerror: function() {
                this.z0x("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(Q0x, e0x) {
                var np5u = Q0x.playlist;
                np5u.creator = GUser;
                np5u.isHost = !0;
                np5u.typeFlag = "playlist";
                return np5u
            },
            finaly: function(d0x, e0x) {
                h0x.z0x(q0x.ic3x, "listchange", d0x)
            },
            onmessage: function() {
                var mk4o = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bY1x) {
                    n0x.Z1x.J0x({
                        tip: mk4o[bY1x] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(e0x) {
                e0x.id = e0x.data.pid
            },
            finaly: function(d0x, e0x) {
                h0x.z0x(q0x.ic3x, "listchange", d0x)
            },
            onmessage: function() {
                var mk4o = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bY1x) {
                    n0x.Z1x.J0x({
                        tip: mk4o[bY1x] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function(e0x) {
                var ey2x = e0x.ext || {};
                e0x.ext = NEJ.X(ey2x, e0x.data);
                e0x.data = {
                    id: e0x.ext.id
                }
            },
            format: function(Q0x, e0x) {
                n0x.Z1x.J0x({
                    tip: "收藏成功" + (Q0x.point > 0 ? ' 获得<em class="s-fc6">' + Q0x.point + "积分</em>" : "")
                });
                var p0x = e0x.ext;
                p0x.subscribedCount++;
                return p0x
            },
            finaly: function(d0x, e0x) {
                h0x.z0x(q0x.cCF9w, "listchange", d0x);
                h0x.z0x(q0x.cCF9w, "itemchange", {
                    attr: "subscribedCount",
                    data: d0x.data
                })
            },
            onmessage: function() {
                var mk4o = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function(bY1x) {
                    n0x.Z1x.J0x({
                        type: 2,
                        tip: mk4o[bY1x] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(e0x) {
                e0x.id = e0x.data.id = e0x.data.pid
            },
            finaly: function(d0x, e0x) {
                h0x.z0x(q0x.ic3x, "listchange", d0x)
            },
            onmessage: function() {
                var mk4o = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bY1x) {
                    n0x.Z1x.J0x({
                        tip: mk4o[bY1x],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(e0x) {
                var j0x = e0x.data
                  , bdu8m = {};
                bdu8m["playlist-update-name"] = {
                    id: j0x.id,
                    name: j0x.name
                };
                bdu8m["playlist-update-tag"] = {
                    id: j0x.id,
                    tags: j0x.tags.join(";")
                };
                bdu8m["playlist-update-desc"] = {
                    id: j0x.id,
                    desc: j0x.description
                };
                e0x.data = bdu8m;
                e0x.ext = j0x
            },
            format: function(W1x, qB6v, PA3x, e0x) {
                if (W1x.code == 200 && qB6v.code == 200 && PA3x.code == 200) {
                    e0x.ext.allSuccess = true;
                    n0x.Z1x.J0x({
                        tip: "保存成功"
                    })
                } else if (W1x.code == 407 || qB6v.code == 407 || PA3x.code == 407) {
                    e0x.ext.allSuccess = false;
                    n0x.Z1x.J0x({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e0x.ext.allSuccess = false;
                    n0x.Z1x.J0x({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eJ2x(e0x.ext.id)
            },
            finaly: function(d0x, e0x) {
                h0x.z0x(q0x.ic3x, "listchange", d0x)
            },
            onmessage: function(bY1x) {
                n0x.Z1x.J0x({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(Q0x, e0x) {
                var p0x = this.eJ2x(e0x.ext.id);
                if (Q0x.code == 200)
                    p0x.name = e0x.ext.name;
                return Q0x
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(Q0x, e0x) {
                var p0x = this.eJ2x(e0x.ext.id);
                if (Q0x.code == 200)
                    p0x.tags = e0x.ext.tags;
                return Q0x
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(Q0x, e0x) {
                var p0x = this.eJ2x(e0x.ext.id);
                if (Q0x.code == 200)
                    p0x.description = e0x.ext.description;
                return Q0x
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(e0x) {
                e0x.url = e0x.data.url;
                delete e0x.data.url
            },
            format: function(Q0x, e0x) {
                n0x.Z1x.J0x({
                    tip: "保存成功"
                });
                var p0x = this.eJ2x(e0x.data.id);
                p0x.coverImgUrl = e0x.url;
                e0x.ext = p0x;
                return p0x
            },
            onmessage: function(bY1x) {
                n0x.Z1x.J0x({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function(d0x, e0x) {
                h0x.z0x(q0x.ic3x, "itemchange", {
                    attr: "coverImgUrl",
                    data: e0x.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(Q0x, e0x) {
                var np5u = this.eJ2x(e0x.data.id);
                if (!np5u)
                    return;
                np5u.playCount++;
                h0x.z0x(q0x.ic3x, "itemchange", {
                    attr: "playcount",
                    data: np5u
                })
            }
        }
    });
    q0x.ic3x = NEJ.C();
    b0x = q0x.ic3x.N0x(q0x.hJ3x);
    b0x.cw1x = function() {
        this.cE1x()
    }
    ;
    b0x.bQa9R = function() {
        var do2x = GUser.userId;
        this.lO4S({
            limit: 1001,
            key: "playlist_my-" + do2x,
            data: {
                offset: 0,
                limit: 1001,
                uid: do2x
            }
        })
    }
    ;
    b0x.cCG9x = function(i0x) {
        var do2x = GUser.userId
          , iQ3x = []
          , bQq9h = [];
        k0x.bd1x(i0x, function(p0x) {
            p0x.typeFlag = "playlist";
            if (p0x.creator && p0x.creator.userId == do2x) {
                if (p0x.specialType == 5)
                    p0x.name = "我喜欢的音乐";
                p0x.isHost = !0;
                iQ3x.push(p0x)
            } else {
                bQq9h.push(p0x)
            }
        });
        this.wh8Z("playlist_new-" + do2x, iQ3x);
        this.wh8Z("playlist_fav-" + do2x, bQq9h)
    }
    ;
    b0x.cCE9v = function(j0x) {
        this.cp1x("playlist-update-cover", {
            data: j0x
        })
    }
    ;
    b0x.cFw0x = function() {
        var Pl3x = this.cCC9t.B0x("host-plist");
        if (Pl3x.length == 0) {
            return
        }
        if (Pl3x.length == 1 && Pl3x[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Pl3x.length; i < len; i++) {
            var p0x = Pl3x[i];
            if (p0x.trackCount > 0)
                return p0x.id
        }
        return this.cCC9t.B0x("host-plist")[0].id
    }
    ;
    b0x.cCB9s = function(C0x) {
        if (GUser && GUser.userId > 0) {
            this.cp1x("playlist-upcount", {
                data: {
                    id: C0x
                }
            })
        }
    }
    ;
    b0x.Gz1x = function() {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    }
    ;
    b0x.cFx0x = function() {
        return GUser.userId
    }
    ;
    b0x.GA1x = function(p0x) {
        if (p0x.userId == GUser.userId && p0x.specialType == 5)
            p0x.name = "我喜欢的音乐";
        h0x.z0x(this.constructor, "itemchange", {
            data: this.Bs9j(p0x)
        });
        return p0x
    }
    ;
    I0x.fK2x.A0x({
        element: q0x.ic3x,
        event: ["listchange", "playcountchange", "itemchange"]
    })
}
)();
(function() {
    var c0x = NEJ.P, fy2x = NEJ.R, br1x = NEJ.F, bb1x = NEJ.O, I0x = c0x("nej.ut"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), l0x = c0x("nm.x"), q0x = c0x("nm.d"), n0x = c0x("nm.l"), b0x, L0x;
    q0x.fp2x({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(Q0x) {
                return Q0x.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e0x) {
                e0x.data.limit = 1e3;
                delete e0x.data.id
            },
            format: function(Q0x, e0x) {
                var bRn0x = []
                  , qs6m = Q0x.programs;
                if (qs6m) {
                    for (var i = 0, l = qs6m.length; i < l; i++) {
                        if (qs6m[i].programFeeType < 10 || qs6m[i].buyed) {
                            bRn0x.push(qs6m[i])
                        }
                    }
                }
                return bRn0x
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function(Q0x, e0x) {
                return Q0x.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function(e0x) {
                e0x.ext = e0x.data;
                e0x.data = {
                    id: e0x.ext.id
                };
                e0x.id = e0x.data.id
            },
            format: function(Q0x, e0x) {
                n0x.Z1x.J0x({
                    tip: "收藏成功"
                });
                var p0x = e0x.ext;
                p0x.subscribedCount++;
                p0x.subscribed = !0;
                return p0x
            },
            finaly: function(d0x, e0x) {
                h0x.z0x(q0x.rb6V, "listchange", d0x)
            },
            onmessage: function() {
                var mk4o = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function(bY1x) {
                    n0x.Z1x.J0x({
                        type: 2,
                        tip: mk4o[bY1x] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function(d0x, e0x) {
                h0x.z0x(q0x.rb6V, "listchange", d0x)
            },
            onmessage: function() {
                var mk4o = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function(bY1x) {
                    l0x.bnC2x({
                        txt: mk4o[bY1x] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(e0x) {
                var p0x = this.eJ2x(e0x.data.id) || bb1x;
                e0x.ext = (p0x.listenerCount || 0) + 1
            },
            format: function(Q0x, e0x) {
                var p0x = this.eJ2x(e0x.data.id);
                if (!!p0x) {
                    p0x.listenerCount = Math.max(e0x.ext, p0x.listenerCount || 0)
                }
            },
            finaly: function(d0x, e0x) {
                h0x.z0x(q0x.rb6V, "itemchange", {
                    attr: "playCount",
                    data: this.eJ2x(e0x.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(e0x) {
                e0x.data = {
                    threadId: "A_DJ_1_" + e0x.id
                }
            },
            format: function(Q0x, e0x) {
                var p0x = e0x.ext.data || this.eJ2x(e0x.id);
                p0x.liked = true;
                p0x.likedCount++;
                e0x.ext.data = p0x;
                try {
                    top.player.setLike(p0x)
                } catch (e) {}
                return p0x
            },
            finaly: function(d0x, e0x) {
                h0x.z0x(q0x.rb6V, "itemchange", {
                    attr: "likedCount",
                    data: e0x.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(e0x) {
                e0x.data = {
                    threadId: "A_DJ_1_" + e0x.id
                }
            },
            format: function(Q0x, e0x) {
                var p0x = e0x.ext.data || this.eJ2x(e0x.id);
                p0x.liked = false;
                p0x.likedCount--;
                e0x.ext.data = p0x;
                try {
                    top.player.setLike(p0x)
                } catch (e) {}
                return p0x
            },
            finaly: function(d0x, e0x) {
                h0x.z0x(q0x.rb6V, "itemchange", {
                    attr: "likedCount",
                    data: e0x.ext.data
                })
            }
        }
    });
    q0x.rb6V = NEJ.C();
    b0x = q0x.rb6V.N0x(q0x.hJ3x);
    b0x.cFy0x = function() {
        var do2x = GUser.userId;
        this.lO4S({
            limit: 1001,
            key: "program_fav-" + do2x,
            data: {
                offset: 0,
                limit: 1e3,
                uid: do2x
            }
        })
    }
    ;
    b0x.cFz0x = function(de1x) {
        var qr6l = de1x[this.xy8q];
        l0x.cCv9m(4, function(R0x) {
            R0x.wh8Z("track_program-" + qr6l, de1x.songs)
        });
        delete de1x.songs;
        var bP1x = de1x.mainSong;
        l0x.cCv9m(4, function(R0x) {
            R0x.wh8Z("track_program_main-" + qr6l, !bP1x ? [] : [bP1x])
        });
        de1x.mainSong = (bP1x || bb1x).id
    }
    ;
    b0x.cFB0x = function(C0x) {
        var de1x = this.eJ2x(C0x)
          , do2x = localCache.Za6U("host.profile.userId");
        return !!de1x && de1x.dj.userId == do2x
    }
    ;
    b0x.cFC0x = function(C0x) {
        return !1
    }
    ;
    b0x.GA1x = function(p0x) {
        h0x.z0x(this.constructor, "itemchange", {
            attr: "detail",
            data: this.Bs9j(p0x)
        });
        return p0x
    }
    ;
    b0x.cCB9s = function(C0x) {
        this.cp1x("program-update-count", {
            data: {
                id: C0x
            }
        })
    }
    ;
    l0x.bSI1x = function(e0x) {
        var R0x = q0x.rb6V.A0x({
            onitemadd: function() {
                (e0x.onsuccess || br1x)()
            },
            onerror: function() {
                (e0x.onerror || br1x)()
            }
        });
        if (e0x.data.liked) {
            R0x.ux7q(e0x.data)
        } else {
            R0x.ps5x(e0x.data)
        }
    }
    ;
    b0x.ps5x = function(de1x) {
        if (!l0x.gT3x())
            return;
        var ct1x = {
            ext: {}
        };
        if (k0x.lG4K(de1x)) {
            ct1x.id = de1x.id;
            ct1x.ext.data = de1x
        } else {
            ct1x.id = de1x
        }
        this.cp1x("program-like", ct1x)
    }
    ;
    b0x.ux7q = function(de1x) {
        if (!l0x.gT3x())
            return;
        var ct1x = {
            ext: {}
        };
        if (k0x.lG4K(de1x)) {
            ct1x.id = de1x.id;
            ct1x.ext.data = de1x
        } else {
            ct1x.id = de1x
        }
        this.cp1x("program-unlike", ct1x)
    }
    ;
    I0x.fK2x.A0x({
        element: q0x.rb6V,
        event: ["listchange", "itemchange"]
    })
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, fy2x = NEJ.R, I0x = c0x("nej.ut"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), v0x = c0x("nej.j"), q0x = c0x("nm.d"), n0x = c0x("nm.l"), l0x = c0x("nm.x"), K0x = "playlist-tracks_", l0x = c0x("nm.x"), b0x;
    q0x.fp2x({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(e0x) {
                e0x.data.c = JSON.stringify([{
                    id: e0x.data.id
                }])
            },
            format: function(Q0x, e0x) {
                var bj1x = l0x.GB1x(Q0x.songs[0]);
                bj1x.privilege = Q0x.privileges[0];
                return bj1x
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(e0x) {
                e0x.data.n = 1e3
            },
            format: function(Q0x, e0x) {
                var hC3x = [];
                this.tR7K.GA1x(Q0x.playlist);
                k0x.bd1x(Q0x.playlist.tracks, function(bP1x, r0x) {
                    var bTa1x = l0x.GB1x(bP1x);
                    bTa1x.privilege = Q0x.privileges[r0x];
                    hC3x.push(bTa1x)
                }, this);
                return hC3x
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(Q0x, e0x) {
                var hC3x = [];
                k0x.bd1x(Q0x.songs, function(bj1x) {
                    hC3x.push(l0x.GB1x(bj1x))
                });
                return hC3x
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e0x) {
                var bz1x = {}
                  , j0x = e0x.data
                  , cCj9a = this.hD3x(e0x.key) || [];
                GC1x = [];
                k0x.bd1x(cCj9a, function(bP1x) {
                    var C0x = k0x.lG4K(bP1x) ? bP1x.id : bP1x;
                    bz1x[C0x] = true
                });
                e0x.ext = [];
                k0x.bd1x(j0x.tracks, function(bP1x) {
                    var C0x = k0x.lG4K(bP1x) ? bP1x.id : bP1x;
                    if (!bz1x[C0x]) {
                        GC1x.push(C0x);
                        bz1x[C0x] = true;
                        e0x.ext.push(bP1x)
                    }
                });
                j0x.trackIds = JSON.stringify(GC1x);
                j0x.op = "add";
                if (!GC1x.length) {
                    e0x.value = {
                        code: 502
                    }
                }
            },
            format: function(Q0x, e0x) {
                n0x.Z1x.J0x({
                    tip: "已添加至歌单"
                });
                var np5u = this.tR7K.eJ2x(e0x.data.pid);
                if (!!Q0x.coverImgUrl)
                    np5u.coverImgUrl = Q0x.coverImgUrl;
                k0x.nk5p(e0x.ext, function(bP1x) {
                    this.yM8E(e0x, k0x.lG4K(bP1x) ? bP1x : null);
                    if (!!np5u)
                        np5u.trackCount++
                }, this);
                h0x.z0x(q0x.ic3x, "itemchange", {
                    data: np5u || {},
                    cmd: "add"
                });
                this.z0x("onaddsuccess");
                return null
            },
            finaly: function(d0x, e0x) {
                h0x.z0x(q0x.ws8k, "listchange", {
                    key: e0x.key,
                    action: "refresh"
                });
                var qr6l = e0x.data.pid
                  , cB1x = this.kw4A(e0x.key)
            },
            onmessage: function() {
                var mk4o = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function(bY1x) {
                    setTimeout(function() {
                        n0x.Z1x.J0x({
                            tip: mk4o[bY1x] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e0x) {
                var j0x = e0x.data;
                e0x.ext = j0x.trackIds;
                j0x.trackIds = JSON.stringify(j0x.trackIds);
                j0x.op = "del"
            },
            format: function(Q0x, e0x) {
                var np5u = this.tR7K.eJ2x(e0x.data.pid);
                k0x.bd1x(e0x.ext, function(C0x) {
                    this.bls1x({
                        id: C0x,
                        key: "track_playlist-" + e0x.data.pid
                    }, !0);
                    if (!!np5u)
                        np5u.trackCount = Math.max(0, np5u.trackCount - 1)
                }, this);
                h0x.z0x(q0x.ic3x, "itemchange", {
                    data: np5u || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function(d0x, e0x) {
                h0x.z0x(q0x.ws8k, "listchange", {
                    key: e0x.key,
                    action: "refresh"
                })
            },
            onmessage: function(bY1x) {
                l0x.bnC2x({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(Q0x, e0x) {
                return this.bTm1x.GA1x(Q0x.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(Q0x, e0x) {
                var i0x = [];
                if (e0x.data.type == -1) {
                    if (Q0x.weekData && Q0x.weekData.length) {
                        e0x.data.type = 1
                    } else {
                        e0x.data.type = 0
                    }
                }
                if (e0x.data.type == 1) {
                    i0x = this.bTp1x(Q0x.weekData)
                } else {
                    i0x = this.bTp1x(Q0x.allData)
                }
                return i0x
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function(Q0x, e0x) {
                var on5s = []
                  , i0x = Q0x.recommend || [];
                k0x.bd1x(i0x, function(bj1x, r0x) {
                    on5s.push({
                        action: "recommendimpress",
                        json: {
                            alg: bj1x.alg,
                            scene: "user-song",
                            position: r0x,
                            id: bj1x.id
                        }
                    })
                });
                this.kI4M.Xk5p(on5s);
                e0x.limit = i0x.length;
                return i0x
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e0x) {
                e0x.data.lv = 0;
                e0x.data.tv = 0
            },
            format: function(m0x, e0x) {
                return m0x
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    q0x.ws8k = NEJ.C();
    b0x = q0x.ws8k.N0x(q0x.hJ3x);
    b0x.cw1x = function() {
        this.cE1x();
        this.tR7K = q0x.ic3x.A0x();
        this.bTm1x = q0x.rb6V.A0x();
        this.kI4M = q0x.hO3x.A0x()
    }
    ;
    b0x.bTp1x = function(i0x) {
        var m0x = []
          , fo2x = 0;
        k0x.bd1x(i0x, function(p0x, r0x) {
            var bj1x = l0x.GB1x(p0x.song);
            if (r0x == 0) {
                fo2x = p0x.score
            }
            bj1x.max = fo2x;
            bj1x.playCount = p0x.playCount;
            bj1x.score = p0x.score;
            m0x.push(bj1x)
        });
        return m0x
    }
    ;
    I0x.fK2x.A0x({
        element: q0x.ws8k,
        event: ["listchange"]
    })
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , cy1x = c0x("nm.pc");
    var bnH2x = {
        playlist: "A_PL_0_",
        dj: "A_DJ_1_",
        program: "A_DJ_1_",
        album: "R_AL_3_",
        song: "R_SO_4_"
    };
    var qK6E = function(bR1x) {
        var CI0x = "orpheus://orpheus";
        window.top.postMessage(JSON.stringify(bR1x), CI0x)
    };
    var cCi9Z = function(lY4c) {
        var kR4V = "http://" + location.host + "/"
          , Pe3x = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/
          , dQ2x = Pe3x.exec(lY4c);
        if (!dQ2x)
            return cCh9Y(lY4c);
        var gi3x = dQ2x[2]
          , hy3x = dQ2x[3]
          , do2x = dQ2x[4] || ""
          , jt4x = "";
        switch (gi3x) {
        case "album":
            jt4x = "#/m/album/comment/?rid=" + bnH2x[gi3x] + hy3x + "&id=" + hy3x;
            break;
        case "playlist":
            jt4x = "#/m/playlist/comment/?rid=" + bnH2x[gi3x] + hy3x + "&id=" + hy3x;
            break;
        case "song":
        case "dj":
        case "program":
            jt4x = "#/m/song?rid=" + bnH2x[gi3x] + hy3x;
            break;
        case "event":
            jt4x = "#/m/friend/event/?id=" + hy3x + "&uid=" + do2x;
            break;
        case "user/home":
            jt4x = "#/m/personal/?uid=" + hy3x;
            break;
        case "mv":
            jt4x = "#/m2/mv/?id=" + hy3x;
            break;
        case "activity":
            jt4x = "#/m/friend/activity?id=" + hy3x;
            break;
        case "video":
            jt4x = "#/m2/mv/?id=" + hy3x + "&type=1";
            break;
        default:
            jt4x = "#/m/" + gi3x + "/?id=" + hy3x
        }
        return kR4V + jt4x
    };
    var cCh9Y = function(lY4c) {
        var cCe9V = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dQ2x = cCe9V.exec(lY4c);
        if (dQ2x)
            return "http://v.youku.com/v_show/id_" + dQ2x[1];
        return lY4c
    };
    cy1x.eq2x = function(gi3x, hy3x) {
        qK6E({
            name: "play",
            args: {
                type: gi3x,
                id: hy3x
            }
        })
    }
    ;
    cy1x.fD2x = function() {
        qK6E({
            name: "pause"
        })
    }
    ;
    cy1x.AW9N = function(lY4c) {
        qK6E({
            name: "open",
            args: {
                link: cCi9Z(lY4c)
            }
        })
    }
    ;
    cy1x.kL4P = function(gi3x, hy3x, cK1x) {
        qK6E({
            name: "share",
            args: {
                type: gi3x,
                id: hy3x,
                shareContent: cK1x
            }
        })
    }
    ;
    cy1x.bVp1x = function(gi3x, hy3x) {
        qK6E({
            name: "comment",
            args: {
                type: gi3x,
                id: hy3x
            }
        })
    }
    ;
    cy1x.cCd9U = function() {
        qK6E({
            name: "init"
        })
    }
    ;
    cy1x.AZ9Q = function(ce1x) {
        qK6E({
            name: "setHeight",
            args: {
                height: ce1x
            }
        })
    }
    ;
    cy1x.im3x = function(bG1x, U0x) {
        qK6E({
            name: "toast",
            args: {
                message: bG1x || "",
                state: U0x
            }
        })
    }
    ;
    cy1x.GE1x = function(lY4c) {
        qK6E({
            name: "login",
            args: {
                link: lY4c
            }
        })
    }
    ;
    cy1x.bVP1x = function(Bh9Y) {
        qK6E({
            name: "topbar",
            args: {
                show: !!Bh9Y
            }
        })
    }
    ;
    cy1x.cCc9T = function(bx1x) {
        qK6E({
            name: "refreshtopbar",
            args: {
                info: bx1x
            }
        })
    }
    ;
    cy1x.cBZ9Q = function(bs1x, r0x) {
        qK6E({
            name: "big",
            args: {
                arr: bs1x,
                index: r0x
            }
        })
    }
    ;
    cy1x.LU2x = function(cx1x) {
        qK6E({
            name: "download",
            args: {
                img: cx1x
            }
        })
    }
    ;
    cy1x.byy4C = function(cBX9O) {
        qK6E({
            name: "scrollable",
            args: {
                scrollable: cBX9O
            }
        })
    }
}
)();
(function() {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function(f) {
            if (null == f || void 0 == f)
                return f;
            if (0 != f.length % 2)
                throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d
      , d = (new J).d
      , e = (new J).d
      , f = (new J).d
      , g = (new J).d;
    (function() {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")]
          , J = [g("YPU7UcUUUlYkU0VkUU")]
          , b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")]
          , c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")]
          , Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function() {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function() {
                function d(b, c) {
                    if (null == b)
                        return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++)
                        f.push(Y(b[e], l++));
                    return f
                }
                function f(b) {
                    if (null == b)
                        return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }
                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15])
                        return za(L);
                    if (h.length >= L) {
                        var c = a[15]
                          , l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L)
                                throw Error(b[134]);
                            for (var d = a[15]; d < L; d++)
                                l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++)
                        c[l] = h[l % h.length];
                    return c
                }
                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++)
                            c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15])
                        h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++)
                            l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }
                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]], g = b[74], e = [];
                    if (l == a[541])
                        l = h[c],
                        d = a[15],
                        e.push(f[l >>> a[16] & a[153]]),
                        e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                        e.push(g),
                        e.push(g);
                    else if (l == a[16])
                        l = h[c],
                        d = h[c + a[541]],
                        h = a[15],
                        e.push(f[l >>> a[16] & a[153]]),
                        e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                        e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                        e.push(g);
                    else if (l == a[19])
                        l = h[c],
                        d = h[c + a[541]],
                        h = h[c + a[16]],
                        e.push(f[l >>> a[16] & a[153]]),
                        e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                        e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                        e.push(f[h & a[153]]);
                    else
                        throw Error(b[111]);
                    return e.join(b[0])
                }
                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++)
                        c[l] = a[15];
                    return c
                }
                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l)
                            throw Error(b[131]);
                        if (h.length < f)
                            throw Error(b[134]);
                        for (var e = a[15]; e < f; e++)
                            l[d + e] = h[c + e]
                    }
                }
                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }
                function ma(h) {
                    if (null == h || void 0 == h)
                        return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l)
                                c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else
                                throw Error(b[146]);
                        else
                            c.push(h.charCodeAt(d));
                    return c
                }
                function Na(b) {
                    if (null == b || b.length == a[15])
                        return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23]
                          , g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }
                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }
                function na(b, c) {
                    if (null == b || null == c || b.length != c.length)
                        return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++)
                        d[f] = Y(b[f], c[f]);
                    return d
                }
                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }
                function Oa(a, b) {
                    return x(a + b)
                }
                function x(c) {
                    if (c < a[290])
                        return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282])
                        return c;
                    if (c > a[282])
                        return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }
                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++)
                            try {
                                var g = h[e];
                                l()(g) && f.push(g)
                            } catch (k) {}
                        return f.join(b[56])
                    }
                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a,
                            g.appendChild(k),
                            c.height = k.offsetHeight,
                            c.width = k.offsetWidth,
                            g[b[307]](k),
                            c
                        }
                        var d = [c[21], c[141], B[6]]
                          , l = []
                          , f = c[139]
                          , e = b[327]
                          , g = C[b[258]]
                          , k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++)
                            l[f] = h(d[f]);
                        return function(c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f])
                                  , g = l[f];
                                if (e.height !== g.height || e.width !== g.width)
                                    return !0
                            }
                            return !1
                        }
                    }
                    function f() {
                        var a = null
                          , h = null
                          , d = [];
                        try {
                            h = C[b[167]](c[79]),
                            a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a)
                            return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }
                    function e(h, d) {
                        try {
                            var f = c[76]
                              , l = b[240]
                              , g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]]()
                              , X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l),
                            h[b[341]](la),
                            h[b[177]](t, X),
                            h[b[177]](t, la),
                            h[c[45]](t),
                            h[b[309]](t),
                            t.n = h[c[92]](t, b[205]),
                            t.m = h[c[62]](t, c[29]),
                            h[c[74]](t.o),
                            h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]),
                            h[J[0]](t.m, a[541], a[541]),
                            h[b[139]](h[b[259]], a[15], g.l),
                            M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }
                    function g() {
                        var h = C[b[167]](b[155])
                          , d = []
                          , f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]])
                            return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++)
                            try {
                                C[b[258]].appendChild(h),
                                h.style.color = f[l],
                                d.push(f[l]),
                                d.push(window[c[154]](h).getPropertyValue(c[36])),
                                C[b[258]][b[307]](h)
                            } catch (e) {
                                d.push(b[349])
                            }
                        return d.join(b[54])
                    }
                    function k() {
                        try {
                            var h = C[b[167]](c[79])
                              , d = h[B[7]](b[354])
                              , f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }
                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }
                    function r() {
                        if (!y[b[4]])
                            return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]]
                          , d = []
                          , f = {};
                        d.push(p(y[b[4]], function(h) {
                            f[h.name] = a[541];
                            var d = p(h, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function(a) {
                            if (f[a])
                                return b[0];
                            a = y[b[4]][a];
                            if (!a)
                                return b[0];
                            var h = p(a, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }
                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function(a) {
                            try {
                                return new window[b[355]](a),
                                a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }
                    function p(a, b, h) {
                        var c = [];
                        if (null == a)
                            return c;
                        if (I && a.map === I)
                            return a.map(b, h);
                        E(a, function(a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }
                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z)
                                b.forEach(h, void 0);
                            else if (b.length === +b.length)
                                for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++)
                                    ;
                            else
                                for (c in b)
                                    if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {})
                                        break
                    }
                    var z = Array.prototype.forEach
                      , I = Array.prototype.map
                      , n = {
                        e: M,
                        j: !0,
                        i: !0,
                        h: !0,
                        b: !0,
                        a: !0
                    };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b),
                    null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function() {
                        var h = []
                          , l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i)
                                try {
                                    var u = C[b[167]](c[79]);
                                    e = !(!u[B[7]] || !u[B[7]](b[354]))
                                } catch (r) {
                                    e = !1
                                }
                            if (e)
                                try {
                                    h.push(k()),
                                    n.b && h.push(f())
                                } catch (E) {
                                    h.push(b[59])
                                }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]],
                            typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))),
                        u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))),
                        u.push(M(l.join(c[152]))));
                        return u
                    }
                }
                function M(h) {
                    var c = a[88], d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f; )
                        k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74],
                        ++m,
                        k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                        k = k << a[56] | k >>> a[60],
                        k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                        e ^= k,
                        e = e << a[50] | e >>> a[64],
                        e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405],
                        e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                    case a[19]:
                        k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                    case a[16]:
                        k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                    case a[541]:
                        k ^= h.charCodeAt(m) & a[299],
                        k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                        k = k << a[56] | k >>> a[60],
                        k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                        e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++)
                            try {
                                var q = parseInt(B.charAt(z) + b[0])
                                  , p = q || q === a[15] ? p + q : p + a[541];
                                E++
                            } catch (n) {
                                p += a[541],
                                E++
                            }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++)
                            try {
                                var v = parseInt(G.charAt(F) + b[0]);
                                v || v === a[15] ? v < C ? (D++,
                                w += v) : (u++,
                                H += v) : (u++,
                                H += C)
                            } catch (A) {
                                u++,
                                H += C
                            }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [],
                        d.push(h),
                        d.push(U(N, b[35]).join(b[0])),
                        d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }
                function ba(h, c) {
                    if (h < a[15] || h >= a[43])
                        throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++)
                        e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }
                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c)
                        throw Error(b[87]);
                    if (a.length == c)
                        return a;
                    for (var e = [], f = a.length; f < c; f++)
                        e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }
                function U(b, c) {
                    if (b <= a[15])
                        return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++)
                        d.push(c);
                    return d
                }
                function r(a) {
                    return null == a || void 0 == a
                }
                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }
                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c))
                        return !1;
                    try {
                        if (r(window[a.f]))
                            return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }
                function v(c, d) {
                    if (r(c))
                        return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d)
                            return f
                    }
                }
                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else
                                                        e = v(q, c[172])
                                                } else
                                                    e = v(q, b[342])
                                            } else
                                                e = v(q, c[30])
                                        } else
                                            e = v(q, c[16])
                                    } else
                                        e = v(q, B[2])
                                } else
                                    e = v(q, b[320])
                            } else
                                e = v(q, c[58])
                        } else
                            e = v(q, c[89])
                    } else
                        e = h;
                    return e
                }
                function Sa() {
                    var a = da();
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }
                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta
                          , f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }
                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h)
                                return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }
                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]]
                      , e = b[0];
                    if (null == h || void 0 == h)
                        return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262], k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }
                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date,
                    a = new Date(f),
                    f = a[b[215]](),
                    g.push(c[91]),
                    g.push(b[172]),
                    g.push(b[305]),
                    g.push(b[325]),
                    g.push(b[319]),
                    g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]),
                    g.push(b[152]),
                    g.push(b[234]),
                    g.push(b[260]),
                    g.push(A));
                    C[b[207]] = g.join(b[0])
                }
                function Da(a) {
                    window[pa] = a
                }
                function Ea(a) {
                    window[qa] = a
                }
                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++)
                        e.push(c);
                    return e.join(b[0])
                }
                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }
                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[qa];
                    return a
                }
                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0])
                        return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }
                function ga(c) {
                    if (null == c || void 0 == c || c == b[0])
                        return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }
                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[pa];
                    return a
                }
                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0])
                        return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }
                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }
                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d),
                            Ha(V, d))
                        }
                }
                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0
                      , t = {
                        v: b[227]
                    }
                      , l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa
                      , r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]),
                        t[b[159]] = b[42],
                        h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]),
                        t[b[159]] = b[42],
                        h = !1
                    }
                    try {
                        var v = l = Ca(t)
                          , t = Za;
                        if (null == t || void 0 == t)
                            throw Error(b[120]);
                        if (null == v || void 0 == v)
                            v = b[0];
                        var q = v, y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y)
                          , p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301]
                              , z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p), p = na(p, g(y)), E = p = g(p), I;
                        if (null == A || void 0 == A || A.length == a[15])
                            I = za(F);
                        else {
                            var n = A.length
                              , J = a[15]
                              , J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha
                              , z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++)
                                z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15])
                            throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++)
                                I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N)
                                M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++)
                                    w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w)
                                Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++)
                                    D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p), ia;
                            w = xa;
                            D = E;
                            if (null == w)
                                ia = null;
                            else if (null == D)
                                ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++)
                                    H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E)
                              , ja = f(xa)
                              , ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G)
                            ka = null;
                        else if (G.length == a[15])
                            ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length; )
                                    if (R + ya <= G.length)
                                        u.push(k(G, R, ya)),
                                        R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }),
                        h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function() {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67],b[13]), new m(b[330],b[14]), new m(c[6],b[11]), new m(c[65],b[12]), new m(c[140],b[10]), new m(b[257],b[9]), new m(b[2],b[19]), new m(b[235],b[22]), new m(c[119],b[6]), new m(c[89],c[164]), new m(c[58],c[162]), new m(b[320],c[163]), new m(B[2],c[159]), new m(c[16],c[161]), new m(c[30],c[156]), new m(b[342],c[158]), new m(c[172],c[165]), new m(b[171],c[168]), new m(b[253],c[128],!1), new m(b[294],c[129],!1), new m(b[168],c[126],!1), new m(b[311],c[127],!1), new m(b[265],c[144],!1)]
                  , Qa = da() ? !1 : !0
                  , Wa = window && window[c[65]] && window[c[65]].host || b[353]
                  , C = window[b[330]]
                  , y = window[c[6]]
                  , N = a[16]
                  , T = a[16]
                  , aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]]
                  , La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]]
                  , Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]]
                  , F = a[158]
                  , L = a[158]
                  , ha = a[23]
                  , va = a[23]
                  , d = function(b, c) {
                    if (null == b)
                        return null;
                    for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++)
                        e.push(Y(b[g], d++));
                    return e
                }
                  , Za = b[345]
                  , S = b[299]
                  , V = c[100]
                  , fa = a[91]
                  , ea = b[275]
                  , Ta = ea.length
                  , sa = a[444]
                  , ta = a[396]
                  , Ya = !1
                  , Xa = !1
                  , O = window && window[c[65]] && window[c[65]][b[310]] || c[95]
                  , A = c[56]
                  , A = function(d, e) {
                    if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15])
                        return null;
                    e = e.split(b[56]);
                    for (var f = a[15]; f < e.length; f++) {
                        var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                        if (null != d.match(g) || null != (b[38] + d).match(g))
                            return e[f]
                    }
                    return null
                }(O, A)
                  , pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase()
                  , qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase()
                  , K = function(c) {
                    var d = [];
                    if (!c)
                        return d;
                    c = c.split(b[38]);
                    for (var e = b[0], f = a[15]; f < c.length; f++)
                        f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e,
                        d.push(e));
                    return d
                }(O);
                K.push(null);
                K.push(b[38] + O);
                (function(d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                }
                )(S) > a[541] && Ia();
                (function() {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0])
                        a = !1;
                    else {
                        var c;
                        if (c = Ua())
                            a = ga(a),
                            c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                }
                )() ? (Da(Q()),
                Ea(ra()),
                O = Va(),
                window[b[124]] && window[b[124]](ua, O)) : ua()
            }
            )()
        }
        )()
    }
    )()
}
)();
(function() {}
)();
(function() {
    var byD5I;
    var ut7m = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cBW9N = 0;
    var byX5c = 0;
    var bzb5g = 1;
    var bzf5k = 0;
    var bnT2x = "";
    var bzj5o = "";
    var bzn5s = "";
    var bbg7Z = "";
    var bbd7W = "";
    var bnU2x = "";
    var bzC5H = 0;
    var bzF5K = "";
    var Kx2x = "";
    var GI1x = 0;
    var bnW2x = ntes_get_domain();
    var bnX2x = null;
    var cFF0x = "//analytics.163.com";
    var cBP9G = function() {};
    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }
    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }
    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bnW2x
    }
    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bnW2x
    }
    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bnW2x
    }
    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }
    function ntes_get_flashver() {
        var f = ""
          , n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var cBO9F = 0;
    var OD3x = 8;
    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * OD3x))
    }
    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }
    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }
    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }
    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }
    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }
    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }
    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }
    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }
    function str2binl(d) {
        var c = new Array;
        var a = (1 << OD3x) - 1;
        for (var b = 0; b < d.length * OD3x; b += OD3x) {
            c[b >> 5] |= (d.charCodeAt(b / OD3x) & a) << b % 32
        }
        return c
    }
    function binl2hex(c) {
        var b = cBO9F ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }
    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }
    function ntes_get_navigation_info() {
        bbg7Z = "-";
        bnU2x = "-";
        bbd7W = "-";
        var c = window.self
          , b = window.screen
          , a = window.navigator;
        if (c.screen) {
            bbg7Z = b.width + "x" + b.height;
            bnU2x = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                bbg7Z = f.width + "x" + f.height
            }
        }
        if (a.language) {
            bbd7W = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                bbd7W = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bzC5H = g.getTime() / 1e3
    }
    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }
    function cFG0x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || cBP9G;
        a = window[e] = new Image;
        a.onload = function() {
            window[e] = null;
            d()
        }
        ;
        a.onerror = function() {
            window[e] = null;
            d()
        }
        ;
        a.src = b;
        a = null
    }
    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || byD5I;
        bnT2x = escape(a || document.location);
        bzj5o = escape(m || document.title);
        bzn5s = l === true ? "" : escape(l || document.referrer);
        bzF5K = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bnX2x == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bnX2x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bnT2x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bnX2x) {
                ut7m = fetch_visitor_hash();
                byX5c = 1;
                ntes_set_cookie_long("_ntes_nnid", ut7m + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", ut7m)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            ut7m = h.substr(0, o);
            GI1x = h.substr(o + 1, p - o - 1);
            if (GI1x == 0) {
                GI1x = (new Date).getTime();
                f = true
            }
            if (!ut7m) {
                ut7m = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", ut7m + "," + GI1x);
                ntes_set_cookie_long("_ntes_nuid", ut7m)
            }
            if (GI1x != 0 && b - GI1x > 365 * 86400 * 1e3) {
                GI1x = 0;
                ntes_set_cookie_long("_ntes_nnid", ut7m + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", ut7m)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q)
              , r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        Kx2x = c("P_INFO", "P_OINFO");
        Kx2x = Kx2x ? Kx2x.substr(0, Kx2x.indexOf("|")) : "";
        bzf5k = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", ut7m, "&_nvtm=", cBW9N, "&_nvsf=", bzb5g, "&_nvfi=", byX5c, "&_nlag=", bbd7W, "&_nlmf=", bzC5H, "&_nres=", bbg7Z, "&_nscd=", bnU2x, "&_nstm=", bzf5k, "&_nurl=", bnT2x, "&_ntit=", bzj5o, "&_nref=", bzn5s, "&_nfla=", bzF5K, "&_nssn=", Kx2x, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bzb5g = 0;
        neteaseTracker.callback = null
    }
    byD5I = "iad";
    neteaseTracker()
}
)();
(function() {}
)();
var CryptoJS = CryptoJS || function(u, p) {
    var d = {}
      , l = d.lib = {}
      , s = function() {}
      , t = l.Base = {
        extend: function(a) {
            s.prototype = this;
            var c = new s;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function() {
                c.$super.init.apply(this, arguments)
            }
            );
            c.init.prototype = c;
            c.$super = this;
            return c
        },
        create: function() {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        },
        init: function() {},
        mixIn: function(a) {
            for (var c in a)
                a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
      , r = l.WordArray = t.extend({
        init: function(a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c : 4 * a.length
        },
        toString: function(a) {
            return (a || v).stringify(this)
        },
        concat: function(a) {
            var c = this.words
              , e = a.words
              , j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4)
                for (var k = 0; k < a; k++)
                    c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
            else if (65535 < e.length)
                for (k = 0; k < a; k += 4)
                    c[j + k >>> 2] = e[k >>> 2];
            else
                c.push.apply(c, e);
            this.sigBytes += a;
            return this
        },
        clamp: function() {
            var a = this.words
              , c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a
        },
        random: function(a) {
            for (var c = [], e = 0; e < a; e += 4)
                c.push(4294967296 * u.random() | 0);
            return new r.init(c,a)
        }
    })
      , w = d.enc = {}
      , v = w.Hex = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16))
            }
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length, e = [], j = 0; j < c; j += 2)
                e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new r.init(e,c / 2)
        }
    }
      , b = w.Latin1 = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++)
                e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length, e = [], j = 0; j < c; j++)
                e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            return new r.init(e,c)
        }
    }
      , x = w.Utf8 = {
        stringify: function(a) {
            try {
                return decodeURIComponent(escape(b.stringify(a)))
            } catch (c) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(a) {
            return b.parse(unescape(encodeURIComponent(a)))
        }
    }
      , q = l.BufferedBlockAlgorithm = t.extend({
        reset: function() {
            this.j0x = new r.init;
            this.bAp5u = 0
        },
        baH7A: function(a) {
            "string" == typeof a && (a = x.parse(a));
            this.j0x.concat(a);
            this.bAp5u += a.sigBytes
        },
        BI9z: function(a) {
            var c = this.j0x
              , e = c.words
              , j = c.sigBytes
              , k = this.blockSize
              , b = j / (4 * k)
              , b = a ? u.ceil(b) : u.max((b | 0) - this.bAn5s, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k)
                    this.bAr5w(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q,j)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.j0x = this.j0x.clone();
            return a
        },
        bAn5s: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this.bog2x()
        },
        update: function(a) {
            this.baH7A(a);
            this.BI9z();
            return this
        },
        finalize: function(a) {
            a && this.baH7A(a);
            return this.baw7p()
        },
        blockSize: 16,
        bof2x: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        cBH9y: function(a) {
            return function(b, e) {
                return (new n.HMAC.init(a,e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function() {
    var u = CryptoJS
      , p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words
              , p = d.sigBytes
              , t = this.bz1x;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++)
                    d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4; )
                    d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length
              , s = this.bz1x
              , t = s.charAt(64);
            t && (t = d.indexOf(t),
            -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4)
                      , b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        bz1x: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}
)();
(function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)
        b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bog2x: function() {
            this.dR2x = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bAr5w: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a
                  , e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dR2x.words
              , c = q[n + 0]
              , e = q[n + 1]
              , j = q[n + 2]
              , k = q[n + 3]
              , z = q[n + 4]
              , r = q[n + 5]
              , t = q[n + 6]
              , w = q[n + 7]
              , v = q[n + 8]
              , A = q[n + 9]
              , B = q[n + 10]
              , C = q[n + 11]
              , u = q[n + 12]
              , D = q[n + 13]
              , E = q[n + 14]
              , x = q[n + 15]
              , f = a[0]
              , m = a[1]
              , g = a[2]
              , h = a[3]
              , f = p(f, m, g, h, c, 7, b[0])
              , h = p(h, f, m, g, e, 12, b[1])
              , g = p(g, h, f, m, j, 17, b[2])
              , m = p(m, g, h, f, k, 22, b[3])
              , f = p(f, m, g, h, z, 7, b[4])
              , h = p(h, f, m, g, r, 12, b[5])
              , g = p(g, h, f, m, t, 17, b[6])
              , m = p(m, g, h, f, w, 22, b[7])
              , f = p(f, m, g, h, v, 7, b[8])
              , h = p(h, f, m, g, A, 12, b[9])
              , g = p(g, h, f, m, B, 17, b[10])
              , m = p(m, g, h, f, C, 22, b[11])
              , f = p(f, m, g, h, u, 7, b[12])
              , h = p(h, f, m, g, D, 12, b[13])
              , g = p(g, h, f, m, E, 17, b[14])
              , m = p(m, g, h, f, x, 22, b[15])
              , f = d(f, m, g, h, e, 5, b[16])
              , h = d(h, f, m, g, t, 9, b[17])
              , g = d(g, h, f, m, C, 14, b[18])
              , m = d(m, g, h, f, c, 20, b[19])
              , f = d(f, m, g, h, r, 5, b[20])
              , h = d(h, f, m, g, B, 9, b[21])
              , g = d(g, h, f, m, x, 14, b[22])
              , m = d(m, g, h, f, z, 20, b[23])
              , f = d(f, m, g, h, A, 5, b[24])
              , h = d(h, f, m, g, E, 9, b[25])
              , g = d(g, h, f, m, k, 14, b[26])
              , m = d(m, g, h, f, v, 20, b[27])
              , f = d(f, m, g, h, D, 5, b[28])
              , h = d(h, f, m, g, j, 9, b[29])
              , g = d(g, h, f, m, w, 14, b[30])
              , m = d(m, g, h, f, u, 20, b[31])
              , f = l(f, m, g, h, r, 4, b[32])
              , h = l(h, f, m, g, v, 11, b[33])
              , g = l(g, h, f, m, C, 16, b[34])
              , m = l(m, g, h, f, E, 23, b[35])
              , f = l(f, m, g, h, e, 4, b[36])
              , h = l(h, f, m, g, z, 11, b[37])
              , g = l(g, h, f, m, w, 16, b[38])
              , m = l(m, g, h, f, B, 23, b[39])
              , f = l(f, m, g, h, D, 4, b[40])
              , h = l(h, f, m, g, c, 11, b[41])
              , g = l(g, h, f, m, k, 16, b[42])
              , m = l(m, g, h, f, t, 23, b[43])
              , f = l(f, m, g, h, A, 4, b[44])
              , h = l(h, f, m, g, u, 11, b[45])
              , g = l(g, h, f, m, x, 16, b[46])
              , m = l(m, g, h, f, j, 23, b[47])
              , f = s(f, m, g, h, c, 6, b[48])
              , h = s(h, f, m, g, w, 10, b[49])
              , g = s(g, h, f, m, E, 15, b[50])
              , m = s(m, g, h, f, r, 21, b[51])
              , f = s(f, m, g, h, u, 6, b[52])
              , h = s(h, f, m, g, k, 10, b[53])
              , g = s(g, h, f, m, B, 15, b[54])
              , m = s(m, g, h, f, e, 21, b[55])
              , f = s(f, m, g, h, v, 6, b[56])
              , h = s(h, f, m, g, x, 10, b[57])
              , g = s(g, h, f, m, t, 15, b[58])
              , m = s(m, g, h, f, D, 21, b[59])
              , f = s(f, m, g, h, z, 6, b[60])
              , h = s(h, f, m, g, C, 10, b[61])
              , g = s(g, h, f, m, j, 15, b[62])
              , m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        baw7p: function() {
            var b = this.j0x
              , n = b.words
              , a = 8 * this.bAp5u
              , c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.BI9z();
            b = this.dR2x;
            n = b.words;
            for (a = 0; 4 > a; a++)
                c = n[a],
                n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.dR2x = this.dR2x.clone();
            return b
        }
    });
    t.MD5 = v.bof2x(r);
    t.HmacMD5 = v.cBH9y(r)
}
)(Math);
(function() {
    var u = CryptoJS
      , p = u.lib
      , d = p.Base
      , l = p.WordArray
      , p = u.algo
      , s = p.EvpKDF = d.extend({
        cfg: d.extend({
            keySize: 4,
            hasher: p.MD5,
            iterations: 1
        }),
        init: function(d) {
            this.cfg = this.cfg.extend(d)
        },
        compute: function(d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q; ) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++)
                    n = s.finalize(n),
                    s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d, l)
    }
}
)();
CryptoJS.lib.Cipher || function(u) {
    var p = CryptoJS
      , d = p.lib
      , l = d.Base
      , s = d.WordArray
      , t = d.BufferedBlockAlgorithm
      , r = p.enc.Base64
      , w = p.algo.EvpKDF
      , v = d.Cipher = t.extend({
        cfg: l.extend(),
        createEncryptor: function(e, a) {
            return this.create(this.boh2x, e, a)
        },
        createDecryptor: function(e, a) {
            return this.create(this.cBy9p, e, a)
        },
        init: function(e, a, b) {
            this.cfg = this.cfg.extend(b);
            this.bAO5T = e;
            this.K0x = a;
            this.reset()
        },
        reset: function() {
            t.reset.call(this);
            this.bog2x()
        },
        process: function(e) {
            this.baH7A(e);
            return this.BI9z()
        },
        finalize: function(e) {
            e && this.baH7A(e);
            return this.baw7p()
        },
        keySize: 4,
        ivSize: 4,
        boh2x: 1,
        cBy9p: 2,
        bof2x: function(e) {
            return {
                encrypt: function(b, k, d) {
                    return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                },
                decrypt: function(b, k, d) {
                    return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                }
            }
        }
    });
    d.StreamCipher = v.extend({
        baw7p: function() {
            return this.BI9z(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {}
      , x = function(e, a, b) {
        var c = this.bAV5a;
        c ? this.bAV5a = u : c = this.bAW5b;
        for (var d = 0; d < b; d++)
            e[a + d] ^= c[d]
    }
      , q = (d.BlockCipherMode = l.extend({
        createEncryptor: function(e, a) {
            return this.Encryptor.create(e, a)
        },
        createDecryptor: function(e, a) {
            return this.Decryptor.create(e, a)
        },
        init: function(e, a) {
            this.bAX5c = e;
            this.bAV5a = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bAX5c
              , c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bAW5b = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bAX5c
              , c = b.blockSize
              , d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bAW5b = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4)
                l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg
              , b = a.iv
              , a = a.mode;
            if (this.bAO5T == this.boh2x)
                var c = a.createEncryptor;
            else
                c = a.createDecryptor,
                this.bAn5s = 1;
            this.fk2x = c.call(a, this, b && b.words)
        },
        bAr5w: function(a, b) {
            this.fk2x.processBlock(a, b)
        },
        baw7p: function() {
            var a = this.cfg.padding;
            if (this.bAO5T == this.boh2x) {
                a.pad(this.j0x, this.blockSize);
                var b = this.BI9z(!0)
            } else
                b = this.BI9z(!0),
                a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function(a) {
            this.mixIn(a)
        },
        toString: function(a) {
            return (a || this.formatter).stringify(this)
        }
    })
      , b = (p.format = {}).OpenSSL = {
        stringify: function(a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        },
        parse: function(a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({
                ciphertext: a,
                salt: c
            })
        }
    }
      , a = d.SerializableCipher = l.extend({
        cfg: l.extend({
            format: b
        }),
        encrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        },
        decrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            b = this.beP8H(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        },
        beP8H: function(a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    })
      , p = (p.kdf = {}).OpenSSL = {
        execute: function(a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({
                keySize: b + c
            }).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({
                key: a,
                iv: c,
                salt: d
            })
        }
    }
      , c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({
            kdf: p
        }),
        encrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        },
        decrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            c = this.beP8H(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
}();
(function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++)
        a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4
          , k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e]
          , F = a[z]
          , G = a[F]
          , y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]],
        j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
      , d = d.AES = p.extend({
        bog2x: function() {
            for (var a = this.K0x, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cBw9n = d + 6) + 1), e = this.cBv9m = [], j = 0; j < a; j++)
                if (j < d)
                    e[j] = c[j];
                else {
                    var k = e[j - 1];
                    j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24,
                    k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255],
                    k ^= H[j / d | 0] << 24);
                    e[j] = e[j - d] ^ k
                }
            c = this.cBu9l = [];
            for (d = 0; d < a; d++)
                j = a - d,
                k = d % 4 ? e[j] : e[j - 4],
                c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        },
        encryptBlock: function(a, b) {
            this.bAY5d(a, b, this.cBv9m, t, r, w, v, l)
        },
        decryptBlock: function(a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bAY5d(a, c, this.cBu9l, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        },
        bAY5d: function(a, b, c, d, e, j, l, f) {
            for (var m = this.cBw9n, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)
                var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++]
                  , s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++]
                  , t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++]
                  , n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++]
                  , g = q
                  , h = s
                  , k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        },
        keySize: 8
    });
    u.AES = p.bof2x(d)
}
)();
function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a),
    this.d = biFromHex(b),
    this.m = biFromHex(c),
    this.chunkSize = 2 * biHighIndex(this.m),
    this.radix = 16,
    this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}
function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e; )
        c[e] = b.charCodeAt(e),
        e++;
    for (; 0 != c.length % a.chunkSize; )
        c[e++] = 0;
    for (f = c.length,
    g = "",
    e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt,
        h = 0,
        i = e; i < e + a.chunkSize; ++h)
            j.digits[h] = c[i++],
            j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e),
        l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix),
        g += l + " "
    }
    return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix),
        g = a.barrett.powMod(h, a.d),
        f = 0; f <= biHighIndex(g); ++f)
            d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)),
    d
}
function setMaxDigits(a) {
    maxDigits = a,
    ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++)
        ZERO_ARRAY[b] = 0;
    bigZero = new BigInt,
    bigOne = new BigInt,
    bigOne.digits[0] = 1
}
function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0),
    this.isNeg = !1
}
function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c); )
        ++c;
    if (c == a.length)
        d = new BigInt;
    else {
        for (e = a.length - c,
        f = e % dpl10,
        0 == f && (f = dpl10),
        d = biFromNumber(Number(a.substr(c, f))),
        c += f; c < a.length; )
            d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))),
            c += dpl10;
        d.isNeg = b
    }
    return d
}
function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0),
    b.isNeg = a.isNeg,
    b
}
function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a,
    a = Math.abs(a),
    c = 0; a > 0; )
        b.digits[c++] = a & maxDigitVal,
        a >>= biRadixBits;
    return b
}
function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c)
        b += a.charAt(c);
    return b
}
function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b,
    d = biDivideModulo(a, c),
    e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero); )
        d = biDivideModulo(d[0], c),
        digit = d[1].digits[0],
        e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}
function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10,
    c = biDivideModulo(a, b),
    d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero); )
        c = biDivideModulo(c[0], b),
        d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}
function digitToHex(a) {
    var b = 15
      , c = "";
    for (i = 0; 4 > i; ++i)
        c += hexToChar[a & b],
        a >>>= 4;
    return reverseStr(c)
}
function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a),
    d = biHighIndex(a); d > -1; --d)
        b += digitToHex(a.digits[d]);
    return b
}
function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d)
        b <<= 4,
        b |= charToHex(a.charCodeAt(d));
    return b
}
function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c,
    e = 0; d > 0; d -= 4,
    ++e)
        b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}
function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1,
    g = a.length - 1; g >= d; g--)
        h = a.charCodeAt(g),
        i = charToHex(h),
        j = biMultiplyDigit(f, i),
        e = biAdd(e, j),
        f = biMultiplyDigit(f, b);
    return e.isNeg = c,
    e
}
function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}
function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
        c = biSubtract(a, b),
        b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
        d = 0,
        f = 0; f < a.digits.length; ++f)
            e = a.digits[f] + b.digits[f] + d,
            c.digits[f] = 65535 & e,
            d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}
function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
        c = biAdd(a, b),
        b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
        e = 0,
        f = 0; f < a.digits.length; ++f)
            d = a.digits[f] - b.digits[f] + e,
            c.digits[f] = 65535 & d,
            c.digits[f] < 0 && (c.digits[f] += biRadix),
            e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0,
            f = 0; f < a.digits.length; ++f)
                d = 0 - c.digits[f] + e,
                c.digits[f] = 65535 & d,
                c.digits[f] < 0 && (c.digits[f] += biRadix),
                e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else
            c.isNeg = a.isNeg
    }
    return c
}
function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b]; )
        --b;
    return b
}
function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)
        c <<= 1;
    return e
}
function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0,
        i = k,
        j = 0; e >= j; ++j,
        ++i)
            h = c.digits[i] + a.digits[j] * b.digits[k] + d,
            c.digits[i] = h & maxDigitVal,
            d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg,
    c
}
function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt,
    c = biHighIndex(a),
    d = 0,
    f = 0; c >= f; ++f)
        e = result.digits[f] + a.digits[f] * b + d,
        result.digits[f] = e & maxDigitVal,
        d = e >>> biRadixBits;
    return result.digits[1 + c] = d,
    result
}
function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b,
    h = d; f > g; ++g,
    ++h)
        c[h] = a[g]
}
function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c),
    e = b % bitsPerDigit,
    f = bitsPerDigit - e,
    g = d.digits.length - 1,
    h = g - 1; g > 0; --g,
    --h)
        d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal,
    d.isNeg = a.isNeg,
    d
}
function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c),
    e = b % bitsPerDigit,
    f = bitsPerDigit - e,
    g = 0,
    h = g + 1; g < d.digits.length - 1; ++g,
    ++h)
        d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e,
    d.isNeg = a.isNeg,
    d
}
function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b),
    c
}
function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b),
    c
}
function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b),
    c
}
function biCompare(a, b) {
    if (a.isNeg != b.isNeg)
        return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c])
            return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}
function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c)
        return a.isNeg ? (f = biCopy(bigOne),
        f.isNeg = !b.isNeg,
        a.isNeg = !1,
        b.isNeg = !1,
        g = biSubtract(b, a),
        a.isNeg = !0,
        b.isNeg = e) : (f = new BigInt,
        g = biCopy(a)),
        new Array(f,g);
    for (f = new BigInt,
    g = a,
    h = Math.ceil(d / bitsPerDigit) - 1,
    i = 0; b.digits[h] < biHalfRadix; )
        b = biShiftLeft(b, 1),
        ++i,
        ++d,
        h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i),
    c += i,
    j = Math.ceil(c / bitsPerDigit) - 1,
    k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k); )
        ++f.digits[j - h],
        g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l],
        n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1],
        o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2],
        p = h >= b.digits.length ? 0 : b.digits[h],
        q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1],
        f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p),
        r = f.digits[l - h - 1] * (p * biRadix + q),
        s = m * biRadixSquared + (n * biRadix + o); r > s; )
            --f.digits[l - h - 1],
            r = f.digits[l - h - 1] * (p * biRadix | q),
            s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1),
        g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])),
        g.isNeg && (g = biAdd(g, k),
        --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i),
    f.isNeg = a.isNeg != e,
    a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne),
    b = biShiftRight(b, i),
    g = biSubtract(b, g)),
    0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
    new Array(f,g)
}
function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
    for (var c = bigOne, d = a; ; ) {
        if (0 != (1 & b) && (c = biMultiply(c, d)),
        b >>= 1,
        0 == b)
            break;
        d = biMultiply(d, d)
    }
    return c
}
function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ; ) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)),
        f = biShiftRight(f, 1),
        0 == f.digits[0] && 0 == biHighIndex(f))
            break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}
function BarrettMu(a) {
    this.modulus = biCopy(a),
    this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1,
    this.mu = biDivide(b, this.modulus),
    this.bkplus1 = new BigInt,
    this.bkplus1.digits[this.k + 1] = 1,
    this.modulo = BarrettMu_modulo,
    this.multiplyMod = BarrettMu_multiplyMod,
    this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1), e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus), g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)),
    i = biCompare(h, this.modulus) >= 0; i; )
        h = biSubtract(h, this.modulus),
        i = biCompare(h, this.modulus) >= 0;
    return h
}
function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1,
    d = a,
    e = b; ; ) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)),
        e = biShiftRight(e, 1),
        0 == e.digits[0] && 0 == biHighIndex(e))
            break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1, biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20),
dpl10 = 15,
lr10 = biFromNumber(1e15),
hexatrigesimalToChar = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"),
hexToChar = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),
highBitMasks = new Array(0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535),
lowBitMasks = new Array(0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535);
!function() {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)
            e = Math.random() * b.length,
            e = Math.floor(e),
            c += b.charAt(e);
        return c
    }
    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b)
          , d = CryptoJS.enc.Utf8.parse("0102030405060708")
          , e = CryptoJS.enc.Utf8.parse(a)
          , f = CryptoJS.AES.encrypt(e, c, {
            iv: d,
            mode: CryptoJS.mode.CBC
        });
        return f.toString()
    }
    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131),
        d = new RSAKeyPair(b,"",c),
        e = encryptedString(d, a)
    }
    function d(d, e, f, g) {
        var h = {}
          , i = a(16);
        return h.encText = b(d, g),
        h.encText = b(h.encText, i),
        h.encSecKey = c(i, e, f),
        h
    }
    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d),
        f
    }
    window.asrsea = d,
    window.ecnonasr = e
}();
(function() {
    var c0x = NEJ.P
      , em2x = c0x("nej.g")
      , v0x = c0x("nej.j")
      , k0x = c0x("nej.u")
      , Ow3x = c0x("nm.x.ek");
    Ow3x.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Ow3x.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
}
)();
(function() {
    var c0x = NEJ.P
      , em2x = c0x("nej.g")
      , v0x = c0x("nej.j")
      , k0x = c0x("nej.u")
      , Ow3x = c0x("nm.x.ek")
      , l0x = c0x("nm.x");
    if (v0x.bm1x.redefine)
        return;
    window.GEnc = true;
    var bor2x = function(cBs9j) {
        var m0x = [];
        k0x.bd1x(cBs9j, function(cBr9i) {
            m0x.push(Ow3x.emj[cBr9i])
        });
        return m0x.join("")
    };
    var cBq9h = v0x.bm1x;
    v0x.bm1x = function(Y1x, e0x) {
        var j0x = {}
          , e0x = NEJ.X({}, e0x)
          , lw4A = Y1x.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(Y1x) && !(e0x.headers && e0x.headers[em2x.yg8Y] == em2x.DH0x) && !e0x.noEnc) {
            if (lw4A != -1) {
                j0x = k0x.hq3x(Y1x.substring(lw4A + 1));
                Y1x = Y1x.substring(0, lw4A)
            }
            if (e0x.query) {
                j0x = NEJ.X(j0x, k0x.fC2x(e0x.query) ? k0x.hq3x(e0x.query) : e0x.query)
            }
            if (e0x.data) {
                j0x = NEJ.X(j0x, k0x.fC2x(e0x.data) ? k0x.hq3x(e0x.data) : e0x.data)
            }
            j0x["csrf_token"] = v0x.gx3x("__csrf");
            Y1x = Y1x.replace("api", "weapi");
            e0x.method = "post";
            delete e0x.query;
			window.console.info(j0x);
			//console.info(bor2x(["流泪", "强"]));
			//console.info(bor2x(Ow3x.md));
			//console.info(bor2x(["爱心", "女孩", "惊恐", "大笑"]));
            var bBB5G = window.asrsea(JSON.stringify(j0x), bor2x(["流泪", "强"]), bor2x(Ow3x.md), bor2x(["爱心", "女孩", "惊恐", "大笑"]));
            e0x.data = k0x.cD1x({
                params: bBB5G.encText,
                encSecKey: bBB5G.encSecKey
            })
        }
        cBq9h(Y1x, e0x)
    }
    ;
    v0x.bm1x.redefine = true
}
)();
(function() {
    window.setTimeout(function() {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi))
            return;
        var getNode = function(tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue)
                return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0, ii = nodes.length; i < ii; i++) {
                    if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
                        return nodes[i]
                    }
                }
            }
            return null
        };
        var meta = getNode("meta", "name", "robots");
        if (meta && (meta.content || "").toLowerCase() == "nofollow")
            return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href)
            canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        }
        if (!canonicalURL)
            canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL));
        (new Image).src = pushHref + "?" + params.join("&")
    }, 3e3)
}
)();
(function() {}
)();
(function() {}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , dy2x = c0x("nej.p")
      , k0x = c0x("nej.u")
      , h0x = c0x("nej.v")
      , v0x = c0x("nej.j")
      , dE2x = c0x("nm.u")
      , l0x = c0x("nm.x")
      , q0x = c0x("nm.d")
      , n0x = c0x("nm.l")
      , cy1x = c0x("nm.pc")
      , boF2x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png"
      , j0x = {
        "大笑": "86",
        "可爱": "85",
        "憨笑": "359",
        "色": "95",
        "亲亲": "363",
        "惊恐": "96",
        "流泪": "356",
        "亲": "362",
        "呆": "352",
        "哀伤": "342",
        "呲牙": "343",
        "吐舌": "348",
        "撇嘴": "353",
        "怒": "361",
        "奸笑": "341",
        "汗": "97",
        "痛苦": "346",
        "惶恐": "354",
        "生病": "350",
        "口罩": "351",
        "大哭": "357",
        "晕": "355",
        "发怒": "115",
        "开心": "360",
        "鬼脸": "94",
        "皱眉": "87",
        "流感": "358",
        "爱心": "33",
        "心碎": "34",
        "钟情": "303",
        "星星": "309",
        "生气": "314",
        "便便": "89",
        "强": "13",
        "弱": "372",
        "拜": "14",
        "牵手": "379",
        "跳舞": "380",
        "禁止": "374",
        "这边": "262",
        "爱意": "106",
        "示爱": "376",
        "嘴唇": "367",
        "狗": "81",
        "猫": "78",
        "猪": "100",
        "兔子": "459",
        "小鸡": "450",
        "公鸡": "461",
        "幽灵": "116",
        "圣诞": "411",
        "外星": "101",
        "钻石": "52",
        "礼物": "107",
        "男孩": "0",
        "女孩": "1",
        "蛋糕": "337",
        18: "186",
        "圈": "312",
        "叉": "313"
    }
      , cBm9d = function() {
        if (h0x && h0x.z0x) {
            h0x.dispatchEventalias = h0x.z0x
        }
    };
    cBm9d();
    l0x.boH2x = function(bP1x) {
        if (!bP1x || bP1x.copyrightId === undefined || !!bP1x.program)
            return false;
        if (window.GAbroad) {
            bP1x.fee = 0;
            return true
        }
        if (bP1x.status < 0)
            return true;
        var Om3x;
        if (typeof GCopyrights !== "undefined")
            Om3x = GCopyrights;
        try {
            if (!Om3x && !!top.GCopyrights)
                Om3x = top.GCopyrights
        } catch (e) {}
        if (Om3x) {
            var r0x = k0x.di2x(Om3x, bP1x.copyrightId);
            if (r0x >= 0)
                return true
        }
        return false
    }
    ;
    l0x.boQ2x = function() {
        var Ce9V = /^\/m\/(song|album|artist|playlist|dj|search)\?/
          , wx8p = {
            2: "artist",
            13: "playlist",
            17: "dj",
            19: "album",
            18: "song",
            31: "toplist",
            32: "searchsong",
            33: "searchlyric",
            34: "event",
            70: "djradio",
            24: "day",
            50: "record"
        }
          , cBh9Y = {
            song: "单曲",
            album: "专辑",
            artist: "歌手",
            playlist: "歌单",
            dj: "电台节目",
            searchsong: "单曲搜索",
            searchlyric: "歌词搜索",
            toplist: "榜单",
            event: "动态",
            djradio: "电台",
            day: "每日歌曲推荐",
            record: "听歌排行榜"
        };
        var cBg9X = function(K0x, j0x, Og3x) {
            switch (K0x) {
            case "event":
                j0x = j0x.split("|");
                return "/event?id=" + j0x[0] + "&uid=" + j0x[1];
            case "searchsong":
            case "searchlyric":
                var u0x = K0x == "searchsong" ? 1 : 1006;
                return "/search/m/?s=" + encodeURIComponent(j0x) + "&type=" + u0x;
            case "toplist":
                return "/discover/toplist?id=" + j0x + "&_hash=songlist-" + Og3x;
            case "day":
                return "/discover/recommend/taste" + "?_hash=songlist-" + Og3x;
                ;
            case "record":
                j0x = j0x.split("|");
                return "/user/songs/rank?id=" + j0x[0] + "&cat=" + j0x[1];
                break;
            default:
                return "/" + K0x + "?id=" + j0x + "&_hash=songlist-" + Og3x
            }
        };
        return function(ee2x, Og3x) {
            if (!ee2x)
                return null;
            var Lm2x = ee2x.fid || (ee2x.type != 18 ? ee2x.type : null)
              , boT2x = ee2x.fdata || ee2x.rid
              , bCm5r = ee2x.page || ee2x.fhref;
            var K0x = wx8p[Lm2x];
            if (!K0x) {
                var zz9q = (bCm5r || "").match(Ce9V);
                if (zz9q)
                    K0x = zz9q[1]
            }
            if (!K0x)
                return null;
            return {
                title: cBh9Y[K0x],
                link: !wx8p[Lm2x] ? bCm5r : cBg9X(K0x, boT2x, Og3x),
                fid: Lm2x,
                fdata: boT2x
            }
        }
    }();
    l0x.Zp6j = function(kx4B) {
        var dp2x = kx4B;
        if (typeof GUser !== "undefined" && GUser.userId > 0)
            dp2x = GUser;
        return dp2x
    }
    ;
    l0x.gT3x = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    }
    ;
    l0x.Kl2x = function() {
        var Ce9V = /#(.*?)$/;
        return function(gy3x) {
            var jL4P = gy3x === false ? location : top.location;
            return Ce9V.test(jL4P.href) ? RegExp.$1 : ""
        }
    }();
    l0x.Ct9k = function() {
        var Cu9l = a9j.dj2x("audio")
          , cBd9U = Cu9l.canPlayType && Cu9l.canPlayType("audio/mpeg");
        if (cBd9U)
            return 2;
        var cBb9S = l0x.bpk2x().supported;
        if (cBb9S)
            return 1;
        return 0
    }
    ;
    l0x.bpk2x = function() {
        var gq3x, bpo2x = !1, bpr2x = "";
        if (dy2x.dr2x.browser == "ie") {
            try {
                gq3x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gq3x = null
            }
            if (gq3x) {
                bpo2x = !0;
                bpr2x = gq3x.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gq3x = navigator.plugins["Shockwave Flash"];
                if (gq3x) {
                    bpo2x = !0;
                    bpr2x = gq3x.description
                }
            }
        }
        return {
            supported: bpo2x,
            version: bpr2x
        }
    }
    ;
    l0x.sI7B = function() {
        return "网易云音乐"
    }
    ;
    l0x.cBa9R = function() {
        return j0x
    }
    ;
    l0x.bDg6a = function(cK1x) {
        var C0x = j0x[cK1x];
        return C0x == null ? "" : boF2x.replace("{ID}", C0x)
    }
    ;
    l0x.wO8G = function(bo1x, ec2x, CG0x) {
        if (!bo1x)
            return "";
        if (!!CG0x) {
            bo1x = l0x.cAZ9Q(bo1x)
        }
        return l0x.YE6y(l0x.cAY9P(bo1x, ec2x))
    }
    ;
    l0x.YC6w = function() {
        var Pe3x = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }
          , bpF2x = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }
          , cAX9O = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }
          , cAT9K = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cAQ9H = function(dJ2x, bpH2x) {
            dJ2x = Ke2x(dJ2x);
            if (!!bpH2x) {
                dJ2x = dJ2x.replace(Pe3x.MLINE, "\n\n").replace(Pe3x.LING, "</br>")
            }
            dJ2x = l0x.YE6y(dJ2x);
            return dJ2x
        };
        var Ke2x = function(bo1x) {
            return k0x.Dq0x(cAX9O, bo1x)
        };
        return function(dJ2x, e0x, dC2x) {
            e0x = e0x || {};
            dC2x = dC2x || {};
            dC2x.actHash = {};
            var cAK9B = !!e0x.parseLink
              , cAF9w = !!e0x.parseAct
              , cAE9v = e0x.linkTpl || bpF2x.LINK
              , cAD9u = e0x.atTpl || bpF2x.AT
              , cAC9t = e0x.atUrl || "/user/home?nickname="
              , cAB9s = e0x.actTpl || bpF2x.ACT
              , bpH2x = !!e0x.keepSpace
              , bpR2x = e0x.linkKlass || "s-fc7";
            cFP0x = e0x.actBiJson || "";
            if (!dJ2x)
                return "";
            dJ2x = dJ2x.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lH4L = cAT9K[cAK9B + 2 * cAF9w]
              , df2x = Pe3x[lH4L]
              , bs1x = null
              , jN4R = null
              , gt3x = 0
              , cFQ0x = ""
              , cFR0x = "";
            var qh6b = [];
            df2x.lastIndex = 0;
            while (bs1x = df2x.exec(dJ2x)) {
                var dQ2x = {
                    html: "",
                    before: bs1x.index - 1,
                    after: bs1x.index + bs1x[0].length
                };
                if (bs1x[1]) {
                    var jN4R = bs1x[2].replace(/[^\x00-\xff]/g, "**");
                    if (jN4R.length < 4 || jN4R.length > 32) {} else {
                        var GV1x = a9j.eB2x(cAD9u);
                        dQ2x.html = a9j.cd1x(GV1x, {
                            value: Ke2x(bs1x[2]),
                            url: encodeURI(cAC9t + bs1x[2]),
                            klass: bpR2x
                        });
                        qh6b.push(dQ2x)
                    }
                } else if (bs1x.length > 8 && bs1x[4]) {
                    var GV1x = a9j.eB2x(cAE9v);
                    dQ2x.html = a9j.cd1x(GV1x, {
                        value: Ke2x(bs1x[4]),
                        url: bs1x[4],
                        klass: bpR2x
                    });
                    qh6b.push(dQ2x)
                } else {
                    var bET6N = lH4L == "ACT_NOLINK" ? 4 : 9;
                    var GV1x = a9j.eB2x(cAB9s);
                    dQ2x.html = a9j.cd1x(GV1x, {
                        value: Ke2x(bs1x[bET6N]),
                        klass: bpR2x
                    });
                    qh6b.push(dQ2x);
                    dC2x.actHash[bs1x[bET6N].slice(1, -1)] = true
                }
            }
            var bpU2x = qh6b.length
              , kx4B = {
                before: dJ2x.length - 1,
                after: 0
            }
              , bqc2x = "";
            for (var i = 0; i <= bpU2x; i++) {
                var hA3x, fX3x;
                hA3x = (qh6b[i - 1] || kx4B).after;
                fX3x = (qh6b[i] || kx4B).before;
                if (fX3x >= hA3x && hA3x >= 0 && fX3x <= dJ2x.length - 1) {
                    bqc2x += cAQ9H(dJ2x.substring(hA3x, fX3x + 1), bpH2x)
                }
                if (qh6b[i]) {
                    bqc2x += qh6b[i].html
                }
            }
            return bqc2x
        }
    }();
    l0x.cAZ9Q = function() {
        var df2x = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?","g");
        return function(bo1x) {
            return (bo1x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(df2x, function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l0x.cAY9P = function() {
        var df2x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var ev2x = function(jN4R, ec2x) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(jN4R) + '" class="' + (ec2x || "") + '">@' + jN4R + "</a>"
        };
        return function(bo1x, ec2x) {
            return (bo1x || "").replace(df2x, function($0, $1) {
                return ev2x($1, ec2x)
            })
        }
    }();
    l0x.YE6y = function() {
        var df2x = /\[(.*?)\]/g;
        return function(bo1x) {
            return (bo1x || "").replace(df2x, function($1, $2) {
                var Y1x = l0x.bDg6a($2);
                return !Y1x ? $1 : '<img src="' + Y1x + '"/>'
            })
        }
    }();
    l0x.AE9v = function(F0x, ec2x) {
        a9j.bE1x(F0x, ec2x) ? a9j.x0x(F0x, ec2x) : a9j.y0x(F0x, ec2x)
    }
    ;
    l0x.JZ2x = function(cR1x, kR4V) {
        cR1x = a9j.B0x(cR1x);
        kR4V = a9j.B0x(kR4V);
        if (!cR1x || !kR4V)
            return !1;
        for (kR4V = kR4V.parentNode; !!kR4V && kR4V != cR1x; kR4V = kR4V.parentNode)
            ;
        return kR4V == cR1x
    }
    ;
    l0x.lj4n = function() {
        var bFe6Y = function(gX3x) {
            return (gX3x < 10 ? "0" : "") + gX3x
        };
        return function(kX4b) {
            kX4b = parseInt(kX4b) || 0;
            if (!kX4b)
                return "00:00";
            var ze9V = Math.floor(kX4b % 60)
              , cAr9i = Math.floor(kX4b / 60);
            return bFe6Y(cAr9i) + ":" + bFe6Y(ze9V)
        }
    }();
    l0x.zb8T = function(fR3x, wY8Q) {
        if (!fR3x || fR3x.length == 0)
            return "";
        wY8Q = wY8Q || "/";
        var bs1x = [];
        for (var i = fR3x.length - 1; i >= 0; i--) {
            bs1x.unshift(fR3x[i].name)
        }
        return bs1x.join(wY8Q)
    }
    ;
    l0x.rU6O = function() {
        var Ni3x = function(ij3x, ec2x, cR1x, WT5Y) {
            var ev2x = WT5Y ? l0x.bqt3x : k0x.dH2x;
            if (!ij3x || !ij3x.name)
                return "";
            if (!ij3x.id)
                return '<span class="' + ec2x + '">' + ev2x(ij3x.name) + "</span>";
            return "<a" + (cR1x ? ' target="_blank"' : "") + ' class="' + ec2x + '" href="/artist?id=' + ij3x.id + '" hidefocus="true">' + ev2x(ij3x.name) + "</a>"
        };
        return function(fR3x, W1x, wY8Q, cR1x, bFL6F, WT5Y) {
            if (!fR3x || !fR3x.length)
                return "";
            wY8Q = wY8Q || "/";
            W1x = W1x || "";
            JT2x = "";
            var ep2x = [];
            for (var i = 0, i0x = [], tB7u = [], fH2x; i < fR3x.length; ++i) {
                ep2x.push(fR3x[i].name);
                if (!fR3x[i] || fR3x[i].id <= 0) {
                    tB7u.push(fR3x[i]);
                    continue
                }
                if (k0x.gK3x(W1x)) {
                    fH2x = W1x(fR3x[i])
                } else {
                    fH2x = Ni3x(fR3x[i], W1x, cR1x, WT5Y)
                }
                if (fH2x && bFL6F && fR3x[i].tns && fR3x[i].tns.length > 0) {
                    JT2x = k0x.dH2x(fR3x[i].tns[0]);
                    fH2x += '<span class="s-fc8" title="' + JT2x + '"> - (' + JT2x + ")</span>"
                }
                !!fH2x && i0x.push(fH2x)
            }
            for (var i = 0, fH2x; i < tB7u.length; ++i) {
                if (k0x.gK3x(W1x)) {
                    fH2x = W1x(tB7u[i])
                } else {
                    fH2x = Ni3x(tB7u[i], W1x, cR1x, WT5Y)
                }
                if (fH2x && bFL6F && tB7u[i].tns && tB7u[i].tns.length > 0) {
                    JT2x = k0x.dH2x(tB7u[i].tns[0]);
                    fH2x += '<span class="s-fc8" title="' + JT2x + '"> - (' + JT2x + ")</span>"
                }
                !!fH2x && i0x.push(fH2x)
            }
            return '<span title="' + ep2x.join(wY8Q) + '">' + i0x.join(wY8Q) + "</span>"
        }
    }();
    l0x.yT8L = function(fz2x, qd6X) {
        qd6X = qd6X || "86";
        return !!fz2x && (qd6X == "86" ? /^\d{11}$/ : /^\d+$/).test(fz2x)
    }
    ;
    l0x.cFS0x = function(fz2x) {
        if (!l0x.yT8L(fz2x))
            return fz2x;
        return fz2x.substring(0, 3) + "****" + fz2x.substr(7)
    }
    ;
    l0x.kv4z = function() {
        var df2x = /^\s+$/g;
        return function(hX3x) {
            return !hX3x || df2x.test(hX3x)
        }
    }();
    l0x.Na3x = function() {
        var bqF3x = /[^\x00-\xfff]/g;
        return function(hX3x) {
            var cAp9g = hX3x.match(bqF3x) || []
              , dt2x = cAp9g.length;
            return hX3x.length + dt2x
        }
    }();
    l0x.AM9D = function() {
        var bqF3x = /[^\x00-\xfff]/;
        return function(hX3x, eG2x) {
            for (var i = 0, len = hX3x.length; i < len && eG2x > 0; i++) {
                if (bqF3x.test(hX3x.charAt(i))) {
                    eG2x -= 2;
                    if (eG2x < 0) {
                        break
                    }
                } else {
                    eG2x -= 1
                }
            }
            return hX3x.substring(0, i)
        }
    }();
    l0x.AN9E = function(hX3x, eG2x, TH4L) {
        eG2x = eG2x || 10;
        TH4L = TH4L || nej.p.dr2x.engine == "trident" && parseInt(nej.p.dr2x.release) < 5;
        if (TH4L && l0x.Na3x(hX3x) > eG2x) {
            return l0x.AM9D(hX3x, eG2x) + "..."
        } else {
            return hX3x
        }
    }
    ;
    l0x.bGA6u = function(g0x) {
        return g0x === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(g0x.type || g0x.href || ~g0x.tabIndex)
    }
    ;
    l0x.cAn9e = function(d0x, cR1x) {
        if (!d0x || !cR1x)
            return !0;
        var g0x, u0x = d0x.type.toLowerCase();
        if (u0x == "mouseout") {
            g0x = d0x.relatedTarget || d0x.toElement
        } else if (u0x == "mouseover") {
            g0x = d0x.relatedTarget || d0x.fromElement
        }
        return !g0x || g0x !== cR1x && !l0x.JZ2x(cR1x, g0x)
    }
    ;
    l0x.sO7H = function() {
        R0x = {};
        return function(g0x, ed2x) {
            var C0x = a9j.lP4T(g0x)
              , K0x = "hover-" + C0x;
            if (!ed2x || !C0x || !!R0x[K0x])
                return;
            R0x[K0x] = !0;
            h0x.s0x(C0x, "mouseover", function() {
                var bqN3x = a9j.H0x(g0x, "hshow") || [];
                var bqO3x = a9j.H0x(g0x, "icn-dislike") || [];
                a9j.y0x(C0x, "z-hover");
                a9j.ba1x(bqN3x[0], "display", "block");
                a9j.ba1x(bqO3x[0], "display", "block")
            });
            h0x.s0x(C0x, "mouseout", function() {
                var bqN3x = a9j.H0x(g0x, "hshow") || [];
                var bqO3x = a9j.H0x(g0x, "icn-dislike") || [];
                a9j.x0x(C0x, "z-hover");
                a9j.ba1x(bqN3x[0], "display", "none");
                a9j.ba1x(bqO3x[0], "display", "none")
            })
        }
    }();
    l0x.bGT7M = function() {
        var bz1x = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function(hX3x) {
            return k0x.Dq0x(bz1x, hX3x)
        }
    }();
    l0x.yF8x = function(bA1x) {
        if (k0x.Em0x(bA1x))
            bA1x = bA1x.getTime();
        var eS2x = new Date
          , kf4j = eS2x.getTime() - bA1x;
        if (kf4j <= 6e4)
            return "刚刚";
        var nm5r = eS2x.getHours() * 36e5 + eS2x.getMinutes() * 6e4 + eS2x.getSeconds() * 1e3;
        if (kf4j <= nm5r) {
            if (kf4j < 36e5) {
                var Ha1x = Math.floor(kf4j / 6e4);
                return Ha1x + "分钟前"
            }
            return k0x.ih3x(bA1x, "HH:mm")
        } else {
            if (kf4j < nm5r + 864e5) {
                return "昨天" + k0x.ih3x(bA1x, "HH:mm")
            } else {
                var gE3x = eS2x.getFullYear()
                  , Vv5A = new Date(gE3x,0,1);
                var nm5r = eS2x.getTime() - Vv5A.getTime();
                if (kf4j < nm5r) {
                    return k0x.ih3x(bA1x, "M月d日 HH:mm")
                }
                return k0x.ih3x(bA1x, "yyyy年M月d日")
            }
        }
    }
    ;
    l0x.cAm9d = function(bA1x) {
        if (k0x.Em0x(bA1x))
            bA1x = bA1x.getTime();
        var eS2x = new Date
          , kf4j = eS2x.getTime() - bA1x;
        var nm5r = eS2x.getHours() * 36e5 + eS2x.getMinutes() * 6e4 + eS2x.getSeconds() * 1e3;
        if (kf4j <= nm5r) {
            return "今天" + k0x.ih3x(bA1x, "HH:mm")
        } else {
            if (kf4j < nm5r + 864e5) {
                return "昨天" + k0x.ih3x(bA1x, "HH:mm")
            } else {
                return k0x.ih3x(bA1x, "yy-MM-dd HH:mm")
            }
        }
    }
    ;
    l0x.cAl9c = function(bA1x) {
        if (k0x.Em0x(bA1x))
            bA1x = bA1x.getTime();
        var eS2x = new Date
          , kf4j = eS2x.getTime() - bA1x;
        if (kf4j <= 6e4)
            return "刚刚";
        var nm5r = eS2x.getHours() * 36e5 + eS2x.getMinutes() * 6e4 + eS2x.getSeconds() * 1e3;
        if (kf4j <= nm5r) {
            if (kf4j < 36e5) {
                var Ha1x = Math.floor(kf4j / 6e4);
                return Ha1x + "分钟前"
            }
            return k0x.ih3x(bA1x, "HH:mm")
        } else {
            if (kf4j < nm5r + 864e5) {
                return "昨天" + k0x.ih3x(bA1x, "HH:mm")
            } else if (kf4j < nm5r + 864e5 * 6) {
                var gE3x = eS2x.getFullYear()
                  , Vv5A = new Date(gE3x,0,1);
                var nm5r = eS2x.getTime() - Vv5A.getTime();
                if (kf4j < nm5r) {
                    return k0x.ih3x(bA1x, "M月d日 HH:mm")
                }
                return k0x.ih3x(bA1x, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    }
    ;
    l0x.VT5Y = function() {
        var df2x = /\{(.*?)\}/gi;
        return function(oW5b, j0x) {
            return (oW5b || "").replace(df2x, function($1, $2) {
                var D0x = j0x[$2];
                return D0x == null ? $1 : D0x
            })
        }
    }();
    l0x.fp2x = function() {
        var bf1x = Array.prototype.slice.call(arguments, 0)
          , oW5b = bf1x.shift();
        if (oW5b) {
            return oW5b.replace(/{(\d+)}/g, function($1, $2) {
                return $2 < bf1x.length ? bf1x[$2] : $1
            })
        }
        return ""
    }
    ;
    l0x.JI2x = function(i0x, ec2x, kh4l) {
        return "";
        kh4l = kh4l || " - ";
        if (i0x && i0x.length) {
            return kh4l + (!!ec2x ? '<span class="' + ec2x + '">' + i0x[0] + "</span>" : i0x[0])
        }
        return ""
    }
    ;
    l0x.bHR7K = function() {
        if (window.getSelection) {
            var sk6e = window.getSelection();
            if (sk6e && sk6e.focusNode && sk6e.focusNode.tagName) {
                var Bd9U = a9j.dk2x(sk6e.focusNode);
                for (var i = 0, yu8m; i < Bd9U.length; ++i) {
                    yu8m = Bd9U[i].tagName;
                    if (!yu8m)
                        continue;
                    yu8m = yu8m.toLowerCase();
                    if (yu8m == "textarea" || yu8m == "input")
                        return !0
                }
            }
        } else if (document.selection) {
            var dd1x = document.selection.createRange();
            if (dd1x) {
                var g0x = dd1x.parentElement();
                if (g0x && g0x.tagName) {
                    var yu8m = g0x.tagName.toLowerCase();
                    if (yu8m == "textarea" || yu8m == "input")
                        return !0
                }
            }
        }
        return !1
    }
    ;
    l0x.Bg9X = function(fG2x) {
        if (/^[A-Z]\:\\/i.test(fG2x)) {
            fG2x = fG2x.split("\\")
        } else {
            fG2x = fG2x.split("/")
        }
        fG2x = fG2x[fG2x.length - 1];
        return fG2x
    }
    ;
    l0x.cAk9b = function() {
        var FC0x = [13, 17, 34, 19, 18, 21];
        return function(C0x) {
            var bs1x = (C0x || "").split("_");
            return {
                type: FC0x[bs1x[2]] || -1,
                id: bs1x[3] || ""
            }
        }
    }();
    l0x.bJd7W = function(gq3x) {
        if (!gq3x) {
            return true
        }
        for (var k in gq3x) {
            return false
        }
        return true
    }
    ;
    l0x.brb3x = function(dp2x) {
        if (!dp2x) {
            return ""
        }
        if (4 == dp2x.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dp2x.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dp2x.expertTags && dp2x.expertTags.length || !l0x.bJd7W(dp2x.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    }
    ;
    l0x.Vd5i = function(hH3x) {
        if (!hH3x)
            return "";
        var dt2x = hH3x.length
          , iq3x = [];
        iq3x[0] = dt2x / 3 | 0;
        iq3x[1] = iq3x[0] + ((dt2x - iq3x[0]) / 2 | 0);
        return hH3x.substring(0, iq3x[0]) + hH3x.substring(iq3x[0], iq3x[1]).replace(/\d/g, "*") + hH3x.substring(iq3x[1], dt2x)
    }
    ;
    l0x.cFT0x = function(r0x, cB1x) {
        return (r0x % cB1x + cB1x) % cB1x
    }
    ;
    l0x.brg3x = function() {
        var FC0x = {
            0: "playlist",
            1: "program",
            2: "event",
            3: "album",
            4: "song",
            5: "mv",
            6: "topic",
            62: "video"
        };
        return function(C0x) {
            var bs1x = (C0x || "").split("_")
              , m0x = {
                type: FC0x[bs1x[2]] || -1,
                id: bs1x[3] || ""
            };
            if (m0x.type == "event") {
                m0x.uid = bs1x[4] || "";
                return "/" + m0x.type + "?id=" + m0x.id + "&uid=" + m0x.uid
            }
            return "/" + m0x.type + "?id=" + m0x.id
        }
    }();
    l0x.bri3x = function() {
        var FC0x = {
            0: "歌单",
            1: "电台节目",
            2: "动态",
            3: "专辑",
            4: "单曲",
            5: "MV",
            6: "专栏文章",
            62: "视频"
        };
        return function(C0x) {
            var bs1x = (C0x || "").split("_");
            return FC0x[bs1x[2]] || "资源"
        }
    }();
    l0x.cAh9Y = function(bv1x) {
        var qs = bv1x.length > 0 ? bv1x.substring(1) : ""
          , args = {}
          , items = qs.length ? qs.split("&") : []
          , item = null
          , name = null
          , value = null
          , i = 0
          , len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    }
    ;
    l0x.brs3x = function(os5x, UP5U) {
        var bdY8Q = 0
          , ex2x = new Array;
        k0x.bd1x(os5x, function(Y1x, r0x) {
            var cx1x = a9j.dj2x("img");
            cx1x.src = Y1x;
            h0x.s0x(cx1x, "load", function(r0x, d0x) {
                ex2x[r0x] = 1;
                bdY8Q++;
                if (bdY8Q == os5x.length)
                    UP5U(os5x, ex2x)
            }
            .f0x(this, r0x));
            h0x.s0x(cx1x, "error", function(d0x, r0x) {
                ex2x[r0x] = 0;
                bdY8Q++;
                if (bdY8Q == os5x.length)
                    UP5U(os5x, ex2x)
            }
            .f0x(this, r0x))
        })
    }
    ;
    l0x.JC2x = function(i0x, dZ2x) {
        var m0x = [];
        k0x.bd1x(i0x, function(p0x, r0x, P0x) {
            m0x.push(dZ2x(p0x, r0x, P0x))
        });
        return m0x
    }
    ;
    l0x.ben8f = function(i0x, dZ2x, P0x) {
        var m0x = [];
        k0x.bd1x(i0x, function(p0x, r0x) {
            if (dZ2x.call(P0x, p0x, r0x, i0x)) {
                m0x.push(p0x)
            }
        });
        return m0x
    }
    ;
    l0x.bJY7R = function(bo1x) {
        return k0x.dH2x((bo1x || "").replace(/\s{2,}/g, " ").trim())
    }
    ;
    var cAe9V = {
        r: /\<|\>/g,
        "<": "&lt;",
        ">": "&gt;"
    };
    l0x.cAd9U = function(bo1x) {
        return k0x.Dq0x(cAe9V, bo1x)
    }
    ;
    l0x.brK3x = function(bj1x) {
        if (bj1x.transNames && bj1x.transNames.length) {
            return bj1x.transNames[0]
        } else if (bj1x.alias && bj1x.alias.length) {
            return bj1x.alias[0]
        }
    }
    ;
    l0x.brL3x = function(PA3x) {
        if (PA3x) {
            return PA3x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    }
    ;
    l0x.brT3x = function(g0x) {
        var g0x = a9j.B0x(g0x)
          , cK1x = g0x && g0x.getElementsByTagName("textarea")[0]
          , K0x = a9j.t0x(g0x, "key")
          , brU3x = a9j.t0x(g0x, "simple") == "1"
          , cAc9T = a9j.t0x(g0x, "pvnamed") == "1"
          , cAb9S = q0x.ws8k.gm3x();
        if (!(g0x && cK1x && K0x))
            return;
        var bbQ7J, bsc3x, bbB7u;
        bbQ7J = a9j.H0x(a9j.B0x("m-playlist"), "j-img");
        k0x.bd1x(bbQ7J, function(iZ3x) {
            if (!bbB7u && a9j.t0x(iZ3x, "key")) {
                bbB7u = a9j.t0x(iZ3x, "key");
                iZ3x.removeAttribute("data-key")
            }
        });
        bbQ7J = a9j.H0x(a9j.B0x("m-playlist"), "m-info");
        k0x.bd1x(bbQ7J, function(iZ3x) {
            if (!bsc3x && iZ3x.id && iZ3x.id.indexOf("auto-id-") == 0) {
                bsc3x = iZ3x.id.slice(8, 12)
            }
        });
        var D0x = cK1x.value || cK1x.defaultValue;
        if (bbB7u) {
            D0x = decodeURIComponent(k0x.cAa9R(D0x, "param=" + bsc3x + bbB7u))
        }
        D0x = JSON.parse(D0x);
        if (cAc9T) {
            l0x.czX9O(D0x)
        }
        if (brU3x) {
            D0x = l0x.GB1x(D0x)
        }
        cAb9S.wh8Z(K0x, D0x);
        g0x.innerHTML = "";
        return K0x
    }
    ;
    l0x.czW9N = function(pT6N) {
        if (!pT6N.onbeforelistload) {
            pT6N.onbeforelistload = function(d0x) {
                d0x.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!pT6N.onemptylist) {
            pT6N.onemptylist = function(d0x) {
                d0x.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (pT6N.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return pT6N
    }
    ;
    l0x.czX9O = function(hC3x) {
        k0x.bd1x(hC3x, function(bP1x) {
            bP1x.privilege = bP1x.pv;
            delete bP1x.pv
        })
    }
    ;
    l0x.GB1x = function(ik3x) {
        if (k0x.eL2x(ik3x)) {
            var dC2x = [];
            k0x.bd1x(ik3x, function(brU3x) {
                dC2x.push(bLA8s(brU3x))
            });
            return dC2x
        } else {
            return bLA8s(ik3x)
        }
        function bLA8s(ik3x) {
            if (!ik3x)
                return null;
            var dC2x = {
                album: ik3x.al,
                alias: ik3x.alia || ik3x.ala || [],
                artists: ik3x.ar || [],
                commentThreadId: "R_SO_4_" + ik3x.id,
                copyrightId: ik3x.cp || 0,
                duration: ik3x.dt || 0,
                id: ik3x.id,
                mvid: ik3x.mv || 0,
                name: ik3x.name || "",
                cd: ik3x.cd,
                position: ik3x.no || 0,
                ringtone: ik3x.rt,
                rtUrl: ik3x.rtUrl,
                status: ik3x.st || 0,
                pstatus: ik3x.pst || 0,
                fee: ik3x.fee || 0,
                version: ik3x.v || 0,
                eq: ik3x.eq,
                songType: ik3x.t || 0,
                mst: ik3x.mst,
                score: ik3x.pop || 0,
                ftype: ik3x.ftype,
                rtUrls: ik3x.rtUrls,
                transNames: ik3x.tns,
                privilege: ik3x.privilege,
                lyrics: ik3x.lyrics
            };
            return dC2x
        }
    }
    ;
    l0x.cFU0x = function() {
        var g0x = a9j.nR5W('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(g0x);
        h0x.s0x(g0x, "click", function(d0x) {
            h0x.bg1x(d0x);
            a9j.cL1x(g0x)
        })
    }
    ;
    l0x.iJ3x = function(cz1x) {
        if (cz1x < 1e5) {
            return cz1x
        } else if (cz1x < 1e8) {
            return Math.floor(cz1x / 1e3) / 10 + "万"
        } else {
            return Math.floor(cz1x / 1e7) / 10 + "亿"
        }
    }
    ;
    l0x.vv7o = function(cz1x, cK1x) {
        return "<i>" + (cz1x ? "(" + cz1x + ")" : cK1x) + "</i>"
    }
    ;
    l0x.bMg8Y = function(u0x, hZ3x) {
        var e0x = {};
        if (!k0x.lG4K(hZ3x)) {
            return e0x
        }
        switch (parseInt(u0x)) {
        case 17:
            e0x.title = hZ3x.name;
            e0x.author = (hZ3x.radio || []).name;
            e0x.picUrl = hZ3x.coverUrl;
            e0x.category = hZ3x.radio.category;
            break;
        case 19:
            e0x.title = hZ3x.name;
            e0x.author = l0x.zb8T(hZ3x.artists);
            e0x.authors = l0x.zb8T(hZ3x.artists, " / ");
            e0x.picUrl = hZ3x.picUrl;
            break;
        case 13:
            e0x.title = hZ3x.name;
            e0x.author = (hZ3x.creator || []).nickname;
            e0x.picUrl = hZ3x.coverImgUrl;
            break;
        case 18:
            e0x.title = hZ3x.name;
            e0x.author = l0x.zb8T(hZ3x.artists);
            e0x.picUrl = (hZ3x.album || []).picUrl;
            break;
        case 20:
            e0x.title = hZ3x.name;
            e0x.author = "";
            e0x.picUrl = hZ3x.img1v1Url;
            break;
        case 21:
            e0x.title = hZ3x.name;
            e0x.author = hZ3x.artistName;
            e0x.authors = l0x.zb8T(hZ3x.artists, " / ");
            e0x.picUrl = hZ3x.newCover || hZ3x.cover;
            break;
        case 70:
            e0x.title = hZ3x.name;
            e0x.author = (hZ3x.dj || []).nickname;
            e0x.picUrl = hZ3x.picUrl;
            e0x.category = hZ3x.category;
            break;
        default:
            break
        }
        return e0x
    }
    ;
    l0x.bMy8q = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    }
    ;
    l0x.SY4c = function(ev2x, nX5c, e0x) {
        var bL1x, bf1x, m0x;
        var gS3x = null;
        var vB7u = 0;
        if (!e0x)
            e0x = {};
        var xQ8I = function() {
            vB7u = e0x.leading === false ? 0 : +(new Date);
            gS3x = null;
            m0x = ev2x.apply(bL1x, bf1x);
            if (!gS3x)
                bL1x = bf1x = null
        };
        return function() {
            var eS2x = +(new Date);
            if (!vB7u && e0x.leading === false)
                vB7u = eS2x;
            var Hl1x = nX5c - (eS2x - vB7u);
            bL1x = this;
            bf1x = arguments;
            if (Hl1x <= 0 || Hl1x > nX5c) {
                if (gS3x) {
                    clearTimeout(gS3x);
                    gS3x = null
                }
                vB7u = eS2x;
                m0x = ev2x.apply(bL1x, bf1x);
                if (!gS3x)
                    bL1x = bf1x = null
            } else if (!gS3x && e0x.trailing !== false) {
                gS3x = setTimeout(xQ8I, Hl1x)
            }
            return m0x
        }
    }
    ;
    l0x.Jo1x = function(ev2x, nX5c, pf5k) {
        var gS3x, bf1x, bL1x, Cc9T, m0x;
        var xQ8I = function() {
            var gt3x = new Date - Cc9T;
            if (gt3x < nX5c && gt3x >= 0) {
                gS3x = setTimeout(xQ8I, nX5c - gt3x)
            } else {
                gS3x = null;
                if (!pf5k) {
                    m0x = ev2x.apply(bL1x, bf1x);
                    if (!gS3x)
                        bL1x = bf1x = null
                }
            }
        };
        return function() {
            bL1x = this;
            bf1x = arguments;
            Cc9T = new Date;
            var SJ4N = pf5k && !gS3x;
            if (!gS3x)
                gS3x = setTimeout(xQ8I, nX5c);
            if (SJ4N) {
                m0x = ev2x.apply(bL1x, bf1x);
                bL1x = bf1x = null
            }
            return m0x
        }
    }
    ;
    l0x.SF4J = function(g0x, hs3x) {
        if (g0x) {
            var g0x = g0x.firstElementChild;
            if (g0x) {
                g0x.firstElementChild && (g0x = g0x.firstElementChild);
                g0x.setAttribute("xlink:href", "/style/pc/svg/" + hs3x)
            }
        }
    }
    ;
    l0x.bNO8G = function(ep2x) {
        if (!ep2x || !ep2x.length) {
            return
        }
        ep2x = /^#(.+?)#$/.exec(ep2x)[1];
        ep2x = ep2x.replace(/\s/g, " ");
        v0x.bm1x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k0x.cD1x({
                actname: ep2x
            }),
            onload: function(Q0x) {
                if (!Q0x || Q0x.code != 200 || !Q0x.act) {
                    n0x.Z1x.J0x({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + Q0x.act.actId)
                }
            },
            onerror: function(ca1x) {
                n0x.Z1x.J0x({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    }
    ;
    l0x.czU9L = function(ep2x) {
        if (!ep2x || !ep2x.length) {
            return
        }
        var SA4E = location.host;
        ep2x = /^#(.+?)#$/.exec(ep2x)[1];
        ep2x = ep2x.replace(/\s/g, " ");
        v0x.bm1x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k0x.cD1x({
                actname: ep2x
            }),
            onload: function(Q0x) {
                if (!Q0x || Q0x.code != 200 || !Q0x.act) {
                    cy1x.im3x("该话题暂未创建")
                } else {
                    cy1x.AW9N(SA4E + "/activity?id=" + Q0x.act.actId)
                }
            },
            onerror: function(ca1x) {
                cy1x.im3x("操作失败，请稍后再试")
            }
        })
    }
    ;
    l0x.bsq3x = function(xL8D, sJ7C) {
        if (!xL8D || !sJ7C)
            return false;
        if (xL8D == sJ7C)
            return true;
        return l0x.bsq3x(xL8D, sJ7C.parentNode)
    }
    ;
    a9j.cH1x = function(bI1x, iT3x) {
        if (!bI1x)
            return null;
        if (!iT3x)
            return bI1x.firstChild;
        return a9j.H0x(bI1x, iT3x)[0]
    }
    ;
    l0x.bOO9F = function(hX3x) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hX3x)
    }
    ;
    l0x.bPp9g = function(hX3x, Sy4C) {
        Sy4C = Sy4C || "86";
        if (Sy4C == "86")
            return /^\d{11}$/.test(hX3x);
        return /^\d+$/.test(hX3x)
    }
    ;
    l0x.cFV0x = function(vY8Q) {
        if (!vY8Q) {
            return "0b"
        }
        var czR9I = ["Bytes", "KB", "MB", "GB"];
        var bc1x = Math.floor(Math.log(vY8Q) / Math.log(1024));
        return (vY8Q / Math.pow(1024, Math.floor(bc1x))).toFixed(bc1x == 1 ? 0 : 1) + czR9I[bc1x]
    }
    ;
    l0x.bPK9B = function(dJ2x, fo2x, czQ9H) {
        if (!dJ2x)
            return dJ2x;
        var dt2x = k0x.fv2x(dJ2x);
        if (dt2x <= fo2x)
            return dJ2x;
        var bsy3x = dt2x - dJ2x.length
          , bsz3x = dJ2x.length - bsy3x;
        var fE2x = Math.ceil(fo2x / 2)
          , czO9F = fo2x
          , bQk9b = 0;
        if (bsy3x < fE2x)
            fE2x = fo2x - bsy3x;
        if (bsz3x < fo2x)
            fo2x = bsz3x + Math.ceil((fo2x - bsz3x) / 2);
        while (fE2x <= fo2x) {
            bQk9b = k0x.fv2x(dJ2x.substr(0, fE2x));
            var bsA3x = czO9F - bQk9b;
            if (bsA3x == 0)
                break;
            if (bsA3x == 1) {
                var czN9E = k0x.fv2x(dJ2x.charAt(fE2x));
                if (czN9E == 1) {
                    fE2x++;
                    break
                } else {
                    break
                }
            }
            fE2x += Math.floor(bsA3x / 2)
        }
        return dJ2x.substr(0, fE2x) + (!!czQ9H ? "" : "...")
    }
    ;
    l0x.czL9C = function(bq1x) {
        bq1x = bq1x || 10;
        var cO1x = "";
        for (var i = 0; i < bq1x; i++) {
            cO1x += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cO1x
    }
    ;
    var czK9B = /([A-Za-z0-9 \.\-\(\)\!\?])/
      , czJ9A = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/
      , czI9z = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bQY0x = function(czH9y) {
        var bq1x = k0x.DA0x(1, 5)
          , czG9x = Math.random() < .5
          , iQ3x = "";
        if (czH9y) {
            if (czG9x) {
                while (bq1x >= 0) {
                    iQ3x += czI9z[k0x.DA0x(0, 500)];
                    bq1x--
                }
            } else {
                iQ3x = l0x.czL9C(bq1x)
            }
        } else {
            iQ3x = k0x.TV4Z(bq1x)
        }
        return '<div class="soil">' + iQ3x + "</div>"
    };
    l0x.bqt3x = function(eu2x) {
        eu2x = k0x.Dw0x(eu2x);
        try {
            var bq1x = eu2x.length
              , r0x = k0x.DA0x(1, bq1x - 1);
            while (r0x < bq1x) {
                if (czJ9A.test(eu2x.charAt(r0x))) {
                    return k0x.dH2x(eu2x.slice(0, r0x)) + bQY0x(true) + k0x.dH2x(eu2x.slice(r0x))
                } else if (czK9B.test(eu2x.charAt(r0x))) {
                    return k0x.dH2x(eu2x.slice(0, r0x)) + bQY0x() + k0x.dH2x(eu2x.slice(r0x))
                } else {
                    r0x++
                }
            }
            return k0x.dH2x(eu2x)
        } catch (e) {
            return k0x.dH2x(eu2x)
        }
    }
    ;
    l0x.ZG7z = function(lo4s, mJ5O) {
        return "//nos.netease.com/" + lo4s + "/" + mJ5O
    }
    ;
    l0x.czE9v = function(fG2x) {
        var dQ2x = /(.+)(\.[^\.]+$)/.exec(fG2x);
        return dQ2x ? {
            filename: dQ2x[1],
            suffix: dQ2x[2]
        } : {
            filename: fG2x || "",
            suffix: ""
        }
    }
    ;
    l0x.bRp0x = function(bs1x, czB9s) {
        var dC2x = [];
        k0x.bd1x(bs1x, function(ib3x) {
            dC2x.push(czB9s(ib3x))
        });
        return dC2x
    }
    ;
    var czA9r = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l0x.bRy0x = function(yd8V) {
        var j0x = NEJ.X({}, yd8V);
        k0x.eI2x(yd8V, function(p0x, K0x) {
            var bRC0x = czA9r[K0x];
            if (bRC0x) {
                j0x[bRC0x] = p0x
            }
        });
        var RJ4N = yd8V.creator || [];
        if (!k0x.eL2x(RJ4N)) {
            RJ4N = [RJ4N]
        }
        if (RJ4N) {
            j0x.artists = [];
            k0x.bd1x(RJ4N, function(p0x) {
                j0x.artists.push({
                    name: p0x.nickname || p0x.userName,
                    id: p0x.userId
                })
            })
        }
        if (!!yd8V.aliaName) {
            j0x.alias = [yd8V.aliaName]
        }
        if (!!yd8V.transName) {
            j0x.transNames = [yd8V.transName]
        }
        return j0x
    }
    ;
    l0x.czy9p = function(Y1x) {
        return (Y1x || "").replace(/^https?:/, "")
    }
    ;
    l0x.GA1x = function(cO1x) {
        if (!k0x.fC2x(cO1x))
            return cO1x;
        var dC2x = null;
        try {
            dC2x = JSON.parse(cO1x)
        } catch (_e) {}
        return dC2x
    }
    ;
    var czv9m = '<span class="s-fc7 f-tdn">${value}</span>';
    l0x.czu9l = function(cK1x, td7W, e0x) {
        e0x = e0x || {};
        if (!td7W) {
            return k0x.dH2x(cK1x)
        }
        cK1x = k0x.Dw0x(cK1x);
        var qh6b = []
          , bs1x = null
          , QP4T = new RegExp(l0x.bGT7M(td7W),"gi")
          , oW5b = e0x.tpl || czv9m;
        while (bs1x = QP4T.exec(cK1x)) {
            var dQ2x = {
                html: "",
                before: bs1x.index - 1,
                after: bs1x.index + bs1x[0].length
            };
            var GV1x = a9j.eB2x(oW5b);
            dQ2x.html = a9j.cd1x(GV1x, {
                value: k0x.dH2x(bs1x[0])
            });
            qh6b.push(dQ2x)
        }
        var bpU2x = qh6b.length
          , kx4B = {
            before: cK1x.length - 1,
            after: 0
        }
          , dC2x = "";
        for (var i = 0; i <= bpU2x; i++) {
            var hA3x, fX3x;
            hA3x = (qh6b[i - 1] || kx4B).after;
            fX3x = (qh6b[i] || kx4B).before;
            if (fX3x >= hA3x && hA3x >= 0 && fX3x <= cK1x.length - 1) {
                dC2x += k0x.dH2x(cK1x.substring(hA3x, fX3x + 1))
            }
            if (qh6b[i]) {
                dC2x += qh6b[i].html
            }
        }
        return dC2x
    }
    ;
    l0x.oe5j = function() {
        if (!window.WM) {
            var g0x = document.createElement("script");
            var qk6e = window.location.hostname;
            var bSj1x = window.location.protocol;
            a9j.gJ3x(g0x, "type", "text/javascript");
            if (qk6e === "music.163.com") {
                a9j.gJ3x(g0x, "src", bSj1x + "//s3.music.126.net/js/web2/3rd/acstatic-dun.min.js")
            } else {
                a9j.gJ3x(g0x, "src", bSj1x + "//" + qk6e + "/js/web2/3rd/acstatic-dun.min.js")
            }
            g0x.onload = function(data) {
                initWatchman({
                    productNumber: "YD00000558929251",
                    onload: function(instance) {
                        window.WM = instance
                    }
                })
            }
            ;
            document.body.appendChild(g0x)
        }
    }
    ;
    l0x.sy6s = function(ou5z) {
        if (window.WM) {
            window.WM.getToken("bd5d2f973ef74cd2a61325a412ae54d9", ou5z)
        }
    }
    ;
    l0x.CS0x = function(ou5z) {
        if (window.WM) {
            window.WM.getToken("0b0cdd23ed1144a0b78de049edc09824", ou5z)
        }
    }
}
)();
(function() {
    var k0x = NEJ.P("nej.u");
    function czr9i() {
        var CU0x = function(hY3x) {
            if (hY3x < -128) {
                return CU0x(128 - (-128 - hY3x))
            } else if (hY3x >= -128 && hY3x <= 127) {
                return hY3x
            } else if (hY3x > 127) {
                return CU0x(-129 + hY3x - 127)
            } else {
                throw new Error("1001")
            }
        };
        var czq9h = function(hY3x, bi1x) {
            return CU0x(hY3x + bi1x)
        };
        var czp9g = function(Zc6W, btg3x) {
            if (Zc6W == null) {
                return null
            }
            if (btg3x == null) {
                return Zc6W
            }
            var qO6I = [];
            var czo9f = btg3x.length;
            for (var i = 0, bq1x = Zc6W.length; i < bq1x; i++) {
                qO6I[i] = czq9h(Zc6W[i], btg3x[i % czo9f])
            }
            return qO6I
        };
        var czn9e = function(Yv6p) {
            if (Yv6p == null) {
                return Yv6p
            }
            var qO6I = [];
            var czk9b = Yv6p.length;
            for (var i = 0, bq1x = czk9b; i < bq1x; i++) {
                qO6I[i] = CU0x(0 - Yv6p[i])
            }
            return qO6I
        };
        var czh9Y = function(btl3x, QS4W) {
            btl3x = CU0x(btl3x);
            QS4W = CU0x(QS4W);
            return CU0x(btl3x ^ QS4W)
        };
        var bTq1x = function(QR4V, bts3x) {
            if (QR4V == null || bts3x == null || QR4V.length != bts3x.length) {
                return QR4V
            }
            var qO6I = [];
            var czg9X = QR4V.length;
            for (var i = 0, bq1x = czg9X; i < bq1x; i++) {
                qO6I[i] = czh9Y(QR4V[i], bts3x[i])
            }
            return qO6I
        };
        var bTB1x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var czf9W = function(dy2x) {
            var IX1x = [];
            IX1x.push(bTB1x[dy2x >>> 4 & 15]);
            IX1x.push(bTB1x[dy2x & 15]);
            return IX1x.join("")
        };
        var bTK1x = function(vY8Q) {
            var bq1x = vY8Q.length;
            if (vY8Q == null || bq1x < 0) {
                return new String("")
            }
            var IX1x = [];
            for (var i = 0; i < bq1x; i++) {
                IX1x.push(czf9W(vY8Q[i]))
            }
            return IX1x.join("")
        };
        var bTL1x = function(Ya6U) {
            if (Ya6U == null || Ya6U.length == 0) {
                return Ya6U
            }
            var btw3x = new String(Ya6U);
            var qO6I = [];
            var bq1x = btw3x.length / 2;
            var bi1x = 0;
            for (var i = 0; i < bq1x; i++) {
                var po5t = parseInt(btw3x.charAt(bi1x++), 16) << 4;
                var pp5u = parseInt(btw3x.charAt(bi1x++), 16);
                qO6I[i] = CU0x(po5t + pp5u)
            }
            return qO6I
        };
        var bTW1x = function(cO1x) {
            if (cO1x == null || cO1x == undefined) {
                return cO1x
            }
            var Qy3x = encodeURIComponent(cO1x);
            var vY8Q = [];
            var bUi1x = Qy3x.length;
            for (var i = 0; i < bUi1x; i++) {
                if (Qy3x.charAt(i) == "%") {
                    if (i + 2 < bUi1x) {
                        vY8Q.push(bTL1x(Qy3x.charAt(++i) + "" + Qy3x.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    vY8Q.push(Qy3x.charCodeAt(i))
                }
            }
            return vY8Q
        };
        var czc9T = function(xh8Z) {
            var bc1x = 0;
            bc1x += (xh8Z[0] & 255) << 24;
            bc1x += (xh8Z[1] & 255) << 16;
            bc1x += (xh8Z[2] & 255) << 8;
            bc1x += xh8Z[3] & 255;
            return bc1x
        };
        var cFX0x = function(bc1x) {
            var xh8Z = [];
            xh8Z[0] = bc1x >>> 24 & 255;
            xh8Z[1] = bc1x >>> 16 & 255;
            xh8Z[2] = bc1x >>> 8 & 255;
            xh8Z[3] = bc1x & 255;
            return xh8Z
        };
        var cyY8Q = function(cV1x, btE3x, bq1x) {
            var dC2x = [];
            if (cV1x == null || cV1x.length == 0) {
                return dC2x
            }
            if (cV1x.length < bq1x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq1x; i++) {
                dC2x[i] = cV1x[btE3x + i]
            }
            return dC2x
        };
        var btI3x = function(cV1x, btE3x, se6Y, cyT8L, bq1x) {
            if (cV1x == null || cV1x.length == 0) {
                return se6Y
            }
            if (se6Y == null) {
                throw new Error("1004")
            }
            if (cV1x.length < bq1x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq1x; i++) {
                se6Y[cyT8L + i] = cV1x[btE3x + i]
            }
            return se6Y
        };
        var cyQ8I = function(bq1x) {
            var bs1x = [];
            for (var i = 0; i < bq1x; i++) {
                bs1x[i] = 0
            }
            return bs1x
        };
        var cyP8H = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var IV1x = 64;
        var WZ5e = 64;
        var bVw1x = 4;
        var cyO8G = function(qJ6D) {
            var bVE1x = [];
            if (qJ6D == null || qJ6D == undefined || qJ6D.length == 0) {
                return cyQ8I(WZ5e)
            }
            if (qJ6D.length >= WZ5e) {
                return cyY8Q(qJ6D, 0, WZ5e)
            } else {
                for (var i = 0; i < WZ5e; i++) {
                    bVE1x[i] = qJ6D[i % qJ6D.length]
                }
            }
            return bVE1x
        };
        var cyN8F = function(WJ5O) {
            if (WJ5O == null || WJ5O.length % IV1x != 0) {
                throw new Error("1005")
            }
            var btP3x = [];
            var bi1x = 0;
            var cyM8E = WJ5O.length / IV1x;
            for (var i = 0; i < cyM8E; i++) {
                btP3x[i] = [];
                for (var j = 0; j < IV1x; j++) {
                    btP3x[i][j] = WJ5O[bi1x++]
                }
            }
            return btP3x
        };
        var cyL8D = function(bVU2x) {
            var po5t = bVU2x >>> 4 & 15;
            var pp5u = bVU2x & 15;
            var bi1x = po5t * 16 + pp5u;
            return cyP8H[bi1x]
        };
        var byh4l = function(btT3x) {
            if (btT3x == null) {
                return null
            }
            var byt4x = [];
            for (var i = 0, bq1x = btT3x.length; i < bq1x; i++) {
                byt4x[i] = cyL8D(btT3x[i])
            }
            return byt4x
        };
        var byu4y = function(IS1x, qJ6D) {
            if (IS1x == null) {
                return null
            }
            if (IS1x.length == 0) {
                return []
            }
            if (IS1x.length % IV1x != 0) {
                throw new Error("1005")
            }
            qJ6D = cyO8G(qJ6D);
            var btY3x = qJ6D;
            var bub3x = cyN8F(IS1x);
            var Pu3x = [];
            var cyK8C = bub3x.length;
            for (var i = 0; i < cyK8C; i++) {
                var bue3x = byh4l(bub3x[i]);
                bue3x = byh4l(bue3x);
                var buf3x = bTq1x(bue3x, btY3x);
                var cyJ8B = czp9g(buf3x, czn9e(btY3x));
                buf3x = bTq1x(cyJ8B, qJ6D);
                btI3x(buf3x, 0, Pu3x, i * IV1x, IV1x);
                btY3x = bub3x[i]
            }
            var bze5j = [];
            btI3x(Pu3x, Pu3x.length - bVw1x, bze5j, 0, bVw1x);
            var bq1x = czc9T(bze5j);
            if (bq1x > Pu3x.length) {
                throw new Error("1006")
            }
            var qO6I = [];
            btI3x(Pu3x, 0, qO6I, 0, bq1x);
            return qO6I
        };
        var cyI8A = function(beA8s, K0x) {
            if (beA8s == null) {
                return null
            }
            var bzi5n = new String(beA8s);
            if (bzi5n.length == 0) {
                return []
            }
            var IS1x = bTL1x(bzi5n);
            if (K0x == null || K0x == undefined) {
                throw new Error("1007")
            }
            var qJ6D = bTW1x(K0x);
            return byu4y(IS1x, qJ6D)
        };
        this.cyH8z = function(beA8s, K0x) {
            var bui3x = cyI8A(beA8s, K0x);
            var Hw1x = new String(bTK1x(bui3x));
            var zy9p = [];
            var bun3x = Hw1x.length / 2;
            var bi1x = 0;
            for (var i = 0; i < bun3x; i++) {
                zy9p.push("%");
                zy9p.push(Hw1x.charAt(bi1x++));
                zy9p.push(Hw1x.charAt(bi1x++))
            }
            return zy9p.join("")
        }
        ;
        k0x.cAa9R = function(buo3x, K0x) {
            return k0x.cyG8y(k0x.cEu0x(buo3x), K0x)
        }
        ;
        k0x.cyG8y = function(buo3x, K0x) {
            var bui3x = byu4y(buo3x, bTW1x(K0x));
            var Hw1x = new String(bTK1x(bui3x));
            var zy9p = [];
            var bun3x = Hw1x.length / 2;
            var bi1x = 0;
            for (var i = 0; i < bun3x; i++) {
                zy9p.push("%");
                zy9p.push(Hw1x.charAt(bi1x++));
                zy9p.push(Hw1x.charAt(bi1x++))
            }
            return zy9p.join("")
        }
    }
    window.settmusic = (new czr9i).cyH8z
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, I0x = c0x("nej.ut"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), v0x = c0x("nej.j"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), K0x = "Search-tracks_", b0x;
    q0x.fp2x({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(Q0x) {
                return Q0x
            },
            onerror: function(Q0x, e0x) {
                if (Q0x.code == 407) {
                    e0x.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function(e0x, bh1x) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cyF8x(parseInt(e0x.data.type)) || "suggest",
                    keyword: e0x.data.s,
                    offset: e0x.offset
                })
            },
            format: function(Q0x, e0x) {
                if (Q0x.abroad) {
                    try {
                        Q0x.result = JSON.parse(decodeURIComponent(settmusic(Q0x.result, q0x.sk)))
                    } catch (e) {}
                }
                Q0x.result = Q0x.result || {};
                var i0x, cB1x, hM3x = [], pA5F = e0x.data.s || "", gc3x = e0x.data.limit, u0x = parseInt(e0x.data.type) || 1, m0x = Q0x.result;
                switch (u0x) {
                case 1:
                    i0x = this.bzK5P(m0x.songs, e0x.data.hlpretag, e0x.data.hlposttag);
                    cB1x = m0x.songCount;
                    break;
                case 10:
                    i0x = m0x.albums;
                    cB1x = m0x.albumCount;
                    break;
                case 100:
                    i0x = m0x.artists;
                    cB1x = m0x.artistCount;
                    break;
                case 1e3:
                    i0x = m0x.playlists;
                    cB1x = m0x.playlistCount;
                    break;
                case 1002:
                    i0x = m0x.userprofiles;
                    cB1x = m0x.userprofileCount;
                    break;
                case 1004:
                    i0x = m0x.mvs;
                    cB1x = m0x.mvCount;
                    break;
                case 1014:
                    i0x = l0x.bRp0x(m0x.videos, l0x.bRy0x);
                    cB1x = m0x.videoCount;
                    break;
                case 1006:
                    i0x = this.bzK5P(m0x.songs, e0x.data.hlpretag, e0x.data.hlposttag);
                    cB1x = m0x.songCount;
                    break;
                case 1009:
                    var qG6A = m0x.djRadios;
                    if (!!qG6A) {
                        k0x.bd1x(qG6A, function(D0x, r0x, cyE8w) {
                            D0x.xid = D0x.id;
                            D0x.id = D0x.id + "_rad"
                        });
                        if (qG6A.length) {
                            this.wh8Z("radio_search-" + e0x.data.s, qG6A)
                        }
                    }
                    cB1x = Math.min(m0x.djprogramCount, 500);
                    i0x = m0x.djprograms || [];
                    if (e0x.data.isPub) {
                        k0x.nk5p(qG6A, function(D0x, r0x, cyE8w) {
                            D0x.stype = 1;
                            i0x.unshift(D0x)
                        });
                        cB1x = Math.min(i0x.length, 500)
                    }
                    break
                }
                this.z0x("onsearchload", Q0x);
                if (i0x && i0x.length) {
                    for (var i = 0; i < gc3x; i++) {
                        if (i < i0x.length) {
                            hM3x.push(i0x[i])
                        } else {
                            hM3x.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(cB1x || 0, pA5F.length < 3 ? 500 : 5e3),
                    list: hM3x
                }
            },
            onerror: function(Q0x, e0x) {
                e0x.onload(e0x, []);
                if (k0x.gK3x(e0x.onerror)) {
                    e0x.onerror(Q0x)
                }
            }
        }
    });
    q0x.HB1x = NEJ.C();
    b0x = q0x.HB1x.N0x(q0x.hJ3x);
    b0x.cw1x = function() {
        this.cE1x()
    }
    ;
    b0x.cyD8v = function(K0x, e0x) {
        if (!K0x)
            return;
        if (!!this.bzQ5V)
            v0x.ky4C(this.bzQ5V);
        this.bzQ5V = this.cp1x("search-suggest", NEJ.X({
            data: {
                s: K0x,
                limit: 8
            }
        }, e0x))
    }
    ;
    b0x.cyA8s = function(K0x, e0x) {
        if (!K0x)
            return;
        this.cp1x("search-multimatch", NEJ.X({
            data: {
                s: K0x
            }
        }, e0x))
    }
    ;
    b0x.bzK5P = function() {
        var cyz8r = function(hB3x, bzU5Z, bzV5a) {
            var cyy8q = hB3x.match(new RegExp(bzU5Z + "(.+?)" + bzV5a,"gi"))
              , cz1x = 0;
            k0x.bd1x(cyy8q, function(p0x) {
                cz1x += p0x.replace(new RegExp(bzU5Z,"g"), "").replace(new RegExp(bzV5a,"g"), "").length
            });
            return cz1x
        };
        return function(jx4B, cyx8p, cyw8o) {
            var bAj5o = [];
            k0x.bd1x(jx4B, function(bj1x, bc1x) {
                bj1x = l0x.GB1x(bj1x);
                var baD7w = bj1x.lyrics || [], dt2x = baD7w.length, jY4c = 0, cB1x = 4, ban7g = {
                    l: 0,
                    v: 0
                }, buW4a;
                if (dt2x > 4) {
                    k0x.bd1x(baD7w, function(hB3x, r0x) {
                        var bAq5v = cyz8r(hB3x, cyx8p, cyw8o);
                        if (bAq5v > ban7g.v) {
                            ban7g.v = bAq5v;
                            ban7g.l = r0x
                        }
                    });
                    jY4c = ban7g.l;
                    jY4c = Math.max(jY4c, 0);
                    buW4a = dt2x - jY4c - 4;
                    if (buW4a < 0)
                        jY4c += buW4a;
                    bj1x.lrcAbstractEnd = jY4c + cB1x - 1
                } else {
                    bj1x.lrcAbstractEnd = dt2x - 1
                }
                bj1x.lrcAbstractStart = jY4c;
                bj1x.indexId = (baD7w && baD7w.length ? "L" : "NL") + bj1x.id;
                bAj5o.push(bj1x)
            });
            return bAj5o
        }
    }();
    b0x.cyF8x = function(u0x) {
        switch (u0x) {
        case 1:
            return "song";
            break;
        case 100:
            return "artist";
            break;
        case 10:
            return "album";
            break;
        case 1004:
            return "mv";
            break;
        case 1014:
            return "video";
            break;
        case 1006:
            return "lyric";
            break;
        case 1e3:
            return "list";
            break;
        case 1009:
            return "djradio";
            break;
        case 1002:
            return "user";
            break;
        default:
            return "suggest";
            break
        }
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), I0x = c0x("nej.ut"), v0x = c0x("nej.j"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), E0x = c0x("nm.m"), n0x = c0x("nm.l"), dw2x = c0x("nm.i"), M0x = c0x("nm.m.sch"), b0x, L0x;
    var ZW7P = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    M0x.NK3x = NEJ.C();
    b0x = M0x.NK3x.N0x(I0x.cJ1x);
    b0x.cw1x = function(g0x) {
        this.cE1x();
        this.bW1x(g0x);
        this.S0x = q0x.HB1x.gm3x()
    }
    ;
    b0x.bW1x = function(g0x) {
        this.o0x = g0x;
        var i0x = a9j.H0x(g0x, "j-flag");
        this.eT2x = i0x[0];
        this.buZ4d = i0x[1];
        this.cr1x = i0x[2];
        this.nu5z = i0x[3];
        h0x.s0x(this.eT2x, "input", this.gg3x.f0x(this));
        h0x.s0x(this.eT2x, "keyup", this.gg3x.f0x(this));
        h0x.s0x(this.eT2x, "focus", this.gQ3x.f0x(this));
        h0x.s0x(this.buZ4d, "click", this.gQ3x.f0x(this));
        h0x.s0x(this.eT2x, "blur", this.bva4e.f0x(this));
        h0x.s0x(this.cr1x, "click", this.Zw6q.f0x(this));
        h0x.s0x(this.o0x, "keydown", this.bve4i.f0x(this));
        h0x.s0x(this.o0x, "keypress", this.Zo6i.f0x(this));
        h0x.s0x(this.nu5z, "mouseover", this.Ny3x.f0x(this));
        h0x.s0x(this.nu5z, "mouseout", this.Ny3x.f0x(this));
        if (this.eT2x.value) {
            this.eT2x.value = ""
        }
        if (this.eT2x.style.opacity != null) {
            this.eT2x.style.opacity = 1
        }
    }
    ;
    b0x.gg3x = function(d0x) {
        if (d0x.type == "keyup" && d0x.keyCode == 8 || d0x.keyCode == 46) {
            this.HI1x()
        } else if (d0x.type == "input" || d0x.type == "propertychange") {
            setTimeout(this.HI1x.f0x(this), 0)
        }
    }
    ;
    b0x.gQ3x = function() {
        this.Aj9a(this.buZ4d, !1);
        a9j.y0x(this.o0x, "m-srch-fcs");
        this.eT2x.focus();
        this.HI1x();
        a9j.y0x((a9j.H0x("g-topbar", "j-showoff") || [])[0], "f-hide")
    }
    ;
    b0x.bva4e = function() {
        if (!this.eT2x.value) {
            this.Aj9a(this.buZ4d, !0)
        }
        var HJ1x = a9j.H0x(this.nu5z, "slt");
        if (this.Yl6f(this.nu5z) && HJ1x.length > 0 && a9j.t0x(HJ1x[0], "type")) {
            var hs3x = HJ1x[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hs3x)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.eT2x.value
                })
            }
            this.bvn4r(HJ1x[0].href)
        }
        this.Aj9a(this.nu5z, !1);
        a9j.x0x(this.o0x, "m-srch-fcs")
    }
    ;
    b0x.Aj9a = function(g0x, mi4m) {
        a9j.ba1x(g0x, "display", !mi4m ? "none" : "")
    }
    ;
    b0x.Yl6f = function(g0x) {
        return a9j.dh2x(g0x, "display") != "none"
    }
    ;
    b0x.HI1x = function() {
        var cyv8n = function(hX3x) {
            hX3x = k0x.Dw0x(hX3x);
            var eG2x = this.o0x.clientWidth > 250 ? 41 : 17;
            if (l0x.Na3x(hX3x) > eG2x) {
                hX3x = l0x.AM9D(hX3x, eG2x) + "..."
            }
            return k0x.dH2x(hX3x)
        };
        var XK6E = function(m0x) {
            return m0x.songs && m0x.songs.length || m0x.albums && m0x.albums.length || m0x.artists && m0x.artists.length || m0x.playlists && m0x.playlists.length
        };
        var ou5z = function(td7W, d0x) {
            if (!l0x.bGA6u(this.eT2x) || l0x.kv4z(this.eT2x.value)) {
                this.Aj9a(this.nu5z, !1);
                return
            }
            d0x.keyword = k0x.dH2x(td7W);
            var dV2x = a9j.cd1x("m-search-suggest", d0x, {
                mark: l0x.czu9l.eA2x(this, td7W),
                cutStr: cyv8n.f0x(this)
            })
              , ug7Z = d0x.result.order;
            this.nu5z.innerHTML = dV2x;
            this.Aj9a(this.nu5z, XK6E(d0x.result) ? !0 : !1);
            if (!!ug7Z && !!ug7Z.length && ZW7P[ug7Z[0]]) {
                this.bvq4u = {
                    keyword: td7W,
                    type: ZW7P[ug7Z[0]]
                }
            }
        };
        var cyu8m = function() {
            this.Aj9a(this.nu5z, !1);
            return
        };
        return function() {
            var D0x = this.eT2x.value;
            if (l0x.kv4z(D0x)) {
                this.Aj9a(this.nu5z, !1);
                return
            }
            this.S0x.cyD8v(D0x, {
                onload: ou5z.f0x(this, D0x),
                onForbidden: cyu8m.f0x(this)
            })
        }
    }();
    b0x.Zo6i = function(d0x) {
        if (d0x.keyCode != 13)
            return;
        var HJ1x = a9j.H0x(this.nu5z, "slt");
        if (this.Yl6f(this.nu5z) && HJ1x.length > 0) {
            this.bvn4r(HJ1x[0].href);
            this.Aj9a(this.nu5z, !1);
            return
        }
        this.Zw6q();
        this.Aj9a(this.nu5z, !1)
    }
    ;
    b0x.bve4i = function(d0x) {
        if (!this.Yl6f(this.nu5z))
            return;
        var i0x = a9j.H0x(this.nu5z, "xtag")
          , dt2x = i0x.length
          , r0x = k0x.di2x(i0x, function(p0x) {
            return a9j.bE1x(p0x, "slt")
        });
        switch (d0x.keyCode) {
        case 38:
            if (r0x >= 0)
                a9j.x0x(i0x[r0x], "slt");
            a9j.y0x(i0x[r0x <= 0 ? dt2x - 1 : r0x - 1], "slt");
            break;
        case 40:
            if (r0x >= 0)
                a9j.x0x(i0x[r0x], "slt");
            a9j.y0x(i0x[(r0x + 1) % dt2x], "slt");
            break
        }
    }
    ;
    b0x.Ny3x = function(d0x) {
        if (!this.Yl6f(this.nu5z))
            return;
        var MY2x, F0x = h0x.X1x(d0x), i0x = a9j.H0x(this.nu5z, "xtag");
        if (F0x.tagName.toLowerCase() == "a")
            MY2x = F0x;
        else if (F0x.parentNode.tagName.toLowerCase() == "a")
            MY2x = F0x.parentNode;
        if (!MY2x)
            return;
        k0x.bd1x(i0x, function(p0x) {
            a9j.x0x(p0x, "slt");
            a9j.t0x(p0x, "type", "")
        });
        if (d0x.type == "mouseout")
            return;
        a9j.y0x(MY2x, "slt");
        a9j.t0x(MY2x, "type", "mouse")
    }
    ;
    b0x.Zw6q = function() {
        var dR2x = location.hash
          , r0x = dR2x.indexOf("?")
          , bv1x = k0x.hq3x(dR2x.substring(r0x + 1));
        bv1x.s = this.eT2x.value;
        if (l0x.kv4z(bv1x.s))
            return;
        if (!bv1x.type && this.bvq4u && this.bvq4u.keyword == bv1x.s) {
            bv1x.type = this.bvq4u.type
        }
        this.bvn4r("/search/#/?" + k0x.cD1x(bv1x));
        this.eT2x.blur()
    }
    ;
    b0x.bvn4r = function(Y1x) {
        if (location.dispatch2) {
            location.dispatch2(Y1x)
        } else {
            location.href = Y1x
        }
    }
    ;
    M0x.NK3x.cyt8l = function() {
        var i0x = a9j.H0x(document.body, "j-suggest");
        k0x.bd1x(i0x, function(p0x) {
            new M0x.NK3x(p0x)
        })
    }
    ;
    M0x.NK3x.cyt8l()
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, I0x = c0x("nej.ut"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), v0x = c0x("nej.j"), q0x = c0x("nm.d"), b0x;
    q0x.fp2x({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(Q0x) {
                return {
                    total: Q0x.size || 0,
                    list: Q0x.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(Q0x) {
                return {
                    total: Q0x.size || 0,
                    list: Q0x.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function(Q0x) {
                return Q0x.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(Q0x, e0x) {
                if (e0x.offset == 0) {
                    var qt6n = Q0x.data[0];
                    this.z0x("onfirstload", qt6n);
                    Q0x.data.splice(0, 1);
                    return Q0x.data
                } else {
                    return Q0x.data
                }
            }
        }
    });
    q0x.HL1x = NEJ.C();
    b0x = q0x.HL1x.N0x(q0x.hJ3x);
    b0x.cw1x = function() {
        this.cE1x()
    }
    ;
    b0x.bvw4A = function() {
        var sU7N = "LOCAL_FLAG";
        return function(u0x, cyr8j) {
            var j0x = this.FX1x(sU7N, {});
            if (j0x[u0x]) {
                return true
            } else {
                if (!cyr8j) {
                    j0x[u0x] = true;
                    this.wI8A(sU7N, j0x)
                }
                return false
            }
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), k0x = c0x("nej.u"), O0x = c0x("nej.ut"), bvE4I;
    if (!!O0x.op5u)
        return;
    O0x.op5u = NEJ.C();
    bvE4I = O0x.op5u.N0x(O0x.cJ1x);
    bvE4I.bl1x = function() {
        var cyq8i = function(d0x) {
            d0x.matched = d0x.source == d0x.target
        };
        return function(e0x) {
            e0x.oncheck = e0x.oncheck || cyq8i;
            this.bn1x(e0x);
            this.bU1x = e0x.list;
            this.ji3x = e0x.dataset || "id";
            this.kQ4U = e0x.selected || "js-selected"
        }
    }();
    bvE4I.oa5f = function(D0x) {
        var F0x, d0x = {
            target: D0x
        };
        k0x.bd1x(this.bU1x, function(g0x) {
            delete d0x.matched;
            d0x.source = a9j.t0x(g0x, this.ji3x);
            this.z0x("oncheck", d0x);
            if (!d0x.matched) {
                a9j.x0x(g0x, this.kQ4U)
            } else {
                F0x = g0x;
                a9j.y0x(g0x, this.kQ4U)
            }
        }, this);
        return F0x
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), O0x = c0x("nej.ut"), qm6g;
    if (!!O0x.dg2x)
        return;
    O0x.dg2x = NEJ.C();
    qm6g = O0x.dg2x.N0x(O0x.cJ1x);
    qm6g.cw1x = function() {
        this.je3x = {};
        this.cE1x();
        this.bJ1x()
    }
    ;
    qm6g.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.bvH4L = e0x.umi || "";
        this.Ci9Z = e0x.dispatcher;
        this.IA1x = e0x.composite || bb1x;
        this.bne2x({
            onshow: this.fe2x.f0x(this),
            onhide: this.kg4k.f0x(this),
            onrefresh: this.eD2x.f0x(this),
            onmessage: this.qy6s.f0x(this),
            onbeforehide: this.cyp8h.f0x(this)
        })
    }
    ;
    qm6g.bC1x = function() {
        delete this.bvH4L;
        this.je3x = {};
        this.bF1x()
    }
    ;
    qm6g.vP8H = function(d0x) {
        if (!!d0x)
            d0x.stopped = !0
    }
    ;
    qm6g.bJ1x = br1x;
    qm6g.fe2x = br1x;
    qm6g.kg4k = br1x;
    qm6g.eD2x = br1x;
    qm6g.qy6s = br1x;
    qm6g.cyp8h = br1x;
    qm6g.nw5B = function(nb5g, bG1x, fk2x) {
        this.Ci9Z.bwp4t({
            to: nb5g,
            mode: fk2x || 0,
            data: bG1x,
            from: this.bvH4L
        })
    }
    ;
    qm6g.cFY0x = function(u0x, j0x) {
        this.Ci9Z.Cp9g(u0x, {
            from: this.bvH4L,
            data: j0x
        })
    }
    ;
    qm6g.cGa0x = function() {
        this.Ci9Z.ms4w.apply(this.Ci9Z, arguments)
    }
    ;
    qm6g.cyj8b = function() {
        return this.je3x
    }
    ;
    a9j.bbh7a = function() {
        if (!!window.dispatcher) {
            dispatcher.bDG6A.apply(dispatcher, arguments)
        }
    }
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, bb1x = NEJ.O, a9j = c0x("nej.e"), k0x = c0x("nej.u"), O0x = c0x("nej.ut"), zU9L;
    if (!!O0x.du2x)
        return;
    O0x.du2x = NEJ.C();
    zU9L = O0x.du2x.N0x(O0x.dg2x);
    zU9L.cyi8a = function(e0x) {
        var bI1x;
        if (!bI1x) {
            var j0x = e0x.input || bb1x;
            bI1x = a9j.B0x(j0x.parent)
        }
        if (!bI1x) {
            var j0x = e0x.data || bb1x;
            bI1x = a9j.B0x(j0x.parent)
        }
        if (!bI1x) {
            bI1x = a9j.B0x(e0x.parent)
        }
        return bI1x
    }
    ;
    zU9L.fe2x = function(e0x) {
        var bI1x = this.cyi8a(e0x);
        if (!!bI1x && !!this.o0x)
            bI1x.appendChild(this.o0x);
        this.gM3x(e0x);
        this.bDW6Q("onshow", e0x);
        this.eD2x(e0x)
    }
    ;
    zU9L.eD2x = function(e0x) {
        this.gj3x(e0x);
        this.bDW6Q("onrefresh", e0x)
    }
    ;
    zU9L.kg4k = function() {
        this.lq4u();
        this.cyh8Z();
        a9j.mS5X(this.o0x)
    }
    ;
    zU9L.bEa6U = function() {
        var gL3x = /^onshow|onrefresh|delay$/;
        return function(ck1x) {
            return gL3x.test(ck1x)
        }
    }();
    zU9L.bEc6W = br1x;
    zU9L.bDW6Q = function() {
        var bEd6X = function(bv1x, e0x, ck1x, qr6l) {
            if (this.bEa6U(qr6l))
                return;
            if (!!bv1x)
                ck1x += (ck1x.indexOf("?") > 1 ? "&" : "?") + bv1x;
            var dn2x = this.bEc6W(qr6l, e0x) || {};
            dn2x.location = e0x;
            dn2x.parent = this.je3x[qr6l];
            this.Ci9Z.is3x(ck1x, {
                input: dn2x
            })
        };
        return function(u0x, e0x) {
            if (!e0x.nodelay) {
                if (!!this.IA1x.delay)
                    return;
                var bEj6d = this.IA1x[u0x] || bb1x;
                if (bEj6d.delay)
                    return
            }
            var bv1x = k0x.cD1x(e0x.param) || "";
            if (u0x == "onrefresh") {
                k0x.eI2x(this.IA1x, bEd6X.f0x(this, bv1x, e0x))
            }
            k0x.eI2x(bEj6d, bEd6X.f0x(this, bv1x, e0x))
        }
    }();
    zU9L.cyh8Z = function() {
        var Dt0x = function(ck1x, qr6l) {
            if (!this.bEa6U(qr6l))
                this.Ci9Z.bt1x(ck1x)
        };
        return function() {
            k0x.eI2x(this.IA1x, Dt0x, this);
            k0x.eI2x(this.IA1x.onshow, Dt0x, this);
            k0x.eI2x(this.IA1x.onrefresh, Dt0x, this)
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), I0x = c0x("nej.ut"), v0x = c0x("nej.j"), k0x = c0x("nej.u"), E0x = c0x("nm.m"), l0x = c0x("nm.x"), q0x = c0x("nm.d"), b0x, L0x;
    E0x.SS4W = NEJ.C();
    b0x = E0x.SS4W.N0x(I0x.cJ1x);
    b0x.cw1x = function() {
        this.cE1x();
        this.o0x = a9j.B0x("g-topbar");
        var i0x = a9j.H0x(this.o0x, "j-tflag");
        this.bws4w = i0x[0];
        this.HO1x = i0x[1];
        this.bEo6i = i0x[2];
        this.bwy4C = i0x[3];
        this.cyg8Y = I0x.op5u.A0x({
            list: this.bws4w.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bwB4F = I0x.op5u.A0x({
            list: this.bwy4C.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bX1x([[this.o0x, "click", this.Sg4k.f0x(this)], [this.HO1x, "click", this.cM1x.f0x(this)], [this.HO1x, "mouseout", this.bEA6u.f0x(this, 0)], [this.HO1x, "mouseover", this.bEA6u.f0x(this, 1)]]);
        window.scrollTopbar = this.cyf8X.f0x(this);
        window.matchNav = this.bED6x.f0x(this);
        window.polling = this.vr7k.f0x(this);
        this.bwJ4N = q0x.HL1x.A0x();
        this.cye8W();
        this.Iu1x();
        var bv1x = k0x.hq3x(location.href.split("?")[1]) || {};
        if (bv1x.market) {
            a9j.B0x("topbar-download-link").href = "/download?market=" + bv1x.market
        }
        var bxd4h = a9j.H0x(this.o0x, "j-showoff");
        if (bxd4h && !this.bwJ4N.bvw4A("newMvSearch")) {
            a9j.x0x(bxd4h[0], "f-hide");
            window.setTimeout(function() {
                a9j.y0x(bxd4h[0], "f-hide")
            }, 5e3)
        }
        l0x.oe5j()
    }
    ;
    b0x.vr7k = function(d0x) {
        var dR2x = l0x.Kl2x();
        if (!/^\/msg/.test(dR2x)) {
            var wS8K = 0;
            wS8K += d0x.comment;
            wS8K += d0x.forward;
            wS8K += d0x.msg;
            wS8K += d0x.notice;
            if (wS8K > 0) {
                wS8K = wS8K > 99 ? "99+" : wS8K;
                this.Ri4m.innerText = wS8K;
                this.Is1x.innerText = wS8K;
                a9j.x0x(this.Ri4m, "f-hide");
                a9j.x0x(this.Is1x, "f-hide");
                this.bfk8c = true
            } else {
                a9j.y0x(this.Ri4m, "f-hide");
                a9j.y0x(this.Is1x, "f-hide");
                this.bfk8c = false
            }
            var eW2x = "/at";
            if (d0x.notice)
                eW2x = "/notify";
            if (d0x.comment)
                eW2x = "/comment";
            if (d0x.msg > 0)
                eW2x = "/private";
            if (d0x.forward > 0)
                eW2x = "/at";
            this.Is1x.parentNode.href = "/msg/#" + eW2x
        } else {
            this.Is1x.parentNode.href = "javascript:;";
            a9j.y0x(this.Ri4m, "f-hide");
            a9j.y0x(this.Is1x, "f-hide");
            this.bfk8c = false
        }
        var i0x = a9j.H0x(this.bws4w, "j-t");
        if (!/^\/friend/.test(dR2x)) {
            if (i0x && i0x.length) {
                a9j.ba1x(i0x[0], "display", d0x.event > 0 ? "" : "none")
            }
        } else {
            a9j.ba1x(i0x[0], "display", "none")
        }
    }
    ;
    b0x.cM1x = function(d0x) {
        var g0x = h0x.X1x(d0x, "d:action");
        if (g0x) {
            switch (a9j.t0x(g0x, "action")) {
            case "login":
                h0x.cn1x(d0x);
                var u0x = a9j.t0x(g0x, "type");
                if (u0x) {
                    if (u0x == "sina" || u0x == "tencent") {
                        this.CQ0x = g0x.href;
                        l0x.CS0x(this.kV4Z.f0x(this))
                    } else
                        top.login(u0x == "mobile" ? 0 : 3)
                } else {
                    top.login()
                }
                break;
            case "logout":
                h0x.cn1x(d0x);
                top.logout();
                break;
            case "viewStore":
                if (!this.bwJ4N.bvw4A("storeNew")) {
                    a9j.y0x(this.cGb0x, "f-vhide")
                }
                break;
            case "viewLevel":
                if (!this.bwJ4N.bvw4A("levelNew")) {
                    a9j.y0x(this.cGc0x, "f-vhide")
                }
                break
            }
        }
    }
    ;
    b0x.kV4Z = function(cG1x) {
        this.CQ0x += "&checkToken=" + cG1x || "";
        top.open(this.CQ0x)
    }
    ;
    b0x.Sg4k = function(d0x) {
        var g0x = h0x.X1x(d0x, "d:action");
        if (!g0x)
            return;
        var V0x = a9j.t0x(g0x, "action");
        switch (V0x) {
        case "bilog":
            var bxv4z = a9j.t0x(g0x, "logAction")
              , bxz4D = a9j.t0x(g0x, "logJson");
            window.log(bxv4z, bxz4D);
            break
        }
    }
    ;
    b0x.bEA6u = function(Ir1x, d0x) {
        if (this.bxA4E) {
            this.bxA4E.style.display = !Ir1x ? "none" : "";
            (Ir1x || !this.bfk8c ? a9j.y0x : a9j.x0x).call(window, this.Ri4m, "f-hide")
        }
    }
    ;
    b0x.cyf8X = function(ga3x) {
        a9j.ba1x(this.o0x, "top", -ga3x + "px")
    }
    ;
    b0x.bED6x = function(eW2x, cyb8T) {
        this.cyg8Y.oa5f(eW2x);
        if (eW2x == "discover") {
            a9j.y0x(this.bEo6i, "f-hide");
            a9j.x0x(this.bwy4C, "f-hide");
            window.g_topBarHeight = 105;
            this.bwB4F.oa5f(cyb8T)
        } else {
            a9j.x0x(this.bEo6i, "f-hide");
            a9j.y0x(this.bwy4C, "f-hide");
            window.g_topBarHeight = 75
        }
    }
    ;
    b0x.cye8W = function() {
        var en2x = a9j.B0x("g_iframe");
        if (!en2x)
            return;
        var gy3x = en2x.contentWindow.document.getElementById("g_top");
        this.bED6x(a9j.t0x(gy3x, "module"), a9j.t0x(gy3x, "sub"))
    }
    ;
    var Xd5i = {}
      , bFt6n = /\/\/\w+/
      , cya8S = {
        avatarUrl: function(a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bFt6n, "") !== b.replace(bFt6n, "")
        },
        userId: true,
        nickname: true,
        reward: true,
        topic: true,
        djStatus: true
    };
    b0x.cxW8O = function(bcQ8I) {
        var nU5Z = k0x.di2x(cya8S, function(D0x, K0x) {
            if (k0x.gK3x(D0x)) {
                return D0x(bcQ8I[K0x], Xd5i[K0x])
            } else {
                return bcQ8I[K0x] !== Xd5i[K0x]
            }
        });
        Xd5i = bcQ8I;
        return bcQ8I[nU5Z]
    }
    ;
    b0x.Iu1x = function() {
        var dp2x = GUser || {}
          , cxV8N = GUserAcc || {};
        if (dp2x && dp2x.userId) {
            var bFH6B = NEJ.X(dp2x, cxV8N);
            if (this.cxW8O(bFH6B)) {
                a9j.dA2x(this.HO1x, "m-topbar-user-login", bFH6B)
            }
        } else {
            Xd5i = {};
            this.HO1x.innerHTML = a9j.iH3x("m-topbar-user-unlogin");
            var i0x = a9j.H0x(this.bws4w, "j-t");
            a9j.ba1x(i0x[0], "display", "none")
        }
        a9j.x0x(this.HO1x, "f-hide");
        this.bfk8c = false;
        var i0x = a9j.H0x(this.HO1x, "j-uflag");
        if (dp2x && dp2x.userId) {
            this.Ri4m = i0x.shift();
            this.bxA4E = i0x.shift();
            this.Is1x = i0x.shift()
        } else {
            this.bxA4E = i0x.shift()
        }
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, h0x = c0x("nej.v"), I0x = c0x("nej.ut"), q0x = c0x("nm.d"), b0x, L0x;
    q0x.fp2x({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function(Q0x) {
                h0x.z0x(q0x.tq7j, "message", Q0x)
            }
        }
    });
    q0x.tq7j = NEJ.C();
    b0x = q0x.tq7j.N0x(q0x.hJ3x);
    b0x.bce7X = function() {
        this.cp1x("polling-get", {})
    }
    ;
    b0x.uL7E = function() {
        var eg2x;
        return function() {
            if (!!eg2x)
                return;
            eg2x = window.setInterval(this.bce7X.f0x(this), 1e5);
            this.bce7X()
        }
    }();
    I0x.fK2x.A0x({
        event: "message",
        element: q0x.tq7j
    })
}
)();
var io = "undefined" === typeof module ? {} : module.exports;
(function() {
    (function(exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function(host, details) {
            var uri = io.util.parseUri(host), uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    }
    )("object" === typeof module ? module.exports : this.io = {}, this);
    (function(exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function(str) {
            var m = re.exec(str || "")
              , uri = {}
              , i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        }
        ;
        util.uniqueUri = function(uri) {
            var protocol = uri.protocol
              , host = uri.host
              , port = uri.port;
            if ("document"in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        }
        ;
        util.query = function(base, addition) {
            var query = util.chunkQuery(base || "")
              , components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        }
        ;
        util.chunkQuery = function(qs) {
            var query = {}, params = qs.split("&"), i = 0, l = params.length, kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        }
        ;
        var pageLoaded = false;
        util.load = function(fn) {
            if ("document"in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        }
        ;
        util.on = function(element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        }
        ;
        util.request = function(xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        }
        ;
        if ("undefined" != typeof window) {
            util.load(function() {
                pageLoaded = true
            })
        }
        util.defer = function(fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function() {
                setTimeout(fn, 100)
            })
        }
        ;
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [], depth = typeof deep == "undefined" ? 2 : deep, prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        }
        ;
        util.mixin = function(ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        }
        ;
        util.inherit = function(ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        }
        ;
        util.isArray = Array.isArray || function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        }
        ;
        util.intersect = function(arr, arr2) {
            var ret = []
              , longest = arr.length > arr2.length ? arr : arr2
              , shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i]))
                    ret.push(shortest[i])
            }
            return ret
        }
        ;
        util.indexOf = function(arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        }
        ;
        util.toArray = function(enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++)
                arr.push(enu[i]);
            return arr
        }
        ;
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    }
    )("undefined" != typeof io ? io : module.exports, this);
    (function(exports, io) {
        exports.EventEmitter = EventEmitter;
        function EventEmitter() {}
        EventEmitter.prototype.on = function(name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        }
        ;
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function(name, fn) {
            var self = this;
            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        }
        ;
        EventEmitter.prototype.removeListener = function(name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        }
        ;
        EventEmitter.prototype.removeAllListeners = function(name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        }
        ;
        EventEmitter.prototype.listeners = function(name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        }
        ;
        EventEmitter.prototype.emit = function(name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};
        function f(n) {
            return n < 10 ? "0" + n : n
        }
        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }
        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
            case "string":
                return quote(value);
            case "number":
                return isFinite(value) ? String(value) : "null";
            case "boolean":
            case "null":
                return String(value);
            case "object":
                if (!value) {
                    return "null"
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v
            }
        }
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
        ;
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
    )("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function(exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON
          , indexOf = io.util.indexOf;
        parser.encodePacket = function(packet) {
            var type = indexOf(packets, packet.type)
              , id = packet.id || ""
              , endpoint = packet.endpoint || ""
              , ack = packet.ack
              , data = null;
            switch (packet.type) {
            case "error":
                var reason = packet.reason ? indexOf(reasons, packet.reason) : ""
                  , adv = packet.advice ? indexOf(advice, packet.advice) : "";
                if (reason !== "" || adv !== "")
                    data = reason + (adv !== "" ? "+" + adv : "");
                break;
            case "message":
                if (packet.data !== "")
                    data = packet.data;
                break;
            case "event":
                var ev = {
                    name: packet.name
                };
                if (packet.args && packet.args.length) {
                    ev.args = packet.args
                }
                data = JSON.stringify(ev);
                break;
            case "json":
                data = JSON.stringify(packet.data);
                break;
            case "connect":
                if (packet.qs)
                    data = packet.qs;
                break;
            case "ack":
                data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined)
                encoded.push(data);
            return encoded.join(":")
        }
        ;
        parser.encodePayload = function(packets) {
            var decoded = "";
            if (packets.length == 1)
                return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        }
        ;
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function(data) {
            var pieces = data.match(regexp);
            if (!pieces)
                return {};
            var id = pieces[2] || ""
              , data = pieces[5] || ""
              , packet = {
                type: packets[pieces[1]],
                endpoint: pieces[4] || ""
            };
            if (id) {
                packet.id = id;
                if (pieces[3])
                    packet.ack = "data";
                else
                    packet.ack = true
            }
            switch (packet.type) {
            case "error":
                var pieces = data.split("+");
                packet.reason = reasons[pieces[0]] || "";
                packet.advice = advice[pieces[1]] || "";
                break;
            case "message":
                packet.data = data || "";
                break;
            case "event":
                try {
                    var opts = JSON.parse(data);
                    packet.name = opts.name;
                    packet.args = opts.args
                } catch (e) {}
                packet.args = packet.args || [];
                break;
            case "json":
                try {
                    packet.data = JSON.parse(data)
                } catch (e) {}
                break;
            case "connect":
                packet.qs = data || "";
                break;
            case "ack":
                var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                if (pieces) {
                    packet.ackId = pieces[1];
                    packet.args = [];
                    if (pieces[3]) {
                        try {
                            packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                        } catch (e) {}
                    }
                }
                break;
            case "disconnect":
            case "heartbeat":
                break
            }
            return packet
        }
        ;
        parser.decodePayload = function(data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io) {
        exports.Transport = Transport;
        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function() {
            return true
        }
        ;
        Transport.prototype.onData = function(data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        }
        ;
        Transport.prototype.onPacket = function(packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        }
        ;
        Transport.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function() {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        }
        ;
        Transport.prototype.onDisconnect = function() {
            if (this.isOpen)
                this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        }
        ;
        Transport.prototype.onConnect = function() {
            this.socket.onConnect();
            return this
        }
        ;
        Transport.prototype.clearCloseTimeout = function() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        }
        ;
        Transport.prototype.clearTimeouts = function() {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        }
        ;
        Transport.prototype.packet = function(packet) {
            this.send(io.parser.encodePacket(packet))
        }
        ;
        Transport.prototype.onHeartbeat = function(heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        }
        ;
        Transport.prototype.onOpen = function() {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        }
        ;
        Transport.prototype.onClose = function() {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        }
        ;
        Transport.prototype.prepareUrl = function() {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        }
        ;
        Transport.prototype.ready = function(socket, fn) {
            fn.call(this)
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.Socket = Socket;
        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document"in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function() {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function(name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this,name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        }
        ;
        Socket.prototype.publish = function() {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        }
        ;
        function empty() {}
        Socket.prototype.handshake = function(fn) {
            var self = this
              , options = this.options;
            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0]
                  , script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function(data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                }
                ;
                xhr.send(null)
            }
        }
        ;
        Socket.prototype.getTransport = function(override) {
            var transports = override || this.transports, match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this,this.sessionid)
                }
            }
            return null
        }
        ;
        Socket.prototype.connect = function(fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function(sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function() {
                    return "WebSocket"in global && !("__addTask"in WebSocket) || "MozWebSocket"in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports)
                    self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();
                function connect(transports) {
                    if (self.transport)
                        self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport)
                        return self.publish("connect_failed");
                    self.transport.ready(self, function() {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function() {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function() {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        }
        ;
        Socket.prototype.setHeartbeatTimeout = function() {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats())
                return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function() {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        }
        ;
        Socket.prototype.packet = function(data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        }
        ;
        Socket.prototype.setBuffer = function(v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        }
        ;
        Socket.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer);
            this.buffer = []
        }
        ;
        Socket.prototype.disconnect = function() {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        }
        ;
        Socket.prototype.disconnectSync = function() {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        }
        ;
        Socket.prototype.isXDomain = function() {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        }
        ;
        Socket.prototype.onConnect = function() {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        }
        ;
        Socket.prototype.onOpen = function() {
            this.open = true
        }
        ;
        Socket.prototype.onClose = function() {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        }
        ;
        Socket.prototype.onPacket = function(packet) {
            this.of(packet.endpoint).onPacket(packet)
        }
        ;
        Socket.prototype.onError = function(err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        }
        ;
        Socket.prototype.onDisconnect = function(reason) {
            var wasConnected = this.connected
              , wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        }
        ;
        Socket.prototype.reconnect = function() {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this
              , maxAttempts = this.options["max reconnection attempts"]
              , tryMultiple = this.options["try multiple transports"]
              , limit = this.options["reconnection limit"];
            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }
            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.SocketNamespace = SocketNamespace;
        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this,"json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
        }
        ;
        SocketNamespace.prototype.packet = function(packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        }
        ;
        SocketNamespace.prototype.send = function(data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        }
        ;
        SocketNamespace.prototype.emit = function(name) {
            var args = Array.prototype.slice.call(arguments, 1)
              , lastArg = args[args.length - 1]
              , packet = {
                type: "event",
                name: name
            };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        }
        ;
        SocketNamespace.prototype.disconnect = function() {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        }
        ;
        SocketNamespace.prototype.onPacket = function(packet) {
            var self = this;
            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
            case "connect":
                this.$emit("connect");
                break;
            case "disconnect":
                if (this.name === "") {
                    this.socket.onDisconnect(packet.reason || "booted")
                } else {
                    this.$emit("disconnect", packet.reason)
                }
                break;
            case "message":
            case "json":
                var params = ["message", packet.data];
                if (packet.ack == "data") {
                    params.push(ack)
                } else if (packet.ack) {
                    this.packet({
                        type: "ack",
                        ackId: packet.id
                    })
                }
                this.$emit.apply(this, params);
                break;
            case "event":
                var params = [packet.name].concat(packet.args);
                if (packet.ack == "data")
                    params.push(ack);
                this.$emit.apply(this, params);
                break;
            case "ack":
                if (this.acks[packet.ackId]) {
                    this.acks[packet.ackId].apply(this, packet.args);
                    delete this.acks[packet.ackId]
                }
                break;
            case "error":
                if (packet.advice) {
                    this.socket.onError(packet)
                } else {
                    if (packet.reason == "unauthorized") {
                        this.$emit("connect_failed", packet.reason)
                    } else {
                        this.$emit("error", packet.reason)
                    }
                }
                break
            }
        }
        ;
        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        }
        ;
        Flag.prototype.emit = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.websocket = WS;
        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function() {
            var query = io.util.query(this.socket.options.query), self = this, Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function() {
                self.onOpen();
                self.socket.setBuffer(false)
            }
            ;
            this.websocket.onmessage = function(ev) {
                self.onData(ev.data)
            }
            ;
            this.websocket.onclose = function() {
                self.onClose();
                self.socket.setBuffer(true)
            }
            ;
            this.websocket.onerror = function(e) {
                self.onError(e)
            }
            ;
            return this
        }
        ;
        if (io.util.ua.iDevice) {
            WS.prototype.send = function(data) {
                var self = this;
                setTimeout(function() {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function(data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function(arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        }
        ;
        WS.prototype.close = function() {
            this.websocket.close();
            return this
        }
        ;
        WS.prototype.onError = function(e) {
            this.socket.onError(e)
        }
        ;
        WS.prototype.scheme = function() {
            return this.socket.options.secure ? "wss" : "ws"
        }
        ;
        WS.check = function() {
            return "WebSocket"in global && !("__addTask"in WebSocket) || "MozWebSocket"in global
        }
        ;
        WS.xdomainCheck = function() {
            return true
        }
        ;
        io.transports.push("websocket")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.flashsocket = Flashsocket;
        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function() {
            var self = this
              , args = arguments;
            WebSocket.ZO7H(function() {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        }
        ;
        Flashsocket.prototype.send = function() {
            var self = this
              , args = arguments;
            WebSocket.ZO7H(function() {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        }
        ;
        Flashsocket.prototype.close = function() {
            WebSocket.Uk5p.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        }
        ;
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() {
                var options = socket.options
                  , port = options["flash policy port"]
                  , path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bxI4M();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body)
                return init();
            io.util.load(init)
        }
        ;
        Flashsocket.check = function() {
            if (typeof WebSocket == "undefined" || !("__initialize"in WebSocket) || !swfobject)
                return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        }
        ;
        Flashsocket.xdomainCheck = function() {
            return true
        }
        ;
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function() {
            var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function() {
                var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D
                  , ah = t.userAgent.toLowerCase()
                  , Y = t.platform.toLowerCase()
                  , ae = Y ? /win/.test(Y) : /win/.test(ah)
                  , ac = Y ? /mac/.test(Y) : /mac/.test(ah)
                  , af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false
                  , X = !+"1"
                  , ag = [0, 0, 0]
                  , ab = null;
                if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                    ab = t.plugins[S].description;
                    if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                        T = true;
                        X = false;
                        ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                        ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                        ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                        ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                    }
                } else {
                    if (typeof O[["Active"].concat("Object").join("X")] != D) {
                        try {
                            var ad = new (window[["Active"].concat("Object").join("X")])(W);
                            if (ad) {
                                ab = ad.GetVariable("$version");
                                if (ab) {
                                    X = true;
                                    ab = ab.split(" ")[1].split(",");
                                    ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                }
                            }
                        } catch (Z) {}
                    }
                }
                return {
                    w3: aa,
                    pv: ag,
                    wk: af,
                    ie: X,
                    win: ae,
                    mac: ac
                }
            }(), k = function() {
                if (!M.w3) {
                    return
                }
                if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                    f()
                }
                if (!J) {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("DOMContentLoaded", f, false)
                    }
                    if (M.ie && M.win) {
                        j.attachEvent(x, function() {
                            if (j.readyState == "complete") {
                                j.detachEvent(x, arguments.callee);
                                f()
                            }
                        });
                        if (O == top) {
                            (function() {
                                if (J) {
                                    return
                                }
                                try {
                                    j.documentElement.doScroll("left")
                                } catch (X) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            }
                            )()
                        }
                    }
                    if (M.wk) {
                        (function() {
                            if (J) {
                                return
                            }
                            if (!/loaded|complete/.test(j.readyState)) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        }
                        )()
                    }
                    s(f)
                }
            }();
            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }
            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }
            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function() {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }
            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }
            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function() {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    }
                    )()
                } else {
                    H()
                }
            }
            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }
            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }
            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }
            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn"
                      , ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function() {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        }
                        )()
                    }
                    u(aa, ab, X)
                }
            }
            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function() {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    }
                    )()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }
            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }
            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }
            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }
            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function() {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        }
                        )()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }
            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }
            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }
            function C(X) {
                return j.createElement(X)
            }
            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }
            function F(Z) {
                var Y = M.pv
                  , X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }
            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }
            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }
            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function() {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function() {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function(ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function(X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function() {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function() {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function() {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function(Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function(Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function(X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function(aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function(aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }
    (function() {
        if ("undefined" == typeof window || window.WebSocket)
            return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function() {},
                error: function() {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gY3x = WebSocket.cxU8M++;
            WebSocket.bGb6V[self.gY3x] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lV4Z = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function() {
                WebSocket.ZO7H(function() {
                    WebSocket.pF5K.create(self.gY3x, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        }
        ;
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.pF5K.send(this.gY3x, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        }
        ;
        WebSocket.prototype.close = function() {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.pF5K.close(this.gY3x)
        }
        ;
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (!(type in this.lV4Z)) {
                this.lV4Z[type] = []
            }
            this.lV4Z[type].push(listener)
        }
        ;
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (!(type in this.lV4Z))
                return;
            var events = this.lV4Z[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        }
        ;
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.lV4Z[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler)
                handler(event)
        }
        ;
        WebSocket.prototype.cxT8L = function(flashEvent) {
            if ("readyState"in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol"in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bGf6Z(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bGf6Z("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cxQ8I("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        }
        ;
        WebSocket.prototype.bGf6Z = function(type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        }
        ;
        WebSocket.prototype.cxQ8I = function(type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        }
        ;
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.pF5K = null;
        WebSocket.bGb6V = {};
        WebSocket.Uk5p = [];
        WebSocket.cxU8M = 0;
        WebSocket.loadFlashPolicyFile = function(url) {
            WebSocket.ZO7H(function() {
                WebSocket.pF5K.loadManualPolicyFile(url)
            })
        }
        ;
        WebSocket.bxI4M = function() {
            if (WebSocket.pF5K)
                return;
            if (WebSocket.cxP8H) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cxP8H
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cxO8G()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function(e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        }
        ;
        WebSocket.cGd0x = function() {
            setTimeout(function() {
                WebSocket.pF5K = document.getElementById("webSocketFlash");
                WebSocket.pF5K.setCallerUrl(location.href);
                WebSocket.pF5K.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Uk5p.length; ++i) {
                    WebSocket.Uk5p[i]()
                }
                WebSocket.Uk5p = []
            }, 0)
        }
        ;
        WebSocket.cGe0x = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.pF5K.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bGb6V[events[i].webSocketId].cxT8L(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        }
        ;
        WebSocket.cGf0x = function(message) {
            console.log(decodeURIComponent(message))
        }
        ;
        WebSocket.dY2x = function(message) {
            console.error(decodeURIComponent(message))
        }
        ;
        WebSocket.ZO7H = function(task) {
            if (WebSocket.pF5K) {
                task()
            } else {
                WebSocket.Uk5p.push(task)
            }
        }
        ;
        WebSocket.cxO8G = function() {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        }
        ;
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function() {
                    WebSocket.bxI4M()
                }, false)
            } else {
                window.attachEvent("onload", function() {
                    WebSocket.bxI4M()
                })
            }
        }
    }
    )();
    (function(exports, io, global) {
        exports.XHR = XHR;
        function XHR(socket) {
            if (!socket)
                return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function() {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        }
        ;
        XHR.prototype.payload = function(payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        }
        ;
        XHR.prototype.send = function(data) {
            this.post(data);
            return this
        }
        ;
        function empty() {}
        XHR.prototype.post = function(data) {
            var self = this;
            this.socket.setBuffer(true);
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        }
        ;
        XHR.prototype.close = function() {
            this.onClose();
            return this
        }
        ;
        XHR.prototype.request = function(method) {
            var req = io.util.request(this.socket.isXDomain())
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        }
        ;
        XHR.prototype.scheme = function() {
            return this.socket.options.secure ? "https" : "http"
        }
        ;
        XHR.check = function(socket, xdomain) {
            try {
                var request = io.util.request(xdomain)
                  , usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest
                  , socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:"
                  , isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        }
        ;
        XHR.xdomainCheck = function(socket) {
            return XHR.check(socket, true)
        }
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.htmlfile = HTMLFile;
        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function() {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function() {
                self.destroy()
            })
        }
        ;
        HTMLFile.prototype.c0x = function(data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        }
        ;
        HTMLFile.prototype.destroy = function() {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        }
        ;
        HTMLFile.prototype.close = function() {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        }
        ;
        HTMLFile.check = function(socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X")in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        }
        ;
        HTMLFile.xdomainCheck = function() {
            return false
        }
        ;
        io.transports.push("htmlfile")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports["xhr-polling"] = XHRPolling;
        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function() {
            return false
        }
        ;
        XHRPolling.prototype.open = function() {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        }
        ;
        function empty() {}
        XHRPolling.prototype.get = function() {
            if (!this.isOpen)
                return;
            var self = this;
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }
            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        }
        ;
        XHRPolling.prototype.onClose = function() {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        }
        ;
        XHRPolling.prototype.ready = function(socket, fn) {
            var self = this;
            io.util.defer(function() {
                fn.call(self)
            })
        }
        ;
        io.transports.push("xhr-polling")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io, global) {
        var indicator = global.document && "MozAppearance"in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;
        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function(msg) {
                self.c0x(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function(data) {
            var self = this
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"), area = document.createElement("textarea"), id = this.iframeId = "socketio_iframe_" + this.index, iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;
            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }
            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function() {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        }
        ;
        JSONPPolling.prototype.get = function() {
            var self = this
              , script = document.createElement("script")
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function() {
                self.onClose()
            }
            ;
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function() {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        }
        ;
        JSONPPolling.prototype.c0x = function(msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        }
        ;
        JSONPPolling.prototype.ready = function(socket, fn) {
            var self = this;
            if (!indicator)
                return fn.call(this);
            io.util.load(function() {
                fn.call(self)
            })
        }
        ;
        JSONPPolling.check = function() {
            return "document"in global
        }
        ;
        JSONPPolling.xdomainCheck = function() {
            return true
        }
        ;
        io.transports.push("jsonp-polling")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return io
        })
    }
}
)();
(function() {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;
    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!this.eh2x)
            this.eh2x = {};
        this.bGp6j = n
    }
    ;
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.eh2x || !this.eh2x.error || isArray(this.eh2x.error) && !this.eh2x.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1]instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.eh2x)
            return false;
        var handler = this.eh2x[type];
        if (!handler)
            return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
            case 1:
                handler.call(this);
                break;
            case 2:
                handler.call(this, arguments[1]);
                break;
            case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
            default:
                var l = arguments.length;
                var args = new Array(l - 1);
                for (var i = 1; i < l; i++)
                    args[i - 1] = arguments[i];
                handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++)
                args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    }
    ;
    EventEmitter.prototype.addListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.eh2x)
            this.eh2x = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.eh2x[type]) {
            this.eh2x[type] = listener
        } else if (isArray(this.eh2x[type])) {
            this.eh2x[type].push(listener)
        } else {
            this.eh2x[type] = [this.eh2x[type], listener]
        }
        if (isArray(this.eh2x[type]) && !this.eh2x[type].warned) {
            var m;
            if (this.bGp6j !== undefined) {
                m = this.bGp6j
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.eh2x[type].length > m) {
                this.eh2x[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.eh2x[type].length);
                console.trace()
            }
        }
        return this
    }
    ;
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;
        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    }
    ;
    EventEmitter.prototype.removeListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.eh2x || !this.eh2x[type])
            return this;
        var list = this.eh2x[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0)
                return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.eh2x[type]
        }
        return this
    }
    ;
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.eh2x = {};
            return this
        }
        var events = this.eh2x && this.eh2x[type];
        if (!events)
            return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.eh2x[type] = null
        }
        return this
    }
    ;
    EventEmitter.prototype.listeners = function(type) {
        if (!this.eh2x)
            this.eh2x = {};
        if (!this.eh2x[type])
            this.eh2x[type] = [];
        if (!isArray(this.eh2x[type])) {
            this.eh2x[type] = [this.eh2x[type]]
        }
        return this.eh2x[type]
    }
}
)();
(function() {
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function(host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function() {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function() {
            pomelo.emit("reconnect")
        });
        socket.on("message", function(data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function(err) {
            cb(err)
        });
        socket.on("disconnect", function(reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    }
    ;
    var request = function(method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function(method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function(method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function(msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function() {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function(msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function() {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function(message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function(ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function(opts, cb) {
        request("register", opts, cb)
    }
    ;
    pomelo.bind = function(opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    }
    ;
    pomelo.registerAndBind = function(opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    }
    ;
    pomelo.cancelBind = function(opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    }
    ;
    pomelo.getOnlineUser = function(opts, cb) {
        request("getOnlineUser", opts, cb)
    }
    ;
    pomelo.disconnect = function() {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    }
    ;
    pomelo.ackMessage = function(domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"), I0x = c0x("nej.ut"), l0x = c0x("nm.x"), dE2x = c0x("nm.u"), q0x = c0x("nm.d"), Rq4u = c0x("pomelo"), U0x = 0, b0x, L0x;
    q0x.fp2x({
        "polling-init": {
            url: "/api/push/init",
            format: function(Q0x) {
                U0x = 2;
                var tc7V = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }
                  , j0x = Q0x.account || bb1x
                  , do2x = GUser.userId;
                Rq4u.init(tc7V.host, tc7V.port, true, this.cxJ8B.f0x(this, {
                    user: do2x,
                    nonce: j0x.nonce,
                    domain: tc7V.domain,
                    productKey: tc7V.key,
                    signature: j0x.signature,
                    expire_time: j0x.expireTime
                }))
            },
            onerror: function() {
                return this.bxR4V()
            }
        }
    });
    q0x.Dv0x = NEJ.C();
    b0x = q0x.Dv0x.N0x(q0x.hJ3x);
    b0x.cw1x = function() {
        var ru6o = !1;
        return function(e0x) {
            if (!ru6o) {
                ru6o = !0
            }
            this.cE1x(e0x);
            Rq4u.on("specify", this.qy6s.f0x(this));
            Rq4u.on("broadcast", this.qy6s.f0x(this))
        }
    }();
    b0x.qy6s = function(d0x) {
        k0x.bd1x(d0x, function(bG1x) {
            h0x.z0x(q0x.Dv0x, "message", bG1x)
        }, this)
    }
    ;
    b0x.bxR4V = function() {
        var bA1x = 500;
        return function() {
            U0x = 0;
            Rq4u.disconnect();
            if (bA1x > 6e4)
                bA1x = 500;
            bA1x *= 2
        }
    }();
    b0x.cxJ8B = function(e0x, ca1x) {
        if (!!ca1x) {
            return this.bxR4V()
        }
        U0x = 3;
        Rq4u.registerAndBind(e0x, function(m0x) {
            if (m0x.code != 200) {
                return this.bxR4V()
            }
            U0x = 4
        }
        .f0x(this))
    }
    ;
    b0x.cGh0x = function() {
        dE2x.cxG8y.gm3x().cGi0x()
    }
    ;
    b0x.cGj0x = function() {
        dE2x.cxG8y.gm3x().cGk0x()
    }
    ;
    b0x.bxX4b = function() {
        var ru6o = !1;
        return function() {
            if (ru6o)
                return;
            ru6o = !0;
            this.cp1x("polling-init", {})
        }
    }();
    I0x.fK2x.A0x({
        event: "message",
        element: q0x.Dv0x
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), v0x = c0x("nej.j"), dy2x = c0x("nej.p"), k0x = c0x("nej.u"), n0x = c0x("nm.l"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), cy1x = c0x("api"), b0x, L0x;
    var ge3x = a9j.jm4q('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n0x.bxY4c = NEJ.C();
    b0x = n0x.bxY4c.N0x(n0x.eo2x);
    L0x = n0x.bxY4c.cs1x;
    b0x.bl1x = function(e0x) {
        e0x.title = "意见反馈";
        this.bn1x(e0x)
    }
    ;
    b0x.ch1x = function() {
        this.cf1x = ge3x
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        this.hE3x = {};
        var KA2x = a9j.H0x;
        var Id1x = h0x.s0x;
        this.hE3x.submit_btn = KA2x(this.o0x, "u-btn2")[0];
        this.hE3x.cancle_btn = KA2x(this.o0x, "u-btn2")[1];
        this.hE3x.prompt_msg = KA2x(this.o0x, "u-err")[0];
        this.hE3x.zs = KA2x(this.o0x, "zs")[0];
        a9j.ba1x(this.hE3x.zs, "display", "none");
        this.hE3x.fb_txt = KA2x(this.o0x, "u-txt")[0];
        this.hE3x.contact = KA2x(this.o0x, "u-txt")[1];
        a9j.gr3x(this.hE3x.fb_txt, "holder");
        a9j.gr3x(this.hE3x.contact, "holder");
        if (a9j.bE1x(this.hE3x.fb_txt.parentNode, "holder-parent")) {
            a9j.ba1x(this.hE3x.fb_txt.parentNode, "display", "block")
        }
        if (a9j.bE1x(this.hE3x.contact.parentNode, "holder-parent")) {
            a9j.ba1x(this.hE3x.contact.parentNode, "display", "block")
        }
        Id1x(this.hE3x.submit_btn, "click", this.cxC8u.f0x(this));
        Id1x(this.hE3x.cancle_btn, "click", this.cxB8t.f0x(this));
        Id1x(this.hE3x.prompt_msg, "msgShow", this.cxA8s.f0x(this));
        Id1x(this.hE3x.fb_txt, "keyup", this.wf8X.f0x(this));
        Id1x(this.hE3x.fb_txt, "input", this.fW3x.f0x(this));
        Id1x(this.hE3x.contact, "keyup", this.cxz8r.f0x(this));
        Id1x(this.hE3x.contact, "input", this.bHq7j.f0x(this));
        this.kI4M = q0x.hO3x.A0x()
    }
    ;
    b0x.cxC8u = function(d0x) {
        h0x.bg1x(d0x);
        if (this.cQ1x())
            return;
        var bo1x = this.hE3x.fb_txt.value.trim();
        var bq1x = bo1x.length;
        var e0x = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bHF7y = this.hE3x.contact.value.trim();
        var bcF8x = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l0x.bpk2x(),
            contact: bHF7y
        };
        var j0x = {
            content: bo1x,
            client: "web",
            xInfo: JSON.stringify(bcF8x)
        }
          , on5s = this.kI4M.cDt0x();
        if (on5s && on5s.length) {
            j0x.log = on5s.join("\n")
        }
        if (bq1x == 0) {
            this.hE3x.prompt_msg.innerHTML = "反馈内容不能为空";
            a9j.ba1x(this.hE3x.prompt_msg, "display", "block");
            return
        }
        if (bHF7y.length > 100) {
            this.hE3x.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a9j.ba1x(this.hE3x.prompt_msg, "display", "block");
            return
        }
        this.cQ1x(true);
        e0x.data = k0x.cD1x(j0x);
        e0x.onload = this.cxy8q.f0x(this);
        e0x.onerror = this.jb3x.f0x(this);
        v0x.bm1x("/api/feedback/web", e0x)
    }
    ;
    b0x.fW3x = function(d0x) {
        var bq1x = this.hE3x.fb_txt.value.trim().length;
        if (bq1x > 0)
            a9j.ba1x(this.hE3x.prompt_msg, "display", "none");
        dy2x.dr2x.browser == "ie" && dy2x.dr2x.version < "7.0" ? setTimeout(this.gg3x.f0x(this), 0) : this.gg3x()
    }
    ;
    b0x.wf8X = function(d0x) {
        if (d0x.keyCode === 8)
            this.gg3x()
    }
    ;
    b0x.gg3x = function() {
        var bq1x = this.hE3x.fb_txt.value.trim().length;
        this.hE3x.zs.innerHTML = !bq1x ? "0/140" : bq1x + "/140"
    }
    ;
    b0x.bHq7j = function(d0x) {
        var bq1x = this.hE3x.contact.value.trim().length;
        if (bq1x > 0)
            a9j.ba1x(this.hE3x.prompt_msg, "display", "none")
    }
    ;
    b0x.cxz8r = function(d0x) {
        if (d0x.keyCode === 8)
            this.bHq7j()
    }
    ;
    b0x.cxB8t = function(d0x) {
        h0x.cn1x(d0x);
        this.bt1x()
    }
    ;
    b0x.cxA8s = function(d0x) {
        var g0x = h0x.X1x(d0x);
        g0x.innerHTML = "请输入反馈内容"
    }
    ;
    b0x.cGm0x = function(cGn0x) {
        var g0x = h0x.X1x(d0x);
        g0x.innerHTML = ""
    }
    ;
    b0x.cxy8q = function(m0x) {
        this.cQ1x(false);
        this.bt1x();
        n0x.Z1x.J0x({
            tip: "意见发送成功",
            autoclose: true
        })
    }
    ;
    b0x.jb3x = function(m0x) {
        this.cQ1x(false);
        n0x.Z1x.J0x({
            tip: "意见发送失败",
            autoclose: true
        })
    }
    ;
    b0x.cQ1x = function(db1x) {
        return this.dS2x(this.hE3x.submit_btn, db1x, "发送意见", "发送中...")
    }
    ;
    b0x.J0x = function() {
        L0x.J0x.call(this);
        this.cQ1x(false);
        this.hE3x.fb_txt.value = "";
        this.hE3x.contact.value = "";
        a9j.ba1x(this.hE3x.prompt_msg, "display", "none");
        this.gg3x()
    }
    ;
    l0x.cxt8l = function(e0x) {
        e0x = e0x || {};
        if (e0x.title === undefined)
            e0x.title = "意见反馈";
        n0x.bxY4c.J0x(e0x)
    }
    ;
    cy1x.feedback = l0x.feedback = l0x.cxt8l
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, O0x = c0x("nej.ui"), b0x;
    if (!!O0x.xR8J)
        return;
    O0x.xR8J = NEJ.C();
    b0x = O0x.xR8J.N0x(O0x.el2x);
    b0x.cw1x = function() {
        this.gY3x = this.bIE7x();
        this.cE1x()
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.cq1x = e0x.index;
        this.gz3x = e0x.total;
        this.hw3x = e0x.range;
        this.gI3x(e0x.data)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        delete this.bk1x;
        delete this.cq1x;
        delete this.gz3x;
        delete this.hw3x
    }
    ;
    b0x.iA3x = br1x;
    b0x.bIE7x = function() {
        var gG3x = +(new Date);
        return function() {
            return "itm-" + ++gG3x
        }
    }();
    b0x.Fp0x = function() {
        return this.gY3x
    }
    ;
    b0x.ii3x = function() {
        return this.bk1x
    }
    ;
    b0x.gI3x = function(j0x) {
        this.bk1x = j0x || {};
        this.iA3x(this.bk1x)
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), O0x = c0x("nej.ui"), b0x, L0x;
    if (!!O0x.vs7l)
        return;
    O0x.vs7l = NEJ.C();
    b0x = O0x.vs7l.N0x(O0x.xR8J);
    L0x = O0x.vs7l.cs1x;
    b0x.bl1x = function(e0x) {
        this.cxs8k = e0x.pkey || "id";
        this.bn1x(e0x)
    }
    ;
    b0x.HY1x = function(j0x) {
        this.z0x("ondelete", {
            ext: j0x,
            id: this.Fp0x(),
            data: this.ii3x(),
            body: this.lB4F()
        })
    }
    ;
    b0x.sY7R = function(j0x) {
        this.z0x("onupdate", {
            ext: j0x,
            id: this.Fp0x(),
            data: this.ii3x(),
            body: this.lB4F()
        })
    }
    ;
    b0x.gI3x = function(j0x) {
        L0x.gI3x.apply(this, arguments);
        this.gY3x = this.bk1x[this.cxs8k] || this.bIE7x()
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, fy2x = NEJ.R, a9j = c0x("nej.e"), k0x = c0x("nej.u"), O0x = c0x("nej.ui"), b0x, iX3x, bxG4K;
    if (!!O0x.bxF4J)
        return;
    O0x.bxF4J = NEJ.C();
    b0x = O0x.bxF4J.N0x(O0x.el2x);
    b0x.bl1x = function(e0x) {
        this.bdq8i = NEJ.X({}, e0x);
        this.fT3x = NEJ.X({}, e0x);
        delete this.bdq8i.onchange;
        this.fT3x.onchange = this.fY3x.f0x(this);
        this.bn1x(e0x);
        this.cxr8j({
            number: e0x.number,
            label: e0x.label || bb1x
        })
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        if (!!this.ll4p) {
            this.ll4p.T0x();
            delete this.ll4p
        }
        delete this.bdq8i;
        delete this.fT3x;
        this.cxq8i();
        this.o0x.innerHTML = "&nbsp;"
    }
    ;
    b0x.ch1x = function() {
        this.mj4n = iX3x
    }
    ;
    b0x.cxr8j = function(j0x) {
        a9j.dA2x(this.o0x, bxG4K, j0x);
        var gG3x = a9j.Mi2x();
        this.fT3x.list = a9j.H0x(this.o0x, "js-i-" + gG3x);
        this.fT3x.pbtn = (a9j.H0x(this.o0x, "js-p-" + gG3x) || fy2x)[0];
        this.fT3x.nbtn = (a9j.H0x(this.o0x, "js-n-" + gG3x) || fy2x)[0]
    }
    ;
    b0x.bW1x = function() {
        this.ci1x()
    }
    ;
    b0x.cGq0x = function(j0x) {
        return a9j.cd1x(bxG4K, j0x)
    }
    ;
    b0x.fY3x = function(d0x) {
        if (this.Nl3x)
            return;
        var r0x = d0x.index
          , cB1x = d0x.total;
        this.Nl3x = !0;
        this.No3x(r0x, cB1x);
        k0x.bd1x(this.ZB7u, function(tj7c) {
            tj7c.No3x(r0x, cB1x)
        });
        this.Nl3x = !1;
        this.z0x("onchange", d0x)
    }
    ;
    b0x.f0x = function(bI1x) {
        bI1x = a9j.B0x(bI1x);
        if (!bI1x)
            return this;
        var ct1x = NEJ.X({}, this.bdq8i);
        ct1x.parent = bI1x;
        ct1x.index = this.tm7f();
        ct1x.total = this.kw4A();
        var tj7c = this.constructor.A0x(ct1x);
        tj7c.wq8i("onchange", this.fT3x.onchange);
        if (!this.ZB7u)
            this.ZB7u = [];
        this.ZB7u.push(tj7c);
        return this
    }
    ;
    b0x.cxq8i = function() {
        var bkA1x = function(tj7c, r0x, i0x) {
            tj7c.T0x();
            i0x.splice(r0x, 1)
        };
        return function() {
            k0x.nk5p(this.ZB7u, bkA1x)
        }
    }();
    b0x.lb4f = function(r0x) {
        if (!this.ll4p)
            return;
        this.ll4p.lb4f(r0x)
    }
    ;
    b0x.tm7f = function() {
        if (!this.ll4p)
            return 1;
        return this.ll4p.tm7f()
    }
    ;
    b0x.kw4A = function() {
        if (!this.ll4p)
            return 1;
        return this.ll4p.kw4A()
    }
    ;
    b0x.No3x = function(r0x, cB1x) {
        if (!this.ll4p)
            return;
        this.ll4p.No3x(r0x, cB1x)
    }
    ;
    b0x.buA4E = function(cB1x) {
        if (!this.ll4p)
            return;
        this.ll4p.buA4E(cB1x)
    }
    ;
    iX3x = a9j.to7h(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bxG4K = a9j.eB2x('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), O0x = c0x("nej.ut"), b0x;
    if (!!O0x.bdT8L)
        return;
    O0x.bdT8L = NEJ.C();
    b0x = O0x.bdT8L.N0x(O0x.cJ1x);
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.bdV8N = e0x.pbtn;
        this.cr1x = e0x.nbtn;
        this.bee8W = e0x.sbtn;
        this.WU5Z = e0x.ebtn;
        this.ji3x = e0x.event || "click";
        this.kQ4U = e0x.selected || "js-selected";
        this.nV5a = e0x.disabled || "js-disabled";
        this.cxo8g(e0x.list);
        this.No3x(e0x.index || 1, e0x.total || 1)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        delete this.bU1x;
        delete this.ji3x;
        delete this.bdV8N;
        delete this.cr1x;
        delete this.bee8W;
        delete this.WU5Z;
        delete this.bLh8Z;
        delete this.gz3x;
        delete this.cq1x;
        delete this.kQ4U;
        delete this.nV5a
    }
    ;
    b0x.cxo8g = function() {
        var brG3x = function(g0x) {
            this.bU1x.push(g0x);
            this.bX1x([[g0x, this.ji3x, this.cv1x.eA2x(this, 0)]])
        };
        return function(i0x) {
            this.bU1x = [];
            this.bX1x([[this.bdV8N, "click", this.cv1x.eA2x(this, -1)], [this.cr1x, "click", this.cv1x.eA2x(this, 1)], [this.bee8W, "click", this.cv1x.eA2x(this, -2)], [this.WU5Z, "click", this.cv1x.eA2x(this, 2)]]);
            k0x.bd1x(i0x, brG3x, this)
        }
    }();
    b0x.He1x = function(g0x, r0x) {
        if (r0x == null) {
            g0x.innerText = "";
            a9j.ba1x(g0x, "display", "none");
            a9j.x0x(g0x, this.kQ4U)
        } else {
            g0x.innerText = r0x;
            a9j.ba1x(g0x, "display", "");
            r0x == this.cq1x ? a9j.y0x(g0x, this.kQ4U) : a9j.x0x(g0x, this.kQ4U)
        }
    }
    ;
    b0x.bro3x = function() {
        if (this.cq1x <= 1) {
            a9j.y0x(this.bdV8N, this.nV5a);
            a9j.y0x(this.bee8W, this.nV5a)
        } else {
            a9j.x0x(this.bdV8N, this.nV5a);
            a9j.x0x(this.bee8W, this.nV5a)
        }
        if (this.cq1x >= this.gz3x) {
            a9j.y0x(this.cr1x, this.nV5a);
            a9j.y0x(this.WU5Z, this.nV5a)
        } else {
            a9j.x0x(this.cr1x, this.nV5a);
            a9j.x0x(this.WU5Z, this.nV5a)
        }
    }
    ;
    b0x.WI5N = br1x;
    b0x.bpO2x = function() {
        this.WI5N();
        this.bro3x();
        this.z0x("onchange", {
            last: this.bLh8Z,
            total: this.gz3x,
            index: this.cq1x,
            ext: this.boO2x
        })
    }
    ;
    b0x.bLR8J = function(r0x) {
        r0x = parseInt(r0x);
        if (isNaN(r0x) || this.gz3x == null)
            return !1;
        r0x = Math.max(1, Math.min(r0x, this.gz3x));
        this.bLh8Z = this.cq1x;
        this.cq1x = r0x;
        return !0
    }
    ;
    b0x.boA2x = function(cB1x) {
        cB1x = parseInt(cB1x);
        if (isNaN(cB1x) || cB1x < 1)
            return !1;
        this.gz3x = cB1x;
        return !0
    }
    ;
    b0x.cv1x = function(d0x, fa2x) {
        h0x.cn1x(d0x);
        var F0x = h0x.X1x(d0x);
        if (!F0x || a9j.bE1x(F0x, this.kQ4U) || a9j.bE1x(F0x, this.nV5a))
            return;
        var r0x = F0x.innerText;
        switch (fa2x) {
        case 1:
        case -1:
            r0x = this.cq1x + fa2x;
            break;
        case 2:
            r0x = this.gz3x;
            break;
        case -2:
            r0x = 1;
            break
        }
        this.lb4f(r0x)
    }
    ;
    b0x.tm7f = function() {
        return this.cq1x
    }
    ;
    b0x.lb4f = function(r0x) {
        var cxn8f = this.cq1x;
        this.bLR8J(r0x);
        if (cxn8f != this.cq1x)
            this.bpO2x();
        return this
    }
    ;
    b0x.kw4A = function() {
        return this.gz3x
    }
    ;
    b0x.RA4E = function(cB1x) {
        if (this.boA2x(cB1x) && this.cq1x != null) {
            this.cq1x = 1;
            this.bpO2x()
        }
        return this
    }
    ;
    b0x.buA4E = function(cB1x) {
        if (this.boA2x(cB1x)) {
            this.WI5N();
            this.bro3x()
        }
        return this
    }
    ;
    b0x.No3x = function(r0x, cB1x) {
        if (!this.boA2x(cB1x) || !this.bLR8J(r0x))
            return this;
        this.bpO2x();
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), k0x = c0x("nej.u"), cZ1x = c0x("nej.x"), O0x = c0x("nej.ut"), b0x;
    if (!!O0x.OG3x)
        return;
    O0x.OG3x = NEJ.C();
    b0x = O0x.OG3x.N0x(O0x.bdT8L);
    b0x.cw1x = function() {
        this.cE1x();
        var g0x = a9j.dj2x("span", "zdot");
        g0x.innerText = "...";
        this.bbb7U = [g0x.cloneNode(true), g0x]
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        this.bMH8z()
    }
    ;
    b0x.bMH8z = function() {
        a9j.mS5X(this.bbb7U[0]);
        a9j.mS5X(this.bbb7U[1])
    }
    ;
    b0x.WI5N = function() {
        this.boO2x = {
            last: !1,
            first: !1,
            list: this.bU1x
        };
        this.bMH8z();
        this.He1x(this.bU1x[0], 1);
        var bM1x = 1
          , bq1x = this.bU1x.length;
        if (this.gz3x < bq1x) {
            for (var rj6d; bM1x < bq1x; bM1x++) {
                rj6d = bM1x + 1;
                this.He1x(this.bU1x[bM1x], rj6d > this.gz3x ? null : rj6d)
            }
            return
        }
        if (this.cq1x > 1) {
            var cz1x = Math.floor((bq1x - 2) / 2)
              , cxm8e = this.gz3x - bq1x + 2
              , hA3x = Math.max(2, this.cq1x - cz1x);
            if (this.gz3x >= bq1x) {
                hA3x = Math.min(hA3x, cxm8e)
            }
            if (hA3x > 2) {
                this.bU1x[0].insertAdjacentElement("afterEnd", this.bbb7U[0]);
                this.boO2x.first = !0
            }
            for (var r0x; ; bM1x++) {
                r0x = hA3x + bM1x - 1;
                if (r0x > this.cq1x)
                    break;
                this.He1x(this.bU1x[bM1x], r0x)
            }
        }
        if (this.cq1x < this.gz3x) {
            var r0x, hA3x = this.cq1x + 1;
            for (var i = 0, l = bq1x - 2; ; i++,
            bM1x++) {
                r0x = hA3x + i;
                if (bM1x > l || r0x > this.gz3x)
                    break;
                this.He1x(this.bU1x[bM1x], r0x)
            }
            if (r0x < this.gz3x) {
                this.bU1x[bM1x].insertAdjacentElement("beforeBegin", this.bbb7U[1]);
                this.boO2x.last = !0
            }
            if (r0x <= this.gz3x) {
                this.He1x(this.bU1x[bM1x++], this.gz3x)
            }
        }
        for (; bM1x < bq1x; bM1x++) {
            this.He1x(this.bU1x[bM1x])
        }
    }
    ;
    a9j.cxl8d = cZ1x.cxl8d = function(bI1x, e0x) {
        var C0x = a9j.lP4T(bI1x);
        if (!C0x)
            return null;
        if (!O0x.beT8L(C0x, O0x.OG3x)) {
            e0x = e0x || {};
            var i0x = !e0x.clazz ? a9j.dk2x(C0x) : a9j.H0x(C0x, e0x.clazz);
            e0x.pbtn = i0x.shift();
            e0x.nbtn = i0x.pop();
            e0x.list = i0x;
            delete e0x.clazz
        }
        return O0x.beT8L(C0x, O0x.OG3x, e0x || bb1x)
    }
    ;
    cZ1x.isChange = !0
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, fy2x = NEJ.R, a9j = c0x("nej.e"), k0x = c0x("nej.u"), I0x = c0x("nej.ut"), O0x = c0x("nej.ui"), b0x, L0x, ge3x;
    if (!!O0x.OQ3x)
        return;
    O0x.OQ3x = NEJ.C();
    b0x = O0x.OQ3x.N0x(O0x.bxF4J);
    L0x = O0x.OQ3x.cs1x;
    b0x.bl1x = function(e0x) {
        e0x.number = parseInt(e0x.number) || 9;
        this.bn1x(e0x);
        this.ll4p = I0x.OG3x.A0x(this.fT3x)
    }
    ;
    b0x.fY3x = function(d0x) {
        if (!!this.bdq8i.noend) {
            var bMZ8R = d0x.ext || bb1x
              , i0x = bMZ8R.list || fy2x;
            if (bMZ8R.last) {
                a9j.ba1x(i0x[i0x.length - 1], "display", "none")
            }
        }
        L0x.fY3x.apply(this, arguments)
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), bc1x = c0x("nej.ui"), O0x = c0x("nej.ut"), b0x;
    if (!!O0x.bbX7Q)
        return;
    O0x.bbX7Q = NEJ.C();
    b0x = O0x.bbX7Q.N0x(O0x.cJ1x);
    b0x.bl1x = function(e0x) {
        this.iU3x = {};
        this.bn1x(e0x);
        this.il3x = a9j.B0x(e0x.parent);
        this.ff2x = {
            parent: this.il3x
        };
        this.oH5M = parseInt(e0x.limit) || 10;
        this.yN8F = parseInt(e0x.first) || this.oH5M;
        this.cxk8c(e0x.item);
        this.cxj8b(e0x.cache || bb1x);
        this.cxi8a(e0x.pager || bb1x);
        this.gI3x()
    }
    ;
    b0x.bC1x = function() {
        this.z0x("onbeforerecycle");
        this.Pk3x();
        this.bF1x();
        if (this.iU3x.clear) {
            this.S0x.vw7p(this.iU3x.key)
        }
        this.S0x.T0x();
        if (!!this.jy4C) {
            this.jy4C.T0x();
            delete this.jy4C
        }
        delete this.bOa8S;
        delete this.fT3x;
        delete this.bcD8v;
        delete this.S0x;
        delete this.il3x;
        delete this.Pr3x;
        delete this.ff2x;
        delete this.iU3x
    }
    ;
    b0x.bOr9i = function() {
        var df2x = /\{(.*?)\}/gi
          , cxh8Z = function(oW5b, j0x) {
            return (oW5b || "{id}{seed}").replace(df2x, function($1, $2) {
                var D0x = j0x[$2];
                return D0x == null ? $1 : D0x
            })
        };
        return function(C0x) {
            var K0x = cxh8Z(this.ff2x.jstIdTempalte, {
                id: C0x,
                seed: a9j.Mi2x()
            });
            if (!this.ff2x.jstIdType) {
                return a9j.B0x(K0x)
            } else if (this.ff2x.jstIdType == 1) {
                return (a9j.H0x(this.il3x, K0x) || [])[0]
            }
        }
    }();
    b0x.BT9K = function(bM1x, bi1x, gc3x, bq1x) {
        var m0x = {
            index: 1,
            total: 1
        };
        if (bi1x >= bM1x) {
            m0x.index = Math.floor((bi1x - bM1x) / gc3x) + 2
        }
        if (bq1x > bM1x) {
            m0x.total = Math.ceil((bq1x - bM1x) / gc3x) + 1
        }
        return m0x
    }
    ;
    b0x.bOF9w = function(K0x) {
        delete this.Pr3x;
        this.KI2x = K0x;
        this.bX1x([[this.il3x, "click", this.cxg8Y.f0x(this)]])
    }
    ;
    b0x.cxk8c = function(p0x) {
        if (k0x.fC2x(p0x)) {
            this.bOF9w(p0x);
            return
        }
        NEJ.X(this.ff2x, p0x);
        var ec2x = this.ff2x.klass;
        delete this.ff2x.klass;
        if (k0x.fC2x(ec2x)) {
            this.bOF9w(ec2x);
            return
        }
        delete this.KI2x;
        this.Pr3x = ec2x;
        this.ff2x.ondelete = this.z0x.f0x(this, "ondelete");
        this.ff2x.onupdate = this.z0x.f0x(this, "onupdate")
    }
    ;
    b0x.cxj8b = function(R0x) {
        var ec2x = R0x.klass
          , kr4v = NEJ.X({}, R0x);
        this.iU3x.key = kr4v.lkey;
        this.iU3x.data = kr4v.data || {};
        this.iU3x.clear = !!kr4v.clear;
        this.ff2x.pkey = kr4v.key || "id";
        kr4v.onlistload = this.bng2x.f0x(this);
        kr4v.onpullrefresh = this.cxf8X.f0x(this);
        if (!!ec2x && "onlistchange"in ec2x) {
            this.bX1x([[ec2x, "listchange", this.bmu2x.f0x(this)]])
        } else {
            kr4v.onitemadd = this.bfn8f.f0x(this);
            kr4v.onitemdelete = this.VX5c.f0x(this);
            kr4v.onitemupdate = this.bPF9w.f0x(this)
        }
        this.S0x = (ec2x || O0x.RO4S).A0x(kr4v);
        if (R0x.total != null) {
            this.S0x.RA4E(this.iU3x.key, R0x.total)
        }
        if (!!R0x.list) {
            this.S0x.wh8Z(this.iU3x.key, R0x.list)
        }
    }
    ;
    b0x.cxi8a = function(tj7c) {
        this.bOa8S = tj7c.klass || bc1x.OQ3x;
        this.fT3x = NEJ.X({}, tj7c);
        if (k0x.eL2x(tj7c.parent)) {
            this.fT3x.parent = tj7c.parent[0];
            this.Qm3x = tj7c.parent.slice(1);
            if (!this.Qm3x || !this.Qm3x.length) {
                delete this.Qm3x
            }
        }
        delete this.fT3x.klass
    }
    ;
    b0x.Pk3x = function() {
        var gL3x = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.z0x("onbeforelistclear", {
                parent: this.il3x
            });
            if (!!this.fQ3x && this.fQ3x.length > 0) {
                this.fQ3x = this.Pr3x.T0x(this.fQ3x);
                delete this.fQ3x
            }
            if (gL3x.test(this.il3x.tagName)) {
                a9j.bVz1x(this.il3x)
            } else {
                this.il3x.innerHTML = ""
            }
        }
    }();
    b0x.bkG1x = function(Zl6f) {
        if (!!this.fT3x.fixed)
            return;
        a9j.ba1x(this.fT3x.parent, "display", Zl6f);
        k0x.bd1x(this.Qm3x, function(bI1x) {
            a9j.ba1x(bI1x, "display", Zl6f)
        }, this)
    }
    ;
    b0x.bks1x = function() {
        var r0x = this.fT3x.index || 1;
        delete this.fT3x.index;
        if (!!this.jy4C) {
            r0x = this.jy4C.tm7f()
        }
        this.Cg9X({
            last: r0x,
            index: r0x
        })
    }
    ;
    b0x.Cg9X = function(d0x) {
        this.z0x("onpagechange", d0x)
    }
    ;
    b0x.bQh9Y = function(bi1x) {
        this.iU3x.offset = bi1x;
        this.XR6L()
    }
    ;
    b0x.bQi9Z = function(e0x) {
        return e0x
    }
    ;
    b0x.XR6L = function() {
        this.SB4F();
        var j0x = this.iU3x.data;
        j0x.offset = this.iU3x.offset;
        var qt6n = j0x.offset == 0;
        j0x.total = qt6n;
        this.iU3x.limit = qt6n ? this.yN8F : this.oH5M;
        j0x.limit = this.iU3x.limit;
        this.S0x.lO4S(this.bQi9Z(NEJ.X({}, this.iU3x)))
    }
    ;
    b0x.bng2x = function(e0x) {
        if (e0x.key != this.iU3x.key || e0x.offset != this.iU3x.offset)
            return;
        this.ZQ7J();
        var i0x = this.S0x.hD3x(e0x.key);
        if (!i0x || !i0x.length) {
            this.bjT1x();
            return
        }
        var gc3x = e0x.limit
          , bi1x = e0x.offset;
        if (this.bjf0x(i0x, bi1x, gc3x))
            return;
        this.z0x("onbeforelistrender", {
            list: i0x,
            offset: bi1x,
            parent: this.il3x
        });
        if (!!this.KI2x) {
            this.ff2x.xlist = i0x;
            this.ff2x.beg = bi1x;
            this.ff2x.end = Math.min(i0x.length, bi1x + gc3x) - 1;
            this.ff2x.act = "list";
            var dV2x = a9j.cd1x(this.KI2x, this.ff2x);
            this.Ub5g(dV2x)
        } else {
            this.ff2x.limit = gc3x;
            this.ff2x.offset = bi1x;
            var hu3x = a9j.CH0x(i0x, this.Pr3x, this.ff2x);
            this.Uv5A(hu3x)
        }
        this.z0x("onafterlistrender", {
            list: i0x,
            offset: bi1x,
            parent: this.il3x
        })
    }
    ;
    b0x.cxf8X = function(e0x) {
        if (!this.bcD8v)
            return;
        delete this.bcD8v;
        this.ZQ7J("onafterpullrefresh");
        this.gI3x()
    }
    ;
    b0x.bQU0x = function(r0x, cB1x) {
        if (!!this.jy4C) {
            var xe8W = this.jy4C.tm7f()
              , cxd8V = this.jy4C.kw4A();
            if (xe8W > cB1x || cB1x != cxd8V) {
                this.jy4C.T0x();
                delete this.jy4C;
                this.Cg9X({
                    last: xe8W,
                    index: Math.min(r0x, cB1x)
                });
                return !0
            }
        } else {
            this.fT3x.index = r0x;
            this.fT3x.total = cB1x;
            this.jy4C = this.bOa8S.A0x(this.fT3x);
            this.jy4C.wq8i("onchange", this.Cg9X.f0x(this));
            k0x.bd1x(this.Qm3x, function(bI1x) {
                this.jy4C.f0x(bI1x)
            }, this)
        }
    }
    ;
    b0x.bcO8G = function() {
        var gG3x = +(new Date);
        return function(j0x) {
            var C0x = j0x[this.ff2x.pkey];
            if (!C0x) {
                j0x["dirty-data"] = !0;
                j0x[this.ff2x.pkey] = "dirty-" + gG3x++
            }
            return j0x
        }
    }();
    b0x.bdE8w = function(j0x) {
        var C0x = j0x[this.ff2x.pkey];
        if (!!j0x["dirty-data"]) {
            delete j0x["dirty-data"];
            delete j0x[this.ff2x.pkey]
        }
        return C0x
    }
    ;
    b0x.beh8Z = function() {
        var cxc8U = function(kW4a, mT5Y) {
            this.il3x.insertAdjacentElement(kW4a, mT5Y)
        };
        return function(kW4a, j0x) {
            var Mu2x = [j0x];
            if (!!this.KI2x) {
                this.ff2x.xlist = Mu2x;
                this.ff2x.beg = 0;
                this.ff2x.end = 0;
                this.ff2x.act = "add";
                this.Ub5g(a9j.cd1x(this.KI2x, this.ff2x), kW4a)
            } else {
                this.ff2x.limit = 1;
                this.ff2x.offset = 0;
                this.ff2x.parent = cxc8U.f0x(this, kW4a);
                var hu3x = a9j.CH0x(Mu2x, this.Pr3x, this.ff2x);
                this.ff2x.parent = this.il3x;
                this.Uv5A(hu3x)
            }
        }
    }();
    b0x.SB4F = br1x;
    b0x.ZQ7J = function(W1x) {
        var d0x = {
            parent: this.il3x
        };
        this.z0x(W1x || "onafterlistload", d0x);
        if (!d0x.stopped) {
            a9j.mS5X(this.cu1x)
        }
    }
    ;
    b0x.bjf0x = br1x;
    b0x.beo8g = function(bG1x, kW4a) {
        if (k0x.fC2x(bG1x)) {
            if (!this.cu1x)
                this.cu1x = a9j.dj2x("div");
            this.cu1x.innerHTML = bG1x
        } else {
            this.cu1x = bG1x
        }
        this.il3x.insertAdjacentElement(kW4a || "beforeEnd", this.cu1x)
    }
    ;
    b0x.zk9b = function(W1x, kx4B, kW4a) {
        var d0x = {
            parent: this.il3x
        };
        this.z0x(W1x, d0x);
        if (!d0x.stopped) {
            this.beo8g(d0x.value || kx4B, kW4a)
        }
    }
    ;
    b0x.bjT1x = br1x;
    b0x.Ub5g = br1x;
    b0x.Uv5A = br1x;
    b0x.cxg8Y = function() {
        var gL3x = /^(?:delete|update)$/;
        return function(d0x) {
            var g0x = h0x.X1x(d0x, "d:action");
            if (!g0x)
                return;
            var V0x = a9j.t0x(g0x, "action");
            if (!gL3x.test(V0x))
                return;
            var C0x = a9j.t0x(g0x, "id");
            if (!C0x)
                return;
            var p0x = this.S0x.eJ2x(C0x);
            if (!p0x)
                return;
            h0x.bg1x(d0x);
            this.z0x("on" + V0x, {
                data: p0x,
                id: p0x[this.ff2x.pkey],
                body: a9j.B0x(this.bOr9i(C0x))
            })
        }
    }();
    b0x.bfn8f = br1x;
    b0x.XP6J = function(d0x) {
        var j0x = d0x.data || {}
          , e0x = {
            data: j0x,
            key: this.iU3x.key,
            id: j0x[this.ff2x.pkey]
        };
        this.z0x("onbeforedelete", e0x);
        this.S0x.Lx2x(e0x)
    }
    ;
    b0x.VX5c = br1x;
    b0x.XN6H = function(d0x) {
        var j0x = d0x.data || {}
          , e0x = {
            data: j0x,
            key: this.iU3x.key
        };
        this.z0x("onbeforeupdate", e0x);
        this.S0x.XU6O(e0x)
    }
    ;
    b0x.bPF9w = function(d0x) {
        this.VJ5O(d0x, "onafterupdate");
        if (d0x.stopped)
            return;
        var C0x = d0x.data[this.ff2x.pkey];
        if (!!this.fQ3x) {
            var p0x = a9j.bCH6B(C0x);
            if (!!p0x)
                p0x.gI3x(d0x.data)
        } else {
            var g0x = a9j.B0x(C0x + "" + a9j.Mi2x());
            if (!g0x)
                return;
            var i0x = this.S0x.hD3x(d0x.key)
              , r0x = k0x.di2x(i0x, d0x.data);
            if (r0x < 0)
                return;
            this.ff2x.list = i0x;
            this.ff2x.beg = r0x;
            this.ff2x.end = r0x;
            this.ff2x.act = "update";
            var dV2x = a9j.cd1x(this.KI2x, this.ff2x);
            g0x.insertAdjacentHTML("afterEnd", dV2x);
            a9j.cL1x(g0x)
        }
    }
    ;
    b0x.VJ5O = function(d0x, W1x) {
        var p0x = d0x.data;
        if (!p0x || p0x[this.ff2x.pkey] == null) {
            this.z0x("onerror", d0x);
            d0x.stopped = !0
        }
        if (!d0x.stopped) {
            this.z0x(W1x, d0x)
        }
    }
    ;
    b0x.bin0x = br1x;
    b0x.bip0x = br1x;
    b0x.bmu2x = function(d0x) {
        if (d0x.key != this.iU3x.key)
            return;
        switch (d0x.action) {
        case "add":
            this.bfn8f(d0x);
            break;
        case "delete":
            this.VX5c(d0x);
            break;
        case "update":
            this.bPF9w(d0x);
            break;
        case "refresh":
            this.gI3x();
            break;
        case "unshift":
            this.bip0x(d0x.offset, d0x.limit);
            break;
        case "append":
            this.bin0x(d0x.offset, d0x.limit);
            break
        }
    }
    ;
    b0x.qe6Y = function(p0x) {
        this.XN6H({
            data: p0x
        })
    }
    ;
    b0x.mB5G = function(p0x) {
        this.XP6J({
            data: p0x
        })
    }
    ;
    b0x.ud7W = function(p0x) {
        this.S0x.jI4M({
            data: p0x,
            key: this.iU3x.key
        })
    }
    ;
    b0x.uc7V = function() {
        return this.S0x
    }
    ;
    b0x.biG0x = function(j0x) {
        this.beh8Z("afterBegin", this.bcO8G(j0x));
        return this.bdE8w(j0x)
    }
    ;
    b0x.bRM0x = function(j0x) {
        this.beh8Z("beforeEnd", this.bcO8G(j0x));
        return this.bdE8w(j0x)
    }
    ;
    b0x.gI3x = function() {
        this.Pk3x();
        this.bks1x()
    }
    ;
    b0x.cGr0x = function() {
        this.S0x.vw7p(this.iU3x.key);
        this.gI3x()
    }
    ;
    b0x.blp1x = function() {
        if (!!this.bcD8v)
            return;
        this.bcD8v = !0;
        this.zk9b("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        var i0x = this.S0x.hD3x(this.iU3x.key);
        if (i0x && i0x[0]) {
            this.iU3x.data.aftertime = i0x[0].eventTime || ""
        }
        this.S0x.blp1x({
            key: this.iU3x.key,
            data: this.iU3x.data
        })
    }
    ;
    b0x.kw4A = function() {
        return this.S0x.kw4A(this.iU3x.key)
    }
    ;
    b0x.bRP1x = function() {
        return this.jy4C
    }
    ;
    b0x.Ye6Y = function() {
        return this.S0x.Ye6Y(this.iU3x.key)
    }
    ;
    b0x.cxa8S = function() {
        return this.fQ3x
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, fy2x = NEJ.R, k0x = c0x("nej.u"), a9j = c0x("nej.e"), O0x = c0x("nej.ut"), b0x, L0x;
    if (!!O0x.kk4o)
        return;
    O0x.kk4o = NEJ.C();
    b0x = O0x.kk4o.N0x(O0x.bbX7Q);
    L0x = O0x.kk4o.cs1x;
    b0x.BT9K = function(bi1x, bq1x) {
        return L0x.BT9K.call(this, this.yN8F, bi1x, this.oH5M, bq1x)
    }
    ;
    b0x.bjb0x = function(r0x) {
        var bi1x = 0;
        if (r0x > 1)
            bi1x = this.yN8F + (r0x - 2) * this.oH5M;
        return bi1x
    }
    ;
    b0x.Cg9X = function(d0x) {
        L0x.Cg9X.apply(this, arguments);
        if (!d0x.stopped) {
            this.bQh9Y(this.bjb0x(d0x.index))
        }
    }
    ;
    b0x.SB4F = function() {
        this.Pk3x();
        this.zk9b("onbeforelistload", "列表加载中...")
    }
    ;
    b0x.ZQ7J = function() {
        L0x.ZQ7J.apply(this, arguments);
        this.Pk3x()
    }
    ;
    b0x.bjf0x = function(i0x, bi1x, gc3x) {
        var bx1x = this.BT9K(bi1x, i0x.length);
        if (this.bQU0x(bx1x.index, bx1x.total))
            return !0;
        this.bkG1x(bx1x.total > 1 ? "" : "none")
    }
    ;
    b0x.bjT1x = function() {
        this.zk9b("onemptylist", "没有列表数据！")
    }
    ;
    b0x.beo8g = function(bG1x, kW4a) {
        if (!kW4a && k0x.fC2x(bG1x)) {
            this.il3x.innerHTML = bG1x;
            return
        }
        L0x.beo8g.apply(this, arguments)
    }
    ;
    b0x.Ub5g = function(dV2x) {
        this.il3x.innerHTML = dV2x
    }
    ;
    b0x.Uv5A = function(hu3x) {
        this.fQ3x = hu3x
    }
    ;
    b0x.bfn8f = function(d0x) {
        this.VJ5O(d0x, "onafteradd");
        if (!d0x.stopped)
            this.gI3x()
    }
    ;
    b0x.VX5c = function(d0x) {
        this.VJ5O(d0x, "onafterdelete");
        if (!d0x.stopped)
            this.gI3x()
    }
    ;
    b0x.bin0x = function(bi1x, gc3x) {
        var r0x = 1;
        if (!!this.jy4C) {
            r0x = this.jy4C.tm7f()
        }
        var jY4c = this.bjb0x(r0x)
          , fX3x = jY4c + (r0x > 1 ? this.oH5M : this.yN8F);
        if (bi1x >= fX3x && !!this.jy4C) {
            var bx1x = this.BT9K(0, this.kw4A());
            this.jy4C.buA4E(bx1x.total);
            this.bkG1x(bx1x.total > 1 ? "" : "none")
        } else {
            this.gI3x()
        }
    }
    ;
    b0x.bip0x = function(bi1x, gc3x) {
        var r0x = 1;
        if (!!this.jy4C) {
            r0x = this.jy4C.tm7f()
        }
        var jY4c = this.bjb0x(r0x)
          , bx1x = this.BT9K(jY4c, this.kw4A());
        this.Cg9X({
            last: r0x,
            index: bx1x.index
        })
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), I0x = c0x("nej.ut"), k0x = c0x("nej.u"), l0x = c0x("nm.x"), q0x = c0x("nm.d"), w0x = c0x("nm.w"), fo2x = 40, b0x, L0x;
    w0x.baP7I = NEJ.C();
    b0x = w0x.baP7I.N0x(I0x.cJ1x);
    L0x = w0x.baP7I.cs1x;
    b0x.cw1x = function() {
        this.cE1x()
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.Tn4r = e0x.inputer;
        this.bjx1x = e0x.tipper;
        this.bX1x([[this.Tn4r, "input", this.fW3x.f0x(this)]])
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        this.LR2x(null, null)
    }
    ;
    b0x.fW3x = function(d0x) {
        if (d0x && d0x.type == "keyup" && (d0x.keyCode != 8 || d0x.keyCode != 68))
            return;
        var W1x = this.Tn4r.value, cGs0x;
        if (l0x.Na3x(W1x) > fo2x) {
            this.Tn4r.value = l0x.AM9D(W1x, fo2x);
            this.LR2x("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.f0x(this))
        } else if (W1x.indexOf("#") >= 0 || W1x.indexOf("@") >= 0) {
            this.LR2x("歌单名不能包含字符“@”和“#”！")
        } else {
            this.LR2x(null, null);
            this.z0x("onchange", {
                value: W1x
            })
        }
    }
    ;
    b0x.cwY8Q = function() {
        this.fW3x()
    }
    ;
    b0x.LR2x = function() {
        var C0x = 0;
        return function(dJ2x, bSE1x) {
            if (!!C0x)
                window.clearTimeout(C0x);
            if (!dJ2x) {
                a9j.y0x(this.bjx1x, "f-vhide");
                this.bSG1x = !1;
                return
            }
            this.bjx1x.innerHTML = '<i class="u-icn u-icn-25"></i>' + dJ2x;
            a9j.x0x(this.bjx1x, "f-vhide");
            this.bSG1x = !0;
            if (k0x.gK3x(bSE1x))
                C0x = window.setTimeout(function() {
                    this.LR2x(null, null);
                    bSE1x()
                }
                .f0x(this), 1e3)
        }
    }();
    b0x.bSH1x = function() {
        if (this.bSG1x)
            return !1;
        if (l0x.kv4z(this.Tn4r.value)) {
            this.LR2x("歌单名不能为空");
            return !1
        }
        return !0
    }
    ;
    b0x.gb3x = function() {
        return this.Tn4r.value
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), v0x = c0x("nej.j"), n0x = c0x("nm.l"), w0x = c0x("nm.w"), bD1x = c0x("nej.ui"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, L0x;
    n0x.Zt6n = NEJ.C();
    b0x = n0x.Zt6n.N0x(n0x.eo2x);
    L0x = n0x.Zt6n.cs1x;
    b0x.cw1x = function() {
        this.cE1x()
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i0x = a9j.H0x(this.o0x, "j-flag");
        this.Yz6t = {
            inputer: i0x[0],
            tipper: i0x[1]
        };
        this.iK3x = {
            onerror: this.bSP1x.f0x(this),
            onitemadd: this.bSP1x.f0x(this)
        };
        this.lN4R = i0x[2];
        h0x.s0x(i0x[2], "click", this.EH0x.f0x(this));
        h0x.s0x(i0x[3], "click", this.De0x.f0x(this));
        h0x.s0x(this.o0x, "keypress", this.bSY1x.f0x(this))
    }
    ;
    b0x.ch1x = function() {
        this.cf1x = "m-wgt-create"
    }
    ;
    b0x.bl1x = function(e0x) {
        e0x.clazz = " m-layer-w2";
        e0x.parent = e0x.parent || document.body;
        e0x.title = "新建歌单";
        e0x.draggable = !0;
        e0x.destroyalbe = !0;
        e0x.mask = true;
        this.bn1x(e0x);
        this.Yz6t.inputer.value = e0x.name || "";
        this.uP7I = w0x.baP7I.A0x(this.Yz6t);
        this.uP7I.cwY8Q();
        this.S0x = q0x.ic3x.A0x(this.iK3x);
        setTimeout(function() {
            this.Yz6t.inputer.focus()
        }
        .f0x(this), 0)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        if (this.uP7I) {
            this.uP7I.T0x();
            delete this.uP7I
        }
        this.sR7K(!1);
        this.Yz6t.inputer.value = ""
    }
    ;
    b0x.sR7K = function(PQ3x) {
        this.oB5G = PQ3x;
        if (PQ3x) {
            this.lN4R.innerHTML = "<i>新建中...</i>";
            a9j.y0x(this.lN4R, "u-btn2-dis")
        } else {
            this.lN4R.innerHTML = "<i>新 建</i>";
            a9j.x0x(this.lN4R, "u-btn2-dis")
        }
    }
    ;
    b0x.EH0x = function() {
        if (this.oB5G || !this.uP7I.bSH1x())
            return;
        var ct1x = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.uP7I.gb3x()
            },
            offset: 1
        };
        this.S0x.jI4M(ct1x);
        this.sR7K(!0)
    }
    ;
    b0x.bSP1x = function(d0x) {
        var bY1x = (d0x.result || bb1x).code;
        if (!bY1x) {
            this.z0x("onsuccess", d0x.data)
        } else {
            this.z0x("onerror", d0x)
        }
        this.bt1x()
    }
    ;
    b0x.De0x = function() {
        this.bt1x()
    }
    ;
    b0x.bSY1x = function(d0x) {
        if (d0x.keyCode == 13)
            this.EH0x()
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), I0x = c0x("nej.ut"), v0x = c0x("nej.j"), l0x = c0x("nm.x"), q0x = c0x("nm.d"), n0x = c0x("nm.l"), b0x, L0x;
    n0x.bpy2x = NEJ.C();
    b0x = n0x.bpy2x.N0x(n0x.eo2x);
    L0x = n0x.bpy2x.cs1x;
    b0x.cw1x = function() {
        this.cE1x()
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i0x = a9j.H0x(this.o0x, "j-flag");
        this.iI3x = {
            limit: 301,
            parent: i0x[1],
            cache: {
                klass: q0x.ic3x,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bpz2x.f0x(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l0x.AN9E,
                escape: k0x.dH2x
            }
        };
        this.iK3x = {
            onsuccess: this.XW6Q.f0x(this),
            onerror: this.dO2x.f0x(this)
        };
        h0x.s0x(i0x[0], "click", this.EH0x.f0x(this));
        h0x.s0x(i0x[1], "click", this.kH4L.f0x(this))
    }
    ;
    b0x.ch1x = function() {
        this.cf1x = "m-wgt-subscribe"
    }
    ;
    b0x.bl1x = function(e0x) {
        e0x.parent = e0x.parent || document.body;
        e0x.clazz = " m-layer-w2";
        e0x.title = "添加到歌单";
        e0x.draggable = !0;
        e0x.mask = !0;
        this.bn1x(e0x);
        this.XG6A = (e0x.tracks || []).reverse();
        this.iI3x.item.size = this.XG6A.length;
        this.iK3x.name = e0x.name || "";
        this.bTw1x = q0x.ws8k.A0x({
            onaddsuccess: this.Dd0x.f0x(this)
        });
        this.tR7K = q0x.ic3x.A0x({
            onlistload: this.cwX8P.f0x(this)
        });
        this.tR7K.bQa9R();
        k0x.bd1x(this.XG6A, function(p0x, r0x, i0x) {
            if (!k0x.lG4K(p0x)) {
                i0x[r0x] = this.bTw1x.eJ2x(p0x) || p0x
            }
        }, this)
    }
    ;
    b0x.cwX8P = function() {
        if (this.dK2x)
            this.dK2x.T0x();
        this.dK2x = I0x.kk4o.A0x(this.iI3x)
    }
    ;
    b0x.EH0x = function() {
        this.bt1x();
        if (this.Eg0x)
            this.Eg0x.T0x();
        this.Eg0x = n0x.Zt6n.A0x(this.iK3x);
        this.Eg0x.J0x()
    }
    ;
    b0x.kH4L = function() {
        var cwV8N = function(g0x) {
            while (g0x && g0x != document) {
                if (g0x.tagName.toLowerCase() == "li") {
                    return g0x
                }
                g0x = g0x.parentNode
            }
        };
        return function(d0x) {
            h0x.cn1x(d0x);
            var F0x = h0x.X1x(d0x)
              , Ae9V = cwV8N(F0x);
            if (!!Ae9V && !a9j.bE1x(Ae9V, "dis")) {
                this.XW6Q({
                    id: a9j.t0x(Ae9V, "id")
                })
            }
        }
    }();
    b0x.XW6Q = function(d0x) {
        var C0x = d0x.id;
        if (!C0x || !this.XG6A.length)
            return;
        this.bTw1x.jI4M({
            key: "track_playlist-" + C0x,
            data: {
                tracks: this.XG6A,
                pid: C0x
            }
        });
        this.bt1x()
    }
    ;
    b0x.Dd0x = function() {
        this.z0x("onsuccess");
        n0x.Z1x.J0x({
            tip: "收藏成功"
        })
    }
    ;
    b0x.dO2x = function(d0x) {
        this.bt1x();
        this.z0x("onerror", d0x);
        var cU1x = "收藏失败";
        switch (d0x.code) {
        case 405:
            cU1x = "操作过于频繁，先休息一下再试吧";
            break;
        case 507:
            cU1x = "歌单数量超过限制";
            break;
        case 502:
            cU1x = "歌曲已经存在"
        }
        n0x.Z1x.J0x({
            tip: cU1x,
            type: 2
        })
    }
    ;
    b0x.bpz2x = function() {
        this.bt1x();
        n0x.Z1x.J0x({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    }
    ;
    l0x.ms4w = function(e0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n0x.bpy2x.J0x(e0x)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , br1x = NEJ.F
      , dy2x = c0x("nej.p")
      , a9j = c0x("nej.e")
      , h0x = c0x("nej.v")
      , v0x = c0x("nej.j")
      , k0x = c0x("nej.u")
      , l0x = c0x("nm.x");
    var bqR3x, ox5C, Y1x = decodeURIComponent(location.href), jZ4d = /.+(https?:\/\/.+\/proxy.html)/.test(Y1x) ? RegExp.$1 : "";
    if (!!jZ4d) {
        v0x.vF7y("mail_proxy_url", jZ4d)
    } else {
        jZ4d = v0x.tu7n("mail_proxy_url") || "about:blank"
    }
    bqR3x = a9j.YH6B({
        src: jZ4d,
        onload: function() {
            ox5C = true
        }
    });
    var bTM1x = function() {
        v0x.gx3x("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var cwU8M = function() {
        if (dy2x.dr2x.browser == "ie" && parseInt(dy2x.dr2x.version) < 9) {
            l0x.fs2x({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l0x.Js1x = function(u0x, C0x, V0x) {
        if (!cwU8M())
            return;
        bTM1x();
        if (V0x == "stop") {
            if (!ox5C)
                throw "proxy not loaded";
            bTM1x();
            bqR3x.contentWindow.location.replace(jZ4d + "#" + k0x.cD1x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bqR3x.contentWindow.location.replace(jZ4d + "#" + k0x.cD1x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: u0x,
                    id: C0x,
                    s: +(new Date),
                    action: V0x
                })
            }))
        }
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , br1x = NEJ.F
      , a9j = c0x("nej.e")
      , h0x = c0x("nej.v")
      , v0x = c0x("nej.j")
      , k0x = c0x("nej.u")
      , l0x = c0x("nm.x")
      , n0x = c0x("nm.l")
      , q0x = c0x("nm.d");
    var kI4M = q0x.hO3x.A0x();
    var oz5E = q0x.ws8k.A0x({
        onlistload: cwT8L,
        onitemload: cwS8K,
        onerror: dO2x
    });
    var DY0x = q0x.rb6V.A0x({
        onlistload: cwR8J,
        onitemload: cwQ8I,
        onerror: dO2x
    });
    var bUw1x = {};
    function wt8l(d0x) {
        var g0x = h0x.X1x(d0x, "d:resAction")
          , V0x = a9j.t0x(g0x, "resAction");
        if (g0x && (V0x == "play" || V0x == "addto")) {
            var u0x = parseInt(a9j.t0x(g0x, "resType"));
            bUE1x({
                action: V0x,
                type: u0x,
                id: a9j.t0x(g0x, "resId"),
                from: a9j.t0x(g0x, "resFrom"),
                data: a9j.t0x(g0x, "resData"),
                order: a9j.t0x(g0x, "resOrder"),
                node: g0x
            });
            if (u0x != 13)
                bUF1x(g0x)
        }
    }
    function bUE1x(bR1x) {
        var V0x = bR1x.action
          , u0x = bR1x.type
          , C0x = bR1x.id
          , ee2x = bR1x.from
          , j0x = bR1x.data
          , ug7Z = bR1x.order
          , e0x = {
            limit: 1e3,
            offset: 0,
            data: {
                id: C0x
            },
            ext: {
                id: C0x,
                action: V0x,
                type: u0x,
                from: ee2x,
                data: j0x,
                node: bR1x.node
            }
        };
        if (V0x != "play" && V0x != "addto" || !u0x)
            return;
        if (window.GRef && GRef == "mail") {
            l0x.Js1x(u0x, C0x, V0x);
            return
        }
        switch (u0x) {
        case 13:
            e0x.key = "track_playlist-" + C0x;
            oz5E.lO4S(e0x);
            break;
        case 17:
            e0x.key = "program";
            e0x.id = C0x;
            DY0x.XY6S(e0x);
            if (V0x == "play") {
                v0x.bm1x("/api/dj/program/listen", {
                    query: {
                        id: C0x
                    }
                })
            }
            break;
        case 18:
            e0x.key = "track";
            e0x.id = C0x;
            oz5E.XY6S(e0x);
            break;
        case 19:
            e0x.key = "track_album-" + C0x;
            oz5E.lO4S(e0x);
            break;
        case 24:
            e0x.key = "track_day";
            oz5E.lO4S(e0x);
            break;
        case 2:
            e0x.key = "track_artist_top-" + C0x;
            oz5E.lO4S(e0x);
            break;
        case 70:
            e0x.key = "program_djradio-" + C0x + "-" + ug7Z;
            e0x.data.radioId = C0x;
            e0x.data.asc = ug7Z == 2;
            DY0x.lO4S(e0x);
            break
        }
    }
    function bUJ1x(i0x) {
        var m0x = [];
        k0x.bd1x(i0x, function(p0x) {
            if (p0x.mainSong) {
                p0x.mainSong.program = p0x;
                m0x.push(p0x.mainSong);
                p0x.localupdatetime = +(new Date);
                oz5E.cDI0x(p0x.mainSong);
                p0x.mainTrackId = p0x.mainSong.id;
                delete p0x.mainSong
            } else {
                var bUK1x = oz5E.eJ2x(p0x.mainTrackId);
                bUK1x && m0x.push(bUK1x)
            }
        });
        return m0x
    }
    function ZZ7S(i0x, e0x) {
        var rT6N = e0x.action == "play" && e0x.type != 17 && e0x.type != 18
          , gd3x = e0x.action == "play";
        if (!i0x.length)
            return;
        if (e0x.type == 19) {
            i0x = l0x.Lj2x(i0x, true, {
                play: true
            }, {
                source: "album",
                sourceid: e0x.id
            })
        } else {
            i0x = l0x.Lj2x(i0x, true, {
                play: true
            })
        }
        k0x.bd1x(i0x, function(p0x) {
            p0x.source = l0x.boQ2x({
                fid: e0x.from,
                fdata: e0x.data,
                type: e0x.type,
                rid: e0x.id
            }, p0x.id)
        });
        top.player.addTo(i0x, rT6N, gd3x);
        kI4M.QY4c({
            rid: e0x.id,
            type: e0x.type,
            hash: l0x.Kl2x(),
            play: gd3x,
            source: e0x.from,
            sourceid: e0x.data
        })
    }
    function cwT8L(d0x) {
        var ey2x = d0x.ext || {};
        i0x = oz5E.hD3x(d0x.key);
        ZZ7S(i0x, ey2x);
        if (ey2x.type == 13 && ey2x.action == "play" && i0x && i0x.length > 0) {
            bUF1x(ey2x.node);
            v0x.bm1x("/api/playlist/update/playcount", {
                query: {
                    id: ey2x.id
                }
            })
        }
    }
    function cwS8K(d0x) {
        var i0x = [oz5E.eJ2x(d0x.id)]
          , bj1x = i0x[0]
          , qz6t = l0x.qq6k(bj1x)
          , uj7c = bj1x.privilege || {};
        if (qz6t == 10) {
            l0x.uX7Q(uj7c.fee || bj1x.fee, bj1x.id, "song", null, uj7c)
        } else if (qz6t == 100) {
            l0x.iu3x(null, null, null, true, bj1x)
        } else if (qz6t == 11) {
            l0x.bFB6v(bj1x.id, 18)
        } else {
            ZZ7S(i0x, d0x.ext)
        }
    }
    function cwR8J(d0x) {
        var i0x = bUJ1x(DY0x.hD3x(d0x.key));
        ZZ7S(i0x, d0x.ext)
    }
    function cwQ8I(d0x) {
        var i0x = bUJ1x([DY0x.eJ2x(d0x.id)]);
        ZZ7S(i0x, d0x.ext)
    }
    function dO2x() {
        top.player.tipPlay("无法播放，音乐已下线")
    }
    function bUF1x(g0x) {
        var u0x = a9j.t0x(g0x, "resType")
          , C0x = a9j.t0x(g0x, "resId")
          , K0x = u0x + "-" + C0x;
        if (bUw1x[K0x])
            return;
        var bUV1x = a9j.B0x("play-count")
          , btf3x = a9j.H0x(g0x.parentNode, "nb")
          , Rc4g = null;
        if (bUV1x) {
            Rc4g = bUV1x
        } else {
            Rc4g = !!btf3x && !!btf3x[0] ? btf3x[0] : null
        }
        if (Rc4g) {
            var cz1x = Rc4g.innerHTML;
            if (/^\d+$/.test(cz1x)) {
                Rc4g.innerText = +cz1x + 1
            }
            bUw1x[K0x] = true
        }
    }
    l0x.cwP8H = function(g0x) {
        h0x.s0x(g0x || document.body, "click", wt8l.f0x(this))
    }
    ;
    l0x.cwO8G = function(V0x, u0x, C0x) {
        bUE1x({
            action: V0x,
            type: u0x,
            id: C0x
        })
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"), v0x = c0x("nej.j"), I0x = c0x("nej.ut"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, L0x;
    q0x.fp2x({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function(m0x, e0x) {
                this.cwM8E(m0x, e0x)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function(m0x, e0x) {
                this.z0x("onshareall", e0x.result)
            },
            onerror: function(m0x, e0x) {
                this.z0x("onshareall", e0x.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function(m0x, e0x) {
                e0x.options.picUrl = m0x.picUrl;
                this.bVj1x(e0x.options, e0x.result)
            },
            onerror: function(m0x, e0x) {
                this.z0x("onshareall", e0x.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function(Q0x, e0x) {
                this.qu6o("vid_info-" + e0x.data.nosKey, Q0x);
                return Q0x
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function(e0x) {},
            format: function(m0x, e0x) {
                e0x.data = e0x.data2;
                this.cp1x("share-all", e0x)
            },
            onerror: "onshareerror"
        }
    });
    q0x.bug3x = NEJ.C();
    b0x = q0x.bug3x.N0x(q0x.hJ3x);
    b0x.cwL8D = function() {
        var vU8M = function(Q0x, e0x) {
            e0x.times++;
            if (e0x.times > 10) {
                this.z0x("onvinfoerror", e0x.key, Q0x)
            } else {
                setTimeout(ev2x.f0x(this, e0x), e0x.times * 1e3)
            }
        };
        var Aw9n = function(Q0x, e0x) {
            this.z0x("onvinfo", e0x.key, Q0x)
        };
        var ev2x = function(e0x) {
            var Y1x = e0x.url;
            v0x.bm1x(Y1x + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: Aw9n.eA2x(this, e0x),
                onerror: vU8M.eA2x(this, e0x)
            })
        };
        return function(e0x) {
            e0x.times = 0;
            ev2x.call(this, e0x)
        }
    }();
    b0x.cGu0x = function() {
        var DD0x;
        var vU8M = function(Q0x, e0x) {
            if (Q0x.code > 0) {
                clearInterval(this.DB0x);
                this.z0x("onviderror", e0x.data.nosKey)
            }
        };
        var Aw9n = function(K0x, Q0x) {
            if (Q0x.vid && Q0x.covers) {
                clearInterval(this.DB0x);
                this.z0x("onvid", K0x, Q0x)
            }
        };
        var ev2x = function(e0x) {
            if (+(new Date) - DD0x > 60 * 60 * 1e3) {
                clearInterval(this.DB0x);
                this.z0x("onviderror", e0x.data.nosKey);
                return
            }
            e0x.onload = Aw9n.f0x(this, e0x.data.nosKey);
            e0x.onerror = vU8M.f0x(this);
            this.cp1x("vid-get", e0x)
        };
        return function(e0x) {
            if (!e0x || !e0x.data)
                return;
            DD0x = +(new Date);
            this.DB0x = clearInterval(this.DB0x);
            this.DB0x = setInterval(ev2x.f0x(this, e0x), 1e4);
            ev2x.apply(this, arguments)
        }
    }();
    b0x.cwI8A = function() {
        this.DB0x = clearInterval(this.DB0x)
    }
    ;
    b0x.cwM8E = function(m0x, ot5y) {
        if (m0x.event && ot5y.snsTypes) {
            if (ot5y.pics) {
                var bVH1x = [];
                for (var i = 0, len = ot5y.pics.length; i < len; i++) {
                    bVH1x[i] = ot5y.pics[i].originId
                }
                this.cp1x("share_img_compound", {
                    data: {
                        picIds: bVH1x.join(",")
                    },
                    options: ot5y,
                    result: m0x
                })
            } else {
                ot5y.picUrl = ot5y.picUrl;
                this.bVj1x(ot5y, m0x)
            }
        } else {
            this.z0x("onshareall", m0x)
        }
        var wd8V = q0x.hO3x.A0x();
        wd8V.eV2x(ot5y.isPub ? "pubevent" : "shareevent", {
            id: m0x.id
        })
    }
    ;
    b0x.bVj1x = function(ot5y, m0x) {
        var ct1x = {}
          , d0x = m0x.event || {};
        ct1x.eventid = d0x.id;
        ct1x.eventtype = d0x.type;
        ot5y.picUrl && (ct1x.picUrl = ot5y.picUrl);
        ct1x.snsTypes = ot5y.snsTypes;
        ct1x.msg = ot5y.data.msg || "";
        ct1x.type = ot5y.data.type;
        ot5y.data.id && (ct1x.id = ot5y.data.id);
        if (ct1x.eventtype == 41) {
            var Q0x = l0x.GA1x(d0x.json);
            ct1x.eventtype = 39;
            if (ct1x.msg) {
                ct1x.msg += "  "
            }
            ct1x.msg += "分享" + Q0x.video.creator.nickname + "的视频《" + Q0x.video.title + "》";
            delete ct1x.id
        }
        this.cp1x("share-sns", {
            data: ct1x,
            result: m0x
        })
    }
    ;
    b0x.cwH8z = function(e0x) {
        var j0x = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            checkToken: "",
            uuid: "publish-" + +(new Date) + k0x.ol5q(5)
        };
        j0x = NEJ.EX(j0x, e0x);
        if (j0x.id < 0) {
            delete j0x.id;
            j0x.type = "noresource"
        }
        if (!j0x.threadId) {
            delete j0x.threadId
        }
        if (!j0x.actId) {
            delete j0x.actId
        }
        if (!j0x.pics) {
            delete j0x.pics
        } else {
            j0x.pics = JSON.stringify(j0x.pics)
        }
        this.cp1x("share-all", {
            data: j0x,
            snsTypes: e0x.snsTypes,
            picUrl: e0x.picUrl,
            pics: e0x.pics,
            isPub: e0x.isPub
        })
    }
    ;
    b0x.cwG8y = function(e0x) {
        this.cp1x("share-private", e0x)
    }
    ;
    b0x.cwE8w = function(e0x) {
        this.cp1x("video-submit", e0x)
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"), I0x = c0x("nej.ut"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), n0x = c0x("nm.l"), b0x, L0x;
    var cwD8v = {
        40: !0
    };
    q0x.fp2x({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(e0x) {
                e0x.data.getcounts = true;
                e0x.data.pagesize = e0x.data.limit;
                if (e0x.data.offset == 0) {
                    e0x.data.lasttime = -1
                }
                delete e0x.data.offset
            },
            format: function(Q0x, e0x) {
                Q0x.event = l0x.ben8f(Q0x.event, function(p0x, r0x) {
                    return !cwD8v[p0x.type]
                });
                this.cwC8u(Q0x.event);
                e0x.data.lasttime = Q0x.lasttime;
                if (Q0x.event.length) {
                    Q0x.event.length = e0x.limit
                }
                return {
                    list: Q0x.event,
                    total: Q0x.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(Q0x, e0x) {
                return {
                    list: Q0x.events,
                    total: Q0x.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(e0x) {
                e0x.data.pagesize = 20
            },
            format: function(Q0x, e0x) {
                return Q0x.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function(e0x) {
                if (e0x.data.offset == 0) {
                    e0x.data.time = -1
                }
                delete e0x.data.offset;
                e0x.data.getcounts = true
            },
            format: function(Q0x, e0x) {
                e0x.data.time = Q0x.lasttime;
                var i0x = Q0x.events;
                if (Q0x.more && i0x.length < e0x.data.limit) {
                    i0x = this.Iw1x(i0x, e0x.data.limit)
                }
                return {
                    list: i0x,
                    total: Q0x.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function(m0x, e0x) {
                m0x.conf = e0x.conf;
                return m0x
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e0x, bh1x) {
                if (e0x.like) {
                    if (e0x.comment) {
                        bh1x.url = "/api/v1/comment/like"
                    } else {
                        bh1x.url = "/api/resource/like"
                    }
                    bh1x.onload = "oneventlike";
                    bh1x.onerror = "oneventlikeerr"
                } else {
                    if (e0x.comment) {
                        bh1x.url = "/api/v1/comment/unlike"
                    } else {
                        bh1x.url = "/api/resource/unlike"
                    }
                    bh1x.onload = "oneventunlike";
                    bh1x.onerror = "oneventunlikeerr"
                }
            },
            format: function(m0x, e0x) {
                m0x.eid = e0x.eid;
                m0x.origin = e0x.origin;
                m0x.ext = e0x.ext;
                return m0x
            },
            onmessage: function(bY1x, m0x) {
                if (bY1x == 250) {
                    n0x.Z1x.J0x({
                        tip: m0x.message || m0x.msg || "点赞异常",
                        type: 2
                    });
                    return
                }
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(m0x, e0x) {
                m0x.id = e0x.data.id;
                return m0x
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(e0x, bh1x) {
                if (e0x.data.type == "nointer") {
                    bh1x.url = "/api/event/rcmd/reject"
                } else if (e0x.data.transcoding) {
                    bh1x.url = "/api/event/video/transcoding/delete"
                } else {
                    bh1x.url = "/api/event/delete"
                }
            },
            format: function(m0x, e0x) {
                m0x.id = e0x.data.id;
                return m0x
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(m0x, e0x) {
                m0x.id = e0x.data.id;
                return m0x
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(e0x) {
                e0x.data.lasttime = e0x.data.lasttime || -1;
                e0x.data.pagesize = e0x.data.limit;
                e0x.data.getcounts = true;
                delete e0x.data.offset
            },
            format: function(Q0x, e0x) {
                e0x.data.lasttime = Q0x.lasttime;
                var i0x = Q0x.events;
                if (Q0x.more)
                    i0x = this.Iw1x(i0x, e0x.data.pagesize);
                return {
                    list: i0x,
                    total: Q0x.size
                }
            },
            onerror: "onlisterror"
        }
    });
    q0x.Au9l = NEJ.C();
    b0x = q0x.Au9l.N0x(q0x.hJ3x);
    b0x.cw1x = function() {
        this.cE1x()
    }
    ;
    b0x.bvM4Q = function(u0x, cS1x) {
        return u0x + "-" + cS1x
    }
    ;
    b0x.cGv0x = function(e0x) {
        this.cp1x("ievent-get", e0x)
    }
    ;
    b0x.cGx0x = function(e0x) {
        this.cp1x("ievent-new-get", e0x)
    }
    ;
    b0x.cGy0x = function(e0x) {
        this.cp1x("ievent-user-get", e0x)
    }
    ;
    b0x.cGz0x = function(u0x, cS1x) {
        return this.rC6w(this.bvM4Q(u0x, cS1x))
    }
    ;
    b0x.cGA0x = function(IR1x, e0x) {
        if (!IR1x || !IR1x.length)
            return;
        e0x = e0x || {};
        var bz1x = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, GC1x = [], byC5H = [], j0x; i < IR1x.length; ++i) {
            j0x = IR1x[i];
            j0x = this.rC6w(this.bvM4Q(j0x.type, j0x.id));
            if (!j0x) {
                GC1x.push(IR1x[i].id);
                byC5H.push(bz1x[IR1x[i].type] || 0)
            }
        }
        if (!GC1x.length) {
            this.z0x("oneventresload", e0x.conf);
            return
        }
        e0x.data = {
            ids: JSON.stringify(GC1x),
            types: JSON.stringify(byC5H)
        };
        e0x.onload = this.cwu8m.f0x(this);
        this.cp1x("ievent-res-get", e0x)
    }
    ;
    b0x.cwu8m = function(m0x) {
        if (m0x.code != 200) {
            this.z0x("oneventreserror", m0x.code);
            return
        }
        var bz1x = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, i0x = m0x.results; i < i0x.length; ++i) {
            this.qu6o(this.bvM4Q(bz1x[i0x[i].type], i0x[i].id), i0x[i])
        }
        this.z0x("oneventresload", m0x.conf)
    }
    ;
    b0x.byE5J = function(j0x) {
        var K0x = "event-list";
        this.blh1x(K0x, j0x);
        this.z0x("onitemadd", {
            key: K0x,
            action: "add",
            data: j0x,
            flag: -1
        })
    }
    ;
    b0x.ps5x = function(e0x) {
        this.cp1x("ievent-like", e0x)
    }
    ;
    b0x.mB5G = function(e0x) {
        this.cp1x("ievent-delete", e0x)
    }
    ;
    b0x.Iw1x = function(i0x, gc3x) {
        for (var i = i0x.length; i < gc3x; i++)
            i0x.push(null);
        return i0x
    }
    ;
    b0x.cwC8u = function(i0x) {
        var m0x = [];
        if (!i0x || !i0x.length)
            return;
        k0x.bd1x(i0x, function(d0x) {
            d0x.biData = this.byG5L(d0x)
        }, this)
    }
    ;
    b0x.byG5L = function() {
        var ZW7P = {
            32: "comment",
            33: "activity",
            34: "recomment_artist"
        }
          , cws8k = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(d0x) {
            var Q0x = {
                id: d0x.id,
                sourceid: d0x.user.userId,
                alg: d0x.rcmdInfo ? d0x.rcmdInfo.alg : null,
                contentType: ZW7P[d0x.type] || (k0x.di2x(cws8k, d0x.type) != -1 ? "user_event" : "other")
            };
            return Q0x
        }
    }();
    b0x.DS0x = function(cwp8h, d0x) {
        var Q0x = this.byG5L(d0x);
        Q0x.actionType = cwp8h;
        if (window.log)
            log("eventclick", Q0x)
    }
    ;
    b0x.cGC0x = function(e0x) {
        this.cp1x("event_latest-list", e0x)
    }
}
)();
(function(factory) {
    window.SparkMD5 = factory()
}
)(function(undefined) {
    "use strict";
    var add32 = function(a, b) {
        return a + b & 4294967295
    }
      , hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }
    function md5cycle(x, k) {
        var a = x[0]
          , b = x[1]
          , c = x[2]
          , d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }
    function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }
    function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }
    function md51(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function md51_array(a) {
        var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }
    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function(x, y) {
            var lsw = (x & 65535) + (y & 65535)
              , msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function(from, to) {
                var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this,begin,num);
                targetArray.set(sourceArray);
                return target
            }
        }
        )()
    }
    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }
    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }
    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }
    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }
    function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }
    function SparkMD5() {
        this.reset()
    }
    SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this
    }
    ;
    SparkMD5.prototype.appendBinary = function(contents) {
        this.rH6B += contents;
        this.bq1x += contents.length;
        var length = this.rH6B.length, i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR2x, md5blk(this.rH6B.substring(i - 64, i)))
        }
        this.rH6B = this.rH6B.substring(i - 64);
        return this
    }
    ;
    SparkMD5.prototype.end = function(raw) {
        var buff = this.rH6B, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.oV5a(tail, length);
        ret = hex(this.dR2x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    }
    ;
    SparkMD5.prototype.reset = function() {
        this.rH6B = "";
        this.bq1x = 0;
        this.dR2x = [1732584193, -271733879, -1732584194, 271733878];
        return this
    }
    ;
    SparkMD5.prototype.getState = function() {
        return {
            buff: this.rH6B,
            length: this.bq1x,
            hash: this.dR2x
        }
    }
    ;
    SparkMD5.prototype.setState = function(state) {
        this.rH6B = state.buff;
        this.bq1x = state.length;
        this.dR2x = state.hash;
        return this
    }
    ;
    SparkMD5.prototype.destroy = function() {
        delete this.dR2x;
        delete this.rH6B;
        delete this.bq1x
    }
    ;
    SparkMD5.prototype.oV5a = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dR2x, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bq1x * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dR2x, tail)
    }
    ;
    SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    }
    ;
    SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content)
          , ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    }
    ;
    SparkMD5.ArrayBuffer = function() {
        this.reset()
    }
    ;
    SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this.rH6B.buffer, arr, true), length = buff.length, i;
        this.bq1x += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR2x, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.rH6B = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    }
    ;
    SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this.rH6B, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.oV5a(tail, length);
        ret = hex(this.dR2x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    }
    ;
    SparkMD5.ArrayBuffer.prototype.reset = function() {
        this.rH6B = new Uint8Array(0);
        this.bq1x = 0;
        this.dR2x = [1732584193, -271733879, -1732584194, 271733878];
        return this
    }
    ;
    SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    }
    ;
    SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    }
    ;
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.oV5a = SparkMD5.prototype.oV5a;
    SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr))
          , ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    }
    ;
    return SparkMD5
});
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , br1x = NEJ.F
      , a9j = c0x("nej.e")
      , h0x = c0x("nej.v")
      , v0x = c0x("nej.j")
      , em2x = c0x("nej.g")
      , k0x = c0x("nej.u")
      , fH2x = c0x("nej.n")
      , I0x = c0x("nej.ut")
      , l0x = c0x("nm.x")
      , q0x = c0x("nm.d")
      , iE3x = c0x("nm.x.nos")
      , w0x = c0x("nm.w");
    var cwn8f = 1024 * 256
      , cwm8e = 1024 * 1024 * 2
      , qN6H = {
        TOKEN_ERROR: -100,
        DNS_ERROR: -101
    }
      , bzl5q = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : br1x
      , qP6J = {
        MD5_DONE: .2,
        TOKEN_GET: .22,
        DNS_GET: .24,
        UPLOADED: 1
    }
      , jz4D = {
        AUDIO: "audio",
        IMAGE: "image",
        TXT: "txt",
        RAR: "rar",
        OTHER: "other",
        VIDEO: "video"
    };
    var oj5o = {};
    var wd8V = q0x.hO3x.A0x();
    iE3x.cGD0x = function() {
        return jz4D
    }
    ;
    var cwi8a = function() {
        return k0x.ol5q(6) + +(new Date)
    };
    var JR2x = function(iM3x, e0x) {
        if (!oj5o[e0x.taskId]) {
            return
        }
        (e0x.onuploading || br1x).call(this, iM3x)
    };
    var bqb2x = function(R0x) {
        var cwh8Z = R0x.md5
          , cT1x = R0x.file
          , cwg8Y = cwh8Z + cT1x.size;
        return "nos_file_hash_" + cwg8Y
    };
    var cwf8X = function(R0x) {
        var K0x = bqb2x(R0x)
          , j0x = v0x.bLI8A(K0x, "{}");
        try {
            j0x = JSON.parse(j0x)
        } catch (e) {
            j0x = {}
        }
        return j0x
    };
    var cwe8W = function(R0x, e0x) {
        if (!R0x.md5) {
            return
        }
        var K0x = bqb2x(R0x)
          , j0x = v0x.bLI8A(K0x, "{}");
        try {
            j0x = JSON.parse(j0x)
        } catch (e) {
            j0x = {}
        }
        NEJ.X(j0x, e0x);
        v0x.vF7y(K0x, JSON.stringify(j0x))
    };
    var cwd8V = function(R0x) {
        var K0x = bqb2x(R0x);
        v0x.LP2x(K0x)
    };
    var cwb8T = function(R0x, eN2x) {
        var Y1x = R0x.urls[Math.min(R0x.urlIndex, R0x.urls.length - 1)]
          , cT1x = R0x.file
          , lo4s = R0x.bucket
          , mJ5O = R0x.objectKey
          , cG1x = R0x.token
          , bL1x = R0x.context
          , pe5j = {}
          , NU3x = bzl5q.call(cT1x, R0x.beg, R0x.end)
          , bv1x = {
            offset: R0x.beg,
            complete: R0x.lastChunk || false,
            version: "1.0"
        };
        if (bL1x) {
            bv1x.context = bL1x
        }
        pe5j["x-nos-token"] = cG1x;
        pe5j[em2x.yg8Y] = cT1x.type;
        R0x.reqId = v0x.bm1x(Y1x + "/" + lo4s + "/" + mJ5O, {
            type: "json",
            method: "POST",
            headers: pe5j,
            query: bv1x,
            data: NU3x,
            onload: eN2x.onload,
            onerror: eN2x.onerror
        })
    };
    var cwa8S = function(m0x, R0x, e0x) {
        m0x = {
            code: 200,
            fileName: e0x.file.name,
            size: e0x.file.size,
            type: e0x.file.type,
            bucket: R0x.bucket,
            docId: R0x.docId,
            objectKey: R0x.objectKey,
            url: "//nos.netease.com/" + R0x.bucket + "/" + R0x.objectKey
        };
        cwd8V(R0x);
        if (!oj5o[e0x.taskId]) {
            return
        }
        delete oj5o[e0x.taskId];
        wd8V.eV2x("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(m0x)
        });
        (e0x.onsuccess || br1x).call(this, m0x)
    };
    var cvZ8R = function(m0x, e0x) {
        (e0x.onerror || br1x).call(this, m0x)
    };
    var cvW8O = function(m0x, R0x, e0x) {
        R0x.context = m0x.context;
        R0x.beg = m0x.offset;
        var iM3x = R0x.beg / R0x.file.size;
        cwe8W(R0x, {
            bucket: R0x.bucket,
            objectKey: R0x.objectKey,
            token: R0x.token,
            context: R0x.context,
            beg: R0x.beg,
            updateTime: +(new Date)
        });
        iM3x = qP6J.DNS_GET + (qP6J.UPLOADED - qP6J.DNS_GET) * iM3x;
        JR2x(iM3x, e0x);
        if (R0x.lastChunk) {
            cwa8S(m0x, R0x, e0x)
        } else {
            ZR7K(R0x, e0x)
        }
    };
    var cvV8N = function(m0x, R0x, e0x) {
        wd8V.eV2x("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: m0x.data,
            body: m0x.extData,
            ext: JSON.stringify(R0x),
            timging: +(new Date) - R0x.chuckUploadStartTime
        });
        if (R0x.urlIndex < Math.max(R0x.urls.length - 1, 5)) {
            R0x.urlIndex++;
            ZR7K(R0x, e0x)
        } else {
            cvZ8R(m0x, e0x)
        }
    };
    var ZR7K = function(R0x, e0x) {
        if (!R0x || R0x.step == -1) {
            return
        }
        R0x.end = R0x.beg + cwn8f;
        if (R0x.end >= R0x.file.size) {
            R0x.end = R0x.file.size;
            R0x.lastChunk = true
        }
        R0x.chuckUploadStartTime = +(new Date);
        cwb8T(R0x, {
            onload: cvW8O.eA2x(this, R0x, e0x),
            onerror: cvV8N.eA2x(this, R0x, e0x)
        })
    };
    var cvT8L = function(m0x, R0x, e0x) {
        R0x.beg = m0x.offset;
        var iM3x = R0x.beg / R0x.file.size;
        iM3x = qP6J.DNS_GET + (qP6J.UPLOADED - qP6J.DNS_GET) * iM3x;
        JR2x(iM3x, e0x);
        ZR7K(R0x, e0x)
    };
    var cvS8K = function(m0x, R0x, e0x) {
        R0x.beg = 0;
        delete R0x.context;
        boe2x(R0x, e0x)
    };
    var bAh5m = function(Pv3x, R0x, e0x) {
        R0x.lastChunk = false;
        R0x.urls = Pv3x;
        R0x.urlIndex = 0;
        JR2x(qP6J.DNS_GET, e0x);
        if (R0x.fromExist) {
            delete R0x.fromExist;
            var Y1x = R0x.urls[Math.min(R0x.urlIndex, R0x.urls.length - 1)]
              , lo4s = R0x.bucket
              , mJ5O = R0x.objectKey
              , cG1x = R0x.token
              , bL1x = R0x.context
              , pe5j = {}
              , bv1x = {
                context: bL1x,
                version: "1.0"
            };
            pe5j["x-nos-token"] = cG1x;
            R0x.reqId = v0x.bm1x(Y1x + "/" + lo4s + "/" + mJ5O + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: pe5j,
                query: bv1x,
                onload: cvT8L.eA2x(this, R0x, e0x),
                onerror: cvS8K.eA2x(this, R0x, e0x)
            })
        } else {
            R0x.beg = 0;
            ZR7K(R0x, e0x)
        }
    };
    var cvN8F = function(m0x, R0x, e0x) {
        m0x.code = qN6H.DNS_ERROR;
        (e0x.onerror || br1x).call(this, m0x)
    };
    var bAk5p = function(j0x, e0x) {
        var m0x = j0x.result || {}
          , lo4s = m0x.bucket
          , mJ5O = m0x.objectKey
          , cG1x = m0x.token
          , R0x = oj5o[e0x.taskId];
        if (!lo4s || !mJ5O || !cG1x || !R0x) {
            m0x.code = qN6H.TOKEN_ERROR;
            (e0x.onerror || br1x).call(this, m0x);
            return
        }
        R0x.bucket = lo4s;
        R0x.objectKey = mJ5O;
        R0x.docId = m0x.docId;
        R0x.token = cG1x;
        JR2x(qP6J.TOKEN_GET, e0x);
        if (location.protocol == "https:") {
            bAh5m(["//nosup-hz1.127.net"], R0x, e0x)
        } else {
            R0x.reqId = iE3x.cvM8E({
                bucket: lo4s,
                onload: bAh5m.eA2x(this, R0x, e0x),
                onerror: cvN8F.eA2x(this, R0x, e0x)
            })
        }
        R0x.step = 1
    };
    var cvL8D = function(m0x, e0x) {
        m0x.code = qN6H.TOKEN_ERROR;
        (e0x.onerror || br1x).call(this, m0x)
    };
    var boe2x = function(R0x, e0x) {
        var cT1x = e0x.file
          , eP2x = cT1x.name || ""
          , ey2x = eP2x.split(".").pop();
        iE3x.beI8A(NEJ.X({
            filename: eP2x,
            ext: ey2x,
            onload: bAk5p.eA2x(this, e0x),
            onerror: cvL8D.eA2x(this, e0x)
        }, e0x, function(p0x) {
            return k0x.gK3x(p0x) || k0x.lG4K(p0x)
        }))
    };
    var cvK8C = function(R0x, e0x) {
        if (!R0x || R0x.step == -1) {
            return
        }
        R0x.md5 = R0x.spark.end();
        var La2x = cwf8X(R0x) || {}
          , lo4s = La2x.bucket
          , mJ5O = La2x.objectKey
          , cG1x = La2x.token;
        if (!lo4s || !mJ5O || !cG1x) {
            boe2x(R0x, e0x)
        } else {
            R0x.context = La2x.context;
            R0x.beg = La2x.beg;
            R0x.fromExist = true;
            bAk5p({
                result: La2x
            }, e0x)
        }
    };
    var cvJ8B = function(EG0x, R0x, e0x) {
        if (!R0x || R0x.step == -1) {
            return
        }
        R0x.beg = R0x.end;
        var iM3x = R0x.beg / R0x.file.size;
        iM3x = 0 + qP6J.MD5_DONE * iM3x;
        JR2x(iM3x, e0x);
        R0x.spark.append(EG0x.result);
        if (R0x.lastChunk) {
            cvK8C(R0x, e0x)
        } else {
            bAC5H(R0x, e0x)
        }
    };
    var cvI8A = function(m0x, R0x, e0x) {
        R0x.md5 = "";
        boe2x(R0x, e0x)
    };
    var bAC5H = function(R0x, e0x) {
        if (!R0x || R0x.step == -1) {
            return
        }
        R0x.end = R0x.beg + cwm8e;
        if (R0x.end >= R0x.file.size) {
            R0x.end = R0x.file.size;
            R0x.lastChunk = true
        }
        var EG0x = new FileReader;
        EG0x.onload = cvJ8B.f0x(this, EG0x, R0x, e0x);
        EG0x.onerror = cvI8A.f0x(this, EG0x, R0x, e0x);
        EG0x.readAsArrayBuffer(bzl5q.call(R0x.file, R0x.beg, R0x.end))
    };
    iE3x.hP3x = function(e0x) {
        var cT1x = e0x.file
          , eP2x = cT1x.name || ""
          , ey2x = eP2x.split(".").pop()
          , EI0x = cwi8a();
        e0x.taskId = EI0x;
        oj5o[EI0x] = {
            step: 0
        };
        JR2x(0, e0x);
        var R0x = oj5o[EI0x];
        R0x.id = EI0x;
        R0x.file = cT1x;
        R0x.beg = 0;
        R0x.lastChunk = false;
        R0x.spark = new SparkMD5.ArrayBuffer;
        var cvG8y = e0x.onerror || br1x;
        e0x.onerror = function() {
            if (!oj5o[EI0x]) {
                return
            }
            delete oj5o[EI0x];
            cvG8y.apply(this, arguments)
        }
        ;
        wd8V.eV2x("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        bAC5H(R0x, e0x);
        return EI0x
    }
    ;
    iE3x.ky4C = function(C0x) {
        var R0x = oj5o[C0x];
        if (R0x) {
            if (R0x.step == 0) {
                delete oj5o[C0x]
            } else {
                R0x.step = -1;
                if (R0x.reqId) {
                    v0x.ky4C(R0x.reqId)
                }
                delete oj5o[C0x]
            }
        }
    }
    ;
    iE3x.beI8A = function() {
        var yX8P = function(m0x, e0x) {
            (e0x.onload || br1x).call(this, m0x)
        };
        var Az9q = function(m0x, e0x) {
            (e0x.onerror || br1x).call(this, m0x)
        };
        var bAN5S = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function(e0x) {
            var XT6N = e0x.returnBody || bAN5S;
            if (k0x.lG4K(XT6N)) {
                try {
                    JSON.stringify(XT6N)
                } catch (e) {
                    XT6N = bAN5S
                }
            }
            return v0x.bm1x("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e0x.filename || "",
                    ext: e0x.ext || "",
                    type: e0x.type || jz4D.OTHER,
                    bucket: e0x.bucket || "",
                    local: e0x.local || false,
                    nos_product: e0x.nosProduct || 0,
                    return_body: XT6N
                },
                onload: yX8P.eA2x(this, e0x),
                onerror: Az9q.eA2x(this, e0x)
            })
        }
    }();
    iE3x.cvM8E = function() {
        var cvC8u = "//wanproxy.127.net/lbs";
        var yX8P = function(m0x, e0x) {
            if (m0x.lbs) {}
            var Pv3x = m0x.upload;
            if (!Pv3x || !Pv3x.length) {
                Az9q(m0x, e0x)
            }
            (e0x.onload || br1x).call(this, Pv3x)
        };
        var Az9q = function(m0x, e0x) {
            (e0x.onerror || br1x).call(this, m0x)
        };
        return function(e0x) {
            var lo4s = e0x.bucket;
            return v0x.bm1x(cvC8u, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: lo4s
                },
                onload: yX8P.eA2x(this, e0x),
                onerror: Az9q.eA2x(this, e0x)
            })
        }
    }();
    iE3x.XV6P = function() {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), v0x = c0x("nej.j"), cb1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), iE3x = c0x("nm.x.nos"), E0x = c0x("nm.m"), n0x = c0x("nm.l"), w0x = c0x("nm.w"), b0x, L0x;
    var ge3x = a9j.jm4q('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    w0x.LI2x = NEJ.C();
    b0x = w0x.LI2x.N0x(bD1x.el2x);
    b0x.ch1x = function() {
        this.cf1x = ge3x
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        this.bH1x = this.o0x;
        this.hz3x = a9j.H0x(this.o0x, "j-file")[0];
        h0x.s0x(this.hz3x, "change", this.pE5J.f0x(this))
    }
    ;
    b0x.bl1x = function(e0x) {
        e0x = e0x || {};
        this.bn1x(e0x);
        this.hz3x.id = e0x.inputId || "";
        this.hz3x.accept = e0x.accept || "*";
        this.wK8C = e0x
    }
    ;
    b0x.baJ7C = function() {
        return a9j.lP4T(this.hz3x)
    }
    ;
    b0x.pE5J = function(d0x) {
        if (this.hz3x.value == "")
            return;
        var kK4O = this.hz3x.value.split("\\")
          , eP2x = kK4O.length > 0 ? kK4O[kK4O.length - 1] : kK4O[0]
          , oD5I = (this.hz3x.files || [{}])[0];
        var cm1x = {
            files: this.hz3x.files,
            filename: eP2x,
            size: oD5I.size,
            cancelUpload: false
        };
        this.z0x("onchange", cm1x);
        if (cm1x.cancelUpload) {
            this.hz3x.value = "";
            return
        }
        if (cm1x.stopped) {
            return
        }
        this.Tu4y()
    }
    ;
    b0x.Tu4y = function() {
        if (this.hz3x.value == "")
            return;
        var kK4O = this.hz3x.value.split("\\")
          , eP2x = kK4O.length > 0 ? kK4O[kK4O.length - 1] : kK4O[0]
          , ey2x = (eP2x.split(".") || []).pop()
          , oD5I = (this.hz3x.files || [{}])[0]
          , EW0x = (oD5I.type || "").split("/").shift();
        if (oD5I.size > 100 * 1024 * 1024) {
            return this.lX4b("onerror", {
                code: -200
            })
        }
        this.z0x("onuploading", 0);
        this.bBD5I = iE3x.beI8A(NEJ.X({
            onload: this.TB4F.eA2x(this, eP2x),
            onerror: this.lX4b.f0x(this)
        }, this.wK8C, function(p0x) {
            return k0x.gK3x(p0x) || k0x.lG4K(p0x)
        }))
    }
    ;
    b0x.TB4F = function(bN1x, eP2x) {
        var m0x = bN1x.result || {}
          , lo4s = m0x.bucket
          , mJ5O = m0x.objectKey
          , cG1x = m0x.token;
        if (!lo4s || !mJ5O || !cG1x) {
            bN1x.code = -100;
            this.lX4b.call(this, bN1x);
            return
        }
        var oD5I = (this.hz3x.files || [{}])[0];
        var hM3x = a9j.dk2x(this.bH1x);
        hM3x[0].value = mJ5O;
        hM3x[1].value = cG1x;
        hM3x[2].value = "json";
        if (oD5I.type && oD5I.type.indexOf("audio") == 0) {
            hM3x[3].value = "audio/mpeg"
        } else {
            hM3x[3].value = oD5I.type || ""
        }
        this.bH1x.action = "//nos.netease.com/" + lo4s;
        this.Fa0x = m0x;
        this.rx6r = eP2x;
        this.z0x("onuploading", .2);
        this.hP3x()
    }
    ;
    b0x.hP3x = function() {
        this.bBD5I = v0x.hP3x(this.bH1x, {
            type: "json",
            onload: this.vL8D.f0x(this),
            onerror: this.lX4b.f0x(this),
            onuploading: this.bcf7Y.f0x(this)
        })
    }
    ;
    b0x.ky4C = function() {
        v0x.ky4C(this.bBD5I);
        this.bH1x.reset()
    }
    ;
    b0x.vL8D = function(bN1x) {
        var cG1x = this.Fa0x
          , eP2x = this.rx6r
          , oD5I = (this.hz3x.files || [{}])[0]
          , kx4B = {
            code: 200,
            fileName: eP2x,
            size: oD5I.size,
            bucket: cG1x.bucket,
            docId: cG1x.docId,
            objectKey: cG1x.objectKey,
            url: "//nos.netease.com/" + cG1x.bucket + "/" + cG1x.objectKey
        };
        if (!bN1x) {
            bN1x = kx4B
        }
        if (!bN1x.code || bN1x.code == 200) {
            this.z0x("onsuccess", NEJ.X(kx4B, bN1x))
        } else {
            this.z0x("onerror", bN1x)
        }
        this.bH1x.reset()
    }
    ;
    b0x.lX4b = function(bN1x) {
        this.z0x("onerror", bN1x);
        this.bH1x.reset()
    }
    ;
    b0x.bcf7Y = function(iM3x) {
        this.z0x("onuploading", .2 + iM3x.loaded / iM3x.total * .8)
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), v0x = c0x("nej.j"), cb1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), iE3x = c0x("nm.x.nos"), E0x = c0x("nm.m"), n0x = c0x("nm.l"), w0x = c0x("nm.w"), b0x, L0x;
    w0x.Ui5n = NEJ.C();
    b0x = w0x.Ui5n.N0x(cb1x.cJ1x);
    b0x.bl1x = function(e0x) {
        e0x = e0x || {};
        this.bn1x(e0x);
        this.bcm8e = w0x.LI2x.A0x(NEJ.X({
            parent: e0x.parent,
            onchange: this.pE5J.f0x(this),
            onuploading: this.z0x.f0x(this, "onuploading"),
            onsuccess: this.z0x.f0x(this, "onsuccess"),
            onerror: this.z0x.f0x(this, "onerror")
        }, e0x, function(p0x) {
            return k0x.gK3x(p0x) || k0x.lG4K(p0x)
        }));
        if (e0x.multiple && iE3x.XV6P()) {
            a9j.gJ3x(this.bcm8e.baJ7C(), "multiple", true)
        }
        this.wK8C = e0x
    }
    ;
    b0x.pE5J = function(e0x) {
        var eP2x = e0x.filename
          , ey2x = (eP2x.split(".") || []).pop();
        this.bCb5g = (e0x.files || [{}])[0];
        this.z0x("onchange", e0x);
        if (iE3x.XV6P() && !e0x.stopped && !e0x.cancelUpload) {
            this.Tu4y(true);
            e0x.stopped = true
        }
    }
    ;
    b0x.baJ7C = function() {
        return this.bcm8e.baJ7C()
    }
    ;
    b0x.cvB8t = function() {
        return this.bCb5g
    }
    ;
    b0x.Tu4y = function(fa2x, cT1x) {
        cT1x = cT1x || this.bCb5g;
        if (iE3x.XV6P()) {
            this.bCd5i = iE3x.hP3x(NEJ.X({
                file: cT1x,
                local: this.wK8C.bucket && this.wK8C.bucket.length,
                onuploading: this.z0x.f0x(this, "onuploading"),
                onsuccess: this.z0x.f0x(this, "onsuccess"),
                onerror: this.z0x.f0x(this, "onerror")
            }, this.wK8C, function(p0x) {
                return k0x.gK3x(p0x) || k0x.lG4K(p0x)
            }));
            return this.bCd5i
        } else if (!fa2x) {
            this.bcm8e.Tu4y()
        }
    }
    ;
    b0x.ky4C = function(C0x) {
        C0x = C0x || this.bCd5i;
        if (C0x) {
            iE3x.ky4C(C0x)
        }
        this.bcm8e.ky4C()
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), em2x = c0x("nej.g"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), v0x = c0x("nej.j"), fH2x = c0x("nej.n"), I0x = c0x("nej.ut"), bc1x = c0x("nej.ui"), w0x = c0x("nm.w"), n0x = c0x("nm.l"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), M0x = c0x("nm.x.f"), iE3x = c0x("nm.x.nos"), b0x, L0x, bhm0x = {
        0: "",
        "-1": "不能添加重复图片",
        "-10": "最多只能添加9张",
        "-3": "请选择不超过5M的图片"
    }, bhg9X = 5 * 1024 * 1024, cGE0x = 80, bdh8Z = /\.(bmp|jpg|jpeg|png|gif)$/i;
    w0x.bCk5p = NEJ.C();
    b0x = w0x.bCk5p.N0x(I0x.wb8T);
    b0x.bhl0x = function() {
        return {
            x: this.Bk9b.clientWidth - this.o0x.offsetWidth,
            y: this.Bk9b.clientHeight - this.o0x.offsetHeight
        }
    }
    ;
    w0x.bgY9P = NEJ.C();
    b0x = w0x.bgY9P.N0x(bc1x.el2x);
    b0x.ch1x = function() {
        this.cf1x = "m-xwgt-share-upload"
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i0x = a9j.H0x(this.o0x, "j-flag");
        this.bef8X = i0x.shift();
        this.MR2x = i0x.shift();
        this.VL5Q = i0x.shift();
        this.bCv5A = {
            onchange: this.bCC6w.eA2x(this, 0),
            onerror: this.dO2x.f0x(this),
            onsuccess: this.rA6u.f0x(this),
            multiple: true,
            parent: this.MR2x,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bfD8v = {
            onchange: this.bCC6w.eA2x(this, 1),
            onerror: this.dO2x.f0x(this),
            onsuccess: this.rA6u.f0x(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cvz8r = w0x.Ui5n.A0x(this.bCv5A)
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.bfD8v.parent = e0x.button;
        this.MK2x && this.MK2x.T0x();
        this.MK2x = w0x.Ui5n.A0x(this.bfD8v);
        this.o0x.style.display = "none";
        if (!!this.eY2x) {
            for (var i = this.eY2x.length - 1; i >= 0; i--) {
                a9j.cL1x(this.eY2x[i].element, false);
                if (this.eY2x[i].dragger)
                    this.eY2x[i].dragger.T0x()
            }
        }
        this.eY2x = [];
        if (this.Cr9i) {
            clearTimeout(this.Cr9i)
        }
        this.bea8S(0);
        this.UW5b = 0;
        this.bX1x([[this.bCv5A.parent, "click", this.bCX6R.f0x(this)], [this.bfD8v.parent, "click", this.bCX6R.f0x(this)]])
    }
    ;
    b0x.bC1x = function() {
        h0x.he3x(this.uf7Y, "click");
        if (!!this.eY2x) {
            for (var i = this.eY2x.length - 1; i >= 0; i--) {
                a9j.cL1x(this.eY2x[i].element, false);
                if (this.eY2x[i].dragger)
                    this.eY2x[i].dragger.T0x()
            }
        }
        this.eY2x = [];
        if (this.Cr9i) {
            clearTimeout(this.Cr9i)
        }
        this.Cr9i = 0;
        this.MK2x && this.MK2x.T0x();
        delete this.MK2x;
        this.bF1x()
    }
    ;
    b0x.bCX6R = function(d0x) {
        if (!iE3x.XV6P() && this.eY2x.doing) {
            h0x.bg1x(d0x)
        }
    }
    ;
    b0x.bCC6w = function(e0x, r0x) {
        var nE5J = e0x.files, ha3x;
        e0x.stopped = true;
        if (!nE5J) {
            if (e0x.filename) {
                nE5J = [{
                    name: e0x.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0, len = nE5J.length; i < len; i++) {
            if (!bdh8Z.test(nE5J[i].name)) {
                this.bhF0x({
                    path: nE5J[i].name,
                    index: r0x,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (nE5J[i].size > bhg9X) {
                this.bhO0x(-3);
                this.bhF0x({
                    path: nE5J[i].name,
                    index: r0x,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bhF0x({
                    path: nE5J[i].name,
                    file: nE5J[i],
                    index: r0x,
                    status: 0
                })
            }
        }
    }
    ;
    b0x.bhF0x = function(tV7O) {
        if (this.eY2x.length >= 9) {
            this.bhO0x(-10, 3e3, this.bDi6c.f0x(this));
            return
        }
        this.cvy8q(tV7O);
        this.eY2x.push(tV7O);
        if (!!this.eY2x.length) {
            this.o0x.style.display = ""
        }
        if (this.eY2x.length >= 9) {
            this.MR2x.style.display = "none"
        } else {
            this.MR2x.style.display = ""
        }
        this.Mo2x()
    }
    ;
    b0x.Mo2x = function() {
        var bim0x = -1
          , bDn6h = 0;
        for (var i = 0, l = this.eY2x.length; i < l; i++) {
            if (this.eY2x[i].status == 1) {
                return
            }
            if (this.eY2x[i].status == 0 && bim0x < 0) {
                bim0x = i
            }
            if (this.eY2x[i].status == 2 || this.eY2x[i].status < 0) {
                bDn6h++
            }
        }
        var p0x = this.eY2x[bim0x];
        if (p0x) {
            (p0x.index == 0 ? this.cvz8r : this.MK2x).Tu4y(false, p0x.file);
            p0x.status = 1;
            this.eY2x.doing = p0x;
            this.z0x("onstartupload", {})
        } else if (bDn6h == this.eY2x.length) {
            this.z0x("onfinishupload", {})
        }
    }
    ;
    b0x.biJ0x = function() {
        return this.eY2x.doing || {}
    }
    ;
    b0x.dO2x = function(d0x) {
        var tV7O = this.biJ0x();
        tV7O.status = -4;
        tV7O.fail = "上传<br>失败";
        this.bDq6k(tV7O);
        this.eY2x.doing = null;
        this.Mo2x()
    }
    ;
    b0x.rA6u = function(d0x) {
        var tV7O = this.biJ0x()
          , dQ2x = d0x.fileName.match(bdh8Z);
        tV7O.picUrl = d0x.url;
        v0x.bm1x("/upload/event/img/v1", {
            query: {
                imgid: d0x.docId,
                format: dQ2x[1]
            },
            type: "json",
            onload: this.bDr6l.f0x(this),
            onerror: this.bDr6l.f0x(this)
        })
    }
    ;
    b0x.bDr6l = function(d0x) {
        if (d0x && d0x.code == 200 && d0x.picInfo) {
            var tV7O = this.biJ0x();
            tV7O.status = 2;
            var bx1x = NEJ.X({}, d0x.picInfo);
            bx1x.originId = bx1x.originIdStr;
            bx1x.squareId = bx1x.squareIdStr;
            bx1x.rectangleId = bx1x.rectangleIdStr;
            bx1x.pcSquareId = bx1x.pcSquareIdStr;
            bx1x.pcRectangleId = bx1x.pcRectangleIdStr;
            bx1x.originJpgId = bx1x.originJpgIdStr || bx1x.originJpgId;
            tV7O.picInfo = bx1x;
            this.bDq6k(tV7O);
            this.eY2x.doing = null;
            this.Mo2x()
        } else {
            this.dO2x(d0x)
        }
    }
    ;
    b0x.bhO0x = function(r0x, kX4b, eN2x) {
        if (this.UW5b < r0x) {
            return
        }
        if (this.Cr9i) {
            clearTimeout(this.Cr9i);
            this.Cr9i = 0
        }
        if (kX4b) {
            this.VL5Q.innerText = bhm0x[r0x * 1];
            this.UW5b = r0x;
            this.Cr9i = setTimeout(this.bea8S.f0x(this, r0x, eN2x), kX4b)
        } else {
            this.VL5Q.innerText = bhm0x[r0x];
            this.UW5b = r0x
        }
        this.VL5Q.style.display = ""
    }
    ;
    b0x.bea8S = function(r0x, eN2x) {
        if (r0x && this.UW5b !== r0x) {
            return
        }
        this.UW5b = 0;
        this.VL5Q.innerText = bhm0x[0];
        this.VL5Q.style.display = "none";
        eN2x && eN2x()
    }
    ;
    b0x.cvy8q = function(cT1x) {
        var j0x = {};
        if (cT1x.fail) {
            j0x.fail = cT1x.fail
        }
        var dV2x = a9j.cd1x("m-xwgt-share-upload-preview", j0x);
        cT1x.element = a9j.nR5W(dV2x);
        h0x.s0x(a9j.H0x(cT1x.element, "del")[0], "mousedown", this.cvx8p.f0x(this, cT1x), false);
        this.bef8X.insertBefore(cT1x.element, this.bef8X.lastElementChild);
        cT1x.dragger = w0x.bCk5p.A0x({
            view: this.bef8X.parentNode,
            body: cT1x.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.UJ5O.f0x(this, cT1x),
            onchange: this.cvv8n.f0x(this, cT1x),
            ondragend: this.bgR9I.f0x(this, cT1x)
        })
    }
    ;
    b0x.bDq6k = function(cT1x) {
        if (!cT1x || !cT1x.element) {
            return false
        }
        var j0x = {};
        if (cT1x.fail) {
            j0x.fail = cT1x.fail
        } else {
            j0x.url = cT1x.picUrl
        }
        a9j.y0x(cT1x.element, "z-fail");
        cT1x.element.firstChild.outerHTML = a9j.cd1x("m-xwgt-share-upload-preview-img", j0x)
    }
    ;
    b0x.UJ5O = function(p0x, kW4a) {
        a9j.y0x(p0x.element, "z-sel")
    }
    ;
    b0x.cvv8n = function(p0x, kW4a) {
        var cGF0x, gt3x = this.eY2x.length - 1, nU5Z;
        for (var i = gt3x; i >= 0; i--) {
            a9j.x0x(this.eY2x[i].element, "z-jump");
            if (this.eY2x[i] == p0x) {
                nU5Z = i
            } else {
                a9j.fb2x(this.eY2x[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var Tr4v = {
            x: 46 + 92 * (nU5Z % 5) + kW4a.left,
            y: 46 + 92 * (nU5Z / 5 >> 0) + kW4a.top
        };
        var bjN1x = Tr4v.x / 92 >> 0
          , bjQ1x = Tr4v.y / 92 >> 0
          , zi9Z = Math.max(0, Math.min(gt3x, bjQ1x * 5 + bjN1x));
        if (zi9Z == nU5Z) {
            return
        }
        var cvs8k = zi9Z < nU5Z;
        for (var i = Math.min(zi9Z, nU5Z); i <= Math.max(zi9Z, nU5Z); i++) {
            if (i !== nU5Z) {
                var bDL6F = i % 5;
                if (cvs8k) {
                    if (bDL6F == 4) {
                        a9j.fb2x(this.eY2x[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a9j.fb2x(this.eY2x[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bDL6F == 0) {
                        a9j.fb2x(this.eY2x[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a9j.fb2x(this.eY2x[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    }
    ;
    b0x.bgR9I = function(p0x, kW4a) {
        var cGG0x, gt3x = this.eY2x.length - 1, nU5Z;
        for (var i = gt3x; i >= 0; i--) {
            a9j.fb2x(this.eY2x[i].element, {
                left: "",
                top: ""
            });
            if (this.eY2x[i] == p0x) {
                nU5Z = i
            }
        }
        a9j.x0x(p0x.element, "z-sel");
        var Tr4v = {
            x: 46 + 92 * (nU5Z % 5) + kW4a.left,
            y: 46 + 92 * (nU5Z / 5 >> 0) + kW4a.top
        };
        var bjN1x = Tr4v.x / 92 >> 0
          , bjQ1x = Tr4v.y / 92 >> 0
          , zi9Z = Math.max(0, Math.min(gt3x, bjQ1x * 5 + bjN1x));
        if (zi9Z == nU5Z) {
            return
        }
        this.bef8X.insertBefore(p0x.element, (this.eY2x[zi9Z + (zi9Z > nU5Z ? 1 : 0)] || {}).element || this.MR2x);
        this.eY2x.splice(nU5Z, 1);
        this.eY2x.splice(zi9Z, 0, p0x)
    }
    ;
    b0x.cvx8p = function(p0x, d0x) {
        a9j.cL1x(p0x.element, false);
        if (p0x.dragger)
            p0x.dragger.T0x();
        delete p0x.dragger;
        var r0x = -1;
        for (var i = this.eY2x.length - 1; i >= 0; i--) {
            if (this.eY2x[i] == p0x) {
                r0x = i;
                break
            }
        }
        this.eY2x.splice(r0x, r0x >= 0 ? 1 : 0);
        delete p0x;
        if (this.eY2x.length >= 9) {
            this.MR2x.style.display = "none"
        } else {
            this.MR2x.style.display = ""
        }
        if (!this.eY2x.length) {
            this.o0x.style.display = "none";
            this.bea8S(0)
        } else {
            this.bDi6c()
        }
        if (this.eY2x.doing == p0x) {
            this.eY2x.doing = null
        }
        this.Mo2x()
    }
    ;
    b0x.bDi6c = function() {
        var bDR6L = false;
        for (var i = 0, len = this.eY2x.length; i < len; i++) {
            if (this.eY2x[i].status == -3) {
                bDR6L = true
            }
        }
        if (bDR6L) {
            this.bhO0x(-3)
        } else {
            this.bea8S(-3)
        }
    }
    ;
    b0x.SK4O = function() {
        var dC2x = [];
        for (var i = this.eY2x.length - 1; i >= 0; i--) {
            if (this.eY2x[i].status == 2) {
                dC2x.unshift(this.eY2x[i].picInfo)
            }
        }
        return dC2x
    }
    ;
    I0x.fK2x.A0x({
        element: w0x.bgY9P,
        event: ["onstartupload", "onfinishupload"]
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, fy2x = NEJ.R, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), bc1x = c0x("nej.ui"), O0x = c0x("nej.ut"), b0x, L0x;
    if (!!O0x.nD5I)
        return;
    O0x.nD5I = NEJ.C();
    b0x = O0x.nD5I.N0x(O0x.bbX7Q);
    L0x = O0x.nD5I.cs1x;
    b0x.bl1x = function(e0x) {
        this.cvp8h(e0x.more);
        this.FM0x = a9j.B0x(e0x.sbody);
        this.cvn8f = e0x.fixScrollPosition;
        this.bX1x([[this.FM0x, "scroll", this.cvm8e.f0x(this)]]);
        var dq2x = e0x.delta;
        if (dq2x == null)
            dq2x = 30;
        this.SD4H = Math.max(0, dq2x);
        var cz1x = parseInt(e0x.count) || 0;
        this.jH4L = Math.max(0, cz1x);
        var gX3x = parseInt(e0x.number) || 0;
        if (gX3x > 1 && gX3x <= cz1x) {
            this.Bb9S = gX3x
        }
        this.bn1x(e0x)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        delete this.Cf9W;
        delete this.FM0x;
        delete this.tQ7J;
        delete this.Zh6b
    }
    ;
    b0x.BT9K = function(bi1x, bq1x) {
        var bM1x = this.yN8F + (this.jH4L - 1) * this.oH5M
          , gc3x = this.jH4L * this.oH5M;
        return L0x.BT9K.call(this, bM1x, bi1x, gc3x, bq1x)
    }
    ;
    b0x.cvp8h = function(Zg6a) {
        this.Cf9W = a9j.B0x(Zg6a);
        this.bX1x([[this.Cf9W, "click", this.oE5J.f0x(this)]])
    }
    ;
    b0x.bkV1x = function(F0x) {
        F0x = F0x || {};
        if (this.tQ7J || !F0x)
            return;
        if (!F0x.scrollHeight)
            F0x = a9j.oy5D();
        var bi1x = a9j.hU3x(this.il3x, this.cvn8f ? F0x : null)
          , dq2x = bi1x.y + this.il3x.offsetHeight - F0x.scrollTop - F0x.clientHeight
          , bkW1x = F0x.scrollHeight <= F0x.clientHeight;
        if (dq2x <= this.SD4H || bkW1x && !this.tQ7J) {
            this.oE5J()
        }
    }
    ;
    b0x.cvm8e = function(d0x) {
        if (this.tQ7J)
            return;
        this.bkV1x(h0x.X1x(d0x))
    }
    ;
    b0x.Cg9X = function(d0x) {
        L0x.Cg9X.apply(this, arguments);
        if (!d0x.stopped) {
            this.Pk3x();
            var bi1x = 0;
            if (d0x.index > 1) {
                bi1x = this.yN8F + ((d0x.index - 1) * this.jH4L - 1) * this.oH5M
            }
            this.hT3x = bi1x;
            this.oE5J()
        }
    }
    ;
    b0x.bQi9Z = function(e0x) {
        if (!!this.Bb9S) {
            var dq2x = e0x.offset > 0 ? this.oH5M : this.yN8F
              , gc3x = dq2x + this.oH5M * (this.Bb9S - 1);
            this.hT3x = e0x.offset + gc3x;
            e0x.data.limit = gc3x;
            e0x.limit = gc3x;
            delete this.Bb9S
        }
        return e0x
    }
    ;
    b0x.bng2x = function(e0x) {
        delete this.Zh6b;
        L0x.bng2x.apply(this, arguments);
        this.bEp6j()
    }
    ;
    b0x.bmu2x = function(d0x) {
        if (d0x.key != this.iU3x.key)
            return;
        switch (d0x.action) {
        case "refresh":
        case "append":
            delete this.Zh6b;
            break
        }
        L0x.bmu2x.apply(this, arguments)
    }
    ;
    b0x.SB4F = function() {
        this.zk9b("onbeforelistload", "列表加载中...");
        a9j.ba1x(this.Cf9W, "display", "none")
    }
    ;
    b0x.bjf0x = function(i0x, bi1x, gc3x) {
        var bq1x = i0x.length
          , blk1x = i0x.loaded ? bi1x + gc3x >= bq1x : bi1x + gc3x > bq1x;
        this.hT3x = Math.min(this.hT3x, bq1x);
        a9j.ba1x(this.Cf9W, "display", blk1x ? "none" : "");
        if (blk1x)
            this.tQ7J = !0;
        if (this.jH4L > 0) {
            var bx1x = this.BT9K(bi1x, i0x.length);
            if (this.bQU0x(bx1x.index, bx1x.total))
                return !0;
            var dq2x = this.yN8F - this.oH5M
              , gX3x = this.jH4L * this.oH5M;
            this.tQ7J = (bi1x + gc3x - dq2x) % gX3x == 0 || blk1x;
            a9j.ba1x(this.Cf9W, "display", this.tQ7J ? "none" : "");
            this.bkG1x(this.tQ7J && bx1x.total > 1 ? "" : "none")
        }
    }
    ;
    b0x.bjT1x = function() {
        this.hT3x = 0;
        this.tQ7J = !0;
        this.zk9b("onemptylist", "没有列表数据！")
    }
    ;
    b0x.Ub5g = function(dV2x, kW4a) {
        this.il3x.insertAdjacentHTML(kW4a || "beforeEnd", dV2x)
    }
    ;
    b0x.Uv5A = function(hu3x) {
        this.fQ3x = this.fQ3x || [];
        if (k0x.eL2x(hu3x)) {
            fy2x.push.apply(this.fQ3x, hu3x)
        } else {
            this.fQ3x.push(hu3x)
        }
    }
    ;
    b0x.bfn8f = function(d0x) {
        a9j.mS5X(this.cu1x);
        this.VJ5O(d0x, "onafteradd");
        var fa2x = d0x.flag;
        if (d0x.stopped || !fa2x)
            return;
        if (this.jH4L > 0) {
            this.bks1x();
            return
        }
        this.hT3x += 1;
        fa2x == -1 ? this.biG0x(d0x.data) : this.bRM0x(d0x.data)
    }
    ;
    b0x.VX5c = function(d0x) {
        this.VJ5O(d0x, "onafterdelete");
        if (d0x.stopped)
            return;
        if (this.jH4L > 0) {
            this.bks1x();
            return
        }
        var C0x = d0x.data[this.ff2x.pkey];
        if (!!this.fQ3x) {
            var p0x = a9j.bCH6B(C0x)
              , r0x = k0x.di2x(this.fQ3x, p0x);
            if (r0x >= 0) {
                this.fQ3x.splice(r0x, 1);
                this.hT3x -= 1
            }
            if (!!p0x)
                p0x.T0x()
        } else {
            var g0x = a9j.B0x(this.bOr9i(C0x));
            if (!!g0x)
                this.hT3x -= 1;
            a9j.cL1x(g0x)
        }
        if (this.hT3x <= 0)
            this.oE5J()
    }
    ;
    b0x.bin0x = function(bi1x, gc3x) {
        if (bi1x != this.hT3x)
            return;
        if (this.Ye6Y()) {
            this.tQ7J = !1;
            this.bEp6j()
        }
    }
    ;
    b0x.bip0x = function(bi1x, gc3x) {
        if (bi1x != 0)
            return;
        var Mu2x = this.S0x.hD3x(this.iU3x.key);
        for (var i = gc3x - 1; i >= 0; i--) {
            this.biG0x(Mu2x[i])
        }
    }
    ;
    b0x.bEp6j = function() {
        var F0x = this.FM0x;
        if (!F0x || this.tQ7J)
            return;
        this.bkV1x(this.FM0x)
    }
    ;
    b0x.gI3x = function() {
        delete this.tQ7J;
        L0x.gI3x.apply(this, arguments)
    }
    ;
    b0x.oE5J = function() {
        if (!!this.Zh6b)
            return;
        this.Zh6b = !0;
        var bi1x = this.hT3x;
        this.hT3x += bi1x == 0 ? this.yN8F : this.oH5M;
        this.bQh9Y(bi1x)
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), cZ1x = c0x("nej.x"), O0x = c0x("nej.ut"), b0x;
    if (!!O0x.FZ1x)
        return;
    O0x.FZ1x = NEJ.C();
    b0x = O0x.FZ1x.N0x(O0x.cJ1x);
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.ji3x = e0x.event || "click";
        this.kQ4U = e0x.selected || "js-selected";
        this.nV5a = e0x.disabled || "js-disabled";
        this.bEs6m = !!e0x.inverse;
        this.cvj8b(e0x.list);
        this.Rt4x(e0x.index || 0)
    }
    ;
    b0x.bC1x = function() {
        var cvi8a = function(g0x) {
            this.blP1x(g0x, !1)
        };
        return function() {
            this.bF1x();
            k0x.bd1x(this.bU1x, cvi8a, this);
            delete this.bU1x;
            delete this.ji3x;
            delete this.cq1x;
            delete this.nV5a;
            delete this.kQ4U;
            delete this.bEs6m
        }
    }();
    b0x.cvj8b = function() {
        var brG3x = function(p0x) {
            if (!p0x)
                return;
            this.bU1x.push(p0x);
            var r0x = this.bU1x.length - 1
              , dx2x = this.blS1x[r0x];
            if (!dx2x) {
                dx2x = this.Rt4x.f0x(this, r0x);
                this.blS1x[r0x] = dx2x
            }
            this.bX1x([[p0x, this.ji3x, dx2x]])
        };
        return function(i0x) {
            this.bU1x = [];
            if (!this.blS1x)
                this.blS1x = [];
            k0x.bd1x(i0x, brG3x, this)
        }
    }();
    b0x.blP1x = function(F0x, cvh8Z) {
        !!cvh8Z && !this.bEs6m ? a9j.y0x(F0x, this.kQ4U) : a9j.x0x(F0x, this.kQ4U)
    }
    ;
    b0x.Rt4x = function(r0x, Qx3x, j0x) {
        var F0x = this.bU1x[r0x];
        if (Qx3x != !0 && (r0x == this.cq1x || !F0x || a9j.bE1x(F0x, this.nV5a))) {
            h0x.cn1x(arguments[1]);
            return this
        }
        var d0x = {
            index: r0x,
            last: this.cq1x,
            list: this.lO4S(),
            data: j0x || a9j.t0x(F0x, "value")
        };
        this.cq1x = r0x;
        F0x = this.bU1x[d0x.last];
        if (!!F0x)
            this.blP1x(F0x, !1);
        F0x = this.bU1x[this.cq1x];
        this.blP1x(F0x, !0);
        this.z0x("onchange", d0x);
        if (!d0x.nostop)
            h0x.cn1x(arguments[1]);
        return this
    }
    ;
    b0x.tm7f = function() {
        return this.cq1x
    }
    ;
    b0x.lO4S = function() {
        return this.bU1x
    }
    ;
    a9j.cvg8Y = cZ1x.cvg8Y = function(bI1x, e0x) {
        var C0x = a9j.lP4T(bI1x);
        if (!C0x)
            return null;
        if (!O0x.beT8L(C0x, O0x.FZ1x)) {
            e0x = e0x || {};
            e0x.list = !e0x.clazz ? a9j.dk2x(C0x) : a9j.H0x(C0x, e0x.clazz);
            delete e0x.clazz
        }
        return O0x.beT8L(C0x, O0x.FZ1x, e0x || bb1x)
    }
    ;
    cZ1x.isChange = !0
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , k0x = c0x("nej.u")
      , v0x = c0x("nej.j")
      , l0x = c0x("nm.x");
    var SETTING_KEY = "player-setting";
    var nC5H = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    nC5H = v0x.tu7n(SETTING_KEY) || nC5H;
    l0x.bmr2x = function() {
        return nC5H
    }
    ;
    l0x.Gi1x = function(Gj1x) {
        if (Gj1x) {
            nC5H = Gj1x;
            v0x.vF7y(SETTING_KEY, Gj1x)
        }
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , a9j = c0x("nej.e")
      , h0x = c0x("nej.v")
      , k0x = c0x("nej.u")
      , I0x = c0x("nej.ut")
      , l0x = c0x("nm.x")
      , q0x = c0x("nm.d")
      , hc3x = c0x("nm.w.player.log");
    var kI4M = q0x.hO3x.A0x();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var hh3x = function(u0x, bG1x, qz6t) {
        var cK1x = l0x.fp2x("{0} {1} {2}", k0x.ih3x(new Date, "yyyy-MM-dd HH:mm:ss"), u0x, bG1x);
        if (qz6t == LogLevel.ERROR) {
            kI4M.eV2x("playerror", {
                message: bG1x
            })
        }
        if (qz6t >= LogLevel.INFO) {
            kI4M.bEi6c(cK1x)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cK1x)
        }
    };
    hc3x.cc1x = function() {
        hh3x("PLAY_ERROR", l0x.fp2x.apply(null, arguments), LogLevel.ERROR)
    }
    ;
    hc3x.pG5L = function() {
        hh3x("PLAY_INFO", l0x.fp2x.apply(null, arguments), LogLevel.INFO)
    }
    ;
    hc3x.cGH0x = function() {
        hh3x("PLAY_DEBUG", l0x.fp2x.apply(null, arguments), LogLevel.DEBUG)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , h0x = c0x("nej.v")
      , I0x = c0x("nej.ut")
      , k0x = c0x("nej.u")
      , w0x = c0x("nm.w")
      , eN2x = c0x("flash.cb");
    var eh2x = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Go1x, bez8r, vC7v;
    w0x.cvc8U = function(u0x, cA1x) {
        if (u0x != "flash") {
            if (!Go1x) {
                Go1x = a9j.dj2x("audio");
                k0x.bd1x(eh2x, function(u0x) {
                    h0x.s0x(Go1x, u0x, onMediaCallBack)
                })
            }
            if (Go1x && Go1x.canPlayType && Go1x.canPlayType("audio/mpeg")) {
                cA1x(new MediaWrap("audio"));
                return
            }
        }
        if (!bez8r) {
            a9j.sv6p({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function(hW3x) {
                    bez8r = hW3x;
                    k0x.bd1x(eh2x, function(u0x) {
                        eN2x[u0x] = onMediaCallBack;
                        bez8r.addCallback(u0x, "flash.cb." + u0x)
                    });
                    cA1x(new MediaWrap("flash"))
                }
                .f0x(this)
            })
        } else {
            cA1x(new MediaWrap("flash"))
        }
    }
    ;
    function MediaWrap(Gs1x) {
        var gU3x;
        I0x.fK2x.A0x({
            element: this,
            event: eh2x.concat(["interrupt", "recover"])
        });
        gU3x = Gs1x == "audio" ? Go1x : bez8r;
        this.type = Gs1x;
        this.destroy = function() {}
        ;
        this.setSrc = function(Y1x) {
            if (vC7v != this) {
                var gt3x = vC7v;
                if (gt3x) {
                    gt3x.interrupt()
                }
                vC7v = this
            }
            if (Gs1x == "flash") {
                gU3x.setSrc(Y1x)
            } else {
                gU3x.src = Y1x
            }
        }
        ;
        this.play = function() {
            if (vC7v != this) {
                var gt3x = vC7v;
                if (gt3x) {
                    gt3x.interrupt();
                    vC7v = this;
                    this.recover()
                } else {
                    vC7v = this
                }
            }
            if (Gs1x == "flash") {
                gU3x.as_play()
            } else {
                gU3x.play()
            }
        }
        ;
        this.pause = function() {
            if (vC7v != this)
                return;
            if (Gs1x == "flash") {
                gU3x.as_pause()
            } else {
                gU3x.pause()
            }
        }
        ;
        this.load = function() {
            if (vC7v != this)
                return;
            if (Gs1x == "flash") {
                gU3x.as_load()
            } else {
                gU3x.load()
            }
        }
        ;
        this.interrupt = function() {
            onMediaCallBack({
                type: "interrupt"
            })
        }
        ;
        this.recover = function() {
            onMediaCallBack({
                type: "recover"
            })
        }
        ;
        this.getMedia = function() {
            return gU3x
        }
        ;
        var oF5K = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k0x.bd1x(oF5K, function(W1x) {
            var Pt3x = "get" + W1x
              , Ps3x = "set" + W1x;
            if (Gs1x == "flash") {
                if (!this[Pt3x]) {
                    this[Pt3x] = function() {
                        return gU3x[Pt3x]()
                    }
                }
                if (!this[Ps3x]) {
                    this[Ps3x] = function(value) {
                        gU3x[Ps3x](value)
                    }
                }
            } else {
                var bFg6a = W1x.slice(0, 1).toLowerCase() + W1x.slice(1);
                if (!this[Pt3x]) {
                    this[Pt3x] = function() {
                        return gU3x[bFg6a]
                    }
                }
                if (!this[Ps3x]) {
                    this[Ps3x] = function(value) {
                        gU3x[bFg6a] = value
                    }
                }
            }
        }, this)
    }
    function onMediaCallBack(d0x) {
        if (vC7v) {
            h0x.z0x(vC7v, d0x.type, d0x)
        }
    }
}
)();
(function() {
    var c0x = NEJ.P, h0x = c0x("nej.v"), v0x = c0x("nej.j"), I0x = c0x("nej.ut"), dy2x = c0x("nej.p"), w0x = c0x("nm.w"), l0x = c0x("nm.x"), hc3x = c0x("nm.w.player.log"), b0x;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bFj6d = false;
    w0x.fS3x = NEJ.C();
    b0x = w0x.fS3x.N0x(I0x.cJ1x);
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.cP1x = {};
        this.bcn8f(e0x.media);
        v0x.bm1x("/api/cdns", {
            type: "json",
            onload: function(d0x) {
                if (d0x.code) {
                    this.ro6i = d0x.data
                }
            }
            .f0x(this)
        })
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        delete this.cP1x
    }
    ;
    b0x.bch7a = function(bj1x) {
        if (!bj1x)
            return;
        var xd8V = this.cP1x.volume;
        if (this.dW2x) {
            this.dW2x.pause()
        }
        this.cP1x = {
            time: 0,
            id: bj1x.id,
            duration: bj1x.duration / 1e3,
            play: this.cP1x.play,
            stalledRetryCount: 0
        };
        if (xd8V != null) {
            this.cP1x.volume = xd8V
        }
        this.cP1x.loadState = LoadState.LOAD_START;
        this.bFy6s(bj1x.id);
        hc3x.pG5L("play song id: {0}", bj1x.id)
    }
    ;
    b0x.eq2x = function() {
        if (this.cP1x.error) {
            this.cP1x.error = null;
            if (this.cP1x.error == ErrorType.INFO_GET_ERR || this.bFz6t()) {
                this.bFA6u()
            } else {
                this.Pd3x()
            }
        } else {
            if (this.dW2x) {
                this.dW2x.play()
            }
        }
        this.cP1x.play = true;
        this.qn6h("play")
    }
    ;
    b0x.fD2x = function() {
        if (this.dW2x) {
            this.dW2x.pause()
        }
        this.cP1x.play = false;
        this.qn6h("pause")
    }
    ;
    b0x.oJ5O = function(bA1x) {
        if (this.dW2x) {
            this.dW2x.setCurrentTime(bA1x)
        }
        this.cP1x.time = bA1x;
        hc3x.pG5L("seek to: {0}", bA1x)
    }
    ;
    b0x.bnV2x = function() {
        return this.cP1x.duration || 0
    }
    ;
    b0x.up7i = function() {
        return !!this.cP1x.play
    }
    ;
    b0x.mF5K = function(Ou3x) {
        this.cP1x.volume = Ou3x;
        if (this.dW2x) {
            this.dW2x.setVolume(Ou3x)
        }
    }
    ;
    b0x.bak7d = function() {
        return this.cP1x.time
    }
    ;
    b0x.bcn8f = function(u0x) {
        w0x.cvc8U(u0x, function(gU3x) {
            this.dW2x = gU3x;
            hc3x.pG5L("media loaded: {0}", gU3x.type);
            this.bX1x([[this.dW2x, "loadedmetadata", this.cvb8T.f0x(this)], [this.dW2x, "ended", this.cva8S.f0x(this)], [this.dW2x, "waiting", this.yB8t.f0x(this)], [this.dW2x, "play", this.uq7j.f0x(this)], [this.dW2x, "pause", this.bpi2x.f0x(this)], [this.dW2x, "playing", this.NQ3x.f0x(this)], [this.dW2x, "timeupdate", this.cuY8Q.f0x(this)], [this.dW2x, "progress", this.ri6c.f0x(this)], [this.dW2x, "stalled", this.bpP2x.f0x(this)], [this.dW2x, "interrupt", this.fD2x.f0x(this)], [this.dW2x, "recover", this.cuX8P.f0x(this)], [this.dW2x, "error", this.dO2x.f0x(this)]]);
            if (this.cP1x) {
                if (this.cP1x.loadState == LoadState.LOAD_START || this.cP1x.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bqd2x();
                    if (this.cP1x.volume != null) {
                        this.dW2x.setVolume(this.cP1x.volume)
                    }
                }
            }
        }
        .f0x(this))
    }
    ;
    b0x.cuV8N = function(u0x) {
        this.KO2x();
        this.dW2x.destroy();
        this.cP1x.loadState = LoadState.IN_SWITCH_MEDIA;
        this.yB8t();
        this.bcn8f(u0x);
        hc3x.pG5L("switch media")
    }
    ;
    b0x.cGI0x = function() {
        return this.dW2x
    }
    ;
    b0x.bFy6s = function() {
        this.yB8t();
        v0x.bm1x("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cP1x.id]),
                br: DEFAULT_BR
            },
            onload: this.bGn6h.f0x(this),
            onerror: this.bGn6h.f0x(this)
        })
    }
    ;
    b0x.bGn6h = function(d0x) {
        if (d0x.code == 200 && d0x.data && d0x.data.length) {
            var bx1x = d0x.data[0];
            if (!bx1x.url) {
                this.cP1x.error = ErrorType.INFO_GET_ERR;
                this.qn6h("error", {
                    code: this.cP1x.error
                });
                return
            }
            this.cP1x.playUrl = bx1x.url;
            this.cP1x.expireTime = (new Date).getTime() + bx1x.expi * 1e3;
            this.bqd2x()
        } else {
            this.cP1x.error = ErrorType.INFO_GET_ERR;
            this.qn6h("error", {
                code: this.cP1x.error
            });
            hc3x.cc1x("info load error")
        }
    }
    ;
    b0x.bqd2x = function() {
        if (this.dW2x) {
            var Y1x = this.cP1x.playUrl;
            if (this.cP1x.time > 0 && (this.cP1x.loadState == LoadState.IN_RE_GET_URL || this.cP1x.loadState == LoadState.IN_RE_GET_URL)) {
                Y1x += "#t=" + this.cP1x.time
            }
            this.dW2x.setSrc(Y1x);
            hc3x.pG5L("load mp3: {0},loadState: {1}.", Y1x, this.cP1x.loadState)
        }
    }
    ;
    b0x.bGo6i = function() {
        if (/#t=(\d+)$/.test(this.dW2x.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    }
    ;
    b0x.Pd3x = function() {
        var bA1x = parseInt(this.cP1x.time) || 0
          , cuT8L = this.bGo6i();
        if (bA1x === cuT8L) {
            this.dW2x.load()
        } else {
            this.dW2x.setSrc(this.cP1x.playUrl + "#t=" + bA1x)
        }
        this.cP1x.loadState = LoadState.IN_RELOAD;
        this.yB8t();
        hc3x.pG5L("reload from: {0}", bA1x)
    }
    ;
    b0x.bFA6u = function() {
        this.cP1x.loadState = LoadState.IN_RE_GET_URL;
        this.bFy6s()
    }
    ;
    b0x.bGq6k = function() {
        var qk6e = getHost(this.cP1x.playUrl);
        if (qk6e) {
            for (var i = 0; i < this.ro6i.length; i++) {
                var iq3x = this.ro6i[i] || []
                  , r0x = iq3x.indexOf(qk6e);
                if (r0x >= 0 && iq3x.length > 1) {
                    return iq3x[(r0x + 1) % iq3x.length]
                }
            }
        }
        function getHost(Y1x) {
            if (CDN_HOST_REG.test(Y1x))
                return RegExp.$1
        }
    }
    ;
    b0x.cuS8K = function() {
        this.cP1x.playUrl = this.cP1x.playUrl.replace(CDN_HOST_REG, this.bGq6k());
        this.cP1x.loadState = LoadState.IN_SWITCH_CDN;
        this.bqd2x();
        this.yB8t()
    }
    ;
    b0x.cvb8T = function() {
        if (this.cP1x.loadState == LoadState.LOAD_START) {
            this.cP1x.loadState = LoadState.LOADED_META;
            if (this.dW2x.type == "audio") {
                this.cP1x.duration = this.dW2x.getDuration()
            }
            this.qn6h("loadedmeta", {
                duration: this.cP1x.duration
            })
        } else {
            this.cP1x.loadState = LoadState.LOADED_META
        }
        if (this.cP1x.play) {
            this.dW2x.play()
        } else {
            this.dW2x.pause()
        }
        if (this.cP1x.time && parseInt(this.cP1x.time) != this.bGo6i()) {
            this.dW2x.setCurrentTime(this.cP1x.time)
        }
        this.JL2x();
        this.NQ3x();
        bFj6d = true;
        hc3x.pG5L("loaded meta")
    }
    ;
    b0x.cva8S = function() {
        this.cP1x.ended = true;
        this.qn6h("ended")
    }
    ;
    b0x.yB8t = function() {
        if (!this.cP1x.waiting) {
            this.cP1x.waiting = true;
            this.cP1x.waitTimestamp = +(new Date);
            this.qn6h("waiting")
        }
    }
    ;
    b0x.NQ3x = function() {
        this.cP1x.waiting = false;
        this.cP1x.waitTimestamp = 0;
        this.qn6h("playing")
    }
    ;
    b0x.uq7j = function() {
        this.qn6h("play")
    }
    ;
    b0x.bpi2x = function() {
        this.qn6h("pause")
    }
    ;
    b0x.cuY8Q = function() {
        if (this.cP1x.loadState != LoadState.LOADED_META)
            return;
        var bA1x = this.dW2x.getCurrentTime();
        if (this.cP1x.waiting && bA1x > this.cP1x.time) {
            this.NQ3x()
        }
        this.cP1x.time = bA1x;
        this.qn6h("timeupdate", {
            time: this.cP1x.time,
            duration: this.cP1x.duration
        })
    }
    ;
    b0x.ri6c = function(d0x) {
        if (this.cP1x.loadState != LoadState.LOADED_META)
            return;
        var m0x = {};
        if (d0x.data) {
            m0x.total = d0x.data.total;
            m0x.loaded = d0x.data.loaded
        } else {
            var yy8q = this.dW2x.getBuffered()
              , bA1x = this.dW2x.getCurrentTime()
              , ox5C = 0;
            for (var i = 0; i < yy8q.length; i++) {
                if (bA1x > yy8q.start(i) && bA1x < yy8q.end(i)) {
                    ox5C = yy8q.end(i);
                    break
                }
            }
            m0x.total = this.cP1x.duration;
            m0x.loaded = Math.min(ox5C, m0x.total)
        }
        this.qn6h("progress", m0x)
    }
    ;
    b0x.JL2x = function() {
        if (this.cP1x.retry) {
            clearTimeout(this.cP1x.retry.tid);
            this.cP1x.retry = null
        }
    }
    ;
    b0x.dO2x = function() {
        var ca1x = this.dW2x.getError();
        hc3x.cc1x("media error code: {0}, netState: {1}", ca1x.code, this.dW2x.getNetworkState());
        if (ca1x.code == MediaError.MEDIA_ERR_NETWORK || ca1x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Gj1x = l0x.bmr2x();
            if (!this.cP1x.retry) {
                this.cP1x.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cP1x.retry.tid)
            }
            if (this.cP1x.retry.level == RetryLevel.NONE) {
                if (this.bFz6t()) {
                    this.cP1x.retry.level = RetryLevel.GET_URL;
                    this.bFA6u();
                    hc3x.pG5L("Url expired, get url.")
                } else {
                    this.cP1x.retry.level = RetryLevel.RELOAD;
                    this.cP1x.retry.tid = setTimeout(this.Pd3x.f0x(this), 3e3);
                    hc3x.pG5L("Reload mp3 3s later.")
                }
            } else if (this.cP1x.retry.level == RetryLevel.GET_URL) {
                this.cP1x.retry.level = RetryLevel.RELOAD;
                this.cP1x.retry.tid = setTimeout(this.Pd3x.f0x(this), 3e3);
                hc3x.pG5L("Reload mp3 3s later.")
            } else if (this.cP1x.retry.level == RetryLevel.RELOAD) {
                this.cP1x.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bGq6k()) {
                    this.cP1x.retry.tid = setTimeout(this.cuS8K.f0x(this), 5e3);
                    hc3x.pG5L("Switch CDN 5s later.")
                } else {
                    this.cP1x.retry.tid = setTimeout(this.Pd3x.f0x(this), 5e3);
                    hc3x.pG5L("Reload mp3 5s later.")
                }
            } else if (!bFj6d && this.dW2x.type == "audio" && !Gj1x.useFlash && !dy2x.Ik1x.mac && l0x.bpk2x().supported) {
                Gj1x.useFlash = true;
                l0x.Gi1x(Gj1x);
                this.cuV8N("flash")
            } else {
                this.JL2x();
                this.fD2x();
                this.cP1x.error = ErrorType.NET_ERR;
                this.qn6h("error", {
                    code: this.cP1x.error
                });
                hc3x.cc1x("error can not retry.")
            }
        } else {
            this.JL2x();
            this.fD2x();
            this.cP1x.error = ErrorType.UNKNOWN_ERR;
            this.qn6h("error", {
                code: this.cP1x.error
            });
            hc3x.cc1x("error can not retry.")
        }
    }
    ;
    b0x.bpP2x = function() {
        var hV3x = 0
          , bGv6p = 5e3;
        return function() {
            this.yB8t();
            clearTimeout(hV3x);
            setTimeout(function() {
                var eS2x = +(new Date);
                if (this.cP1x.waiting && eS2x - this.cP1x.waitTimestamp >= bGv6p && this.cP1x.stalledRetryCount < MAX_STALLED_RETRY) {
                    hc3x.pG5L("stalled too long retry.");
                    this.cP1x.stalledRetryCount++;
                    this.Pd3x()
                }
            }
            .f0x(this), bGv6p);
            hc3x.pG5L("stalled")
        }
    }();
    b0x.bFz6t = function() {
        var eS2x = +(new Date);
        return eS2x > this.cP1x.expireTime
    }
    ;
    b0x.cuX8P = function() {
        var bA1x = parseInt(this.cP1x.time) || 0;
        this.dW2x.setSrc(this.cP1x.playUrl + "#t=" + bA1x);
        this.cP1x.loadState = LoadState.IN_RELOAD;
        this.yB8t();
        hc3x.pG5L("recover from: {0}", bA1x)
    }
    ;
    b0x.qn6h = function(V0x, j0x) {
        h0x.z0x(w0x.fS3x, "playaction", {
            action: V0x,
            data: j0x || {}
        })
    }
    ;
    I0x.fK2x.A0x({
        element: w0x.fS3x,
        event: ["playaction"]
    })
}
)();
(function() {
    if (!(window == top)) {
        return
    }
    var c0x = NEJ.P, h0x = c0x("nej.v"), I0x = c0x("nej.ut"), w0x = c0x("nm.w"), b0x;
    w0x.Hd1x = NEJ.C();
    b0x = w0x.Hd1x.N0x(w0x.fS3x);
    L0x = w0x.Hd1x.cs1x;
    b0x.cw1x = function() {
        this.cE1x()
    }
    ;
    b0x.cuR8J = function(bP1x) {
        this.bch7a(bP1x);
        this.eq2x()
    }
    ;
    b0x.brp3x = function() {
        this.fD2x()
    }
    ;
    b0x.wt8l = function(d0x) {
        if (d0x.action == "play") {
            this.fD2x()
        }
    }
    ;
    b0x.qn6h = function(V0x, j0x) {
        h0x.z0x(w0x.Hd1x, "tmpplayaction", {
            action: V0x,
            data: j0x || {},
            tmp: true
        })
    }
    ;
    b0x.tt7m = function() {
        return this.cP1x
    }
    ;
    I0x.fK2x.A0x({
        element: w0x.Hd1x,
        event: ["tmpplayaction"]
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), fH2x = c0x("nej.n"), v0x = c0x("nej.j"), I0x = c0x("nej.ut"), bc1x = c0x("nej.ui"), w0x = c0x("nm.w"), n0x = c0x("nm.l"), lc4g = c0x("nm.c"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, L0x, bcN8F = [{
        item: "m-publish-search-single",
        type: 1
    }, {
        item: "m-publish-search-artist",
        type: 100
    }, {
        item: "m-publish-search-album",
        type: 10
    }, {
        item: "m-publish-search-mv",
        type: 1004
    }, {
        item: "m-publish-search-playlist",
        type: 1e3
    }, {
        item: "m-publish-search-djRadio",
        type: 1009
    }];
    var brS3x = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    w0x.bsf3x = NEJ.C();
    b0x = w0x.bsf3x.N0x(bc1x.el2x);
    b0x.cw1x = function(e0x) {
        this.cE1x(e0x);
        var i0x = a9j.H0x(this.o0x, "j-flag");
        this.cGJ0x = i0x.shift();
        this.cuO7H = i0x.shift();
        this.Jj1x = i0x.shift();
        this.btk3x = i0x.shift();
        this.btC3x = [i0x.shift(), i0x.shift(), i0x.shift(), i0x.shift(), i0x.shift(), i0x.shift()];
        this.Xq5v = i0x.shift();
        this.bHg7Z = i0x.shift();
        this.so6i = {
            list: this.btC3x,
            selected: "z-curr",
            onchange: this.bHi7b.f0x(this)
        };
        h0x.s0x(this.Jj1x, "input", this.Wg5l.f0x(this));
        h0x.s0x(this.Jj1x, "propertychange", this.Wg5l.f0x(this));
        h0x.s0x(this.Jj1x, "keyup", this.Wg5l.f0x(this));
        h0x.s0x(this.cuO7H, "click", this.Wg5l.f0x(this));
        h0x.s0x(this.Xq5v, "click", this.cM1x.f0x(this));
        h0x.s0x(this.bHg7Z, "click", function() {
            this.z0x("oncancel", {})
        }
        .f0x(this));
        this.S0x = q0x.HB1x.gm3x();
        this.Pp3x = top.nm.w.Hd1x.gm3x();
        I0x.fK2x.A0x({
            element: top.nm.w.Hd1x,
            event: ["tmpplayaction"]
        });
        this.rP6J = {
            limit: 100,
            offset: 0,
            parent: this.Xq5v,
            onbeforelistload: this.qv6p.f0x(this)
        };
        q0x.sk = "fuck" + a9j.t0x(this.btk3x, "xname") + "458";
        h0x.s0x(top.nm.w.Hd1x, "tmpplayaction", this.wt8l.f0x(this))
    }
    ;
    b0x.ch1x = function() {
        this.cf1x = "m-xwgt-publish-search"
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        if (!!this.Bn9e) {
            this.Bn9e.T0x();
            delete this.Bn9e
        }
        this.so6i.index = brS3x[e0x.type || "song"];
        this.Bn9e = I0x.FZ1x.A0x(this.so6i);
        this.Jj1x.value = "";
        this.Jj1x.focus();
        this.uN7G = "";
        this.cGK0x = 0;
        if (e0x.showMV == true) {
            this.btC3x[brS3x["mv"]].parentNode.style.display = "";
            a9j.y0x(this.btk3x, "srchtab-1")
        } else {
            this.btC3x[brS3x["mv"]].parentNode.style.display = "none";
            a9j.x0x(this.btk3x, "srchtab-1")
        }
        if (!!this.dK2x) {
            this.dK2x = this.dK2x.T0x()
        }
        if (e0x.hideBack) {
            a9j.y0x(this.bHg7Z.parentNode, "f-hide")
        }
    }
    ;
    b0x.bC1x = function() {
        this.Pp3x.brp3x();
        this.bF1x()
    }
    ;
    b0x.Wg5l = function() {
        var value = this.Jj1x.value.trim();
        if (value && value.length) {
            if (value != this.uN7G) {
                this.uN7G = value;
                this.bHi7b({
                    index: this.Bn9e.tm7f()
                })
            }
        } else {
            if (this.dK2x) {
                this.dK2x = this.dK2x.T0x()
            }
        }
        this.uN7G = value
    }
    ;
    b0x.cM1x = function() {
        var cuM7F = function(F0x) {
            return a9j.bE1x(F0x, "sitm") || a9j.bE1x(F0x, "itm") || a9j.bE1x(F0x, "mv-item")
        }
          , cuL7E = function(F0x) {
            return a9j.bE1x(F0x, "ply")
        }
          , bHz7s = function() {
            n0x.Z1x.J0x({
                type: 2,
                tip: "因合作方要求，该资源需付费使用"
            })
        }
          , cuK7D = function() {
            n0x.Z1x.J0x({
                type: 2,
                tip: "因合作方要求，该资源需下载后播放"
            })
        }
          , buk3x = function(bj1x) {
            if (bj1x && bj1x.privilege && bj1x.privilege.toast) {
                v0x.bm1x("/api/song/toast", {
                    query: {
                        id: bj1x.id
                    },
                    type: "json",
                    onload: QH4L.f0x(this),
                    onerror: QH4L.f0x(this)
                })
            } else {
                QI4M()
            }
        }
          , QH4L = function(Q0x) {
            QI4M((Q0x || bb1x).toast)
        }
          , QI4M = function(bG1x) {
            n0x.Z1x.J0x({
                type: 2,
                tip: bG1x || "因合作方要求，该资源暂时下架>_<"
            })
        };
        return function(d0x) {
            var Hy1x = h0x.X1x(d0x, cuL7E)
              , i0x = h0x.X1x(d0x, cuM7F)
              , ex2x = this.Pp3x.tt7m();
            if (!!i0x) {
                h0x.bg1x(d0x);
                this.OS3x = a9j.t0x(i0x, "id");
                this.OO3x = a9j.t0x(i0x, "type");
                if (this.OO3x == 18) {
                    var bP1x = this.S0x.eJ2x(this.OS3x)
                      , qz6t = l0x.qq6k(bP1x);
                    if (!Hy1x) {
                        if (qz6t == 10) {
                            bHz7s();
                            return
                        } else if (qz6t == 100) {
                            buk3x(bP1x);
                            return
                        }
                    } else {
                        if (qz6t == 10) {
                            bHz7s();
                            return
                        } else if (qz6t == 100) {
                            buk3x(bP1x);
                            return
                        } else if (qz6t == 11) {
                            cuK7D();
                            return
                        } else {
                            a9j.x0x(this.Bl9c, "z-pause z-loading");
                            if (Hy1x == this.Bl9c && ex2x.play && !ex2x.ended) {
                                this.Pp3x.brp3x()
                            } else {
                                this.Bl9c = Hy1x;
                                this.Pp3x.cuR8J(bP1x)
                            }
                            return
                        }
                    }
                } else if (this.OO3x == 70) {
                    if (a9j.bE1x(i0x, "z-noprogram")) {
                        n0x.Z1x.J0x({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.cuH7A()
            }
        }
    }();
    b0x.cuH7A = function() {
        var hZ3x = this.S0x.eJ2x(this.OS3x)
          , th7a = l0x.bMg8Y(this.OO3x, hZ3x);
        th7a.title = th7a.title || "";
        th7a.author = th7a.author || "";
        th7a.picUrl = th7a.picUrl || "";
        th7a.authors = th7a.authors || "";
        if (this.OO3x == 70) {
            this.OS3x = this.OS3x.slice(0, -4)
        }
        this.z0x("onfinish", {
            id: this.OS3x,
            type: this.OO3x,
            data: th7a
        })
    }
    ;
    b0x.wt8l = function(d0x) {
        var j0x = d0x.data;
        if (!this.Bl9c) {
            return
        }
        switch (d0x.action) {
        case "play":
            a9j.fj2x(this.Bl9c, "z-pause z-play", "z-loading");
            break;
        case "pause":
        case "ended":
            a9j.x0x(this.Bl9c, "z-pause z-loading");
            break;
        case "error":
            n0x.Z1x.J0x({
                type: 2,
                tip: "试听遇到问题，播放失败"
            });
            a9j.x0x(this.Bl9c, "z-pause z-loading");
            break;
        case "playing":
            a9j.fj2x(this.Bl9c, "z-loading", "z-pause");
            break;
        case "waiting":
            a9j.fj2x(this.Bl9c, "z-pause", "z-loading");
            break
        }
    }
    ;
    b0x.cuF7y = function(d0x) {
        if (d0x.result.code == 407) {
            this.Xq5v.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.Xq5v.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    }
    ;
    b0x.bHi7b = function(d0x) {
        if (!this.uN7G || d0x.index < 0 || d0x.index > 5) {
            return
        }
        this.Pp3x.brp3x();
        var bh1x = bcN8F[d0x.index]
          , e0x = NEJ.X({}, this.rP6J);
        e0x.cache = {
            klass: q0x.HB1x,
            clear: true,
            onerror: this.cuF7y.f0x(this)
        };
        e0x.cache.lkey = "search-publish-" + bh1x.type + "-" + this.uN7G;
        e0x.item = {
            klass: bh1x.item,
            getRestrictLevel: l0x.qq6k,
            dur2time: l0x.lj4n
        };
        if (!e0x.cache.data) {
            e0x.cache.data = {}
        }
        e0x.cache.data.s = this.uN7G;
        e0x.cache.data.type = bh1x.type;
        e0x.cache.data.isPub = true;
        if (bh1x.type == 1) {
            e0x.cache.data.hlpretag = '<span class="s-fc7">';
            e0x.cache.data.hlposttag = "</span>"
        }
        e0x.onemptylist = this.cuE7x.f0x(this, this.uN7G);
        if (!!this.HF1x)
            this.S0x.vw7p(this.HF1x);
        if (!!this.dK2x) {
            this.dK2x = this.dK2x.T0x()
        }
        this.dK2x = I0x.nD5I.A0x(e0x);
        this.HF1x = e0x.cache.lkey
    }
    ;
    b0x.qv6p = function(d0x) {
        d0x.value = a9j.iH3x("m-publish-search-loading")
    }
    ;
    b0x.cuE7x = function(K0x, d0x) {
        a9j.dA2x(d0x.parent, "m-publish-emtpy-message", {
            key: K0x
        });
        d0x.stopped = true
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), dy2x = c0x("nej.p"), v0x = c0x("nej.j"), cb1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), w0x = c0x("nm.w"), b0x, L0x;
    var cuC7v = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    w0x.HG1x = NEJ.C();
    b0x = w0x.HG1x.N0x(bD1x.el2x);
    var ge3x = a9j.eB2x("m-wgt-receiverInput");
    var cuq7j = a9j.eB2x("m-wgt-receiverList");
    var iX3x = a9j.to7h(cuC7v);
    var cun7g = a9j.eB2x('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b0x.cw1x = function(e0x) {
        this.bk1x = [];
        this.xw8o = e0x.receiver || null;
        this.cul7e = e0x.unique || false;
        this.nz5E = e0x.err;
        this.bJb7U(this.bJc7V, e0x.uid);
        this.cE1x(e0x)
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.Nf3x();
        this.Nd3x();
        this.WV5a();
        if (e0x.receiver)
            this.bwd4h(e0x.receiver.nickname, e0x.receiver.userId);
        a9j.ba1x(this.AQ9H, "display", "block");
        a9j.ba1x(this.bwl4p, "cursor", "text");
        a9j.ba1x(this.AQ9H, "cursor", "text")
    }
    ;
    b0x.ch1x = function() {
        var j0x = this.bJw7p();
        this.cf1x = a9j.jm4q(a9j.cd1x(ge3x, {
            receiver: this.xw8o,
            users: j0x
        }));
        this.mj4n = iX3x
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var bS1x = a9j.H0x(this.o0x, "j-flag");
        var hu3x = a9j.H0x(this.o0x, "j-item");
        this.bwl4p = bS1x[0];
        this.bJz7s = bS1x[1];
        this.ef2x = bS1x[2];
        this.AQ9H = bS1x[3];
        this.ZN7G = bS1x[4];
        this.bxe4i = bS1x[5];
        this.fQ3x = hu3x;
        a9j.y0x(this.fQ3x[0], "j-selected");
        h0x.s0x(this.ef2x, "keyup", this.bxp4t.f0x(this));
        h0x.s0x(this.ef2x, "keydown", this.QB4F.f0x(this));
        h0x.s0x(this.ef2x, "focus", this.lr4v.f0x(this));
        h0x.s0x(this.ZN7G, "click", this.cuk7d.f0x(this));
        h0x.s0x(this.bwl4p, "click", this.cuj7c.f0x(this));
        h0x.s0x(document.body, "click", this.oK5P.f0x(this));
        h0x.s0x(this.ef2x, "input", this.fW3x.f0x(this));
        h0x.s0x(this.ef2x, "blur", this.nT5Y.f0x(this))
    }
    ;
    b0x.bC1x = function(e0x) {
        h0x.mo4s(document.body, "click", this.oK5P.f0x(this));
        this.bF1x();
        this.WV5a();
        this.cug7Z();
        this.oK5P()
    }
    ;
    b0x.bxp4t = function(d0x) {
        h0x.bg1x(d0x);
        var jX4b = d0x.keyCode || d0x.which;
        var bo1x = this.ef2x.value;
        var bq1x = this.fQ3x.length;
        var sD7w = a9j.H0x(this.o0x, "j-selected")[0];
        switch (jX4b) {
        case 13:
            var lg4k = a9j.gJ3x(sD7w, "data-username");
            var ip3x = a9j.gJ3x(sD7w, "data-userId");
            this.bwd4h(lg4k, ip3x);
            this.oK5P();
            this.ef2x.value = "";
            break;
        case 38:
            var r0x = a9j.gJ3x(sD7w, "data-index") - 1 < 0 ? bq1x - 1 : a9j.gJ3x(sD7w, "data-index") - 1;
            a9j.x0x(sD7w, "j-selected");
            a9j.y0x(this.fQ3x[r0x], "j-selected");
            break;
        case 40:
            var r0x = parseInt(a9j.gJ3x(sD7w, "data-index")) + 1 >= bq1x ? 0 : parseInt(a9j.gJ3x(sD7w, "data-index")) + 1;
            a9j.x0x(sD7w, "j-selected");
            a9j.y0x(this.fQ3x[r0x], "j-selected");
            break;
        default:
            this.xH8z()
        }
    }
    ;
    b0x.QB4F = function(d0x) {
        var jX4b = d0x.keyCode || d0x.which;
        var bo1x = this.ef2x.value;
        var r0x = a9j.H0x(this.o0x, "j-receiver").length - 1;
        if (jX4b === 8 && bo1x === "")
            this.cuf7Y(r0x)
    }
    ;
    b0x.fW3x = function(d0x) {
        var bo1x = this.ef2x.value;
        if (bo1x.length > 10) {
            this.ef2x.value = bo1x.substring(0, 10);
            return
        }
        dy2x.dr2x.browser == "ie" && dy2x.dr2x.version < "7.0" ? setTimeout(this.bxU4Y.f0x(this), 0) : this.bxU4Y();
        this.Nd3x()
    }
    ;
    b0x.lr4v = function() {
        if (this.bk1x[0])
            this.xH8z();
        else
            this.bJb7U(this.cuc7V);
        a9j.ba1x(this.AQ9H, "display", "none")
    }
    ;
    b0x.nT5Y = function() {
        var bq1x = a9j.H0x(this.o0x, "j-receiver").length;
        if (this.ef2x.value.trim() == "" && bq1x <= 0)
            a9j.ba1x(this.AQ9H, "display", "block")
    }
    ;
    b0x.bwd4h = function(lg4k, ip3x) {
        var KD2x = this.Ve5j();
        if (KD2x.length >= 10) {
            this.dY2x();
            return
        }
        var bc1x;
        for (bc1x = 0; bc1x < KD2x.length; bc1x++) {
            if (KD2x[bc1x] == ip3x) {
                this.oK5P();
                return
            }
        }
        if (!lg4k || !ip3x)
            return;
        var g0x = a9j.dD2x(a9j.jm4q(a9j.cd1x(cun7g, {
            username: lg4k,
            userId: ip3x
        })));
        var bI1x = this.bJz7s.parentNode;
        if (this.cul7e) {
            this.WV5a()
        }
        bI1x.insertBefore(g0x, this.bJz7s);
        this.ef2x.value = "";
        var bq1x = a9j.H0x(this.o0x, "j-receiver").length;
        if (bq1x > 1)
            a9j.ba1x(this.AQ9H, "display", "none");
        this.bxU4Y();
        this.Nd3x()
    }
    ;
    b0x.WV5a = function() {
        var Ul5q = a9j.H0x(this.o0x, "j-receiver");
        var bc1x;
        if (Ul5q.length > 0) {
            for (bc1x = 0; bc1x < Ul5q.length; bc1x++) {
                a9j.cL1x(Ul5q[bc1x], false)
            }
        }
    }
    ;
    b0x.cug7Z = function() {
        this.ef2x.value = ""
    }
    ;
    b0x.cuf7Y = function(r0x) {
        this.dY2x(!0);
        var Ul5q = a9j.H0x(this.o0x, "j-receiver");
        a9j.cL1x(Ul5q[r0x], false);
        this.Nd3x()
    }
    ;
    b0x.xH8z = function() {
        var bo1x = this.ef2x.value;
        var bv1x = bo1x.trim().toLowerCase();
        var j0x;
        bv1x = bv1x.replace(/\[/g, "\\[");
        bv1x = bv1x.replace(/\]/g, "\\]");
        j0x = this.bJw7p(bv1x);
        this.cub7U(j0x)
    }
    ;
    b0x.oK5P = function(d0x) {
        a9j.ba1x(this.ZN7G, "display", "none")
    }
    ;
    b0x.dY2x = function(dM2x) {
        if (dM2x && this.nz5E) {
            a9j.ba1x(this.nz5E, "display", "none");
            return
        }
        if (this.nz5E)
            a9j.ba1x(this.nz5E, "display", "block")
    }
    ;
    b0x.cuk7d = function(d0x) {
        h0x.cn1x(d0x);
        var bO1x = d0x.target || d0x.srcElement;
        if (a9j.bE1x(bO1x, "j-flag"))
            return;
        var bI1x = bO1x.nodeName.toLowerCase() == "a" ? bO1x.parentNode : bO1x.parentNode.parentNode;
        var lg4k = a9j.gJ3x(bI1x, "data-username");
        var ip3x = a9j.gJ3x(bI1x, "data-userId");
        this.bwd4h(lg4k, ip3x);
        this.oK5P();
        a9j.ba1x(this.AQ9H, "display", "none")
    }
    ;
    b0x.cuj7c = function(d0x) {
        h0x.bg1x(d0x);
        var bO1x = d0x.target || d0x.srcElement;
        if (a9j.bE1x(bO1x.parentNode, "j-receiver")) {
            a9j.cL1x(bO1x.parentNode, false);
            this.dY2x(!0);
            this.Nd3x()
        } else
            this.ef2x.focus()
    }
    ;
    b0x.bxU4Y = function() {
        this.bxe4i.innerHTML = this.ef2x.value;
        var cC1x = this.bxe4i.offsetWidth + 2;
        a9j.ba1x(this.ef2x, "width", cC1x + "px")
    }
    ;
    b0x.Nd3x = function() {
        var Xv5A = a9j.hU3x(this.ef2x, this.o0x).y;
        var bLc8U = Math.floor((Xv5A - 8) / 27);
        if (bLc8U < 0)
            return;
        a9j.ba1x(this.bwl4p, "height", 19 + bLc8U * 29 + "px")
    }
    ;
    b0x.Nf3x = function() {
        var pC5H = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < pC5H.length; i++) {
            a9j.ba1x(this.bxe4i, pC5H[i], a9j.dh2x(this.ef2x, pC5H[i]))
        }
    }
    ;
    b0x.bJb7U = function(cA1x, C0x) {
        var do2x = C0x ? C0x : window.GUser.userId;
        var Y1x = "/api/user/getfollows/" + do2x;
        var gl3x = v0x.bm1x(Y1x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cA1x.f0x(this),
            onerror: function(j0x) {
                this.bk1x = []
            },
            onbeforerequest: function(j0x) {}
        })
    }
    ;
    b0x.bJc7V = function(j0x) {
        this.bk1x = JSON.parse(j0x).follow || [];
        var C0x = GUser.userId;
        for (var i = 0; i < this.bk1x.length; i++) {
            if (this.bk1x[i].userId == C0x) {
                this.bk1x.splice(i, 1);
                continue
            }
            this.bk1x[i].avatarUrl = this.bk1x[i].avatarUrl + "?param=30y30"
        }
    }
    ;
    b0x.cuc7V = function(j0x) {
        if (this.bk1x[0])
            return;
        this.bJc7V(j0x);
        this.xH8z()
    }
    ;
    b0x.bJw7p = function(bv1x) {
        var bv1x = bv1x ? bv1x : "";
        this.bk1x = this.bk1x[0] ? this.bk1x : [];
        var bq1x = this.bk1x.length;
        var NF3x = this.Ve5j();
        var sZ7S = [];
        var Rg4k, Uu5z, bxW4a;
        if (!this.bk1x[0])
            return sZ7S;
        for (var bc1x = 0; bc1x < bq1x; bc1x++) {
            bxW4a = false;
            for (var v0x = 0; v0x < NF3x.length; v0x++) {
                if (this.bk1x[bc1x].userId == NF3x[v0x]) {
                    bxW4a = true;
                    break
                }
            }
            if (bxW4a)
                continue;
            Rg4k = this.bk1x[bc1x].nickname.toLowerCase().search(bv1x);
            Uu5z = this.bk1x[bc1x].py ? this.bk1x[bc1x].py.toLowerCase().search(bv1x) : -1;
            if (Rg4k !== -1 || Uu5z != -1)
                sZ7S.push(this.bk1x[bc1x])
        }
        return sZ7S
    }
    ;
    b0x.cub7U = function(j0x) {
        a9j.dA2x(this.ZN7G, cuq7j, {
            users: j0x
        });
        a9j.y0x(a9j.H0x(this.o0x, "j-item")[0], "j-selected");
        this.fQ3x = a9j.H0x(this.o0x, "j-item");
        a9j.ba1x(this.ZN7G, "display", "block")
    }
    ;
    b0x.Ve5j = function() {
        var sZ7S = a9j.H0x(this.o0x, "j-receiver") || [];
        var ip3x = [];
        for (var i = 0; i < sZ7S.length; i++) {
            ip3x.push(a9j.gJ3x(sZ7S[i], "data-id"))
        }
        return ip3x
    }
    ;
    b0x.cGN0x = function() {
        var ip3x = this.Ve5j();
        var sZ7S = [];
        for (var i = 0; i < ip3x.length; i++) {
            for (var j = 0; j < this.bk1x.length; j++) {
                if (ip3x[i] == this.bk1x[j].userId)
                    sZ7S.push(this.bk1x[j])
            }
        }
        return sZ7S
    }
    ;
    b0x.ctZ7S = function() {
        this.WV5a()
    }
    ;
    w0x.HG1x.J0x = function(e0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n0x.oL5Q.J0x({
                title: "登录"
            });
            return
        }
        e0x = e0x || {};
        if (e0x.parent === undefined)
            e0x.parent = document.body;
        !!this.fg2x && this.fg2x.T0x();
        this.fg2x = this.A0x(e0x)
    }
    ;
    w0x.HG1x.bt1x = function() {
        !!this.fg2x && this.fg2x.T0x()
    }
    ;
    w0x.HG1x.Ic1x = function() {
        return this.oK5P()
    }
    ;
    w0x.HG1x.cGO0x = function() {
        return this.xH8z()
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), l0x = c0x("nm.x"), n0x = c0x("nm.l"), b0x, L0x;
    n0x.Ii1x = NEJ.C();
    b0x = n0x.Ii1x.N0x(n0x.bna2x);
    L0x = n0x.Ii1x.cs1x;
    b0x.bl1x = function() {
        var Ib1x;
        var ctV7O = function(D0x, K0x) {
            Ib1x = Ib1x || [];
            if (K0x != "18")
                Ib1x.push({
                    key: K0x,
                    value: D0x
                })
        };
        return function(e0x) {
            this.bn1x(e0x);
            if (e0x.upwards) {
                a9j.y0x(this.o0x, "m-emts-up")
            } else {
                a9j.x0x(this.o0x, "m-emts-up")
            }
            if (e0x.rightwards) {
                a9j.y0x(this.o0x, "m-emts-right")
            } else {
                a9j.x0x(this.o0x, "m-emts-right")
            }
            if (!Ib1x) {
                var bz1x = l0x.cBa9R();
                k0x.eI2x(bz1x, ctV7O)
            }
            var bq1x = Ib1x.length;
            Ib1x.splice(bq1x - 2, 0, {
                key: "18",
                value: "186"
            });
            this.Yh6b = Ib1x;
            this.ctS7L = !!e0x.autoHide
        }
    }();
    b0x.ch1x = function() {
        this.cf1x = "ntp-portrait"
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i0x = a9j.H0x(this.o0x, "j-flag");
        this.bK1x = i0x[0];
        this.ctQ7J = i0x[1];
        this.ctP7I = i0x[2];
        this.ctM7F = i0x[3];
        h0x.s0x(this.bK1x, "click", this.yk8c.f0x(this));
        h0x.s0x(this.ctQ7J, "click", this.HZ1x.f0x(this, 1));
        h0x.s0x(this.ctM7F, "click", this.HZ1x.f0x(this, 2))
    }
    ;
    b0x.bxM4Q = function(r0x) {
        this.ber8j = r0x;
        var bi1x = (r0x - 1) * 50;
        var i0x = this.Yh6b.slice(bi1x, Math.min(bi1x + 50, this.Yh6b.length));
        this.bK1x.innerHTML = a9j.cd1x("jst-portrait", {
            plist: i0x
        }, {
            purl: l0x.bDg6a
        });
        this.ctP7I.innerText = r0x + "/" + Math.ceil(this.Yh6b.length / 50)
    }
    ;
    b0x.HZ1x = function(r0x) {
        var ctL7E = Math.ceil(this.Yh6b.length / 50);
        if (r0x == 1 && this.ber8j == 1 || r0x == 2 && this.ber8j == ctL7E)
            return;
        r0x == 1 ? this.bxM4Q(this.ber8j - 1) : this.bxM4Q(this.ber8j + 1)
    }
    ;
    b0x.yk8c = function(d0x) {
        var F0x = h0x.X1x(d0x, "d:text");
        if (!F0x)
            return;
        var d0x = {
            url: a9j.t0x(F0x, "url"),
            text: a9j.t0x(F0x, "text")
        };
        this.z0x("onselect", d0x);
        if (this.ctS7L && !d0x.stopped) {
            this.bt1x()
        }
    }
    ;
    b0x.J0x = function() {
        L0x.J0x.call(this);
        this.bxM4Q(1)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , h0x = c0x("nej.v")
      , k0x = c0x("nej.u")
      , dy2x = c0x("nej.p")
      , be1x = c0x("nej.h")
      , I0x = c0x("nej.ut")
      , kn4r = /^[#?]+/
      , Ev0x = /#(.*?)$/
      , yl8d = window
      , bxL4P = !history.pushState || dy2x.Ik1x.android || !history.auto;
    var Xb5g = function(Y1x, bxK4O) {
        yl8d.history[!bxK4O ? "pushState" : "replaceState"](null, document.title, Y1x)
    };
    var Xx6r = function() {
        return location.parse(yl8d.location.href)
    };
    Xb5g = Xb5g.eH2x(function(d0x) {
        if (!bxL4P)
            return;
        var bf1x = d0x.args;
        d0x.stopped = !0;
        Y1x = bf1x[0].replace(kn4r, "");
        !bf1x[1] ? yl8d.location.hash = Y1x : yl8d.location.replace("#" + Y1x)
    });
    Xx6r = Xx6r.eH2x(function(d0x) {
        if (!bxL4P)
            return;
        d0x.stopped = !0;
        var dR2x = Ev0x.test(yl8d.location.href) ? RegExp.$1 : "";
        d0x.value = location.parse(dR2x.replace(kn4r, ""))
    });
    location.redirect = function(Y1x, bxK4O) {
        Xb5g(Y1x, bxK4O);
        return this
    }
    ;
    location.active = function() {
        var eg2x, Y1x, jL4P, db1x, UP5U;
        var bxJ4N = function(hs3x) {
            if (!!db1x) {
                db1x = !1;
                return
            }
            var d0x = {
                oldValue: jL4P,
                newValue: Xx6r()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h0x.z0x(location, "beforeurlchange", d0x);
                if (d0x.stopped) {
                    if (!!jL4P) {
                        db1x = !0;
                        Xb5g(jL4P.href, !0)
                    }
                    return
                }
            }
            Y1x = yl8d.location.href;
            jL4P = d0x.newValue;
            h0x.z0x(location, "urlchange", jL4P);
            be1x.buy4C(jL4P.href)
        };
        var bNB8t = function() {
            if (Y1x != yl8d.location.href)
                bxJ4N();
            eg2x = requestAnimationFrame(bNB8t)
        };
        return function(bL1x) {
            if (!!UP5U)
                return this;
            UP5U = !0;
            yl8d = bL1x || window;
            if (bxL4P && "onhashchange"in window && dy2x.nB5G.trident2) {
                h0x.s0x(yl8d, "hashchange", bxJ4N);
                bxJ4N()
            } else if (!eg2x) {
                eg2x = requestAnimationFrame(bNB8t)
            }
            return this
        }
    }();
    location.parse = function() {
        var gL3x = /^https?:\/\/.*?\//i
          , kn4r = /[?#]/;
        return function(Y1x) {
            var m0x = {
                href: Y1x
            };
            Y1x = (Y1x || "").replace(gL3x, "/").split(kn4r);
            var cz1x = 1;
            if (Y1x[0] == "/" && (Y1x[1] || "").indexOf("/") == 0)
                cz1x = 2;
            m0x.path = Y1x.splice(0, cz1x).join("?");
            m0x.query = k0x.hq3x(Y1x.join("&"));
            return m0x
        }
    }();
    location.same = function(Y1x) {
        return Xx6r().href == Y1x
    }
    ;
    I0x.fK2x.A0x({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , h0x = c0x("nej.v")
      , gv3x = c0x("nm.ut");
    gv3x.uz7s = function(eu2x) {
        var hk3x = {
            text: "",
            start: 0,
            end: 0
        };
        if (eu2x.setSelectionRange) {
            hk3x.start = eu2x.selectionStart;
            hk3x.end = eu2x.selectionEnd;
            hk3x.text = hk3x.start != hk3x.end ? eu2x.value.substring(hk3x.start, hk3x.end) : ""
        } else if (document.selection) {
            var i, Zm6g = document.selection.createRange(), yw8o = document.body.createTextRange();
            yw8o.moveToElementText(eu2x);
            hk3x.text = Zm6g.text;
            hk3x.bookmark = Zm6g.getBookmark();
            for (i = 0; yw8o.compareEndPoints("StartToStart", Zm6g) < 0 && Zm6g.moveStart("character", -1) !== 0; i++) {
                if (eu2x.value.charAt(i) == "\n") {
                    i++
                }
            }
            hk3x.start = i;
            hk3x.end = hk3x.text.length + hk3x.start
        }
        return hk3x
    }
    ;
    gv3x.ZP7I = function(eu2x, hk3x) {
        var yw8o;
        if (!hk3x) {
            hk3x = {
                text: "",
                start: 0,
                end: 0
            }
        }
        eu2x.focus();
        if (eu2x.setSelectionRange) {
            eu2x.setSelectionRange(hk3x.start, hk3x.end)
        } else if (eu2x.createTextRange) {
            yw8o = eu2x.createTextRange();
            if (eu2x.value.length === hk3x.start) {
                yw8o.collapse(false);
                yw8o.select()
            } else {
                yw8o.moveToBookmark(hk3x.bookmark);
                yw8o.select()
            }
        }
    }
    ;
    gv3x.Il1x = function(eu2x, hk3x, cK1x) {
        var hk3x = hk3x || {
            text: "",
            start: 0,
            end: 0
        };
        var bxH4L, bOh8Z, yw8o, Uw5B, bOk9b, bOn9e, HX1x;
        this.ZP7I(eu2x, hk3x);
        if (eu2x.setSelectionRange) {
            bxH4L = eu2x.value;
            bOh8Z = bxH4L.substring(0, hk3x.start) + cK1x + bxH4L.substring(hk3x.end);
            bOk9b = bOn9e = hk3x.start + cK1x.length;
            HX1x = eu2x.scrollTop;
            eu2x.value = bOh8Z;
            if (eu2x.scrollTop != HX1x) {
                eu2x.scrollTop = HX1x
            }
            eu2x.setSelectionRange(bOk9b, bOn9e)
        } else if (eu2x.createTextRange) {
            Uw5B = document.selection.createRange();
            Uw5B.text = cK1x;
            Uw5B.setEndPoint("StartToEnd", Uw5B);
            Uw5B.select()
        }
        h0x.z0x(eu2x, "keyup")
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), dy2x = c0x("nej.p"), k0x = c0x("nej.u"), cb1x = c0x("nej.ut"), w0x = c0x("nm.w"), gv3x = c0x("nm.ut"), b0x;
    w0x.bOt9k = NEJ.C();
    b0x = w0x.bOt9k.N0x(cb1x.cJ1x);
    b0x.cw1x = function(e0x) {
        this.cE1x(e0x)
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.gn3x = e0x.txt;
        this.HW1x = e0x.sgtsContainer;
        this.bOB9s = e0x.sgtsList[0];
        this.bcI8A = e0x.sgtsItem;
        this.oN5S = e0x.rangeData;
        this.In1x = e0x.atIndex;
        a9j.y0x(this.bcI8A[0], "selected-item");
        this.Vp5u()
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        h0x.mo4s(document.body, "keyup", this.bPj9a.f0x(this));
        h0x.mo4s(document.body, "click", this.bPl9c.f0x(this))
    }
    ;
    b0x.Vp5u = function() {
        this.bX1x([[document.body, "keyup", this.bPj9a.f0x(this)], [document.body, "click", this.bPl9c.f0x(this)], [this.gn3x, "keydown", this.bPm9d.f0x(this)], [this.gn3x, "keypress", this.bPm9d.f0x(this)], [this.bOB9s, "click", this.bPn9e.f0x(this)], [this.bOB9s, "mouseover", this.HV1x.f0x(this)]])
    }
    ;
    b0x.HV1x = function(d0x) {
        var bO1x = h0x.X1x(d0x);
        var p0x = a9j.H0x(this.HW1x, "selected-item");
        if (a9j.bE1x(bO1x, "j-sgt")) {
            a9j.x0x(p0x[0], "selected-item");
            a9j.y0x(bO1x, "selected-item")
        }
    }
    ;
    b0x.bPj9a = function(d0x) {
        var p0x = a9j.H0x(this.HW1x, "selected-item");
        var bq1x = this.bcI8A.length;
        var jX4b = d0x.keyCode || d0x.which;
        var r0x, j0x;
        switch (jX4b) {
        case 38:
            r0x = a9j.gJ3x(p0x[0], "data-index") - 1 < 0 ? bq1x - 1 : a9j.gJ3x(p0x[0], "data-index") - 1;
            a9j.x0x(p0x[0], "selected-item");
            a9j.y0x(this.bcI8A[r0x], "selected-item");
            break;
        case 40:
            r0x = parseInt(a9j.gJ3x(p0x[0], "data-index")) + 1 >= bq1x ? 0 : parseInt(a9j.gJ3x(p0x[0], "data-index")) + 1;
            a9j.x0x(p0x[0], "selected-item");
            a9j.y0x(this.bcI8A[r0x], "selected-item");
            break;
        case 13:
            this.bPn9e(d0x);
            break;
        case 27:
            this.oK5P();
            break;
        case 32:
            var bo1x = this.gn3x.value;
            var r0x = gv3x.uz7s(this.gn3x);
            if (bo1x.charAt(r0x.start - 1) !== " ")
                return;
            this.oK5P();
            break
        }
    }
    ;
    b0x.bPm9d = function(d0x) {
        var jX4b = d0x.keyCode || d0x.which;
        if (jX4b === 13 || jX4b === 38 || jX4b === 40) {
            h0x.cn1x(d0x);
            d0x.keyCode = 0;
            d0x.which = 0;
            d0x.returnvalue = false
        }
    }
    ;
    b0x.bPl9c = function(d0x) {
        var bO1x = d0x.target || d0x.srcElement;
        if (bO1x === this.gn3x)
            return;
        this.oK5P()
    }
    ;
    b0x.bPn9e = function(d0x) {
        h0x.bg1x(d0x);
        var p0x = a9j.H0x(this.HW1x, "selected-item")[0];
        var sD7w = d0x.target || d0x.srcElement;
        var u0x = d0x.type;
        if (a9j.bE1x(sD7w, "lst"))
            return;
        if (u0x == "click") {
            a9j.x0x(p0x, "selected-item");
            a9j.y0x(sD7w, "selected-item")
        } else
            sD7w = p0x;
        var j0x = sD7w.innerHTML + " ";
        this.oK5P();
        var hk3x = this.oN5S;
        hk3x.start = this.In1x + 1;
        if (dy2x.dr2x.browser == "ie" && dy2x.dr2x.version < "9.0") {
            this.gn3x.value = this.gn3x.value.substring(0, hk3x.start) + this.gn3x.value.substring(hk3x.end, this.gn3x.value.length);
            hk3x.end = hk3x.start
        }
        gv3x.Il1x(this.gn3x, hk3x, j0x);
        h0x.z0x(this.gn3x, "keyup")
    }
    ;
    b0x.oK5P = function(d0x) {
        if (!!this.HW1x)
            a9j.ba1x(this.HW1x, "display", "none");
        this.T0x()
    }
    ;
    b0x.xH8z = function(d0x) {
        if (!!this.HW1x)
            a9j.ba1x(this.HW1x, "display", "block")
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), v0x = c0x("nej.j"), w0x = c0x("nm.w"), cb1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), b0x;
    var ctK7D = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var ctJ7C = a9j.eB2x("m-wgt-atlist");
    var iX3x = a9j.to7h(ctK7D);
    w0x.bPv9m = NEJ.C();
    b0x = w0x.bPv9m.N0x(bD1x.el2x);
    b0x.cw1x = function(e0x) {
        this.fT3x = {};
        this.cE1x()
    }
    ;
    b0x.bl1x = function(e0x) {
        this.fT3x.txt = a9j.B0x(e0x.target);
        this.fT3x.data = e0x.data;
        this.fT3x.offset = e0x.offset;
        this.fT3x.rangeData = e0x.rangeData;
        this.fT3x.atIndex = e0x.atIndex;
        this.ctI7B(e0x);
        this.bn1x(e0x);
        this.fT3x.sgtsContainer = this.o0x;
        this.fT3x.sgtsList = a9j.H0x(this.o0x, "lst");
        this.fT3x.sgtsItem = a9j.H0x(this.o0x, "f-thide");
        this.To4s(e0x);
        this.ctF7y = w0x.bOt9k.A0x(this.fT3x)
    }
    ;
    b0x.bC1x = function(e0x) {
        this.bF1x();
        this.ctF7y.T0x()
    }
    ;
    b0x.ch1x = function() {
        this.mj4n = iX3x
    }
    ;
    b0x.bW1x = function() {
        this.ci1x()
    }
    ;
    b0x.ctI7B = function(e0x) {
        this.o0x = a9j.dD2x(a9j.jm4q(a9j.cd1x(ctJ7C, e0x.data)))
    }
    ;
    b0x.To4s = function(e0x) {
        var bPy9p = a9j.H0x(this.o0x, "selected-item")[0];
        if (bPy9p)
            a9j.x0x(bPy9p, "selected-item");
        var cZ1x = e0x.offset.x + "px";
        var hv3x = e0x.offset.y + "px";
        a9j.ba1x(this.o0x, "left", cZ1x);
        a9j.ba1x(this.o0x, "top", hv3x)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , v0x = c0x("nej.j")
      , gv3x = c0x("nm.ut");
    gv3x.bPC9t = function(bo1x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var df2x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var Ip1x = bo1x.match(df2x) || [];
        for (var bc1x = 0; bc1x < Ip1x.length; bc1x++) {
            Ip1x[bc1x] = Ip1x[bc1x].split("@")[1]
        }
        Ip1x = Ip1x.reverse();
        var ip3x = GUser.userId;
        var ctE7x = v0x.tu7n("mentioners" + ip3x) || [];
        var ka4e = Ip1x.concat(ctE7x);
        if (ka4e.length > 10)
            ka4e = ka4e.slice(0, 10);
        v0x.vF7y("mentioners" + ip3x, ka4e)
    }
    ;
    gv3x.ctD7w = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var ip3x = GUser.userId;
        return v0x.tu7n("mentioners" + ip3x) || []
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), dy2x = c0x("nej.p"), v0x = c0x("nej.j"), k0x = c0x("nej.u"), cb1x = c0x("nej.ut"), w0x = c0x("nm.w"), gv3x = c0x("nm.ut"), l0x = c0x("nm.x"), b0x;
    var FullscreenApi = l0x.FL0x || {};
    w0x.bPL9C = NEJ.C();
    b0x = w0x.bPL9C.N0x(cb1x.cJ1x);
    b0x.cw1x = function(e0x) {
        this.cE1x(e0x);
        this.bPN9E()
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.gn3x = e0x.txt;
        this.o0x = e0x.body;
        this.bPV9M = e0x.before;
        this.Nl3x = e0x.flag;
        this.ctB7u = e0x.after;
        this.qI6C = [];
        if (dy2x.dr2x.browser != "ie") {
            setTimeout(function() {
                this.mc4g()
            }
            .f0x(this), 0)
        }
        this.Vp5u()
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        if (this.vf7Y)
            this.vf7Y.T0x();
        delete this.vf7Y
    }
    ;
    b0x.Vp5u = function() {
        this.bX1x([[this.gn3x, "keyup", this.bQe9V.f0x(this, this.gn3x)], [this.gn3x, "click", this.bQe9V.f0x(this, this.gn3x)], [this.gn3x, "focus", this.mc4g.f0x(this)]])
    }
    ;
    b0x.mc4g = function(d0x) {
        this.oN5S = gv3x.uz7s(this.gn3x)
    }
    ;
    b0x.bPN9E = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var do2x = window.GUser.userId;
        var Y1x = "/api/user/getfollows/" + do2x;
        var gl3x = v0x.bm1x(Y1x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function(j0x) {
                window.GFollowers = JSON.parse(j0x).follow
            }
            .f0x(this),
            onerror: function(j0x) {},
            onbeforerequest: function(j0x) {}
        })
    }
    ;
    b0x.bQf9W = function(index) {
        var D0x = this.gn3x.value, bi1x, bxx4B, bxw4A, Px3x;
        this.bPV9M.innerHTML = k0x.dH2x(D0x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var mM5R = a9j.H0x(this.bPV9M, "j-test");
        for (var bc1x = 0; bc1x < mM5R.length; bc1x++) {
            mM5R[bc1x].innerText = " "
        }
        this.Nl3x.innerHTML = D0x.charAt(index);
        this.ctB7u.innerHTML = k0x.dH2x(D0x.substr(index + 1, D0x.length));
        Px3x = parseInt(a9j.dh2x(this.gn3x, "lineHeight"));
        a9j.ba1x(this.o0x, "display", "block");
        bxx4B = a9j.hU3x(this.Nl3x, this.o0x);
        bxw4A = a9j.hU3x(this.gn3x);
        a9j.ba1x(this.o0x, "display", "none");
        var cZ1x = bxx4B.x + bxw4A.x;
        var hv3x = bxx4B.y + bxw4A.y + Px3x;
        bi1x = {
            x: cZ1x,
            y: hv3x
        };
        this.ctz7s(bi1x)
    }
    ;
    b0x.bQe9V = function(eu2x, d0x) {
        h0x.cn1x(d0x);
        var eu2x = eu2x;
        var D0x = eu2x.value;
        var bq1x = D0x.length;
        var r0x = gv3x.uz7s(eu2x).start;
        var bQn9e = 0;
        var jX4b = d0x.keyCode || d0x.which;
        var ka4e;
        this.oN5S = gv3x.uz7s(eu2x);
        var bQo9f = false;
        for (var i = 1; i < 20; i++) {
            ka4e = r0x - i;
            if (D0x.charAt(ka4e) === " ")
                break;
            if (D0x.charAt(ka4e) === "@") {
                bQo9f = true;
                this.In1x = bQn9e = ka4e;
                break
            }
        }
        if (bQo9f && d0x.shiftKey === false && jX4b !== 38 && jX4b !== 40) {
            if (jX4b !== 27 && jX4b !== 13) {
                this.vf7Y ? this.vf7Y.T0x() : null;
                this.bQf9W(bQn9e)
            }
        } else if (jX4b !== 38 && jX4b !== 40 && d0x.keyCode !== 32) {
            this.vf7Y ? this.vf7Y.T0x() : null
        }
    }
    ;
    b0x.ctz7s = function(bi1x) {
        var bi1x = bi1x;
        var j0x = this.vh7a();
        var e0x = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bi1x,
            data: j0x,
            target: this.gn3x,
            rangeData: this.oN5S,
            atIndex: this.In1x
        };
        this.vf7Y ? this.vf7Y.T0x() : null;
        this.vf7Y = w0x.bPv9m.A0x(e0x)
    }
    ;
    b0x.vh7a = function() {
        var cty7r = gv3x.uz7s(this.gn3x).start;
        var ctw7p = this.In1x + 1;
        var bQs9j = gv3x.ctD7w() || [];
        var bQt9k = [];
        var bv1x = this.gn3x.value.substring(ctw7p, cty7r).toLowerCase();
        bv1x = bv1x.replace(/\[/g, "\\[");
        bv1x = bv1x.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.qI6C = window.GFollowers[0] ? window.GFollowers : []
        } else
            this.qI6C = [];
        if (!this.qI6C[0])
            this.bPN9E();
        for (var bc1x = 0; bc1x < bQs9j.length; bc1x++) {
            for (var v0x = 0; v0x < this.qI6C.length; v0x++) {
                if (this.qI6C[v0x].nickname == bQs9j[bc1x])
                    bQt9k.push(this.qI6C[v0x])
            }
        }
        this.qI6C = k0x.cgp4t(this.qI6C, bQt9k, {
            union: true,
            begin: true
        });
        var ctv7o = this.qI6C.length;
        var baW7P = [];
        var Rg4k, Uu5z;
        if (!this.qI6C[0])
            return {
                suggests: baW7P
            };
        for (var i = 0; i < ctv7o; i++) {
            Rg4k = this.qI6C[i].nickname.toLowerCase().search(bv1x);
            Uu5z = this.qI6C[i].py ? this.qI6C[i].py.toLowerCase().search(bv1x) : -1;
            if (Rg4k !== -1 || Uu5z != -1)
                baW7P.push(this.qI6C[i]);
            if (baW7P.length === 10)
                break
        }
        return {
            suggests: baW7P
        }
    }
    ;
    b0x.PW3x = function() {
        var hk3x = this.oN5S || {
            text: "",
            start: 0,
            end: 0
        };
        h0x.z0x(this.gn3x, "focus");
        gv3x.Il1x(this.gn3x, hk3x, "@");
        this.oN5S = gv3x.uz7s(this.gn3x);
        this.In1x = hk3x.start;
        this.bQf9W(this.In1x)
    }
    ;
    b0x.Ic1x = function() {
        if (this.vf7Y)
            this.vf7Y.T0x()
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), v0x = c0x("nej.j"), w0x = c0x("nm.w"), cb1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), b0x;
    var ctt7m = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cts7l = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var ge3x = a9j.jm4q(cts7l);
    var iX3x = a9j.to7h(ctt7m);
    w0x.PX3x = NEJ.C();
    b0x = w0x.PX3x.N0x(bD1x.el2x);
    b0x.cw1x = function(e0x) {
        this.fT3x = {};
        this.cE1x()
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x);
        this.fT3x.txt = a9j.B0x(e0x.target);
        this.Nf3x();
        this.Qe3x = w0x.bPL9C.A0x(this.fT3x)
    }
    ;
    b0x.bC1x = function(e0x) {
        this.bF1x();
        this.Qe3x.T0x()
    }
    ;
    b0x.ch1x = function() {
        this.cf1x = ge3x;
        this.mj4n = iX3x
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i0x = a9j.dk2x(a9j.B0x(this.o0x));
        this.fT3x.body = this.o0x;
        this.fT3x.before = i0x[0];
        this.fT3x.flag = i0x[1];
        this.fT3x.after = i0x[2]
    }
    ;
    b0x.Nf3x = function() {
        var pC5H = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < pC5H.length; i++) {
            if (pC5H[i] === "width" && a9j.dh2x(this.fT3x.txt, pC5H[i]) == "100%") {
                var ctr7k = this.fT3x.txt.offsetWidth;
                if (!ctr7k) {
                    setTimeout(function() {
                        a9j.ba1x(this.o0x, pC5H[i], this.fT3x.txt.offsetWidth + "px")
                    }
                    .f0x(this), 300)
                } else {
                    a9j.ba1x(this.o0x, pC5H[i], this.fT3x.txt.offsetWidth + "px")
                }
                continue
            }
            a9j.ba1x(this.o0x, pC5H[i], a9j.dh2x(this.fT3x.txt, pC5H[i]))
        }
    }
    ;
    b0x.PW3x = function() {
        this.Qe3x.PW3x()
    }
    ;
    b0x.Ic1x = function() {
        this.Qe3x.Ic1x()
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, fy2x = NEJ.R, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), I0x = c0x("nej.ut"), lc4g = c0x("nm.c"), R0x = {}, b0x;
    if (!!lc4g.bxs4w)
        return;
    lc4g.bxs4w = NEJ.C();
    b0x = lc4g.bxs4w.N0x(I0x.cJ1x);
    b0x.cw1x = function() {
        this.cE1x()
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x()
    }
    ;
    b0x.HU1x = function(fh2x, cA1x, bdQ8I) {
        if (R0x[fh2x]) {
            this.gA3x("register commonJST[" + fh2x + "] duplicate");
            return
        }
        if (!k0x.gK3x(cA1x)) {
            cA1x = ctl.comJST.cti7b(fh2x, cA1x, bdQ8I)
        }
        R0x[fh2x] = cA1x
    }
    ;
    b0x.ctg7Z = function(beL8D) {
        if (k0x.eL2x(beL8D)) {
            k0x.bd1x(beL8D, function(p0x) {
                ctl.comJST.HU1x.apply(this, p0x)
            }, this)
        } else if (k0x.lG4K(beL8D)) {
            k0x.eI2x(beL8D, function(fu2x, K0x) {
                ctl.comJST.HU1x(K0x, fu2x)
            })
        }
    }
    ;
    b0x.cti7b = function(fh2x, vl7e, bdQ8I) {
        vl7e = vl7e || {};
        NEJ.X(vl7e, {
            comJST: this.nx5C
        });
        if (vl7e.resetDataName && !k0x.eL2x(vl7e.resetDataName)) {
            vl7e.resetDataName = [vl7e.resetDataName]
        }
        return function() {
            var j0x = arguments[0]
              , kc4g = arguments[1];
            if (vl7e.resetDataName) {
                var ka4e = {};
                for (var i = 0, ii = vl7e.resetDataName.length; i < ii; i++) {
                    ka4e[vl7e.resetDataName[i]] = arguments[i]
                }
                j0x = ka4e;
                kc4g = arguments[ii]
            }
            NEJ.X(j0x, vl7e, dZ2x);
            if (bdQ8I) {
                kc4g = kc4g || {};
                NEJ.X(kc4g, bdQ8I)
            }
            return a9j.cd1x(fh2x, j0x, kc4g)
        }
    }
    ;
    b0x.nx5C = function(fh2x) {
        if (!R0x[fh2x]) {
            this.gA3x("commonJST[" + fh2x + "] is unregister");
            return ""
        } else {
            return R0x[fh2x].apply(null, fy2x.slice.call(arguments, 1))
        }
    }
    ;
    b0x.dump = function() {
        return R0x
    }
    ;
    b0x.gA3x = function(ctc7V) {
        if (console && console.log) {
            console.log(ctc7V)
        }
    }
    ;
    var dZ2x = function(fu2x, K0x) {
        return K0x == "resetDataName"
    };
    c0x("ctl").comJST = lc4g.bxs4w.gm3x();
    a9j.crv7o({
        comJST: c0x("ctl").comJST.nx5C
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, fy2x = NEJ.R, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), I0x = c0x("nej.ut"), lc4g = c0x("nm.c"), l0x = c0x("nm.x"), R0x = {}, b0x;
    if (!!lc4g.bxo4s)
        return;
    lc4g.bxo4s = NEJ.C();
    b0x = lc4g.bxo4s.N0x(I0x.cJ1x);
    b0x.cw1x = function() {
        this.cE1x();
        var e0x = {
            "com-mv-artists": function(fR3x, ed2x, Rf4j, bxn4r) {
                return a9j.cd1x("com-mv-artists", {
                    artists: fR3x,
                    clazz: ed2x,
                    boxClazz: bxn4r,
                    mark: Rf4j || function(cO1x) {
                        return cO1x
                    }
                    ,
                    escape: k0x.dH2x,
                    comJST: ctl.comJST.nx5C
                })
            },
            "com-album-artists": function(fR3x, ed2x, Rf4j, bxn4r) {
                return a9j.cd1x("com-album-artists", {
                    artists: fR3x,
                    clazz: ed2x,
                    boxClazz: bxn4r,
                    mark: Rf4j || function(cO1x) {
                        return cO1x
                    }
                    ,
                    escape: k0x.dH2x,
                    comJST: ctl.comJST.nx5C
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k0x.dH2x
            },
            "com-user-type": function(dp2x, ed2x, lM4Q, wJ8B, bRA0x) {
                return a9j.cd1x("com-user-type", {
                    x: dp2x,
                    clazz: ed2x || "",
                    clazz2: typeof bRA0x == "undefined" ? "icn" : bRA0x,
                    before: lM4Q || "",
                    after: wJ8B || "",
                    isEmptyObject: l0x.bJd7W
                })
            }
        };
        for (var C0x in e0x) {
            ctl.comJST.HU1x(C0x, e0x[C0x])
        }
    }
    ;
    b0x.bl1x = function(e0x) {
        this.bn1x(e0x)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x()
    }
    ;
    c0x("ctl").comJSTUtil = lc4g.bxo4s.gm3x()
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), dy2x = c0x("nej.p"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), I0x = c0x("nej.ut"), v0x = c0x("nej.j"), w0x = c0x("nm.w"), gv3x = c0x("nm.ut"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), n0x = c0x("nm.l"), bxg4k = [2, 3], ec2x = ["sn", "db"], b0x, L0x, ctb7U = {
        13: "playlist",
        17: "djprogram",
        18: "song",
        19: "album",
        20: "artist",
        21: "mv",
        24: "topic",
        25: "activity",
        70: "djradio",
        38: "concert",
        39: "video",
        41: "cloudvideo"
    }, Wy5D = {
        djprogram: "节目",
        album: "专辑",
        playlist: "歌单",
        song: "单曲",
        yunsong: "单曲",
        artist: "歌手",
        mv: "MV",
        topic: "音乐专栏",
        djradio: "电台",
        concert: "演出",
        video: "视频",
        cloudvideo: "视频"
    }, bRG0x = {
        djprogram: " - ",
        album: " - ",
        playlist: " by ",
        song: " - ",
        yunsong: " - ",
        artist: "",
        mv: " - ",
        djradio: " by ",
        cloudvideo: " by "
    }, csX7Q = {
        0: 13,
        1: 17,
        3: 19,
        4: 18,
        5: 21,
        6: 24,
        14: 70,
        17: 20
    }, HR1x = {
        pubEventWithPics: false,
        pubEventWithoutResource: false,
        pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
    }, FullscreenApi = l0x.FL0x || {};
    n0x.oP5U = NEJ.C();
    b0x = n0x.oP5U.N0x(n0x.eo2x);
    L0x = n0x.oP5U.cs1x;
    b0x.bl1x = function(e0x) {
        if (e0x.onclose === undefined) {
            e0x.onclose = this.bRQ1x.f0x(this)
        }
        this.bn1x(e0x);
        this.zr9i = e0x.isPub;
        this.jM4Q = e0x.rid || -1;
        this.ez2x = e0x.type || -1;
        this.bwZ4d = e0x.purl;
        this.Rv4z = e0x.name || "";
        this.RI4M = e0x.author || "";
        this.bwW4a = e0x.authors || "";
        this.Yk6e = e0x.actId;
        this.Yn6h = e0x.actName;
        this.bSy1x = e0x.title;
        this.Yo6i = {};
        this.csW7P = e0x.mesg || "";
        this.csV7O = e0x.placeholder || "说点什么吧";
        this.bwO4S = e0x.hideTip;
        this.csU7N = e0x.videoJumpUrl;
        var i0x, eS2x = +(new Date);
        try {
            i0x = top.localCache.B0x("user") || {}
        } catch (e) {
            i0x = {}
        }
        for (var i = 0, i0x = i0x.bindings || [], cG1x; i < i0x.length; ++i) {
            cG1x = !i0x[i].tokenJsonStr ? null : JSON.parse(i0x[i].tokenJsonStr);
            if (!cG1x || cG1x.expires_in === undefined)
                continue;
            var YZ6T = parseInt(cG1x.expires_in)
              , Zf6Z = parseInt(i0x[i].refreshTime)
              , csT7M = (YZ6T + Zf6Z) * 1e3 - 5 * 60 * 1e3;
            if (csT7M > eS2x)
                this.Yo6i[i0x[i].type] = !0
        }
        this.xw8o = w0x.HG1x.A0x({
            parent: this.Zv6p,
            err: this.bSO1x
        });
        if (this.hx3x) {
            this.hx3x.T0x()
        }
        this.hx3x = w0x.PX3x.A0x({
            parent: document.body,
            target: this.ew2x
        });
        if (this.ez2x == 24 || this.ez2x == 21 || this.ez2x == 41 || this.HQ1x()) {
            this.zB9s.style.display = "none"
        } else {
            this.zB9s.style.display = "";
            this.oR5W = w0x.bgY9P.A0x({
                parent: this.bwz4D,
                button: this.zB9s,
                onstartupload: this.bTd1x.f0x(this, true),
                onfinishupload: this.bTd1x.f0x(this, false)
            })
        }
        if (this.HQ1x()) {
            this.qi6c.innerText = "";
            a9j.y0x(this.qi6c, "info-video");
            a9j.y0x(this.bwu4y, "f-hide")
        } else {
            a9j.x0x(this.bwu4y, "f-hide")
        }
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        if (this.xw8o) {
            this.xw8o.T0x();
            delete this.xw8o
        }
        if (this.hx3x) {
            this.hx3x.T0x();
            delete this.hx3x
        }
        if (this.oR5W) {
            this.oR5W.T0x();
            delete this.oR5W
        }
        if (this.mO5T) {
            this.mO5T.T0x();
            delete this.mO5T
        }
    }
    ;
    b0x.ch1x = function() {
        this.cf1x = "m-wgt-sharewin"
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        this.bTl1x = a9j.dk2x(this.o0x)[0];
        var bu1x = a9j.H0x(this.o0x, "j-flag");
        this.qF6z = bu1x.shift();
        this.bSO1x = bu1x.shift();
        this.Zv6p = bu1x.shift();
        this.ew2x = bu1x.shift();
        this.qi6c = bu1x.shift();
        this.bwr4v = bu1x.shift();
        this.csS7L = bu1x.shift();
        this.zB9s = bu1x.shift();
        this.cu1x = bu1x.shift();
        this.bwz4D = bu1x.shift();
        this.Cs9j = bu1x.shift();
        this.cGS0x = bu1x.shift();
        this.bwu4y = bu1x.shift();
        this.ek2x = bu1x.shift();
        this.bbx7q = a9j.H0x(this.bwu4y, "j-t");
        this.Bn9e = I0x.FZ1x.A0x({
            list: a9j.dk2x(this.qF6z),
            selected: "z-slt",
            onchange: this.bwm4q.f0x(this)
        });
        if (dy2x.dr2x.browser == "ie" && dy2x.dr2x.version < "8.0") {
            a9j.ba1x(this.Zv6p, "position", "relative");
            a9j.ba1x(this.Zv6p, "zIndex", "10")
        }
        h0x.s0x(window, "snsbind", this.Tg4k.f0x(this));
        h0x.s0x(this.ew2x, "input", this.fW3x.f0x(this));
        h0x.s0x(this.ew2x, "keyup", this.wf8X.f0x(this));
        h0x.s0x(this.o0x, "click", this.cM1x.f0x(this));
        this.S0x = q0x.bug3x.A0x();
        this.S0x.s0x("onshareall", this.bbU7N.f0x(this, 0));
        this.S0x.s0x("onshareerror", this.jb3x.f0x(this));
        this.S0x.s0x("onshareprivate", this.bbU7N.f0x(this, 1));
        this.bbV7O = q0x.Au9l.A0x();
        this.gA3x = q0x.hO3x.A0x();
        try {
            this.Tm4q = top.api.sharePermission
        } catch (e) {}
        if (!this.Tm4q) {
            this.Tm4q = HR1x;
            v0x.bm1x("/api/event/user/permission", {
                type: "json",
                onload: function(d0x) {
                    if (d0x.code == 200) {
                        this.Tm4q = NEJ.EX(HR1x, d0x)
                    }
                }
                .f0x(this)
            })
        }
        l0x.oe5j()
    }
    ;
    b0x.bwm4q = function(d0x) {
        d0x.index == 0 ? a9j.x0x(this.bTl1x, "m-plshare") : a9j.y0x(this.bTl1x, "m-plshare");
        this.Zv6p.style.display = d0x.index == 0 ? "none" : "";
        this.csS7L.style.display = d0x.index == 0 ? "" : "none";
        this.zB9s.style.display = d0x.index == 0 ? "" : "none";
        if (this.ez2x == 24 || this.ez2x == 21) {
            this.zB9s.style.display = "none"
        }
        this.bSO1x.style.display = "none";
        this.ew2x.value = "";
        this.cc1x();
        this.HN1x();
        if (d0x.index == 0) {
            var cC1x = a9j.dh2x(this.ew2x, "width");
            if (cC1x == "auto" || !cC1x) {
                return
            } else {
                if (this.hx3x) {
                    this.hx3x.T0x()
                }
                this.hx3x = w0x.PX3x.A0x({
                    parent: document.body,
                    target: this.ew2x
                })
            }
            this.bwz4D.style.display = ""
        } else {
            if (this.hx3x) {
                this.hx3x.T0x();
                delete this.hx3x
            }
            this.bwz4D.style.display = "none"
        }
    }
    ;
    b0x.cM1x = function(d0x) {
        var g0x = h0x.X1x(d0x, "d:action");
        if (!g0x)
            return;
        if (a9j.t0x(g0x, "action") == "search") {
            h0x.cn1x(d0x)
        } else if (a9j.t0x(g0x, "default") === undefined) {
            h0x.cn1x(d0x)
        }
        switch (a9j.t0x(g0x, "action")) {
        case "txt":
            this.mc4g();
            break;
        case "search":
            if (this.HQ1x()) {
                top.location.href = this.csU7N
            } else if (this.zr9i && this.ez2x != 24) {
                if (this.mO5T) {
                    this.mO5T.T0x()
                }
                this.mO5T = w0x.bsf3x.A0x({
                    parent: this.o0x.parentNode,
                    onfinish: this.bwj4n.f0x(this),
                    oncancel: this.csM7F.f0x(this)
                });
                this.bwe4i = true;
                this.o0x.style.display = "none";
                this.HM1x(this.jM4Q < 0 ? "添加音乐" : "更换音乐")
            }
            break;
        case "at":
            h0x.tW7P(d0x);
            !!this.hp3x && this.hp3x.bt1x();
            this.hx3x.PW3x();
            this.gg3x();
            break;
        case "emot":
            h0x.tW7P(d0x);
            !!this.hx3x && this.hx3x.Ic1x();
            if (!this.hp3x) {
                this.hp3x = n0x.Ii1x.A0x({
                    parent: this.bwr4v
                });
                this.hp3x.s0x("onselect", this.yk8c.f0x(this))
            }
            this.hp3x.J0x();
            break;
        case "upload":
            break;
        case "sns":
            h0x.bg1x(d0x);
            var bvW4a, bv1x, u0x = a9j.t0x(g0x, "type");
            if (!this.Yo6i[u0x]) {
                bvW4a = g0x.href.split("?");
                bv1x = k0x.hq3x(bvW4a[1]);
                bv1x["csrf_token"] = v0x.gx3x("__csrf");
                top.open(bvW4a[0] + "?" + k0x.cD1x(bv1x));
                return
            }
            var bz1x = {
                2: "sn",
                3: "db",
                4: "rr"
            };
            l0x.AE9v(g0x, "u-slg-" + bz1x[u0x] + "-gray");
            break;
        case "close":
            !!this.hp3x && this.hp3x.bt1x();
            this.bRQ1x();
            break;
        case "share":
            h0x.bg1x(d0x);
            if (this.HQ1x()) {
                if (!a9j.bE1x(g0x, "u-btn2-2-dis")) {
                    this.csL7E()
                }
            } else if (a9j.bE1x(g0x, "u-btn2-2-dis")) {
                if (!this.Tm4q.pubEventWithoutResource && this.jM4Q < 0) {
                    this.csJ7C()
                } else {}
            } else if (this.jM4Q < 0 && !this.ew2x.value && this.oR5W && this.oR5W.SK4O().length == 0) {
                n0x.Z1x.J0x({
                    type: 2,
                    tip: "请输入内容"
                })
            } else {
                this.csI7B()
            }
            break
        }
    }
    ;
    b0x.csJ7C = function() {
        var ue7X = 0, bvT4X = function() {
            if (ue7X % 2) {
                a9j.x0x(this.qi6c, "z-show")
            } else {
                a9j.y0x(this.qi6c, "z-show")
            }
            ue7X++;
            if (ue7X > 5) {
                clearInterval(eg2x)
            }
        }, eg2x;
        return function() {
            ue7X = 0;
            clearInterval(eg2x);
            eg2x = setInterval(bvT4X.f0x(this), 200)
        }
    }();
    b0x.Tg4k = function(m0x) {
        m0x = m0x.result;
        this.Yo6i[m0x.type] = !0;
        var r0x = k0x.di2x(bxg4k, m0x.type)
          , cj1x = "u-slg-" + ec2x[r0x] + "-gray";
        a9j.x0x(this.bbx7q[r0x], cj1x)
    }
    ;
    b0x.bwj4n = function(bx1x) {
        var j0x = bx1x.data;
        this.jM4Q = bx1x.id;
        this.ez2x = bx1x.type;
        this.o0x.style.display = "";
        this.HM1x(this.bSy1x);
        this.mO5T && this.mO5T.T0x();
        this.bwe4i = false;
        this.bwZ4d = j0x.picUrl;
        this.Rv4z = j0x.title || "";
        this.RI4M = j0x.author || "";
        this.bwW4a = j0x.authors || "";
        this.csH7A();
        this.bfd8V()
    }
    ;
    b0x.csM7F = function() {
        this.mO5T && this.mO5T.T0x();
        this.o0x.style.display = "";
        this.HM1x(this.bSy1x);
        this.bwe4i = false;
        this.bfd8V()
    }
    ;
    b0x.yk8c = function(d0x) {
        var bo1x = "[" + d0x.text + "]";
        gv3x.Il1x(this.ew2x, this.oN5S, bo1x);
        this.gg3x()
    }
    ;
    b0x.fW3x = function(d0x) {
        dy2x.dr2x.browser == "ie" && dy2x.dr2x.version < "7.0" ? setTimeout(this.gg3x.f0x(this), 0) : this.gg3x()
    }
    ;
    b0x.wf8X = function(d0x) {
        this.mc4g();
        if (d0x.keyCode == 8)
            this.gg3x()
    }
    ;
    b0x.gg3x = function() {
        this.mc4g();
        this.HN1x()
    }
    ;
    b0x.HN1x = function() {
        var bq1x = Math.ceil(k0x.fv2x(this.ew2x.value.trim()) / 2);
        this.cu1x.innerText = 140 - bq1x;
        bq1x > 140 ? a9j.fj2x(this.cu1x, "s-fc4", "s-fc6") : a9j.fj2x(this.cu1x, "s-fc6", "s-fc4")
    }
    ;
    b0x.csI7B = function() {
        if (this.cQ1x())
            return;
        if (k0x.fv2x(this.ew2x.value.trim()) > 280) {
            this.cc1x("字数超过140个字符");
            return
        }
        l0x.sy6s(this.csF7y.f0x(this))
    }
    ;
    b0x.csF7y = function(cG1x) {
        var u0x = this.Bn9e.tm7f(), j0x;
        if (u0x == 0) {
            for (var i = 0, IB1x = []; i < this.bbx7q.length; ++i) {
                if (!a9j.bE1x(this.bbx7q[i], "u-slg-" + ec2x[i] + "-gray"))
                    IB1x.push(bxg4k[i])
            }
            this.cQ1x(!0);
            j0x = {
                id: this.jM4Q,
                msg: this.ew2x.value.trim(),
                type: this.bfq8i(this.ez2x),
                picUrl: this.bwZ4d,
                snsTypes: IB1x.join(","),
                isPub: this.zr9i,
                checkToken: cG1x || ""
            };
            if (this.Yk6e > 0) {
                j0x.actId = this.Yk6e;
                if (this.Yn6h) {
                    j0x.msg = "#" + this.Yn6h + "#" + j0x.msg
                }
            }
            var ov5A = this.oR5W && this.oR5W.SK4O();
            if (ov5A && ov5A.length) {
                j0x.pics = ov5A
            }
            this.S0x.cwH8z(j0x)
        } else {
            var sZ7S = this.xw8o.Ve5j();
            if (sZ7S.length <= 0) {
                this.cc1x("请至少选择一位好友");
                return
            }
            this.S0x.cwG8y({
                data: {
                    id: this.jM4Q,
                    msg: this.ew2x.value.trim(),
                    type: this.bfq8i(this.ez2x == 41 ? 39 : this.ez2x),
                    userIds: "[" + sZ7S.join(",") + "]",
                    checkToken: cG1x || ""
                }
            })
        }
    }
    ;
    b0x.csL7E = function() {
        if (this.cQ1x()) {
            return
        }
        this.gA3x.eV2x("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k0x.fv2x(this.ew2x.value.trim()) > 280) {
            this.cc1x("字数超过140个字符");
            return
        }
        l0x.sy6s(this.csD7w.bind(this))
    }
    ;
    b0x.csD7w = function(cG1x) {
        this.cQ1x(!0);
        var j0x = {
            msg: this.ew2x.value.trim() || "",
            type: "video",
            checkToken: cG1x || ""
        }
          , csC7v = {
            videoId: this.jM4Q
        };
        if (this.Yk6e > 0) {
            j0x.actId = this.Yk6e;
            if (this.Yn6h) {
                j0x.msg = "#" + this.Yn6h + "#" + j0x.msg
            }
        }
        j0x.videoinfo = JSON.stringify(csC7v);
        this.S0x.cwE8w({
            data: {
                videoId: this.jM4Q,
                commit: true
            },
            data2: j0x,
            snsTypes: ""
        })
    }
    ;
    b0x.bbU7N = function(u0x, m0x) {
        this.cQ1x(!1);
        this.bt1x();
        if (!this.bwO4S) {
            if (this.HQ1x()) {
                n0x.Z1x.J0x({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                n0x.Z1x.J0x({
                    tip: "分享成功" + (m0x.point > 0 ? ' 获得<em class="s-fc6">' + m0x.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h0x.z0x(n0x.oP5U, "sharesuccess", {
            isPrivate: u0x,
            rid: this.jM4Q,
            rtype: this.ez2x,
            data: m0x.event
        });
        this.z0x("onshare")
    }
    ;
    b0x.jb3x = function(m0x) {
        this.cQ1x(!1);
        var bG1x = "分享失败";
        if (m0x.code) {
            switch (m0x.code) {
            case 250:
                bG1x = m0x.message || m0x.msg || (this.zr9i ? "发布异常" : "分享异常");
                break;
            case 404:
                bG1x = "分享的资源不存在";
                break;
            case 407:
                bG1x = "输入内容包含有关键字";
                break;
            case 408:
                bG1x = "分享太快了，过会再分享吧";
                break;
            case 315:
                bG1x = m0x.message || "根据对方设置，你没有该操作权限";
                break;
            case 329:
                return l0x.fs2x({
                    clazz: "m-layer-w2",
                    btntxt: "知道了",
                    message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                })
            }
        }
        this.cc1x(bG1x)
    }
    ;
    b0x.mc4g = function() {
        this.oN5S = gv3x.uz7s(this.ew2x)
    }
    ;
    b0x.cc1x = function(bG1x) {
        this.dY2x(this.ek2x, bG1x)
    }
    ;
    b0x.cQ1x = function(db1x) {
        return this.dS2x(this.Cs9j, db1x, "分享", "分享中...")
    }
    ;
    b0x.bfq8i = function(hY3x) {
        return ctb7U[hY3x] || ""
    }
    ;
    b0x.csB7u = function() {
        var eu2x, wi8a = this.bfq8i(this.ez2x);
        this.qi6c.style.display = "";
        if (this.jM4Q < 0) {
            this.qi6c.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.Rv4z) {
                this.qi6c.style.display = "none";
                return
            }
            var Wl5q = this.zr9i && this.ez2x != 24;
            eu2x = (Wy5D[wi8a] ? Wy5D[wi8a] + "：" : "") + this.Rv4z + (bRG0x[wi8a] || " ") + (wi8a == "mv" || wi8a == "album" ? this.bwW4a || this.RI4M : this.RI4M);
            a9j.dA2x(this.qi6c, "m-xwgt-share-infobar", {
                canChange: Wl5q,
                info: eu2x
            });
            if (Wl5q) {
                a9j.x0x(this.qi6c, "z-dis")
            } else {
                a9j.y0x(this.qi6c, "z-dis")
            }
        }
        a9j.x0x(this.qi6c, "info-video")
    }
    ;
    b0x.csH7A = function() {
        var wi8a = this.bfq8i(this.ez2x)
          , eu2x = (Wy5D[wi8a] ? Wy5D[wi8a] + "：" : "") + this.Rv4z + (bRG0x[wi8a] || " ") + (wi8a == "mv" || wi8a == "album" ? this.bwW4a || this.RI4M : this.RI4M);
        Wl5q = this.zr9i && this.ez2x != 24;
        if (this.HQ1x()) {} else {
            a9j.x0x(this.qi6c, "info-video");
            a9j.dA2x(this.qi6c, "m-xwgt-share-infobar", {
                canChange: Wl5q,
                isPub: this.zr9i,
                info: eu2x
            })
        }
    }
    ;
    b0x.csA7t = function() {
        var ID1x = this.ew2x.value;
        if (this.zr9i) {
            if (!!this.bwe4i) {
                return !!ID1x && !!ID1x.length || !!this.oR5W && this.oR5W.SK4O().length > 0
            } else {
                return !(this.jM4Q < 0) || !!ID1x && !!ID1x.length || !!this.oR5W && this.oR5W.SK4O().length > 0
            }
        } else {
            return !!ID1x && !!ID1x.length || !!this.oR5W && this.oR5W.SK4O().length > 0
        }
    }
    ;
    b0x.bfd8V = function() {
        var bVb1x = false;
        if (!this.zr9i || this.Tm4q.pubEventWithoutResource || !(this.jM4Q < 0)) {
            bVb1x = true
        }
        if (bVb1x) {
            a9j.x0x(this.Cs9j, "u-btn2-2-dis")
        } else {
            a9j.y0x(this.Cs9j, "u-btn2-2-dis")
        }
    }
    ;
    b0x.bTd1x = function(bvv4z) {
        if (bvv4z) {
            a9j.y0x(this.Cs9j, "u-btn2-2-dis")
        } else {
            this.bfd8V()
        }
    }
    ;
    b0x.bRQ1x = function(d0x) {
        if (d0x) {
            d0x.stopped = true
        }
        if (this.csA7t()) {
            l0x.ho3x({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function(V0x) {
                    if (V0x == "ok") {
                        this.z0x("forceclose", {});
                        this.bt1x();
                        h0x.z0x(n0x.oP5U, "shareclose", {})
                    }
                }
                .f0x(this)
            })
        } else {
            this.z0x("forceclose", {});
            this.bt1x();
            h0x.z0x(n0x.oP5U, "shareclose", {})
        }
    }
    ;
    b0x.HM1x = function(ep2x, dV2x) {
        this.oU5Z.BR9I(ep2x, dV2x)
    }
    ;
    b0x.Wz5E = function(u0x) {
        this.gA3x.eV2x("page", {
            type: u0x
        })
    }
    ;
    b0x.HQ1x = function() {
        return this.ez2x == 39
    }
    ;
    b0x.J0x = function() {
        var csz7s = function(p0x, r0x) {
            var cj1x = "u-slg-" + ec2x[r0x] + "-gray";
            !this.Yo6i[bxg4k[r0x]] ? a9j.y0x(p0x, cj1x) : a9j.x0x(p0x, cj1x)
        };
        return function() {
            L0x.J0x.call(this);
            this.o0x.style.display = "";
            this.cc1x();
            this.cQ1x(!1);
            this.Bn9e.Rt4x(0);
            this.ew2x.focus();
            this.ew2x.value = this.csW7P || "";
            this.ew2x.placeholder = this.csV7O || "";
            if (!this.HQ1x()) {
                this.csB7u()
            } else {
                a9j.y0x(this.qi6c, "info-video");
                a9j.dA2x(this.qi6c, "m-xwgt-share-videobar", {
                    title: this.Rv4z,
                    picUrl: this.bwZ4d
                })
            }
            this.gg3x();
            this.xw8o.ctZ7S();
            k0x.bd1x(this.bbx7q, csz7s, this);
            this.mc4g();
            if (this.zr9i) {
                this.qF6z.style.display = "none"
            } else {
                this.qF6z.style.display = ""
            }
            this.bfd8V()
        }
    }();
    b0x.bt1x = function(d0x) {
        L0x.bt1x.call(this);
        !!this.hp3x && this.hp3x.bt1x();
        if (this.xw8o) {
            this.xw8o.T0x();
            delete this.xw8o
        }
        if (this.hx3x) {
            this.hx3x.T0x();
            delete this.hx3x
        }
        if (this.oR5W) {
            this.oR5W.T0x();
            delete this.oR5W
        }
        if (this.bVh1x) {
            this.bVh1x = this.bVh1x.T0x()
        }
        if (this.mO5T) {
            this.mO5T.T0x();
            delete this.mO5T
        }
    }
    ;
    l0x.kL4P = function(e0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e0x.title === undefined) {
            e0x.title = "分享"
        }
        if (e0x.actId && e0x.type != 39) {
            var u0x = csX7Q[e0x.resourceType], bV1x = e0x.resourceJson, hZ3x;
            if (k0x.fC2x(bV1x)) {
                try {
                    bV1x = JSON.parse(bV1x)
                } catch (e) {}
            }
            if (u0x) {
                hZ3x = l0x.bMg8Y(u0x, bV1x);
                e0x.name = hZ3x.title;
                e0x.author = hZ3x.author;
                e0x.picUrl = hZ3x.picUrl;
                e0x.type = u0x;
                e0x.rid = (bV1x || []).id
            }
        }
        n0x.oP5U.J0x(e0x)
    }
    ;
    I0x.fK2x.A0x({
        element: n0x.oP5U,
        event: ["sharesuccess", "shareclose"]
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), v0x = c0x("nej.j"), n0x = c0x("nm.l"), w0x = c0x("nm.w"), bD1x = c0x("nej.ui"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, L0x;
    n0x.WY5d = NEJ.C();
    b0x = n0x.WY5d.N0x(n0x.eo2x);
    L0x = n0x.WY5d.cs1x;
    b0x.cw1x = function() {
        this.cE1x()
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i0x = a9j.H0x(this.o0x, "j-flag");
        h0x.s0x(i0x[0], "click", this.FK0x.f0x(this))
    }
    ;
    b0x.ch1x = function() {
        this.cf1x = "m-import-ok"
    }
    ;
    b0x.bl1x = function(e0x) {
        e0x.parent = e0x.parent || document.body;
        e0x.title = "歌曲同步完成";
        this.bn1x(e0x)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x()
    }
    ;
    b0x.FK0x = function(d0x) {
        this.bt1x();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    }
    ;
    b0x.De0x = function() {
        this.bt1x()
    }
    ;
    b0x.bSY1x = function(d0x) {
        if (d0x.keyCode == 13)
            this.EH0x()
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), v0x = c0x("nej.j"), O0x = c0x("nej.p"), k0x = c0x("nej.u"), n0x = c0x("nm.l"), w0x = c0x("nm.w"), bD1x = c0x("nej.ui"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, L0x;
    n0x.bVl1x = NEJ.C();
    b0x = n0x.bVl1x.N0x(n0x.eo2x);
    b0x.ch1x = function() {
        this.cf1x = "m-programtips-layer"
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        this.bU1x = a9j.H0x(this.o0x, "j-flag")
    }
    ;
    b0x.bl1x = function(e0x) {
        if (e0x.inner) {
            var innerNode = a9j.H0x(this.o0x, "wrap-p")[0];
            if (innerNode) {
                innerNode.innerHTML = e0x.inner
            }
        }
        e0x.clazz = " m-layer-programtips " + (e0x.clazz || "");
        e0x.parent = e0x.parent || document.body;
        e0x.title = e0x.title || "付费内容提示";
        e0x.draggable = !0;
        e0x.destroyalbe = !0;
        e0x.mask = true;
        this.bn1x(e0x);
        this.gY3x = e0x.id;
        this.cst7m = e0x.radiotype;
        this.ld4h = location.protocol + "//" + (this.bvs4w() || "music.163.com") + "/m/" + this.cst7m + "?id=" + this.gY3x;
        this.ld4h = e0x.url || this.ld4h;
        this.csq7j()
    }
    ;
    b0x.bC1x = function() {
        this.bF1x()
    }
    ;
    b0x.De0x = function() {
        this.bt1x()
    }
    ;
    b0x.FK0x = function(d0x) {
        this.z0x("onok", D0x);
        this.bt1x()
    }
    ;
    l0x.bvr4v = function(e0x) {
        n0x.bVl1x.A0x(e0x).J0x()
    }
    ;
    b0x.csq7j = function() {
        v0x.bm1x("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k0x.cD1x({
                url: this.ld4h,
                size: 180
            }),
            onload: function(j0x) {
                if (j0x.code == 200) {
                    this.csp7i(j0x.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }
            .f0x(this)
        })
    }
    ;
    b0x.bvs4w = function() {
        var SA4E = location.host;
        if (SA4E.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    }
    ;
    b0x.csp7i = function(jU4Y) {
        this.bU1x[0].style.backgroundImage = "url(" + jU4Y + ")"
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), dy2x = c0x("nej.p"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), I0x = c0x("nej.ut"), v0x = c0x("nej.j"), q0x = c0x("nm.d"), l0x = c0x("nm.x"), E0x = c0x("nm.m"), n0x = c0x("nm.l"), M0x = c0x("nm.m.f"), b0x, L0x;
    E0x.dg2x = NEJ.C();
    b0x = E0x.dg2x.N0x(I0x.du2x);
    b0x.bJ1x = function() {
        var ru6o = !1;
        return function() {
            if (ru6o)
                return;
            ru6o = !0;
            this.bQ1x();
            if (top == self) {
                return
            }
            this.uh7a = a9j.B0x("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bVA1x()
            }
            I0x.fK2x.A0x({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bX1x([[window, "scroll", this.BN9E.f0x(this)], [document, "keyup", this.cso7h.f0x(this)], [document.body, "click", this.sV7O.f0x(this)], [document, "mouseup", this.csn7g.f0x(this)], [this.uh7a, "click", this.Nb3x.f0x(this)], [q0x.tq7j, "message", this.vr7k.f0x(this)]]);
            l0x.cwP8H(document.body);
            this.BN9E();
            if (this.BK9B !== false && typeof GUser !== "undefined" && GUser.userId > 0)
                q0x.tq7j.gm3x().uL7E();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dy2x.dr2x.browser == "ie" && parseInt(dy2x.dr2x.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hi3x = top.player.getPlaying();
                    if (hi3x && hi3x.track && hi3x.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hi3x.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.Ap9g.f0x(this);
            this.kz4D = q0x.hO3x.A0x();
            window.log = this.hh3x.f0x(this);
            var ui7b = location.search;
            if (ui7b) {
                var bv1x = ui7b.substr(ui7b.indexOf("?") + 1)
                  , gq3x = k0x.hq3x(bv1x);
                if (gq3x && gq3x["_hash"])
                    location.hash = gq3x["_hash"]
            }
        }
    }();
    b0x.cso7h = function(d0x) {
        var g0x = h0x.X1x(d0x);
        try {
            if (d0x.keyCode == 80 && l0x.bHR7K() || ["textarea", "input"].indexOf(g0x.tagName.toLowerCase()) >= 0)
                return;
            h0x.z0x(top.document, "keyup", {
                ctrlKey: d0x.ctrlKey,
                keyCode: d0x.keyCode
            })
        } catch (e) {}
    }
    ;
    b0x.sV7O = function(d0x) {
        var g0x = h0x.X1x(d0x);
        if (g0x && g0x.tagName == "INPUT")
            return;
        var g0x = h0x.X1x(d0x, "d:pid");
        if (g0x) {
            h0x.cn1x(d0x);
            var qr6l = a9j.t0x(g0x, "pid")
              , BG9x = a9j.t0x(g0x, "ptype")
              , V0x = a9j.t0x(g0x, "action") || "play";
            switch (V0x) {
            case "subscribe":
                l0x.ms4w({
                    tracks: [qr6l]
                });
                break
            }
        }
        g0x = h0x.X1x(d0x, "d:resAction");
        if (g0x && g0x.className.indexOf("-dis") == -1) {
            var cS1x = a9j.t0x(g0x, "resId")
              , u0x = a9j.t0x(g0x, "resType")
              , bvm4q = a9j.t0x(g0x, "resRadiotype")
              , bvj4n = a9j.t0x(g0x, "resRadioid")
              , ee2x = a9j.t0x(g0x, "resFrom")
              , j0x = a9j.t0x(g0x, "resData")
              , V0x = a9j.t0x(g0x, "resAction")
              , buk3x = a9j.t0x(g0x, "resCopyright")
              , Yt6n = a9j.t0x(g0x, "resAuditstatus");
            if (V0x != "log" && V0x != "bilog")
                h0x.cn1x(d0x);
            switch (V0x) {
            case "log":
                j0x = (j0x || "").split("|");
                if (!!j0x[0]) {
                    var bh1x = {
                        id: cS1x,
                        alg: j0x[2] || "itembased",
                        scene: j0x[3],
                        position: j0x[1] || 0
                    };
                    if (!!j0x[4])
                        bh1x.srcid = j0x[4];
                    window.log(j0x[0], bh1x)
                }
                break;
            case "bilog":
                var bxv4z = a9j.t0x(g0x, "logAction")
                  , bxz4D = a9j.t0x(g0x, "logJson");
                window.log(bxv4z, bxz4D);
                break;
            case "share":
                if (Yt6n && Yt6n == 1) {
                    l0x.iu3x("由于版权问题，该节目暂时无法分享。")
                } else {
                    share(cS1x, u0x, a9j.t0x(g0x, "resPic"), a9j.t0x(g0x, "resName"), a9j.t0x(g0x, "resAuthor"), a9j.t0x(g0x, "resAuthors"))
                }
                break;
            case "fav":
            case "subscribe":
                if (u0x == 18) {
                    var qz6t = a9j.t0x(g0x, "resLevel")
                      , oc5h = a9j.t0x(g0x, "resFee");
                    if (qz6t == 10) {
                        l0x.uX7Q(oc5h, cS1x, "song");
                        break
                    }
                    l0x.ms4w({
                        tracks: [cS1x]
                    })
                }
                break;
            case "download":
                l0x.LU2x({
                    id: cS1x,
                    type: u0x
                });
                break;
            case "programtips":
                if (Yt6n && Yt6n == 1) {
                    l0x.iu3x("由于版权问题，该节目暂时无法分享。")
                } else {
                    l0x.bvr4v({
                        id: bvj4n,
                        radiotype: bvm4q
                    })
                }
                break
            }
        }
        if (top == self)
            return;
        try {
            top.onIframeClick(d0x)
        } catch (e) {}
    }
    ;
    b0x.csn7g = function(d0x) {
        try {
            h0x.z0x(top.document, "mouseup")
        } catch (e) {}
    }
    ;
    b0x.BN9E = function() {
        var csm7f = function() {
            var ce1x = window.innerHeight;
            if (!k0x.sN7G(ce1x))
                ce1x = (document.documentElement || document.body).clientHeight;
            return ce1x
        };
        return function(d0x) {
            if (!this.uh7a)
                return;
            var Yw6q = csm7f()
              , ga3x = document.documentElement.scrollTop || document.body.scrollTop;
            a9j.ba1x(this.uh7a, "display", ga3x > 0 ? "" : "none");
            if (dy2x.dr2x.browser == "ie" && dy2x.dr2x.version < "7.0") {
                var gy3x = Math.min(document.body.clientHeight, Yw6q + ga3x) - 204;
                a9j.ba1x(this.uh7a, "top", gy3x + "px")
            }
        }
    }();
    b0x.Nb3x = function(d0x) {
        h0x.cn1x(d0x);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }
    ;
    b0x.Ap9g = function() {
        var bvi4m = function(d0x) {
            h0x.z0x(window, "share", d0x)
        };
        return function(cS1x, u0x, Ah9Y, W1x, HH1x, HE1x) {
            l0x.kL4P({
                rid: cS1x,
                type: u0x,
                purl: Ah9Y,
                name: W1x,
                author: HH1x,
                authors: HE1x,
                onshare: bvi4m.f0x(this)
            })
        }
    }();
    b0x.hh3x = function(V0x, bh1x) {
        try {
            top.log(V0x, bh1x)
        } catch (e) {
            if (V0x.indexOf("new|") == 0) {
                return this.kz4D.eV2x(V0x.slice(4), bh1x)
            }
            switch (V0x) {
            case "play":
                this.kz4D.eq2x(bh1x);
                break;
            case "search":
                this.kz4D.bDh6b(bh1x);
                break;
            default:
                this.kz4D.eV2x(V0x, bh1x)
            }
        }
    }
    ;
    b0x.bVA1x = function() {
        var Zd6X, bvf4j = false, bs1x = [45, 60];
        var csl7e = function(bG1x) {
            if (bG1x.title != "MailBoxImport")
                return;
            var Q0x = JSON.parse(bG1x.content || "null") || bb1x;
            if (Q0x.status == 10) {
                n0x.WY5d.A0x().J0x();
                window.clearTimeout(Zd6X)
            }
        };
        var ou5z = function(d0x) {
            if (d0x.code == 200) {
                if (d0x.status == 1) {
                    h0x.s0x(q0x.Dv0x, "message", csl7e.f0x(this));
                    q0x.Dv0x.A0x().bxX4b();
                    bvf4j = true
                } else {
                    if (bvf4j) {
                        if (d0x.status == 10) {
                            n0x.WY5d.A0x().J0x();
                            h0x.he3x(q0x.Dv0x, "message");
                            window.clearTimeout(Zd6X);
                            bvf4j = false
                        }
                    } else {
                        window.clearTimeout(Zd6X)
                    }
                }
            }
        };
        return function() {
            var ub7U = bs1x.shift() * 1e3;
            v0x.bm1x("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: ou5z.f0x(this)
            });
            if (ub7U) {
                Zd6X = window.setTimeout(arguments.callee, ub7U)
            }
        }
    }();
    b0x.vr7k = function(d0x) {
        try {
            top.polling(d0x)
        } catch (e) {}
    }
}
)()
