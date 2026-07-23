(function () {
  "use strict";
  var qr = { exports: {} },
    ne = {};
  var Bo;
  function fs() {
    if (Bo) return ne;
    Bo = 1;
    var e = Symbol.for("react.element"),
      t = Symbol.for("react.portal"),
      n = Symbol.for("react.fragment"),
      i = Symbol.for("react.strict_mode"),
      s = Symbol.for("react.profiler"),
      c = Symbol.for("react.provider"),
      p = Symbol.for("react.context"),
      g = Symbol.for("react.forward_ref"),
      y = Symbol.for("react.suspense"),
      d = Symbol.for("react.memo"),
      v = Symbol.for("react.lazy"),
      k = Symbol.iterator;
    function M(w) {
      return w === null || typeof w != "object"
        ? null
        : ((w = (k && w[k]) || w["@@iterator"]),
          typeof w == "function" ? w : null);
    }
    var B = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      N = Object.assign,
      R = {};
    function E(w, A, H) {
      ((this.props = w),
        (this.context = A),
        (this.refs = R),
        (this.updater = H || B));
    }
    ((E.prototype.isReactComponent = {}),
      (E.prototype.setState = function (w, A) {
        if (typeof w != "object" && typeof w != "function" && w != null)
          throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
          );
        this.updater.enqueueSetState(this, w, A, "setState");
      }),
      (E.prototype.forceUpdate = function (w) {
        this.updater.enqueueForceUpdate(this, w, "forceUpdate");
      }));
    function L() {}
    L.prototype = E.prototype;
    function I(w, A, H) {
      ((this.props = w),
        (this.context = A),
        (this.refs = R),
        (this.updater = H || B));
    }
    var W = (I.prototype = new L());
    ((W.constructor = I), N(W, E.prototype), (W.isPureReactComponent = !0));
    var Y = Array.isArray,
      re = Object.prototype.hasOwnProperty,
      O = { current: null },
      q = { key: !0, ref: !0, __self: !0, __source: !0 };
    function ie(w, A, H) {
      var Z,
        K = {},
        ae = null,
        de = null;
      if (A != null)
        for (Z in (A.ref !== void 0 && (de = A.ref),
        A.key !== void 0 && (ae = "" + A.key),
        A))
          re.call(A, Z) && !q.hasOwnProperty(Z) && (K[Z] = A[Z]);
      var le = arguments.length - 2;
      if (le === 1) K.children = H;
      else if (1 < le) {
        for (var oe = Array(le), he = 0; he < le; he++)
          oe[he] = arguments[he + 2];
        K.children = oe;
      }
      if (w && w.defaultProps)
        for (Z in ((le = w.defaultProps), le))
          K[Z] === void 0 && (K[Z] = le[Z]);
      return {
        $$typeof: e,
        type: w,
        key: ae,
        ref: de,
        props: K,
        _owner: O.current,
      };
    }
    function fe(w, A) {
      return {
        $$typeof: e,
        type: w.type,
        key: A,
        ref: w.ref,
        props: w.props,
        _owner: w._owner,
      };
    }
    function ve(w) {
      return typeof w == "object" && w !== null && w.$$typeof === e;
    }
    function $(w) {
      var A = { "=": "=0", ":": "=2" };
      return (
        "$" +
        w.replace(/[=:]/g, function (H) {
          return A[H];
        })
      );
    }
    var D = /\/+/g;
    function Q(w, A) {
      return typeof w == "object" && w !== null && w.key != null
        ? $("" + w.key)
        : A.toString(36);
    }
    function ee(w, A, H, Z, K) {
      var ae = typeof w;
      (ae === "undefined" || ae === "boolean") && (w = null);
      var de = !1;
      if (w === null) de = !0;
      else
        switch (ae) {
          case "string":
          case "number":
            de = !0;
            break;
          case "object":
            switch (w.$$typeof) {
              case e:
              case t:
                de = !0;
            }
        }
      if (de)
        return (
          (de = w),
          (K = K(de)),
          (w = Z === "" ? "." + Q(de, 0) : Z),
          Y(K)
            ? ((H = ""),
              w != null && (H = w.replace(D, "$&/") + "/"),
              ee(K, A, H, "", function (he) {
                return he;
              }))
            : K != null &&
              (ve(K) &&
                (K = fe(
                  K,
                  H +
                    (!K.key || (de && de.key === K.key)
                      ? ""
                      : ("" + K.key).replace(D, "$&/") + "/") +
                    w,
                )),
              A.push(K)),
          1
        );
      if (((de = 0), (Z = Z === "" ? "." : Z + ":"), Y(w)))
        for (var le = 0; le < w.length; le++) {
          ae = w[le];
          var oe = Z + Q(ae, le);
          de += ee(ae, A, H, oe, K);
        }
      else if (((oe = M(w)), typeof oe == "function"))
        for (w = oe.call(w), le = 0; !(ae = w.next()).done; )
          ((ae = ae.value),
            (oe = Z + Q(ae, le++)),
            (de += ee(ae, A, H, oe, K)));
      else if (ae === "object")
        throw (
          (A = String(w)),
          Error(
            "Objects are not valid as a React child (found: " +
              (A === "[object Object]"
                ? "object with keys {" + Object.keys(w).join(", ") + "}"
                : A) +
              "). If you meant to render a collection of children, use an array instead.",
          )
        );
      return de;
    }
    function xe(w, A, H) {
      if (w == null) return w;
      var Z = [],
        K = 0;
      return (
        ee(w, Z, "", "", function (ae) {
          return A.call(H, ae, K++);
        }),
        Z
      );
    }
    function Me(w) {
      if (w._status === -1) {
        var A = w._result;
        ((A = A()),
          A.then(
            function (H) {
              (w._status === 0 || w._status === -1) &&
                ((w._status = 1), (w._result = H));
            },
            function (H) {
              (w._status === 0 || w._status === -1) &&
                ((w._status = 2), (w._result = H));
            },
          ),
          w._status === -1 && ((w._status = 0), (w._result = A)));
      }
      if (w._status === 1) return w._result.default;
      throw w._result;
    }
    var ce = { current: null },
      j = { transition: null },
      se = {
        ReactCurrentDispatcher: ce,
        ReactCurrentBatchConfig: j,
        ReactCurrentOwner: O,
      };
    function ke() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return (
      (ne.Children = {
        map: xe,
        forEach: function (w, A, H) {
          xe(
            w,
            function () {
              A.apply(this, arguments);
            },
            H,
          );
        },
        count: function (w) {
          var A = 0;
          return (
            xe(w, function () {
              A++;
            }),
            A
          );
        },
        toArray: function (w) {
          return (
            xe(w, function (A) {
              return A;
            }) || []
          );
        },
        only: function (w) {
          if (!ve(w))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return w;
        },
      }),
      (ne.Component = E),
      (ne.Fragment = n),
      (ne.Profiler = s),
      (ne.PureComponent = I),
      (ne.StrictMode = i),
      (ne.Suspense = y),
      (ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se),
      (ne.act = ke),
      (ne.cloneElement = function (w, A, H) {
        if (w == null)
          throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              w +
              ".",
          );
        var Z = N({}, w.props),
          K = w.key,
          ae = w.ref,
          de = w._owner;
        if (A != null) {
          if (
            (A.ref !== void 0 && ((ae = A.ref), (de = O.current)),
            A.key !== void 0 && (K = "" + A.key),
            w.type && w.type.defaultProps)
          )
            var le = w.type.defaultProps;
          for (oe in A)
            re.call(A, oe) &&
              !q.hasOwnProperty(oe) &&
              (Z[oe] = A[oe] === void 0 && le !== void 0 ? le[oe] : A[oe]);
        }
        var oe = arguments.length - 2;
        if (oe === 1) Z.children = H;
        else if (1 < oe) {
          le = Array(oe);
          for (var he = 0; he < oe; he++) le[he] = arguments[he + 2];
          Z.children = le;
        }
        return {
          $$typeof: e,
          type: w.type,
          key: K,
          ref: ae,
          props: Z,
          _owner: de,
        };
      }),
      (ne.createContext = function (w) {
        return (
          (w = {
            $$typeof: p,
            _currentValue: w,
            _currentValue2: w,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }),
          (w.Provider = { $$typeof: c, _context: w }),
          (w.Consumer = w)
        );
      }),
      (ne.createElement = ie),
      (ne.createFactory = function (w) {
        var A = ie.bind(null, w);
        return ((A.type = w), A);
      }),
      (ne.createRef = function () {
        return { current: null };
      }),
      (ne.forwardRef = function (w) {
        return { $$typeof: g, render: w };
      }),
      (ne.isValidElement = ve),
      (ne.lazy = function (w) {
        return {
          $$typeof: v,
          _payload: { _status: -1, _result: w },
          _init: Me,
        };
      }),
      (ne.memo = function (w, A) {
        return { $$typeof: d, type: w, compare: A === void 0 ? null : A };
      }),
      (ne.startTransition = function (w) {
        var A = j.transition;
        j.transition = {};
        try {
          w();
        } finally {
          j.transition = A;
        }
      }),
      (ne.unstable_act = ke),
      (ne.useCallback = function (w, A) {
        return ce.current.useCallback(w, A);
      }),
      (ne.useContext = function (w) {
        return ce.current.useContext(w);
      }),
      (ne.useDebugValue = function () {}),
      (ne.useDeferredValue = function (w) {
        return ce.current.useDeferredValue(w);
      }),
      (ne.useEffect = function (w, A) {
        return ce.current.useEffect(w, A);
      }),
      (ne.useId = function () {
        return ce.current.useId();
      }),
      (ne.useImperativeHandle = function (w, A, H) {
        return ce.current.useImperativeHandle(w, A, H);
      }),
      (ne.useInsertionEffect = function (w, A) {
        return ce.current.useInsertionEffect(w, A);
      }),
      (ne.useLayoutEffect = function (w, A) {
        return ce.current.useLayoutEffect(w, A);
      }),
      (ne.useMemo = function (w, A) {
        return ce.current.useMemo(w, A);
      }),
      (ne.useReducer = function (w, A, H) {
        return ce.current.useReducer(w, A, H);
      }),
      (ne.useRef = function (w) {
        return ce.current.useRef(w);
      }),
      (ne.useState = function (w) {
        return ce.current.useState(w);
      }),
      (ne.useSyncExternalStore = function (w, A, H) {
        return ce.current.useSyncExternalStore(w, A, H);
      }),
      (ne.useTransition = function () {
        return ce.current.useTransition();
      }),
      (ne.version = "18.3.1"),
      ne
    );
  }
  var $o;
  function Fn() {
    return ($o || (($o = 1), (qr.exports = fs())), qr.exports);
  }
  var ps = Fn(),
    Hr = { exports: {} },
    Yt = {};
  var qo;
  function ms() {
    if (qo) return Yt;
    qo = 1;
    var e = Fn(),
      t = Symbol.for("react.element"),
      n = Symbol.for("react.fragment"),
      i = Object.prototype.hasOwnProperty,
      s =
        e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      c = { key: !0, ref: !0, __self: !0, __source: !0 };
    function p(g, y, d) {
      var v,
        k = {},
        M = null,
        B = null;
      (d !== void 0 && (M = "" + d),
        y.key !== void 0 && (M = "" + y.key),
        y.ref !== void 0 && (B = y.ref));
      for (v in y) i.call(y, v) && !c.hasOwnProperty(v) && (k[v] = y[v]);
      if (g && g.defaultProps)
        for (v in ((y = g.defaultProps), y)) k[v] === void 0 && (k[v] = y[v]);
      return {
        $$typeof: t,
        type: g,
        key: M,
        ref: B,
        props: k,
        _owner: s.current,
      };
    }
    return ((Yt.Fragment = n), (Yt.jsx = p), (Yt.jsxs = p), Yt);
  }
  var Ho;
  function hs() {
    return (Ho || ((Ho = 1), (Hr.exports = ms())), Hr.exports);
  }
  var Se = hs(),
    gs = function (e, t, n, i) {
      function s(c) {
        return c instanceof n
          ? c
          : new n(function (p) {
              p(c);
            });
      }
      return new (n || (n = Promise))(function (c, p) {
        function g(v) {
          try {
            d(i.next(v));
          } catch (k) {
            p(k);
          }
        }
        function y(v) {
          try {
            d(i.throw(v));
          } catch (k) {
            p(k);
          }
        }
        function d(v) {
          v.done ? c(v.value) : s(v.value).then(g, y);
        }
        d((i = i.apply(e, t || [])).next());
      });
    },
    ys = function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (c[0] & 1) throw c[1];
            return c[1];
          },
          trys: [],
          ops: [],
        },
        i,
        s,
        c,
        p;
      return (
        (p = { next: g(0), throw: g(1), return: g(2) }),
        typeof Symbol == "function" &&
          (p[Symbol.iterator] = function () {
            return this;
          }),
        p
      );
      function g(d) {
        return function (v) {
          return y([d, v]);
        };
      }
      function y(d) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; p && ((p = 0), d[0] && (n = 0)), n; )
          try {
            if (
              ((i = 1),
              s &&
                (c =
                  d[0] & 2
                    ? s.return
                    : d[0]
                      ? s.throw || ((c = s.return) && c.call(s), 0)
                      : s.next) &&
                !(c = c.call(s, d[1])).done)
            )
              return c;
            switch (((s = 0), c && (d = [d[0] & 2, c.value]), d[0])) {
              case 0:
              case 1:
                c = d;
                break;
              case 4:
                return (n.label++, { value: d[1], done: !1 });
              case 5:
                (n.label++, (s = d[1]), (d = [0]));
                continue;
              case 7:
                ((d = n.ops.pop()), n.trys.pop());
                continue;
              default:
                if (
                  ((c = n.trys),
                  !(c = c.length > 0 && c[c.length - 1]) &&
                    (d[0] === 6 || d[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (d[0] === 3 && (!c || (d[1] > c[0] && d[1] < c[3]))) {
                  n.label = d[1];
                  break;
                }
                if (d[0] === 6 && n.label < c[1]) {
                  ((n.label = c[1]), (c = d));
                  break;
                }
                if (c && n.label < c[2]) {
                  ((n.label = c[2]), n.ops.push(d));
                  break;
                }
                (c[2] && n.ops.pop(), n.trys.pop());
                continue;
            }
            d = t.call(e, n);
          } catch (v) {
            ((d = [6, v]), (s = 0));
          } finally {
            i = c = 0;
          }
        if (d[0] & 5) throw d[1];
        return { value: d[0] ? d[1] : void 0, done: !0 };
      }
    },
    Nn,
    ws = function () {
      var e;
      ((e = Nn?.getClient()) === null || e === void 0 || e.close(),
        (Nn = void 0));
    },
    Ur = "analyticsConsentGranted",
    vs = function (e, t) {
      var n = function () {
        return gs(void 0, void 0, void 0, function () {
          var i;
          return ys(this, function (s) {
            switch (s.label) {
              case 0:
                return [4, chrome.storage.local.get(Ur)];
              case 1:
                return ((i = s.sent()), i[Ur] === !0 || ws(), [2]);
            }
          });
        });
      };
      (n(),
        chrome.storage.onChanged.addListener(function (i, s) {
          s === "local" && i[Ur] && n();
        }));
    },
    On = function (e, t, n, i) {
      function s(c) {
        return c instanceof n
          ? c
          : new n(function (p) {
              p(c);
            });
      }
      return new (n || (n = Promise))(function (c, p) {
        function g(v) {
          try {
            d(i.next(v));
          } catch (k) {
            p(k);
          }
        }
        function y(v) {
          try {
            d(i.throw(v));
          } catch (k) {
            p(k);
          }
        }
        function d(v) {
          v.done ? c(v.value) : s(v.value).then(g, y);
        }
        d((i = i.apply(e, t || [])).next());
      });
    },
    Dn = function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (c[0] & 1) throw c[1];
            return c[1];
          },
          trys: [],
          ops: [],
        },
        i,
        s,
        c,
        p;
      return (
        (p = { next: g(0), throw: g(1), return: g(2) }),
        typeof Symbol == "function" &&
          (p[Symbol.iterator] = function () {
            return this;
          }),
        p
      );
      function g(d) {
        return function (v) {
          return y([d, v]);
        };
      }
      function y(d) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; p && ((p = 0), d[0] && (n = 0)), n; )
          try {
            if (
              ((i = 1),
              s &&
                (c =
                  d[0] & 2
                    ? s.return
                    : d[0]
                      ? s.throw || ((c = s.return) && c.call(s), 0)
                      : s.next) &&
                !(c = c.call(s, d[1])).done)
            )
              return c;
            switch (((s = 0), c && (d = [d[0] & 2, c.value]), d[0])) {
              case 0:
              case 1:
                c = d;
                break;
              case 4:
                return (n.label++, { value: d[1], done: !1 });
              case 5:
                (n.label++, (s = d[1]), (d = [0]));
                continue;
              case 7:
                ((d = n.ops.pop()), n.trys.pop());
                continue;
              default:
                if (
                  ((c = n.trys),
                  !(c = c.length > 0 && c[c.length - 1]) &&
                    (d[0] === 6 || d[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (d[0] === 3 && (!c || (d[1] > c[0] && d[1] < c[3]))) {
                  n.label = d[1];
                  break;
                }
                if (d[0] === 6 && n.label < c[1]) {
                  ((n.label = c[1]), (c = d));
                  break;
                }
                if (c && n.label < c[2]) {
                  ((n.label = c[2]), n.ops.push(d));
                  break;
                }
                (c[2] && n.ops.pop(), n.trys.pop());
                continue;
            }
            d = t.call(e, n);
          } catch (v) {
            ((d = [6, v]), (s = 0));
          } finally {
            i = c = 0;
          }
        if (d[0] & 5) throw d[1];
        return { value: d[0] ? d[1] : void 0, done: !0 };
      }
    },
    xs = function (e, t) {
      var n = typeof Symbol == "function" && e[Symbol.iterator];
      if (!n) return e;
      var i = n.call(e),
        s,
        c = [],
        p;
      try {
        for (; (t === void 0 || t-- > 0) && !(s = i.next()).done; )
          c.push(s.value);
      } catch (g) {
        p = { error: g };
      } finally {
        try {
          s && !s.done && (n = i.return) && n.call(i);
        } finally {
          if (p) throw p.error;
        }
      }
      return c;
    },
    Uo = function (e, t, n) {
      if (n || arguments.length === 2)
        for (var i = 0, s = t.length, c; i < s; i++)
          (c || !(i in t)) &&
            (c || (c = Array.prototype.slice.call(t, 0, i)), (c[i] = t[i]));
      return e.concat(c || Array.prototype.slice.call(t));
    },
    Lt;
  (function (e) {
    ((e.Local = "local"),
      (e.Sync = "sync"),
      (e.Managed = "managed"),
      (e.Session = "session"));
  })(Lt || (Lt = {}));
  var jr;
  (function (e) {
    ((e.ExtensionPagesOnly = "TRUSTED_CONTEXTS"),
      (e.ExtensionPagesAndContentScripts = "TRUSTED_AND_UNTRUSTED_CONTEXTS"));
  })(jr || (jr = {}));
  function jo(e, t) {
    return On(this, void 0, void 0, function () {
      function n(i) {
        return typeof i == "function";
      }
      return Dn(this, function (i) {
        switch (i.label) {
          case 0:
            return n(e) ? [4, e(t)] : [3, 2];
          case 1:
            return [2, i.sent()];
          case 2:
            return [2, e];
        }
      });
    });
  }
  var Wo = !1;
  function Vo(e) {
    if (chrome.storage[e] === void 0)
      throw new Error(
        "Check your storage permission in manifest.json: ".concat(
          e,
          " is not defined",
        ),
      );
  }
  function zo(e, t, n) {
    var i = this,
      s,
      c,
      p,
      g,
      y,
      d,
      v = null,
      k = [],
      M = (s = n?.storageType) !== null && s !== void 0 ? s : Lt.Local,
      B = (c = n?.liveUpdate) !== null && c !== void 0 ? c : !1,
      N =
        (g =
          (p = n?.serialization) === null || p === void 0
            ? void 0
            : p.serialize) !== null && g !== void 0
          ? g
          : function (q) {
              return q;
            },
      R =
        (d =
          (y = n?.serialization) === null || y === void 0
            ? void 0
            : y.deserialize) !== null && d !== void 0
          ? d
          : function (q) {
              return q;
            };
    Wo === !1 &&
      M === Lt.Session &&
      n?.sessionAccessForContentScripts === !0 &&
      (Vo(M),
      chrome.storage[M].setAccessLevel({
        accessLevel: jr.ExtensionPagesAndContentScripts,
      }).catch(function (q) {
        (console.warn(q),
          console.warn(
            "Please call setAccessLevel into different context, like a background script.",
          ));
      }),
      (Wo = !0));
    var E = function () {
        return On(i, void 0, void 0, function () {
          var q, ie;
          return Dn(this, function (fe) {
            switch (fe.label) {
              case 0:
                return (Vo(M), [4, chrome.storage[M].get([e])]);
              case 1:
                return (
                  (q = fe.sent()),
                  [2, (ie = R(q[e])) !== null && ie !== void 0 ? ie : t]
                );
            }
          });
        });
      },
      L = function () {
        k.forEach(function (q) {
          return q();
        });
      },
      I = Promise.resolve(),
      W = function (q) {
        var ie = I.then(function () {
          return On(i, void 0, void 0, function () {
            var fe;
            return Dn(this, function (ve) {
              switch (ve.label) {
                case 0:
                  return [4, jo(q, v)];
                case 1:
                  return (
                    (v = ve.sent()),
                    [4, chrome.storage[M].set(((fe = {}), (fe[e] = N(v)), fe))]
                  );
                case 2:
                  return (ve.sent(), L(), [2]);
              }
            });
          });
        });
        return ((I = ie.catch(function () {})), ie);
      },
      Y = function (q) {
        return (
          (k = Uo(Uo([], xs(k), !1), [q], !1)),
          function () {
            k = k.filter(function (ie) {
              return ie !== q;
            });
          }
        );
      },
      re = function () {
        return v;
      };
    E().then(function (q) {
      ((v = q), L());
    });
    function O(q) {
      return On(this, void 0, void 0, function () {
        var ie;
        return Dn(this, function (fe) {
          switch (fe.label) {
            case 0:
              return q[e] === void 0
                ? [2]
                : ((ie = R(q[e].newValue)), v === ie ? [2] : [4, jo(ie, v)]);
            case 1:
              return ((v = fe.sent()), L(), [2]);
          }
        });
      });
    }
    return (
      B && chrome.storage[M].onChanged.addListener(O),
      { get: E, set: W, getSnapshot: re, subscribe: Y }
    );
  }
  var me = function () {
      return (
        (me =
          Object.assign ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
              t = arguments[n];
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }
            return e;
          }),
        me.apply(this, arguments)
      );
    },
    Ke = function (e, t, n, i) {
      function s(c) {
        return c instanceof n
          ? c
          : new n(function (p) {
              p(c);
            });
      }
      return new (n || (n = Promise))(function (c, p) {
        function g(v) {
          try {
            d(i.next(v));
          } catch (k) {
            p(k);
          }
        }
        function y(v) {
          try {
            d(i.throw(v));
          } catch (k) {
            p(k);
          }
        }
        function d(v) {
          v.done ? c(v.value) : s(v.value).then(g, y);
        }
        d((i = i.apply(e, t || [])).next());
      });
    },
    Xe = function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (c[0] & 1) throw c[1];
            return c[1];
          },
          trys: [],
          ops: [],
        },
        i,
        s,
        c,
        p;
      return (
        (p = { next: g(0), throw: g(1), return: g(2) }),
        typeof Symbol == "function" &&
          (p[Symbol.iterator] = function () {
            return this;
          }),
        p
      );
      function g(d) {
        return function (v) {
          return y([d, v]);
        };
      }
      function y(d) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; p && ((p = 0), d[0] && (n = 0)), n; )
          try {
            if (
              ((i = 1),
              s &&
                (c =
                  d[0] & 2
                    ? s.return
                    : d[0]
                      ? s.throw || ((c = s.return) && c.call(s), 0)
                      : s.next) &&
                !(c = c.call(s, d[1])).done)
            )
              return c;
            switch (((s = 0), c && (d = [d[0] & 2, c.value]), d[0])) {
              case 0:
              case 1:
                c = d;
                break;
              case 4:
                return (n.label++, { value: d[1], done: !1 });
              case 5:
                (n.label++, (s = d[1]), (d = [0]));
                continue;
              case 7:
                ((d = n.ops.pop()), n.trys.pop());
                continue;
              default:
                if (
                  ((c = n.trys),
                  !(c = c.length > 0 && c[c.length - 1]) &&
                    (d[0] === 6 || d[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (d[0] === 3 && (!c || (d[1] > c[0] && d[1] < c[3]))) {
                  n.label = d[1];
                  break;
                }
                if (d[0] === 6 && n.label < c[1]) {
                  ((n.label = c[1]), (c = d));
                  break;
                }
                if (c && n.label < c[2]) {
                  ((n.label = c[2]), n.ops.push(d));
                  break;
                }
                (c[2] && n.ops.pop(), n.trys.pop());
                continue;
            }
            d = t.call(e, n);
          } catch (v) {
            ((d = [6, v]), (s = 0));
          } finally {
            i = c = 0;
          }
        if (d[0] & 5) throw d[1];
        return { value: d[0] ? d[1] : void 0, done: !0 };
      }
    },
    Ss = function (e) {
      var t = typeof Symbol == "function" && Symbol.iterator,
        n = t && e[t],
        i = 0;
      if (n) return n.call(e);
      if (e && typeof e.length == "number")
        return {
          next: function () {
            return (
              e && i >= e.length && (e = void 0),
              { value: e && e[i++], done: !e }
            );
          },
        };
      throw new TypeError(
        t ? "Object is not iterable." : "Symbol.iterator is not defined.",
      );
    },
    Cs = {
      x: !0,
      linkedin: !0,
      reddit: !0,
      substack: !0,
      medium: !0,
      github: !0,
    },
    bs = {
      buttonVisibility: !1,
      permanentlyHideIcon: !0,
      hideGoogleDocWidget: !1,
      feedScanEnabled: !0,
      feedScanPlatforms: Cs,
      feedScanMode: "default",
      feedScanConsentAnswered: !1,
    },
    We = zo("setting-storage-key", bs, {
      storageType: Lt.Local,
      liveUpdate: !0,
    }),
    Es = (function () {
      return Ke(void 0, void 0, void 0, function () {
        var e, t, n;
        return Xe(this, function (i) {
          switch (i.label) {
            case 0:
              return [4, chrome.storage.local.get("setting-storage-key")];
            case 1:
              return (
                (e = i.sent()),
                (t =
                  (n = e["setting-storage-key"]) !== null && n !== void 0
                    ? n
                    : {}),
                !("feedScanConsentAnswered" in t) && "feedScanEnabled" in t
                  ? [
                      4,
                      We.set(function (s) {
                        return me(me({}, s), { feedScanConsentAnswered: !0 });
                      }),
                    ]
                  : [3, 3]
              );
            case 2:
              (i.sent(), (i.label = 3));
            case 3:
              return [2];
          }
        });
      });
    })(),
    rt = me(me({}, We), {
      setButtonVisibility: function (e) {
        return Ke(void 0, void 0, void 0, function () {
          return Xe(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  We.set(function (n) {
                    return me(me({}, n), { buttonVisibility: e });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
      setPermanentlyHideIcon: function (e) {
        return Ke(void 0, void 0, void 0, function () {
          return Xe(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  We.set(function (n) {
                    return me(me({}, n), { permanentlyHideIcon: e });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
      setHideGoogleDocWidget: function (e) {
        return Ke(void 0, void 0, void 0, function () {
          return Xe(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  We.set(function (n) {
                    return me(me({}, n), { hideGoogleDocWidget: e });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
      setFeedScanEnabled: function (e) {
        return Ke(void 0, void 0, void 0, function () {
          return Xe(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  We.set(function (n) {
                    return me(me({}, n), { feedScanEnabled: e });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
      setFeedScanPlatform: function (e, t) {
        return Ke(void 0, void 0, void 0, function () {
          return Xe(this, function (n) {
            switch (n.label) {
              case 0:
                return [
                  4,
                  We.set(function (i) {
                    var s;
                    return me(me({}, i), {
                      feedScanPlatforms: me(
                        me({}, i.feedScanPlatforms),
                        ((s = {}), (s[e] = t), s),
                      ),
                    });
                  }),
                ];
              case 1:
                return (n.sent(), [2]);
            }
          });
        });
      },
      setAllFeedScanPlatforms: function (e) {
        return Ke(void 0, void 0, void 0, function () {
          return Xe(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  We.set(function (n) {
                    var i,
                      s,
                      c = me({}, n.feedScanPlatforms);
                    try {
                      for (
                        var p = Ss(Object.keys(c)), g = p.next();
                        !g.done;
                        g = p.next()
                      ) {
                        var y = g.value;
                        c[y] = e;
                      }
                    } catch (d) {
                      i = { error: d };
                    } finally {
                      try {
                        g && !g.done && (s = p.return) && s.call(p);
                      } finally {
                        if (i) throw i.error;
                      }
                    }
                    return me(me({}, n), {
                      feedScanEnabled: e,
                      feedScanPlatforms: c,
                    });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
      setFeedScanMode: function (e) {
        return Ke(void 0, void 0, void 0, function () {
          return Xe(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  We.set(function (n) {
                    return me(me({}, n), { feedScanMode: e });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
      setFeedScanConsent: function () {
        return Ke(void 0, void 0, void 0, function () {
          return Xe(this, function (e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  We.set(function (t) {
                    return me(me({}, t), { feedScanConsentAnswered: !0 });
                  }),
                ];
              case 1:
                return (e.sent(), [2]);
            }
          });
        });
      },
    }),
    Ce = function () {
      return (
        (Ce =
          Object.assign ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
              t = arguments[n];
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }
            return e;
          }),
        Ce.apply(this, arguments)
      );
    },
    Jt = function (e, t, n, i) {
      function s(c) {
        return c instanceof n
          ? c
          : new n(function (p) {
              p(c);
            });
      }
      return new (n || (n = Promise))(function (c, p) {
        function g(v) {
          try {
            d(i.next(v));
          } catch (k) {
            p(k);
          }
        }
        function y(v) {
          try {
            d(i.throw(v));
          } catch (k) {
            p(k);
          }
        }
        function d(v) {
          v.done ? c(v.value) : s(v.value).then(g, y);
        }
        d((i = i.apply(e, t || [])).next());
      });
    },
    Qt = function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (c[0] & 1) throw c[1];
            return c[1];
          },
          trys: [],
          ops: [],
        },
        i,
        s,
        c,
        p;
      return (
        (p = { next: g(0), throw: g(1), return: g(2) }),
        typeof Symbol == "function" &&
          (p[Symbol.iterator] = function () {
            return this;
          }),
        p
      );
      function g(d) {
        return function (v) {
          return y([d, v]);
        };
      }
      function y(d) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; p && ((p = 0), d[0] && (n = 0)), n; )
          try {
            if (
              ((i = 1),
              s &&
                (c =
                  d[0] & 2
                    ? s.return
                    : d[0]
                      ? s.throw || ((c = s.return) && c.call(s), 0)
                      : s.next) &&
                !(c = c.call(s, d[1])).done)
            )
              return c;
            switch (((s = 0), c && (d = [d[0] & 2, c.value]), d[0])) {
              case 0:
              case 1:
                c = d;
                break;
              case 4:
                return (n.label++, { value: d[1], done: !1 });
              case 5:
                (n.label++, (s = d[1]), (d = [0]));
                continue;
              case 7:
                ((d = n.ops.pop()), n.trys.pop());
                continue;
              default:
                if (
                  ((c = n.trys),
                  !(c = c.length > 0 && c[c.length - 1]) &&
                    (d[0] === 6 || d[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (d[0] === 3 && (!c || (d[1] > c[0] && d[1] < c[3]))) {
                  n.label = d[1];
                  break;
                }
                if (d[0] === 6 && n.label < c[1]) {
                  ((n.label = c[1]), (c = d));
                  break;
                }
                if (c && n.label < c[2]) {
                  ((n.label = c[2]), n.ops.push(d));
                  break;
                }
                (c[2] && n.ops.pop(), n.trys.pop());
                continue;
            }
            d = t.call(e, n);
          } catch (v) {
            ((d = [6, v]), (s = 0));
          } finally {
            i = c = 0;
          }
        if (d[0] & 5) throw d[1];
        return { value: d[0] ? d[1] : void 0, done: !0 };
      }
    },
    It = zo(
      "user-storage-key",
      {
        isGuided: !1,
        user: { id: 0, email: "", sessionId: "" },
        isAuthenticated: !1,
        authMethod: null,
      },
      { storageType: Lt.Local, liveUpdate: !0 },
    ),
    Rt = Ce(Ce({}, It), {
      setGuided: function () {
        return Jt(void 0, void 0, void 0, function () {
          return Qt(this, function (e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  It.set(function (t) {
                    return Ce(Ce({}, t), { isGuided: !0 });
                  }),
                ];
              case 1:
                return (e.sent(), [2]);
            }
          });
        });
      },
      login: function (e) {
        return Jt(void 0, void 0, void 0, function () {
          return Qt(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  It.set(function (n) {
                    return Ce(Ce({}, n), {
                      user: Ce(Ce({}, n.user), e.user),
                      isAuthenticated: !0,
                    });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
      logOut: function () {
        return Jt(void 0, void 0, void 0, function () {
          return Qt(this, function (e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  It.set(function (t) {
                    return Ce(Ce({}, t), {
                      user: { id: 0, email: "", sessionId: "" },
                      isAuthenticated: !1,
                    });
                  }),
                ];
              case 1:
                return (e.sent(), [2]);
            }
          });
        });
      },
      setUserSession: function (e) {
        return Jt(void 0, void 0, void 0, function () {
          return Qt(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  It.set(function (n) {
                    return Ce(Ce({}, n), {
                      user: Ce(Ce({}, n.user), e),
                      isAuthenticated: !0,
                    });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
      setHasChromeConsent: function (e) {
        return Jt(void 0, void 0, void 0, function () {
          return Qt(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  It.set(function (n) {
                    return Ce(Ce({}, n), {
                      user: Ce(Ce({}, n.user), { hasChromeConsent: e }),
                    });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
    });
  const ks = new Set([
      "tag",
      "topic",
      "search",
      "new-story",
      "me",
      "plans",
      "about",
      "jobs",
      "login",
      "creators",
      "membership",
      "business",
      "education",
      "help",
      "policy",
    ]),
    Go = {
      "x-article": "x",
      "x-post": "x",
      "linkedin-post": "linkedin",
      "substack-post": "substack",
      "reddit-post": "reddit",
      "medium-post": "medium",
      "github-post": "github",
    },
    Wr = [
      { hostnames: ["x.com", "twitter.com"], source: "x-article" },
      { hostnames: ["x.com", "twitter.com"], source: "x-post" },
      {
        hostnames: ["www.linkedin.com", "linkedin.com"],
        source: "linkedin-post",
      },
      { hostnames: ["substack.com"], source: "substack-post" },
      { hostnames: ["www.reddit.com", "reddit.com"], source: "reddit-post" },
      { hostnames: ["medium.com"], source: "medium-post" },
      { hostnames: ["github.com"], source: "github-post" },
    ];
  Wr.map((e) => e.source);
  const Bn = {
      configs: {
        "x-article": {
          postTextSelector:
            '[data-testid="longformRichTextComponent"] .public-DraftStyleDefault-block',
          postContainerSelector:
            'article[data-testid="tweet"]:has([data-testid="twitterArticleReadView"])',
          titleSelector: '[data-testid="twitter-article-title"]',
          authorSelector: '[data-testid="User-Name"]',
          dateSelector: "time",
          minWords: 50,
          maxWords: null,
          defaultContentType: "long_post",
          engagementExtractor: "x-group-aria",
          badgeInsertion: {
            type: "chain",
            strategies: [
              {
                type: "before-selector",
                selector: '[aria-label="Grok actions"]',
              },
              {
                type: "before-container-selector",
                selector: '[data-testid="twitter-article-title"]',
              },
              { type: "absolute-top-right", top: "8px", right: "8px" },
            ],
          },
        },
        "x-post": {
          postTextSelector: '[data-testid="tweetText"]',
          postContainerSelector: 'article:not([data-testid="notification"])',
          authorSelector: '[data-testid="User-Name"]',
          dateSelector: "time",
          minWords: 50,
          maxWords: null,
          defaultContentType: "post",
          showMoreSelector: '[data-testid="tweet-text-show-more-link"]',
          engagementExtractor: "x-group-aria",
          excludedPlatformIds: ["grok"],
          badgeInsertion: {
            type: "chain",
            strategies: [
              { type: "before-text-match", text: "Ad", tag: "span" },
              {
                type: "walk-up-from-selector",
                selector:
                  'button[data-testid$="-subscribe"], button[data-testid$="-follow"]',
              },
              {
                type: "before-selector",
                selector: '[aria-label="Grok actions"]',
              },
              {
                type: "walk-up-from-selector",
                selector: '[data-testid="caret"]',
              },
              {
                type: "walk-up-from-selector",
                selector: 'a[href="/i/premium_sign_up"]',
              },
              { type: "before-post-text" },
            ],
          },
        },
        "linkedin-post": {
          postTextSelector:
            '[data-testid="expandable-text-box"], .update-components-update-v2__commentary',
          postContainerSelector:
            "div:has(> h2), .fie-impression-container, [data-pangram-comment], li[data-testid='carousel-child-container']",
          commentContainerSelector: "[data-pangram-comment]",
          authorSelector:
            '[aria-label*="Profile"] p, a[href*="linkedin.com/in/"] h2, a[href^="/in/"] h2, a[href*="linkedin.com/company/"] h2, a[href^="/company/"] h2',
          dateSelector:
            'p:has(svg[aria-label="Visibility: Global"]), .update-components-actor__sub-description',
          minWords: 50,
          maxWords: null,
          defaultContentType: "post",
          showMoreSelector: '[data-testid="expandable-text-button"]',
          badgeAlignment: "right",
          engagementExtractor: "linkedin-social-counts",
          badgeInsertion: {
            type: "chain",
            strategies: [
              {
                type: "append-to-selector",
                selector: ".update-components-actor__title",
                badgeAlignment: "left",
              },
              {
                type: "append-to-row-from-selector",
                selector: ".update-components-actor__title",
                badgeAlignment: "left",
              },
              {
                type: "append-to-selector",
                selector:
                  'a[href*="linkedin.com/company/"] > div > div, a[href^="/company/"] > div > div, a[href*="linkedin.com/in/"] > div > div, a[href^="/in/"] > div > div',
                badgeAlignment: "left",
              },
              {
                type: "append-to-selector",
                selector: "div[aria-label*=' Profile']",
                badgeAlignment: "left",
              },
              { type: "before-post-text", badgeAlignment: "left" },
            ],
          },
          commentBadgeInsertion: {
            type: "chain",
            strategies: [
              {
                type: "append-to-selector",
                selector: ".update-components-actor__title",
                badgeAlignment: "left",
              },
              {
                type: "append-to-row-from-selector",
                selector: ".update-components-actor__title",
                badgeAlignment: "left",
              },
              {
                type: "append-to-selector",
                selector:
                  'a[href*="linkedin.com/company/"] > div > div, a[href^="/company/"] > div > div, a[href*="linkedin.com/in/"] > div > div, a[href^="/in/"] > div > div',
                badgeAlignment: "left",
              },
              {
                type: "append-to-selector",
                selector: "div[aria-label*=' Profile']",
                badgeAlignment: "left",
              },
              { type: "before-post-text", badgeAlignment: "left" },
            ],
          },
          commentBadgeAlignment: "left",
          commentMinWords: 20,
        },
        "substack-post": {
          postTextSelector:
            '.post-preview-content .body, [class*="feedCommentBodyInner-"] .ProseMirror, .body.markup',
          postContainerSelector:
            '.post-preview, [class*="feedItem-"], [class*="feedPermalinkUnit-"], article.post',
          authorSelector:
            '.post-preview-meta .profile-hover-wrapper, a[href^="/@"].link-LIBpto:not([title]), [class*="byline-wrapper"]',
          dateSelector: '.post-preview-meta time, time, [class*="font-meta"]',
          titleSelector: 'a[class*="font-display-"]',
          minWords: 50,
          maxWords: null,
          defaultContentType: "post",
          showMoreSelector: '[class*="seeMoreText-"] a',
          badgeAlignment: "left",
          engagementExtractor: "substack-aria-buttons",
          badgeInsertion: {
            type: "chain",
            strategies: [
              {
                type: "after-selector",
                selector: 'a[href*="/note/"].link-LIBpto',
              },
              {
                type: "append-to-selector",
                selector: '[class*="byline-wrapper"]',
              },
              {
                type: "before-selector",
                selector: 'button[aria-label="Like"]',
              },
              {
                type: "before-selector",
                selector: 'button[class*="priority_primary"]',
              },
              {
                type: "before-selector",
                selector: 'button[class*="buttonText-"]',
              },
              {
                type: "before-selector",
                selector: 'div[class*="moreButtonContainer"]',
              },
            ],
          },
        },
        "reddit-post": {
          postTextSelector:
            '[slot="text-body"], [data-post-click-location="text-body"], .md',
          postContainerSelector:
            'shreddit-post, shreddit-comment, shreddit-profile-comment, [data-testid="post-container"]',
          titleSelector: '[slot="title"], a[data-testid="post-title"]',
          authorSelector:
            '[slot="authorName"], a[data-testid="post-author-link"]',
          dateSelector: "time, faceplate-timeago",
          minWords: 50,
          maxWords: 500,
          defaultContentType: "post",
          commentContainerSelector: "shreddit-comment",
          badgeAlignment: "left",
          engagementExtractor: "reddit-attrs",
          badgeInsertion: {
            type: "chain",
            strategies: [
              { type: "append-to-selector", selector: '[slot="commentMeta"]' },
              { type: "after-selector", selector: "shreddit-comment-badges" },
              {
                type: "append-to-selector",
                selector: '[slot="credit-bar"] > :first-child',
              },
              { type: "absolute-top-right", top: "8px", right: "48px" },
            ],
          },
        },
        "medium-post": {
          postTextSelector: ".pw-post-body-paragraph, div > pre",
          postContainerSelector:
            'article:not([data-testid="post-preview"]), div:has(> pre)',
          titleSelector: '[data-testid="storyTitle"], .pw-post-title',
          authorSelector: '[data-testid="authorName"], .pw-author-name',
          publicationSelector:
            'a[href*="post_publication_info"] .pw-author-name span',
          dateSelector: '[data-testid="storyPublishDate"]',
          minWords: 50,
          maxWords: null,
          defaultContentType: "long_post",
          commentContainerSelector: "div:has(> pre)",
          engagementExtractor: "medium-clap-responses",
          badgeAlignment: "left",
          badgeInsertion: {
            type: "chain",
            strategies: [
              {
                type: "after-selector",
                selector: '[data-testid="storyPublishDate"]',
              },
              {
                type: "append-to-selector",
                selector: 'div:has(> [data-testid="storyReadTime"])',
              },
              { type: "absolute-top-right", top: "0px", right: "40px" },
            ],
          },
        },
        "github-post": {
          postTextSelector:
            '.pull-discussion-timeline .timeline-comment[id^="pullrequest-"] .comment-body.js-comment-body, .pull-discussion-timeline .timeline-comment-group[id^="issuecomment-"] .comment-body.js-comment-body',
          postContainerSelector:
            '.timeline-comment[id^="pullrequest-"], .timeline-comment-group[id^="issuecomment-"]',
          commentContainerSelector:
            '.timeline-comment-group[id^="issuecomment-"]',
          badgeBoundarySelector:
            '.timeline-comment[id^="pullrequest-"], .timeline-comment-group[id^="issuecomment-"]',
          authorSelector: ".timeline-comment-header .author",
          dateSelector: ".timeline-comment-header relative-time",
          minWords: 50,
          maxWords: 500,
          defaultContentType: "post",
          badgeAlignment: "left",
          badgeInsertion: {
            type: "chain",
            strategies: [
              {
                type: "before-selector",
                selector: ".timeline-comment-actions",
                reserveSpace: true,
              },
              {
                type: "append-to-selector",
                selector: ".timeline-comment-header",
                reserveSpace: true,
              },
              { type: "absolute-top-right", top: "8px", right: "48px" },
            ],
          },
        },
      },
    },
    Ye = Object.entries(Bn.configs).map(([e, t]) => ({ source: e, ...t })),
    Zo = (e) => Wr.find((t) => t.source === e)?.hostnames || [],
    Vr = "https://www.pangram.com",
    _s = (e) => {
      for (const [t, n] of Object.entries(e)) {
        if (!n || typeof n != "object") continue;
        const i = Ye.findIndex((s) => s.source === t);
        i !== -1 && (Ye[i] = { ...Ye[i], ...n });
      }
    },
    Te = "pangram-feed-badge",
    Ts = "pangram-feed-scan-button",
    U = {
      scrollScanTimer: null,
      safeSendMessageRef: null,
      activeSiteConfig: null,
      scanPostsRef: null,
      platformDisabled: !1,
      silentMode: !1,
      quotaExhausted: !1,
      quotaErrorLabel: "",
      onScanTimeout: null,
      getActiveSiteConfigRef: null,
      updateLoadingBadgesRef: null,
    },
    Ko = 500,
    Mt = (e, t, n) => {
      if (e.size >= Ko && !e.has(t)) {
        const i = e.keys().next().value;
        i !== void 0 && e.delete(i);
      }
      e.set(t, n);
    },
    $n = new Map(),
    qn = new Map(),
    Hn = new Map(),
    Un = {
      get: (e) => $n.get(e),
      set: (e, t) => Mt($n, e, t),
      has: (e) => $n.has(e),
      clear: () => $n.clear(),
    },
    jn = {
      get: (e) => qn.get(e),
      set: (e, t) => Mt(qn, e, t),
      has: (e) => qn.has(e),
      clear: () => qn.clear(),
    },
    Xo = {
      get: (e) => Hn.get(e),
      set: (e, t) => Mt(Hn, e, t),
      has: (e) => Hn.has(e),
      clear: () => Hn.clear(),
    },
    zr = new Map(),
    Yo = {
      get: (e) => zr.get(e),
      set: (e, t) => Mt(zr, e, t),
      clear: () => zr.clear(),
    },
    Gr = new Map(),
    Zr = {
      get: (e) => Gr.get(e),
      set: (e, t) => Mt(Gr, e, t),
      clear: () => Gr.clear(),
    },
    pt = new Map(),
    Kr = {
      get: (e) => pt.get(e),
      set: (e, t) => {
        if (pt.size >= Ko && !pt.has(e)) {
          const n = pt.keys().next().value;
          n !== void 0 && pt.delete(n);
        }
        pt.set(e, t);
      },
      clear: () => pt.clear(),
    },
    Wn = new Map(),
    Xr = {
      get: (e) => Wn.get(e),
      set: (e, t) => Mt(Wn, e, t),
      has: (e) => Wn.has(e),
      clear: () => Wn.clear(),
    },
    As = (e, t, n) => {
      const i = new Map();
      let s = e,
        c = 0;
      for (; s && (i.set(s, c), s !== n); ) ((s = s.parentElement), c++);
      let p = t,
        g = 0;
      for (; p; ) {
        const y = i.get(p);
        if (y !== void 0) return y + g;
        if (p === n) break;
        ((p = p.parentElement), g++);
      }
      return Number.MAX_SAFE_INTEGER;
    },
    sameBadgeBoundary = (e, t, n) => {
      if (!n) return !0;
      try {
        const i = e.closest(n);
        return !i || i === t;
      } catch {
        return !0;
      }
    },
    activeBadgeBoundary = (e, t) => {
      if (!t) return null;
      try {
        return e.matches(t) ? t : null;
      } catch {
        return null;
      }
    },
    Ae = (e, t, n, i, s, c) => {
      const p = Array.from(e.querySelectorAll(n));
      if (p.length === 0) return null;
      let g = null,
        y = Number.MAX_SAFE_INTEGER;
      for (const d of p) {
        if (i && !i(d)) continue;
        if (c && s && !sameBadgeBoundary(d, s, c)) continue;
        const v = As(d, t, e);
        v < y && ((y = v), (g = d));
      }
      return g;
    },
    Le = (e) => {
      const n = e
        .replace(/,/g, "")
        .trim()
        .match(/^([\d.]+)\s*([KMB])?/i);
      if (!n) return;
      const i = parseFloat(n[1]),
        s = (n[2] || "").toUpperCase();
      return Math.round(
        s === "K" ? i * 1e3 : s === "M" ? i * 1e6 : s === "B" ? i * 1e9 : i,
      );
    },
    Ls = {
      "x-group-aria": (e) => {
        const i =
            (e.closest("article") || e)
              .querySelector('[role="group"]')
              ?.getAttribute("aria-label") || "",
          s = (c) => {
            const p = i.match(c);
            return p ? parseInt(p[1], 10) : void 0;
          };
        return {
          commentCount: s(/(\d+)\s*repl/i),
          repostCount: s(/(\d+)\s*repost/i),
          likeCount: s(/(\d+)\s*like/i),
          viewCount: s(/(\d+)\s*view/i),
        };
      },
      "linkedin-social-counts": (e) => {
        let t, n, i;
        if (
          (e.querySelectorAll('span[aria-hidden="true"]').forEach((s) => {
            const c = (s.textContent || "").trim(),
              p = c.match(/^(\d[\d,]*)\s+comment/i);
            if (p) {
              n = parseInt(p[1].replace(/,/g, ""), 10);
              return;
            }
            const g = c.match(/^(\d[\d,]*)\s+repost/i);
            if (g) {
              i = parseInt(g[1].replace(/,/g, ""), 10);
              return;
            }
            const y = c.match(/^(\d[\d,]*)\s+reaction/i);
            if (y) {
              t = parseInt(y[1].replace(/,/g, ""), 10);
              return;
            }
            const d = c.match(/and (\d[\d,]*) others?/i);
            d && t === void 0 && (t = parseInt(d[1].replace(/,/g, ""), 10));
          }),
          !(t === void 0 && n === void 0 && i === void 0))
        )
          return { likeCount: t, commentCount: n, repostCount: i };
      },
      "substack-aria-buttons": (e) => {
        const t = e.querySelector('button[aria-label="Like"]'),
          n = e.querySelector('button[aria-label="Comment"]'),
          i = e.querySelector('button[aria-label="Restack"]');
        let s = t ? Le(t.textContent?.trim() || "") : void 0,
          c = n ? Le(n.textContent?.trim() || "") : void 0,
          p = i ? Le(i.textContent?.trim() || "") : void 0;
        if (s === void 0) {
          const g = e.querySelector('a[class*="cursor-pointer-"]');
          g?.textContent?.match(/\d+\s+Like/i) &&
            (s = Le(g.textContent.trim()));
        }
        if (p === void 0) {
          const g = e.querySelector('a[href*="/restacks"]');
          g && (p = Le(g.textContent?.trim() || ""));
        }
        if (!(s === void 0 && c === void 0 && p === void 0))
          return { likeCount: s, commentCount: c, repostCount: p };
      },
      "medium-clap-responses": (e) => {
        const t = e.querySelector(".pw-multi-vote-count"),
          n = e.querySelector(".pw-responses-count"),
          i = t ? Le(t.textContent?.trim() || "") : void 0,
          s = n ? Le(n.textContent?.trim() || "") : void 0;
        if (!(i === void 0 && s === void 0))
          return { likeCount: i, commentCount: s };
      },
      "reddit-attrs": (e) => {
        const t = e.getAttribute("score"),
          n = e.getAttribute("comment-count"),
          i = t ? parseInt(t, 10) : void 0,
          s = n ? parseInt(n, 10) : void 0;
        if (!(i === void 0 && s === void 0))
          return { likeCount: i, commentCount: s };
      },
    },
    Jo = (e, t) => {
      if (!e.engagementExtractor || e.engagementExtractor === "none") return;
      const n = Ls[e.engagementExtractor];
      return n ? n(t) : void 0;
    },
    Is = () => {
      const t = window.location.pathname.replace(/^\//, "").split("/")[0] || "";
      let n = document.querySelector(
        `[data-testid="UserAvatar-Container-${t}"]`,
      );
      if (!n) {
        const L = document.querySelectorAll(
          '[data-testid^="UserAvatar-Container-"]',
        );
        for (const I of Array.from(L))
          if (
            (I.getAttribute("data-testid") || "")
              .replace("UserAvatar-Container-", "")
              .toLowerCase() === t.toLowerCase()
          ) {
            n = I;
            break;
          }
      }
      const s = n?.querySelector("img")?.getAttribute("src") || void 0,
        p =
          document
            .querySelector('[data-testid="UserDescription"]')
            ?.textContent?.trim() || void 0;
      let g, y;
      document
        .querySelectorAll(
          'a[href*="/following"], a[href*="/followers"], a[href*="/verified_followers"]',
        )
        .forEach((L) => {
          const I = L.getAttribute("href") || "",
            W = (L.textContent || "").trim();
          I.includes("/following")
            ? (y = Le(W))
            : (I.includes("/followers") || I.includes("/verified_followers")) &&
              (g = Le(W));
        });
      const M =
          document
            .querySelector('[data-testid="UserJoinDate"]')
            ?.textContent?.replace(/^Joined\s*/i, "")
            .trim() || void 0,
        N =
          document
            .querySelector('[data-testid="UserLocation"]')
            ?.textContent?.trim() || void 0,
        E =
          document
            .querySelector(
              '[data-testid="UserName"] div[dir="ltr"] > span > span:first-child',
            )
            ?.textContent?.trim() || void 0;
      return {
        platform: "x",
        profileImageUrl: s,
        name: E,
        description: p,
        followerCount: g,
        followingCount: y,
        dateJoined: M,
        location: N,
      };
    },
    Rs = () => {
      const e = window.location.pathname,
        t = e.match(/^\/in\/([^/]+)/);
      if (t) {
        const i = t[1],
          s =
            document.querySelector('[aria-label="Profile photo"] img')?.src ||
            document.querySelector(`a[href*="${i}/overlay/photo/"] img`)?.src ||
            document.querySelector(
              "img.pv-recent-activity-top-card__member-photo",
            )?.src ||
            document.querySelector(
              `.break-words a[href*="/in/${i}"] img, .pv-recent-activity-top-card img`,
            )?.src ||
            void 0,
          p =
            document
              .querySelector(
                `a[href*="/in/${i}"] h2, a[href^="/in/"] h2, h1.text-heading-xlarge, .pv-text-details__left-panel h1, .pv-recent-activity-top-card__details h1, .break-words a[href^="/in/"] h3`,
              )
              ?.textContent?.trim() || void 0;
        let y =
          document
            .querySelector(".pv-profile-body-wrapper")
            ?.querySelector("h4")
            ?.textContent?.trim() || void 0;
        y ||
          (y =
            document
              .querySelector(".break-words.ph5, .break-words.pv0")
              ?.querySelector("h4")
              ?.textContent?.trim() || void 0);
        let d;
        const v = document.querySelector(
          ".pv-recent-activity-top-card__extra-info",
        );
        if (v) {
          const M = (v.textContent || "").match(/([\d,]+)/);
          M && (d = parseInt(M[1].replace(/,/g, ""), 10));
        }
        return {
          platform: "linkedin",
          profileImageUrl: s,
          name: p,
          description: y,
          followerCount: d,
        };
      }
      if (e.match(/^\/company\/([^/]+)\//)) {
        const i = document.querySelector(".org-top-card"),
          s = i?.querySelector("img")?.src || void 0,
          p =
            i
              ?.querySelector("h1, .org-top-card-summary__title")
              ?.textContent?.trim() || void 0,
          y =
            i
              ?.querySelector(".org-top-card-summary__tagline")
              ?.textContent?.trim() || void 0;
        let d, v;
        const k = i?.querySelectorAll(
          ".org-top-card-summary-info-list__info-item",
        );
        return (
          k && k.length >= 2 && (v = k[1]?.textContent?.trim() || void 0),
          k?.forEach((M) => {
            const B = M.textContent?.trim() || "";
            B.match(/followers/i) && (d = Le(B));
          }),
          {
            platform: "linkedin",
            profileImageUrl: s,
            name: p,
            description: y,
            followerCount: d,
            location: v,
          }
        );
      }
    },
    Ms = () => {
      const e = window.location.hostname;
      if (!(e === "substack.com" || e.endsWith(".substack.com"))) return;
      const i =
          document
            .querySelector('a[href^="/@"]')
            ?.querySelector('img[alt*="avatar"]') ||
          document.querySelector('img[alt*="avatar"][width="112"]') ||
          document.querySelector('img[alt*="avatar"][width="88"]') ||
          document.querySelector('img[alt*="avatar"][width="48"]') ||
          document.querySelector('img[alt*="avatar"][width="36"]'),
        s = i?.currentSrc || i?.src || void 0,
        c = i?.alt?.replace(/\u2019s avatar$|'s avatar$/i, "").trim() || void 0;
      let p;
      document
        .querySelectorAll('script[type="application/ld+json"]')
        .forEach((v) => {
          try {
            const k = JSON.parse(v.textContent || "");
            k["@type"] === "Person" && k.description && (p = k.description);
          } catch {}
        });
      let y;
      const d = document.querySelector('a[href*="/subscribers"]');
      if ((d && (y = Le(d.textContent?.trim() || "")), !(!s && !c)))
        return {
          platform: "substack",
          profileImageUrl: s,
          name: c,
          description: p,
          followerCount: y,
        };
    },
    Ps = () => {
      const e = document.querySelector("h2.pw-author-name, h1.pw-author-name"),
        t = e?.textContent?.trim() || void 0;
      let n;
      t &&
        (n =
          document.querySelector(`img[alt="${CSS.escape(t)}"][loading="lazy"]`)
            ?.src || void 0);
      let i;
      const s = document.querySelector(".pw-follower-count");
      s && (i = Le(s.textContent?.trim() || ""));
      let c;
      const p = document.querySelector(
        'a[href*="/following?source=user_profile_page"]',
      );
      if (p) {
        const d = p.textContent?.match(/\((\d[\d,]*)\)/);
        d && (c = parseInt(d[1].replace(/,/g, ""), 10));
      }
      let g;
      const y = e?.closest("div[class]")?.parentElement?.parentElement;
      if (y) {
        const d = y.querySelectorAll("p");
        for (const v of Array.from(d)) {
          const k = v.textContent?.trim();
          if (
            k &&
            !k.match(/^\d+\s*(followers?|following)/i) &&
            !k.match(/^See all/i) &&
            !k.match(/^Following$/i)
          ) {
            g = k;
            break;
          }
        }
      }
      if (!(!n && !t && i === void 0))
        return {
          platform: "medium",
          profileImageUrl: n,
          name: t,
          description: g,
          followerCount: i,
          followingCount: c,
        };
    },
    Fs = () => {
      let e;
      const t = document.querySelectorAll('script[type="application/ld+json"]');
      for (const N of Array.from(t))
        try {
          const R = JSON.parse(N.textContent || "");
          if (R.publisher?.name) {
            ((e = { name: R.publisher.name }),
              R.publisher.logo?.url && (e.imageUrl = R.publisher.logo.url));
            break;
          }
        } catch {}
      if (e) {
        const N = document.querySelector(
          'a[href*="followers?source=post_page---post_publication_info"]',
        );
        N && (e.followerCount = Le(N.textContent?.trim() || ""));
        const L = document
          .querySelector('a[href*="post_publication_info"] .pw-author-name')
          ?.closest("a")
          ?.parentElement?.querySelectorAll("p");
        if (L)
          for (const I of Array.from(L)) {
            const W = I.textContent?.trim();
            if (W) {
              e.description = W;
              break;
            }
          }
      }
      const n = document.querySelector(
          'a[href*="post_author_info"] .pw-author-name',
        ),
        i = n?.closest("a")?.parentElement,
        c =
          (
            i?.querySelector("img") ||
            document.querySelector('[data-testid="authorPhoto"]')
          )?.src || void 0;
      let p;
      const g = n?.querySelector("span");
      (g &&
        (p =
          (g.textContent || "").replace(/^Written by\s*/i, "").trim() ||
          void 0),
        p ||
          (p =
            document
              .querySelector('[data-testid="authorName"]')
              ?.textContent?.trim() || void 0));
      let y;
      const d = i?.querySelectorAll("p");
      if (d)
        for (const N of Array.from(d)) {
          const R = N.textContent?.trim();
          if (R && !R.match(/^\d+\s*(followers?|following)/i)) {
            y = R;
            break;
          }
        }
      let v, k;
      const M = document.querySelector(
        'a[href*="followers?source=post_page---post_author_info"]',
      );
      M && (v = Le(M.textContent?.trim() || ""));
      const B = document.querySelector(
        'a[href*="following?source=post_page---post_author_info"]',
      );
      if (
        (B && (k = Le(B.textContent?.trim() || "")),
        !(!c && !p && v === void 0 && !e))
      )
        return {
          platform: "medium",
          profileImageUrl: c,
          name: p,
          description: y,
          followerCount: v,
          followingCount: k,
          publication: e,
        };
    },
    Ns = () => {
      const e = document
          .querySelector('meta[property="og:title"]')
          ?.getAttribute("content"),
        t = e ? e.replace(/\s*[–—-]\s*Medium\s*$/i, "").trim() : void 0;
      let n;
      t &&
        (n =
          document.querySelector(`img[alt="${CSS.escape(t)}"][loading="lazy"]`)
            ?.src || void 0);
      let i;
      const s = document.querySelector('a[href*="/followers"]');
      s && (i = Le(s.textContent?.trim() || ""));
      let c;
      const p = document.querySelectorAll("p");
      for (const g of Array.from(p)) {
        const y = g.textContent?.trim();
        if (
          y &&
          !y.match(/^\d/) &&
          !y.match(/followers?|editors?/i) &&
          y.length > 10
        ) {
          c = y;
          break;
        }
      }
      if (t)
        return {
          platform: "medium",
          name: t,
          profileImageUrl: n,
          description: c,
          followerCount: i,
        };
    },
    Qo = () =>
      !!document.querySelector(
        'meta[property="al:android:package"][content="com.medium.reader"]',
      ) ||
      !!document.querySelector(
        'meta[property="al:ios:app_name"][content="Medium"]',
      ) ||
      !!document.querySelector(
        'meta[property="og:site_name"][content="Medium"]',
      ),
    ei = () =>
      !!document.querySelector(
        'iframe[src^="https://substack.com/channel-frame"]',
      ),
    en = () => {
      const e = window.location.hostname.replace("www.", ""),
        t = window.location.pathname;
      if (e === "medium.com") {
        const n = t.match(/^\/([^@/][^/]*)\/?$/);
        return !!(n && !ks.has(n[1]));
      }
      return !e.endsWith(".medium.com") && (t === "/" || t === "") ? Qo() : !1;
    },
    Os = {
      x: Is,
      linkedin: Rs,
      substack: Ms,
      medium: () =>
        en()
          ? Ns()
          : /^\/@[^/]+\/?$/.test(window.location.pathname)
            ? Ps()
            : Fs(),
      reddit: () => {
        const t = document.querySelector('img[alt*="avatar"]')?.src || void 0,
          i =
            document
              .querySelector(
                '[id="profile--id-card--highlight-tooltip--description"]',
              )
              ?.textContent?.trim() || void 0;
        return { platform: "reddit", profileImageUrl: t, description: i };
      },
    },
    Yr = (e) => {
      const t = Go[e];
      if (!t) return;
      const n = Os[t];
      return n ? n() : void 0;
    },
    Ve = () => {
      const e = window.location.hostname;
      if (
        e === "x.com" ||
        e === "twitter.com" ||
        e === "www.x.com" ||
        e === "www.twitter.com"
      ) {
        const n = !!document.querySelector(
          '[data-testid="twitterArticleReadView"]',
        );
        return (
          (U.activeSiteConfig =
            Ye.find((i) => i.source === (n ? "x-article" : "x-post")) || null),
          U.activeSiteConfig
        );
      }
      return (
        U.activeSiteConfig ||
          ((U.activeSiteConfig =
            Ye.find((n) =>
              Zo(n.source).some((i) => e === i || e.endsWith(`.${i}`)),
            ) || null),
          U.activeSiteConfig ||
            (Qo() &&
              (U.activeSiteConfig =
                Ye.find((n) => n.source === "medium-post") || null)),
          U.activeSiteConfig ||
            (ei() &&
              (U.activeSiteConfig =
                Ye.find((n) => n.source === "substack-post") || null))),
        U.activeSiteConfig
      );
    },
    Ds = () => Ve() !== null,
    Bs = (e) => Wr.some((t) => t.source === e),
    tn = (e) => {
      const t = new Intl.Segmenter(void 0, { granularity: "word" });
      let n = 0;
      for (const { isWordLike: i } of t.segment(e.trim())) i && n++;
      return n;
    },
    $s = (e, t) => {
      const n = new Intl.Segmenter(void 0, { granularity: "word" });
      let i = 0,
        s = 0;
      for (const { index: c, isWordLike: p, segment: g } of n.segment(
        e.trim(),
      )) {
        if (p && (i++, i > t)) return e.trim().slice(0, c).trimEnd();
        s = c + g.length;
      }
      return e.trim().slice(0, s);
    },
    qs = (e, t) =>
      e
        .split(",")
        .map((n) => `${n.trim()}${t}`)
        .join(", "),
    Hs = (e, t) => {
      const n = `${e}:${t.slice(0, 40).trim()}`;
      let i = 0;
      for (let s = 0; s < n.length; s++)
        i = ((i << 5) - i + n.charCodeAt(s)) | 0;
      return `${e}-${(i >>> 0).toString(36)}`;
    },
    ti = "data-pangram-fiber-text",
    ni = (() => {
      let e = !1,
        t = null;
      return {
        ensure: () => {
          e ||
            t ||
            (t = new Promise((n) => {
              const i = document.createElement("script");
              ((i.src = chrome.runtime.getURL("fiber-extractor.js")),
                (i.onload = () => {
                  ((e = !0), n());
                }),
                document.documentElement.appendChild(i));
            }));
        },
        isReady: () => e,
        waitReady: () => t,
      };
    })(),
    Us = (e) => {
      if (!ni.isReady()) return null;
      (e.setAttribute("data-pangram-fiber-request", "1"),
        document.dispatchEvent(new CustomEvent("pangram-extract-fiber")));
      const t = e.getAttribute(ti);
      return (
        e.removeAttribute(ti),
        e.removeAttribute("data-pangram-fiber-request"),
        t || null
      );
    },
    js = () => {
      ni.ensure();
    },
    ri = "data-pangram-substack-fulltext",
    oi = (() => {
      let e = !1,
        t = null;
      return {
        ensure: () => {
          e ||
            t ||
            (t = new Promise((n) => {
              const i = document.createElement("script");
              ((i.src = chrome.runtime.getURL("feed-interceptor.js")),
                (i.onload = () => {
                  ((e = !0), n());
                }),
                document.documentElement.appendChild(i));
            }));
        },
        isReady: () => e,
      };
    })(),
    Ws = (e) => {
      if (!oi.isReady()) return null;
      const t = (e.textContent || "").trim();
      if (!t) return null;
      (e.setAttribute("data-pangram-substack-request", t.slice(0, 150)),
        document.dispatchEvent(new CustomEvent("pangram-substack-lookup")));
      const n = e.getAttribute(ri);
      return (
        e.removeAttribute(ri),
        e.removeAttribute("data-pangram-substack-request"),
        n || null
      );
    },
    Vs = () => {
      oi.ensure();
    },
    Vn = (e) => e.replace(/\s+/g, " ").trim(),
    ii = (e) =>
      !(
        !e ||
        /^[•·]/.test(e) ||
        /^\d+(st|nd|rd|th)$/i.test(e) ||
        /\bfollowers?\b/i.test(e) ||
        /\b(edited|visibility)\b/i.test(e) ||
        /\b\d+\s*(mo|yr|w|d)\b/i.test(e)
      ),
    Pt = (e) => ii(Vn(e.textContent || "")),
    nn =
      'a[href*="linkedin.com/in/"] h2, a[href^="/in/"] h2, a[href*="linkedin.com/company/"] h2, a[href^="/company/"] h2, a[href*="linkedin.com/in/"] p, a[href^="/in/"] p, a[href*="linkedin.com/company/"] p, a[href^="/company/"] p, a[href*="linkedin.com/in/"] span[aria-hidden="true"], a[href^="/in/"] span[aria-hidden="true"], a[href*="linkedin.com/company/"] span[aria-hidden="true"], a[href^="/company/"] span[aria-hidden="true"]',
    zn =
      'a[href*="linkedin.com/in/"], a[href^="/in/"], a[href*="linkedin.com/company/"], a[href^="/company/"]',
    zs = (e, t, n) => {
      if (!e.authorSelector) return;
      if (e.source === "linkedin-post") {
        let y = null,
          d = n.parentElement;
        for (; d && d !== t && ((y = Ae(d, n, nn, Pt)), !y); )
          d = d.parentElement;
        if ((y || (y = Ae(t, n, nn, Pt)), !y)) return;
        const v = Vn(
          (y.textContent || "").split(`
`)[0] || "",
        );
        if (!v) return;
        const M = y.closest(zn)?.getAttribute("href") || "",
          N = (M.startsWith("http") ? new URL(M).pathname : M)
            .replace(/^\//, "")
            .split("/")
            .filter(Boolean);
        return {
          platformId: (["in", "user", "company"].includes(N[0])
            ? N[1] || v
            : N[0] || v
          ).replace(/^@/, ""),
          name: v,
        };
      }
      let i = null;
      if (
        (e.source === "x-post" || e.source === "x-article") &&
        e.authorSelector
      ) {
        let y = n.parentElement;
        for (; y && y !== t && ((i = y.querySelector(e.authorSelector)), !i); )
          y = y.parentElement;
      }
      if (
        (i || (i = t.querySelector(e.authorSelector)),
        !i && e.source === "reddit-post")
      ) {
        const y = t.getAttribute("author");
        if (y) return { platformId: y.toLowerCase(), name: y };
        const d = t.querySelector('a[href^="/user/"]');
        if (d) {
          const M = (d.getAttribute("href") || "")
            .replace(/^\/user\//, "")
            .replace(/\/$/, "");
          if (M) return { platformId: M.toLowerCase(), name: M };
        }
        const v = window.location.pathname.match(/^\/user\/([^/]+)/);
        if (v) return { platformId: v[1].toLowerCase(), name: v[1] };
      }
      if (!i) return;
      const s = i.querySelectorAll('a[href^="/"]');
      if (s.length >= 2) {
        const y = s[0]?.textContent?.trim() || "",
          d = s[1]?.getAttribute("href")?.replace(/^\//, "") || "";
        if (d) return { platformId: d.replace(/^@/, ""), name: y };
      }
      let c = i.textContent?.trim() || "";
      if (!c) return;
      const p =
        i.closest("a")?.getAttribute("href") ||
        i.querySelector("a")?.getAttribute("href");
      let g = c;
      if (p) {
        const d = (p.startsWith("http") ? new URL(p).pathname : p.split("?")[0])
          .replace(/^\//, "")
          .split("/")
          .filter(Boolean);
        g = ["in", "user", "u"].includes(d[0]) ? d[1] || c : d[0] || c;
      }
      if (
        ((g = g.replace(/^@/, "").replace(/^u\//, "")), !p && c.startsWith("@"))
      ) {
        let y = i.parentElement;
        for (; y && y !== t; ) {
          const d = Array.from(y.querySelectorAll("span")).find((v) => {
            const k = v.textContent?.trim() || "";
            return k && !k.startsWith("@") && !v.contains(i);
          });
          if (d) {
            c = d.textContent?.trim() || c;
            break;
          }
          y = y.parentElement;
        }
      }
      return { platformId: g, name: c };
    },
    Gs = (e, t) => {
      if (e.source === "medium-post") {
        const p = document.querySelectorAll(
          'script[type="application/ld+json"]',
        );
        for (const y of Array.from(p))
          try {
            const d = JSON.parse(y.textContent || "");
            if (d.publisher?.name) {
              const v = d.publisher.name;
              let k = v;
              const M = d.publisher?.url || "";
              if (M)
                try {
                  const R = new URL(M).pathname
                    .replace(/^\//, "")
                    .split("/")[0];
                  R && (k = R);
                } catch {}
              const B = d.publisher?.logo?.url || void 0,
                N = d.publisher?.description || void 0;
              return {
                platformId: k,
                name: v,
                profileImageUrl: B,
                description: N,
              };
            }
          } catch {}
        const g = document.title.split("|").map((y) => y.trim());
        if (g.length >= 4 && g[g.length - 1] === "Medium") {
          const y = g[g.length - 3] || "";
          if (y) return { platformId: y, name: y };
        }
        return;
      }
      if (!e.publicationSelector) return;
      const n = t.querySelector(e.publicationSelector),
        i = n?.textContent?.trim();
      if (!i) return;
      const s = n?.closest("a")?.getAttribute("href");
      let c = i;
      return (
        s &&
          (c =
            (s.startsWith("http") ? new URL(s).pathname : s.split("?")[0])
              .replace(/^\//, "")
              .split("/")[0] || i),
        (c = c.replace(/^@/, "")),
        { platformId: c, name: i }
      );
    },
    Jr = (e) => {
      const t = document.getElementById(Ts);
      if (!t) return;
      const n = t.querySelector(".pangram-feed-spinner");
      n && (n.style.display = e ? "inline-block" : "none");
    },
    si = (e, t) => {
      let n = 0,
        i = e;
      for (; i && i !== t; ) (n++, (i = i.parentElement));
      return n;
    },
    Ft = (e, t, n, r) => {
      let i = t.parentElement;
      for (; i; ) {
        const s = Ae(i, t, n, void 0, e, r);
        if (s) {
          const c = si(s, i);
          if (si(t, i) - c > 4) {
            if (i === e) break;
            i = i.parentElement;
            continue;
          }
          return i;
        }
        if (i === e) break;
        i = i.parentElement;
      }
      return null;
    },
    Qr = (e, t, n, r) => {
      switch (n.type) {
        case "before-selector": {
          const i = Ft(e, t, n.selector, r);
          if (!i) break;
          const s = Ae(i, t, n.selector, void 0, e, r);
          if (s && s.parentElement)
            return { parent: s.parentElement, before: s };
          break;
        }
        case "before-selector-global": {
          const i = document.querySelector(n.selector);
          if (i && i.parentElement)
            return { parent: i.parentElement, before: i };
          break;
        }
        case "after-selector": {
          const i = Ft(e, t, n.selector, r);
          if (!i) break;
          const s = Ae(i, t, n.selector, void 0, e, r);
          if (s && s.parentElement) {
            const c = document.querySelector('[role="main"]');
            if (c && !c.contains(s)) break;
            return { parent: s.parentElement, before: s.nextElementSibling };
          }
          break;
        }
        case "append-to-parent-of-selector": {
          const i = Ft(e, t, n.selector, r);
          if (!i) break;
          const s = Ae(i, t, n.selector, void 0, e, r);
          if (s?.parentElement)
            return { parent: s.parentElement, before: null };
          break;
        }
        case "append-to-row-from-selector": {
          const i = Ft(e, t, n.selector, r);
          if (!i) break;
          const s = Ae(i, t, n.selector, void 0, e, r);
          if (!s) break;
          let c = s;
          for (; c && c !== e; ) {
            const p = c.parentElement;
            if (!p) break;
            const g = window.getComputedStyle(p);
            if (g.display === "flex" && g.flexDirection === "row")
              return { parent: p, before: null };
            c = p;
          }
          if (s.parentElement) return { parent: s.parentElement, before: null };
          break;
        }
        case "before-text-match": {
          const i = n.tag || "*",
            s = Array.from(e.querySelectorAll(i));
          for (let c = 0; c < s.length; c++) {
            const p = s[c];
            if (r && !sameBadgeBoundary(p, e, r)) continue;
            if (p.textContent?.trim() === n.text) {
              let g = p;
              for (; g.parentElement && g.parentElement !== e; ) {
                const y = window.getComputedStyle(g.parentElement);
                if (y.display === "flex" && y.flexDirection === "row")
                  return { parent: g.parentElement, before: g };
                g = g.parentElement;
              }
              if (p.parentElement?.parentElement)
                return {
                  parent: p.parentElement.parentElement,
                  before: p.parentElement,
                };
            }
          }
          break;
        }
        case "walk-up-from-selector": {
          const i = Ft(e, t, n.selector, r);
          if (!i) break;
          const s = Ae(i, t, n.selector, void 0, e, r);
          if (!s) break;
          let c = s,
            p = s.parentElement;
          for (; p && p !== e; ) {
            const g = window.getComputedStyle(p);
            if (g.display === "flex" && g.flexDirection === "row")
              return { parent: p, before: c };
            ((c = p), (p = p.parentElement));
          }
          break;
        }
        case "walk-up-from-selector-global": {
          const i = document.querySelector(n.selector);
          if (!i) break;
          let s = i,
            c = i.parentElement;
          for (; c && c !== document.body; ) {
            const p = window.getComputedStyle(c);
            if (p.display === "flex" && p.flexDirection === "row")
              return { parent: c, before: s };
            ((s = c), (c = c.parentElement));
          }
          break;
        }
        case "walk-up-from-container-selector": {
          const i = Ae(e, t, n.selector, void 0, e, r);
          if (!i) break;
          let s = i,
            c = i.parentElement;
          for (; c && c !== e; ) {
            const p = window.getComputedStyle(c);
            if (p.display === "flex" && p.flexDirection === "row")
              return { parent: c, before: s };
            ((s = c), (c = c.parentElement));
          }
          break;
        }
        case "after-container-selector": {
          const i = Ae(e, t, n.selector, void 0, e, r);
          if (i && i.parentElement)
            return { parent: i.parentElement, before: i.nextElementSibling };
          break;
        }
        case "before-container-selector": {
          const i = Ae(e, t, n.selector, void 0, e, r);
          if (i && i.parentElement)
            return { parent: i.parentElement, before: i };
          break;
        }
        case "append-to-selector": {
          const i = Ft(e, t, n.selector, r);
          if (!i) break;
          const s = Ae(i, t, n.selector, void 0, e, r);
          if (s)
            return n.targetLastChild && s.lastElementChild
              ? { parent: s.lastElementChild, before: null }
              : { parent: s, before: null };
          break;
        }
        case "before-post-text": {
          if (t.parentElement) return { parent: t.parentElement, before: t };
          break;
        }
        case "absolute-top-right":
          return { parent: e, before: null };
        case "chain": {
          for (const i of n.strategies) {
            const s = Qr(e, t, i, r);
            if (s) return s;
          }
          break;
        }
      }
      return null;
    },
    Zs = (e, t, n, i) => {
      if (n.type === "chain") {
        for (const s of n.strategies) if (Qr(e, t, s, i)) return s;
      }
      return n;
    },
    Nt = (e, t, n, i, s, c, r) => {
      const a = activeBadgeBoundary(e, r),
        p = Qr(e, t, i, a);
      let g = e;
      if (p) {
        let R = p.parent;
        for (; R && R !== e && R.parentElement !== e; ) R = R.parentElement;
        R && R !== e && (g = R);
      }
      const y = g.querySelector(`.${Te}`);
      if (
        (y &&
          (y.parentElement?.classList.contains("pangram-badge-wrapper")
            ? y.parentElement.remove()
            : y.remove()),
        !document.getElementById("pangram-badge-font"))
      ) {
        const R = document.createElement("style");
        R.id = "pangram-badge-font";
        const E = chrome.runtime.getURL("fonts/ibm-plex-sans-500.woff2");
        ((R.textContent = `
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 500 700;
        font-display: swap;
        src: url('${E}') format('woff2');
      }
    `),
          document.head.appendChild(R));
      }
      ((n.style.fontFamily = "'IBM Plex Sans', sans-serif"),
        (n.style.position = "relative"));
      const d = s === "substack-post" ? "0" : s === "reddit-post" ? "1" : "10";
      n.style.zIndex = d;
      const v = Zs(e, t, i, a),
        k = v.badgeAlignment ?? c,
        M = document.createElement("div");
      M.className = "pangram-badge-wrapper";
      const B = k === "left" ? "flex-start" : "flex-end";
      ((M.style.cssText = `
    width: 0;
    min-width: 0;
    max-width: 0;
    height: 0;
    overflow: visible;
    display: flex;
    justify-content: ${B};
    align-items: center;
    flex-shrink: 0;
    align-self: center;
    position: relative;
    z-index: ${d};
  `),
        v.reserveSpace &&
          ((M.style.width = "max-content"),
          (M.style.minWidth = "max-content"),
          (M.style.maxWidth = "none"),
          (M.style.height = "auto"),
          (M.style.display = "inline-flex"),
          (M.style.marginLeft = "8px")),
        (n.style.pointerEvents = "auto"),
        M.appendChild(n));
      const N = M;
      if (
        (p
          ? p.before && p.before.parentNode === p.parent
            ? p.parent.insertBefore(N, p.before)
            : p.parent.appendChild(N)
          : t.parentElement && t.parentElement.insertBefore(N, t),
        s !== "linkedin-post")
      ) {
        let R = N.parentElement;
        for (; R && R !== e; ) {
          const E = window.getComputedStyle(R),
            L = E.overflow,
            I =
              E.getPropertyValue("-webkit-line-clamp") !== "none" &&
              E.getPropertyValue("-webkit-line-clamp") !== "",
            W = E.whiteSpace === "nowrap" && E.textOverflow === "ellipsis";
          ((L === "hidden" || L === "clip") &&
            (s === "reddit-post" || !W) &&
            !I &&
            (R.style.overflow = "visible"),
            (R = R.parentElement));
        }
      }
      if (
        (v.type === "before-post-text" &&
          ((n.style.width = "fit-content"), (n.style.marginBottom = "4px")),
        v.type === "append-to-selector" &&
          p &&
          ((n.style.flexShrink = "0"),
          (n.style.verticalAlign = "middle"),
          (n.style.display = "inline-flex"),
          (n.style.marginLeft = v.reserveSpace ? "0" : "4px")),
        v.type === "append-to-row-from-selector" &&
          p &&
          (n.style.marginLeft = "4px"),
        (v.type === "after-container-selector" ||
          v.type === "before-container-selector") &&
          p &&
          ((N.style.justifyContent = "flex-start"),
          (N.style.alignSelf = "flex-start"),
          (n.style.flexShrink = "0"),
          (n.style.alignSelf = "center"),
          (n.style.marginLeft = "0"),
          (n.style.marginRight = "0")),
        v.type === "after-selector" && p)
      ) {
        const R = p.parent,
          E = window.getComputedStyle(R).display;
        (E !== "flex" && E !== "inline-flex" && E !== "contents"
          ? ((R.style.display = "flex"),
            (R.style.flexDirection = "row"),
            (R.style.alignItems = "center"),
            (R.style.flexWrap = "wrap"),
            (R.style.gap = "8px"))
          : (E === "flex" || E === "inline-flex") &&
            (R.style.alignItems = "center"),
          (n.style.flexShrink = "0"),
          (n.style.alignSelf = "center"),
          (n.style.marginLeft = "0"));
      }
      if (v.type === "absolute-top-right") {
        const R = e;
        ((!R.style.position || R.style.position === "static") &&
          (R.style.position = "relative"),
          (n.style.position = "absolute"),
          (n.style.top = v.top || "8px"),
          (n.style.right = v.right || "8px"),
          (n.style.zIndex = "10"));
      }
    };
  var ot = {},
    mt = {};
  var ai;
  function Ks() {
    if (ai) return mt;
    ai = 1;
    var e = Fn();
    function t(r) {
      for (
        var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + r,
          f = 1;
        f < arguments.length;
        f++
      )
        l += "&args[]=" + encodeURIComponent(arguments[f]);
      return (
        "Minified React error #" +
        r +
        "; visit " +
        l +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var n = Object.prototype.hasOwnProperty,
      i =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      s = {},
      c = {};
    function p(r) {
      return n.call(c, r)
        ? !0
        : n.call(s, r)
          ? !1
          : i.test(r)
            ? (c[r] = !0)
            : ((s[r] = !0), !1);
    }
    function g(r, l, f, h, b, x, _) {
      ((this.acceptsBooleans = l === 2 || l === 3 || l === 4),
        (this.attributeName = h),
        (this.attributeNamespace = b),
        (this.mustUseProperty = f),
        (this.propertyName = r),
        (this.type = l),
        (this.sanitizeURL = x),
        (this.removeEmptyString = _));
    }
    var y = {};
    ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (r) {
        y[r] = new g(r, 0, !1, r, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (r) {
        var l = r[0];
        y[l] = new g(l, 1, !1, r[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(
        function (r) {
          y[r] = new g(r, 2, !1, r.toLowerCase(), null, !1, !1);
        },
      ),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (r) {
        y[r] = new g(r, 2, !1, r, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (r) {
          y[r] = new g(r, 3, !1, r.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (r) {
        y[r] = new g(r, 3, !0, r, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (r) {
        y[r] = new g(r, 4, !1, r, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (r) {
        y[r] = new g(r, 6, !1, r, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (r) {
        y[r] = new g(r, 5, !1, r.toLowerCase(), null, !1, !1);
      }));
    var d = /[\-:]([a-z])/g;
    function v(r) {
      return r[1].toUpperCase();
    }
    ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (r) {
        var l = r.replace(d, v);
        y[l] = new g(l, 1, !1, r, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (r) {
          var l = r.replace(d, v);
          y[l] = new g(l, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (r) {
        var l = r.replace(d, v);
        y[l] = new g(
          l,
          1,
          !1,
          r,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1,
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (r) {
        y[r] = new g(r, 1, !1, r.toLowerCase(), null, !1, !1);
      }),
      (y.xlinkHref = new g(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1,
      )),
      ["src", "href", "action", "formAction"].forEach(function (r) {
        y[r] = new g(r, 1, !1, r.toLowerCase(), null, !0, !0);
      }));
    var k = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      M = ["Webkit", "ms", "Moz", "O"];
    Object.keys(k).forEach(function (r) {
      M.forEach(function (l) {
        ((l = l + r.charAt(0).toUpperCase() + r.substring(1)), (k[l] = k[r]));
      });
    });
    var B = /["'&<>]/;
    function N(r) {
      if (typeof r == "boolean" || typeof r == "number") return "" + r;
      r = "" + r;
      var l = B.exec(r);
      if (l) {
        var f = "",
          h,
          b = 0;
        for (h = l.index; h < r.length; h++) {
          switch (r.charCodeAt(h)) {
            case 34:
              l = "&quot;";
              break;
            case 38:
              l = "&amp;";
              break;
            case 39:
              l = "&#x27;";
              break;
            case 60:
              l = "&lt;";
              break;
            case 62:
              l = "&gt;";
              break;
            default:
              continue;
          }
          (b !== h && (f += r.substring(b, h)), (b = h + 1), (f += l));
        }
        r = b !== h ? f + r.substring(b, h) : f;
      }
      return r;
    }
    var R = /([A-Z])/g,
      E = /^ms-/,
      L = Array.isArray;
    function I(r, l) {
      return { insertionMode: r, selectedValue: l };
    }
    function W(r, l, f) {
      switch (l) {
        case "select":
          return I(1, f.value != null ? f.value : f.defaultValue);
        case "svg":
          return I(2, null);
        case "math":
          return I(3, null);
        case "foreignObject":
          return I(1, null);
        case "table":
          return I(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return I(5, null);
        case "colgroup":
          return I(7, null);
        case "tr":
          return I(6, null);
      }
      return 4 <= r.insertionMode || r.insertionMode === 0 ? I(1, null) : r;
    }
    var Y = new Map();
    function re(r, l, f) {
      if (typeof f != "object") throw Error(t(62));
      l = !0;
      for (var h in f)
        if (n.call(f, h)) {
          var b = f[h];
          if (b != null && typeof b != "boolean" && b !== "") {
            if (h.indexOf("--") === 0) {
              var x = N(h);
              b = N(("" + b).trim());
            } else {
              x = h;
              var _ = Y.get(x);
              (_ !== void 0 ||
                ((_ = N(x.replace(R, "-$1").toLowerCase().replace(E, "-ms-"))),
                Y.set(x, _)),
                (x = _),
                (b =
                  typeof b == "number"
                    ? b === 0 || n.call(k, h)
                      ? "" + b
                      : b + "px"
                    : N(("" + b).trim())));
            }
            l
              ? ((l = !1), r.push(' style="', x, ":", b))
              : r.push(";", x, ":", b);
          }
        }
      l || r.push('"');
    }
    function O(r, l, f, h) {
      switch (f) {
        case "style":
          re(r, l, h);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        !(2 < f.length) ||
        (f[0] !== "o" && f[0] !== "O") ||
        (f[1] !== "n" && f[1] !== "N")
      ) {
        if (((l = y.hasOwnProperty(f) ? y[f] : null), l !== null)) {
          switch (typeof h) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!l.acceptsBooleans) return;
          }
          switch (((f = l.attributeName), l.type)) {
            case 3:
              h && r.push(" ", f, '=""');
              break;
            case 4:
              h === !0
                ? r.push(" ", f, '=""')
                : h !== !1 && r.push(" ", f, '="', N(h), '"');
              break;
            case 5:
              isNaN(h) || r.push(" ", f, '="', N(h), '"');
              break;
            case 6:
              !isNaN(h) && 1 <= h && r.push(" ", f, '="', N(h), '"');
              break;
            default:
              (l.sanitizeURL && (h = "" + h), r.push(" ", f, '="', N(h), '"'));
          }
        } else if (p(f)) {
          switch (typeof h) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (
                ((l = f.toLowerCase().slice(0, 5)),
                l !== "data-" && l !== "aria-")
              )
                return;
          }
          r.push(" ", f, '="', N(h), '"');
        }
      }
    }
    function q(r, l, f) {
      if (l != null) {
        if (f != null) throw Error(t(60));
        if (typeof l != "object" || !("__html" in l)) throw Error(t(61));
        ((l = l.__html), l != null && r.push("" + l));
      }
    }
    function ie(r) {
      var l = "";
      return (
        e.Children.forEach(r, function (f) {
          f != null && (l += f);
        }),
        l
      );
    }
    function fe(r, l, f, h) {
      r.push(D(f));
      var b = (f = null),
        x;
      for (x in l)
        if (n.call(l, x)) {
          var _ = l[x];
          if (_ != null)
            switch (x) {
              case "children":
                f = _;
                break;
              case "dangerouslySetInnerHTML":
                b = _;
                break;
              default:
                O(r, h, x, _);
            }
        }
      return (
        r.push(">"),
        q(r, b, f),
        typeof f == "string" ? (r.push(N(f)), null) : f
      );
    }
    var ve = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
      $ = new Map();
    function D(r) {
      var l = $.get(r);
      if (l === void 0) {
        if (!ve.test(r)) throw Error(t(65, r));
        ((l = "<" + r), $.set(r, l));
      }
      return l;
    }
    function Q(r, l, f, h, b) {
      switch (l) {
        case "select":
          r.push(D("select"));
          var x = null,
            _ = null;
          for (X in f)
            if (n.call(f, X)) {
              var F = f[X];
              if (F != null)
                switch (X) {
                  case "children":
                    x = F;
                    break;
                  case "dangerouslySetInnerHTML":
                    _ = F;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    O(r, h, X, F);
                }
            }
          return (r.push(">"), q(r, _, x), x);
        case "option":
          ((_ = b.selectedValue), r.push(D("option")));
          var V = (F = null),
            G = null,
            X = null;
          for (x in f)
            if (n.call(f, x)) {
              var we = f[x];
              if (we != null)
                switch (x) {
                  case "children":
                    F = we;
                    break;
                  case "selected":
                    G = we;
                    break;
                  case "dangerouslySetInnerHTML":
                    X = we;
                    break;
                  case "value":
                    V = we;
                  default:
                    O(r, h, x, we);
                }
            }
          if (_ != null)
            if (((f = V !== null ? "" + V : ie(F)), L(_))) {
              for (h = 0; h < _.length; h++)
                if ("" + _[h] === f) {
                  r.push(' selected=""');
                  break;
                }
            } else "" + _ === f && r.push(' selected=""');
          else G && r.push(' selected=""');
          return (r.push(">"), q(r, X, F), F);
        case "textarea":
          (r.push(D("textarea")), (X = _ = x = null));
          for (F in f)
            if (n.call(f, F) && ((V = f[F]), V != null))
              switch (F) {
                case "children":
                  X = V;
                  break;
                case "value":
                  x = V;
                  break;
                case "defaultValue":
                  _ = V;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(t(91));
                default:
                  O(r, h, F, V);
              }
          if ((x === null && _ !== null && (x = _), r.push(">"), X != null)) {
            if (x != null) throw Error(t(92));
            if (L(X) && 1 < X.length) throw Error(t(93));
            x = "" + X;
          }
          return (
            typeof x == "string" &&
              x[0] ===
                `
` &&
              r.push(`
`),
            x !== null && r.push(N("" + x)),
            null
          );
        case "input":
          (r.push(D("input")), (V = X = F = x = null));
          for (_ in f)
            if (n.call(f, _) && ((G = f[_]), G != null))
              switch (_) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(t(399, "input"));
                case "defaultChecked":
                  V = G;
                  break;
                case "defaultValue":
                  F = G;
                  break;
                case "checked":
                  X = G;
                  break;
                case "value":
                  x = G;
                  break;
                default:
                  O(r, h, _, G);
              }
          return (
            X !== null
              ? O(r, h, "checked", X)
              : V !== null && O(r, h, "checked", V),
            x !== null
              ? O(r, h, "value", x)
              : F !== null && O(r, h, "value", F),
            r.push("/>"),
            null
          );
        case "menuitem":
          r.push(D("menuitem"));
          for (var qe in f)
            if (n.call(f, qe) && ((x = f[qe]), x != null))
              switch (qe) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(t(400));
                default:
                  O(r, h, qe, x);
              }
          return (r.push(">"), null);
        case "title":
          (r.push(D("title")), (x = null));
          for (we in f)
            if (n.call(f, we) && ((_ = f[we]), _ != null))
              switch (we) {
                case "children":
                  x = _;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(t(434));
                default:
                  O(r, h, we, _);
              }
          return (r.push(">"), x);
        case "listing":
        case "pre":
          (r.push(D(l)), (_ = x = null));
          for (V in f)
            if (n.call(f, V) && ((F = f[V]), F != null))
              switch (V) {
                case "children":
                  x = F;
                  break;
                case "dangerouslySetInnerHTML":
                  _ = F;
                  break;
                default:
                  O(r, h, V, F);
              }
          if ((r.push(">"), _ != null)) {
            if (x != null) throw Error(t(60));
            if (typeof _ != "object" || !("__html" in _)) throw Error(t(61));
            ((f = _.__html),
              f != null &&
                (typeof f == "string" &&
                0 < f.length &&
                f[0] ===
                  `
`
                  ? r.push(
                      `
`,
                      f,
                    )
                  : r.push("" + f)));
          }
          return (
            typeof x == "string" &&
              x[0] ===
                `
` &&
              r.push(`
`),
            x
          );
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          r.push(D(l));
          for (var He in f)
            if (n.call(f, He) && ((x = f[He]), x != null))
              switch (He) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(t(399, l));
                default:
                  O(r, h, He, x);
              }
          return (r.push("/>"), null);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return fe(r, f, l, h);
        case "html":
          return (
            b.insertionMode === 0 && r.push("<!DOCTYPE html>"),
            fe(r, f, l, h)
          );
        default:
          if (l.indexOf("-") === -1 && typeof f.is != "string")
            return fe(r, f, l, h);
          (r.push(D(l)), (_ = x = null));
          for (G in f)
            if (n.call(f, G) && ((F = f[G]), F != null))
              switch (G) {
                case "children":
                  x = F;
                  break;
                case "dangerouslySetInnerHTML":
                  _ = F;
                  break;
                case "style":
                  re(r, h, F);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  p(G) &&
                    typeof F != "function" &&
                    typeof F != "symbol" &&
                    r.push(" ", G, '="', N(F), '"');
              }
          return (r.push(">"), q(r, _, x), x);
      }
    }
    function ee(r, l, f) {
      if ((r.push('<!--$?--><template id="'), f === null)) throw Error(t(395));
      return (r.push(f), r.push('"></template>'));
    }
    function xe(r, l, f, h) {
      switch (f.insertionMode) {
        case 0:
        case 1:
          return (
            r.push('<div hidden id="'),
            r.push(l.segmentPrefix),
            (l = h.toString(16)),
            r.push(l),
            r.push('">')
          );
        case 2:
          return (
            r.push('<svg aria-hidden="true" style="display:none" id="'),
            r.push(l.segmentPrefix),
            (l = h.toString(16)),
            r.push(l),
            r.push('">')
          );
        case 3:
          return (
            r.push('<math aria-hidden="true" style="display:none" id="'),
            r.push(l.segmentPrefix),
            (l = h.toString(16)),
            r.push(l),
            r.push('">')
          );
        case 4:
          return (
            r.push('<table hidden id="'),
            r.push(l.segmentPrefix),
            (l = h.toString(16)),
            r.push(l),
            r.push('">')
          );
        case 5:
          return (
            r.push('<table hidden><tbody id="'),
            r.push(l.segmentPrefix),
            (l = h.toString(16)),
            r.push(l),
            r.push('">')
          );
        case 6:
          return (
            r.push('<table hidden><tr id="'),
            r.push(l.segmentPrefix),
            (l = h.toString(16)),
            r.push(l),
            r.push('">')
          );
        case 7:
          return (
            r.push('<table hidden><colgroup id="'),
            r.push(l.segmentPrefix),
            (l = h.toString(16)),
            r.push(l),
            r.push('">')
          );
        default:
          throw Error(t(397));
      }
    }
    function Me(r, l) {
      switch (l.insertionMode) {
        case 0:
        case 1:
          return r.push("</div>");
        case 2:
          return r.push("</svg>");
        case 3:
          return r.push("</math>");
        case 4:
          return r.push("</table>");
        case 5:
          return r.push("</tbody></table>");
        case 6:
          return r.push("</tr></table>");
        case 7:
          return r.push("</colgroup></table>");
        default:
          throw Error(t(397));
      }
    }
    var ce = /[<\u2028\u2029]/g;
    function j(r) {
      return JSON.stringify(r).replace(ce, function (l) {
        switch (l) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React",
            );
        }
      });
    }
    function se(r, l) {
      return (
        (l = l === void 0 ? "" : l),
        {
          bootstrapChunks: [],
          startInlineScript: "<script>",
          placeholderPrefix: l + "P:",
          segmentPrefix: l + "S:",
          boundaryPrefix: l + "B:",
          idPrefix: l,
          nextSuspenseID: 0,
          sentCompleteSegmentFunction: !1,
          sentCompleteBoundaryFunction: !1,
          sentClientRenderFunction: !1,
          generateStaticMarkup: r,
        }
      );
    }
    function ke(r, l, f, h) {
      return f.generateStaticMarkup
        ? (r.push(N(l)), !1)
        : (l === ""
            ? (r = h)
            : (h && r.push("<!-- -->"), r.push(N(l)), (r = !0)),
          r);
    }
    var w = Object.assign,
      A = Symbol.for("react.element"),
      H = Symbol.for("react.portal"),
      Z = Symbol.for("react.fragment"),
      K = Symbol.for("react.strict_mode"),
      ae = Symbol.for("react.profiler"),
      de = Symbol.for("react.provider"),
      le = Symbol.for("react.context"),
      oe = Symbol.for("react.forward_ref"),
      he = Symbol.for("react.suspense"),
      Ee = Symbol.for("react.suspense_list"),
      at = Symbol.for("react.memo"),
      ge = Symbol.for("react.lazy"),
      Pe = Symbol.for("react.scope"),
      Qe = Symbol.for("react.debug_trace_mode"),
      lt = Symbol.for("react.legacy_hidden"),
      wo = Symbol.for("react.default_value"),
      $t = Symbol.iterator;
    function vt(r) {
      if (r == null) return null;
      if (typeof r == "function") return r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case Z:
          return "Fragment";
        case H:
          return "Portal";
        case ae:
          return "Profiler";
        case K:
          return "StrictMode";
        case he:
          return "Suspense";
        case Ee:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case le:
            return (r.displayName || "Context") + ".Consumer";
          case de:
            return (r._context.displayName || "Context") + ".Provider";
          case oe:
            var l = r.render;
            return (
              (r = r.displayName),
              r ||
                ((r = l.displayName || l.name || ""),
                (r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef")),
              r
            );
          case at:
            return (
              (l = r.displayName || null),
              l !== null ? l : vt(r.type) || "Memo"
            );
          case ge:
            ((l = r._payload), (r = r._init));
            try {
              return vt(r(l));
            } catch {}
        }
      return null;
    }
    var qt = {};
    function ar(r, l) {
      if (((r = r.contextTypes), !r)) return qt;
      var f = {},
        h;
      for (h in r) f[h] = l[h];
      return f;
    }
    var Ge = null;
    function Ie(r, l) {
      if (r !== l) {
        ((r.context._currentValue2 = r.parentValue), (r = r.parent));
        var f = l.parent;
        if (r === null) {
          if (f !== null) throw Error(t(401));
        } else {
          if (f === null) throw Error(t(401));
          Ie(r, f);
        }
        l.context._currentValue2 = l.value;
      }
    }
    function lr(r) {
      ((r.context._currentValue2 = r.parentValue),
        (r = r.parent),
        r !== null && lr(r));
    }
    function cr(r) {
      var l = r.parent;
      (l !== null && cr(l), (r.context._currentValue2 = r.value));
    }
    function ur(r, l) {
      if (
        ((r.context._currentValue2 = r.parentValue), (r = r.parent), r === null)
      )
        throw Error(t(402));
      r.depth === l.depth ? Ie(r, l) : ur(r, l);
    }
    function dr(r, l) {
      var f = l.parent;
      if (f === null) throw Error(t(402));
      (r.depth === f.depth ? Ie(r, f) : dr(r, f),
        (l.context._currentValue2 = l.value));
    }
    function Ht(r) {
      var l = Ge;
      l !== r &&
        (l === null
          ? cr(r)
          : r === null
            ? lr(l)
            : l.depth === r.depth
              ? Ie(l, r)
              : l.depth > r.depth
                ? ur(l, r)
                : dr(l, r),
        (Ge = r));
    }
    var fr = {
      isMounted: function () {
        return !1;
      },
      enqueueSetState: function (r, l) {
        ((r = r._reactInternals), r.queue !== null && r.queue.push(l));
      },
      enqueueReplaceState: function (r, l) {
        ((r = r._reactInternals), (r.replace = !0), (r.queue = [l]));
      },
      enqueueForceUpdate: function () {},
    };
    function pr(r, l, f, h) {
      var b = r.state !== void 0 ? r.state : null;
      ((r.updater = fr), (r.props = f), (r.state = b));
      var x = { queue: [], replace: !1 };
      r._reactInternals = x;
      var _ = l.contextType;
      if (
        ((r.context =
          typeof _ == "object" && _ !== null ? _._currentValue2 : h),
        (_ = l.getDerivedStateFromProps),
        typeof _ == "function" &&
          ((_ = _(f, b)), (b = _ == null ? b : w({}, b, _)), (r.state = b)),
        typeof l.getDerivedStateFromProps != "function" &&
          typeof r.getSnapshotBeforeUpdate != "function" &&
          (typeof r.UNSAFE_componentWillMount == "function" ||
            typeof r.componentWillMount == "function"))
      )
        if (
          ((l = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          l !== r.state && fr.enqueueReplaceState(r, r.state, null),
          x.queue !== null && 0 < x.queue.length)
        )
          if (
            ((l = x.queue),
            (_ = x.replace),
            (x.queue = null),
            (x.replace = !1),
            _ && l.length === 1)
          )
            r.state = l[0];
          else {
            for (
              x = _ ? l[0] : r.state, b = !0, _ = _ ? 1 : 0;
              _ < l.length;
              _++
            ) {
              var F = l[_];
              ((F = typeof F == "function" ? F.call(r, x, f, h) : F),
                F != null && (b ? ((b = !1), (x = w({}, x, F))) : w(x, F)));
            }
            r.state = x;
          }
        else x.queue = null;
    }
    var vo = { id: 1, overflow: "" };
    function gn(r, l, f) {
      var h = r.id;
      r = r.overflow;
      var b = 32 - Ut(h) - 1;
      ((h &= ~(1 << b)), (f += 1));
      var x = 32 - Ut(l) + b;
      if (30 < x) {
        var _ = b - (b % 5);
        return (
          (x = (h & ((1 << _) - 1)).toString(32)),
          (h >>= _),
          (b -= _),
          { id: (1 << (32 - Ut(l) + b)) | (f << b) | h, overflow: x + r }
        );
      }
      return { id: (1 << x) | (f << b) | h, overflow: r };
    }
    var Ut = Math.clz32 ? Math.clz32 : Co,
      xo = Math.log,
      So = Math.LN2;
    function Co(r) {
      return ((r >>>= 0), r === 0 ? 32 : (31 - ((xo(r) / So) | 0)) | 0);
    }
    function bo(r, l) {
      return (r === l && (r !== 0 || 1 / r === 1 / l)) || (r !== r && l !== l);
    }
    var Eo = typeof Object.is == "function" ? Object.is : bo,
      Be = null,
      yn = null,
      jt = null,
      ue = null,
      xt = !1,
      Wt = !1,
      St = 0,
      Ze = null,
      Vt = 0;
    function et() {
      if (Be === null) throw Error(t(321));
      return Be;
    }
    function mr() {
      if (0 < Vt) throw Error(t(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function wn() {
      return (
        ue === null
          ? jt === null
            ? ((xt = !1), (jt = ue = mr()))
            : ((xt = !0), (ue = jt))
          : ue.next === null
            ? ((xt = !1), (ue = ue.next = mr()))
            : ((xt = !0), (ue = ue.next)),
        ue
      );
    }
    function vn() {
      ((yn = Be = null), (Wt = !1), (jt = null), (Vt = 0), (ue = Ze = null));
    }
    function hr(r, l) {
      return typeof l == "function" ? l(r) : l;
    }
    function gr(r, l, f) {
      if (((Be = et()), (ue = wn()), xt)) {
        var h = ue.queue;
        if (
          ((l = h.dispatch), Ze !== null && ((f = Ze.get(h)), f !== void 0))
        ) {
          (Ze.delete(h), (h = ue.memoizedState));
          do ((h = r(h, f.action)), (f = f.next));
          while (f !== null);
          return ((ue.memoizedState = h), [h, l]);
        }
        return [ue.memoizedState, l];
      }
      return (
        (r =
          r === hr
            ? typeof l == "function"
              ? l()
              : l
            : f !== void 0
              ? f(l)
              : l),
        (ue.memoizedState = r),
        (r = ue.queue = { last: null, dispatch: null }),
        (r = r.dispatch = ko.bind(null, Be, r)),
        [ue.memoizedState, r]
      );
    }
    function yr(r, l) {
      if (
        ((Be = et()), (ue = wn()), (l = l === void 0 ? null : l), ue !== null)
      ) {
        var f = ue.memoizedState;
        if (f !== null && l !== null) {
          var h = f[1];
          e: if (h === null) h = !1;
          else {
            for (var b = 0; b < h.length && b < l.length; b++)
              if (!Eo(l[b], h[b])) {
                h = !1;
                break e;
              }
            h = !0;
          }
          if (h) return f[0];
        }
      }
      return ((r = r()), (ue.memoizedState = [r, l]), r);
    }
    function ko(r, l, f) {
      if (25 <= Vt) throw Error(t(301));
      if (r === Be)
        if (
          ((Wt = !0),
          (r = { action: f, next: null }),
          Ze === null && (Ze = new Map()),
          (f = Ze.get(l)),
          f === void 0)
        )
          Ze.set(l, r);
        else {
          for (l = f; l.next !== null; ) l = l.next;
          l.next = r;
        }
    }
    function _o() {
      throw Error(t(394));
    }
    function zt() {}
    var wr = {
        readContext: function (r) {
          return r._currentValue2;
        },
        useContext: function (r) {
          return (et(), r._currentValue2);
        },
        useMemo: yr,
        useReducer: gr,
        useRef: function (r) {
          ((Be = et()), (ue = wn()));
          var l = ue.memoizedState;
          return l === null
            ? ((r = { current: r }), (ue.memoizedState = r))
            : l;
        },
        useState: function (r) {
          return gr(hr, r);
        },
        useInsertionEffect: zt,
        useLayoutEffect: function () {},
        useCallback: function (r, l) {
          return yr(function () {
            return r;
          }, l);
        },
        useImperativeHandle: zt,
        useEffect: zt,
        useDebugValue: zt,
        useDeferredValue: function (r) {
          return (et(), r);
        },
        useTransition: function () {
          return (et(), [!1, _o]);
        },
        useId: function () {
          var r = yn.treeContext,
            l = r.overflow;
          ((r = r.id), (r = (r & ~(1 << (32 - Ut(r) - 1))).toString(32) + l));
          var f = Gt;
          if (f === null) throw Error(t(404));
          return (
            (l = St++),
            (r = ":" + f.idPrefix + "R" + r),
            0 < l && (r += "H" + l.toString(32)),
            r + ":"
          );
        },
        useMutableSource: function (r, l) {
          return (et(), l(r._source));
        },
        useSyncExternalStore: function (r, l, f) {
          if (f === void 0) throw Error(t(407));
          return f();
        },
      },
      Gt = null,
      xn =
        e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          .ReactCurrentDispatcher;
    function To(r) {
      return (console.error(r), null);
    }
    function Ct() {}
    function Ao(r, l, f, h, b, x, _, F, V) {
      var G = [],
        X = new Set();
      return (
        (l = {
          destination: null,
          responseState: l,
          progressiveChunkSize: h === void 0 ? 12800 : h,
          status: 0,
          fatalError: null,
          nextSegmentId: 0,
          allPendingTasks: 0,
          pendingRootTasks: 0,
          completedRootSegment: null,
          abortableTasks: X,
          pingedTasks: G,
          clientRenderedBoundaries: [],
          completedBoundaries: [],
          partialBoundaries: [],
          onError: b === void 0 ? To : b,
          onAllReady: Ct,
          onShellReady: _ === void 0 ? Ct : _,
          onShellError: Ct,
          onFatalError: Ct,
        }),
        (f = Zt(l, 0, null, f, !1, !1)),
        (f.parentFlushed = !0),
        (r = Sn(l, r, null, f, X, qt, null, vo)),
        G.push(r),
        l
      );
    }
    function Sn(r, l, f, h, b, x, _, F) {
      (r.allPendingTasks++,
        f === null ? r.pendingRootTasks++ : f.pendingTasks++);
      var V = {
        node: l,
        ping: function () {
          var G = r.pingedTasks;
          (G.push(V), G.length === 1 && Er(r));
        },
        blockedBoundary: f,
        blockedSegment: h,
        abortSet: b,
        legacyContext: x,
        context: _,
        treeContext: F,
      };
      return (b.add(V), V);
    }
    function Zt(r, l, f, h, b, x) {
      return {
        status: 0,
        id: -1,
        index: l,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: h,
        boundary: f,
        lastPushedText: b,
        textEmbedded: x,
      };
    }
    function bt(r, l) {
      if (((r = r.onError(l)), r != null && typeof r != "string"))
        throw Error(
          'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
            typeof r +
            '" instead',
        );
      return r;
    }
    function Kt(r, l) {
      var f = r.onShellError;
      (f(l),
        (f = r.onFatalError),
        f(l),
        r.destination !== null
          ? ((r.status = 2), r.destination.destroy(l))
          : ((r.status = 1), (r.fatalError = l)));
    }
    function vr(r, l, f, h, b) {
      for (Be = {}, yn = l, St = 0, r = f(h, b); Wt; )
        ((Wt = !1), (St = 0), (Vt += 1), (ue = null), (r = f(h, b)));
      return (vn(), r);
    }
    function xr(r, l, f, h) {
      var b = f.render(),
        x = h.childContextTypes;
      if (x != null) {
        var _ = l.legacyContext;
        if (typeof f.getChildContext != "function") h = _;
        else {
          f = f.getChildContext();
          for (var F in f)
            if (!(F in x)) throw Error(t(108, vt(h) || "Unknown", F));
          h = w({}, _, f);
        }
        ((l.legacyContext = h), Re(r, l, b), (l.legacyContext = _));
      } else Re(r, l, b);
    }
    function Sr(r, l) {
      if (r && r.defaultProps) {
        ((l = w({}, l)), (r = r.defaultProps));
        for (var f in r) l[f] === void 0 && (l[f] = r[f]);
        return l;
      }
      return l;
    }
    function Cn(r, l, f, h, b) {
      if (typeof f == "function")
        if (f.prototype && f.prototype.isReactComponent) {
          b = ar(f, l.legacyContext);
          var x = f.contextType;
          ((x = new f(
            h,
            typeof x == "object" && x !== null ? x._currentValue2 : b,
          )),
            pr(x, f, h, b),
            xr(r, l, x, f));
        } else {
          ((x = ar(f, l.legacyContext)), (b = vr(r, l, f, h, x)));
          var _ = St !== 0;
          if (
            typeof b == "object" &&
            b !== null &&
            typeof b.render == "function" &&
            b.$$typeof === void 0
          )
            (pr(b, f, h, x), xr(r, l, b, f));
          else if (_) {
            ((h = l.treeContext), (l.treeContext = gn(h, 1, 0)));
            try {
              Re(r, l, b);
            } finally {
              l.treeContext = h;
            }
          } else Re(r, l, b);
        }
      else if (typeof f == "string") {
        switch (
          ((b = l.blockedSegment),
          (x = Q(b.chunks, f, h, r.responseState, b.formatContext)),
          (b.lastPushedText = !1),
          (_ = b.formatContext),
          (b.formatContext = W(_, f, h)),
          bn(r, l, x),
          (b.formatContext = _),
          f)
        ) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            b.chunks.push("</", f, ">");
        }
        b.lastPushedText = !1;
      } else {
        switch (f) {
          case lt:
          case Qe:
          case K:
          case ae:
          case Z:
            Re(r, l, h.children);
            return;
          case Ee:
            Re(r, l, h.children);
            return;
          case Pe:
            throw Error(t(343));
          case he:
            e: {
              ((f = l.blockedBoundary),
                (b = l.blockedSegment),
                (x = h.fallback),
                (h = h.children),
                (_ = new Set()));
              var F = {
                  id: null,
                  rootSegmentID: -1,
                  parentFlushed: !1,
                  pendingTasks: 0,
                  forceClientRender: !1,
                  completedSegments: [],
                  byteSize: 0,
                  fallbackAbortableTasks: _,
                  errorDigest: null,
                },
                V = Zt(r, b.chunks.length, F, b.formatContext, !1, !1);
              (b.children.push(V), (b.lastPushedText = !1));
              var G = Zt(r, 0, null, b.formatContext, !1, !1);
              ((G.parentFlushed = !0),
                (l.blockedBoundary = F),
                (l.blockedSegment = G));
              try {
                if (
                  (bn(r, l, h),
                  r.responseState.generateStaticMarkup ||
                    (G.lastPushedText &&
                      G.textEmbedded &&
                      G.chunks.push("<!-- -->")),
                  (G.status = 1),
                  ct(F, G),
                  F.pendingTasks === 0)
                )
                  break e;
              } catch (X) {
                ((G.status = 4),
                  (F.forceClientRender = !0),
                  (F.errorDigest = bt(r, X)));
              } finally {
                ((l.blockedBoundary = f), (l.blockedSegment = b));
              }
              ((l = Sn(
                r,
                x,
                f,
                V,
                _,
                l.legacyContext,
                l.context,
                l.treeContext,
              )),
                r.pingedTasks.push(l));
            }
            return;
        }
        if (typeof f == "object" && f !== null)
          switch (f.$$typeof) {
            case oe:
              if (((h = vr(r, l, f.render, h, b)), St !== 0)) {
                ((f = l.treeContext), (l.treeContext = gn(f, 1, 0)));
                try {
                  Re(r, l, h);
                } finally {
                  l.treeContext = f;
                }
              } else Re(r, l, h);
              return;
            case at:
              ((f = f.type), (h = Sr(f, h)), Cn(r, l, f, h, b));
              return;
            case de:
              if (
                ((b = h.children),
                (f = f._context),
                (h = h.value),
                (x = f._currentValue2),
                (f._currentValue2 = h),
                (_ = Ge),
                (Ge = h =
                  {
                    parent: _,
                    depth: _ === null ? 0 : _.depth + 1,
                    context: f,
                    parentValue: x,
                    value: h,
                  }),
                (l.context = h),
                Re(r, l, b),
                (r = Ge),
                r === null)
              )
                throw Error(t(403));
              ((h = r.parentValue),
                (r.context._currentValue2 =
                  h === wo ? r.context._defaultValue : h),
                (r = Ge = r.parent),
                (l.context = r));
              return;
            case le:
              ((h = h.children), (h = h(f._currentValue2)), Re(r, l, h));
              return;
            case ge:
              ((b = f._init),
                (f = b(f._payload)),
                (h = Sr(f, h)),
                Cn(r, l, f, h, void 0));
              return;
          }
        throw Error(t(130, f == null ? f : typeof f, ""));
      }
    }
    function Re(r, l, f) {
      if (((l.node = f), typeof f == "object" && f !== null)) {
        switch (f.$$typeof) {
          case A:
            Cn(r, l, f.type, f.props, f.ref);
            return;
          case H:
            throw Error(t(257));
          case ge:
            var h = f._init;
            ((f = h(f._payload)), Re(r, l, f));
            return;
        }
        if (L(f)) {
          Cr(r, l, f);
          return;
        }
        if (
          (f === null || typeof f != "object"
            ? (h = null)
            : ((h = ($t && f[$t]) || f["@@iterator"]),
              (h = typeof h == "function" ? h : null)),
          h && (h = h.call(f)))
        ) {
          if (((f = h.next()), !f.done)) {
            var b = [];
            do (b.push(f.value), (f = h.next()));
            while (!f.done);
            Cr(r, l, b);
          }
          return;
        }
        throw (
          (r = Object.prototype.toString.call(f)),
          Error(
            t(
              31,
              r === "[object Object]"
                ? "object with keys {" + Object.keys(f).join(", ") + "}"
                : r,
            ),
          )
        );
      }
      typeof f == "string"
        ? ((h = l.blockedSegment),
          (h.lastPushedText = ke(
            l.blockedSegment.chunks,
            f,
            r.responseState,
            h.lastPushedText,
          )))
        : typeof f == "number" &&
          ((h = l.blockedSegment),
          (h.lastPushedText = ke(
            l.blockedSegment.chunks,
            "" + f,
            r.responseState,
            h.lastPushedText,
          )));
    }
    function Cr(r, l, f) {
      for (var h = f.length, b = 0; b < h; b++) {
        var x = l.treeContext;
        l.treeContext = gn(x, h, b);
        try {
          bn(r, l, f[b]);
        } finally {
          l.treeContext = x;
        }
      }
    }
    function bn(r, l, f) {
      var h = l.blockedSegment.formatContext,
        b = l.legacyContext,
        x = l.context;
      try {
        return Re(r, l, f);
      } catch (V) {
        if (
          (vn(),
          typeof V == "object" && V !== null && typeof V.then == "function")
        ) {
          f = V;
          var _ = l.blockedSegment,
            F = Zt(
              r,
              _.chunks.length,
              null,
              _.formatContext,
              _.lastPushedText,
              !0,
            );
          (_.children.push(F),
            (_.lastPushedText = !1),
            (r = Sn(
              r,
              l.node,
              l.blockedBoundary,
              F,
              l.abortSet,
              l.legacyContext,
              l.context,
              l.treeContext,
            ).ping),
            f.then(r, r),
            (l.blockedSegment.formatContext = h),
            (l.legacyContext = b),
            (l.context = x),
            Ht(x));
        } else
          throw (
            (l.blockedSegment.formatContext = h),
            (l.legacyContext = b),
            (l.context = x),
            Ht(x),
            V
          );
      }
    }
    function En(r) {
      var l = r.blockedBoundary;
      ((r = r.blockedSegment), (r.status = 3), ut(this, l, r));
    }
    function br(r, l, f) {
      var h = r.blockedBoundary;
      ((r.blockedSegment.status = 3),
        h === null
          ? (l.allPendingTasks--,
            l.status !== 2 &&
              ((l.status = 2),
              l.destination !== null && l.destination.push(null)))
          : (h.pendingTasks--,
            h.forceClientRender ||
              ((h.forceClientRender = !0),
              (r = f === void 0 ? Error(t(432)) : f),
              (h.errorDigest = l.onError(r)),
              h.parentFlushed && l.clientRenderedBoundaries.push(h)),
            h.fallbackAbortableTasks.forEach(function (b) {
              return br(b, l, f);
            }),
            h.fallbackAbortableTasks.clear(),
            l.allPendingTasks--,
            l.allPendingTasks === 0 && ((h = l.onAllReady), h())));
    }
    function ct(r, l) {
      if (
        l.chunks.length === 0 &&
        l.children.length === 1 &&
        l.children[0].boundary === null
      ) {
        var f = l.children[0];
        ((f.id = l.id), (f.parentFlushed = !0), f.status === 1 && ct(r, f));
      } else r.completedSegments.push(l);
    }
    function ut(r, l, f) {
      if (l === null) {
        if (f.parentFlushed) {
          if (r.completedRootSegment !== null) throw Error(t(389));
          r.completedRootSegment = f;
        }
        (r.pendingRootTasks--,
          r.pendingRootTasks === 0 &&
            ((r.onShellError = Ct), (l = r.onShellReady), l()));
      } else
        (l.pendingTasks--,
          l.forceClientRender ||
            (l.pendingTasks === 0
              ? (f.parentFlushed && f.status === 1 && ct(l, f),
                l.parentFlushed && r.completedBoundaries.push(l),
                l.fallbackAbortableTasks.forEach(En, r),
                l.fallbackAbortableTasks.clear())
              : f.parentFlushed &&
                f.status === 1 &&
                (ct(l, f),
                l.completedSegments.length === 1 &&
                  l.parentFlushed &&
                  r.partialBoundaries.push(l))));
      (r.allPendingTasks--,
        r.allPendingTasks === 0 && ((r = r.onAllReady), r()));
    }
    function Er(r) {
      if (r.status !== 2) {
        var l = Ge,
          f = xn.current;
        xn.current = wr;
        var h = Gt;
        Gt = r.responseState;
        try {
          var b = r.pingedTasks,
            x;
          for (x = 0; x < b.length; x++) {
            var _ = b[x],
              F = r,
              V = _.blockedSegment;
            if (V.status === 0) {
              Ht(_.context);
              try {
                (Re(F, _, _.node),
                  F.responseState.generateStaticMarkup ||
                    (V.lastPushedText &&
                      V.textEmbedded &&
                      V.chunks.push("<!-- -->")),
                  _.abortSet.delete(_),
                  (V.status = 1),
                  ut(F, _.blockedBoundary, V));
              } catch (Fe) {
                if (
                  (vn(),
                  typeof Fe == "object" &&
                    Fe !== null &&
                    typeof Fe.then == "function")
                ) {
                  var G = _.ping;
                  Fe.then(G, G);
                } else {
                  (_.abortSet.delete(_), (V.status = 4));
                  var X = _.blockedBoundary,
                    we = Fe,
                    qe = bt(F, we);
                  if (
                    (X === null
                      ? Kt(F, we)
                      : (X.pendingTasks--,
                        X.forceClientRender ||
                          ((X.forceClientRender = !0),
                          (X.errorDigest = qe),
                          X.parentFlushed &&
                            F.clientRenderedBoundaries.push(X))),
                    F.allPendingTasks--,
                    F.allPendingTasks === 0)
                  ) {
                    var He = F.onAllReady;
                    He();
                  }
                }
              } finally {
              }
            }
          }
          (b.splice(0, x), r.destination !== null && Xt(r, r.destination));
        } catch (Fe) {
          (bt(r, Fe), Kt(r, Fe));
        } finally {
          ((Gt = h), (xn.current = f), f === wr && Ht(l));
        }
      }
    }
    function Et(r, l, f) {
      switch (((f.parentFlushed = !0), f.status)) {
        case 0:
          var h = (f.id = r.nextSegmentId++);
          return (
            (f.lastPushedText = !1),
            (f.textEmbedded = !1),
            (r = r.responseState),
            l.push('<template id="'),
            l.push(r.placeholderPrefix),
            (r = h.toString(16)),
            l.push(r),
            l.push('"></template>')
          );
        case 1:
          f.status = 2;
          var b = !0;
          h = f.chunks;
          var x = 0;
          f = f.children;
          for (var _ = 0; _ < f.length; _++) {
            for (b = f[_]; x < b.index; x++) l.push(h[x]);
            b = kt(r, l, b);
          }
          for (; x < h.length - 1; x++) l.push(h[x]);
          return (x < h.length && (b = l.push(h[x])), b);
        default:
          throw Error(t(390));
      }
    }
    function kt(r, l, f) {
      var h = f.boundary;
      if (h === null) return Et(r, l, f);
      if (((h.parentFlushed = !0), h.forceClientRender))
        return (
          r.responseState.generateStaticMarkup ||
            ((h = h.errorDigest),
            l.push("<!--$!-->"),
            l.push("<template"),
            h && (l.push(' data-dgst="'), (h = N(h)), l.push(h), l.push('"')),
            l.push("></template>")),
          Et(r, l, f),
          (r = r.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->")),
          r
        );
      if (0 < h.pendingTasks) {
        ((h.rootSegmentID = r.nextSegmentId++),
          0 < h.completedSegments.length && r.partialBoundaries.push(h));
        var b = r.responseState,
          x = b.nextSuspenseID++;
        return (
          (b = b.boundaryPrefix + x.toString(16)),
          (h = h.id = b),
          ee(l, r.responseState, h),
          Et(r, l, f),
          l.push("<!--/$-->")
        );
      }
      if (h.byteSize > r.progressiveChunkSize)
        return (
          (h.rootSegmentID = r.nextSegmentId++),
          r.completedBoundaries.push(h),
          ee(l, r.responseState, h.id),
          Et(r, l, f),
          l.push("<!--/$-->")
        );
      if (
        (r.responseState.generateStaticMarkup || l.push("<!--$-->"),
        (f = h.completedSegments),
        f.length !== 1)
      )
        throw Error(t(391));
      return (
        kt(r, l, f[0]),
        (r = r.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->")),
        r
      );
    }
    function kn(r, l, f) {
      return (
        xe(l, r.responseState, f.formatContext, f.id),
        kt(r, l, f),
        Me(l, f.formatContext)
      );
    }
    function _n(r, l, f) {
      for (var h = f.completedSegments, b = 0; b < h.length; b++)
        Tn(r, l, f, h[b]);
      if (
        ((h.length = 0),
        (r = r.responseState),
        (h = f.id),
        (f = f.rootSegmentID),
        l.push(r.startInlineScript),
        r.sentCompleteBoundaryFunction
          ? l.push('$RC("')
          : ((r.sentCompleteBoundaryFunction = !0),
            l.push(
              'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("',
            )),
        h === null)
      )
        throw Error(t(395));
      return (
        (f = f.toString(16)),
        l.push(h),
        l.push('","'),
        l.push(r.segmentPrefix),
        l.push(f),
        l.push('")<\/script>')
      );
    }
    function Tn(r, l, f, h) {
      if (h.status === 2) return !0;
      var b = h.id;
      if (b === -1) {
        if ((h.id = f.rootSegmentID) === -1) throw Error(t(392));
        return kn(r, l, h);
      }
      return (
        kn(r, l, h),
        (r = r.responseState),
        l.push(r.startInlineScript),
        r.sentCompleteSegmentFunction
          ? l.push('$RS("')
          : ((r.sentCompleteSegmentFunction = !0),
            l.push(
              'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("',
            )),
        l.push(r.segmentPrefix),
        (b = b.toString(16)),
        l.push(b),
        l.push('","'),
        l.push(r.placeholderPrefix),
        l.push(b),
        l.push('")<\/script>')
      );
    }
    function Xt(r, l) {
      try {
        var f = r.completedRootSegment;
        if (f !== null && r.pendingRootTasks === 0) {
          (kt(r, l, f), (r.completedRootSegment = null));
          var h = r.responseState.bootstrapChunks;
          for (f = 0; f < h.length - 1; f++) l.push(h[f]);
          f < h.length && l.push(h[f]);
        }
        var b = r.clientRenderedBoundaries,
          x;
        for (x = 0; x < b.length; x++) {
          var _ = b[x];
          h = l;
          var F = r.responseState,
            V = _.id,
            G = _.errorDigest,
            X = _.errorMessage,
            we = _.errorComponentStack;
          if (
            (h.push(F.startInlineScript),
            F.sentClientRenderFunction
              ? h.push('$RX("')
              : ((F.sentClientRenderFunction = !0),
                h.push(
                  'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("',
                )),
            V === null)
          )
            throw Error(t(395));
          if ((h.push(V), h.push('"'), G || X || we)) {
            h.push(",");
            var qe = j(G || "");
            h.push(qe);
          }
          if (X || we) {
            h.push(",");
            var He = j(X || "");
            h.push(He);
          }
          if (we) {
            h.push(",");
            var Fe = j(we);
            h.push(Fe);
          }
          if (!h.push(")<\/script>")) {
            ((r.destination = null), x++, b.splice(0, x));
            return;
          }
        }
        b.splice(0, x);
        var _t = r.completedBoundaries;
        for (x = 0; x < _t.length; x++)
          if (!_n(r, l, _t[x])) {
            ((r.destination = null), x++, _t.splice(0, x));
            return;
          }
        _t.splice(0, x);
        var tt = r.partialBoundaries;
        for (x = 0; x < tt.length; x++) {
          var Ln = tt[x];
          e: {
            ((b = r), (_ = l));
            var Tt = Ln.completedSegments;
            for (F = 0; F < Tt.length; F++)
              if (!Tn(b, _, Ln, Tt[F])) {
                (F++, Tt.splice(0, F));
                var Tr = !1;
                break e;
              }
            (Tt.splice(0, F), (Tr = !0));
          }
          if (!Tr) {
            ((r.destination = null), x++, tt.splice(0, x));
            return;
          }
        }
        tt.splice(0, x);
        var dt = r.completedBoundaries;
        for (x = 0; x < dt.length; x++)
          if (!_n(r, l, dt[x])) {
            ((r.destination = null), x++, dt.splice(0, x));
            return;
          }
        dt.splice(0, x);
      } finally {
        r.allPendingTasks === 0 &&
          r.pingedTasks.length === 0 &&
          r.clientRenderedBoundaries.length === 0 &&
          r.completedBoundaries.length === 0 &&
          l.push(null);
      }
    }
    function kr(r, l) {
      try {
        var f = r.abortableTasks;
        (f.forEach(function (h) {
          return br(h, r, l);
        }),
          f.clear(),
          r.destination !== null && Xt(r, r.destination));
      } catch (h) {
        (bt(r, h), Kt(r, h));
      }
    }
    function _r() {}
    function An(r, l, f, h) {
      var b = !1,
        x = null,
        _ = "",
        F = {
          push: function (G) {
            return (G !== null && (_ += G), !0);
          },
          destroy: function (G) {
            ((b = !0), (x = G));
          },
        },
        V = !1;
      if (
        ((r = Ao(
          r,
          se(f, l ? l.identifierPrefix : void 0),
          { insertionMode: 1, selectedValue: null },
          1 / 0,
          _r,
          void 0,
          function () {
            V = !0;
          },
        )),
        Er(r),
        kr(r, h),
        r.status === 1)
      )
        ((r.status = 2), F.destroy(r.fatalError));
      else if (r.status !== 2 && r.destination === null) {
        r.destination = F;
        try {
          Xt(r, F);
        } catch (G) {
          (bt(r, G), Kt(r, G));
        }
      }
      if (b) throw x;
      if (!V) throw Error(t(426));
      return _;
    }
    return (
      (mt.renderToNodeStream = function () {
        throw Error(t(207));
      }),
      (mt.renderToStaticMarkup = function (r, l) {
        return An(
          r,
          l,
          !0,
          'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server',
        );
      }),
      (mt.renderToStaticNodeStream = function () {
        throw Error(t(208));
      }),
      (mt.renderToString = function (r, l) {
        return An(
          r,
          l,
          !1,
          'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server',
        );
      }),
      (mt.version = "18.2.0"),
      mt
    );
  }
  var Gn = {};
  var li;
  function Xs() {
    if (li) return Gn;
    li = 1;
    var e = Fn();
    function t(o) {
      for (
        var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + o,
          u = 1;
        u < arguments.length;
        u++
      )
        a += "&args[]=" + encodeURIComponent(arguments[u]);
      return (
        "Minified React error #" +
        o +
        "; visit " +
        a +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var n = null,
      i = 0;
    function s(o, a) {
      if (a.length !== 0)
        if (512 < a.length)
          (0 < i &&
            (o.enqueue(new Uint8Array(n.buffer, 0, i)),
            (n = new Uint8Array(512)),
            (i = 0)),
            o.enqueue(a));
        else {
          var u = n.length - i;
          (u < a.length &&
            (u === 0
              ? o.enqueue(n)
              : (n.set(a.subarray(0, u), i), o.enqueue(n), (a = a.subarray(u))),
            (n = new Uint8Array(512)),
            (i = 0)),
            n.set(a, i),
            (i += a.length));
        }
    }
    function c(o, a) {
      return (s(o, a), !0);
    }
    function p(o) {
      n &&
        0 < i &&
        (o.enqueue(new Uint8Array(n.buffer, 0, i)), (n = null), (i = 0));
    }
    var g = new TextEncoder();
    function y(o) {
      return g.encode(o);
    }
    function d(o) {
      return g.encode(o);
    }
    function v(o, a) {
      typeof o.error == "function" ? o.error(a) : o.close();
    }
    var k = Object.prototype.hasOwnProperty,
      M =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      B = {},
      N = {};
    function R(o) {
      return k.call(N, o)
        ? !0
        : k.call(B, o)
          ? !1
          : M.test(o)
            ? (N[o] = !0)
            : ((B[o] = !0), !1);
    }
    function E(o, a, u, m, C, S, T) {
      ((this.acceptsBooleans = a === 2 || a === 3 || a === 4),
        (this.attributeName = m),
        (this.attributeNamespace = C),
        (this.mustUseProperty = u),
        (this.propertyName = o),
        (this.type = a),
        (this.sanitizeURL = S),
        (this.removeEmptyString = T));
    }
    var L = {};
    ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (o) {
        L[o] = new E(o, 0, !1, o, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (o) {
        var a = o[0];
        L[a] = new E(a, 1, !1, o[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(
        function (o) {
          L[o] = new E(o, 2, !1, o.toLowerCase(), null, !1, !1);
        },
      ),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (o) {
        L[o] = new E(o, 2, !1, o, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (o) {
          L[o] = new E(o, 3, !1, o.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (o) {
        L[o] = new E(o, 3, !0, o, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (o) {
        L[o] = new E(o, 4, !1, o, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (o) {
        L[o] = new E(o, 6, !1, o, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (o) {
        L[o] = new E(o, 5, !1, o.toLowerCase(), null, !1, !1);
      }));
    var I = /[\-:]([a-z])/g;
    function W(o) {
      return o[1].toUpperCase();
    }
    ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (o) {
        var a = o.replace(I, W);
        L[a] = new E(a, 1, !1, o, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (o) {
          var a = o.replace(I, W);
          L[a] = new E(a, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (o) {
        var a = o.replace(I, W);
        L[a] = new E(
          a,
          1,
          !1,
          o,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1,
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (o) {
        L[o] = new E(o, 1, !1, o.toLowerCase(), null, !1, !1);
      }),
      (L.xlinkHref = new E(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1,
      )),
      ["src", "href", "action", "formAction"].forEach(function (o) {
        L[o] = new E(o, 1, !1, o.toLowerCase(), null, !0, !0);
      }));
    var Y = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      re = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Y).forEach(function (o) {
      re.forEach(function (a) {
        ((a = a + o.charAt(0).toUpperCase() + o.substring(1)), (Y[a] = Y[o]));
      });
    });
    var O = /["'&<>]/;
    function q(o) {
      if (typeof o == "boolean" || typeof o == "number") return "" + o;
      o = "" + o;
      var a = O.exec(o);
      if (a) {
        var u = "",
          m,
          C = 0;
        for (m = a.index; m < o.length; m++) {
          switch (o.charCodeAt(m)) {
            case 34:
              a = "&quot;";
              break;
            case 38:
              a = "&amp;";
              break;
            case 39:
              a = "&#x27;";
              break;
            case 60:
              a = "&lt;";
              break;
            case 62:
              a = "&gt;";
              break;
            default:
              continue;
          }
          (C !== m && (u += o.substring(C, m)), (C = m + 1), (u += a));
        }
        o = C !== m ? u + o.substring(C, m) : u;
      }
      return o;
    }
    var ie = /([A-Z])/g,
      fe = /^ms-/,
      ve = Array.isArray,
      $ = d("<script>"),
      D = d("<\/script>"),
      Q = d('<script src="'),
      ee = d('<script type="module" src="'),
      xe = d('" async=""><\/script>'),
      Me = /(<\/|<)(s)(cript)/gi;
    function ce(o, a, u, m) {
      return "" + a + (u === "s" ? "\\u0073" : "\\u0053") + m;
    }
    function j(o, a, u, m, C) {
      ((o = o === void 0 ? "" : o),
        (a = a === void 0 ? $ : d('<script nonce="' + q(a) + '">')));
      var S = [];
      if (
        (u !== void 0 && S.push(a, y(("" + u).replace(Me, ce)), D),
        m !== void 0)
      )
        for (u = 0; u < m.length; u++) S.push(Q, y(q(m[u])), xe);
      if (C !== void 0)
        for (m = 0; m < C.length; m++) S.push(ee, y(q(C[m])), xe);
      return {
        bootstrapChunks: S,
        startInlineScript: a,
        placeholderPrefix: d(o + "P:"),
        segmentPrefix: d(o + "S:"),
        boundaryPrefix: o + "B:",
        idPrefix: o,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1,
      };
    }
    function se(o, a) {
      return { insertionMode: o, selectedValue: a };
    }
    function ke(o) {
      return se(
        o === "http://www.w3.org/2000/svg"
          ? 2
          : o === "http://www.w3.org/1998/Math/MathML"
            ? 3
            : 0,
        null,
      );
    }
    function w(o, a, u) {
      switch (a) {
        case "select":
          return se(1, u.value != null ? u.value : u.defaultValue);
        case "svg":
          return se(2, null);
        case "math":
          return se(3, null);
        case "foreignObject":
          return se(1, null);
        case "table":
          return se(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return se(5, null);
        case "colgroup":
          return se(7, null);
        case "tr":
          return se(6, null);
      }
      return 4 <= o.insertionMode || o.insertionMode === 0 ? se(1, null) : o;
    }
    var A = d("<!-- -->");
    function H(o, a, u, m) {
      return a === "" ? m : (m && o.push(A), o.push(y(q(a))), !0);
    }
    var Z = new Map(),
      K = d(' style="'),
      ae = d(":"),
      de = d(";");
    function le(o, a, u) {
      if (typeof u != "object") throw Error(t(62));
      a = !0;
      for (var m in u)
        if (k.call(u, m)) {
          var C = u[m];
          if (C != null && typeof C != "boolean" && C !== "") {
            if (m.indexOf("--") === 0) {
              var S = y(q(m));
              C = y(q(("" + C).trim()));
            } else {
              S = m;
              var T = Z.get(S);
              (T !== void 0 ||
                ((T = d(
                  q(S.replace(ie, "-$1").toLowerCase().replace(fe, "-ms-")),
                )),
                Z.set(S, T)),
                (S = T),
                (C =
                  typeof C == "number"
                    ? C === 0 || k.call(Y, m)
                      ? y("" + C)
                      : y(C + "px")
                    : y(q(("" + C).trim()))));
            }
            a ? ((a = !1), o.push(K, S, ae, C)) : o.push(de, S, ae, C);
          }
        }
      a || o.push(Ee);
    }
    var oe = d(" "),
      he = d('="'),
      Ee = d('"'),
      at = d('=""');
    function ge(o, a, u, m) {
      switch (u) {
        case "style":
          le(o, a, m);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        !(2 < u.length) ||
        (u[0] !== "o" && u[0] !== "O") ||
        (u[1] !== "n" && u[1] !== "N")
      ) {
        if (((a = L.hasOwnProperty(u) ? L[u] : null), a !== null)) {
          switch (typeof m) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!a.acceptsBooleans) return;
          }
          switch (((u = y(a.attributeName)), a.type)) {
            case 3:
              m && o.push(oe, u, at);
              break;
            case 4:
              m === !0
                ? o.push(oe, u, at)
                : m !== !1 && o.push(oe, u, he, y(q(m)), Ee);
              break;
            case 5:
              isNaN(m) || o.push(oe, u, he, y(q(m)), Ee);
              break;
            case 6:
              !isNaN(m) && 1 <= m && o.push(oe, u, he, y(q(m)), Ee);
              break;
            default:
              (a.sanitizeURL && (m = "" + m), o.push(oe, u, he, y(q(m)), Ee));
          }
        } else if (R(u)) {
          switch (typeof m) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (
                ((a = u.toLowerCase().slice(0, 5)),
                a !== "data-" && a !== "aria-")
              )
                return;
          }
          o.push(oe, y(u), he, y(q(m)), Ee);
        }
      }
    }
    var Pe = d(">"),
      Qe = d("/>");
    function lt(o, a, u) {
      if (a != null) {
        if (u != null) throw Error(t(60));
        if (typeof a != "object" || !("__html" in a)) throw Error(t(61));
        ((a = a.__html), a != null && o.push(y("" + a)));
      }
    }
    function wo(o) {
      var a = "";
      return (
        e.Children.forEach(o, function (u) {
          u != null && (a += u);
        }),
        a
      );
    }
    var $t = d(' selected=""');
    function vt(o, a, u, m) {
      o.push(Ie(u));
      var C = (u = null),
        S;
      for (S in a)
        if (k.call(a, S)) {
          var T = a[S];
          if (T != null)
            switch (S) {
              case "children":
                u = T;
                break;
              case "dangerouslySetInnerHTML":
                C = T;
                break;
              default:
                ge(o, m, S, T);
            }
        }
      return (
        o.push(Pe),
        lt(o, C, u),
        typeof u == "string" ? (o.push(y(q(u))), null) : u
      );
    }
    var qt = d(`
`),
      ar = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
      Ge = new Map();
    function Ie(o) {
      var a = Ge.get(o);
      if (a === void 0) {
        if (!ar.test(o)) throw Error(t(65, o));
        ((a = d("<" + o)), Ge.set(o, a));
      }
      return a;
    }
    var lr = d("<!DOCTYPE html>");
    function cr(o, a, u, m, C) {
      switch (a) {
        case "select":
          o.push(Ie("select"));
          var S = null,
            T = null;
          for (J in u)
            if (k.call(u, J)) {
              var P = u[J];
              if (P != null)
                switch (J) {
                  case "children":
                    S = P;
                    break;
                  case "dangerouslySetInnerHTML":
                    T = P;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    ge(o, m, J, P);
                }
            }
          return (o.push(Pe), lt(o, T, S), S);
        case "option":
          ((T = C.selectedValue), o.push(Ie("option")));
          var z = (P = null),
            te = null,
            J = null;
          for (S in u)
            if (k.call(u, S)) {
              var ye = u[S];
              if (ye != null)
                switch (S) {
                  case "children":
                    P = ye;
                    break;
                  case "selected":
                    te = ye;
                    break;
                  case "dangerouslySetInnerHTML":
                    J = ye;
                    break;
                  case "value":
                    z = ye;
                  default:
                    ge(o, m, S, ye);
                }
            }
          if (T != null)
            if (((u = z !== null ? "" + z : wo(P)), ve(T))) {
              for (m = 0; m < T.length; m++)
                if ("" + T[m] === u) {
                  o.push($t);
                  break;
                }
            } else "" + T === u && o.push($t);
          else te && o.push($t);
          return (o.push(Pe), lt(o, J, P), P);
        case "textarea":
          (o.push(Ie("textarea")), (J = T = S = null));
          for (P in u)
            if (k.call(u, P) && ((z = u[P]), z != null))
              switch (P) {
                case "children":
                  J = z;
                  break;
                case "value":
                  S = z;
                  break;
                case "defaultValue":
                  T = z;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(t(91));
                default:
                  ge(o, m, P, z);
              }
          if ((S === null && T !== null && (S = T), o.push(Pe), J != null)) {
            if (S != null) throw Error(t(92));
            if (ve(J) && 1 < J.length) throw Error(t(93));
            S = "" + J;
          }
          return (
            typeof S == "string" &&
              S[0] ===
                `
` &&
              o.push(qt),
            S !== null && o.push(y(q("" + S))),
            null
          );
        case "input":
          (o.push(Ie("input")), (z = J = P = S = null));
          for (T in u)
            if (k.call(u, T) && ((te = u[T]), te != null))
              switch (T) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(t(399, "input"));
                case "defaultChecked":
                  z = te;
                  break;
                case "defaultValue":
                  P = te;
                  break;
                case "checked":
                  J = te;
                  break;
                case "value":
                  S = te;
                  break;
                default:
                  ge(o, m, T, te);
              }
          return (
            J !== null
              ? ge(o, m, "checked", J)
              : z !== null && ge(o, m, "checked", z),
            S !== null
              ? ge(o, m, "value", S)
              : P !== null && ge(o, m, "value", P),
            o.push(Qe),
            null
          );
        case "menuitem":
          o.push(Ie("menuitem"));
          for (var Oe in u)
            if (k.call(u, Oe) && ((S = u[Oe]), S != null))
              switch (Oe) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(t(400));
                default:
                  ge(o, m, Oe, S);
              }
          return (o.push(Pe), null);
        case "title":
          (o.push(Ie("title")), (S = null));
          for (ye in u)
            if (k.call(u, ye) && ((T = u[ye]), T != null))
              switch (ye) {
                case "children":
                  S = T;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(t(434));
                default:
                  ge(o, m, ye, T);
              }
          return (o.push(Pe), S);
        case "listing":
        case "pre":
          (o.push(Ie(a)), (T = S = null));
          for (z in u)
            if (k.call(u, z) && ((P = u[z]), P != null))
              switch (z) {
                case "children":
                  S = P;
                  break;
                case "dangerouslySetInnerHTML":
                  T = P;
                  break;
                default:
                  ge(o, m, z, P);
              }
          if ((o.push(Pe), T != null)) {
            if (S != null) throw Error(t(60));
            if (typeof T != "object" || !("__html" in T)) throw Error(t(61));
            ((u = T.__html),
              u != null &&
                (typeof u == "string" &&
                0 < u.length &&
                u[0] ===
                  `
`
                  ? o.push(qt, y(u))
                  : o.push(y("" + u))));
          }
          return (
            typeof S == "string" &&
              S[0] ===
                `
` &&
              o.push(qt),
            S
          );
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          o.push(Ie(a));
          for (var Ue in u)
            if (k.call(u, Ue) && ((S = u[Ue]), S != null))
              switch (Ue) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(t(399, a));
                default:
                  ge(o, m, Ue, S);
              }
          return (o.push(Qe), null);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return vt(o, u, a, m);
        case "html":
          return (C.insertionMode === 0 && o.push(lr), vt(o, u, a, m));
        default:
          if (a.indexOf("-") === -1 && typeof u.is != "string")
            return vt(o, u, a, m);
          (o.push(Ie(a)), (T = S = null));
          for (te in u)
            if (k.call(u, te) && ((P = u[te]), P != null))
              switch (te) {
                case "children":
                  S = P;
                  break;
                case "dangerouslySetInnerHTML":
                  T = P;
                  break;
                case "style":
                  le(o, m, P);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  R(te) &&
                    typeof P != "function" &&
                    typeof P != "symbol" &&
                    o.push(oe, y(te), he, y(q(P)), Ee);
              }
          return (o.push(Pe), lt(o, T, S), S);
      }
    }
    var ur = d("</"),
      dr = d(">"),
      Ht = d('<template id="'),
      fr = d('"></template>'),
      pr = d("<!--$-->"),
      vo = d('<!--$?--><template id="'),
      gn = d('"></template>'),
      Ut = d("<!--$!-->"),
      xo = d("<!--/$-->"),
      So = d("<template"),
      Co = d('"'),
      bo = d(' data-dgst="');
    (d(' data-msg="'), d(' data-stck="'));
    var Eo = d("></template>");
    function Be(o, a, u) {
      if ((s(o, vo), u === null)) throw Error(t(395));
      return (s(o, u), c(o, gn));
    }
    var yn = d('<div hidden id="'),
      jt = d('">'),
      ue = d("</div>"),
      xt = d('<svg aria-hidden="true" style="display:none" id="'),
      Wt = d('">'),
      St = d("</svg>"),
      Ze = d('<math aria-hidden="true" style="display:none" id="'),
      Vt = d('">'),
      et = d("</math>"),
      mr = d('<table hidden id="'),
      wn = d('">'),
      vn = d("</table>"),
      hr = d('<table hidden><tbody id="'),
      gr = d('">'),
      yr = d("</tbody></table>"),
      ko = d('<table hidden><tr id="'),
      _o = d('">'),
      zt = d("</tr></table>"),
      wr = d('<table hidden><colgroup id="'),
      Gt = d('">'),
      xn = d("</colgroup></table>");
    function To(o, a, u, m) {
      switch (u.insertionMode) {
        case 0:
        case 1:
          return (
            s(o, yn),
            s(o, a.segmentPrefix),
            s(o, y(m.toString(16))),
            c(o, jt)
          );
        case 2:
          return (
            s(o, xt),
            s(o, a.segmentPrefix),
            s(o, y(m.toString(16))),
            c(o, Wt)
          );
        case 3:
          return (
            s(o, Ze),
            s(o, a.segmentPrefix),
            s(o, y(m.toString(16))),
            c(o, Vt)
          );
        case 4:
          return (
            s(o, mr),
            s(o, a.segmentPrefix),
            s(o, y(m.toString(16))),
            c(o, wn)
          );
        case 5:
          return (
            s(o, hr),
            s(o, a.segmentPrefix),
            s(o, y(m.toString(16))),
            c(o, gr)
          );
        case 6:
          return (
            s(o, ko),
            s(o, a.segmentPrefix),
            s(o, y(m.toString(16))),
            c(o, _o)
          );
        case 7:
          return (
            s(o, wr),
            s(o, a.segmentPrefix),
            s(o, y(m.toString(16))),
            c(o, Gt)
          );
        default:
          throw Error(t(397));
      }
    }
    function Ct(o, a) {
      switch (a.insertionMode) {
        case 0:
        case 1:
          return c(o, ue);
        case 2:
          return c(o, St);
        case 3:
          return c(o, et);
        case 4:
          return c(o, vn);
        case 5:
          return c(o, yr);
        case 6:
          return c(o, zt);
        case 7:
          return c(o, xn);
        default:
          throw Error(t(397));
      }
    }
    var Ao = d(
        'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("',
      ),
      Sn = d('$RS("'),
      Zt = d('","'),
      bt = d('")<\/script>'),
      Kt = d(
        'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("',
      ),
      vr = d('$RC("'),
      xr = d('","'),
      Sr = d('")<\/script>'),
      Cn = d(
        'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("',
      ),
      Re = d('$RX("'),
      Cr = d('"'),
      bn = d(")<\/script>"),
      En = d(","),
      br = /[<\u2028\u2029]/g;
    function ct(o) {
      return JSON.stringify(o).replace(br, function (a) {
        switch (a) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React",
            );
        }
      });
    }
    var ut = Object.assign,
      Er = Symbol.for("react.element"),
      Et = Symbol.for("react.portal"),
      kt = Symbol.for("react.fragment"),
      kn = Symbol.for("react.strict_mode"),
      _n = Symbol.for("react.profiler"),
      Tn = Symbol.for("react.provider"),
      Xt = Symbol.for("react.context"),
      kr = Symbol.for("react.forward_ref"),
      _r = Symbol.for("react.suspense"),
      An = Symbol.for("react.suspense_list"),
      r = Symbol.for("react.memo"),
      l = Symbol.for("react.lazy"),
      f = Symbol.for("react.scope"),
      h = Symbol.for("react.debug_trace_mode"),
      b = Symbol.for("react.legacy_hidden"),
      x = Symbol.for("react.default_value"),
      _ = Symbol.iterator;
    function F(o) {
      if (o == null) return null;
      if (typeof o == "function") return o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case kt:
          return "Fragment";
        case Et:
          return "Portal";
        case _n:
          return "Profiler";
        case kn:
          return "StrictMode";
        case _r:
          return "Suspense";
        case An:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case Xt:
            return (o.displayName || "Context") + ".Consumer";
          case Tn:
            return (o._context.displayName || "Context") + ".Provider";
          case kr:
            var a = o.render;
            return (
              (o = o.displayName),
              o ||
                ((o = a.displayName || a.name || ""),
                (o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef")),
              o
            );
          case r:
            return (
              (a = o.displayName || null),
              a !== null ? a : F(o.type) || "Memo"
            );
          case l:
            ((a = o._payload), (o = o._init));
            try {
              return F(o(a));
            } catch {}
        }
      return null;
    }
    var V = {};
    function G(o, a) {
      if (((o = o.contextTypes), !o)) return V;
      var u = {},
        m;
      for (m in o) u[m] = a[m];
      return u;
    }
    var X = null;
    function we(o, a) {
      if (o !== a) {
        ((o.context._currentValue = o.parentValue), (o = o.parent));
        var u = a.parent;
        if (o === null) {
          if (u !== null) throw Error(t(401));
        } else {
          if (u === null) throw Error(t(401));
          we(o, u);
        }
        a.context._currentValue = a.value;
      }
    }
    function qe(o) {
      ((o.context._currentValue = o.parentValue),
        (o = o.parent),
        o !== null && qe(o));
    }
    function He(o) {
      var a = o.parent;
      (a !== null && He(a), (o.context._currentValue = o.value));
    }
    function Fe(o, a) {
      if (
        ((o.context._currentValue = o.parentValue), (o = o.parent), o === null)
      )
        throw Error(t(402));
      o.depth === a.depth ? we(o, a) : Fe(o, a);
    }
    function _t(o, a) {
      var u = a.parent;
      if (u === null) throw Error(t(402));
      (o.depth === u.depth ? we(o, u) : _t(o, u),
        (a.context._currentValue = a.value));
    }
    function tt(o) {
      var a = X;
      a !== o &&
        (a === null
          ? He(o)
          : o === null
            ? qe(a)
            : a.depth === o.depth
              ? we(a, o)
              : a.depth > o.depth
                ? Fe(a, o)
                : _t(a, o),
        (X = o));
    }
    var Ln = {
      isMounted: function () {
        return !1;
      },
      enqueueSetState: function (o, a) {
        ((o = o._reactInternals), o.queue !== null && o.queue.push(a));
      },
      enqueueReplaceState: function (o, a) {
        ((o = o._reactInternals), (o.replace = !0), (o.queue = [a]));
      },
      enqueueForceUpdate: function () {},
    };
    function Tt(o, a, u, m) {
      var C = o.state !== void 0 ? o.state : null;
      ((o.updater = Ln), (o.props = u), (o.state = C));
      var S = { queue: [], replace: !1 };
      o._reactInternals = S;
      var T = a.contextType;
      if (
        ((o.context = typeof T == "object" && T !== null ? T._currentValue : m),
        (T = a.getDerivedStateFromProps),
        typeof T == "function" &&
          ((T = T(u, C)), (C = T == null ? C : ut({}, C, T)), (o.state = C)),
        typeof a.getDerivedStateFromProps != "function" &&
          typeof o.getSnapshotBeforeUpdate != "function" &&
          (typeof o.UNSAFE_componentWillMount == "function" ||
            typeof o.componentWillMount == "function"))
      )
        if (
          ((a = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          a !== o.state && Ln.enqueueReplaceState(o, o.state, null),
          S.queue !== null && 0 < S.queue.length)
        )
          if (
            ((a = S.queue),
            (T = S.replace),
            (S.queue = null),
            (S.replace = !1),
            T && a.length === 1)
          )
            o.state = a[0];
          else {
            for (
              S = T ? a[0] : o.state, C = !0, T = T ? 1 : 0;
              T < a.length;
              T++
            ) {
              var P = a[T];
              ((P = typeof P == "function" ? P.call(o, S, u, m) : P),
                P != null && (C ? ((C = !1), (S = ut({}, S, P))) : ut(S, P)));
            }
            o.state = S;
          }
        else S.queue = null;
    }
    var Tr = { id: 1, overflow: "" };
    function dt(o, a, u) {
      var m = o.id;
      o = o.overflow;
      var C = 32 - Ar(m) - 1;
      ((m &= ~(1 << C)), (u += 1));
      var S = 32 - Ar(a) + C;
      if (30 < S) {
        var T = C - (C % 5);
        return (
          (S = (m & ((1 << T) - 1)).toString(32)),
          (m >>= T),
          (C -= T),
          { id: (1 << (32 - Ar(a) + C)) | (u << C) | m, overflow: S + o }
        );
      }
      return { id: (1 << S) | (u << C) | m, overflow: o };
    }
    var Ar = Math.clz32 ? Math.clz32 : vl,
      yl = Math.log,
      wl = Math.LN2;
    function vl(o) {
      return ((o >>>= 0), o === 0 ? 32 : (31 - ((yl(o) / wl) | 0)) | 0);
    }
    function xl(o, a) {
      return (o === a && (o !== 0 || 1 / o === 1 / a)) || (o !== o && a !== a);
    }
    var Sl = typeof Object.is == "function" ? Object.is : xl,
      nt = null,
      Lo = null,
      Lr = null,
      pe = null,
      In = !1,
      Ir = !1,
      Rn = 0,
      ft = null,
      Rr = 0;
    function At() {
      if (nt === null) throw Error(t(321));
      return nt;
    }
    function Ki() {
      if (0 < Rr) throw Error(t(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function Io() {
      return (
        pe === null
          ? Lr === null
            ? ((In = !1), (Lr = pe = Ki()))
            : ((In = !0), (pe = Lr))
          : pe.next === null
            ? ((In = !1), (pe = pe.next = Ki()))
            : ((In = !0), (pe = pe.next)),
        pe
      );
    }
    function Ro() {
      ((Lo = nt = null), (Ir = !1), (Lr = null), (Rr = 0), (pe = ft = null));
    }
    function Xi(o, a) {
      return typeof a == "function" ? a(o) : a;
    }
    function Yi(o, a, u) {
      if (((nt = At()), (pe = Io()), In)) {
        var m = pe.queue;
        if (
          ((a = m.dispatch), ft !== null && ((u = ft.get(m)), u !== void 0))
        ) {
          (ft.delete(m), (m = pe.memoizedState));
          do ((m = o(m, u.action)), (u = u.next));
          while (u !== null);
          return ((pe.memoizedState = m), [m, a]);
        }
        return [pe.memoizedState, a];
      }
      return (
        (o =
          o === Xi
            ? typeof a == "function"
              ? a()
              : a
            : u !== void 0
              ? u(a)
              : a),
        (pe.memoizedState = o),
        (o = pe.queue = { last: null, dispatch: null }),
        (o = o.dispatch = Cl.bind(null, nt, o)),
        [pe.memoizedState, o]
      );
    }
    function Ji(o, a) {
      if (
        ((nt = At()), (pe = Io()), (a = a === void 0 ? null : a), pe !== null)
      ) {
        var u = pe.memoizedState;
        if (u !== null && a !== null) {
          var m = u[1];
          e: if (m === null) m = !1;
          else {
            for (var C = 0; C < m.length && C < a.length; C++)
              if (!Sl(a[C], m[C])) {
                m = !1;
                break e;
              }
            m = !0;
          }
          if (m) return u[0];
        }
      }
      return ((o = o()), (pe.memoizedState = [o, a]), o);
    }
    function Cl(o, a, u) {
      if (25 <= Rr) throw Error(t(301));
      if (o === nt)
        if (
          ((Ir = !0),
          (o = { action: u, next: null }),
          ft === null && (ft = new Map()),
          (u = ft.get(a)),
          u === void 0)
        )
          ft.set(a, o);
        else {
          for (a = u; a.next !== null; ) a = a.next;
          a.next = o;
        }
    }
    function bl() {
      throw Error(t(394));
    }
    function Mr() {}
    var Qi = {
        readContext: function (o) {
          return o._currentValue;
        },
        useContext: function (o) {
          return (At(), o._currentValue);
        },
        useMemo: Ji,
        useReducer: Yi,
        useRef: function (o) {
          ((nt = At()), (pe = Io()));
          var a = pe.memoizedState;
          return a === null
            ? ((o = { current: o }), (pe.memoizedState = o))
            : a;
        },
        useState: function (o) {
          return Yi(Xi, o);
        },
        useInsertionEffect: Mr,
        useLayoutEffect: function () {},
        useCallback: function (o, a) {
          return Ji(function () {
            return o;
          }, a);
        },
        useImperativeHandle: Mr,
        useEffect: Mr,
        useDebugValue: Mr,
        useDeferredValue: function (o) {
          return (At(), o);
        },
        useTransition: function () {
          return (At(), [!1, bl]);
        },
        useId: function () {
          var o = Lo.treeContext,
            a = o.overflow;
          ((o = o.id), (o = (o & ~(1 << (32 - Ar(o) - 1))).toString(32) + a));
          var u = Pr;
          if (u === null) throw Error(t(404));
          return (
            (a = Rn++),
            (o = ":" + u.idPrefix + "R" + o),
            0 < a && (o += "H" + a.toString(32)),
            o + ":"
          );
        },
        useMutableSource: function (o, a) {
          return (At(), a(o._source));
        },
        useSyncExternalStore: function (o, a, u) {
          if (u === void 0) throw Error(t(407));
          return u();
        },
      },
      Pr = null,
      Mo =
        e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          .ReactCurrentDispatcher;
    function El(o) {
      return (console.error(o), null);
    }
    function Mn() {}
    function kl(o, a, u, m, C, S, T, P, z) {
      var te = [],
        J = new Set();
      return (
        (a = {
          destination: null,
          responseState: a,
          progressiveChunkSize: m === void 0 ? 12800 : m,
          status: 0,
          fatalError: null,
          nextSegmentId: 0,
          allPendingTasks: 0,
          pendingRootTasks: 0,
          completedRootSegment: null,
          abortableTasks: J,
          pingedTasks: te,
          clientRenderedBoundaries: [],
          completedBoundaries: [],
          partialBoundaries: [],
          onError: C === void 0 ? El : C,
          onAllReady: S === void 0 ? Mn : S,
          onShellReady: T === void 0 ? Mn : T,
          onShellError: P === void 0 ? Mn : P,
          onFatalError: z === void 0 ? Mn : z,
        }),
        (u = Fr(a, 0, null, u, !1, !1)),
        (u.parentFlushed = !0),
        (o = Po(a, o, null, u, J, V, null, Tr)),
        te.push(o),
        a
      );
    }
    function Po(o, a, u, m, C, S, T, P) {
      (o.allPendingTasks++,
        u === null ? o.pendingRootTasks++ : u.pendingTasks++);
      var z = {
        node: a,
        ping: function () {
          var te = o.pingedTasks;
          (te.push(z), te.length === 1 && ss(o));
        },
        blockedBoundary: u,
        blockedSegment: m,
        abortSet: C,
        legacyContext: S,
        context: T,
        treeContext: P,
      };
      return (C.add(z), z);
    }
    function Fr(o, a, u, m, C, S) {
      return {
        status: 0,
        id: -1,
        index: a,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: m,
        boundary: u,
        lastPushedText: C,
        textEmbedded: S,
      };
    }
    function Pn(o, a) {
      if (((o = o.onError(a)), o != null && typeof o != "string"))
        throw Error(
          'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
            typeof o +
            '" instead',
        );
      return o;
    }
    function Nr(o, a) {
      var u = o.onShellError;
      (u(a),
        (u = o.onFatalError),
        u(a),
        o.destination !== null
          ? ((o.status = 2), v(o.destination, a))
          : ((o.status = 1), (o.fatalError = a)));
    }
    function es(o, a, u, m, C) {
      for (nt = {}, Lo = a, Rn = 0, o = u(m, C); Ir; )
        ((Ir = !1), (Rn = 0), (Rr += 1), (pe = null), (o = u(m, C)));
      return (Ro(), o);
    }
    function ts(o, a, u, m) {
      var C = u.render(),
        S = m.childContextTypes;
      if (S != null) {
        var T = a.legacyContext;
        if (typeof u.getChildContext != "function") m = T;
        else {
          u = u.getChildContext();
          for (var P in u)
            if (!(P in S)) throw Error(t(108, F(m) || "Unknown", P));
          m = ut({}, T, u);
        }
        ((a.legacyContext = m), Ne(o, a, C), (a.legacyContext = T));
      } else Ne(o, a, C);
    }
    function ns(o, a) {
      if (o && o.defaultProps) {
        ((a = ut({}, a)), (o = o.defaultProps));
        for (var u in o) a[u] === void 0 && (a[u] = o[u]);
        return a;
      }
      return a;
    }
    function Fo(o, a, u, m, C) {
      if (typeof u == "function")
        if (u.prototype && u.prototype.isReactComponent) {
          C = G(u, a.legacyContext);
          var S = u.contextType;
          ((S = new u(
            m,
            typeof S == "object" && S !== null ? S._currentValue : C,
          )),
            Tt(S, u, m, C),
            ts(o, a, S, u));
        } else {
          ((S = G(u, a.legacyContext)), (C = es(o, a, u, m, S)));
          var T = Rn !== 0;
          if (
            typeof C == "object" &&
            C !== null &&
            typeof C.render == "function" &&
            C.$$typeof === void 0
          )
            (Tt(C, u, m, S), ts(o, a, C, u));
          else if (T) {
            ((m = a.treeContext), (a.treeContext = dt(m, 1, 0)));
            try {
              Ne(o, a, C);
            } finally {
              a.treeContext = m;
            }
          } else Ne(o, a, C);
        }
      else if (typeof u == "string") {
        switch (
          ((C = a.blockedSegment),
          (S = cr(C.chunks, u, m, o.responseState, C.formatContext)),
          (C.lastPushedText = !1),
          (T = C.formatContext),
          (C.formatContext = w(T, u, m)),
          No(o, a, S),
          (C.formatContext = T),
          u)
        ) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            C.chunks.push(ur, y(u), dr);
        }
        C.lastPushedText = !1;
      } else {
        switch (u) {
          case b:
          case h:
          case kn:
          case _n:
          case kt:
            Ne(o, a, m.children);
            return;
          case An:
            Ne(o, a, m.children);
            return;
          case f:
            throw Error(t(343));
          case _r:
            e: {
              ((u = a.blockedBoundary),
                (C = a.blockedSegment),
                (S = m.fallback),
                (m = m.children),
                (T = new Set()));
              var P = {
                  id: null,
                  rootSegmentID: -1,
                  parentFlushed: !1,
                  pendingTasks: 0,
                  forceClientRender: !1,
                  completedSegments: [],
                  byteSize: 0,
                  fallbackAbortableTasks: T,
                  errorDigest: null,
                },
                z = Fr(o, C.chunks.length, P, C.formatContext, !1, !1);
              (C.children.push(z), (C.lastPushedText = !1));
              var te = Fr(o, 0, null, C.formatContext, !1, !1);
              ((te.parentFlushed = !0),
                (a.blockedBoundary = P),
                (a.blockedSegment = te));
              try {
                if (
                  (No(o, a, m),
                  te.lastPushedText && te.textEmbedded && te.chunks.push(A),
                  (te.status = 1),
                  Or(P, te),
                  P.pendingTasks === 0)
                )
                  break e;
              } catch (J) {
                ((te.status = 4),
                  (P.forceClientRender = !0),
                  (P.errorDigest = Pn(o, J)));
              } finally {
                ((a.blockedBoundary = u), (a.blockedSegment = C));
              }
              ((a = Po(
                o,
                S,
                u,
                z,
                T,
                a.legacyContext,
                a.context,
                a.treeContext,
              )),
                o.pingedTasks.push(a));
            }
            return;
        }
        if (typeof u == "object" && u !== null)
          switch (u.$$typeof) {
            case kr:
              if (((m = es(o, a, u.render, m, C)), Rn !== 0)) {
                ((u = a.treeContext), (a.treeContext = dt(u, 1, 0)));
                try {
                  Ne(o, a, m);
                } finally {
                  a.treeContext = u;
                }
              } else Ne(o, a, m);
              return;
            case r:
              ((u = u.type), (m = ns(u, m)), Fo(o, a, u, m, C));
              return;
            case Tn:
              if (
                ((C = m.children),
                (u = u._context),
                (m = m.value),
                (S = u._currentValue),
                (u._currentValue = m),
                (T = X),
                (X = m =
                  {
                    parent: T,
                    depth: T === null ? 0 : T.depth + 1,
                    context: u,
                    parentValue: S,
                    value: m,
                  }),
                (a.context = m),
                Ne(o, a, C),
                (o = X),
                o === null)
              )
                throw Error(t(403));
              ((m = o.parentValue),
                (o.context._currentValue =
                  m === x ? o.context._defaultValue : m),
                (o = X = o.parent),
                (a.context = o));
              return;
            case Xt:
              ((m = m.children), (m = m(u._currentValue)), Ne(o, a, m));
              return;
            case l:
              ((C = u._init),
                (u = C(u._payload)),
                (m = ns(u, m)),
                Fo(o, a, u, m, void 0));
              return;
          }
        throw Error(t(130, u == null ? u : typeof u, ""));
      }
    }
    function Ne(o, a, u) {
      if (((a.node = u), typeof u == "object" && u !== null)) {
        switch (u.$$typeof) {
          case Er:
            Fo(o, a, u.type, u.props, u.ref);
            return;
          case Et:
            throw Error(t(257));
          case l:
            var m = u._init;
            ((u = m(u._payload)), Ne(o, a, u));
            return;
        }
        if (ve(u)) {
          rs(o, a, u);
          return;
        }
        if (
          (u === null || typeof u != "object"
            ? (m = null)
            : ((m = (_ && u[_]) || u["@@iterator"]),
              (m = typeof m == "function" ? m : null)),
          m && (m = m.call(u)))
        ) {
          if (((u = m.next()), !u.done)) {
            var C = [];
            do (C.push(u.value), (u = m.next()));
            while (!u.done);
            rs(o, a, C);
          }
          return;
        }
        throw (
          (o = Object.prototype.toString.call(u)),
          Error(
            t(
              31,
              o === "[object Object]"
                ? "object with keys {" + Object.keys(u).join(", ") + "}"
                : o,
            ),
          )
        );
      }
      typeof u == "string"
        ? ((m = a.blockedSegment),
          (m.lastPushedText = H(
            a.blockedSegment.chunks,
            u,
            o.responseState,
            m.lastPushedText,
          )))
        : typeof u == "number" &&
          ((m = a.blockedSegment),
          (m.lastPushedText = H(
            a.blockedSegment.chunks,
            "" + u,
            o.responseState,
            m.lastPushedText,
          )));
    }
    function rs(o, a, u) {
      for (var m = u.length, C = 0; C < m; C++) {
        var S = a.treeContext;
        a.treeContext = dt(S, m, C);
        try {
          No(o, a, u[C]);
        } finally {
          a.treeContext = S;
        }
      }
    }
    function No(o, a, u) {
      var m = a.blockedSegment.formatContext,
        C = a.legacyContext,
        S = a.context;
      try {
        return Ne(o, a, u);
      } catch (z) {
        if (
          (Ro(),
          typeof z == "object" && z !== null && typeof z.then == "function")
        ) {
          u = z;
          var T = a.blockedSegment,
            P = Fr(
              o,
              T.chunks.length,
              null,
              T.formatContext,
              T.lastPushedText,
              !0,
            );
          (T.children.push(P),
            (T.lastPushedText = !1),
            (o = Po(
              o,
              a.node,
              a.blockedBoundary,
              P,
              a.abortSet,
              a.legacyContext,
              a.context,
              a.treeContext,
            ).ping),
            u.then(o, o),
            (a.blockedSegment.formatContext = m),
            (a.legacyContext = C),
            (a.context = S),
            tt(S));
        } else
          throw (
            (a.blockedSegment.formatContext = m),
            (a.legacyContext = C),
            (a.context = S),
            tt(S),
            z
          );
      }
    }
    function _l(o) {
      var a = o.blockedBoundary;
      ((o = o.blockedSegment), (o.status = 3), is(this, a, o));
    }
    function os(o, a, u) {
      var m = o.blockedBoundary;
      ((o.blockedSegment.status = 3),
        m === null
          ? (a.allPendingTasks--,
            a.status !== 2 &&
              ((a.status = 2), a.destination !== null && a.destination.close()))
          : (m.pendingTasks--,
            m.forceClientRender ||
              ((m.forceClientRender = !0),
              (o = u === void 0 ? Error(t(432)) : u),
              (m.errorDigest = a.onError(o)),
              m.parentFlushed && a.clientRenderedBoundaries.push(m)),
            m.fallbackAbortableTasks.forEach(function (C) {
              return os(C, a, u);
            }),
            m.fallbackAbortableTasks.clear(),
            a.allPendingTasks--,
            a.allPendingTasks === 0 && ((m = a.onAllReady), m())));
    }
    function Or(o, a) {
      if (
        a.chunks.length === 0 &&
        a.children.length === 1 &&
        a.children[0].boundary === null
      ) {
        var u = a.children[0];
        ((u.id = a.id), (u.parentFlushed = !0), u.status === 1 && Or(o, u));
      } else o.completedSegments.push(a);
    }
    function is(o, a, u) {
      if (a === null) {
        if (u.parentFlushed) {
          if (o.completedRootSegment !== null) throw Error(t(389));
          o.completedRootSegment = u;
        }
        (o.pendingRootTasks--,
          o.pendingRootTasks === 0 &&
            ((o.onShellError = Mn), (a = o.onShellReady), a()));
      } else
        (a.pendingTasks--,
          a.forceClientRender ||
            (a.pendingTasks === 0
              ? (u.parentFlushed && u.status === 1 && Or(a, u),
                a.parentFlushed && o.completedBoundaries.push(a),
                a.fallbackAbortableTasks.forEach(_l, o),
                a.fallbackAbortableTasks.clear())
              : u.parentFlushed &&
                u.status === 1 &&
                (Or(a, u),
                a.completedSegments.length === 1 &&
                  a.parentFlushed &&
                  o.partialBoundaries.push(a))));
      (o.allPendingTasks--,
        o.allPendingTasks === 0 && ((o = o.onAllReady), o()));
    }
    function ss(o) {
      if (o.status !== 2) {
        var a = X,
          u = Mo.current;
        Mo.current = Qi;
        var m = Pr;
        Pr = o.responseState;
        try {
          var C = o.pingedTasks,
            S;
          for (S = 0; S < C.length; S++) {
            var T = C[S],
              P = o,
              z = T.blockedSegment;
            if (z.status === 0) {
              tt(T.context);
              try {
                (Ne(P, T, T.node),
                  z.lastPushedText && z.textEmbedded && z.chunks.push(A),
                  T.abortSet.delete(T),
                  (z.status = 1),
                  is(P, T.blockedBoundary, z));
              } catch (je) {
                if (
                  (Ro(),
                  typeof je == "object" &&
                    je !== null &&
                    typeof je.then == "function")
                ) {
                  var te = T.ping;
                  je.then(te, te);
                } else {
                  (T.abortSet.delete(T), (z.status = 4));
                  var J = T.blockedBoundary,
                    ye = je,
                    Oe = Pn(P, ye);
                  if (
                    (J === null
                      ? Nr(P, ye)
                      : (J.pendingTasks--,
                        J.forceClientRender ||
                          ((J.forceClientRender = !0),
                          (J.errorDigest = Oe),
                          J.parentFlushed &&
                            P.clientRenderedBoundaries.push(J))),
                    P.allPendingTasks--,
                    P.allPendingTasks === 0)
                  ) {
                    var Ue = P.onAllReady;
                    Ue();
                  }
                }
              } finally {
              }
            }
          }
          (C.splice(0, S), o.destination !== null && Oo(o, o.destination));
        } catch (je) {
          (Pn(o, je), Nr(o, je));
        } finally {
          ((Pr = m), (Mo.current = u), u === Qi && tt(a));
        }
      }
    }
    function Dr(o, a, u) {
      switch (((u.parentFlushed = !0), u.status)) {
        case 0:
          var m = (u.id = o.nextSegmentId++);
          return (
            (u.lastPushedText = !1),
            (u.textEmbedded = !1),
            (o = o.responseState),
            s(a, Ht),
            s(a, o.placeholderPrefix),
            (o = y(m.toString(16))),
            s(a, o),
            c(a, fr)
          );
        case 1:
          u.status = 2;
          var C = !0;
          m = u.chunks;
          var S = 0;
          u = u.children;
          for (var T = 0; T < u.length; T++) {
            for (C = u[T]; S < C.index; S++) s(a, m[S]);
            C = Br(o, a, C);
          }
          for (; S < m.length - 1; S++) s(a, m[S]);
          return (S < m.length && (C = c(a, m[S])), C);
        default:
          throw Error(t(390));
      }
    }
    function Br(o, a, u) {
      var m = u.boundary;
      if (m === null) return Dr(o, a, u);
      if (((m.parentFlushed = !0), m.forceClientRender))
        ((m = m.errorDigest),
          c(a, Ut),
          s(a, So),
          m && (s(a, bo), s(a, y(q(m))), s(a, Co)),
          c(a, Eo),
          Dr(o, a, u));
      else if (0 < m.pendingTasks) {
        ((m.rootSegmentID = o.nextSegmentId++),
          0 < m.completedSegments.length && o.partialBoundaries.push(m));
        var C = o.responseState,
          S = C.nextSuspenseID++;
        ((C = d(C.boundaryPrefix + S.toString(16))),
          (m = m.id = C),
          Be(a, o.responseState, m),
          Dr(o, a, u));
      } else if (m.byteSize > o.progressiveChunkSize)
        ((m.rootSegmentID = o.nextSegmentId++),
          o.completedBoundaries.push(m),
          Be(a, o.responseState, m.id),
          Dr(o, a, u));
      else {
        if ((c(a, pr), (u = m.completedSegments), u.length !== 1))
          throw Error(t(391));
        Br(o, a, u[0]);
      }
      return c(a, xo);
    }
    function as(o, a, u) {
      return (
        To(a, o.responseState, u.formatContext, u.id),
        Br(o, a, u),
        Ct(a, u.formatContext)
      );
    }
    function ls(o, a, u) {
      for (var m = u.completedSegments, C = 0; C < m.length; C++)
        cs(o, a, u, m[C]);
      if (
        ((m.length = 0),
        (o = o.responseState),
        (m = u.id),
        (u = u.rootSegmentID),
        s(a, o.startInlineScript),
        o.sentCompleteBoundaryFunction
          ? s(a, vr)
          : ((o.sentCompleteBoundaryFunction = !0), s(a, Kt)),
        m === null)
      )
        throw Error(t(395));
      return (
        (u = y(u.toString(16))),
        s(a, m),
        s(a, xr),
        s(a, o.segmentPrefix),
        s(a, u),
        c(a, Sr)
      );
    }
    function cs(o, a, u, m) {
      if (m.status === 2) return !0;
      var C = m.id;
      if (C === -1) {
        if ((m.id = u.rootSegmentID) === -1) throw Error(t(392));
        return as(o, a, m);
      }
      return (
        as(o, a, m),
        (o = o.responseState),
        s(a, o.startInlineScript),
        o.sentCompleteSegmentFunction
          ? s(a, Sn)
          : ((o.sentCompleteSegmentFunction = !0), s(a, Ao)),
        s(a, o.segmentPrefix),
        (C = y(C.toString(16))),
        s(a, C),
        s(a, Zt),
        s(a, o.placeholderPrefix),
        s(a, C),
        c(a, bt)
      );
    }
    function Oo(o, a) {
      ((n = new Uint8Array(512)), (i = 0));
      try {
        var u = o.completedRootSegment;
        if (u !== null && o.pendingRootTasks === 0) {
          (Br(o, a, u), (o.completedRootSegment = null));
          var m = o.responseState.bootstrapChunks;
          for (u = 0; u < m.length - 1; u++) s(a, m[u]);
          u < m.length && c(a, m[u]);
        }
        var C = o.clientRenderedBoundaries,
          S;
        for (S = 0; S < C.length; S++) {
          var T = C[S];
          m = a;
          var P = o.responseState,
            z = T.id,
            te = T.errorDigest,
            J = T.errorMessage,
            ye = T.errorComponentStack;
          if (
            (s(m, P.startInlineScript),
            P.sentClientRenderFunction
              ? s(m, Re)
              : ((P.sentClientRenderFunction = !0), s(m, Cn)),
            z === null)
          )
            throw Error(t(395));
          (s(m, z),
            s(m, Cr),
            (te || J || ye) && (s(m, En), s(m, y(ct(te || "")))),
            (J || ye) && (s(m, En), s(m, y(ct(J || "")))),
            ye && (s(m, En), s(m, y(ct(ye)))),
            c(m, bn));
        }
        C.splice(0, S);
        var Oe = o.completedBoundaries;
        for (S = 0; S < Oe.length; S++) ls(o, a, Oe[S]);
        (Oe.splice(0, S), p(a), (n = new Uint8Array(512)), (i = 0));
        var Ue = o.partialBoundaries;
        for (S = 0; S < Ue.length; S++) {
          var je = Ue[S];
          e: {
            ((C = o), (T = a));
            var $r = je.completedSegments;
            for (P = 0; P < $r.length; P++)
              if (!cs(C, T, je, $r[P])) {
                (P++, $r.splice(0, P));
                var ds = !1;
                break e;
              }
            ($r.splice(0, P), (ds = !0));
          }
          if (!ds) {
            ((o.destination = null), S++, Ue.splice(0, S));
            return;
          }
        }
        Ue.splice(0, S);
        var Do = o.completedBoundaries;
        for (S = 0; S < Do.length; S++) ls(o, a, Do[S]);
        Do.splice(0, S);
      } finally {
        (p(a),
          o.allPendingTasks === 0 &&
            o.pingedTasks.length === 0 &&
            o.clientRenderedBoundaries.length === 0 &&
            o.completedBoundaries.length === 0 &&
            a.close());
      }
    }
    function us(o, a) {
      try {
        var u = o.abortableTasks;
        (u.forEach(function (m) {
          return os(m, o, a);
        }),
          u.clear(),
          o.destination !== null && Oo(o, o.destination));
      } catch (m) {
        (Pn(o, m), Nr(o, m));
      }
    }
    return (
      (Gn.renderToReadableStream = function (o, a) {
        return new Promise(function (u, m) {
          var C,
            S,
            T = new Promise(function (J, ye) {
              ((S = J), (C = ye));
            }),
            P = kl(
              o,
              j(
                a ? a.identifierPrefix : void 0,
                a ? a.nonce : void 0,
                a ? a.bootstrapScriptContent : void 0,
                a ? a.bootstrapScripts : void 0,
                a ? a.bootstrapModules : void 0,
              ),
              ke(a ? a.namespaceURI : void 0),
              a ? a.progressiveChunkSize : void 0,
              a ? a.onError : void 0,
              S,
              function () {
                var J = new ReadableStream(
                  {
                    type: "bytes",
                    pull: function (ye) {
                      if (P.status === 1) ((P.status = 2), v(ye, P.fatalError));
                      else if (P.status !== 2 && P.destination === null) {
                        P.destination = ye;
                        try {
                          Oo(P, ye);
                        } catch (Oe) {
                          (Pn(P, Oe), Nr(P, Oe));
                        }
                      }
                    },
                    cancel: function () {
                      us(P);
                    },
                  },
                  { highWaterMark: 0 },
                );
                ((J.allReady = T), u(J));
              },
              function (J) {
                (T.catch(function () {}), m(J));
              },
              C,
            );
          if (a && a.signal) {
            var z = a.signal,
              te = function () {
                (us(P, z.reason), z.removeEventListener("abort", te));
              };
            z.addEventListener("abort", te);
          }
          ss(P);
        });
      }),
      (Gn.version = "18.2.0"),
      Gn
    );
  }
  var ci;
  function Ys() {
    if (ci) return ot;
    ci = 1;
    var e, t;
    return (
      (e = Ks()),
      (t = Xs()),
      (ot.version = e.version),
      (ot.renderToString = e.renderToString),
      (ot.renderToStaticMarkup = e.renderToStaticMarkup),
      (ot.renderToNodeStream = e.renderToNodeStream),
      (ot.renderToStaticNodeStream = e.renderToStaticNodeStream),
      (ot.renderToReadableStream = t.renderToReadableStream),
      ot
    );
  }
  var Js = Ys();
  const Qs = ({ className: e = "" }) =>
      Se.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "none",
        viewBox: "0 0 20 20",
        className: `${e} text-pangram-error-dark`,
        children: [
          Se.jsxs("g", {
            clipPath: "url(#clip0_5114_50641)",
            children: [
              Se.jsx("path", {
                fill: "currentColor",
                d: "M15.625 4.375H4.375A1.875 1.875 0 0 0 2.5 6.25V15a1.875 1.875 0 0 0 1.875 1.875h11.25A1.875 1.875 0 0 0 17.5 15V6.25a1.875 1.875 0 0 0-1.875-1.875m-2.812 10H7.187a1.563 1.563 0 1 1 0-3.125h5.626a1.563 1.563 0 0 1 0 3.125",
                opacity: "0.2",
              }),
              Se.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.25",
                d: "M15.625 4.375H4.375c-1.036 0-1.875.84-1.875 1.875V15c0 1.035.84 1.875 1.875 1.875h11.25c1.035 0 1.875-.84 1.875-1.875V6.25c0-1.036-.84-1.875-1.875-1.875M10 4.375V1.25",
              }),
              Se.jsx("path", {
                fill: "currentColor",
                d: "M6.563 9.375a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875M13.438 9.375a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875",
              }),
              Se.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.25",
                d: "M12.813 11.25H7.187a1.563 1.563 0 0 0 0 3.125h5.626a1.563 1.563 0 0 0 0-3.125M11.563 11.25v3.125M8.438 11.25v3.125",
              }),
            ],
          }),
          Se.jsx("defs", {
            children: Se.jsx("clipPath", {
              id: "clip0_5114_50641",
              children: Se.jsx("path", { fill: "#fff", d: "M0 0h20v20H0z" }),
            }),
          }),
        ],
      }),
    ea = ({ className: e = "" }) =>
      Se.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "none",
        viewBox: "0 0 20 20",
        className: e,
        children: [
          Se.jsxs("g", {
            clipPath: "url(#clip0_5125_40436)",
            children: [
              Se.jsx("path", {
                fill: "#065E49",
                d: "M10 2.5a7.5 7.5 0 0 0-5.015 13.077A5.63 5.63 0 0 1 10 12.5a3.125 3.125 0 1 1 0-6.25 3.125 3.125 0 0 1 0 6.25 5.63 5.63 0 0 1 5.015 3.076A7.5 7.5 0 0 0 10.001 2.5",
                opacity: "0.2",
              }),
              Se.jsx("path", {
                stroke: "#065E49",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.25",
                d: "M4.984 15.577a5.625 5.625 0 0 1 10.032 0",
              }),
              Se.jsx("path", {
                stroke: "#065E49",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.25",
                d: "M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15",
              }),
              Se.jsx("path", {
                stroke: "#065E49",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.25",
                d: "M10 12.5a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25",
              }),
            ],
          }),
          Se.jsx("defs", {
            children: Se.jsx("clipPath", {
              id: "clip0_5125_40436",
              children: Se.jsx("path", { fill: "#fff", d: "M0 0h20v20H0z" }),
            }),
          }),
        ],
      }),
    ta = ({ className: e = "", noFill: t = !1 }) =>
      Se.jsxs("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        className: `text-[#B76E00] ${e}`,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          Se.jsx("path", {
            opacity: t ? "0" : "0.2",
            d: "M16.8694 7.86854C16.8011 6.23544 16.0957 4.6941 14.9045 3.5749C13.7132 2.45569 12.1309 1.84768 10.4968 1.8812C8.86258 1.91471 7.30655 2.58708 6.1622 3.75419C5.01785 4.9213 4.37625 6.49026 4.37492 8.12479L2.5507 11.6303C2.4878 11.7767 2.48326 11.9417 2.53801 12.0915C2.59276 12.2412 2.70267 12.3644 2.84523 12.4357L4.99992 13.4224V16.2498C4.99992 16.4155 5.06577 16.5745 5.18298 16.6917C5.30019 16.8089 5.45916 16.8748 5.62492 16.8748H9.37492C9.37492 17.2063 9.50661 17.5243 9.74103 17.7587C9.97545 17.9931 10.2934 18.1248 10.6249 18.1248H14.9999L14.3749 13.1248C15.1865 12.5172 15.8377 11.7211 16.2724 10.8052C16.707 9.88938 16.912 8.88141 16.8694 7.86854ZM8.76007 5.78729C8.72621 5.5284 8.77427 5.26541 8.89749 5.03523C9.02072 4.80505 9.21292 4.61923 9.44714 4.50386C9.68135 4.38848 9.94581 4.34934 10.2034 4.39192C10.461 4.43451 10.6988 4.55668 10.8834 4.7413C11.068 4.92592 11.1902 5.16371 11.2328 5.4213C11.2754 5.67889 11.2362 5.94336 11.1208 6.17757C11.0055 6.41178 10.8196 6.60399 10.5895 6.72721C10.3593 6.85043 10.0963 6.89849 9.83742 6.86463C9.56421 6.8289 9.31047 6.7039 9.11563 6.50907C8.9208 6.31424 8.7958 6.06049 8.76007 5.78729ZM11.4163 11.8646C11.1574 11.8985 10.8945 11.8504 10.6643 11.7272C10.4341 11.604 10.2483 11.4118 10.1329 11.1776C10.0175 10.9434 9.97838 10.6789 10.021 10.4213C10.0635 10.1637 10.1857 9.92592 10.3703 9.7413C10.555 9.55668 10.7927 9.43451 11.0503 9.39192C11.3079 9.34934 11.5724 9.38848 11.8066 9.50386C12.0408 9.61923 12.233 9.80505 12.3562 10.0352C12.4795 10.2654 12.5275 10.5284 12.4937 10.7873C12.4577 11.0611 12.3322 11.3153 12.1366 11.5102C11.941 11.7051 11.6863 11.8297 11.4124 11.8646H11.4163Z",
            fill: "currentColor",
          }),
          Se.jsx("path", {
            d: "M15.0391 13.3961C15.8294 12.7322 16.4608 11.8995 16.8867 10.9593C17.3126 10.019 17.5222 8.99524 17.5 7.96329C17.4219 4.39219 14.5617 1.44766 10.9969 1.26016C10.0771 1.2101 9.15661 1.34538 8.29012 1.65798C7.42364 1.97058 6.62881 2.45412 5.95284 3.07988C5.27687 3.70565 4.73354 4.46087 4.35512 5.3007C3.97671 6.14053 3.77092 7.04784 3.74999 7.96875L1.99608 11.3422C1.98905 11.3563 1.98202 11.3703 1.97577 11.3844C1.85003 11.6775 1.84107 12.0075 1.95072 12.307C2.06037 12.6065 2.28035 12.8527 2.56561 12.9953L2.58515 13.0039L4.37499 13.8234V16.25C4.37499 16.5815 4.50669 16.8995 4.74111 17.1339C4.97553 17.3683 5.29347 17.5 5.62499 17.5H9.37499C9.54075 17.5 9.69972 17.4342 9.81693 17.3169C9.93414 17.1997 9.99999 17.0408 9.99999 16.875C9.99999 16.7092 9.93414 16.5503 9.81693 16.4331C9.69972 16.3159 9.54075 16.25 9.37499 16.25H5.62499V13.4227C5.62508 13.3029 5.59074 13.1856 5.52605 13.0847C5.46137 12.9839 5.36907 12.9038 5.26015 12.8539L3.12499 11.875L4.92733 8.41094C4.97431 8.32291 4.99924 8.22479 4.99999 8.125C4.99981 6.85027 5.43261 5.61327 6.22747 4.61671C7.02234 3.62015 8.13213 2.92312 9.37499 2.63985V3.85782C8.95798 4.00525 8.60652 4.29536 8.38272 4.67687C8.15892 5.05837 8.0772 5.50672 8.15199 5.94265C8.22679 6.37859 8.45328 6.77404 8.79145 7.05913C9.12962 7.34422 9.55769 7.50058 9.99999 7.50058C10.4423 7.50058 10.8704 7.34422 11.2085 7.05913C11.5467 6.77404 11.7732 6.37859 11.848 5.94265C11.9228 5.50672 11.8411 5.05837 11.6173 4.67687C11.3935 4.29536 11.042 4.00525 10.625 3.85782V2.50001C10.7266 2.50001 10.8281 2.50001 10.9297 2.50782C12.038 2.5713 13.103 2.96017 13.9915 3.62578C14.88 4.29138 15.5526 5.20418 15.925 6.25H14.375C14.2833 6.24997 14.1927 6.27011 14.1097 6.30899C14.0267 6.34788 13.9532 6.40455 13.8945 6.475L11.9016 8.86719C11.4859 8.71231 11.0289 8.70942 10.6113 8.85901C10.1937 9.00861 9.84249 9.30106 9.61974 9.68465C9.39699 10.0682 9.31707 10.5182 9.39411 10.9551C9.47116 11.3919 9.7002 11.7874 10.0407 12.0716C10.3813 12.3559 10.8113 12.5105 11.2549 12.5082C11.6985 12.506 12.1269 12.3469 12.4645 12.0592C12.8021 11.7714 13.0271 11.3736 13.0996 10.936C13.1722 10.4984 13.0876 10.0492 12.8609 9.66797L14.668 7.5H16.2141C16.2328 7.6625 16.2443 7.82657 16.2484 7.99219C16.2679 8.88738 16.0742 9.77436 15.6832 10.5799C15.2923 11.3854 14.7153 12.0864 14 12.625C13.9118 12.6911 13.8427 12.7793 13.7997 12.8807C13.7566 12.9821 13.7411 13.093 13.7547 13.2023L14.3797 18.2023C14.3987 18.3533 14.4721 18.4921 14.5862 18.5928C14.7002 18.6935 14.8471 18.7491 14.9992 18.7492C15.0253 18.7492 15.0514 18.7477 15.0773 18.7445C15.1588 18.7344 15.2375 18.7083 15.3089 18.6677C15.3802 18.6272 15.4429 18.573 15.4933 18.5082C15.5438 18.4434 15.5809 18.3693 15.6027 18.2902C15.6245 18.211 15.6305 18.1283 15.6203 18.0469L15.0391 13.3961ZM9.99999 6.25C9.87638 6.25 9.75554 6.21335 9.65276 6.14467C9.54998 6.076 9.46987 5.97839 9.42256 5.86418C9.37526 5.74998 9.36288 5.62431 9.387 5.50307C9.41111 5.38184 9.47064 5.27047 9.55805 5.18306C9.64546 5.09566 9.75682 5.03613 9.87806 5.01201C9.9993 4.9879 10.125 5.00028 10.2392 5.04758C10.3534 5.09489 10.451 5.17499 10.5197 5.27777C10.5883 5.38055 10.625 5.50139 10.625 5.62501C10.625 5.79077 10.5591 5.94974 10.4419 6.06695C10.3247 6.18416 10.1658 6.25 9.99999 6.25ZM11.25 11.25C11.1264 11.25 11.0055 11.2133 10.9028 11.1447C10.8 11.076 10.7199 10.9784 10.6726 10.8642C10.6253 10.75 10.6129 10.6243 10.637 10.5031C10.6611 10.3818 10.7206 10.2705 10.808 10.1831C10.8955 10.0957 11.0068 10.0361 11.1281 10.012C11.2493 9.9879 11.375 10.0003 11.4892 10.0476C11.6034 10.0949 11.701 10.175 11.7697 10.2778C11.8383 10.3806 11.875 10.5014 11.875 10.625C11.875 10.7908 11.8091 10.9497 11.6919 11.0669C11.5747 11.1842 11.4158 11.25 11.25 11.25Z",
            fill: "currentColor",
          }),
        ],
      }),
    na =
      '<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    ra = (e) => {
      const t = e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!t) return 1;
      const [n, i, s] = [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
      return (0.299 * n + 0.587 * i + 0.114 * s) / 255;
    },
    oa = (e) => !e || e === "transparent" || e === "rgba(0, 0, 0, 0)",
    ui = (e) => !oa(e) && ra(e) < 0.4,
    rn = () => {
      if (
        ui(window.getComputedStyle(document.body).backgroundColor) ||
        ui(window.getComputedStyle(document.documentElement).backgroundColor)
      )
        return !0;
      const e = window.getComputedStyle(document.documentElement).colorScheme;
      if (e === "dark") return !0;
      if (e === "dark light" || e === "light dark")
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      const t = document.documentElement;
      return !!(
        t.classList.contains("dark") ||
        t.getAttribute("data-theme") === "dark" ||
        t.getAttribute("data-color-mode") === "dark" ||
        document.body.classList.contains("dark")
      );
    },
    di = (e) => {
      chrome.runtime
        .sendMessage({ type: "OPEN_FEED_PANEL", ...(e && { postId: e }) })
        .catch(() => {});
    },
    ia = () => {
      if (document.getElementById("pangram-feed-spinner-style")) return;
      const e = document.createElement("style");
      ((e.id = "pangram-feed-spinner-style"),
        (e.textContent = `
    @keyframes pangram-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes pangram-dots {
      0% { content: ''; }
      25% { content: '.'; }
      50% { content: '..'; }
      75% { content: '...'; }
    }
    .pangram-loading-dots::after {
      content: '';
      display: inline-block;
      width: 1.2em;
      text-align: left;
      animation: pangram-dots 1.2s steps(1) infinite;
    }
  `),
        document.head.appendChild(e));
    },
    fi =
      '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_scan)"><path d="M11 2.5H13.5V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 13.5H2.5V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 11V13.5H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 5V2.5H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 5H5V11H11V5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_scan"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>',
    sa = (e) => {
      const t = mi(),
        n = document.createElement("span");
      ((n.className = Te),
        (n.style.cssText = `
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 0 3px;
    height: 16px;
    border-radius: 3px;
    font-size: 11px;
    font-weight: 700;
    background-color: ${t.bgColor};
    color: ${t.textColor};
    white-space: nowrap;
    word-break: keep-all;
    overflow-wrap: normal;
    margin-right: 4px;
    flex-shrink: 0;
    cursor: pointer;
  `),
        ia());
      const i = document.createElement("span");
      ((i.innerHTML = fi),
        (i.style.cssText = "display: inline-flex; align-items: center;"),
        n.appendChild(i));
      const s = document.createElement("span");
      return (
        (s.textContent = e && e >= 500 ? "Checking for AI" : "Checking"),
        (s.className = "pangram-loading-dots"),
        n.appendChild(s),
        n.addEventListener("click", (c) => {
          (c.preventDefault(), c.stopPropagation(), di());
        }),
        n
      );
    },
    eo = (e) => {
      let t = Js.renderToStaticMarkup(ps.createElement(e));
      return (
        (t = t.replace(
          /<svg([^>]*)width="[^"]*"([^>]*)height="[^"]*"/,
          '<svg$1width="13"$2height="13"',
        )),
        (t = t.replace(/(?:fill|stroke)="(#[0-9A-Fa-f]{3,8})"/g, (n, i) =>
          i.toLowerCase() === "#fff" || i.toLowerCase() === "#ffffff"
            ? n
            : n.replace(i, "currentColor"),
        )),
        t
      );
    },
    Zn = {
      ai: eo(Qs),
      human: eo(ea),
      mixed:
        '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pgmix)"><path opacity="0.2" d="M9.333 12.6465C9.54768 12.6465 9.75991 12.6923 9.95556 12.7809C10.1512 12.8694 10.3258 12.9987 10.4678 13.1601L13.325 16.4059C13.3953 16.4764 13.4511 16.5601 13.4892 16.6523C13.5273 16.7444 13.5469 16.8431 13.5469 16.9429C13.5469 17.0426 13.5273 17.1413 13.4892 17.2335C13.4511 17.3256 13.3953 17.4093 13.325 17.4798C13.2546 17.5503 13.171 17.6063 13.0791 17.6444C12.9871 17.6826 12.8886 17.7022 12.7891 17.7022C12.6896 17.7022 12.591 17.6826 12.4991 17.6444C12.4071 17.6063 12.3236 17.5503 12.2532 17.4798L10.0158 15.6788L11.4576 21.1704C11.539 21.3521 11.5458 21.5586 11.4764 21.7452C11.4071 21.9319 11.2672 22.0837 11.0871 22.1679C10.9069 22.2521 10.701 22.2618 10.5137 22.195C10.3264 22.1282 10.1729 21.9902 10.0864 21.8109L7.99835 18.2057L5.91033 21.8109C5.82377 21.9902 5.67027 22.1282 5.48301 22.195C5.29575 22.2618 5.08978 22.2521 4.90963 22.1679C4.72947 22.0837 4.58961 21.9319 4.52028 21.7452C4.45095 21.5586 4.45771 21.3521 4.53911 21.1704L5.98094 15.6788L3.74224 17.4786C3.60011 17.621 3.40735 17.701 3.20636 17.701C3.00537 17.701 2.81261 17.621 2.67048 17.4786C2.52836 17.3361 2.44852 17.143 2.44852 16.9416C2.44852 16.7402 2.52836 16.547 2.67048 16.4046L5.52891 13.1601C5.67087 12.9987 5.84548 12.8694 6.04114 12.7809C6.23679 12.6923 6.44902 12.6465 6.6637 12.6465H9.333Z" fill="#7A4100"/><path d="M9.333 12.6465C9.54768 12.6465 9.75991 12.6923 9.95556 12.7809C10.1512 12.8694 10.3258 12.9987 10.4678 13.1601L13.325 16.4059C13.4511 16.5601 13.4892 16.6523 13.5273 16.7444 13.5469 16.8431 13.5469 16.9429 13.5469 17.0426 13.5273 17.1413 13.4892 17.2335 13.4511 17.3256 13.3953 17.4093 13.325 17.4798 13.2546 17.5503 13.171 17.6063 13.0791 17.6444 12.9871 17.6826 12.8886 17.7022 12.7891 17.7022 12.6896 17.7022 12.591 17.6826 12.4991 17.6444 12.4071 17.6063 12.3236 17.5503 12.2532 17.4798L10.0158 15.6788L11.4576 21.1704C11.539 21.3521 11.5458 21.5586 11.4764 21.7452 11.4071 21.9319 11.2672 22.0837 11.0871 22.1679 10.9069 22.2521 10.701 22.2618 10.5137 22.195 10.3264 22.1282 10.1729 21.9902 10.0864 21.8109L7.99835 18.2057 5.91033 21.8109C5.82377 21.9902 5.67027 22.1282 5.48301 22.195 5.29575 22.2618 5.08978 22.2521 4.90963 22.1679 4.72947 22.0837 4.58961 21.9319 4.52028 21.7452 4.45095 21.5586 4.45771 21.3521 4.53911 21.1704L5.98094 15.6788 3.74224 17.4786C3.60011 17.621 3.40735 17.701 3.20636 17.701 3.00537 17.701 2.81261 17.621 2.67048 17.4786 2.52836 17.3361 2.44852 17.143 2.44852 16.9416 2.44852 16.7402 2.52836 16.547 2.67048 16.4046L5.52891 13.1601C5.67087 12.9987 5.84548 12.8694 6.04114 12.7809 6.23679 12.6923 6.44902 12.6465 6.6637 12.6465H9.333Z" stroke="#7A4100" stroke-width="1.06031" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5335 3.57153H3.46502C3.06417 3.57153 2.67974 3.73127 2.39629 4.0156 2.11285 4.29993 1.95361 4.68557 1.95361 5.08768V12.163C1.95361 12.5651 2.11285 12.9508 2.39629 13.2351 2.67974 13.5194 3.06417 13.6792 3.46502 13.6792H12.5335C12.9343 13.6792 13.3187 13.5194 13.6022 13.2351 13.8856 12.9508 14.0449 12.5651 14.0449 12.163V5.08768C14.0449 4.68557 13.8856 4.29993 13.6022 4.0156 13.3187 3.73127 12.9343 3.57153 12.5335 3.57153ZM10.2663 11.6576H5.73213C5.39809 11.6576 5.07773 11.5245 4.84152 11.2876 4.60532 11.0506 4.47262 10.7293 4.47262 10.3942 4.47262 10.0591 4.60532 9.73773 4.84152 9.50078 5.07773 9.26384 5.39809 9.13073 5.73213 9.13073H10.2663C10.6004 9.13073 10.9207 9.26384 11.1569 9.50078 11.3932 9.73773 11.5258 10.0591 11.5258 10.3942 11.5258 10.7293 11.3932 11.0506 11.1569 11.2876 10.9207 11.5245 10.6004 11.6576 10.2663 11.6576Z" fill="#E4CFAB"/><path d="M12.5331 3.57153H3.46471C2.62999 3.57153 1.95331 4.25033 1.95331 5.08768V12.163C1.95331 13.0004 2.62999 13.6792 3.46471 13.6792H12.5331C13.3679 13.6792 14.0445 13.0004 14.0445 12.163V5.08768C14.0445 4.25033 13.3679 3.57153 12.5331 3.57153Z" stroke="#7A4100" stroke-width="1.06031" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.99902 3.57061V1.0437" stroke="#7A4100" stroke-width="1.06031" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.22894 7.61539C5.6463 7.61539 5.98464 7.27599 5.98464 6.85731 5.98464 6.43864 5.6463 6.09924 5.22894 6.09924 4.81158 6.09924 4.47324 6.43864 4.47324 6.85731 4.47324 7.27599 4.81158 7.61539 5.22894 7.61539Z" fill="#7A4100"/><path d="M10.7692 7.61539C11.1865 7.61539 11.5249 7.27599 11.5249 6.85731 11.5249 6.43864 11.1865 6.09924 10.7692 6.09924 10.3518 6.09924 10.0135 6.43864 10.0135 6.85731 10.0135 7.27599 10.3518 7.61539 10.7692 7.61539Z" fill="#7A4100"/><path d="M10.267 9.13245H5.73274C5.03714 9.13245 4.47324 9.69811 4.47324 10.3959 4.47324 11.0937 5.03714 11.6594 5.73274 11.6594H10.267C10.9626 11.6594 11.5265 11.0937 11.5265 10.3959 11.5265 9.69811 10.9626 9.13245 10.267 9.13245Z" stroke="#7A4100" stroke-width="1.06031" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.2576 9.13245V11.6594" stroke="#7A4100" stroke-width="1.06031" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.74042 9.13245V11.6594" stroke="#7A4100" stroke-width="1.06031" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pgmix"><rect width="16" height="14" fill="white"/></clipPath></defs></svg>',
      "ai-assisted": eo(ta),
    },
    pi = {
      human: { bgColor: "rgba(16, 185, 129, 0.16)", textColor: "#047857" },
      mixed: { bgColor: "rgba(255, 171, 0, 0.16)", textColor: "#7A4100" },
      ai: { bgColor: "rgba(239, 68, 68, 0.16)", textColor: "#dc2626" },
      "ai-assisted": {
        bgColor: "rgba(255, 171, 0, 0.16)",
        textColor: "#7A4100",
      },
    },
    aa = {
      human: { bgColor: "rgba(16, 185, 129, 0.30)", textColor: "#6ee7b7" },
      mixed: { bgColor: "rgba(122, 65, 0, 0.30)", textColor: "#d4a574" },
      ai: { bgColor: "rgba(239, 68, 68, 0.30)", textColor: "#fca5a5" },
      "ai-assisted": {
        bgColor: "rgba(122, 65, 0, 0.30)",
        textColor: "#d4a574",
      },
    },
    Kn = (e) => (rn() ? aa : pi)[e] ?? pi.human,
    la = { bgColor: "rgba(0, 184, 217, 0.16)", textColor: "#006C9C" },
    ca = { bgColor: "rgba(0, 184, 217, 0.30)", textColor: "#67e8f9" },
    mi = () => (rn() ? ca : la),
    ua = (e, t, n) => {
      const i = Kn(t),
        s = document.createElement("span");
      return (
        (s.className = Te),
        (s.title = "Click to view full analysis"),
        (s.innerHTML = `${Zn[t] || ""}<span>${e}</span>${na}`),
        (s.style.cssText = `
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 0 3px;
    height: 16px;
    border-radius: 3px;
    font-size: 11px;
    font-weight: 700;
    background-color: ${i.bgColor};
    color: ${i.textColor};
    white-space: nowrap;
    word-break: keep-all;
    overflow-wrap: normal;
    margin-right: 4px;
    flex-shrink: 0;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.15s ease;
  `),
        s.addEventListener("mouseover", () => {
          s.style.opacity = "0.75";
        }),
        s.addEventListener("mouseout", () => {
          s.style.opacity = "1";
        }),
        s.addEventListener("click", (c) => {
          (c.preventDefault(), c.stopPropagation(), di(n));
        }),
        s
      );
    },
    da =
      '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.32488 8H10.6751" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14.4203C11.5458 14.4203 14.4203 11.5458 14.4203 8C14.4203 4.45417 11.5458 1.57971 8 1.57971C4.45417 1.57971 1.57971 4.45417 1.57971 8C1.57971 11.5458 4.45417 14.4203 8 14.4203Z" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-dasharray="3 3"/></svg>',
    hi = () => {
      const e = document.createElement("span");
      ((e.className = Te),
        e.setAttribute("data-pangram-too-short", "true"),
        (e.innerHTML = da),
        (e.style.cssText = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 4px;
    flex-shrink: 0;
    cursor: default;
    border-radius: 50%;
    color: #919EAB;

    transition: background-color 120ms ease;
  `));
      let t = null,
        n = null,
        i = null;
      const s = () => {
        (t?.remove(), (t = null), i?.disconnect(), (i = null));
      };
      return (
        e.addEventListener("mouseenter", () => {
          const c = rn();
          ((e.style.backgroundColor = c
            ? "rgba(255, 255, 255, 0.12)"
            : "rgba(0, 0, 0, 0.06)"),
            (e.style.color = c
              ? "rgba(255, 255, 255, 0.75)"
              : "rgba(0, 0, 0, 0.7)"),
            n !== null && window.clearTimeout(n),
            (n = window.setTimeout(() => {
              ((t = document.createElement("div")),
                (t.textContent =
                  "Pangram only scans posts more than 50 words."),
                (t.style.cssText = `
        position: fixed;
        background: ${c ? "rgba(91, 112, 131, 0.8)" : "rgba(0, 0, 0, 0.6)"};
        color: #fff;
        font-size: 11px;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        line-height: 1.4;
        padding: 6px 4px;
        border-radius: 4px;
        white-space: nowrap;
        pointer-events: none;
        z-index: 2147483647;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      `),
                document.body.appendChild(t));
              const p = e.getBoundingClientRect(),
                g = t.offsetWidth;
              let y = p.left + p.width / 2 - g / 2;
              y = Math.max(8, Math.min(y, window.innerWidth - g - 8));
              const d = p.top - t.offsetHeight - 6;
              ((t.style.left = `${y}px`),
                (t.style.top = `${d < 8 ? p.bottom + 6 : d}px`),
                (n = null),
                (i = new MutationObserver(() => {
                  document.body.contains(e) || s();
                })),
                i.observe(document.body, { childList: !0, subtree: !0 }));
            }, 700)));
        }),
        e.addEventListener("mouseleave", () => {
          ((e.style.backgroundColor = "transparent"),
            (e.style.color = "#919EAB"),
            n !== null && (window.clearTimeout(n), (n = null)),
            s());
        }),
        e
      );
    },
    fa = (e) => {
      const t = e.toLowerCase();
      return t.includes("human") || t === "unlikely ai"
        ? "human"
        : t === "ai-assisted" || t === "ai assisted"
          ? "ai-assisted"
          : t.includes("mixed")
            ? "mixed"
            : "ai";
    },
    ze = [];
  let ht = !1,
    it = null,
    De = null;
  const Ot = new Set(),
    Xn = (e) => {
      if (ht) return;
      const t = ze.shift();
      if (!t) return;
      ((ht = !0), (De = t.postId));
      const n = t.postId,
        i = t.contentType === "long_post" ? 12e4 : 3e4;
      ((it = setTimeout(() => {
        if (De === n) {
          if (
            (Ot.add(n),
            (it = null),
            (ht = !1),
            (De = null),
            U.onScanTimeout && U.onScanTimeout(n),
            U.getActiveSiteConfigRef)
          ) {
            const s = U.getActiveSiteConfigRef();
            s && U.updateLoadingBadgesRef && U.updateLoadingBadgesRef(s);
          }
          (U.safeSendMessageRef && Xn(U.safeSendMessageRef),
            !ht && ze.length === 0 && Jr(!1));
        }
      }, i)),
        e({
          type: "DETECT",
          text: t.textToScan,
          mode: "full",
          source: t.source,
          contentType: t.contentType,
          postId: t.postId,
          url: t.url,
          title: t.title,
          author: t.author,
          publication: t.publication,
          sourceDate: t.sourceDate,
          authorProfileImageUrl: t.authorProfileImageUrl,
          engagement: t.engagement,
        }));
    },
    on = () => {
      (it !== null && (clearTimeout(it), (it = null)),
        (ht = !1),
        (De = null),
        U.safeSendMessageRef && Xn(U.safeSendMessageRef),
        !ht && ze.length === 0 && Jr(!1));
    },
    pa = () => {
      (it !== null && (clearTimeout(it), (it = null)),
        De !== null && (Ot.add(De), (De = null)),
        (ze.length = 0),
        (ht = !1));
    },
    $e = "pangram-profile-stats",
    ma = "https://www.pangram.com",
    sn =
      '<svg width="10" height="12" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-0.00878906 16.9346L13.3448 29.9999L7.71476 17.4842L-0.00878906 16.9346Z" fill="#FECAB9"/><path d="M26.6992 16.9346L13.3456 29.9999L18.9757 17.4842L26.6992 16.9346Z" fill="#FECAB9"/><path d="M5.7379 13.0918L-0.00878906 16.9367L7.71476 17.4864L5.7379 13.0918Z" fill="#FECAB9"/><path d="M20.9525 13.0918L26.6992 16.9367L18.9757 17.4864L20.9525 13.0918Z" fill="#FECAB9"/><path d="M-0.00878906 0.313477V16.9334L5.7379 13.0885L-0.00878906 0.313477Z" fill="#FECAB9"/><path d="M26.6992 0.313477V16.9334L20.9525 13.0885L26.6992 0.313477Z" fill="#FECAB9"/><path d="M13.3442 29.9988V7.99902L5.7373 13.0885L7.71416 17.4831L13.3442 29.9988Z" fill="#FF6106"/><path d="M13.3453 29.9988V7.99902L20.9521 13.0885L18.9753 17.4831L13.3453 29.9988Z" fill="#FF6106"/><path d="M13.3448 7.99899L-0.00878906 0.313477L5.7379 13.0885L13.3448 7.99899Z" fill="#FF6106"/><path d="M13.3456 7.99899L26.6992 0.313477L20.9525 13.0885L13.3456 7.99899Z" fill="#FF6106"/></svg>',
    gi =
      '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    ha = (e) => {
      const t = (e || "").toLowerCase();
      return t.includes("human") || t === "unlikely ai"
        ? "human"
        : t === "ai-assisted"
          ? "ai-assisted"
          : t.includes("mixed")
            ? "mixed"
            : "ai";
    },
    yi = () => {
      const e = document.getElementById($e);
      if (!e) return;
      const t = e.getAttribute("data-pangram-handle"),
        n = xi(),
        i = n ? `${n}:${Si(n)}` : null;
      (!t || i !== t) && e.remove();
    };
  let wi = null;
  const ga = () => {
    if (wi !== null) return;
    chrome.runtime.onMessage.addListener((n) => {
      n.type === "SPA_NAVIGATED" && yi();
    });
    const e = document.querySelector("title");
    e && new MutationObserver(yi).observe(e, { childList: !0 });
    let t = window.location.href;
    wi = setInterval(() => {
      window.location.href !== t &&
        ((t = window.location.href),
        document.getElementById($e)?.remove(),
        st());
    }, 500);
  };
  let vi = !1;
  const ya = () => {
      const e = document
        .querySelector('meta[property="og:title"]')
        ?.getAttribute("content");
      if (e) {
        const t = e.replace(/\s*[–—-]\s*Medium\s*$/i, "").trim();
        for (const n of document.querySelectorAll("h1, h2"))
          if (n.textContent?.trim() === t) return n;
      }
      return document.querySelector("h2.pw-author-name, h1.pw-author-name");
    },
    xi = () => {
      const e = window.location.hostname.replace("www.", "");
      if (e === "x.com" || e === "twitter.com") {
        const t = window.location.pathname,
          n = [
            "home",
            "explore",
            "search",
            "notifications",
            "messages",
            "settings",
            "i",
            "compose",
            "hashtag",
          ],
          i = t.match(
            /^\/([A-Za-z0-9_]+)(\/(?:with_replies|highlights|media|articles|likes))?\/?$/,
          );
        return i && !n.includes(i[1].toLowerCase()) ? "x" : null;
      }
      if (e === "medium.com" || e.endsWith(".medium.com"))
        return window.location.pathname.match(/^\/@([^/]+)\/?$/) ||
          (e === "medium.com" && en())
          ? "medium"
          : null;
      if (en()) return "medium";
      if (e === "linkedin.com") {
        const t = window.location.pathname;
        return /^\/in\/[^/]+\/?$/.test(t) || /^\/company\/[^/]+\/?$/.test(t)
          ? "linkedin"
          : null;
      }
      if (e === "reddit.com") {
        const t = window.location.pathname;
        return /^\/user\/[^/]+(?:\/(?:posts|comments|overview|saved|upvoted|downvoted))?\/?$/.test(
          t,
        )
          ? "reddit"
          : null;
      }
      if (e === "substack.com" || e.endsWith(".substack.com") || ei()) {
        const t = window.location.pathname;
        return /^\/@([^/]+)\/?$/.test(t) ? "substack" : null;
      }
      return null;
    },
    Si = (e) => {
      if (e === "x")
        return window.location.pathname.split("/")[1].toLowerCase();
      if (e === "linkedin") {
        const n = window.location.pathname,
          i = n.match(/^\/in\/([^/]+)/);
        if (i) return i[1].toLowerCase();
        const s = n.match(/^\/company\/([^/]+)/);
        return s ? s[1].toLowerCase() : "";
      }
      if (e === "reddit") {
        const n = window.location.pathname.match(/^\/user\/([^/]+)/);
        return n ? n[1].toLowerCase() : "";
      }
      if (en()) {
        if (window.location.hostname.replace("www.", "") === "medium.com") {
          const s = window.location.pathname.match(/^\/([^@/][^/]*)/);
          return s ? s[1].toLowerCase() : "";
        }
        const i = document
          .querySelector('meta[property="og:title"]')
          ?.getAttribute("content");
        if (i) {
          const s = i.replace(/\s*[–—-]\s*Medium\s*$/i, "").trim();
          if (s) return s;
        }
        return "";
      }
      const t = window.location.pathname.match(/^\/@([^/]+)/);
      return t ? t[1].toLowerCase() : "";
    },
    wa = async (e, t, n) => {
      try {
        const i = await chrome.runtime.sendMessage({
          type: n ? "FETCH_PUBLICATION_HISTORY" : "FETCH_AUTHOR_HISTORY",
          domain: e,
          platformId: t,
        });
        if (!i?.success) return { map: new Map(), stats: null };
        const s = new Map(),
          c = new Set();
        for (const p of i.items || []) {
          if (c.has(p.uuid)) continue;
          c.add(p.uuid);
          const g = p.text ? to(p.text) : p.uuid;
          s.set(g, ha(p.prediction_short));
        }
        return { map: s, stats: i.stats || null };
      } catch {
        return { map: new Map(), stats: null };
      }
    },
    to = (e) =>
      e
        .replace(new RegExp("\\p{Extended_Pictographic}", "gu"), "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 100),
    va = async () => {
      try {
        const e = await chrome.runtime.sendMessage({
          type: "GET_FEED_SCAN_ENTRIES",
          url: window.location.href,
        });
        return e?.entries
          ? e.entries.map((t) => ({
              text: t.text,
              category: t.category,
              isNewUserScan: t.isNewUserScan,
              author: t.author,
              authorHandle: t.authorHandle,
            }))
          : [];
      } catch {
        return [];
      }
    },
    an = (e) => e.toLowerCase().replace(/[\s\-_.@]+/g, ""),
    xa = (e, t) => {
      const n = an(t);
      if (e.authorHandle) return an(e.authorHandle) === n;
      if (e.author) {
        const i = an(e.author);
        return i.includes(n) || n.includes(i);
      }
      return !1;
    },
    Sa = (e) => {
      let t = 0,
        n = 0,
        i = 0,
        s = 0;
      for (const c of e.values())
        c === "ai"
          ? t++
          : c === "ai-assisted"
            ? s++
            : c === "mixed"
              ? n++
              : c === "human" && i++;
      return { ai: t, mixed: n, human: i, aiAssisted: s, total: t + n + i + s };
    };
  let Yn = new Map(),
    Je = null,
    Ci = "";
  const bi =
      "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    ln = (e, t) => {
      const n = `
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 0 8px;
    height: 20px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
    cursor: pointer;
    font-family: ${bi};
  `,
        i = mi();
      if (e === "checking")
        return `<span style="${n} background-color: ${i.bgColor}; color: ${i.textColor};">
      ${fi}<span>Checking..</span>
    </span>`;
      if (e === "nothing-scanned")
        return `<span style="${n} background-color: ${i.bgColor}; color: ${i.textColor};">
      <span>Nothing scanned yet</span>${gi}
    </span>`;
      if (e === "sign-in")
        return `<span style="${n} background-color: transparent; color: #919EAB; font-weight: 400; font-style: italic;">
      <span>Sign in/upgrade to see AI Stats</span>
    </span>`;
      if (!t || t.total === 0) return "";
      const { human: s, total: c } = t,
        p = s / c,
        g = p >= 0.66 ? "human" : p >= 0.33 ? "mixed" : "ai",
        y = Kn(g),
        d = `${s}/${c} Human`;
      return `<span style="${n} background-color: ${y.bgColor}; color: ${y.textColor};">
    ${Zn[g] || ""}<span>${d}</span>${gi}
  </span>`;
    },
    cn = () => {
      if (document.getElementById("pangram-badge-font")) return;
      const e = document.createElement("style");
      e.id = "pangram-badge-font";
      const t = chrome.runtime.getURL("fonts/ibm-plex-sans-500.woff2");
      ((e.textContent = `
    @font-face {
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 500 700;
      font-display: swap;
      src: url('${t}') format('woff2');
    }
  `),
        document.head.appendChild(e));
    },
    un = () => {
      const e = document.createElement("div");
      return (
        (e.id = $e),
        (e.style.cssText = `
    all: initial;
    width: 0;
    height: 0;
    overflow: visible;
    display: inline-flex;
    align-items: center;
    margin-left: 8px;
    font-family: ${bi};
    cursor: pointer;
  `),
        e.addEventListener("click", () => {
          chrome.runtime.sendMessage({ type: "OPEN_FEED_PANEL" });
        }),
        e
      );
    },
    Ca = () => {
      const e = document.getElementById($e);
      if (e) return e;
      cn();
      const t = un(),
        n = document.querySelector('[data-testid="UserName"]');
      if (n)
        return (
          (t.style.alignItems = "flex-start"),
          (t.style.justifyContent = "flex-start"),
          n.appendChild(t),
          t
        );
      const i = document.querySelector('[data-testid="UserDescription"]'),
        s =
          i?.closest('[data-testid="UserProfileHeader_Items"]')
            ?.parentElement || i?.parentElement?.parentElement;
      if (s) s.appendChild(t);
      else {
        const p = document
          .querySelector('[data-testid="primaryColumn"]')
          ?.querySelector('[data-testid="UserProfileHeader_Items"]');
        if (p?.parentElement) p.parentElement.appendChild(t);
        else return null;
      }
      return t;
    },
    ba = () => {
      const e = document.getElementById($e);
      if (e) return e;
      cn();
      const t = un(),
        i = ya()?.closest("div");
      if (i) {
        const s = window.getComputedStyle(i).overflow;
        return (
          (s === "hidden" || s === "clip") && (i.style.overflow = "visible"),
          i.appendChild(t),
          t
        );
      }
      return null;
    },
    Ea = () => {
      const e = document.getElementById($e);
      if (e) return e;
      cn();
      const t = un();
      if (/^\/company\//.test(window.location.pathname)) {
        const v = document.querySelector(".org-top-card-summary__title");
        if (!v) return null;
        const k = window.getComputedStyle(v).overflow;
        return (
          (k === "hidden" || k === "clip") && (v.style.overflow = "visible"),
          v.appendChild(t),
          t
        );
      }
      const i = document.querySelector('[role="main"]');
      if (!i) return null;
      const s = i.querySelector(
        '[componentkey^="com.linkedin.sdui.profile.card."]',
      );
      if (!s) return null;
      const c = s.querySelectorAll('a[href*="linkedin.com/in/"]'),
        p = Array.from(c).find(
          (v) => v.querySelector("h2") || v.querySelector("* > h2"),
        );
      if (!p) return null;
      let g = p.parentElement?.parentElement;
      if (
        (g?.getAttribute("aria-haspopup") === "dialog" && (g = g.parentElement),
        !g)
      )
        return null;
      const y = g,
        d = window.getComputedStyle(y).overflow;
      return (
        (d === "hidden" || d === "clip") && (y.style.overflow = "visible"),
        y.appendChild(t),
        t
      );
    },
    ka = () => {
      const e = document.getElementById($e);
      if (e) return e;
      cn();
      const t = un(),
        n = document.querySelector('h1[data-testid="profile-display-name"]');
      if (n) {
        let s = n.parentElement;
        for (; s; ) {
          if (
            s.classList.contains("flex") &&
            s.classList.contains("items-baseline")
          ) {
            const c = window.getComputedStyle(s).overflow;
            return (
              (c === "hidden" || c === "clip") &&
                (s.style.overflow = "visible"),
              s.appendChild(t),
              t
            );
          }
          s = s.parentElement;
        }
      }
      const i =
        document.querySelector("shreddit-profile-header") ||
        document.querySelector('[data-testid="profile-header"]') ||
        document.querySelector(".profile-page");
      if (i) {
        const s = i.querySelector("h1, h2");
        if (s?.parentElement) {
          const c = s.parentElement,
            p = window.getComputedStyle(c).overflow;
          return (
            (p === "hidden" || p === "clip") && (c.style.overflow = "visible"),
            c.appendChild(t),
            t
          );
        }
      }
      return null;
    },
    _a = () => {
      const e = document.getElementById($e);
      if (e) return e;
      cn();
      const t = un(),
        n =
          document.querySelector('img[alt*="avatar"][width="112"]') ||
          document.querySelector('img[alt*="avatar"][width="88"]');
      if (!n) return null;
      let i = n.parentElement;
      for (; i && !i.classList.contains("pc-flexDirection-row"); )
        i = i.parentElement;
      if (!i) return null;
      const s = Array.from(i.children).find(
        (g) => window.getComputedStyle(g).position !== "absolute",
      );
      if (!s) return null;
      const c = s.querySelector("span");
      if (!c?.parentElement) return null;
      const p = document.createElement("div");
      return (
        (p.style.cssText =
          "display:inline-flex;align-items:center;gap:6px;overflow:visible;"),
        c.parentElement.insertBefore(p, c),
        p.appendChild(c),
        p.appendChild(t),
        t
      );
    },
    no = (e) =>
      e === "medium"
        ? ba()
        : e === "linkedin"
          ? Ea()
          : e === "reddit"
            ? ka()
            : e === "substack"
              ? _a()
              : Ca();
  let Dt = null,
    ro = 0;
  const st = async () => {
      const e = ++ro;
      vi || ((vi = !0), ga());
      const t = xi();
      if (!t) {
        const E = document.getElementById($e);
        E && E.remove();
        return;
      }
      const n = Si(t),
        i = `${t}:${n}`,
        s = document.getElementById($e);
      if ((s && s.getAttribute("data-pangram-handle") !== i && s.remove(), !n))
        return;
      if (
        Ve()?.excludedPlatformIds?.some(
          (E) => E.toLowerCase() === n.toLowerCase(),
        )
      ) {
        const E = document.getElementById($e);
        E && E.remove();
        return;
      }
      const p = no(t);
      p &&
        (p.setAttribute("data-pangram-handle", i),
        (p.innerHTML = ln("checking") + sn));
      const { isAuthenticated: g } = await Rt.get();
      if (!g) {
        if (e !== ro) return;
        const E = no(t);
        E &&
          ((E.innerHTML = ln("sign-in") + sn),
          (E.onclick = () => window.open(`${ma}/login`, "_blank")));
        return;
      }
      const y = t === "medium" && en(),
        d = i;
      if (d !== Ci) {
        ((Ci = d), (Yn = new Map()), (Je = null));
        const { map: E, stats: L } = await wa(t, n, y);
        ((Yn = E), (Je = L));
      }
      const k = (await va()).filter((E) => xa(E, n));
      if (e !== ro) return;
      let M;
      if (Je && Je.total > 0) {
        const E = k.filter((I) => (I.isNewUserScan ? !Yn.has(to(I.text)) : !1)),
          L = { ai: 0, mixed: 0, human: 0, aiAssisted: 0 };
        for (const I of E)
          I.category === "ai"
            ? L.ai++
            : I.category === "ai-assisted"
              ? L.aiAssisted++
              : I.category === "mixed"
                ? L.mixed++
                : L.human++;
        M = {
          ai: Je.ai + L.ai,
          mixed: Je.mixed + L.mixed,
          human: Je.human + L.human,
          aiAssisted: (Je["ai-assisted"] || 0) + L.aiAssisted,
          total: Je.total + E.length,
        };
      } else {
        const E = new Map(Yn);
        for (const L of k) {
          const I = to(L.text);
          E.has(I) || E.set(I, L.category);
        }
        M = Sa(E);
      }
      const B = no(t);
      if (!B) {
        (Dt && clearTimeout(Dt), (Dt = setTimeout(() => st(), 1e3)));
        return;
      }
      const N = an(n),
        R = Array.from(
          document.querySelectorAll("[data-pangram-post-id]"),
        ).some((E) => {
          const L = E.getAttribute("data-pangram-author-handle");
          return !!L && an(L) === N;
        });
      M.total === 0 && R
        ? ((B.innerHTML = ln("checking") + sn),
          Dt && clearTimeout(Dt),
          (Dt = setTimeout(() => st(), 600)))
        : M.total === 0
          ? (B.innerHTML = ln("nothing-scanned") + sn)
          : (B.innerHTML = ln("results", M) + sn);
    },
    Ta =
      '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    dn = "pangram-result-toast",
    Aa = 6e3;
  let gt = null;
  const La = () => {
      if (document.getElementById("pangram-toast-style")) return;
      const e = document.createElement("style");
      ((e.id = "pangram-toast-style"),
        (e.textContent = `
    @keyframes pangram-toast-in {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes pangram-toast-out {
      from { opacity: 1; transform: translateY(0); }
      to   { opacity: 0; transform: translateY(12px); }
    }
    #${dn} {
      animation: pangram-toast-in 0.22s ease forwards;
    }
    #${dn}.pangram-toast-hiding {
      animation: pangram-toast-out 0.18s ease forwards;
    }
  `),
        document.head.appendChild(e));
    },
    oo = () => {
      const e = document.getElementById(dn);
      e &&
        (e.classList.add("pangram-toast-hiding"),
        setTimeout(() => e.remove(), 200),
        gt && (clearTimeout(gt), (gt = null)));
    },
    Ia = (e, t, n, i) => {
      (La(),
        document.getElementById(dn)?.remove(),
        gt && (clearTimeout(gt), (gt = null)));
      const s = Kn(t),
        c = rn(),
        p = document.createElement("div");
      ((p.id = dn),
        (p.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 2147483647;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px 8px 10px;
    background: ${c ? "#1f2937" : "#ffffff"};
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,${c ? "0.4" : "0.14"}), 0 1px 4px rgba(0,0,0,${c ? "0.2" : "0.08"});
    font-family: 'IBM Plex Sans', sans-serif;
    cursor: default;
    user-select: none;
  `));
      const g = document.createElement("span");
      ((g.style.cssText = `
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 700;
    background-color: ${s.bgColor};
    color: ${s.textColor};
    white-space: nowrap;
    text-decoration: none;
    cursor: pointer;
  `),
        g.addEventListener("click", (d) => {
          (d.preventDefault(),
            d.stopPropagation(),
            chrome.runtime.sendMessage({
              type: "OPEN_FEED_PANEL",
              ...(n && { postId: n }),
            }),
            oo());
        }),
        (g.innerHTML = `${Zn[t] || ""}<span>${e}</span>${i ? Ta : ""}`));
      const y = document.createElement("button");
      ((y.style.cssText = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${c ? "#4b5563" : "#1f2937"};
    border: none;
    padding: 0;
    cursor: pointer;
    flex-shrink: 0;
    color: #fff;
  `),
        (y.innerHTML =
          '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),
        y.addEventListener("click", (d) => {
          (d.preventDefault(), d.stopPropagation(), oo());
        }),
        p.appendChild(g),
        p.appendChild(y),
        document.body.appendChild(p),
        (gt = setTimeout(oo, Aa)));
    },
    yt = (e, t) =>
      Kr.get(t) ||
      document.querySelector(
        qs(e.postContainerSelector, `[data-pangram-post-id="${t}"]`),
      ),
    Jn = (e, t, n) => {
      let i = t.parentElement;
      for (; i && i !== e; ) {
        const s = Ae(i, t, n);
        if (s) return s;
        i = i.parentElement;
      }
      return Ae(e, t, n);
    },
    Ra = (e, t) => {
      let n = t.parentElement;
      for (; n && n !== e; ) {
        const i = Ae(n, t, nn, Pt);
        if (i) return i;
        n = n.parentElement;
      }
      return Ae(e, t, nn, Pt);
    },
    Ma = (e) => {
      const t = Vn(
        (e || "").split(`
`)[0] || "",
      );
      return t.split(/\s[·•|]\s/)[0]?.trim() || t;
    },
    io = (e, t) => {
      const n = t ? Ra(e, t) : Ae(e, e, nn, Pt);
      if (!n) return null;
      const i = n.closest(zn);
      return (
        (i &&
          Array.from(
            i.querySelectorAll('h2, span[aria-hidden="true"], p'),
          ).find(Pt)) ||
        n
      );
    },
    so = (e, t, n, i, s, c) => {
      const p = yt(e, t);
      if (!p) return;
      const g =
        p.querySelector(`[data-pangram-text-id="${t}"]`) ||
        p.querySelector(e.postTextSelector);
      if (!g) return;
      const y = p.hasAttribute("data-pangram-comment"),
        d =
          y && e.commentBadgeInsertion
            ? e.commentBadgeInsertion
            : e.badgeInsertion,
        v =
          y && e.commentBadgeAlignment != null
            ? e.commentBadgeAlignment
            : e.badgeAlignment;
      if (U.silentMode && i === "human") return;
      const k = ua(s, i, t);
      try {
        Nt(
          p,
          g,
          k,
          d,
          e.source,
          v,
          e.badgeBoundarySelector || e.commentContainerSelector,
        );
      } catch {}
    },
    fn = (e) => {
      if (U.silentMode) return;
      const t = [];
      De && t.push(De);
      for (const n of ze) t.push(n.postId);
      for (const n of t) {
        const i = yt(e, n);
        if (!i) continue;
        const s =
          i.querySelector(`[data-pangram-text-id="${n}"]`) ||
          i.querySelector(e.postTextSelector);
        if (s && !i.querySelector(`.${Te}`)) {
          const c = i.hasAttribute("data-pangram-comment"),
            p =
              c && e.commentBadgeInsertion
                ? e.commentBadgeInsertion
                : e.badgeInsertion,
            g =
              c && e.commentBadgeAlignment != null
                ? e.commentBadgeAlignment
                : e.badgeAlignment,
            y = sa(i.offsetWidth);
          Nt(
            i,
            s,
            y,
            p,
            e.source,
            g,
            e.badgeBoundarySelector || e.commentContainerSelector,
          );
        }
      }
    },
    Pa = (e, t) => {
      const n = Ve();
      if (n && t) {
        const i = (() => {
            if (n.source !== "x-article" || yt(n, t)) return n;
            const R = Ye.find((E) => E.source === "x-post") ?? null;
            return R && yt(R, t) ? R : n;
          })(),
          s = e.prediction || "",
          c = e.badge_category,
          p =
            c === "ai-assisted"
              ? "AI-Assisted"
              : e.prediction_short || s || "Unknown",
          g = c || fa(p),
          y = e.text_query
            ? `${Vr}/feed/${encodeURIComponent(e.text_query)}`
            : void 0,
          d = e.version ? parseFloat(e.version) >= 3 : !1;
        (e.percent_ai != null
          ? e.percent_ai * 100
          : e.fraction_ai != null && e.fraction_ai * 100,
          d
            ? e.fraction_ai_assisted != null && e.fraction_ai_assisted * 100
            : (e.percent_mixed ??
              (e.fraction_mixed != null && e.fraction_mixed * 100)),
          e.percent_human ??
            (e.fraction_human != null && e.fraction_human * 100));
        const v = {};
        for (const R of [
          "fraction_ai",
          "fraction_mixed",
          "fraction_human",
          "fraction_ai_assisted",
          "version",
          "headline",
          "subtitle",
        ])
          R in e && (v[R] = e[R]);
        const k = e;
        k.fraction_breakdown && (v.fraction_breakdown = k.fraction_breakdown);
        const M = Zr.get(t) || i.defaultContentType,
          B = jn.get(t);
        if (B) {
          Xr.set(B, { prediction: s, category: g, label: p, dashboardUrl: y });
          try {
            let R = "";
            const E = yt(i, t),
              L =
                E?.querySelector(`[data-pangram-text-id="${t}"]`) ||
                E?.querySelector(i.postTextSelector);
            if (E) {
              const $ = E.getAttribute("post-title");
              if (
                ($
                  ? (R = $.trim())
                  : i.titleSelector &&
                    (R = (
                      E.querySelector(i.titleSelector)?.textContent || ""
                    ).trim()),
                !R && i.source !== "substack-post")
              ) {
                const D = E.getAttribute("aria-label");
                D && (R = D.trim());
              }
            }
            let I = "",
              W = "",
              Y = "",
              re = "";
            if (E) {
              if (i.authorSelector && i.source !== "linkedin-post") {
                const $ = L
                  ? Jn(E, L, i.authorSelector)
                  : E.querySelector(i.authorSelector);
                $ && (I = ($.textContent || "").trim());
              }
              if (
                (I || (I = E.getAttribute("author") || ""),
                !I && i.source === "reddit-post")
              ) {
                const $ = E.querySelector('a[href^="/user/"]');
                $ &&
                  (I =
                    $.getAttribute("href")
                      ?.replace(/^\/user\//, "")
                      .replace(/\/$/, "") || "");
              }
              if (i.source === "linkedin-post") {
                const $ = Vn(I);
                ii($) || (I = "");
              }
              if (!I && i.source === "linkedin-post") {
                const $ = io(E, L);
                $ && (I = Ma($.textContent || ""));
              }
              if (i.source === "linkedin-post") {
                const D = io(E, L)?.closest(zn)?.getAttribute("href");
                if (D) {
                  const Q = D.startsWith("http") ? new URL(D).pathname : D,
                    ee = E.querySelector(`a[href*="${Q}"] img[src]`);
                  ee?.src && (Y = ee.src);
                }
              } else if (i.source === "substack-post") {
                const $ =
                  E.querySelector(
                    '[class*="byline-wrapper"] img[alt*="avatar"][src]',
                  ) || E.querySelector('a[href^="/@"] img[alt*="avatar"][src]');
                $ && (Y = $.currentSrc || $.src);
              } else if (i.source === "reddit-post") {
                const D = E.querySelector(
                  'a[href^="/user/"] svg image[href]',
                )?.getAttribute("href");
                D && (Y = D);
              } else if (i.source === "medium-post") {
                const $ = E.querySelector(
                  'img[data-testid="authorPhoto"][src]',
                );
                $?.src && (Y = $.src);
              } else {
                const $ = Array.from(
                    E.querySelectorAll('[data-testid="Tweet-User-Avatar"]'),
                  ),
                  D =
                    $.find((Q) => !Q.closest('[role="link"][tabindex="0"]')) ||
                    $[0];
                if (D) {
                  const Q = D.querySelector("img[src]");
                  Q?.src && (Y = Q.src);
                }
              }
              if (i.source === "linkedin-post") {
                const D = io(E, L)?.closest(zn)?.getAttribute("href") || "",
                  ee = (D.startsWith("http") ? new URL(D).pathname : D)
                    .replace(/^\//, "")
                    .split("/")
                    .filter(Boolean);
                ee[0] === "in" && ee[1]
                  ? (W = ee[1])
                  : ee[0] === "company" && ee[1] && (W = `company/${ee[1]}`);
              } else if (
                (i.source === "x-post" || i.source === "x-article") &&
                i.authorSelector
              ) {
                const D =
                    (L
                      ? Jn(E, L, i.authorSelector)
                      : E.querySelector(i.authorSelector)
                    )?.querySelectorAll('a[href^="/"]') || [],
                  Q = D.length > 1 ? D[1] : D[0];
                if (Q) {
                  const xe = (Q.getAttribute("href") || "").split("/")[1];
                  if (xe) {
                    W = `@${xe}`;
                    const Me = I.indexOf(`@${xe}`);
                    Me > 0 && (I = I.substring(0, Me).trim());
                  }
                }
              } else if (i.source === "substack-post") {
                const $ =
                    '[class*="weight-medium"] a.link-LIBpto:not([title])[href^="/@"], [class*="weight-medium"] a.link-LIBpto:not([title])[href^="/profile/"]',
                  D = L ? Jn(E, L, $) : E?.querySelector($);
                if (D) {
                  const Q = D.getAttribute("href") || "";
                  let ee = "";
                  if (
                    (Q.startsWith("/@")
                      ? (ee = Q.replace(/^\/@/, "").split("/")[0])
                      : Q.startsWith("/profile/") &&
                        (ee = Q.replace(/^\/profile\//, "")
                          .split("/")[0]
                          .replace(/^\d+-/, "")),
                    ee)
                  ) {
                    W = ee;
                    const xe = D.textContent?.trim();
                    xe && (I = xe);
                  }
                }
              } else if (i.source === "reddit-post")
                if (I) W = I.toLowerCase();
                else {
                  const $ = window.location.pathname.match(/^\/user\/([^/]+)/);
                  $ && (W = $[1].toLowerCase());
                }
              if (i.dateSelector) {
                const $ = L
                  ? Jn(E, L, i.dateSelector)
                  : E.querySelector(i.dateSelector);
                $ &&
                  ((re = $.getAttribute("datetime") || ""),
                  re ||
                    ((re = (
                      $.querySelector('span[aria-hidden="true"]')
                        ?.textContent ||
                      $.textContent ||
                      ""
                    ).trim()),
                    (re = re.replace(/\s*·?\s*Visible to .*/i, "").trim()),
                    (re = re
                      .replace(/\s*[·•]\s*Edited\b/i, "")
                      .replace(/\bEdited\b/i, "")
                      .trim())));
              }
            }
            let O;
            if (E) {
              const $ = E.querySelectorAll(i.postTextSelector),
                D = $[0];
              O =
                $.length > 1 &&
                L &&
                D !== L &&
                !D?.contains(L) &&
                !L.contains(D)
                  ? void 0
                  : Jo(i, E);
            }
            let q = "";
            if (i.source === "medium-post") {
              const $ = document.querySelectorAll(
                'script[type="application/ld+json"]',
              );
              for (const D of Array.from($))
                try {
                  const Q = JSON.parse(D.textContent || "");
                  if (Q.publisher?.name) {
                    q = Q.publisher.name;
                    break;
                  }
                } catch {}
              if (!q) {
                const D = document.title.split("|").map((Q) => Q.trim());
                D.length >= 4 &&
                  D[D.length - 1] === "Medium" &&
                  (q = D[D.length - 3] || "");
              }
            } else
              i.publicationSelector &&
                (q = (
                  document.querySelector(i.publicationSelector)?.textContent ||
                  ""
                )
                  .replace(/^Published in\s*/i, "")
                  .trim());
            let ie = "";
            if (E) {
              const D = E.querySelector(
                i.dateSelector ? `${i.dateSelector}` : "time",
              )
                ?.closest("a")
                ?.getAttribute("href");
              D &&
                (ie = D.startsWith("http")
                  ? D
                  : i.source === "github-post"
                    ? new URL(D, window.location.href).href
                    : `${window.location.origin}${D}`);
            }
            const fe = Yr(i.source),
              ve = Xo.get(t) || window.location.href;
            chrome.runtime
              .sendMessage({
                type: "FEED_SCAN_RESULT",
                scanUrl: ve,
                ...(fe && { profileInfo: fe }),
                entry: {
                  postId: t,
                  title: R,
                  text: B.length <= 100 ? B : B.slice(0, 100).trim(),
                  wordCount: tn(B),
                  prediction: s,
                  predictionShort: p,
                  ...(e.headline && { headline: e.headline }),
                  category: g,
                  source: i.source,
                  timestamp: Date.now(),
                  contentType: M,
                  ...(I && { author: I }),
                  ...(W && { authorHandle: W }),
                  ...(Y && { authorImageUrl: Y }),
                  ...(re && { postDate: re }),
                  ...(ie && { postUrl: ie }),
                  ...(y && { dashboardUrl: y }),
                  ...(O && { engagement: O }),
                  ...(q && { publication: q }),
                  ...(Object.keys(v).length > 0 && { breakdown: v }),
                  ...(e.version && { version: e.version }),
                  ...(e.is_new_user_scan != null && {
                    isNewUserScan: e.is_new_user_scan,
                  }),
                },
              })
              .catch(() => {});
          } catch {}
        }
        const N = B ? Un.get(B) : null;
        if (N) for (const R of N) so(i, R, s, g, p);
        else so(i, t, s, g, p);
        if (i.source === "medium-post")
          try {
            const E = window.location.pathname;
            chrome.storage.local.get("pangram_article_results").then((L) => {
              const I = L.pangram_article_results || {};
              I[E] = {
                category: g,
                label: p,
                ...(y && { dashboardUrl: y }),
                ts: Date.now(),
              };
              const W = Object.keys(I);
              if (W.length > 500) {
                const Y = W.sort((re, O) => (I[re].ts || 0) - (I[O].ts || 0));
                for (const re of Y.slice(0, W.length - 500)) delete I[re];
              }
              chrome.storage.local.set({ pangram_article_results: I });
            });
          } catch {}
        M === "long_post" && Ia(p, g, t, y);
      }
      if ((st(), t !== void 0 && Ot.has(t))) {
        Ot.delete(t);
        return;
      }
      (t === void 0 || t === De) && (on(), n && fn(n));
    },
    Fa = (e, t) =>
      e === 429 && !!t?.toLowerCase().includes("daily feed scan limit"),
    Na = (e, t) => {
      const n = t?.toLowerCase() ?? "";
      return (
        e === 429 ||
        n.includes("too many requests") ||
        n.includes("rate limit") ||
        n.includes("throttle")
      );
    },
    Oa = (e) => {
      const t = rn();
      return e === "linkedin-post"
        ? "rgba(0, 0, 0, 0.6)"
        : e === "reddit-post"
          ? t
            ? "#8BA2AD"
            : "#5C6C74"
          : e === "substack-post"
            ? "rgb(119, 119, 119)"
            : t
              ? "#71767B"
              : "#919EAB";
    },
    Da = (e, t, n) => {
      if (e === "Too short to check") return hi();
      const i = document.createElement("span");
      return (
        (i.className = Te),
        (i.textContent = e),
        (i.style.cssText = `
    font-size: 12px;
    font-weight: 400;
    font-style: italic;
    color: ${Oa(t)};
    white-space: nowrap;
    margin-right: 4px;
    flex-shrink: 0;
  `),
        n &&
          ((i.style.cursor = "pointer"),
          (i.style.textDecoration = "underline"),
          (i.style.textUnderlineOffset = "2px"),
          i.addEventListener("click", (s) => {
            (s.preventDefault(), s.stopPropagation(), n());
          })),
        i
      );
    },
    Ba = (e) => {
      if (!U.safeSendMessageRef || De === e || ze.some((i) => i.postId === e))
        return !1;
      const t = Yo.get(e);
      if (!t) return !1;
      ze.unshift({ ...t });
      const n = Ve();
      if (n) {
        const s = yt(n, e)?.querySelector(`.${Te}`);
        (s &&
          (s.parentElement?.classList.contains("pangram-badge-wrapper")
            ? s.parentElement.remove()
            : s.remove()),
          fn(n));
      }
      return (Xn(U.safeSendMessageRef), !0);
    },
    pn = (e, t, n, i) => {
      if (U.silentMode) return;
      const s = yt(e, t);
      if (!s) return;
      const c = s.querySelector(`.${Te}`);
      c &&
        (c.parentElement?.classList.contains("pangram-badge-wrapper")
          ? c.parentElement.remove()
          : c.remove());
      const p =
        s.querySelector(`[data-pangram-text-id="${t}"]`) ||
        s.querySelector(e.postTextSelector);
      if (!p) return;
      const g = s.hasAttribute("data-pangram-comment"),
        y =
          g && e.commentBadgeInsertion
            ? e.commentBadgeInsertion
            : e.badgeInsertion,
        d =
          g && e.commentBadgeAlignment != null
            ? e.commentBadgeAlignment
            : e.badgeAlignment,
        v = Da(n, e.source, i);
      Nt(
        s,
        p,
        v,
        y,
        e.source,
        d,
        e.badgeBoundarySelector || e.commentContainerSelector,
      );
    },
    Ei = (e, t, n) => {
      const i = Ve();
      if (Fa(n, t)) {
        const s = "Daily limit reached";
        for (
          U.quotaExhausted ||
            chrome.runtime
              .sendMessage({ type: "FEED_QUOTA_EXCEEDED" })
              .catch(() => {}),
            U.quotaExhausted = !0,
            U.quotaErrorLabel = s,
            i && e && pn(i, e, s);
          ze.length > 0;
        ) {
          const c = ze.shift();
          i && pn(i, c.postId, s);
        }
        on();
        return;
      }
      if (i && e) {
        const s =
            t === "Too short to check" ||
            !!t?.toLowerCase().includes("submit at least"),
          c = Na(n, t);
        s
          ? pn(i, e, "Too short to check")
          : c
            ? pn(i, e, "Rate limited, retry", () => Ba(e))
            : pn(i, e, "Could not check");
      }
      if (e !== void 0 && Ot.has(e)) {
        Ot.delete(e);
        return;
      }
      (e === void 0 || e === De) && (on(), i && fn(i));
    },
    $a =
      'a[href*="linkedin.com/in/"], a[href^="/in/"], a[href*="linkedin.com/company/"], a[href^="/company/"]',
    qa = (e) => {
      let t = e.parentElement;
      for (; t && t !== document.body; ) {
        if (
          t.querySelector(":scope > h2") ||
          t.classList.contains("fie-impression-container")
        )
          return null;
        if (
          t.tagName === "DIV" &&
          t.querySelector($a) &&
          t.querySelector('[data-testid="expandable-text-box"]') &&
          Ha(t)
        )
          return t;
        t = t.parentElement;
      }
      return null;
    },
    Ha = (e) => {
      const t = Array.from(e.querySelectorAll("button"));
      for (const n of t) {
        const i = n.getAttribute("aria-label") || "";
        if (/[''\u2019]s comment/.test(i) || n.textContent?.trim() === "Reply")
          return !0;
      }
      return !1;
    },
    Qn = (e, t) => {
      const n = Array.from(e.querySelectorAll("p"))
        .map((i) => (i.textContent || "").trim())
        .filter(Boolean);
      if (n.length > 0)
        return n.join(`
`);
      if (t) {
        let i = (t.innerText || "").trim();
        if (
          i &&
          (Array.from(
            t.querySelectorAll('[data-testid="expandable-text-button"]'),
          )
            .map((c) => (c.textContent || "").trim())
            .filter(Boolean)
            .forEach((c) => {
              i.slice(-c.length) === c &&
                (i = i.slice(0, -c.length).replace(/\s+$/, ""));
            }),
          i)
        )
          return i;
      }
      return (e.innerText || e.textContent || "").trim();
    },
    er = (e) => e.replace(/\s+/g, " ").trim().slice(0, 40),
    ki = (e, t, n) => {
      const i = e.getAttribute("data-pangram-text-key");
      return i === null || er(n ?? t.textContent ?? "") === i
        ? !1
        : (e.removeAttribute("data-pangram-scanned"),
          e.removeAttribute("data-pangram-text-key"),
          e.removeAttribute("data-pangram-post-id"),
          e.removeAttribute("data-pangram-fiber-full-text"),
          e
            .querySelector("[data-pangram-text-id]")
            ?.removeAttribute("data-pangram-text-id"),
          e
            .querySelectorAll(".pangram-badge-wrapper")
            .forEach((s) => s.remove()),
          e.querySelectorAll(`.${Te}`).forEach((s) => s.remove()),
          !0);
    },
    _i = (e) => {
      const t = document.querySelectorAll(e.postTextSelector),
        n = [];
      if (
        e.defaultContentType === "long_post" ||
        (e.source === "substack-post" &&
          /^\/p\/|^\/home\/post\/p-|^\/@[^/]+\/p-/.test(
            window.location.pathname,
          ))
      ) {
        const s = new Map();
        (t.forEach((c) => {
          const p = c.closest(e.postContainerSelector);
          if (!p || p.hasAttribute("data-pangram-scanned")) return;
          const g =
            e.source === "substack-post" ? Qn(c) : (c.textContent || "").trim();
          if (!g) return;
          const y = s.get(p);
          y ? y.texts.push(g) : s.set(p, { element: c, texts: [g] });
        }),
          s.forEach(({ element: c, texts: p }, g) => {
            const y = p.join(`

`);
            y && n.push({ element: c, text: y, container: g });
          }));
      } else {
        const s = new Map(),
          c = new Set();
        (t.forEach((p) => {
          if (
            p.tagName === "BUTTON" ||
            p.tagName === "A" ||
            (e.source === "x-post" && p.closest('[role="link"][tabindex="0"]'))
          )
            return;
          if (e.source === "linkedin-post") {
            const E = qa(p);
            if (E) {
              if (E.hasAttribute("data-pangram-scanned")) {
                if (c.has(E)) return;
                if (!ki(E, p)) {
                  c.add(E);
                  return;
                }
              }
              const L = p.cloneNode(!0);
              L.querySelectorAll(
                '[data-testid="expandable-text-button"]',
              ).forEach((W) => W.remove());
              const I = Qn(L, p);
              I &&
                (E.setAttribute("data-pangram-comment", ""),
                n.push({ element: p, text: I, container: E, isComment: !0 }));
              return;
            }
          }
          const g = p.closest(e.postContainerSelector);
          if (!g) return;
          let y;
          if (e.source === "github-post") {
            const E = g.querySelector(
              'clipboard-copy[role="menuitem"][value]',
            );
            if (!E) {
              g.querySelector(".timeline-comment-actions details-menu[preload]")
                ?.closest("details")
                ?.dispatchEvent(new MouseEvent("mouseover", { bubbles: !0 }));
              return;
            }
            y = (E.getAttribute("value") || "").trim();
          } else y = (p.innerText || p.textContent || "").trim();
          if (g.hasAttribute("data-pangram-scanned")) {
            if (c.has(g))
              if (
                !(
                  !!g.querySelector(".pangram-badge-wrapper") ||
                  !!g.querySelector(".pangram-feed-badge")
                ) &&
                tn(y) >= e.minWords
              )
                (g.removeAttribute("data-pangram-scanned"),
                  g.removeAttribute("data-pangram-text-key"),
                  g.removeAttribute("data-pangram-post-id"),
                  g.removeAttribute("data-pangram-fiber-full-text"),
                  g
                    .querySelector("[data-pangram-text-id]")
                    ?.removeAttribute("data-pangram-text-id"),
                  c.delete(g));
              else return;
            else if (
              !ki(g, p, e.source === "github-post" ? y : void 0)
            )
              if (
                !(
                  !!g.querySelector(".pangram-badge-wrapper") ||
                  !!g.querySelector(".pangram-feed-badge")
                ) &&
                tn(y) >= e.minWords
              )
                (g.removeAttribute("data-pangram-scanned"),
                  g.removeAttribute("data-pangram-text-key"),
                  g.removeAttribute("data-pangram-post-id"),
                  g.removeAttribute("data-pangram-fiber-full-text"),
                  g
                    .querySelector("[data-pangram-text-id]")
                    ?.removeAttribute("data-pangram-text-id"));
              else {
                c.add(g);
                return;
              }
          }
          let d;
          if (e.source === "linkedin-post") {
            const E = p.cloneNode(!0);
            (E.querySelectorAll(
              '[data-testid="expandable-text-button"]',
            ).forEach((L) => L.remove()),
              (d = Qn(E, p)));
          } else
            e.source === "substack-post"
              ? (d = Qn(p))
              : (d = y);
          let v = !1,
            k = !1;
          if (e.source === "x-post") {
            k =
              !!(e.showMoreSelector && g.querySelector(e.showMoreSelector)) ||
              Array.from(g.querySelectorAll("span")).some(
                (L) =>
                  L.textContent?.trim() === "Show more" &&
                  L.closest("article") === g,
              );
            const E = Us(p);
            E && ((d = E), (v = !0));
          } else if (
            e.source === "substack-post" &&
            ((k = !!(
              e.showMoreSelector && g.querySelector(e.showMoreSelector)
            )),
            k)
          ) {
            const E = Ws(p);
            E && ((d = E), (v = !0));
          }
          if (!d) return;
          const M = tn(d);
          let B = g;
          if (e.source === "linkedin-post") {
            let E = p;
            for (; E && E !== g && E.parentElement !== g; ) E = E.parentElement;
            E && E !== g && (B = E);
          }
          const N = s.get(g) ?? new Map();
          s.set(g, N);
          const R = N.get(B);
          (!R || M > R.wordCount) &&
            N.set(B, {
              element: p,
              text: d,
              wordCount: M,
              fiberFullText: v,
              hasShowMore: k,
            });
        }),
          s.forEach((p, g) => {
            p.forEach(
              ({ element: y, text: d, fiberFullText: v, hasShowMore: k }) => {
                n.push({
                  element: y,
                  text: d,
                  container: g,
                  fiberFullText: v,
                  hasShowMore: k,
                  isComment:
                    e.source === "github-post" &&
                    !!e.commentContainerSelector &&
                    g.matches(e.commentContainerSelector),
                });
              },
            );
          }));
      }
      return n;
    },
    be = (e, t) => {
      if (U.platformDisabled) return;
      const n = t ?? Ve();
      if (!n) return;
      const i = _i(n);
      if (i.length === 0) return;
      let s = 0;
      if (
        (i.forEach(
          ({
            element: c,
            text: p,
            container: g,
            fiberFullText: y,
            hasShowMore: d,
            isComment: v,
          }) => {
            v && g.setAttribute("data-pangram-comment", "");
            const k = zs(n, g, c);
            if (
              k?.platformId &&
              n.excludedPlatformIds?.some(
                (j) => j.toLowerCase() === k.platformId.toLowerCase(),
              )
            ) {
              (g.setAttribute("data-pangram-scanned", "true"),
                g.setAttribute("data-pangram-text-key", er(p)));
              return;
            }
            const M = tn(p),
              B =
                n.source === "linkedin-post" &&
                !v &&
                g.querySelectorAll('[data-testid="expandable-text-box"]')
                  .length > 1,
              N = v || B ? (n.commentMinWords ?? n.minWords) : n.minWords,
              R =
                v && n.commentBadgeInsertion
                  ? n.commentBadgeInsertion
                  : n.badgeInsertion,
              E =
                v && n.commentBadgeAlignment != null
                  ? n.commentBadgeAlignment
                  : n.badgeAlignment;
            if (M < N && !(d && !y)) {
              if (
                (g.setAttribute("data-pangram-scanned", "true"),
                g.setAttribute("data-pangram-text-key", er(p)),
                !U.silentMode)
              ) {
                const j = hi();
                Nt(
                  g,
                  c,
                  j,
                  R,
                  n.source,
                  E,
                  n.badgeBoundarySelector || n.commentContainerSelector,
                );
              }
              return;
            }
            (g.setAttribute("data-pangram-scanned", "true"),
              g.setAttribute("data-pangram-text-key", er(p)),
              y && g.setAttribute("data-pangram-fiber-full-text", "true"));
            const L = n.maxWords ? $s(p, n.maxWords) : p;
            let I = Hs(n.source, p);
            if (document.querySelector(`[data-pangram-post-id="${I}"]`)) {
              let j = 1;
              for (
                ;
                document.querySelector(`[data-pangram-post-id="${I}-${j}"]`);
              )
                j++;
              I = `${I}-${j}`;
            }
            const W = window.location.href;
            (g.setAttribute("data-pangram-post-id", I),
              Kr.set(I, g),
              c.setAttribute("data-pangram-text-id", I),
              Xo.set(I, W));
            let Y = n.defaultContentType;
            (v
              ? (Y = "comment")
              : Y !== "long_post" &&
                n.source === "substack-post" &&
                /^\/p\/|^\/home\/post\/p-|^\/@[^/]+\/p-/.test(
                  window.location.pathname,
                ) &&
                g.closest("article.post") &&
                (Y = "long_post"),
              Zr.set(I, Y));
            const re = Xr.get(L);
            if (re) {
              so(n, I, re.prediction, re.category, re.label, re.dashboardUrl);
              return;
            }
            if (U.quotaExhausted && U.quotaErrorLabel && !U.silentMode) {
              const j = document.createElement("span");
              ((j.className = Te),
                (j.textContent = U.quotaErrorLabel),
                (j.style.cssText = `
        font-size: 11px;
        font-weight: 400;
        font-style: italic;
        color: #919EAB;
        white-space: nowrap;
        margin-right: 4px;
        flex-shrink: 0;
      `),
                (j.style.opacity = "0.5"),
                (j.style.transition = "opacity 0.2s ease"),
                j.classList.add("pangram-feed-badge-hover"),
                g.addEventListener("mouseenter", () => {
                  g.querySelectorAll(".pangram-feed-badge-hover").forEach(
                    (se) => {
                      se.style.opacity = "1";
                    },
                  );
                }),
                g.addEventListener("mouseleave", () => {
                  g.querySelectorAll(".pangram-feed-badge-hover").forEach(
                    (se) => {
                      se.style.opacity = "0.5";
                    },
                  );
                }),
                Nt(
                  g,
                  c,
                  j,
                  R,
                  n.source,
                  E,
                  n.badgeBoundarySelector || n.commentContainerSelector,
                ));
              return;
            }
            const O = Un.get(L);
            if (O) {
              (O.push(I), jn.set(I, L));
              return;
            }
            (Un.set(L, [I]), jn.set(I, L), s++);
            const q = Gs(n, g);
            k?.platformId &&
              g.setAttribute(
                "data-pangram-author-handle",
                k.platformId.toLowerCase(),
              );
            let ie;
            if (n.source === "linkedin-post" && k) {
              const j = Array.from(
                g.querySelectorAll(
                  'a[href*="linkedin.com/in/"], a[href^="/in/"], a[href*="linkedin.com/company/"], a[href^="/company/"]',
                ),
              );
              for (const se of j) {
                const ke = se.getAttribute("href") || "";
                if (
                  (ke.startsWith("http") ? new URL(ke).pathname : ke).includes(
                    k.platformId,
                  )
                ) {
                  const A = se.querySelector("img[src]");
                  if (A?.src) {
                    ie = A.src;
                    break;
                  }
                }
              }
            } else if (n.source === "x-post" || n.source === "x-article") {
              let j = null,
                se = c.parentElement;
              for (
                ;
                se &&
                se !== g &&
                ((j = se.querySelector('[data-testid="Tweet-User-Avatar"]')),
                !j);
              )
                se = se.parentElement;
              if (!j) {
                const w = Array.from(
                  g.querySelectorAll('[data-testid="Tweet-User-Avatar"]'),
                );
                j =
                  w.find((A) => !A.closest('[role="link"][tabindex="0"]')) ||
                  w[0] ||
                  null;
              }
              const ke = j?.querySelector("img[src]");
              ke?.src && (ie = ke.src);
            } else if (n.source === "substack-post") {
              const j =
                g.querySelector(
                  '[class*="byline-wrapper"] img[alt*="avatar"][src]',
                ) || g.querySelector('a[href^="/@"] img[alt*="avatar"][src]');
              j && (ie = j.currentSrc || j.src);
            } else if (n.source === "reddit-post") {
              const se = g
                .querySelector('a[href^="/user/"] svg image[href]')
                ?.getAttribute("href");
              se && (ie = se);
            } else if (n.source === "medium-post") {
              const j = g.querySelector('img[data-testid="authorPhoto"][src]');
              j?.src && (ie = j.src);
            }
            const fe = n.dateSelector || "time",
              $ = g.querySelector(fe)?.closest("a")?.getAttribute("href"),
              D = $
                ? $.startsWith("http")
                  ? $
                  : n.source === "github-post"
                    ? new URL($, window.location.href).href
                    : `${window.location.origin}${$}`
                : "";
            let Q = "";
            const ee = g.getAttribute("post-title");
            if (
              (ee
                ? (Q = ee.trim())
                : n.titleSelector &&
                  (Q = (
                    g.querySelector(n.titleSelector)?.textContent || ""
                  ).trim()),
              !Q && n.source !== "substack-post")
            ) {
              const j = g.getAttribute("aria-label");
              j && (Q = j.trim());
            }
            const xe = Jo(n, g);
            let Me;
            if (n.dateSelector) {
              const j = g.querySelector(n.dateSelector);
              if (j) {
                const se = j.getAttribute("datetime");
                se && (Me = se);
              }
            }
            const ce = {
              textToScan: L,
              postId: I,
              source: n.source,
              contentType: Y,
              url: D || window.location.href,
              author: k,
              publication: q,
              ...(Q && { title: Q }),
              ...(ie && { authorProfileImageUrl: ie }),
              ...(xe && { engagement: xe }),
              ...(Me && { sourceDate: Me }),
            };
            (Yo.set(I, ce), ze.push(ce));
          },
        ),
        fn(n),
        s > 0 && Jr(!0),
        Xn(e),
        !t && n.source === "x-article")
      ) {
        const c = Ye.find((p) => p.source === "x-post");
        c && be(e, c);
      }
    },
    ao = (e, t, n) => {
      (e.querySelectorAll(`.${Te}`).forEach((i) => {
        i.parentElement?.classList.contains("pangram-badge-wrapper")
          ? i.parentElement.remove()
          : i.remove();
      }),
        e.querySelectorAll(".pangram-fox-logo").forEach((i) => i.remove()),
        e.removeAttribute("data-pangram-scanned"),
        e.removeAttribute("data-pangram-post-id"),
        e.removeAttribute("data-pangram-author-handle"),
        e
          .querySelector("[data-pangram-text-id]")
          ?.removeAttribute("data-pangram-text-id"),
        e.removeAttribute("data-pangram-fiber-full-text"),
        setTimeout(() => be(t, n), 300));
    },
    Ua = (e) => {
      document.addEventListener(
        "click",
        (t) => {
          const n = t.target,
            i =
              n.closest(
                'button[aria-label="Show translation"], button[aria-label="Show original"]',
              ) || n.closest("button");
          if (!i) return;
          const s = i.textContent?.trim();
          if (
            s !== "Show translation" &&
            s !== "Show original" &&
            s !== "Translate post"
          )
            return;
          const c = i.closest("article");
          !c ||
            !c.hasAttribute("data-pangram-scanned") ||
            setTimeout(() => ao(c, e), 500);
        },
        !0,
      );
    },
    Ti = "pangram_article_results",
    Ai = "data-pangram-backfill",
    ja = {
      ai: "AI Detected",
      "ai-assisted": "AI-Assisted",
      mixed: "Mixed",
      human: "Human Written",
    },
    Wa = (e) => {
      const t = e.category,
        n = Kn(t),
        i = ja[t] || e.label,
        s = document.createElement("span");
      return (
        (s.className = Te),
        (s.innerHTML = `${Zn[t] || ""}`),
        (s.title = i),
        (s.style.cssText = `
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 0 4px;
    height: 20px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    background-color: ${n.bgColor};
    color: ${n.textColor};
    white-space: nowrap;
    flex-shrink: 0;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  `),
        s.addEventListener("click", (c) => {
          (c.preventDefault(),
            c.stopPropagation(),
            e.dashboardUrl
              ? window.open(e.dashboardUrl, "_blank")
              : chrome.runtime.sendMessage({ type: "OPEN_FEED_PANEL" }));
        }),
        s
      );
    },
    Va = (e, t) => {
      const n = e.querySelector(
        `button[aria-label="I'm not interested in this story"]`,
      );
      if (!n) return;
      const i = n.parentElement?.parentElement?.parentElement;
      if (!i) return;
      const s = document.createElement("div");
      ((s.style.cssText =
        "width:0;height:0;overflow:visible;position:relative;display:inline-block;flex-shrink:0;"),
        s.appendChild(Wa(t)),
        i.insertAdjacentElement("beforebegin", s));
    },
    Li = () => {
      const e = Array.from(
        document.querySelectorAll(`[role="link"][data-href]:not([${Ai}])`),
      );
      e.length &&
        chrome.storage.local.get(Ti).then((t) => {
          const n = t[Ti] || {};
          for (const i of e) {
            i.setAttribute(Ai, "true");
            const s = i.getAttribute("data-href");
            if (s)
              try {
                const c = new URL(s).pathname,
                  p = n[c];
                p && Va(i, p);
              } catch {}
          }
        });
    },
    za = 600;
  let tr = null,
    lo = !1;
  const Ga = () => {
      (lo ||
        (tr === null
          ? (tr = window.scrollY)
          : Math.abs(window.scrollY - tr) >= za &&
            ((lo = !0),
            chrome.runtime
              .sendMessage({ type: "PAGE_SCROLL" })
              .catch(() => {}))),
        U.scrollScanTimer && clearTimeout(U.scrollScanTimer),
        (U.scrollScanTimer = setTimeout(() => {
          U.safeSendMessageRef && be(U.safeSendMessageRef);
        }, 500)));
    },
    Za = () => {
      ((tr = null), (lo = !1));
    },
    Ka = () => {
      const e = document.createElement("span");
      return (
        (e.className = Te),
        (e.textContent = "Sign in to see AI results"),
        (e.style.cssText = `
    font-size: 12px;
    font-weight: 400;
    font-style: italic;
    color: #919EAB;
    white-space: nowrap;
    margin-right: 4px;
    flex-shrink: 0;
    cursor: pointer;
  `),
        e.addEventListener("click", (t) => {
          (t.preventDefault(),
            t.stopPropagation(),
            window.open(`${Vr}/chrome/login`, "_blank"));
        }),
        e
      );
    },
    Ii = (e) => {
      if (!e) return;
      const t = _i(e);
      for (const { element: n, container: i } of t) {
        if (i.hasAttribute("data-pangram-scanned")) continue;
        i.setAttribute("data-pangram-scanned", "true");
        const s = Ka();
        Nt(
          i,
          n,
          s,
          e.badgeInsertion,
          e.source,
          e.badgeAlignment,
          e.badgeBoundarySelector || e.commentContainerSelector,
        );
      }
      if (e.source === "x-article") {
        const n = Bn.configs["x-post"];
        n && Ii(n);
      }
    },
    Ri = () => {
      (document
        .querySelectorAll(".pangram-badge-wrapper")
        .forEach((e) => e.remove()),
        document.querySelectorAll(`.${Te}`).forEach((e) => e.remove()),
        document.getElementById("pangram-profile-stats")?.remove(),
        document.querySelectorAll("[data-pangram-scanned]").forEach((e) => {
          (e.removeAttribute("data-pangram-scanned"),
            e.removeAttribute("data-pangram-text-key"),
            e.removeAttribute("data-pangram-post-id"),
            e.removeAttribute("data-pangram-fiber-full-text"));
        }),
        document.querySelectorAll("[data-pangram-text-id]").forEach((e) => {
          e.removeAttribute("data-pangram-text-id");
        }),
        Un.clear(),
        jn.clear(),
        Zr.clear(),
        Kr.clear(),
        pa());
    },
    co = () => {
      (Ri(), Xr.clear());
    },
    Mi = () => {
      Ri();
    };
  let Pi = !1,
    Fi = !1;
  const Xa = () => {
      Fi ||
        ((Fi = !0),
        chrome.runtime
          .sendMessage({ type: "OPEN_CONSENT_TAB" })
          .catch(() => {}));
    },
    nr = async (e) => {
      const t = Ve();
      if (!t) return;
      t.source === "x-post" ? js() : t.source === "substack-post" && Vs();
      const { isAuthenticated: n, user: i } = await Rt.get();
      if (!n) {
        const p = () => Ii(Ve());
        (p(),
          setTimeout(p, 2e3),
          setTimeout(p, 5e3),
          window.addEventListener("scroll", p, { passive: !0 }));
        return;
      }
      if (
        !(
          !!i?.plan?.active ||
          !!i?.institutionalLicense?.active ||
          !!i?.individualLicense?.active ||
          !!i?.organizationLicense?.active
        )
      )
        return;
      ((U.safeSendMessageRef = e),
        (U.onScanTimeout = (p) => Ei(p)),
        (U.getActiveSiteConfigRef = Ve),
        (U.updateLoadingBadgesRef = fn));
      const c = window.location.hostname;
      if (
        (Zo(t.source).some((p) => c === p || c.endsWith(`.${p}`)) ||
          chrome.runtime.sendMessage({ type: "ENABLE_SIDE_PANEL" }),
        (U.scanPostsRef = be),
        st(),
        setTimeout(() => {
          const p = Yr(t.source);
          if (p) {
            const g = window.location.hostname.replace("www.", ""),
              y = window.location.pathname,
              d =
                t.source === "medium-post" &&
                g !== "medium.com" &&
                !g.endsWith(".medium.com") &&
                (y === "/" || y === "");
            chrome.runtime
              .sendMessage({
                type: "FEED_SCAN_PROFILE_INFO",
                scanUrl: window.location.href,
                source: t.source,
                profileInfo: p,
                ...(d && { scanType: "profile", profileName: p.name || g }),
              })
              .catch(() => {});
          }
        }, 2e3),
        be(e),
        setTimeout(() => be(e), 2e3),
        setTimeout(() => be(e), 5e3),
        setTimeout(() => be(e), 1e4),
        Ua(e),
        (t.source === "x-post" || t.source === "x-article") &&
          new MutationObserver((g) => {
            for (const y of g)
              for (let d = 0; d < y.addedNodes.length; d++) {
                const v = y.addedNodes[d];
                if (v.nodeType !== Node.ELEMENT_NODE) continue;
                const k = v,
                  M = k.matches('[aria-label="Grok actions"]')
                    ? k
                    : k.querySelector('[aria-label="Grok actions"]');
                if (!M) continue;
                let B;
                if (t.source === "x-article") {
                  const R = M.closest(
                    '[data-testid="twitterArticleReadView"] article[data-pangram-scanned]',
                  );
                  if (R) {
                    const E = Bn.configs["x-post"];
                    ao(R, e, E);
                    continue;
                  }
                  B = document.querySelector(
                    'article[data-testid="tweet"]:has([data-testid="twitterArticleReadView"])[data-pangram-scanned]',
                  );
                } else B = M.closest("article[data-pangram-scanned]");
                !B ||
                  B.querySelector(`.${Te}`)?.hasAttribute(
                    "data-pangram-too-short",
                  ) ||
                  ao(B, e);
              }
          }).observe(document.body, { childList: !0, subtree: !0 }),
        t.source === "medium-post" && Li(),
        !Pi)
      ) {
        if (((Pi = !0), t.source !== "x-post")) {
          let v = null,
            k = null,
            M = 0;
          const B = 200,
            N =
              document.querySelector('[data-testid="primaryColumn"]') ||
              document.body,
            R = (I) => {
              if (I.nodeType !== Node.ELEMENT_NODE) return !1;
              const W = I,
                Y = W.className;
              return !!(
                (typeof Y == "string" &&
                  (Y.includes("pangram-") || Y.includes(Te))) ||
                W.id?.startsWith("pangram-")
              );
            };
          let E = null;
          new MutationObserver((I) => {
            let W = !1;
            for (const re of I) {
              for (let O = 0; O < re.addedNodes.length; O++)
                if (!R(re.addedNodes[O])) {
                  W = !0;
                  break;
                }
              if (W) break;
              for (let O = 0; O < re.removedNodes.length; O++)
                if (!R(re.removedNodes[O])) {
                  W = !0;
                  break;
                }
              if (W) break;
            }
            if (!W) return;
            const Y = Date.now();
            if (Y < M) {
              E ||
                (E = setTimeout(() => {
                  ((E = null),
                    (M = Date.now() + B),
                    v && clearTimeout(v),
                    (v = setTimeout(() => {
                      be(e);
                    }, 500)));
                }, M - Y));
              return;
            }
            ((M = Y + B),
              v && clearTimeout(v),
              (v = setTimeout(() => {
                be(e);
              }, 500)),
              t.source === "medium-post" &&
                (k && clearTimeout(k), (k = setTimeout(() => Li(), 500))));
          }).observe(N, { childList: !0, subtree: !0 });
        }
        (window.addEventListener("scroll", Ga, { passive: !0 }),
          chrome.runtime.onMessage.addListener((v) => {
            v.type === "RESET_SCROLL_ANCHOR" && Za();
          }));
        let p = window.location.href;
        const g = () => {
          const v = window.location.href;
          if (v === p) return;
          ((p = v),
            Mi(),
            st(),
            setTimeout(() => be(e), 800),
            setTimeout(() => be(e), 2e3),
            setTimeout(() => be(e), 4e3),
            setTimeout(() => be(e), 7e3),
            document.querySelectorAll("iframe").forEach((N) => {
              try {
                N.contentWindow?.postMessage(
                  { type: "PANGRAM_RESET_AND_SCAN" },
                  window.location.origin,
                );
              } catch {}
            }));
          const k = v;
          let M = 0;
          const B = () => {
            window.location.href !== k ||
              M++ >= 15 ||
              (be(e), setTimeout(B, 2e3));
          };
          (setTimeout(B, 2e3),
            setTimeout(() => st(), 2e3),
            setTimeout(() => st(), 4e3),
            setTimeout(() => {
              const N = Yr(t.source);
              N &&
                chrome.runtime
                  .sendMessage({
                    type: "FEED_SCAN_PROFILE_INFO",
                    scanUrl: window.location.href,
                    source: t.source,
                    profileInfo: N,
                  })
                  .catch(() => {});
            }, 2500));
        };
        window.addEventListener("popstate", g);
        const y = history.pushState.bind(history);
        history.pushState = (...v) => {
          (y(...v), setTimeout(g, 0));
        };
        const d = history.replaceState.bind(history);
        ((history.replaceState = (...v) => {
          (d(...v), setTimeout(g, 0));
        }),
          setInterval(() => g(), 500),
          document.addEventListener(
            "click",
            (v) => {
              v.target.closest("a[href]") &&
                (setTimeout(() => be(e), 1500), setTimeout(() => be(e), 3e3));
            },
            { capture: !0 },
          ),
          window !== window.top &&
            window.addEventListener("message", (v) => {
              v.origin === window.location.origin &&
                v.data?.type === "PANGRAM_RESET_AND_SCAN" &&
                (Mi(),
                setTimeout(() => be(e), 100),
                setTimeout(() => be(e), 800),
                setTimeout(() => be(e), 2e3));
            }));
      }
    },
    Ni = async (e) => {
      {
        const c = "pangram-remote-site-config";
        let p = null;
        try {
          p = (await chrome.storage.local.get(c))[c] ?? null;
        } catch {}
        _s((p ?? Bn).configs);
      }
      const t = Ve();
      if (!t) return;
      const n = Go[t.source];
      (chrome.storage.onChanged.addListener((c, p) => {
        if (p !== "local") return;
        const g = "setting-storage-key";
        if (!(g in c)) return;
        const y = c[g].newValue;
        if (!y) return;
        const d = c[g].oldValue;
        if (d && !d.feedScanConsentAnswered && y.feedScanConsentAnswered) {
          U.platformDisabled ||
            ((U.silentMode = y.feedScanMode === "silent"), nr(e));
          return;
        }
        const v =
          y.feedScanEnabled === !1 ||
          (n && y.feedScanPlatforms?.[n] === !1);
        v && !U.platformDisabled
          ? ((U.platformDisabled = !0), co())
          : !v &&
            U.platformDisabled &&
            ((U.platformDisabled = !1), co(), nr(e));
        const k = y.feedScanMode === "silent";
        k !== U.silentMode &&
          ((U.silentMode = k), co(), U.platformDisabled || nr(e));
      }),
        await Es);
      const i = await rt.get(),
        { isAuthenticated: s } = await Rt.get();
      if (s && !i.feedScanConsentAnswered) {
        Xa();
        return;
      }
      if (
        i.feedScanEnabled === !1 ||
        (n && i.feedScanPlatforms?.[n] === !1)
      ) {
        U.platformDisabled = !0;
        return;
      }
      ((U.silentMode = i.feedScanMode === "silent"), await nr(e));
    },
    Oi = "pangram-gmail-exclusion-toast",
    Ya = "mail.google.com",
    Di = "data-pangram-gmail-result-link",
    Bi = "data-pangram-gmail-result-link-ready",
    uo = "data-pangram-gmail-result-link-loading",
    $i = "data-pangram-original-title",
    rr = '.at[title^="Pangram/"]',
    qi = "Open detailed Pangram report",
    Ja = "https://www.pangram.com",
    Qa = 200;
  let or = null,
    fo = null,
    Bt = null;
  const po = new Set(),
    el = () => {
      try {
        return window.top === window.self;
      } catch {
        return !1;
      }
    },
    Hi = () => el() && window.location.hostname === Ya,
    tl = () =>
      new Promise((e) => {
        if (!Ui()) {
          e(!1);
          return;
        }
        try {
          chrome.runtime.sendMessage(
            { type: "GET_GMAIL_FEATURE_STATUS" },
            (t) => {
              if (chrome.runtime.lastError) {
                e(!1);
                return;
              }
              e(t?.enabled === !0);
            },
          );
        } catch {
          e(!1);
        }
      }),
    nl = async () => {
      const { user: e } = await Rt.get();
      return typeof e.gmailIntegrationEnabled == "boolean"
        ? e.gmailIntegrationEnabled
        : e.sessionId
          ? tl()
          : !1;
    },
    Ui = () => {
      try {
        return !!chrome.runtime?.id;
      } catch {
        return !1;
      }
    },
    ji = (e, t) => {
      let n = document.getElementById(Oi);
      (n ||
        ((n = document.createElement("div")),
        (n.id = Oi),
        (n.style.position = "fixed"),
        (n.style.right = "24px"),
        (n.style.bottom = "84px"),
        (n.style.zIndex = "2147483647"),
        (n.style.maxWidth = "320px"),
        (n.style.borderRadius = "8px"),
        (n.style.padding = "10px 12px"),
        (n.style.fontFamily = "Inter, Arial, sans-serif"),
        (n.style.fontSize = "13px"),
        (n.style.fontWeight = "500"),
        (n.style.lineHeight = "18px"),
        document.documentElement.appendChild(n)),
        (n.textContent = e),
        (n.style.background = "#FCE8E6"),
        (n.style.color = "#A50E0E"),
        (n.style.border = "1px solid #F6AEA9"),
        (n.style.display = "block"),
        fo && clearTimeout(fo),
        (fo = setTimeout(() => {
          n && (n.style.display = "none");
        }, 3e3)));
    },
    rl = async (e) =>
      new Promise((t) => {
        if (!Ui()) {
          t({ success: !1, error: "Extension context is unavailable." });
          return;
        }
        try {
          chrome.runtime.sendMessage(
            {
              type: "GMAIL_RESULT_LINK",
              gmailMessageId: e.gmailMessageId,
              threadId: e.threadId,
            },
            (n) => {
              if (chrome.runtime.lastError) {
                t({ success: !1, error: chrome.runtime.lastError.message });
                return;
              }
              t(n || {});
            },
          );
        } catch (n) {
          t({
            success: !1,
            error:
              n instanceof Error ? n.message : "Unable to open Gmail result.",
          });
        }
      }),
    ol = (e) => (e || "").replace(/^#thread-[^:]+:/, "").trim(),
    ir = (e, t) =>
      e instanceof HTMLElement && e.hasAttribute(t)
        ? e
        : e.querySelector(`[${t}]`),
    il = (e) => {
      const n =
          e.closest('tr[role="row"], [role="row"], tr') ||
          e.parentElement ||
          document.body,
        i =
          ir(n, "data-legacy-last-message-id") ||
          ir(n, "data-legacy-last-non-draft-message-id"),
        s = ir(n, "data-legacy-thread-id") || ir(n, "data-thread-id"),
        c =
          i?.getAttribute("data-legacy-last-message-id") ||
          i?.getAttribute("data-legacy-last-non-draft-message-id") ||
          void 0,
        p =
          s?.getAttribute("data-legacy-thread-id") ||
          ol(s?.getAttribute("data-thread-id")) ||
          void 0;
      return { ...(c && { gmailMessageId: c }), ...(p && { threadId: p }) };
    },
    sl = (e) =>
      /^https?:\/\//i.test(e)
        ? e
        : `${Ja.replace(/\/$/, "")}${e.startsWith("/") ? e : `/${e}`}`,
    Wi = (e) => {
      window.open(sl(e), "_blank", "noopener,noreferrer");
    },
    al = (e) =>
      e?.includes("gmail_result_not_found")
        ? "Pangram result is not ready for this Gmail label yet."
        : e?.includes("gmail_not_connected")
          ? "Connect Gmail in Pangram before opening Gmail results."
          : e || "Unable to open this Pangram Gmail result.",
    Vi = (e) => {
      if (e.getAttribute(Bi) === "true") return;
      (e.setAttribute(Bi, "true"),
        e.getAttribute($i) || e.setAttribute($i, e.getAttribute("title") || ""),
        e.setAttribute("title", qi),
        e.setAttribute("aria-label", qi),
        e.setAttribute("role", "link"),
        e.setAttribute("tabindex", "0"),
        (e.style.cursor = "pointer"));
      const t = async (n) => {
        (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation());
        const i = e.getAttribute(Di);
        if (i) {
          Wi(i);
          return;
        }
        if (e.getAttribute(uo) === "true") return;
        const s = il(e);
        if (!s.gmailMessageId && !s.threadId) {
          ji("Unable to identify this Gmail message.");
          return;
        }
        e.setAttribute(uo, "true");
        const c = await rl(s);
        e.removeAttribute(uo);
        const p = c.result?.path || c.result?.url;
        if (c.success && p) {
          (e.setAttribute(Di, p), Wi(p));
          return;
        }
        ji(al(c.error));
      };
      (e.addEventListener("click", t, !0),
        e.addEventListener("keydown", (n) => {
          (n.key === "Enter" || n.key === " ") && t(n);
        }));
    },
    zi = (e = document) => {
      Hi() &&
        (e instanceof Element && e.matches(rr) && Vi(e),
        e.querySelectorAll(rr).forEach(Vi));
    },
    ll = () => {
      Bt ||
        (Bt = setTimeout(() => {
          Bt = null;
          const e = Array.from(po);
          (po.clear(), e.forEach((t) => zi(t)));
        }, Qa));
    },
    cl = (e) => {
      e instanceof Element &&
        (e.matches(rr) || e.querySelector(rr)) &&
        po.add(e);
    },
    ul = async () => {
      Hi() &&
        (await nl()) &&
        (zi(),
        (or = new MutationObserver((e) => {
          (e.forEach((t) => {
            t.addedNodes.forEach(cl);
          }),
            ll());
        })),
        or.observe(document.body || document.documentElement, {
          childList: !0,
          subtree: !0,
        }),
        window.addEventListener("beforeunload", () => {
          (Bt && (clearTimeout(Bt), (Bt = null)),
            or?.disconnect(),
            (or = null));
        }));
    };
  (vs(), ul());
  let Gi = 0,
    wt = !1,
    mo = null,
    mn = { docId: "", maxRev: 0, data: void 0 };
  const ho = () => {
      try {
        return !!chrome.runtime?.id;
      } catch {
        return !1;
      }
    },
    _e = (e) => {
      if (ho())
        try {
          chrome.runtime.sendMessage(e).catch(() => {
            e.type === "DETECT" && on();
          });
        } catch {
          e.type === "DETECT" && on();
        }
    };
  function go(e) {
    return new Promise((t) => {
      if (!ho()) {
        t(void 0);
        return;
      }
      try {
        chrome.runtime.sendMessage(e, (n) => {
          if (chrome.runtime.lastError) {
            (console.warn("sendMessage lastError", chrome.runtime.lastError),
              t(void 0));
            return;
          }
          t(n);
        });
      } catch (n) {
        (console.warn("sendMessage threw", n), t(void 0));
      }
    });
  }
  const hn = (e) =>
      e.includes("words for an accurate prediction")
        ? {
            message: e,
            hasLink: !0,
            linkText: "here.",
            linkUrl:
              "https://pangram.com/blog/why-does-pangram-have-a-minimum-word-count",
            linkContext: "Learn more about our minimum word count requirement ",
          }
        : { message: e, hasLink: !1 },
    dl = 3e3;
  (chrome.runtime.onMessage.addListener((e, t, n) => {
    if (e.type === "DOCUMENT_SAVED") {
      wt = !0;
      return;
    }
    if (e.type === "SCROLL_TO_POST" && e.postId) {
      const i = document.querySelector(`[data-pangram-post-id="${e.postId}"]`);
      if (i) {
        i.scrollIntoView({ behavior: "smooth", block: "center" });
        const s = i;
        ((s.style.outline = "2px solid #FF6106"),
          (s.style.outlineOffset = "2px"),
          (s.style.transition = "outline-color 1.5s ease"),
          setTimeout(() => {
            s.style.outlineColor = "transparent";
          }, 1500),
          setTimeout(() => {
            ((s.style.outline = ""),
              (s.style.outlineOffset = ""),
              (s.style.transition = ""));
          }, 3e3));
      }
      return;
    }
    if (e.source && Bs(e.source) && Ds()) {
      (e.type === "RESPONSE" &&
        e.message?.response &&
        Pa(e.message.response, e.postId),
        e.type === "ERROR" &&
          e.message &&
          (console.warn(
            "[Pangram] Feed Scanner error:",
            e.message.errorMessage,
          ),
          Ei(e.postId, e.message.errorMessage, e.message.statusCode)));
      return;
    }
    if (e.type === "GET_CLIPBOARD_TEXT")
      try {
        const i = document.createElement("textarea");
        ((i.style.position = "fixed"),
          (i.style.top = "-9999px"),
          (i.style.left = "-9999px"),
          document.body.appendChild(i),
          i.focus(),
          document.execCommand("paste"));
        const s = i.value;
        (document.body.removeChild(i), n({ text: s }));
      } catch (i) {
        (console.error("Failed to get clipboard text:", i), n({ text: "" }));
      }
  }),
    window.addEventListener("message", async (e) => {
      const { type: t, payload: n } = e.data;
      if (
        !t ||
        (t !== "PANGRAM_PING" &&
          t !== "CHROME_EXTENSION_MESSAGE" &&
          t !== "FEED_SCAN_OPT_IN" &&
          t !== "FEED_SCAN_OPT_OUT" &&
          t !== "FEED_SCAN_PLATFORM_UPDATE" &&
          t !== "FEED_SCAN_ENABLE_ALL" &&
          t !== "CHROME_EXTENSION_LOGOUT")
      )
        return;
      if (t === "PANGRAM_PING") {
        window.postMessage({ type: "PANGRAM_PONG" }, e.origin || "*");
        return;
      }
      if (
        t === "CHROME_EXTENSION_MESSAGE" &&
        (!n || typeof n != "object" || !("user" in n))
      )
        return;
      const i = new URL(Vr).origin;
      if (e.origin === i) {
        if (t === "CHROME_EXTENSION_MESSAGE") {
          const { user: s } = n;
          Rt.login({ user: s })
            .then(() => {
              const c = document.getElementById("pangram-feed-controls");
              (c && c.remove(), Ni(_e));
            })
            .catch((c) => {
              console.error("[Pangram Content] userStorage.login FAILED", c);
            });
          return;
        }
        if (t === "FEED_SCAN_ENABLE_ALL") {
          rt.setAllFeedScanPlatforms(!0);
          return;
        }
        if (t === "FEED_SCAN_OPT_IN") {
          (rt.setAllFeedScanPlatforms(!0),
            rt.setFeedScanConsent(),
            chrome.runtime
              .sendMessage({ type: "FEED_CONSENT", agree: !0 })
              .catch(() => {}),
            chrome.runtime
              .sendMessage({
                type: "TRACK_EVENT",
                payload: {
                  event: "Chrome: Feed Consent Accepted",
                  properties: { source: "consent_tab" },
                },
              })
              .catch(() => {}));
          return;
        }
        if (t === "FEED_SCAN_OPT_OUT") {
          (rt.setFeedScanConsent(),
            chrome.runtime
              .sendMessage({ type: "FEED_CONSENT", agree: !1 })
              .catch(() => {}));
          return;
        }
        if (t === "FEED_SCAN_PLATFORM_UPDATE") {
          const c = Object.entries(n).map(([p, g]) =>
            rt.setFeedScanPlatform(p, g),
          );
          (await Promise.all(c),
            chrome.runtime.sendMessage({ type: "CLOSE_DETAIL_VIEW" }));
          return;
        }
        if (t === "CHROME_EXTENSION_LOGOUT") {
          Rt.logOut();
          return;
        }
      }
    }));
  const fl = () => {
      try {
        const t = document.querySelectorAll(".kix-canvas-tile-content g");
        if (!t || t.length === 0) return "";
        const n = (s, c) =>
          s ? (s[s.length - 1] === " " ? s + c : s + " " + c) : c;
        let i = "";
        return (
          t.forEach((s) => {
            const c = Array.from(s.childNodes);
            if (!c || c.length === 0) return;
            let p = "",
              g = null;
            (c.forEach((y, d) => {
              if (!(y instanceof Element)) return;
              if (d === 0) {
                const k = y.getAttribute("aria-label") || "";
                if (k && k.length < 3 && c.length > 1) return;
              }
              const v = y.getAttribute("aria-label") || "";
              if (v) {
                if (g) {
                  const k = g.getBoundingClientRect(),
                    M = y.getBoundingClientRect();
                  k.y === M.y ||
                    (k.bottom > M.bottom && k.top < M.top) ||
                    (k.bottom < M.bottom && k.top > M.top) ||
                    (p += " ");
                }
                ((p = n(p, v)), (g = y));
              }
            }),
              p.trim() !== "" &&
                (i +=
                  p +
                  `
`));
          }),
          i
        );
      } catch (e) {
        return (
          console.warn("Fallback Google Docs text extraction failed:", e),
          ""
        );
      }
    },
    pl = async () => {
      let e = null;
      const t = null;
      try {
        const n = await go({ type: "GET_DOC_TEXT_VIA_MAIN" });
        if (n && n.text != null && n.text !== "")
          return (
            (wt = !1),
            {
              textContent: n.text,
              selection: n.selection,
              accessTool: "AnnotateAccessorAPI",
            }
          );
        console.error("mainResult not found");
      } catch (n) {
        console.error("GET_DOC_TEXT_VIA_MAIN failed", n);
      }
      return (
        e == null && (e = ml()),
        { textContent: e, selection: t, accessTool: "KixObject" }
      );
    };
  function ml() {
    try {
      const e = document.querySelector("iframe.docs-texteventtarget-iframe"),
        t =
          e &&
          (e.contentDocument || (e.contentWindow && e.contentWindow.document)),
        n = t && t.querySelector('[contenteditable="true"]'),
        s = ((n && (n.innerText || n.textContent)) || "" || "").trim();
      return s.length > 0 ? s : null;
    } catch (e) {
      return (console.warn("[Pangram] getKixDocumentText failed", e), null);
    }
  }
  const hl = async () => {
      const e = document.getElementsByTagName("script");
      let t = "";
      for (let n = 0; n < e.length; n++) {
        const i = e[n];
        if (
          i.textContent?.startsWith("DOCS_modelChunk") &&
          !i.textContent.startsWith("DOCS_modelChunkParseStart")
        )
          try {
            const s = i.textContent,
              c = s.indexOf("=") + 1,
              p = s.indexOf("];", c) + 1;
            if (c > 0 && p > c) {
              const g = s.substring(c, p).trim(),
                y = JSON.parse(g);
              for (const d of y)
                if (d.s) t += d.s;
                else if (d.nmc && d.nmc.s) t += d.nmc.s;
                else if (d.d) {
                  const v = d.d;
                  if (Array.isArray(v))
                    for (const k of v)
                      Array.isArray(k) &&
                        typeof k[1] == "string" &&
                        (t += k[1] + " ");
                }
            }
          } catch (s) {
            console.error("Error parsing JSON:", s);
          }
      }
      return t;
    },
    sr = async (e) => {
      const { textContent: t, selection: n, accessTool: i } = await pl();
      if (e === "full") {
        if (
          t &&
          t.replace(
            `
`,
            "",
          ) !== ""
        )
          return (
            _e({
              type: "DETECT",
              text: t,
              mode: "full",
              source: "google-docs",
            }),
            { textContent: t, selection: n, accessTool: i }
          );
      } else if (e === "selection") {
        let c = "";
        if (
          t &&
          n &&
          typeof n.start == "number" &&
          typeof n.end == "number" &&
          n.end > n.start
        )
          try {
            c = t.substring(n.start, n.end).trim();
          } catch (p) {
            console.warn("Failed to slice selectedText from accessor range", p);
          }
        if (c !== "" && c !== null)
          return (
            _e({
              type: "DETECT",
              text: c,
              mode: "selection",
              source: "google-docs",
            }),
            { textContent: c, selection: n, accessTool: i }
          );
        {
          const p = hn("Is this an empty selection?");
          return (
            _e({ type: "ERROR_MESSAGE", errorMessage: p }),
            { textContent: t, selection: n, accessTool: null }
          );
        }
      }
      wt = !1;
      const s = await hl();
      if (
        s.replace(
          `
`,
          "",
        ) !== ""
      )
        return (
          _e({ type: "DETECT", text: s, mode: "full", source: "google-docs" }),
          { textContent: s, selection: null, accessTool: "DocsModelChunk" }
        );
      {
        const c = fl();
        if (c.trim() !== "")
          return (
            _e({
              type: "DETECT",
              text: c,
              mode: "full",
              source: "google-docs",
            }),
            { textContent: c, selection: null, accessTool: "CanvasTile" }
          );
        {
          const p = hn("Is this an empty document?");
          _e({ type: "ERROR_MESSAGE", errorMessage: p });
        }
      }
      return { textContent: null, selection: null, accessTool: null };
    },
    gl = () => {
      document
        .querySelectorAll(".pangram-button-container")
        .forEach((e) => e.remove());
    },
    yo = async () => {
      if (
        window.location.hostname === "docs.google.com" &&
        window.location.pathname.startsWith("/document")
      ) {
        if ((await rt.get()).hideGoogleDocWidget) {
          gl();
          return;
        }
        const t = document.querySelector(".docs-titlebar-buttons");
        if (t) {
          if (t.querySelectorAll(".pangram-button").length >= 3) return;
          const i = document.createElement("div");
          (i.classList.add("pangram-button-container"),
            (i.style.position = "relative"),
            (i.style.marginRight = "16px"),
            (i.style.border = "1px solid #e5e7eb"),
            (i.style.display = "flex"),
            (i.style.alignItems = "center"),
            (i.style.gap = "6px"),
            (i.style.padding = "6px 6px 6px 8px"),
            (i.style.backgroundColor = "#ffffff"),
            (i.style.borderRadius = "6px"));
          const s = document.createElement("div");
          ((s.style.position = "relative"),
            (s.style.display = "flex"),
            (s.style.alignItems = "center"),
            (s.style.justifyContent = "center"),
            (s.style.marginLeft = "4px"),
            (s.style.marginRight = "4px"));
          const c = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
          );
          (c.setAttribute("width", "12"),
            c.setAttribute("height", "12"),
            c.setAttribute("viewBox", "0 0 27 30"),
            c.setAttribute("fill", "none"),
            [
              {
                d: "M-0.00878906 16.9346L13.3448 29.9999L7.71476 17.4842L-0.00878906 16.9346Z",
                fill: "#FECAB9",
              },
              {
                d: "M26.6992 16.9346L13.3456 29.9999L18.9757 17.4842L26.6992 16.9346Z",
                fill: "#FECAB9",
              },
              {
                d: "M5.7379 13.0918L-0.00878906 16.9367L7.71476 17.4864L5.7379 13.0918Z",
                fill: "#FECAB9",
              },
              {
                d: "M20.9525 13.0918L26.6992 16.9367L18.9757 17.4864L20.9525 13.0918Z",
                fill: "#FECAB9",
              },
              {
                d: "M-0.00878906 0.313477V16.9334L5.7379 13.0885L-0.00878906 0.313477Z",
                fill: "#FECAB9",
              },
              {
                d: "M26.6992 0.313477V16.9334L20.9525 13.0885L26.6992 0.313477Z",
                fill: "#FECAB9",
              },
              {
                d: "M13.3442 29.9988V7.99902L5.7373 13.0885L7.71416 17.4831L13.3442 29.9988Z",
                fill: "#FF6106",
              },
              {
                d: "M13.3453 29.9988V7.99902L20.9521 13.0885L18.9753 17.4831L13.3453 29.9988Z",
                fill: "#FF6106",
              },
              {
                d: "M13.3448 7.99899L-0.00878906 0.313477L5.7379 13.0885L13.3448 7.99899Z",
                fill: "#FF6106",
              },
              {
                d: "M13.3456 7.99899L26.6992 0.313477L20.9525 13.0885L13.3456 7.99899Z",
                fill: "#FF6106",
              },
            ].forEach((w) => {
              const A = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path",
              );
              (A.setAttribute("d", w.d),
                A.setAttribute("fill", w.fill),
                c.appendChild(A));
            }),
            s.appendChild(c),
            i.appendChild(s));
          const g = document.createElement("div");
          ((g.style.display = "flex"), (g.style.gap = "8px"));
          const y =
              '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.23869 2 10.0298 2C10.6358 2 11.1214 2 11.53 2.01666C11.5166 2.09659 11.5095 2.17813 11.5092 2.26057L11.5 5.09497C11.4999 6.19207 11.4998 7.16164 11.6049 7.94316C11.7188 8.79028 11.9803 9.63726 12.6716 10.3285C13.3628 11.0198 14.2098 11.2813 15.0569 11.3952C15.8385 11.5003 16.808 11.5002 17.9051 11.5001L18 11.5001H21.9574C22 12.0344 22 12.6901 22 13.5629V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22Z" fill="currentColor"/></g><path d="M6 13.75C5.58579 13.75 5.25 14.0858 5.25 14.5C5.25 14.9142 5.58579 15.25 6 15.25H14C14.4142 15.25 14.75 14.9142 14.75 14.5C14.75 14.0858 14.4142 13.75 14 13.75H6Z" fill="currentColor"/><path d="M6 17.25C5.58579 17.25 5.25 17.5858 5.25 18C5.25 18.4142 5.58579 18.75 6 18.75H11.5C11.9142 18.75 12.25 18.4142 12.25 18C12.25 17.5858 11.9142 17.25 11.5 17.25H6Z" fill="currentColor"/><path d="M11.5092 2.2601L11.5 5.0945C11.4999 6.1916 11.4998 7.16117 11.6049 7.94269C11.7188 8.78981 11.9803 9.6368 12.6716 10.3281C13.3629 11.0193 14.2098 11.2808 15.057 11.3947C15.8385 11.4998 16.808 11.4997 17.9051 11.4996L21.9574 11.4996C21.9698 11.6552 21.9786 11.821 21.9848 11.9995H22C22 11.732 22 11.5983 21.9901 11.4408C21.9335 10.5463 21.5617 9.52125 21.0315 8.79853C20.9382 8.6713 20.8743 8.59493 20.7467 8.44218C19.9542 7.49359 18.911 6.31193 18 5.49953C17.1892 4.77645 16.0787 3.98536 15.1101 3.3385C14.2781 2.78275 13.862 2.50487 13.2915 2.29834C13.1403 2.24359 12.9408 2.18311 12.7846 2.14466C12.4006 2.05013 12.0268 2.01725 11.5 2.00586L11.5092 2.2601Z" fill="currentColor"/></svg>',
            d =
              '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="currentColor"/></svg>',
            v = (w, A, H) =>
              `<div style="display:flex;align-items:center;gap:4px;pointer-events:none"><span style="flex-shrink:0;display:inline-flex;align-items:center;justify-content:center">${w}</span><div style="display:flex;flex-direction:column;font-size:9px;font-weight:600;line-height:1.25;text-align:left;overflow:hidden;white-space:nowrap"><span>${A}</span><span>${H}</span></div></div>`,
            k = (w, A) => {
              w.style.position = "relative";
              const H = document.createElement("div");
              ((H.textContent = A),
                (H.style.cssText = [
                  "position:absolute",
                  "top:calc(100% + 6px)",
                  "left:50%",
                  "transform:translateX(-50%)",
                  "background:#1f2937",
                  "color:#fff",
                  "font-size:11px",
                  "font-family:sans-serif",
                  "padding:3px 8px",
                  "border-radius:4px",
                  "white-space:nowrap",
                  "pointer-events:none",
                  "opacity:0",
                  "transition:opacity 0.15s",
                  "z-index:10000",
                ].join(";")),
                w.appendChild(H),
                w.addEventListener("mouseenter", () => {
                  H.style.opacity = "1";
                }),
                w.addEventListener("mouseleave", () => {
                  H.style.opacity = "0";
                }));
            },
            M = document.createElement("button");
          (M.classList.add("pangram-button"), (M.style.position = "relative"));
          const B = document.createElement("div");
          ((B.style.cssText = [
            "position:absolute",
            "top:calc(100% + 6px)",
            "left:50%",
            "transform:translateX(-50%)",
            "background:#1f2937",
            "color:#fff",
            "font-size:11px",
            "font-family:sans-serif",
            "padding:3px 8px",
            "border-radius:4px",
            "white-space:nowrap",
            "pointer-events:none",
            "opacity:0",
            "transition:opacity 0.15s",
            "z-index:10000",
          ].join(";")),
            M.addEventListener("mouseenter", () => {
              B.style.opacity = "1";
            }),
            M.addEventListener("mouseleave", () => {
              B.style.opacity = "0";
            }));
          const N = new Map(),
            R = () =>
              new URLSearchParams(window.location.search).get("tab") ??
              "default";
          let E = 0;
          const L = () => {
            const w =
              E > 0
                ? `${E.toLocaleString()} ${E === 1 ? "word" : "words"}`
                : "...";
            ((M.innerHTML = v(y, "Scan for AI", w)),
              (B.textContent = "Scan text in current tab"),
              M.appendChild(B));
          };
          L();
          const I = (w) => {
              (N.set(R(), w),
                (M.innerHTML = v(d, "View", "Report")),
                (B.textContent = "View Report"),
                M.appendChild(B));
            },
            W = () =>
              go({ type: "GET_DOC_WORDCOUNT" }).then((w) => {
                const A = w?.wordCount ?? 0;
                A > 0 && A !== E && ((E = A), N.has(R()) || L());
              }),
            Y = (w = 0) => {
              W().then(() => {
                E === 0 && w < 5 && setTimeout(() => Y(w + 1), 1e3);
              });
            };
          (Y(),
            chrome.runtime.onMessage.addListener((w) => {
              w.type === "RESPONSE" &&
                w.message?.response?.text_query &&
                !w.source?.startsWith("feed") &&
                I(w.message.response.text_query);
            }),
            M.addEventListener("click", () => {
              try {
                if (
                  (_e({
                    type: "TRACK_EVENT",
                    payload: {
                      event: "Chrome: Google Doc Scan Clicked",
                      properties: { type: "full" },
                    },
                  }),
                  N.has(R()) && !wt)
                ) {
                  sr("full");
                  return;
                }
                wt
                  ? (N.delete(R()),
                    L(),
                    chrome.storage.local.set(
                      { lastReloadTime: Date.now() },
                      () => {
                        window.location.reload();
                      },
                    ))
                  : (_e({ type: "SHOW_LOADING" }), sr("full"));
              } catch (w) {
                console.error("cannot parse document", w);
                const A = hn(w.toString());
                (_e({ type: "ERROR_MESSAGE", errorMessage: A }),
                  _e({
                    type: "TRACK_EVENT",
                    payload: {
                      event: "Chrome: Google Doc Parse Text Error",
                      properties: { "Error Message": w.toString() },
                    },
                  }));
              }
            }),
            chrome.runtime.onMessage.addListener((w) => {
              w.type === "DOCUMENT_SAVED" && (N.delete(R()), L(), W());
            }));
          let re = new URLSearchParams(window.location.search).get("tab");
          chrome.runtime.onMessage.addListener((w) => {
            if (w.type !== "DOCS_TAB_CHANGED") return;
            const A = new URLSearchParams(new URL(w.url).search).get("tab");
            if (A !== re) {
              (console.log("[Pangram] Google Docs tab switch:", re, "→", A),
                (re = A),
                (E = 0),
                (wt = !1));
              const H = N.get(A ?? "default");
              (H ? I(H) : L(), Y(), ke());
            }
          });
          const O = document.createElement("button");
          O.classList.add("pangram-button");
          const q =
              '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M3.17157 18.8284C4.34315 20 6.22876 20 10 20L15.75 19.9944C18.3859 19.9668 19.8541 19.8028 20.8284 18.8285C22 17.6569 22 15.7713 22 12C22 8.22879 22 6.34317 20.8284 5.1716C19.8541 4.19727 18.3738 4.02762 15.7379 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 1.25C15.4142 1.25 15.75 1.58579 15.75 2V4.00559V19.9944V22C15.75 22.4142 15.4142 22.75 15 22.75C14.5858 22.75 14.25 22.4142 14.25 22V2C14.25 1.58579 14.5858 1.25 15 1.25Z" fill="currentColor"/><path d="M6.81782 7.78733C7.11779 7.74992 7.48429 7.74996 7.88383 7.75H10.1162C10.5157 7.74996 10.8822 7.74992 11.1822 7.78733C11.5109 7.82833 11.8612 7.9242 12.1624 8.19187C12.2138 8.23753 12.2625 8.28618 12.3081 8.33756C12.5758 8.63878 12.6717 8.98915 12.7127 9.31782C12.7501 9.61779 12.7501 9.98428 12.75 10.3838L12.75 10.425C12.75 10.8392 12.4142 11.175 12 11.175C11.5858 11.175 11.25 10.8392 11.25 10.425C11.25 9.97047 11.2486 9.69931 11.2242 9.50348C11.1998 9.30765 10.9965 9.2758 10.9965 9.2758C10.8007 9.25137 10.5295 9.25001 10.075 9.25001H9.75001V14.75H11C11.4142 14.75 11.75 15.0858 11.75 15.5C11.75 15.9142 11.4142 16.25 11 16.25H7.00001C6.58579 16.25 6.25001 15.9142 6.25001 15.5C6.25001 15.0858 6.58579 14.75 7.00001 14.75H8.25001V9.25001H7.925C7.47047 9.25001 7.19931 9.25137 7.00348 9.2758C7.00348 9.2758 6.80023 9.30765 6.7758 9.50348C6.75137 9.69931 6.75001 9.97047 6.75001 10.425C6.75001 10.8392 6.41422 11.175 6.00001 11.175C5.58579 11.175 5.25001 10.8392 5.25001 10.425L5.25 10.3838C5.24996 9.98428 5.24992 9.61779 5.28733 9.31782C5.32833 8.98915 5.4242 8.63878 5.69187 8.33756C5.73753 8.28618 5.78618 8.23753 5.83756 8.19187C6.13878 7.9242 6.48915 7.82833 6.81782 7.78733Z" fill="currentColor"/></svg>',
            ie = document.createElement("div");
          ie.style.cssText =
            "display:flex;align-items:center;gap:4px;pointer-events:none";
          const fe = document.createElement("span");
          ((fe.style.cssText =
            "display:inline-flex;align-items:center;justify-content:center;flex-shrink:0"),
            (fe.innerHTML = q));
          const ve = document.createElement("div");
          ve.style.cssText =
            "display:none;flex-direction:column;font-size:9px;font-weight:600;line-height:1.25;text-align:left;overflow:hidden;white-space:nowrap";
          const $ = document.createElement("span"),
            D = document.createElement("span");
          ((D.textContent = "words"),
            ve.appendChild($),
            ve.appendChild(D),
            ie.appendChild(fe),
            ie.appendChild(ve),
            O.appendChild(ie),
            k(O, "Scan selected text. No selected text found."));
          const Q = O.lastElementChild;
          O.addEventListener("click", () => {
            try {
              (_e({
                type: "TRACK_EVENT",
                payload: {
                  event: "Chrome: Google Doc Scan Clicked",
                  properties: { type: "selection" },
                },
              }),
                wt
                  ? chrome.storage.local.set(
                      { lastReloadTime: Date.now() },
                      () => {
                        window.location.reload();
                      },
                    )
                  : (_e({ type: "SHOW_LOADING" }), sr("selection")));
            } catch (w) {
              console.error("cannot parse selection", w);
              const A = hn(w.toString());
              _e({ type: "ERROR_MESSAGE", errorMessage: A });
            }
          });
          const ee = document.createElement("button");
          (ee.classList.add("pangram-button"), k(ee, "View History"));
          const xe =
              '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="currentColor"/></svg>',
            Me =
              '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>',
            ce = document.createElement("span");
          ((ce.style.cssText =
            "display:inline-flex;align-items:center;justify-content:center"),
            (ce.innerHTML = xe),
            ee.appendChild(ce));
          const j = document.createElement("style");
          ((j.textContent =
            "@keyframes pangram-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}"),
            document.head.appendChild(j));
          const se = () => {
            ((ce.innerHTML = Me),
              (ce.style.animation = "pangram-spin 0.8s linear infinite"),
              (ee.style.cursor = "wait"),
              (ee.disabled = !0));
          };
          (ee.addEventListener("click", async () => {
            try {
              ee.disabled = !0;
              const w = Array.from(document.scripts).find((ge) =>
                ge.textContent?.startsWith("_docs_flag_initialData"),
              );
              if (!w) throw new Error("Couldn't find token script!");
              const A = /"token":\s*"([^"]+)"/.exec(w.textContent || ""),
                H = /"app_url":\s*"([^"]+)"/.exec(w.textContent || "");
              if (!A || !H)
                throw new Error("Failed to extract token or appUrl");
              let Z = H[1];
              (Z.includes("?") && (Z = Z.split("?")[0]),
                Z.endsWith("/") || (Z += "/"));
              const K = window.location.pathname.split("/d/")[1]?.split("/")[0];
              if (!K) throw new Error("Can't extract doc ID from URL");
              const ae = `${Z}d/${K}/revisions/tiles?id=${K}&revisionBatchSize=1500&start=1&showDetailedRevisions=false&token=${A[1]}`,
                de = await fetch(ae);
              if (!de.ok)
                throw new Error(
                  "We're sorry, something has gone wrong. Please contact support at https://www.pangram.com/contact-us/feedback",
                );
              const le = await de.text();
              if (
                le.trim().startsWith("<!DOCTYPE") ||
                le.trim().startsWith("<html")
              )
                throw new Error(
                  "We're sorry, something has gone wrong. Please contact support at https://www.pangram.com/contact-us/feedback",
                );
              let oe;
              try {
                oe = JSON.parse(
                  le.replace(
                    `)]}'
`,
                    "",
                  ),
                );
              } catch (ge) {
                throw (
                  console.error("JSON Parse Error for tiles:", ge),
                  console.error("Response text:", le.substring(0, 200)),
                  new Error(
                    "We're sorry, something has gone wrong. Please contact support at https://www.pangram.com/contact-us/feedback",
                  )
                );
              }
              const he = Math.max(...oe.tileInfo.map((ge) => ge.end));
              let Ee;
              if (
                (mn.docId === K &&
                  mn.maxRev === he &&
                  mn.data &&
                  (Ee = mn.data),
                !Ee)
              ) {
                se();
                const ge = `${Z}d/${K}/revisions/load?start=1&end=${he}&id=${K}&token=${A[1]}`,
                  Pe = await fetch(ge);
                if (!Pe.ok)
                  throw new Error(
                    "We're sorry, something has gone wrong. Please contact support at https://www.pangram.com/contact-us/feedback",
                  );
                const Qe = await Pe.text();
                if (
                  Qe.trim().startsWith("<!DOCTYPE") ||
                  Qe.trim().startsWith("<html")
                )
                  throw new Error(
                    "We're sorry, something has gone wrong. Please contact support at https://www.pangram.com/contact-us/feedback",
                  );
                try {
                  Ee = JSON.parse(
                    Qe.replace(
                      `)]}'
`,
                      "",
                    ),
                  );
                } catch (lt) {
                  throw (
                    console.error("JSON Parse Error for changelog:", lt),
                    console.error("Response text:", Qe.substring(0, 200)),
                    new Error(
                      "We're sorry, something has gone wrong. Please contact support at https://www.pangram.com/contact-us/feedback",
                    )
                  );
                }
                mn = { docId: K, maxRev: he, data: Ee };
              }
              if (
                ((Ee = {
                  ...Ee,
                  userMap: oe.userMap ? { ...oe.userMap } : Ee.userMap,
                }),
                !ho())
              )
                return;
              const at = chrome.runtime.connect({ name: "replay-viewer" });
              (at.postMessage({ type: "SHOW_REPLAY", payload: Ee }),
                at.onDisconnect.addListener(() => {
                  window.postMessage(
                    { type: "SHOW_REPLAY_FALLBACK", payload: Ee },
                    "*",
                  );
                }));
            } catch (w) {
              console.error("Error extracting revision data:", w);
              const A = hn(w.toString());
              _e({ type: "ERROR_MESSAGE", errorMessage: A });
            } finally {
              ((ce.innerHTML = xe),
                (ce.style.animation = ""),
                (ee.style.cursor = "pointer"),
                (ee.disabled = !1));
            }
          }),
            [M, O, ee].forEach((w) => {
              ((w.style.backgroundColor = "transparent"),
                (w.style.border = "none"),
                (w.style.borderRadius = "6px"),
                (w.style.fontSize = "12px"),
                (w.style.cursor = "pointer"),
                (w.style.display = "flex"),
                (w.style.alignItems = "center"),
                (w.style.justifyContent = "center"),
                (w.style.transition = "background-color 0.15s ease"),
                (w.style.color = "#374151"),
                (w.style.padding = "6px"),
                (w.style.width = "32px"),
                (w.style.height = "32px"),
                w.addEventListener("mouseover", () => {
                  w.disabled || (w.style.backgroundColor = "#f3f4f6");
                }),
                w.addEventListener("mouseout", () => {
                  w.disabled || (w.style.backgroundColor = "transparent");
                }));
            }),
            (O.disabled = !0),
            (O.style.opacity = "0.4"),
            (O.style.cursor = "default"),
            (M.style.width = "auto"),
            (M.style.height = "auto"),
            (M.style.minHeight = "32px"),
            (M.style.padding = "4px 8px"),
            (M.style.justifyContent = "flex-start"));
          const ke = () => {
            document.contains(O) &&
              go({ type: "CHECK_HAS_SELECTION" }).then((w) => {
                const A = w?.hasSelection ?? !1,
                  H = w?.wordCount ?? 0,
                  Z = 50,
                  K = A && H >= Z,
                  ae = A && H > 0 && H < Z;
                ((O.style.color = "#374151"),
                  (O.style.backgroundColor = "transparent"),
                  K || ae
                    ? (($.textContent = H.toLocaleString()),
                      (D.textContent = H === 1 ? "word" : "words"),
                      (ve.style.display = "flex"),
                      (O.style.width = "60px"),
                      (O.style.height = "auto"),
                      (O.style.minHeight = "32px"),
                      (O.style.padding = "4px 12px 4px 8px"),
                      (O.style.justifyContent = "flex-start"))
                    : ((ve.style.display = "none"),
                      (O.style.width = "32px"),
                      (O.style.height = "32px"),
                      (O.style.minHeight = ""),
                      (O.style.padding = "6px"),
                      (O.style.justifyContent = "center")),
                  K
                    ? ((O.disabled = !1),
                      (O.style.opacity = "1"),
                      (O.style.cursor = "pointer"),
                      (Q.textContent = "Scan selected text"))
                    : ae
                      ? ((O.disabled = !0),
                        (O.style.opacity = "0.4"),
                        (O.style.cursor = "default"),
                        (Q.textContent = `Scan selected text. Minimum ${Z} words required.`))
                      : ((O.disabled = !0),
                        (O.style.opacity = "0.4"),
                        (O.style.cursor = "default"),
                        (Q.textContent =
                          "Scan selected text. No selected text found.")));
              });
          };
          (document.addEventListener("mouseup", ke),
            document.addEventListener("keyup", ke),
            mo !== null && clearInterval(mo),
            (mo = setInterval(ke, 500)),
            g.appendChild(M),
            g.appendChild(O),
            g.appendChild(ee),
            i.appendChild(g),
            t.insertBefore(i, t.firstChild));
        }
      }
    },
    Zi = () => {
      (yo(),
        Ni(_e),
        window.location.hostname === "docs.google.com" &&
          window.location.pathname.startsWith("/document") &&
          chrome.storage.local.get("lastReloadTime", (e) => {
            (e.lastReloadTime && (Gi = e.lastReloadTime),
              Date.now() - Gi <= dl &&
                (_e({ type: "SHOW_LOADING" }), sr("full")));
          }));
    };
  (document.readyState === "complete" || document.readyState === "interactive"
    ? Zi()
    : window.addEventListener("load", Zi),
    rt.subscribe(() => {
      yo();
    }),
    yo());
})();
