"1.4.49";
(function(k, g, n, q) {
    "undefined" == typeof k.easyXDM && function(a, b, c, d, e, f) {
        function g(a, b) {
            var c = typeof a[b];
            return "function" == c || !("object" != c || !a[b]) || "unknown" == c
        }

        function k() {
            if (!B(n.plugins) && "object" == typeof n.plugins["Shockwave Flash"]) {
                var a = n.plugins["Shockwave Flash"].description;
                a && !B(n.mimeTypes) && n.mimeTypes["application/x-shockwave-flash"] && n.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (F = a.match(/\d+/g))
            }
            if (!F) {
                var b;
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), F =
                        Array.prototype.slice.call(b.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1)
                } catch (c) {}
            }
            if (!F) return !1;
            a = parseInt(F[0], 10);
            b = parseInt(F[1], 10);
            V = 9 < a && 0 < b;
            return !0
        }

        function q() {
            if (!G) {
                G = !0;
                for (var a = 0; a < P.length; a++) P[a]();
                P.length = 0
            }
        }

        function v(a, b) {
            G ? a.call(b) : P.push(function() {
                a.call(b)
            })
        }

        function L() {
            var a = parent;
            if ("" !== M)
                for (var b = 0, c = M.split("."); b < c.length; b++) a = a[c[b]];
            return a.easyXDM
        }

        function p(a) {
            var b = a.toLowerCase().match(Q);
            a = b[2];
            var c = b[3],
                b = b[4] || "";
            if ("http:" == a && ":80" ==
                b || "https:" == a && ":443" == b) b = "";
            return a + "//" + c + b
        }

        function D(a) {
            a = a.replace(ea, "$1/");
            if (!a.match(/^(http||https):\/\//)) {
                var b = "/" === a.substring(0, 1) ? "" : c.pathname;
                "/" !== b.substring(b.length - 1) && (b = b.substring(0, b.lastIndexOf("/") + 1));
                a = c.protocol + "//" + c.host + b + a
            }
            for (; Y.test(a);) a = a.replace(Y, "");
            return a
        }

        function H(a, b) {
            var c = "",
                d = a.indexOf("#"); - 1 !== d && (c = a.substring(d), a = a.substring(0, d));
            var d = [],
                e;
            for (e in b) b.hasOwnProperty(e) && d.push(e + "=" + f(b[e]));
            return a + (Z ? "#" : -1 == a.indexOf("?") ? "?" : "&") +
                d.join("&") + c
        }

        function B(a) {
            return "undefined" === typeof a
        }

        function t(a, b, c) {
            var d, f;
            for (f in b) b.hasOwnProperty(f) && (f in a ? (d = b[f], "object" === typeof d ? t(a[f], d, c) : c || (a[f] = b[f])) : a[f] = b[f]);
            return a
        }

        function E(a) {
            if (B(R)) {
                var c = b.body.appendChild(b.createElement("form")),
                    d = c.appendChild(b.createElement("input"));
                d.name = z + "TEST" + aa;
                R = d !== c.elements[d.name];
                b.body.removeChild(c)
            }
            R ? c = b.createElement('<iframe name="' + a.props.name + '"/>') : (c = b.createElement("IFRAME"), c.name = a.props.name);
            c.id = c.name = a.props.name;
            delete a.props.name;
            "string" == typeof a.container && (a.container = b.getElementById(a.container));
            a.container || (t(c.style, {
                position: "absolute",
                top: "-2000px",
                left: "0px"
            }), a.container = b.body);
            d = a.props.src;
            a.props.src = "javascript:false";
            t(c, a.props);
            c.border = c.frameBorder = 0;
            c.allowTransparency = !0;
            a.container.appendChild(c);
            a.onLoad && A(c, "load", a.onLoad);
            if (a.usePost) {
                var f = a.container.appendChild(b.createElement("form")),
                    e;
                f.target = c.name;
                f.action = d;
                f.method = "POST";
                if ("object" === typeof a.usePost)
                    for (var m in a.usePost) a.usePost.hasOwnProperty(m) &&
                        (R ? e = b.createElement('<input name="' + m + '"/>') : (e = b.createElement("INPUT"), e.name = m), e.value = a.usePost[m], f.appendChild(e));
                f.submit();
                f.parentNode.removeChild(f)
            } else c.src = d;
            a.props.src = d;
            return c
        }

        function ba(l) {
            var d = l.protocol,
                f;
            l.isHost = l.isHost || B(w.xdm_p);
            Z = l.hash || !1;
            l.props || (l.props = {});
            if (l.isHost) l.remote = D(l.remote), l.channel = l.channel || "default" + aa++, l.secret = Math.random().toString(16).substring(2), B(d) && (d = p(c.href) == p(l.remote) ? "4" : g(a, "postMessage") || g(b, "postMessage") ? "1" : l.swf &&
                g(a, "ActiveXObject") && k() ? "6" : "Gecko" === n.product && "frameElement" in a && -1 == n.userAgent.indexOf("WebKit") ? "5" : l.remoteHelper ? "2" : "0");
            else {
                l.channel = w.xdm_c.replace(/["'<>\\]/g, "");
                l.secret = w.xdm_s;
                l.remote = w.xdm_e.replace(/["'<>\\]/g, "");
                var d = w.xdm_p,
                    e;
                if (e = l.acl) {
                    a: {
                        e = l.acl;
                        var y = l.remote;
                        "string" == typeof e && (e = [e]);
                        for (var m, r = e.length; r--;)
                            if (m = e[r], m = new RegExp("^" == m.substr(0, 1) ? m : "^" + m.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$"), m.test(y)) {
                                e = !0;
                                break a
                            }
                        e = !1
                    }
                    e = !e
                }
                if (e) throw Error("Access denied for " +
                    l.remote);
            }
            l.protocol = d;
            switch (d) {
                case "0":
                    t(l, {
                        interval: 100,
                        delay: 2E3,
                        useResize: !0,
                        useParent: !1,
                        usePolling: !1
                    }, !0);
                    if (l.isHost) {
                        if (!l.local) {
                            d = c.protocol + "//" + c.host;
                            f = b.body.getElementsByTagName("img");
                            for (y = f.length; y--;)
                                if (e = f[y], e.src.substring(0, d.length) === d) {
                                    l.local = e.src;
                                    break
                                }
                            l.local || (l.local = a)
                        }
                        d = {
                            xdm_c: l.channel,
                            xdm_p: 0
                        };
                        l.local === a ? (l.usePolling = !0, l.useParent = !0, l.local = c.protocol + "//" + c.host + c.pathname + c.search, d.xdm_e = l.local, d.xdm_pa = 1) : d.xdm_e = D(l.local);
                        l.container && (l.useResize = !1, d.xdm_po = 1);
                        l.remote = H(l.remote, d)
                    } else t(l, {
                        channel: w.xdm_c,
                        remote: w.xdm_e,
                        useParent: !B(w.xdm_pa),
                        usePolling: !B(w.xdm_po),
                        useResize: l.useParent ? !1 : l.useResize
                    });
                    f = [new h.stack.HashTransport(l), new h.stack.ReliableBehavior({}), new h.stack.QueueBehavior({
                        encode: !0,
                        maxLength: 4E3 - l.remote.length
                    }), new h.stack.VerifyBehavior({
                        initiate: l.isHost
                    })];
                    break;
                case "1":
                    f = [new h.stack.PostMessageTransport(l)];
                    break;
                case "2":
                    l.isHost && (l.remoteHelper = D(l.remoteHelper));
                    f = [new h.stack.NameTransport(l), new h.stack.QueueBehavior,
                        new h.stack.VerifyBehavior({
                            initiate: l.isHost
                        })
                    ];
                    break;
                case "3":
                    f = [new h.stack.NixTransport(l)];
                    break;
                case "4":
                    f = [new h.stack.SameOriginTransport(l)];
                    break;
                case "5":
                    f = [new h.stack.FrameElementTransport(l)];
                    break;
                case "6":
                    F || k(), f = [new h.stack.FlashTransport(l)]
            }
            f.push(new h.stack.QueueBehavior({
                lazy: l.lazy,
                remove: !0
            }));
            return f
        }

        function ca(a) {
            for (var b, c = {
                    incoming: function(a, b) {
                        this.up.incoming(a, b)
                    },
                    outgoing: function(a, b) {
                        this.down.outgoing(a, b)
                    },
                    callback: function(a) {
                        this.up.callback(a)
                    },
                    init: function() {
                        this.down.init()
                    },
                    destroy: function() {
                        this.down.destroy()
                    }
                }, d = 0, f = a.length; d < f; d++) b = a[d], t(b, c, !0), 0 !== d && (b.down = a[d - 1]), d !== f - 1 && (b.up = a[d + 1]);
            return b
        }

        function fa(a) {
            a.up.down = a.down;
            a.down.up = a.up;
            a.up = a.down = null
        }
        var S = this,
            aa = Math.floor(1E4 * Math.random()),
            W = Function.prototype,
            Q = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
            Y = /[\-\w]+\/\.\.\//,
            ea = /([^:])\/\//g,
            M = "",
            h = {},
            ga = a.easyXDM,
            z = "easyXDM_",
            R, Z = !1,
            F, V, A, I;
        if (g(a, "addEventListener")) A = function(a, b, c) {
            a.addEventListener(b, c, !1)
        }, I = function(a, b, c) {
            a.removeEventListener(b,
                c, !1)
        };
        else if (g(a, "attachEvent")) A = function(a, b, c) {
            a.attachEvent("on" + b, c)
        }, I = function(a, b, c) {
            a.detachEvent("on" + b, c)
        };
        else throw Error("Browser not supported");
        var G = !1,
            P = [],
            T;
        "readyState" in b ? (T = b.readyState, G = "complete" == T || ~n.userAgent.indexOf("AppleWebKit/") && ("loaded" == T || "interactive" == T)) : G = !!b.body;
        if (!G) {
            if (g(a, "addEventListener")) A(b, "DOMContentLoaded", q);
            else if (A(b, "readystatechange", function() {
                    "complete" == b.readyState && q()
                }), b.documentElement.doScroll && a === top) {
                var da = function() {
                    if (!G) {
                        try {
                            b.documentElement.doScroll("left")
                        } catch (a) {
                            d(da,
                                1);
                            return
                        }
                        q()
                    }
                };
                da()
            }
            A(a, "load", q)
        }
        var w = function(a) {
                a = a.substring(1).split("&");
                for (var b = {}, c, d = a.length; d--;) c = a[d].split("="), b[c[0]] = e(c[1]);
                return b
            }(/xdm_e=/.test(c.search) ? c.search : c.hash),
            X = function() {
                var a = {},
                    b = {
                        a: [1, 2, 3]
                    };
                if ("undefined" != typeof JSON && "function" === typeof JSON.stringify && '{"a":[1,2,3]}' === JSON.stringify(b).replace(/\s/g, "")) return JSON;
                Object.toJSON && '{"a":[1,2,3]}' === Object.toJSON(b).replace(/\s/g, "") && (a.stringify = Object.toJSON);
                "function" === typeof String.prototype.evalJSON &&
                    (b = '{"a":[1,2,3]}'.evalJSON(), b.a && 3 === b.a.length && 3 === b.a[2] && (a.parse = function(a) {
                        return a.evalJSON()
                    }));
                return a.stringify && a.parse ? (X = function() {
                    return a
                }, a) : null
            };
        t(h, {
            version: "2.4.19.0",
            query: w,
            stack: {},
            apply: t,
            getJSONObject: X,
            whenReady: v,
            noConflict: function(b) {
                a.easyXDM = ga;
                (M = b) && (z = "easyXDM_" + M.replace(".", "_") + "_");
                return h
            }
        });
        h.DomHelper = {
            on: A,
            un: I,
            requiresJSON: function(c) {
                "object" == typeof a.JSON && a.JSON || b.write('<script type="text/javascript" src="' + c + '">\x3c/script>')
            }
        };
        (function() {
            var a = {};
            h.Fn = {
                set: function(b, c) {
                    a[b] = c
                },
                get: function(b, c) {
                    if (a.hasOwnProperty(b)) {
                        var d = a[b];
                        c && delete a[b];
                        return d
                    }
                }
            }
        })();
        h.Socket = function(a) {
            var b = ca(ba(a).concat([{
                    incoming: function(b, c) {
                        a.onMessage(b, c)
                    },
                    callback: function(b) {
                        if (a.onReady) a.onReady(b)
                    }
                }])),
                c = p(a.remote);
            this.origin = p(a.remote);
            this.destroy = function() {
                b.destroy()
            };
            this.postMessage = function(a) {
                b.outgoing(a, c)
            };
            b.init()
        };
        h.Rpc = function(a, b) {
            if (b.local)
                for (var c in b.local)
                    if (b.local.hasOwnProperty(c)) {
                        var d = b.local[c];
                        "function" === typeof d &&
                            (b.local[c] = {
                                method: d
                            })
                    }
            var f = ca(ba(a).concat([new h.stack.RpcBehavior(this, b), {
                callback: function(b) {
                    if (a.onReady) a.onReady(b)
                }
            }]));
            this.origin = p(a.remote);
            this.destroy = function() {
                f.destroy()
            };
            f.init()
        };
        h.stack.SameOriginTransport = function(a) {
            var b, f, e, g;
            return b = {
                outgoing: function(a, b, c) {
                    e(a);
                    c && c()
                },
                destroy: function() {
                    f && (f.parentNode.removeChild(f), f = null)
                },
                onDOMReady: function() {
                    g = p(a.remote);
                    a.isHost ? (t(a.props, {
                        src: H(a.remote, {
                            xdm_e: c.protocol + "//" + c.host + c.pathname,
                            xdm_c: a.channel,
                            xdm_p: 4
                        }),
                        name: z + a.channel + "_provider"
                    }), f = E(a), h.Fn.set(a.channel, function(a) {
                        e = a;
                        d(function() {
                            b.up.callback(!0)
                        }, 0);
                        return function(a) {
                            b.up.incoming(a, g)
                        }
                    })) : (e = L().Fn.get(a.channel)(function(a) {
                        b.up.incoming(a, g)
                    }), d(function() {
                        b.up.callback(!0)
                    }, 0))
                },
                init: function() {
                    v(b.onDOMReady, b)
                }
            }
        };
        h.stack.FlashTransport = function(a) {
            function e(a, b) {
                d(function() {
                    N.up.incoming(a, m)
                }, 0)
            }

            function g(c) {
                var d = a.swf + "?host=" + a.isHost,
                    e = "easyXDM_swf_" + Math.floor(1E4 * Math.random());
                h.Fn.set("flash_loaded" + c.replace(/[\-.]/g,
                    "_"), function() {
                    h.stack.FlashTransport[c].swf = r = J.firstChild;
                    for (var a = h.stack.FlashTransport[c].queue, b = 0; b < a.length; b++) a[b]();
                    a.length = 0
                });
                a.swfContainer ? J = "string" == typeof a.swfContainer ? b.getElementById(a.swfContainer) : a.swfContainer : (J = b.createElement("div"), t(J.style, V && a.swfNoThrottle ? {
                    height: "20px",
                    width: "20px",
                    position: "fixed",
                    right: 0,
                    top: 0
                } : {
                    height: "1px",
                    width: "1px",
                    position: "absolute",
                    overflow: "hidden",
                    right: 0,
                    top: 0
                }), b.body.appendChild(J));
                var m = "callback=flash_loaded" + f(c.replace(/[\-.]/g,
                    "_")) + "&proto=" + S.location.protocol + "&domain=" + f(S.location.href.match(Q)[3]) + "&port=" + f(S.location.href.match(Q)[4] || "") + "&ns=" + f(M);
                J.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + e + "' data='" + d + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + d + "'></param><param name='flashvars' value='" + m + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + m + "' allowScriptAccess='always' wmode='transparent' src='" +
                    d + "' height='1' width='1'></embed></object>"
            }
            var N, y, m, r, J;
            return N = {
                outgoing: function(b, c, d) {
                    r.postMessage(a.channel, b.toString());
                    d && d()
                },
                destroy: function() {
                    try {
                        r.destroyChannel(a.channel)
                    } catch (b) {}
                    r = null;
                    y && (y.parentNode.removeChild(y), y = null)
                },
                onDOMReady: function() {
                    m = a.remote;
                    h.Fn.set("flash_" + a.channel + "_init", function() {
                        d(function() {
                            N.up.callback(!0)
                        })
                    });
                    h.Fn.set("flash_" + a.channel + "_onMessage", e);
                    a.swf = D(a.swf);
                    var b = a.swf.match(Q)[3],

                        f = function() {
                            h.stack.FlashTransport[b].init = !0;
                            r = h.stack.FlashTransport[b].swf;
                            r.createChannel(a.channel, a.secret, p(a.remote), a.isHost);
                            a.isHost && (V && a.swfNoThrottle && t(a.props, {
                                position: "fixed",
                                right: 0,
                                top: 0,
                                height: "20px",
                                width: "20px"
                            }), t(a.props, {
                                src: H(a.remote, {
                                    xdm_e: p(c.href),
                                    xdm_c: a.channel,
                                    xdm_p: 6,
                                    xdm_s: a.secret
                                }),
                                name: z + a.channel + "_provider"
                            }), y = E(a))
                        };
                    h.stack.FlashTransport[b] && h.stack.FlashTransport[b].init ? f() : h.stack.FlashTransport[b] ? h.stack.FlashTransport[b].queue.push(f) : (h.stack.FlashTransport[b] = {
                        queue: [f]
                    }, g(b))
                },
                init: function() {
                    v(N.onDOMReady, N)
                }
            }
        };
        h.stack.PostMessageTransport =
            function(b) {
                function f(a) {
                    var d;
                    if (a.origin) d = p(a.origin);
                    else if (a.uri) d = p(a.uri);
                    else if (a.domain) d = c.protocol + "//" + a.domain;
                    else throw "Unable to retrieve the origin of the event";
                    d == m && a.data.substring(0, b.channel.length + 1) == b.channel + " " && e.up.incoming(a.data.substring(b.channel.length + 1), d)
                }
                var e, g, h, m;
                return e = {
                    outgoing: function(a, c, d) {
                        h.postMessage(b.channel + " " + a, c || m);
                        d && d()
                    },
                    destroy: function() {
                        I(a, "message", f);
                        g && (h = null, g.parentNode.removeChild(g), g = null)
                    },
                    onDOMReady: function() {
                        m = p(b.remote);
                        if (b.isHost) {
                            var r = function(c) {
                                c.data == b.channel + "-ready" && (h = "postMessage" in g.contentWindow ? g.contentWindow : g.contentWindow.document, I(a, "message", r), A(a, "message", f), d(function() {
                                    e.up.callback(!0)
                                }, 0))
                            };
                            A(a, "message", r);
                            t(b.props, {
                                src: H(b.remote, {
                                    xdm_e: p(c.href),
                                    xdm_c: b.channel,
                                    xdm_p: 1
                                }),
                                name: z + b.channel + "_provider"
                            });
                            g = E(b)
                        } else A(a, "message", f), h = "postMessage" in a.parent ? a.parent : a.parent.document, h.postMessage(b.channel + "-ready", m), d(function() {
                            e.up.callback(!0)
                        }, 0)
                    },
                    init: function() {
                        v(e.onDOMReady,
                            e)
                    }
                }
            };
        h.stack.FrameElementTransport = function(f) {
            var e, g, h, k;
            return e = {
                outgoing: function(a, b, c) {
                    h.call(this, a);
                    c && c()
                },
                destroy: function() {
                    g && (g.parentNode.removeChild(g), g = null)
                },
                onDOMReady: function() {
                    k = p(f.remote);
                    f.isHost ? (t(f.props, {
                        src: H(f.remote, {
                            xdm_e: p(c.href),
                            xdm_c: f.channel,
                            xdm_p: 5
                        }),
                        name: z + f.channel + "_provider"
                    }), g = E(f), g.fn = function(a) {
                        delete g.fn;
                        h = a;
                        d(function() {
                            e.up.callback(!0)
                        }, 0);
                        return function(a) {
                            e.up.incoming(a, k)
                        }
                    }) : (b.referrer && p(b.referrer) != w.xdm_e && (a.top.location = w.xdm_e),
                        h = a.frameElement.fn(function(a) {
                            e.up.incoming(a, k)
                        }), e.up.callback(!0))
                },
                init: function() {
                    v(e.onDOMReady, e)
                }
            }
        };
        h.stack.NameTransport = function(a) {
            function b(c) {
                k.contentWindow.sendMessage(c, a.remoteHelper + (r ? "#_3" : "#_2") + a.channel)
            }

            function c() {
                r ? 2 !== ++u && r || g.up.callback(!0) : (b("ready"), g.up.callback(!0))
            }

            function f(a) {
                g.up.incoming(a, O)
            }

            function e() {
                C && d(function() {
                    C(!0)
                }, 0)
            }
            var g, r, k, x, u, C, O, U;
            return g = {
                outgoing: function(a, c, d) {
                    C = d;
                    b(a)
                },
                destroy: function() {
                    k.parentNode.removeChild(k);
                    k = null;
                    r && (x.parentNode.removeChild(x),
                        x = null)
                },
                onDOMReady: function() {
                    r = a.isHost;
                    u = 0;
                    O = p(a.remote);
                    a.local = D(a.local);
                    r ? (h.Fn.set(a.channel, function(b) {
                        r && "ready" === b && (h.Fn.set(a.channel, f), c())
                    }), U = H(a.remote, {
                        xdm_e: a.local,
                        xdm_c: a.channel,
                        xdm_p: 2
                    }), t(a.props, {
                        src: U + "#" + a.channel,
                        name: z + a.channel + "_provider"
                    }), x = E(a)) : (a.remoteHelper = a.remote, h.Fn.set(a.channel, f));
                    var b = function() {
                        var f = k || this;
                        I(f, "load", b);
                        h.Fn.set(a.channel + "_load", e);
                        (function ja() {
                            "function" == typeof f.contentWindow.sendMessage ? c() : d(ja, 50)
                        })()
                    };
                    k = E({
                        props: {
                            src: a.local +
                                "#_4" + a.channel
                        },
                        onLoad: b
                    })
                },
                init: function() {
                    v(g.onDOMReady, g)
                }
            }
        };
        h.stack.HashTransport = function(b) {
            function c() {
                if (K) {
                    var a = K.location.href,
                        b = "",
                        d = a.indexOf("#"); - 1 != d && (b = a.substring(d));
                    b && b != k && (k = b, f.up.incoming(k.substring(k.indexOf("_") + 1), O))
                }
            }
            var f, e, g, h, k, x, K, u, C, O;
            return f = {
                outgoing: function(a, c) {
                    if (u) {
                        var d = b.remote + "#" + x++ + "_" + a;
                        (e || !C ? u.contentWindow : u).location = d
                    }
                },
                destroy: function() {
                    a.clearInterval(g);
                    !e && C || u.parentNode.removeChild(u);
                    u = null
                },
                onDOMReady: function() {
                    e = b.isHost;
                    h = b.interval;
                    k = "#" + b.channel;
                    x = 0;
                    C = b.useParent;
                    O = p(b.remote);
                    if (e) {
                        t(b.props, {
                            src: b.remote,
                            name: z + b.channel + "_provider"
                        });
                        if (C) b.onLoad = function() {
                            K = a;
                            g = setInterval(c, h);
                            f.up.callback(!0)
                        };
                        else {
                            var U = 0,
                                ha = b.delay / 50;
                            (function ia() {
                                if (++U > ha) throw Error("Unable to reference listenerwindow");
                                try {
                                    K = u.contentWindow.frames[z + b.channel + "_consumer"]
                                } catch (a) {}
                                K ? (g = setInterval(c, h), f.up.callback(!0)) : d(ia, 50)
                            })()
                        }
                        u = E(b)
                    } else K = a, g = setInterval(c, h), C ? (u = parent, f.up.callback(!0)) : (t(b, {
                        props: {
                            src: b.remote + "#" + b.channel +
                                new Date,
                            name: z + b.channel + "_consumer"
                        },
                        onLoad: function() {
                            f.up.callback(!0)
                        }
                    }), u = E(b))
                },
                init: function() {
                    v(f.onDOMReady, f)
                }
            }
        };
        h.stack.ReliableBehavior = function(a) {
            var b, c, d = 0,
                f = 0,
                e = "";
            return b = {
                incoming: function(a, g) {
                    var l = a.indexOf("_"),
                        h = a.substring(0, l).split(",");
                    a = a.substring(l + 1);
                    h[0] == d && (e = "", c && c(!0));
                    0 < a.length && (b.down.outgoing(h[1] + "," + d + "_" + e, g), f != h[1] && (f = h[1], b.up.incoming(a, g)))
                },
                outgoing: function(a, g, l) {
                    e = a;
                    c = l;
                    b.down.outgoing(f + "," + ++d + "_" + a, g)
                }
            }
        };
        h.stack.QueueBehavior = function(a) {
            function b() {
                if (a.remove &&
                    0 === g.length) fa(c);
                else if (!h && 0 !== g.length && !x) {
                    h = !0;
                    var f = g.shift();
                    c.down.outgoing(f.data, f.origin, function(a) {
                        h = !1;
                        f.callback && d(function() {
                            f.callback(a)
                        }, 0);
                        b()
                    })
                }
            }
            var c, g = [],
                h = !0,
                k = "",
                x, p = 0,
                n = !1,
                u = !1;
            return c = {
                init: function() {
                    B(a) && (a = {});
                    a.maxLength && (p = a.maxLength, u = !0);
                    a.lazy ? n = !0 : c.down.init()
                },
                callback: function(a) {
                    h = !1;
                    var d = c.up;
                    b();
                    d.callback(a)
                },
                incoming: function(b, d) {
                    if (u) {
                        var f = b.indexOf("_"),
                            g = parseInt(b.substring(0, f), 10);
                        k += b.substring(f + 1);
                        0 === g && (a.encode && (k = e(k)), c.up.incoming(k,
                            d), k = "")
                    } else c.up.incoming(b, d)
                },
                outgoing: function(d, e, h) {
                    a.encode && (d = f(d));
                    var k = [],
                        m;
                    if (u) {
                        for (; 0 !== d.length;) m = d.substring(0, p), d = d.substring(m.length), k.push(m);
                        for (; m = k.shift();) g.push({
                            data: k.length + "_" + m,
                            origin: e,
                            callback: 0 === k.length ? h : null
                        })
                    } else g.push({
                        data: d,
                        origin: e,
                        callback: h
                    });
                    n ? c.down.init() : b()
                },
                destroy: function() {
                    x = !0;
                    c.down.destroy()
                }
            }
        };
        h.stack.VerifyBehavior = function(a) {
            function b() {
                d = Math.random().toString(16).substring(2);
                c.down.outgoing(d)
            }
            var c, d, f;
            return c = {
                incoming: function(e,
                    g) {
                    var h = e.indexOf("_"); - 1 === h ? e === d ? c.up.callback(!0) : f || (f = e, a.initiate || b(), c.down.outgoing(e)) : e.substring(0, h) === f && c.up.incoming(e.substring(h + 1), g)
                },
                outgoing: function(a, b, f) {
                    c.down.outgoing(d + "_" + a, b, f)
                },
                callback: function(c) {
                    a.initiate && b()
                }
            }
        };
        h.stack.RpcBehavior = function(a, b) {
            function c(a) {
                a.jsonrpc = "2.0";
                e.down.outgoing(g.stringify(a))
            }

            function d(a, b) {
                var f = Array.prototype.slice;
                return function() {
                    var d = arguments.length,
                        e, g = {
                            method: b
                        };
                    0 < d && "function" === typeof arguments[d - 1] ? (1 < d && "function" ===
                        typeof arguments[d - 2] ? (e = {
                            success: arguments[d - 2],
                            error: arguments[d - 1]
                        }, g.params = f.call(arguments, 0, d - 2)) : (e = {
                            success: arguments[d - 1]
                        }, g.params = f.call(arguments, 0, d - 1)), k["" + ++h] = e, g.id = h) : g.params = f.call(arguments, 0);
                    a.namedParams && 1 === g.params.length && (g.params = g.params[0]);
                    c(g)
                }
            }

            function f(a, b, d, e) {
                if (d) {
                    var g, h;
                    b ? (g = function(a) {
                        g = W;
                        c({
                            id: b,
                            result: a
                        })
                    }, h = function(a, d) {
                        h = W;
                        var f = {
                            id: b,
                            error: {
                                code: -32099,
                                message: a
                            }
                        };
                        d && (f.error.data = d);
                        c(f)
                    }) : g = h = W;
                    "[object Array]" !== Object.prototype.toString.call(e) &&
                        (e = [e]);
                    try {
                        var k = d.method.apply(d.scope, e.concat([g, h]));
                        B(k) || g(k)
                    } catch (l) {
                        h(l.message)
                    }
                } else b && c({
                    id: b,
                    error: {
                        code: -32601,
                        message: "Procedure not found."
                    }
                })
            }
            var e, g = b.serializer || X(),
                h = 0,
                k = {};
            return e = {
                incoming: function(a, d) {
                    var e = g.parse(a);
                    if (e.method) b.handle ? b.handle(e, c) : f(e.method, e.id, b.local[e.method], e.params);
                    else {
                        var h = k[e.id];
                        e.error ? h.error && h.error(e.error) : h.success && h.success(e.result);
                        delete k[e.id]
                    }
                },
                init: function() {
                    if (b.remote)
                        for (var c in b.remote) b.remote.hasOwnProperty(c) &&
                            (a[c] = d(b.remote[c], c));
                    e.down.init()
                },
                destroy: function() {
                    for (var c in b.remote) b.remote.hasOwnProperty(c) && a.hasOwnProperty(c) && delete a[c];
                    e.down.destroy()
                }
            }
        };
        S.easyXDM = h
    }(k, g, location, k.setTimeout, decodeURIComponent, encodeURIComponent);
    "undefined" != typeof k.uLogin && k.uLogin.uLoginHost || (Array.indexOf || (Array.prototype.indexOf = function(a) {
            for (var b = 0; b < this.length; b++)
                if (this[b] == a) return b;
            return -1
        }), String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }),
        "undefined" === typeof k.console && (k.console = {
            log: function() {},
            error: function() {},
            info: function() {},
            assert: function() {}
        }), k.uLogin = {
            uLoginHost: function(a) {
                var b, c;
                for (c in a)
                    if (c in a && a[c].src && /^https?:\/\/(.*?)\/js\/ulogin\.js/.test(a[c].src)) {
                        b = a[c].src.match(/^https?:\/\/([^/]+)/)[1].replace(/^www\./, "");
                        break
                    }
                return "u-login.com" === b ? "u-login.com" : "ulogin.ru"
            }(g.getElementsByTagName("script"))
        }, k.uLogin = {
            protocol: location.href.match(/^https/i) ? "https" : "http",
            host: encodeURIComponent(location.host),
            uLoginHost: uLogin.uLoginHost,
            supportStorage: !!("localStorage" in window && null !== window.localStorage && "JSON" in window && null !== window.JSON && "undefined" !== typeof window.JSON.parse && "undefined" !== typeof window.JSON.stringify),
            supportHistory: !(!window.history || !history.pushState),
            ids: [],
            timeouts: {},
            listeners: {},
            lang: (n.language || n.systemLanguage || n.userLanguage || "en").substr(0, 2).toLowerCase(),
            langs: "en ru uk fr de uz".split(" "),
            dialog: !1,
            close: !1,
            lightbox: !1,
            dialogSocket: !1,
            pixel: "//" + uLogin.uLoginHost +
                "/match?rand=[rand]&u=[u]&r=[r]",
            providerCodes: "vkontakte odnoklassniki mailru facebook twitter google yandex livejournal openid flickr lastfm linkedin liveid soundcloud steam uid webmoney youtube foursquare tumblr googleplus dudu vimeo instagram wargaming".split(" "),
            providerNames: "VK Odnoklassniki Mail.ru Facebook Twitter Google Yandex LiveJournal OpenID Flickr Last.FM LinkedIn LiveID SoundCloud Steam uID WebMoney YouTube foursquare tumblr Google+ dudu Vimeo Instagram Wargaming.net".split(" "),
            states: ["ready", "receive", "open", "close"],
            widgetSettings: {},
            findTimer: 0,
            waitGetWidget: {},
            altwayCalled: [],
            rc: !1,
            altway: function(a) {
                if (/_utl_t=vk/.test(location.href)) return !0;
                a = a.toLowerCase();
                return !!/(iPhone|iPad)(.*?)(chrome|crios|IE Mobile|UCWEB|FBAN)/i.test(a)
            }(n.userAgent || n.vendor || k.opera),
            mobile: function(a) {
                a = a.toLowerCase();
                return !(!/(ip(ad|od|hone)|android)/i.test(a) || /(crios|Chrome)/i.test(a) || !/(Opera|Apple|Safari)/i.test(a))
            }(n.userAgent || n.vendor || k.opera),
            get: function(a) {
                return g.getElementById(a)
            },
            exists: function(a) {
                return "undefined" != typeof a
            },
            add: function(a, b, c) {
                a.addEventListener ? a.addEventListener(b, function(b) {
                    c(a, b)
                }, !1) : a.attachEvent ? a.attachEvent("on" + b, function(b) {
                    c(a, b)
                }) : a["on" + b] = function(b) {
                    c(a, b)
                };
                "click" === b && this.add(a, "touchend", c)
            },
            is_encoded: function(a) {
                return decodeURIComponent(a) != a
            },
            genID: function() {
                for (var a = new Date, b = a.getTime() + Math.floor(1E5 * Math.random()); this.get("ul_" + b);) b = a.getTime() + Math.floor(1E5 * Math.random());
                return "ul_" + b
            },
            show: function(a) {
                this.exists(a) &&
                    (a.style.display = "block")
            },
            hide: function(a) {
                a && this.exists(a) && (a.style.display = "none")
            },
            parse: function(a) {
                var b = {};
                if (!a) return b;
                if ("object" === typeof a) return a;
                var c = a.split("&"),
                    c = 1 < c.length ? c : a.split(";");
                for (a = 0; a < c.length; a++) {
                    var d = c[a].split("=");
                    d[0] && (d[0] = d[0].trim());
                    d[1] && (d[1] = d[1].trim());
                    b[d[0]] = d[1]
                }
                return b
            },
            scrollTop: function() {
                return k.pageYOffset || g.documentElement.scrollTop || g.body.scrollTop
            },
            scrollLeft: function() {
                return k.pageXOffset || g.documentElement.scrollLeft || g.body.scrollLeft
            },
            dialogHeight: function() {
                return 358
            },
            dialogWidth: function() {
                return 564
            },
            clientWidth: function() {
                var a = 0;
                "[object Opera]" == Object.prototype.toString.call(k.opera) && 9.5 > k.parseFloat(k.opera.version()) ? a = g.body.clientWidth : k.innerWidth && (a = k.innerWidth);
                this.isIE() && (a = g.documentElement.clientWidth);
                return a
            },
            clientHeight: function() {
                var a = 0;
                "[object Opera]" == Object.prototype.toString.call(k.opera) && 9.5 > k.parseFloat(k.opera.version()) ? a = g.body.clientHeight : k.innerHeight && (a = k.innerHeight);
                this.isIE() &&
                    (a = g.documentElement.clientHeight);
                return a
            },
            isIE: function() {
                if (/MSIE (\d+\.\d+);/.test(n.userAgent)) {
                    var a = Number(RegExp.$1);
                    if (9 > a) return a
                }
                return !1
            },
            inArray: function(a, b) {
                if (!a || !b) return !1;
                for (var c = 0, d = b.length; c < d; c++)
                    if (a == b[c]) return c;
                return -1
            },
            findWidgets: function() {
                for (var a = 0, b = [], c = [], d = g.getElementsByTagName("div"), e = g.getElementsByTagName("a"); e[a];) e[a] && (b[a] = e[a]), a++;
                for (a = 0; d[a];) d[a] && (c[a] = d[a]), a++;
                for (a = 0; c[a] || b[a];) c[a] && this.addWidget(c[a]), b[a] && this.addWidget(b[a]), a++
            },
            addWidget: function(a, b) {
                var c = a.id,
                    d = a.getAttribute("data-uloginid");
                b = b || a.getAttribute("data-ulogin") || a.getAttribute("x-ulogin-params");
                !d && !b || c || (c = this.genID(), a.setAttribute("id", c));
                d ? this.getWidget(d, c) : b && this.setProp(c, this.ids.length, this.parse(b))
            },
            inited: function(a) {
                for (var b = 0; b < this.ids.length; b++)
                    if (a == this.ids[b].id) return !0;
                return !1
            },
            initWidget: function(a) {
                if (a) {
                    var b = this.get(a);
                    if (b && (b = b.getAttribute("data-ulogin") || b.getAttribute("x-ulogin-params")) && !this.inited(a)) {
                        var b =
                            this.parse(b),
                            c = this.getWidgetNumber(a);
                        isNaN(c) ? c = this.ids.length : this.ids[c] = {};
                        this.setProp(a, c, b)
                    }
                }
            },
            setProp: function(a, b, c) {
                if (this.inited(a)) return !1;
                this.ids[b] = {
                    id: a,
                    dropTimer: !1,
                    initCheck: !1,
                    type: c.display || "",
                    providers: c.providers || "",
                    hidden: c.hidden || "",
                    redirect_uri: c.redirect_uri || "",
                    callback: c.callback || "",
                    fields: c.fields || "first_name,last_name",
                    optional: c.optional || "",
                    color: c.color || "fff",
                    opacity: c.opacity || "75",
                    verify: c.verify || "",
                    lang: c.lang || this.lang,
                    altway: c.altway || this.altway,
                    sort: "default" === c.sort ? "default" : "relevant",
                    state: "",
                    hidden_button: c.hidden_button || "outer",
                    dropdown_container: c.dropdown_container || "body"
                };
                this.ids[b].providers || this.ids[b].other || (this.ids[b].hidden = "other");
                "small" !== this.ids[b].type && "panel" !== this.ids[b].type || this.sendStats({
                    type: this.ids[b].type
                });
                "window" == this.ids[b].type && !this.ids[b].providers && this.ids[b].hidden && (this.ids[b].providers = this.providerCodes.join(","));
                this.ids[b].mobile = 0 == c.mobilebuttons ? 0 : this.mobile;
                this.ids[b].altway &&
                    !this.ids[b].redirect_uri && (this.ids[b].redirect_uri = location.href);
                this.ids[b].callback && !this.ids[b].altway && (this.ids[b].redirect_uri = "");
                this.ids[b].redirect_uri = this.clearRedirectUri(this.ids[b].redirect_uri); - 1 == this.inArray(this.ids[b].lang, this.langs) && (this.ids[b].lang = this.lang);
                switch (c.display) {
                    case "small":
                    case "panel":
                        this.ids[b].listener_id = !1;
                        this.initPanel(b);
                        break;
                    case "window":
                        this.initWindow(b);
                        break;
                    case "buttons":
                        this.initButtons(b);
                        break;
                    default:
                        this.ids.splice(b, b)
                }
                this.get(a).setAttribute("data-ulogin-inited", (+new Date).toString())
            },
            clearRedirectUri: function(a) {
                if (!a) return a;
                a = a.replace(/ulogin_callback=([^&?]*?)#/, "#").replace(/ulogin_callback=(.*?)(&|$)/, "").replace(/ulogin_token=([^&?]*?)#/, "#").replace(/ulogin_token=(.*?)(&|$)/, "").replace(/(\?|&)#/, "#").replace(/(\?|&)$/, "");
                return a = this.is_encoded(a) ? a.replace(/\//g, "%2F").replace(/\?/g, "%3F") : encodeURIComponent(a)
            },
            initPanel: function(a) {
                var b = this.get(this.ids[a].id),
                    c = "small" == this.ids[a].type ? 1 : 0,
                    d = c ? 21 : 42,
                    e = c ? 16 : 32,
                    f = 0,
                    k, n = c ? "0 5px 0 0" : "0 10px 0 0",
                    q = "url(" + this.buildUrl("img/" + (c ? "small.png?version=1.5.00" : "panel.png?version=1.5.00")) + ") " + (c ? "0 0" : "0 -3px") + " no-repeat";
                b.innerHTML = "";
                if ("other" === this.ids[a].hidden) {
                    k = this.providerCodes.slice(0);
                    if (this.ids[a].providers)
                        for (var v = this.ids[a].providers.split(","), L = 0; L < v.length; L++) {
                            var p = this.inArray(v[L], k); - 1 !== p && k.splice(p, 1)
                        }
                    this.ids[a].hidden = k.toString()
                }
                if (this.ids[a].providers) {
                    var v = "relevant" === this.ids[a].sort ? this.relProviders(this.ids[a].providers, this.ids[a].hidden, 1) : this.ids[a].providers.split(","),
                        D, f = f + d * ("inset" === this.ids[a].hidden_button ? v.length + 1 : v.length),
                        d = g.createElement("div");
                    this.ids[a].buttonsContainer = d;
                    this.ids[a].buttonsContainer.className = "ulogin-buttons-container";
                    this.resetStyle(d, {
                        width: f,
                        height: e,
                        display: "inline-block"
                    });
                    b.appendChild(d);
                    for (D in v) f = v[D], k = this.inArray(f, this.providerCodes), -1 < k && (d = g.createElement("div"), d.className = "ulogin-button-" + f, d.setAttribute("data-uloginbutton", f), d.setAttribute("title", this.providerNames[k]), this.resetStyle(d, {
                        "float": "left",
                        width: e,
                        height: e,
                        margin: n,
                        background: q,
                        cursor: "pointer",
                        backgroundPosition: this.getIconPosition(c, k)
                    }), this.ids[a].buttonsContainer.appendChild(d))
                }
                this.ids[a].hidden && (b.style.position = "relative", "relevant" === this.ids[a].sort && (this.ids[a].hidden = this.relProviders(this.ids[a].providers, this.ids[a].hidden, 2).join(",")), this.ids[a].drop = g.createElement("img"), this.ids[a].drop.className = "ulogin-dropdown-button", this.ids[a].drop.src = this.buildUrl("img/blank.gif"), this.resetStyle(this.ids[a].drop, {
                        width: e,
                        height: e,
                        margin: n,
                        cursor: "pointer",
                        background: q,
                        verticalAlign: "top",
                        display: "inline",
                        "float": "none"
                    }), this.add(this.ids[a].drop, "mouseover", function(b) {
                        uLogin.ids[a].showed = !1;
                        uLogin.dropdownDelayed(a, c ? 1 : 2);
                        uLogin.setOpacity(b, uLogin.ids[a].opacity)
                    }), this.add(this.ids[a].drop, "mouseout", function(b) {
                        uLogin.ids[a].showed = !0;
                        uLogin.dropdownDelayed(a, 0);
                        uLogin.setOpacity(b)
                    }), this.add(this.ids[a].drop, "click", function() {
                        uLogin.dropdown(a, c ? 1 : 2)
                    }), "inset" === this.ids[a].hidden_button ? this.ids[a].buttonsContainer.appendChild(this.ids[a].drop) :
                    b.appendChild(this.ids[a].drop), this.initDrop(a));
                this.initButtons(a)
            },
            initWindow: function(a) {
                var b = this.get(this.ids[a].id),
                    c = b.getElementsByTagName("*");
                c.length ? b = c[0] : (c = document.createElement("span"), c.innerHTML = b.innerHTML, b.innerHTML = "", b = b.appendChild(c));
                b.setAttribute("data-uloginbutton", "window");
                b.setAttribute("data-ulogin-default", "true");
                this.ids[a].opacity = 75;
                this.initButtons(a)
            },
            sendPixel: function() {
                this.getRC();
                if (this.pixel) {
                    var a = this;
                    q(function() {
                        var b = g.createElement("iframe"),
                            c = a.getRC();
                        b.src = a.pixel.replace("[rand]", parseInt(1E5 * Math.random())).replace("[u]", encodeURIComponent(location.href)).replace("[r]", encodeURIComponent(g.referrer || ""));
                        b.width = b.height = 1;
                        b.style.display = "none";
                        c.appendChild(b);
                        q(function() {
                            c.removeChild(b)
                        }, 3E3);
                        a.pixel = !1
                    }, 0)
                }
            },
            sendStats: function(a) {
                var b = {
                    r: parseInt(1E5 * Math.random())
                };
                a.type && (b.type = a.type);
                a = this.buildUrl("stats.html", b);
                this.initSocket(a, this.getRC())
            },
            mergeAccounts: function(a, b) {
                if (!a) return console.error('uLogin ERROR (mergeAccounts): invalid token "' +
                    a + '"'), !1;
                var c = {
                    token: a
                };
                b ? ("undefined" !== typeof b.join && (b = b.join(",")), c.identities = encodeURIComponent(b), c = this.buildUrl("merge_accounts.php", c)) : c = this.buildUrl("require_verify.php", c);
                this.loadWindow(c)
            },
            getRC: function() {
                this.rc || (this.rc = g.createElement("div"), this.rc.setAttribute("id", "ulogin_receiver_container"), this.resetStyle(this.rc, {
                    width: 0,
                    height: 0,
                    display: "none"
                }), g.getElementsByTagName("body")[0].appendChild(this.rc));
                return this.rc
            },
            clearTimeouts: function() {
                for (var a in this.timeouts) clearTimeout(this.timeouts[a])
            },
            init: function(a) {
                if (g.body) {
                    "" == a && (a = g.getElementsByTagName("script"), a = a[a.length - 1].src, -1 == a.indexOf("?") && (a += "?"), a = a.substr(a.indexOf("?") + 1));
                    if ("" != a) {
                        var b = this.parse(a);
                        if (b.display) {
                            var c = b.id || "uLogin";
                            if (this.get(c)) {
                                a = !0;
                                for (var d = 0; d < this.ids.length; d++) c == this.ids[d].id && (a = !1);
                                a && this.setProp(b.id || "uLogin", this.ids.length, b)
                            } else q('uLogin.init("' + a + '")', 1E3)
                        }
                    }
                    uLogin.timeouts.search_all = q(function() {
                        uLogin.findWidgets();
                        if ("complete" === g.readyState && (0 === uLogin.findTimer && (uLogin.findTimer = +new Date), 1E4 < new Date - uLogin.findTimer)) return !1;
                        uLogin.timeouts.all = q(arguments.callee, 50)
                    }, 50);
                    this.findWidgets();
                    uLogin.timeouts.search_ulogin = q(function() {
                        uLogin.checkAsyncWidgets();
                        uLogin.timeouts.search_ulogin = q(arguments.callee, 50)
                    }, 50);
                    this.checkAsyncWidgets();
                    uLogin.timeouts.check_widgets = q(function() {
                        uLogin.checkCurrentWidgets();
                        uLogin.timeouts.check_widgets = q(arguments.callee, 300)
                    }, 30);
                    this.checkCurrentWidgets();
                    this.sendPixel()
                } else q(function() {
                    uLogin.init()
                }, 20);
                this.callbackReceived()
            },
            callbackTryCall: function(a, b) {
                this.altwayCalled.push(a);
                k[a] ? k[a].call(k, b) : setTimeout(function() {
                    uLogin.callbackTryCall(a, b)
                }, 100)
            },
            callbackReceived: function() {
                var a = location.search.replace("?", "");
                if ((a = this.parse(a)) && a.ulogin_callback && a.ulogin_token && -1 === this.inArray(a.ulogin_callback, this.altwayCalled) && (this.callbackTryCall(a.ulogin_callback, a.ulogin_token), this.supportHistory)) {
                    var b = document.getElementsByTagName("title"),
                        b = (b = b ? b[0] : "") ? b.innerHTML : "";
                    delete a.ulogin_callback;
                    delete a.ulogin_token;
                    var a = this.buildUrl("", a),
                        c = location.origin + location.pathname + a + location.hash;
                    q(function() {
                        window.history.pushState({}, b, c)
                    }, 1E3)
                }
            },
            newDialogSocket: function(a) {
                this.dialogSocket && this.dialogSocket.destroy();
                this.dialogSocket = a
            },
            initSocket: function(a, b, c, d) {
                d || (d = 0);
                var e = new easyXDM.Socket({
                    remote: a,
                    swf: this.isIE() ? this.buildUrl("js/easyxdm.swf") : "",
                    props: {
                        style: this.extend({
                                margin: 0,
                                padding: 0,
                                background: "#fff",
                                border: 0,
                                position: "absolute",
                                left: 0,
                                top: 0,
                                overflow: "hidden",
                                width: "100%",
                                height: "100%"
                            },
                            c),
                        frameBorder: "0"
                    },
                    container: b,
                    onMessage: function(a) {
                        var b, c;
                        /weights:/.test(a) || console.info("[uLogin] ulogin.js received message: " + a);
                        if (b = a.match(/(.*?)\((.*?)\)/)) c = b[1], a = b[2];
                        /^https?:\/\//.test(a) ? location.href = a : /^\/auth.php\?/.test(a) ? (a = "https://" + uLogin.uLoginHost + a, uLogin.ids[d].altway ? location.href = a : uLogin.openWithReceiver(a, d)) : -1 < uLogin.inArray(a, uLogin.states) ? uLogin._changeState(d, a) : "closeme" == a ? (uLogin.hideAll(), e.destroy()) : /to_window:/.test(a) ? (a = uLogin.buildUrl(a.replace(/to_window:\/?/,
                            "", ""), {
                            set: encodeURIComponent("{window:1}")
                        }), uLogin.loadWindow(a)) : /weights:/.test(a) ? uLogin.setWeights(a.replace(/weights:\/?/, "", "")) : uLogin.ids[d] && "undefined" != typeof k[uLogin.ids[d].callback] ? (uLogin._changeState(d, "receive"), k[uLogin.ids[d].callback](a), uLogin.dialog && uLogin.hideAll()) : c && "undefined" != typeof k[c] && (k[c].apply(k, a.split(",")), e.destroy(), uLogin.dialog && uLogin.hideAll())
                    }
                });
                return e
            },
            getWidgetNumber: function(a) {
                for (var b = 0; b < this.ids.length; b++)
                    if (a == this.ids[b].id) return b;
                return NaN
            },
            onMoveWindow: function() {
                this.moveWindow()
            },
            loadWindow: function(a, b) {
                null === b && (b = !1);
                var c = this.ids[b] ? this.ids[b].opacity : 75,
                    d;
                try {
                    g.body.removeChild(this.lightbox)
                } catch (e) {}
                try {
                    g.body.removeChild(this.dialog)
                } catch (e) {}
                try {
                    g.body.removeChild(this.close)
                } catch (e) {}
                d = g.createElement("div");
                this.resetStyle(d, {
                    position: "fixed",
                    zIndex: 9997,
                    width: "100%",
                    height: "100%",
                    background: "#" + (this.ids[b] ? this.ids[b].color : "fff"),
                    display: "none",
                    pointerEvents: "none"
                });
                this.setOpacity(d, c);
                this.lightbox = d;
                d = g.createElement("div");
                d.id = this.genID();
                this.resetStyle(d, {
                    position: "absolute",
                    zIndex: 9998,
                    left: Math.floor(this.scrollLeft() + (this.clientWidth() - this.dialogWidth()) / 2),
                    top: Math.floor(this.scrollTop() + (this.clientHeight() - this.dialogHeight()) / 2),
                    width: this.dialogWidth(),
                    height: this.dialogHeight(),
                    overflow: "hidden",
                    display: "none",
                    border: "10px solid #666",
                    borderRadius: "8px"
                });
                this.dialog = d;
                d = g.createElement("img");
                d.src = this.buildUrl("img/blank.gif");
                this.resetStyle(d, {
                    position: "absolute",
                    height: 30,
                    zIndex: 9999,
                    background: "url(" +
                        this.buildUrl("img/x.png") + ")",
                    cursor: "pointer",
                    display: "none",
                    left: Math.floor(this.scrollLeft() + (this.clientWidth() + 562) / 2),
                    top: Math.floor(this.scrollTop() + (this.clientHeight() - 374) / 2)
                });
                this.close = d;
                g.body.appendChild(this.lightbox);
                g.body.appendChild(this.dialog);
                g.body.appendChild(this.close);
                this.add(this.lightbox, "click", function() {
                    uLogin.hideAll()
                });
                this.add(this.close, "click", function() {
                    uLogin.hideAll()
                });
                this.add(this.close, "mouseover", function(a) {
                    a.style.background = "url(" + uLogin.buildUrl("img/x_.png") +
                        ")"
                });
                this.add(this.close, "mouseout", function(a) {
                    a.style.background = "url(" + uLogin.buildUrl("img/x.png") + ")"
                });
                this.add(k, "scroll", function() {
                    uLogin.onMoveWindow()
                });
                this.add(k, "resize", function() {
                    uLogin.onMoveWindow()
                });
                this.newDialogSocket(this.initSocket(a, this.dialog.getAttribute("id"), {}, b));
                this.show(this.close);
                this.show(this.lightbox);
                this.show(this.dialog);
                this.onMoveWindow()
            },
            hideAll: function() {
                this.hide(this.lightbox);
                this.hide(this.dialog);
                this.hide(this.close);
                for (var a = 0; a < this.ids.length; a++) this.ids[a].showed = !1, this.hide(this.ids[a].hiddenW), this.hide(this.ids[a].hiddenA)
            },
            moveWindow: function() {
                if (!this.dialog || !this.dialog.firstChild) return !1;
                for (var a = this.dialogWidth(), b = this.dialogHeight(), a = (Math.floor(this.scrollLeft() + (this.clientWidth() - a) / 2) - Number(this.dialog.style.left.slice(0, -2))) / 10, b = (Math.floor(this.scrollTop() + (this.clientHeight() - b) / 2) - Number(this.dialog.style.top.slice(0, -2))) / 10, c = (Math.floor(this.scrollLeft() + (this.clientWidth() + 562) / 2) - Number(this.close.style.left.slice(0, -2))) /
                        10, d = (Math.floor(this.scrollTop() + (this.clientHeight() - 374) / 2) - Number(this.close.style.top.slice(0, -2))) / 10, e = 0; 10 > e; e++) this.dialog.style.left = a + Number(this.dialog.style.left.slice(0, -2)) + "px", this.dialog.style.top = b + Number(this.dialog.style.top.slice(0, -2)) + "px", this.close.style.left = c + Number(this.close.style.left.slice(0, -2)) + "px", this.close.style.top = d + Number(this.close.style.top.slice(0, -2)) + "px"
            },
            resetStyle: function(a, b) {
                !b && (b = {});
                var c = this.extend({
                        margin: 0,
                        padding: 0,
                        outline: "none",
                        border: "none",
                        borderRadius: 0,
                        cursor: "default",
                        "float": "none",
                        position: "relative",
                        display: "inherit",
                        width: "auto",
                        height: "auto",
                        left: 0,
                        top: 0,
                        boxSizing: "content-box"
                    }, b),
                    d = ["width", "height", "left", "top"],
                    e = ["float"],
                    f;
                for (f in c) {
                    -1 < this.inArray(f, d) && "number" === typeof c[f] && (c[f] += "px");
                    try {
                        -1 < this.inArray(f, e) && a.style.setProperty(f, c[f])
                    } catch (g) {}
                    try {
                        a.style[f] = c[f]
                    } catch (g) {}
                }
            },
            getIconPosition: function(a, b) {
                b += 8 < b ? 1 : 0;
                return a ? "0 -" + (19 + 23 * b) + "px" : "0 -" + (3 + 35 * (b + 1)) + "px"
            },
            setOpacity: function(a, b) {
                a.style.filter =
                    b ? "alpha(opacity=" + b + ") progid:DXImageTransform.Microsoft.AlphaImageLoader(src=transparent.png, sizingMethod='crop')" : "";
                a.style.opacity = b ? parseFloat(b) / 100 : ""
            },
            initDrop: function(a) {
                if (!this.ids[a].mobile && "" != this.ids[a].hidden) {
                    var b, c, d = this.get(this.ids[a].id),
                        e = this.genID();
                    c = 310 < 23 * this.ids[a].hidden.split(",").length - 2 ? 310 : 23 * this.ids[a].hidden.split(",").length - 2;
                    b = g.createElement("div");
                    b.className = "ulogin-dropdown";
                    b.id = e;
                    this.resetStyle(b, {
                        position: "absolute",
                        zIndex: 9999,
                        width: 128,
                        height: c,
                        border: "5px solid #666",
                        borderRadius: "4px",
                        display: "none"
                    });
                    this.ids[a].hiddenW = b;
                    "body" === this.ids[a].dropdown_container ? g.body.appendChild(this.ids[a].hiddenW) : d.appendChild(this.ids[a].hiddenW);
                    b = this.buildUrl("drop.html", {
                        id: a,
                        redirect_uri: this.ids[a].redirect_uri,
                        callback: this.ids[a].callback,
                        providers: this.ids[a].hidden,
                        fields: this.ids[a].fields,
                        optional: this.ids[a].optional,
                        othprov: this.ids[a].providers,
                        protocol: this.protocol,
                        host: this.host,
                        lang: this.ids[a].lang,
                        verify: this.ids[a].verify,
                        sort: this.ids[a].sort,
                        altway: this.ids[a].altway ? 1 : null
                    });
                    this.initSocket(b, e, {
                        position: "relative",
                        width: "128px",
                        height: c + "px"
                    }, a);
                    b = g.createElement("div");
                    this.resetStyle(b, {
                        position: "absolute",
                        background: "#000",
                        left: 82,
                        top: "100%",
                        width: 41,
                        height: 13,
                        border: "5px solid #666",
                        textAlign: "center"
                    });
                    c = g.createElement("a");
                    c.href = this.buildUrl("");
                    c.target = "_blank";
                    this.resetStyle(c, {
                        width: 41,
                        height: 13,
                        background: "url(" + this.buildUrl("img/text.png") + ") no-repeat"
                    });
                    b.appendChild(c);
                    this.ids[a].hiddenW.appendChild(b);
                    b = g.createElement("img");
                    b.src = this.buildUrl("img/link.png");
                    this.resetStyle(b, {
                        width: 8,
                        height: 4,
                        position: "absolute",
                        zIndex: 9999,
                        display: "none"
                    });
                    this.ids[a].hiddenA = b;
                    d.appendChild(this.ids[a].hiddenA);
                    this.ids[a].showed = !1;
                    this.add(g.body, "click", function(a, b) {
                        b.target || (b.target = b.srcElement);
                        for (var c = 0; c < uLogin.ids.length; c++) b.target != uLogin.ids[c].drop && (uLogin.hide(uLogin.ids[c].hiddenW), uLogin.hide(uLogin.ids[c].hiddenA))
                    });
                    this.ids[a].hiddenW && this.ids[a].hiddenA && (this.add(this.ids[a].hiddenW, "mouseout", function() {
                        uLogin.dropdownDelayed(a,
                            0)
                    }), this.add(this.ids[a].hiddenA, "mouseout", function() {
                        uLogin.dropdownDelayed(a, 0)
                    }), this.add(this.ids[a].hiddenW, "mouseover", function() {
                        uLogin.clearDropTimer(a)
                    }), this.add(this.ids[a].hiddenA, "mouseover", function() {
                        uLogin.clearDropTimer(a)
                    }))
                }
            },
            showDrop: function(a, b) {
                if (this.ids[a].hiddenW || this.ids[a].hiddenA)
                    if (this.ids[a].showed || 0 == b) this.hide(this.ids[a].hiddenW), this.hide(this.ids[a].hiddenA), this.ids[a].showed = !1;
                    else {
                        this.show(this.ids[a].hiddenA);
                        this.show(this.ids[a].hiddenW);
                        this.ids[a].showed = !0;
                        var c = 0,
                            d = 0,
                            e = this.ids[a].drop;
                        "body" === this.ids[a].dropdown_container && (d = this.getOffset(e), console.log(d, e), c = d.left, d = d.top, this.ids[a].hiddenW.style.left = c - (1 == b ? 100 : 106) + "px", this.ids[a].hiddenW.style.top = d + (1 == b ? 21 : 37) + "px", this.ids[a].hiddenA.style.left = c + (1 == b ? 4 : 12) + "px", this.ids[a].hiddenA.style.top = d + (1 == b ? 17 : 33) + "px");
                        c = e.offsetLeft;
                        d = e.offsetTop;
                        c -= e.scrollLeft;
                        d -= e.scrollTop;
                        "body" !== this.ids[a].dropdown_container && (this.ids[a].hiddenW.style.left = c - (1 == b ? 100 : 106) + "px", this.ids[a].hiddenW.style.top =
                            d + (1 == b ? 21 : 37) + "px");
                        this.ids[a].hiddenA.style.left = c + (1 == b ? 4 : 12) + "px";
                        this.ids[a].hiddenA.style.top = d + (1 == b ? 17 : 33) + "px"
                    }
            },
            clearDropTimer: function(a) {
                this.ids[a].dropTimer && k.clearTimeout(this.ids[a].dropTimer)
            },
            dropdown: function(a, b) {
                this.clearDropTimer(a);
                this.showDrop(a, b)
            },
            dropdownDelayed: function(a, b) {
                this.clearDropTimer(a);
                this.ids[a].dropTimer = q(function() {
                    uLogin.showDrop(a, b)
                }, 600)
            },
            initButtons: function(a) {
                var b = this.get(this.ids[a].id);
                this.ids[a].mobile && this.add(this.get(this.ids[a].id),
                    "click",
                    function(b, d) {
                        d.preventDefault ? d.preventDefault() : d.returnValue = !1;
                        var e = uLogin.buildUrl("mobile.html", {
                            id: uLogin.ids[a].id,
                            redirect_uri: uLogin.ids[a].redirect_uri,
                            callback: uLogin.ids[a].callback,
                            fields: uLogin.ids[a].fields,
                            optional: uLogin.ids[a].optional,
                            protocol: uLogin.ids[a].protocol,
                            host: uLogin.ids[a].host,
                            lang: uLogin.ids[a].lang,
                            verify: uLogin.ids[a].verify,
                            providers: uLogin.ids[a].providers,
                            hidden: uLogin.ids[a].hidden
                        });
                        uLogin.openWithReceiver(e, a);
                        return !1
                    });
                "window" === this.ids[a].type ?
                    this._proceedChildren(b, this._(this._initButton), a) : (this.ids[a].providers = "", this._proceedChildren(b, this._(this._initButton), a), this.ids[a].providers = this.ids[a].providers.slice(0, this.ids[a].providers.length - 1));
                this._changeState(a, this.states[0])
            },
            _: function(a) {
                return function() {
                    a.apply(uLogin, arguments)
                }
            },
            _proceedChildren: function(a, b, c) {
                a = a.childNodes;
                var d, e;
                for (e = 0; e < a.length; e++) {
                    var f = a[e];
                    f.getAttribute && (b(f, c), (d = f.getAttribute("data-uloginbutton") || f.getAttribute("x-ulogin-button")) &&
                        -1 < this.inArray(d, this.providerCodes) && !(new RegExp(d + "(,|$)", "i")).test(this.ids[c].providers) && (this.ids[c].providers += d + ","));
                    this._proceedChildren(f, b, c)
                }
            },
            _initButton: function(a, b) {
                var c = a.getAttribute("data-uloginbutton") || a.getAttribute("x-ulogin-button");
                if (c)
                    if (-1 < this.inArray(c, this.providerCodes)) this.add(a, "mouseover", function(a) {
                        if (/disabled/.test(a.className)) return !1;
                        uLogin.setOpacity(a, parseFloat(uLogin.ids[b].opacity))
                    }), this.add(a, "mouseout", function(a) {
                        if (/disabled/.test(a.className)) return !1;
                        uLogin.setOpacity(a)
                    }), this.ids[b].mobile || this.add(a, "click", function(a) {
                        if (/disabled/.test(a.className)) return !1;
                        a = a.getAttribute("data-uloginbutton") || a.getAttribute("x-ulogin-button");
                        uLogin.startAuth(a, "", b)
                    });
                    else if ("window" === c && (this.ids[b].mobile || this.add(a, "click", function(a, c) {
                        c.preventDefault ? c.preventDefault() : c.returnValue = !1;
                        if (/disabled/.test(a.className)) return !1;
                        var d = uLogin.buildUrl(uLogin.ids[b].mobile ? "mobile.html" : "window.html", {
                            id: b,
                            redirect_uri: uLogin.ids[b].redirect_uri,
                            callback: uLogin.ids[b].callback,
                            fields: uLogin.ids[b].fields,
                            optional: uLogin.ids[b].optional,
                            protocol: uLogin.protocol,
                            host: uLogin.host,
                            lang: uLogin.ids[b].lang,
                            verify: uLogin.ids[b].verify,
                            sort: uLogin.ids[b].sort,
                            othprov: uLogin.ids[b].hidden,
                            providers: uLogin.ids[b].providers,
                            altway: uLogin.ids[b].altway ? 1 : null
                        });
                        uLogin.loadWindow(d, b);
                        return !1
                    }), a.getAttribute("data-ulogin-default"))) {
                    var d = this.buildUrl("img/" + ("ru" == this.ids[b].lang ? "" : this.ids[b].lang + "/") + "button.png"),
                        e = this.buildUrl("img/" + ("ru" ==
                            this.ids[b].lang ? "" : this.ids[b].lang + "/") + "button_.png");
                    a.src = d;
                    this.resetStyle(a, {
                        cursor: "pointer"
                    });
                    this.add(a, "mouseover", function(a) {
                        if (/disabled/.test(a.parentNode.className)) return !1;
                        a.src != e && (a.src = e)
                    });
                    this.add(a, "mouseout", function(a) {
                        if (/disabled/.test(a.parentNode.className)) return !1;
                        a.src != d && (a.src = d)
                    })
                }
            },
            sendWeight: function(a) {
                this.initSocket(this.buildUrl("weight_set.html", {
                    provider: a,
                    r: parseInt(1E5 * Math.random())
                }), this.getRC(), {
                    background: "transparent"
                })
            },
            setWeights: function(a) {
                this.supportStorage &&
                    (localStorage.providers_weight = a)
            },
            getWeights: function() {
                try {
                    return JSON.parse(localStorage.providers_weight)
                } catch (a) {
                    return {}
                }
            },
            relProviders: function(a, b, c) {
                a = a.split(",");
                b = b.split(",");
                if (this.supportStorage) {
                    var d = this.getWeights(),
                        e;
                    for (e in d) {
                        var d = this.inArray(e, a),
                            f = this.inArray(e, b); - 1 !== d ? (a.splice(d, 1), a.splice(0, 0, e)) : -1 !== f && (a.splice(0, 0, e), b.splice(f, 1), b.splice(0, 0, a[a.length - 1]), a.splice(a.length - 1, 1))
                    }
                }
                return 1 === c ? a : b
            },
            startAuth: function(a, b, c) {
                var d = {
                    name: a,
                    window: 1,
                    lang: this.ids[c].lang,
                    fields: this.ids[c].fields,
                    host: this.host,
                    optional: this.ids[c].optional,
                    redirect_uri: this.ids[c].redirect_uri || location.href,
                    verify: this.ids[c].verify,
                    callback: this.ids[c].callback,
                    screen: screen.width + "x" + screen.height,
                    url: b,
                    providers: this.ids[c].providers,
                    hidden: this.ids[c].hidden
                };
                this.ids[c].altway && (d.altway = 1);
                a = b || "webmoney" != a && "livejournal" != a && "openid" != a ? this.buildUrl("auth.php", d) : this.buildUrl("url.php", d);
                this._changeState(c, this.states[1]);
                this.ids[c].altway ? location.href = a : this.openWithReceiver(a,
                    c)
            },
            openWithReceiver: function(a, b) {
                !b && (b = 0);
                this.initSocket(this.buildUrl("buttons_receiver.html", {
                    four: encodeURIComponent(a),
                    r: parseInt(1E5 * Math.random())
                }), this.getRC(), {
                    background: "transparent"
                }, b);
                var c = 660,
                    d = 420;
                /name=vkontakte/.test(a) ? d = 380 : /name=facebook/.test(a) ? (c = 560, d = 350) : /name=google/.test(a) ? (c = 800, d = 630) : /name=yandex/.test(a) ? (c = 990, d = 530) : /name=lastfm/.test(a) && (c = 1368, d = 894);
                var e = this.getRC().getElementsByTagName("iframe"),
                    c = e[e.length - 1].contentWindow.open(a, "uw", "width=" + c + ",height=" +
                        d + ",left=" + (screen.width - c) / 2 + ",top=" + (screen.height - d) / 2);
                this.checkWindow(c, b)
            },
            checkWindow: function(a, b) {},
            checkCurrentWidgets: function() {
                for (var a = 0; this.ids[a];) this.checkWidget(this.ids[a++].id)
            },
            checkWidget: function(a, b) {
                var c = this.get(a);
                if (c)
                    if (this.inited(a)) {
                        var d = this.getWidgetNumber(a),
                            e = this.ids[d].type;
                        if (("small" === e || "panel" === e) && !c.childNodes.length) return c = this.ids[d].id, uLogin.ids[d].id = !1, uLogin.initWidget(c), !0;
                        c.getAttribute("data-ulogin-inited") || (c = this.ids[d].id, uLogin.ids[d].id = !1, uLogin.initWidget(c))
                    } else this.addWidget(this.get(a), b);
                else this.ids[this.getWidgetNumber(a)].id = !1
            },
            buildUrl: function(a, b) {
                b || (b = {});
                a = a ? "https://" + this.uLoginHost + "/" + a : "";
                var c = "",
                    d;
                for (d in b) {
                    var e = b[d];
                    if (null !== e) {
                        if (/\?/.test(e) || /\//.test(e) || /:/.test(e)) e = "";
                        c += d + "=" + e + "&"
                    }
                }
                0 < c.length && (c = c.substring(0, c.length - 1), a = a + (/\?/.test(a) ? "&" : "?") + c);
                return a
            },
            getWidget: function(a, b) {
                if (this.inited(b)) return !1;
                if (this.widgetSettings[a]) return this.setProp(b, uLogin.ids.length, this.widgetSettings[a]), !1;
                if (this.waitGetWidget[a] && -1 !== this.inArray(b, this.waitGetWidget[a])) return !1;
                this.waitGetWidget[a] || (this.waitGetWidget[a] = []);
                this.waitGetWidget[a].push(b);
                if (this.widgetSettings[a]) this.setProp(b, this.ids.length, this.widgetSettings[a]);
                else {
                    var c = this.getRC(),
                        d = g.createElement("script");
                    d.async = !0;
                    d.src = this.buildUrl("getwidget", {
                        widgetid: a
                    });
                    c.appendChild(d)
                }
            },
            forElements: function(a, b) {
                if (a && a.length)
                    for (var c in a) b(a[c])
            },
            setWidget: function(a, b, c) {
                !c && b && (c = b);
                if ("not_found" === a) return this.forElements(this.waitGetWidget[a],
                    function(a) {
                        if ("string" !== typeof a) return !1;
                        g.getElementById(a).setAttribute("data-uloginid", "")
                    }), !1;
                c && !uLogin.widgetSettings[a] && "undefined" !== typeof c.display && (this.forElements(this.waitGetWidget[a], function(a) {
                    if ("string" !== typeof a) return !1;
                    if ("window" == c.display) {
                        var b = g.createElement("img");
                        b.setAttribute("src", uLogin.buildUrl("img/button.png"));
                        b.setAttribute("style", "cursor:pointer; width:187px; height:30px");
                        b.setAttribute("alt", "\u041c\u0443\u043b\u044c\u0442\u0438\u0412\u0445\u043e\u0434");
                        g.getElementById(a).appendChild(b)
                    }
                    var b = uLogin.parse(g.getElementById(a).getAttribute("data-ulogin")),
                        f;
                    for (f in b) c[f] = b[f];
                    uLogin.setProp(a, uLogin.ids.length, c)
                }), this.widgetSettings[a] = c)
            },
            customInit: function() {
                for (var a = 0; a < arguments.length; a++)
                    if ("string" === typeof arguments[a]) {
                        var b = !1;
                        if (!uLogin.get(arguments[a]) || !arguments[a]) return console.error('uLogin ERROR (customInit): Element with ID="' + arguments[a] + '" not found'), !1;
                        1 < arguments.length && "object" === typeof arguments[arguments.length -
                            1] && (b = arguments[arguments.length - 1]);
                        uLogin.checkWidget(arguments[a], b)
                    }
            },
            getOffsetSum: function(a) {
                for (var b = 0, c = 0; a;) b += parseFloat(a.offsetTop), c += parseFloat(a.offsetLeft), a = a.offsetParent;
                return {
                    top: Math.round(b),
                    left: Math.round(c)
                }
            },
            getOffsetRect: function(a) {
                a = a.getBoundingClientRect();
                var b = document.body,
                    c = document.documentElement;
                return {
                    top: Math.round(a.top + (window.pageYOffset || c.scrollTop || b.scrollTop) - (c.clientTop || b.clientTop || 0)),
                    left: Math.round(a.left + (window.pageXOffset || c.scrollLeft ||
                        b.scrollLeft) - (c.clientLeft || b.clientLeft || 0))
                }
            },
            getOffset: function(a) {
                return a.getBoundingClientRect ? this.getOffsetRect(a) : this.getOffsetSum(a)
            },
            checkAsyncWidgets: function() {
                var a = this.get("ulogin") || this.get("uLogin");
                a && a.id && this.addWidget(a)
            },
            setStateListener: function(a, b, c) {
                this.listeners[a] || (this.listeners[a] = {});
                this.listeners[a][b] || (this.listeners[a][b] = []);
                return this.listeners[a][b].push(c) - 1
            },
            removeStateListener: function(a, b, c) {
                return this.listeners[a] && this.listeners[a][c] ? this.listeners[a][c].splice(b,
                    1) : !1
            },
            _changeState: function(a, b) {
                try {
                    this.ids[a].state = b;
                    for (var c = 0; this.listeners[this.ids[a].id][b][c];) this.listeners[this.ids[a].id][b][c++]()
                } catch (d) {}
            },
            extend: function(a, b) {
                for (var c in b) a[c] = b[c];
                return a
            }
        }, -1 == uLogin.inArray(uLogin.lang, uLogin.langs) && (uLogin.lang = uLogin.langs[0]), uLogin.init("undefined" != typeof uLogin_query ? uLogin_query : ""));
    k.receiver = function(a, b) {
        k[b](a)
    };
    k.redirect = function(a, b) {
        var c = g.createElement("form");
        c.action = b;
        c.method = "post";
        c.target = "_top";
        c.style.display =
            "none";
        var d = g.createElement("input");
        d.type = "hidden";
        d.name = "token";
        d.value = a;
        c.appendChild(d);
        g.body.appendChild(c);
        c.submit()
    }
})(window, document, navigator, setTimeout);