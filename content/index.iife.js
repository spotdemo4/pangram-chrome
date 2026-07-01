(function () {
  "use strict";
  var Or = { exports: {} },
    ne = {};
  var Io;
  function Zi() {
    if (Io) return ne;
    Io = 1;
    var e = Symbol.for("react.element"),
      t = Symbol.for("react.portal"),
      o = Symbol.for("react.fragment"),
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
      I = {};
    function E(w, A, H) {
      ((this.props = w),
        (this.context = A),
        (this.refs = I),
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
    function R(w, A, H) {
      ((this.props = w),
        (this.context = A),
        (this.refs = I),
        (this.updater = H || B));
    }
    var W = (R.prototype = new L());
    ((W.constructor = R), N(W, E.prototype), (W.isPureReactComponent = !0));
    var Y = Array.isArray,
      re = Object.prototype.hasOwnProperty,
      O = { current: null },
      $ = { key: !0, ref: !0, __self: !0, __source: !0 };
    function ie(w, A, H) {
      var Z,
        X = {},
        ae = null,
        de = null;
      if (A != null)
        for (Z in (A.ref !== void 0 && (de = A.ref),
        A.key !== void 0 && (ae = "" + A.key),
        A))
          re.call(A, Z) && !$.hasOwnProperty(Z) && (X[Z] = A[Z]);
      var le = arguments.length - 2;
      if (le === 1) X.children = H;
      else if (1 < le) {
        for (var oe = Array(le), he = 0; he < le; he++)
          oe[he] = arguments[he + 2];
        X.children = oe;
      }
      if (w && w.defaultProps)
        for (Z in ((le = w.defaultProps), le))
          X[Z] === void 0 && (X[Z] = le[Z]);
      return {
        $$typeof: e,
        type: w,
        key: ae,
        ref: de,
        props: X,
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
    function q(w) {
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
        ? q("" + w.key)
        : A.toString(36);
    }
    function ee(w, A, H, Z, X) {
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
          (X = X(de)),
          (w = Z === "" ? "." + Q(de, 0) : Z),
          Y(X)
            ? ((H = ""),
              w != null && (H = w.replace(D, "$&/") + "/"),
              ee(X, A, H, "", function (he) {
                return he;
              }))
            : X != null &&
              (ve(X) &&
                (X = fe(
                  X,
                  H +
                    (!X.key || (de && de.key === X.key)
                      ? ""
                      : ("" + X.key).replace(D, "$&/") + "/") +
                    w,
                )),
              A.push(X)),
          1
        );
      if (((de = 0), (Z = Z === "" ? "." : Z + ":"), Y(w)))
        for (var le = 0; le < w.length; le++) {
          ae = w[le];
          var oe = Z + Q(ae, le);
          de += ee(ae, A, H, oe, X);
        }
      else if (((oe = M(w)), typeof oe == "function"))
        for (w = oe.call(w), le = 0; !(ae = w.next()).done;)
          ((ae = ae.value),
            (oe = Z + Q(ae, le++)),
            (de += ee(ae, A, H, oe, X)));
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
        X = 0;
      return (
        ee(w, Z, "", "", function (ae) {
          return A.call(H, ae, X++);
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
      U = { transition: null },
      se = {
        ReactCurrentDispatcher: ce,
        ReactCurrentBatchConfig: U,
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
      (ne.Fragment = o),
      (ne.Profiler = s),
      (ne.PureComponent = R),
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
          X = w.key,
          ae = w.ref,
          de = w._owner;
        if (A != null) {
          if (
            (A.ref !== void 0 && ((ae = A.ref), (de = O.current)),
            A.key !== void 0 && (X = "" + A.key),
            w.type && w.type.defaultProps)
          )
            var le = w.type.defaultProps;
          for (oe in A)
            re.call(A, oe) &&
              !$.hasOwnProperty(oe) &&
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
          key: X,
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
        var A = U.transition;
        U.transition = {};
        try {
          w();
        } finally {
          U.transition = A;
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
  var Mo;
  function Pn() {
    return (Mo || ((Mo = 1), (Or.exports = Zi())), Or.exports);
  }
  var Xi = Pn(),
    Dr = { exports: {} },
    Xt = {};
  var Po;
  function Ki() {
    if (Po) return Xt;
    Po = 1;
    var e = Pn(),
      t = Symbol.for("react.element"),
      o = Symbol.for("react.fragment"),
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
    return ((Xt.Fragment = o), (Xt.jsx = p), (Xt.jsxs = p), Xt);
  }
  var Fo;
  function Yi() {
    return (Fo || ((Fo = 1), (Dr.exports = Ki())), Dr.exports);
  }
  var Ce = Yi(),
    Ji = function (e, t, o, i) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (p) {
              p(c);
            });
      }
      return new (o || (o = Promise))(function (c, p) {
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
    Qi = function (e, t) {
      var o = {
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
        for (; p && ((p = 0), d[0] && (o = 0)), o;)
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
                return (o.label++, { value: d[1], done: !1 });
              case 5:
                (o.label++, (s = d[1]), (d = [0]));
                continue;
              case 7:
                ((d = o.ops.pop()), o.trys.pop());
                continue;
              default:
                if (
                  ((c = o.trys),
                  !(c = c.length > 0 && c[c.length - 1]) &&
                    (d[0] === 6 || d[0] === 2))
                ) {
                  o = 0;
                  continue;
                }
                if (d[0] === 3 && (!c || (d[1] > c[0] && d[1] < c[3]))) {
                  o.label = d[1];
                  break;
                }
                if (d[0] === 6 && o.label < c[1]) {
                  ((o.label = c[1]), (c = d));
                  break;
                }
                if (c && o.label < c[2]) {
                  ((o.label = c[2]), o.ops.push(d));
                  break;
                }
                (c[2] && o.ops.pop(), o.trys.pop());
                continue;
            }
            d = t.call(e, o);
          } catch (v) {
            ((d = [6, v]), (s = 0));
          } finally {
            i = c = 0;
          }
        if (d[0] & 5) throw d[1];
        return { value: d[0] ? d[1] : void 0, done: !0 };
      }
    },
    Fn,
    es = function () {
      var e;
      ((e = Fn?.getClient()) === null || e === void 0 || e.close(),
        (Fn = void 0));
    },
    Br = "analyticsConsentGranted",
    ts = function (e, t) {
      var o = function () {
        return Ji(void 0, void 0, void 0, function () {
          var i;
          return Qi(this, function (s) {
            switch (s.label) {
              case 0:
                return [4, chrome.storage.local.get(Br)];
              case 1:
                return ((i = s.sent()), i[Br] === !0 || es(), [2]);
            }
          });
        });
      };
      (o(),
        chrome.storage.onChanged.addListener(function (i, s) {
          s === "local" && i[Br] && o();
        }));
    },
    Nn = function (e, t, o, i) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (p) {
              p(c);
            });
      }
      return new (o || (o = Promise))(function (c, p) {
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
    On = function (e, t) {
      var o = {
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
        for (; p && ((p = 0), d[0] && (o = 0)), o;)
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
                return (o.label++, { value: d[1], done: !1 });
              case 5:
                (o.label++, (s = d[1]), (d = [0]));
                continue;
              case 7:
                ((d = o.ops.pop()), o.trys.pop());
                continue;
              default:
                if (
                  ((c = o.trys),
                  !(c = c.length > 0 && c[c.length - 1]) &&
                    (d[0] === 6 || d[0] === 2))
                ) {
                  o = 0;
                  continue;
                }
                if (d[0] === 3 && (!c || (d[1] > c[0] && d[1] < c[3]))) {
                  o.label = d[1];
                  break;
                }
                if (d[0] === 6 && o.label < c[1]) {
                  ((o.label = c[1]), (c = d));
                  break;
                }
                if (c && o.label < c[2]) {
                  ((o.label = c[2]), o.ops.push(d));
                  break;
                }
                (c[2] && o.ops.pop(), o.trys.pop());
                continue;
            }
            d = t.call(e, o);
          } catch (v) {
            ((d = [6, v]), (s = 0));
          } finally {
            i = c = 0;
          }
        if (d[0] & 5) throw d[1];
        return { value: d[0] ? d[1] : void 0, done: !0 };
      }
    },
    ns = function (e, t) {
      var o = typeof Symbol == "function" && e[Symbol.iterator];
      if (!o) return e;
      var i = o.call(e),
        s,
        c = [],
        p;
      try {
        for (; (t === void 0 || t-- > 0) && !(s = i.next()).done;)
          c.push(s.value);
      } catch (g) {
        p = { error: g };
      } finally {
        try {
          s && !s.done && (o = i.return) && o.call(i);
        } finally {
          if (p) throw p.error;
        }
      }
      return c;
    },
    No = function (e, t, o) {
      if (o || arguments.length === 2)
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
  var qr;
  (function (e) {
    ((e.ExtensionPagesOnly = "TRUSTED_CONTEXTS"),
      (e.ExtensionPagesAndContentScripts = "TRUSTED_AND_UNTRUSTED_CONTEXTS"));
  })(qr || (qr = {}));
  function Oo(e, t) {
    return Nn(this, void 0, void 0, function () {
      function o(i) {
        return typeof i == "function";
      }
      return On(this, function (i) {
        switch (i.label) {
          case 0:
            return o(e) ? [4, e(t)] : [3, 2];
          case 1:
            return [2, i.sent()];
          case 2:
            return [2, e];
        }
      });
    });
  }
  var Do = !1;
  function Bo(e) {
    if (chrome.storage[e] === void 0)
      throw new Error(
        "Check your storage permission in manifest.json: ".concat(
          e,
          " is not defined",
        ),
      );
  }
  function qo(e, t, o) {
    var i = this,
      s,
      c,
      p,
      g,
      y,
      d,
      v = null,
      k = [],
      M = (s = o?.storageType) !== null && s !== void 0 ? s : Lt.Local,
      B = (c = o?.liveUpdate) !== null && c !== void 0 ? c : !1,
      N =
        (g =
          (p = o?.serialization) === null || p === void 0
            ? void 0
            : p.serialize) !== null && g !== void 0
          ? g
          : function ($) {
              return $;
            },
      I =
        (d =
          (y = o?.serialization) === null || y === void 0
            ? void 0
            : y.deserialize) !== null && d !== void 0
          ? d
          : function ($) {
              return $;
            };
    Do === !1 &&
      M === Lt.Session &&
      o?.sessionAccessForContentScripts === !0 &&
      (Bo(M),
      chrome.storage[M].setAccessLevel({
        accessLevel: qr.ExtensionPagesAndContentScripts,
      }).catch(function ($) {
        (console.warn($),
          console.warn(
            "Please call setAccessLevel into different context, like a background script.",
          ));
      }),
      (Do = !0));
    var E = function () {
        return Nn(i, void 0, void 0, function () {
          var $, ie;
          return On(this, function (fe) {
            switch (fe.label) {
              case 0:
                return (Bo(M), [4, chrome.storage[M].get([e])]);
              case 1:
                return (
                  ($ = fe.sent()),
                  [2, (ie = I($[e])) !== null && ie !== void 0 ? ie : t]
                );
            }
          });
        });
      },
      L = function () {
        k.forEach(function ($) {
          return $();
        });
      },
      R = Promise.resolve(),
      W = function ($) {
        var ie = R.then(function () {
          return Nn(i, void 0, void 0, function () {
            var fe;
            return On(this, function (ve) {
              switch (ve.label) {
                case 0:
                  return [4, Oo($, v)];
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
        return ((R = ie.catch(function () {})), ie);
      },
      Y = function ($) {
        return (
          (k = No(No([], ns(k), !1), [$], !1)),
          function () {
            k = k.filter(function (ie) {
              return ie !== $;
            });
          }
        );
      },
      re = function () {
        return v;
      };
    E().then(function ($) {
      ((v = $), L());
    });
    function O($) {
      return Nn(this, void 0, void 0, function () {
        var ie;
        return On(this, function (fe) {
          switch (fe.label) {
            case 0:
              return $[e] === void 0
                ? [2]
                : ((ie = I($[e].newValue)), v === ie ? [2] : [4, Oo(ie, v)]);
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
            for (var t, o = 1, i = arguments.length; o < i; o++) {
              t = arguments[o];
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }
            return e;
          }),
        me.apply(this, arguments)
      );
    },
    Xe = function (e, t, o, i) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (p) {
              p(c);
            });
      }
      return new (o || (o = Promise))(function (c, p) {
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
    Ke = function (e, t) {
      var o = {
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
        for (; p && ((p = 0), d[0] && (o = 0)), o;)
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
                return (o.label++, { value: d[1], done: !1 });
              case 5:
                (o.label++, (s = d[1]), (d = [0]));
                continue;
              case 7:
                ((d = o.ops.pop()), o.trys.pop());
                continue;
              default:
                if (
                  ((c = o.trys),
                  !(c = c.length > 0 && c[c.length - 1]) &&
                    (d[0] === 6 || d[0] === 2))
                ) {
                  o = 0;
                  continue;
                }
                if (d[0] === 3 && (!c || (d[1] > c[0] && d[1] < c[3]))) {
                  o.label = d[1];
                  break;
                }
                if (d[0] === 6 && o.label < c[1]) {
                  ((o.label = c[1]), (c = d));
                  break;
                }
                if (c && o.label < c[2]) {
                  ((o.label = c[2]), o.ops.push(d));
                  break;
                }
                (c[2] && o.ops.pop(), o.trys.pop());
                continue;
            }
            d = t.call(e, o);
          } catch (v) {
            ((d = [6, v]), (s = 0));
          } finally {
            i = c = 0;
          }
        if (d[0] & 5) throw d[1];
        return { value: d[0] ? d[1] : void 0, done: !0 };
      }
    },
    rs = function (e) {
      var t = typeof Symbol == "function" && Symbol.iterator,
        o = t && e[t],
        i = 0;
      if (o) return o.call(e);
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
    os = { x: !0, linkedin: !0, reddit: !0, substack: !0, medium: !0 },
    is = {
      buttonVisibility: !1,
      permanentlyHideIcon: !0,
      hideGoogleDocWidget: !1,
      feedScanEnabled: !0,
      feedScanPlatforms: os,
      feedScanMode: "default",
      feedScanConsentAnswered: !1,
    },
    We = qo("setting-storage-key", is, {
      storageType: Lt.Local,
      liveUpdate: !0,
    }),
    ss = (function () {
      return Xe(void 0, void 0, void 0, function () {
        var e, t, o;
        return Ke(this, function (i) {
          switch (i.label) {
            case 0:
              return [4, chrome.storage.local.get("setting-storage-key")];
            case 1:
              return (
                (e = i.sent()),
                (t =
                  (o = e["setting-storage-key"]) !== null && o !== void 0
                    ? o
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
        return Xe(void 0, void 0, void 0, function () {
          return Ke(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  We.set(function (o) {
                    return me(me({}, o), { buttonVisibility: e });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
      setPermanentlyHideIcon: function (e) {
        return Xe(void 0, void 0, void 0, function () {
          return Ke(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  We.set(function (o) {
                    return me(me({}, o), { permanentlyHideIcon: e });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
      setHideGoogleDocWidget: function (e) {
        return Xe(void 0, void 0, void 0, function () {
          return Ke(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  We.set(function (o) {
                    return me(me({}, o), { hideGoogleDocWidget: e });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
      setFeedScanEnabled: function (e) {
        return Xe(void 0, void 0, void 0, function () {
          return Ke(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  We.set(function (o) {
                    return me(me({}, o), { feedScanEnabled: e });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
      setFeedScanPlatform: function (e, t) {
        return Xe(void 0, void 0, void 0, function () {
          return Ke(this, function (o) {
            switch (o.label) {
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
                return (o.sent(), [2]);
            }
          });
        });
      },
      setAllFeedScanPlatforms: function (e) {
        return Xe(void 0, void 0, void 0, function () {
          return Ke(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  We.set(function (o) {
                    var i,
                      s,
                      c = me({}, o.feedScanPlatforms);
                    try {
                      for (
                        var p = rs(Object.keys(c)), g = p.next();
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
                    return me(me({}, o), {
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
        return Xe(void 0, void 0, void 0, function () {
          return Ke(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  We.set(function (o) {
                    return me(me({}, o), { feedScanMode: e });
                  }),
                ];
              case 1:
                return (t.sent(), [2]);
            }
          });
        });
      },
      setFeedScanConsent: function () {
        return Xe(void 0, void 0, void 0, function () {
          return Ke(this, function (e) {
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
    Se = function () {
      return (
        (Se =
          Object.assign ||
          function (e) {
            for (var t, o = 1, i = arguments.length; o < i; o++) {
              t = arguments[o];
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }
            return e;
          }),
        Se.apply(this, arguments)
      );
    },
    Kt = function (e, t, o, i) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (p) {
              p(c);
            });
      }
      return new (o || (o = Promise))(function (c, p) {
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
    Yt = function (e, t) {
      var o = {
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
        for (; p && ((p = 0), d[0] && (o = 0)), o;)
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
                return (o.label++, { value: d[1], done: !1 });
              case 5:
                (o.label++, (s = d[1]), (d = [0]));
                continue;
              case 7:
                ((d = o.ops.pop()), o.trys.pop());
                continue;
              default:
                if (
                  ((c = o.trys),
                  !(c = c.length > 0 && c[c.length - 1]) &&
                    (d[0] === 6 || d[0] === 2))
                ) {
                  o = 0;
                  continue;
                }
                if (d[0] === 3 && (!c || (d[1] > c[0] && d[1] < c[3]))) {
                  o.label = d[1];
                  break;
                }
                if (d[0] === 6 && o.label < c[1]) {
                  ((o.label = c[1]), (c = d));
                  break;
                }
                if (c && o.label < c[2]) {
                  ((o.label = c[2]), o.ops.push(d));
                  break;
                }
                (c[2] && o.ops.pop(), o.trys.pop());
                continue;
            }
            d = t.call(e, o);
          } catch (v) {
            ((d = [6, v]), (s = 0));
          } finally {
            i = c = 0;
          }
        if (d[0] & 5) throw d[1];
        return { value: d[0] ? d[1] : void 0, done: !0 };
      }
    },
    Rt = qo(
      "user-storage-key",
      {
        isGuided: !1,
        user: { id: 0, email: "", sessionId: "" },
        isAuthenticated: !1,
        authMethod: null,
      },
      { storageType: Lt.Local, liveUpdate: !0 },
    ),
    Jt = Se(Se({}, Rt), {
      setGuided: function () {
        return Kt(void 0, void 0, void 0, function () {
          return Yt(this, function (e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  Rt.set(function (t) {
                    return Se(Se({}, t), { isGuided: !0 });
                  }),
                ];
              case 1:
                return (e.sent(), [2]);
            }
          });
        });
      },
      login: function (e) {
        return Kt(void 0, void 0, void 0, function () {
          return Yt(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  Rt.set(function (o) {
                    return Se(Se({}, o), {
                      user: Se(Se({}, o.user), e.user),
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
        return Kt(void 0, void 0, void 0, function () {
          return Yt(this, function (e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  Rt.set(function (t) {
                    return Se(Se({}, t), {
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
        return Kt(void 0, void 0, void 0, function () {
          return Yt(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  Rt.set(function (o) {
                    return Se(Se({}, o), {
                      user: Se(Se({}, o.user), e),
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
        return Kt(void 0, void 0, void 0, function () {
          return Yt(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  Rt.set(function (o) {
                    return Se(Se({}, o), {
                      user: Se(Se({}, o.user), { hasChromeConsent: e }),
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
  const as = new Set([
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
    $o = {
      "x-article": "x",
      "x-post": "x",
      "linkedin-post": "linkedin",
      "substack-post": "substack",
      "reddit-post": "reddit",
      "medium-post": "medium",
    },
    $r = [
      { hostnames: ["x.com", "twitter.com"], source: "x-article" },
      { hostnames: ["x.com", "twitter.com"], source: "x-post" },
      {
        hostnames: ["www.linkedin.com", "linkedin.com"],
        source: "linkedin-post",
      },
      { hostnames: ["substack.com"], source: "substack-post" },
      { hostnames: ["www.reddit.com", "reddit.com"], source: "reddit-post" },
      { hostnames: ["medium.com"], source: "medium-post" },
    ];
  $r.map((e) => e.source);
  const Dn = {
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
      },
    },
    Ye = Object.entries(Dn.configs).map(([e, t]) => ({ source: e, ...t })),
    Ho = (e) => $r.find((t) => t.source === e)?.hostnames || [],
    Hr = "https://www.pangram.com",
    ls = (e) => {
      for (const [t, o] of Object.entries(e)) {
        if (!o || typeof o != "object") continue;
        const i = Ye.findIndex((s) => s.source === t);
        i !== -1 && (Ye[i] = { ...Ye[i], ...o });
      }
    },
    Te = "pangram-feed-badge",
    cs = "pangram-feed-scan-button",
    j = {
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
    jo = 500,
    It = (e, t, o) => {
      if (e.size >= jo && !e.has(t)) {
        const i = e.keys().next().value;
        i !== void 0 && e.delete(i);
      }
      e.set(t, o);
    },
    Bn = new Map(),
    qn = new Map(),
    $n = new Map(),
    Hn = {
      get: (e) => Bn.get(e),
      set: (e, t) => It(Bn, e, t),
      has: (e) => Bn.has(e),
      clear: () => Bn.clear(),
    },
    jn = {
      get: (e) => qn.get(e),
      set: (e, t) => It(qn, e, t),
      has: (e) => qn.has(e),
      clear: () => qn.clear(),
    },
    Uo = {
      get: (e) => $n.get(e),
      set: (e, t) => It($n, e, t),
      has: (e) => $n.has(e),
      clear: () => $n.clear(),
    },
    jr = new Map(),
    Wo = {
      get: (e) => jr.get(e),
      set: (e, t) => It(jr, e, t),
      clear: () => jr.clear(),
    },
    Ur = new Map(),
    Wr = {
      get: (e) => Ur.get(e),
      set: (e, t) => It(Ur, e, t),
      clear: () => Ur.clear(),
    },
    pt = new Map(),
    Vr = {
      get: (e) => pt.get(e),
      set: (e, t) => {
        if (pt.size >= jo && !pt.has(e)) {
          const o = pt.keys().next().value;
          o !== void 0 && pt.delete(o);
        }
        pt.set(e, t);
      },
      clear: () => pt.clear(),
    },
    Un = new Map(),
    zr = {
      get: (e) => Un.get(e),
      set: (e, t) => It(Un, e, t),
      has: (e) => Un.has(e),
      clear: () => Un.clear(),
    },
    us = (e, t, o) => {
      const i = new Map();
      let s = e,
        c = 0;
      for (; s && (i.set(s, c), s !== o);) ((s = s.parentElement), c++);
      let p = t,
        g = 0;
      for (; p;) {
        const y = i.get(p);
        if (y !== void 0) return y + g;
        if (p === o) break;
        ((p = p.parentElement), g++);
      }
      return Number.MAX_SAFE_INTEGER;
    },
    sameBadgeBoundary = (e, t, o) => {
      if (!o) return !0;
      try {
        const i = e.closest(o);
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
    Ae = (e, t, o, i, s, c) => {
      const p = Array.from(e.querySelectorAll(o));
      if (p.length === 0) return null;
      let g = null,
        y = Number.MAX_SAFE_INTEGER;
      for (const d of p) {
        if (i && !i(d)) continue;
        if (c && s && !sameBadgeBoundary(d, s, c)) continue;
        const v = us(d, t, e);
        v < y && ((y = v), (g = d));
      }
      return g;
    },
    Le = (e) => {
      const o = e
        .replace(/,/g, "")
        .trim()
        .match(/^([\d.]+)\s*([KMB])?/i);
      if (!o) return;
      const i = parseFloat(o[1]),
        s = (o[2] || "").toUpperCase();
      return Math.round(
        s === "K" ? i * 1e3 : s === "M" ? i * 1e6 : s === "B" ? i * 1e9 : i,
      );
    },
    ds = {
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
        let t, o, i;
        if (
          (e.querySelectorAll('span[aria-hidden="true"]').forEach((s) => {
            const c = (s.textContent || "").trim(),
              p = c.match(/^(\d[\d,]*)\s+comment/i);
            if (p) {
              o = parseInt(p[1].replace(/,/g, ""), 10);
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
          !(t === void 0 && o === void 0 && i === void 0))
        )
          return { likeCount: t, commentCount: o, repostCount: i };
      },
      "substack-aria-buttons": (e) => {
        const t = e.querySelector('button[aria-label="Like"]'),
          o = e.querySelector('button[aria-label="Comment"]'),
          i = e.querySelector('button[aria-label="Restack"]');
        let s = t ? Le(t.textContent?.trim() || "") : void 0,
          c = o ? Le(o.textContent?.trim() || "") : void 0,
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
          o = e.querySelector(".pw-responses-count"),
          i = t ? Le(t.textContent?.trim() || "") : void 0,
          s = o ? Le(o.textContent?.trim() || "") : void 0;
        if (!(i === void 0 && s === void 0))
          return { likeCount: i, commentCount: s };
      },
      "reddit-attrs": (e) => {
        const t = e.getAttribute("score"),
          o = e.getAttribute("comment-count"),
          i = t ? parseInt(t, 10) : void 0,
          s = o ? parseInt(o, 10) : void 0;
        if (!(i === void 0 && s === void 0))
          return { likeCount: i, commentCount: s };
      },
    },
    Vo = (e, t) => {
      if (!e.engagementExtractor || e.engagementExtractor === "none") return;
      const o = ds[e.engagementExtractor];
      return o ? o(t) : void 0;
    },
    fs = () => {
      const t = window.location.pathname.replace(/^\//, "").split("/")[0] || "";
      let o = document.querySelector(
        `[data-testid="UserAvatar-Container-${t}"]`,
      );
      if (!o) {
        const L = document.querySelectorAll(
          '[data-testid^="UserAvatar-Container-"]',
        );
        for (const R of Array.from(L))
          if (
            (R.getAttribute("data-testid") || "")
              .replace("UserAvatar-Container-", "")
              .toLowerCase() === t.toLowerCase()
          ) {
            o = R;
            break;
          }
      }
      const s = o?.querySelector("img")?.getAttribute("src") || void 0,
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
          const R = L.getAttribute("href") || "",
            W = (L.textContent || "").trim();
          R.includes("/following")
            ? (y = Le(W))
            : (R.includes("/followers") || R.includes("/verified_followers")) &&
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
    ps = () => {
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
    ms = () => {
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
    hs = () => {
      const e = document.querySelector("h2.pw-author-name, h1.pw-author-name"),
        t = e?.textContent?.trim() || void 0;
      let o;
      t &&
        (o =
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
      if (!(!o && !t && i === void 0))
        return {
          platform: "medium",
          profileImageUrl: o,
          name: t,
          description: g,
          followerCount: i,
          followingCount: c,
        };
    },
    gs = () => {
      let e;
      const t = document.querySelectorAll('script[type="application/ld+json"]');
      for (const N of Array.from(t))
        try {
          const I = JSON.parse(N.textContent || "");
          if (I.publisher?.name) {
            ((e = { name: I.publisher.name }),
              I.publisher.logo?.url && (e.imageUrl = I.publisher.logo.url));
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
          for (const R of Array.from(L)) {
            const W = R.textContent?.trim();
            if (W) {
              e.description = W;
              break;
            }
          }
      }
      const o = document.querySelector(
          'a[href*="post_author_info"] .pw-author-name',
        ),
        i = o?.closest("a")?.parentElement,
        c =
          (
            i?.querySelector("img") ||
            document.querySelector('[data-testid="authorPhoto"]')
          )?.src || void 0;
      let p;
      const g = o?.querySelector("span");
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
          const I = N.textContent?.trim();
          if (I && !I.match(/^\d+\s*(followers?|following)/i)) {
            y = I;
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
    ys = () => {
      const e = document
          .querySelector('meta[property="og:title"]')
          ?.getAttribute("content"),
        t = e ? e.replace(/\s*[–—-]\s*Medium\s*$/i, "").trim() : void 0;
      let o;
      t &&
        (o =
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
          profileImageUrl: o,
          description: c,
          followerCount: i,
        };
    },
    zo = () =>
      !!document.querySelector(
        'meta[property="al:android:package"][content="com.medium.reader"]',
      ) ||
      !!document.querySelector(
        'meta[property="al:ios:app_name"][content="Medium"]',
      ) ||
      !!document.querySelector(
        'meta[property="og:site_name"][content="Medium"]',
      ),
    Go = () =>
      !!document.querySelector(
        'iframe[src^="https://substack.com/channel-frame"]',
      ),
    Qt = () => {
      const e = window.location.hostname.replace("www.", ""),
        t = window.location.pathname;
      if (e === "medium.com") {
        const o = t.match(/^\/([^@/][^/]*)\/?$/);
        return !!(o && !as.has(o[1]));
      }
      return !e.endsWith(".medium.com") && (t === "/" || t === "") ? zo() : !1;
    },
    ws = {
      x: fs,
      linkedin: ps,
      substack: ms,
      medium: () =>
        Qt()
          ? ys()
          : /^\/@[^/]+\/?$/.test(window.location.pathname)
            ? hs()
            : gs(),
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
    Gr = (e) => {
      const t = $o[e];
      if (!t) return;
      const o = ws[t];
      return o ? o() : void 0;
    },
    Ve = () => {
      const e = window.location.hostname;
      if (
        e === "x.com" ||
        e === "twitter.com" ||
        e === "www.x.com" ||
        e === "www.twitter.com"
      ) {
        const o = !!document.querySelector(
          '[data-testid="twitterArticleReadView"]',
        );
        return (
          (j.activeSiteConfig =
            Ye.find((i) => i.source === (o ? "x-article" : "x-post")) || null),
          j.activeSiteConfig
        );
      }
      return (
        j.activeSiteConfig ||
          ((j.activeSiteConfig =
            Ye.find((o) =>
              Ho(o.source).some((i) => e === i || e.endsWith(`.${i}`)),
            ) || null),
          j.activeSiteConfig ||
            (zo() &&
              (j.activeSiteConfig =
                Ye.find((o) => o.source === "medium-post") || null)),
          j.activeSiteConfig ||
            (Go() &&
              (j.activeSiteConfig =
                Ye.find((o) => o.source === "substack-post") || null))),
        j.activeSiteConfig
      );
    },
    vs = () => Ve() !== null,
    xs = (e) => $r.some((t) => t.source === e),
    en = (e) => {
      const t = new Intl.Segmenter(void 0, { granularity: "word" });
      let o = 0;
      for (const { isWordLike: i } of t.segment(e.trim())) i && o++;
      return o;
    },
    Cs = (e, t) => {
      const o = new Intl.Segmenter(void 0, { granularity: "word" });
      let i = 0,
        s = 0;
      for (const { index: c, isWordLike: p, segment: g } of o.segment(
        e.trim(),
      )) {
        if (p && (i++, i > t)) return e.trim().slice(0, c).trimEnd();
        s = c + g.length;
      }
      return e.trim().slice(0, s);
    },
    Ss = (e, t) =>
      e
        .split(",")
        .map((o) => `${o.trim()}${t}`)
        .join(", "),
    bs = (e, t) => {
      const o = `${e}:${t.slice(0, 40).trim()}`;
      let i = 0;
      for (let s = 0; s < o.length; s++)
        i = ((i << 5) - i + o.charCodeAt(s)) | 0;
      return `${e}-${(i >>> 0).toString(36)}`;
    },
    Zo = "data-pangram-fiber-text",
    Xo = (() => {
      let e = !1,
        t = null;
      return {
        ensure: () => {
          e ||
            t ||
            (t = new Promise((o) => {
              const i = document.createElement("script");
              ((i.src = chrome.runtime.getURL("fiber-extractor.js")),
                (i.onload = () => {
                  ((e = !0), o());
                }),
                document.documentElement.appendChild(i));
            }));
        },
        isReady: () => e,
        waitReady: () => t,
      };
    })(),
    Es = (e) => {
      if (!Xo.isReady()) return null;
      (e.setAttribute("data-pangram-fiber-request", "1"),
        document.dispatchEvent(new CustomEvent("pangram-extract-fiber")));
      const t = e.getAttribute(Zo);
      return (
        e.removeAttribute(Zo),
        e.removeAttribute("data-pangram-fiber-request"),
        t || null
      );
    },
    ks = () => {
      Xo.ensure();
    },
    Ko = "data-pangram-substack-fulltext",
    Yo = (() => {
      let e = !1,
        t = null;
      return {
        ensure: () => {
          e ||
            t ||
            (t = new Promise((o) => {
              const i = document.createElement("script");
              ((i.src = chrome.runtime.getURL("feed-interceptor.js")),
                (i.onload = () => {
                  ((e = !0), o());
                }),
                document.documentElement.appendChild(i));
            }));
        },
        isReady: () => e,
      };
    })(),
    _s = (e) => {
      if (!Yo.isReady()) return null;
      const t = (e.textContent || "").trim();
      if (!t) return null;
      (e.setAttribute("data-pangram-substack-request", t.slice(0, 150)),
        document.dispatchEvent(new CustomEvent("pangram-substack-lookup")));
      const o = e.getAttribute(Ko);
      return (
        e.removeAttribute(Ko),
        e.removeAttribute("data-pangram-substack-request"),
        o || null
      );
    },
    Ts = () => {
      Yo.ensure();
    },
    Wn = (e) => e.replace(/\s+/g, " ").trim(),
    Jo = (e) =>
      !(
        !e ||
        /^[•·]/.test(e) ||
        /^\d+(st|nd|rd|th)$/i.test(e) ||
        /\bfollowers?\b/i.test(e) ||
        /\b(edited|visibility)\b/i.test(e) ||
        /\b\d+\s*(mo|yr|w|d)\b/i.test(e)
      ),
    Mt = (e) => Jo(Wn(e.textContent || "")),
    tn =
      'a[href*="linkedin.com/in/"] h2, a[href^="/in/"] h2, a[href*="linkedin.com/company/"] h2, a[href^="/company/"] h2, a[href*="linkedin.com/in/"] p, a[href^="/in/"] p, a[href*="linkedin.com/company/"] p, a[href^="/company/"] p, a[href*="linkedin.com/in/"] span[aria-hidden="true"], a[href^="/in/"] span[aria-hidden="true"], a[href*="linkedin.com/company/"] span[aria-hidden="true"], a[href^="/company/"] span[aria-hidden="true"]',
    Vn =
      'a[href*="linkedin.com/in/"], a[href^="/in/"], a[href*="linkedin.com/company/"], a[href^="/company/"]',
    As = (e, t, o) => {
      if (!e.authorSelector) return;
      if (e.source === "linkedin-post") {
        let y = null,
          d = o.parentElement;
        for (; d && d !== t && ((y = Ae(d, o, tn, Mt)), !y);)
          d = d.parentElement;
        if ((y || (y = Ae(t, o, tn, Mt)), !y)) return;
        const v = Wn(
          (y.textContent || "").split(`
`)[0] || "",
        );
        if (!v) return;
        const M = y.closest(Vn)?.getAttribute("href") || "",
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
        let y = o.parentElement;
        for (; y && y !== t && ((i = y.querySelector(e.authorSelector)), !i);)
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
        for (; y && y !== t;) {
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
    Ls = (e, t) => {
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
                  const I = new URL(M).pathname
                    .replace(/^\//, "")
                    .split("/")[0];
                  I && (k = I);
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
      const o = t.querySelector(e.publicationSelector),
        i = o?.textContent?.trim();
      if (!i) return;
      const s = o?.closest("a")?.getAttribute("href");
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
    Zr = (e) => {
      const t = document.getElementById(cs);
      if (!t) return;
      const o = t.querySelector(".pangram-feed-spinner");
      o && (o.style.display = e ? "inline-block" : "none");
    },
    Qo = (e, t) => {
      let o = 0,
        i = e;
      for (; i && i !== t;) (o++, (i = i.parentElement));
      return o;
    },
    Pt = (e, t, o, r) => {
      let i = t.parentElement;
      for (; i;) {
        const s = Ae(i, t, o, void 0, e, r);
        if (s) {
          const c = Qo(s, i);
          if (Qo(t, i) - c > 4) {
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
    Xr = (e, t, o, r) => {
      switch (o.type) {
        case "before-selector": {
          const i = Pt(e, t, o.selector, r);
          if (!i) break;
          const s = Ae(i, t, o.selector, void 0, e, r);
          if (s && s.parentElement)
            return { parent: s.parentElement, before: s };
          break;
        }
        case "before-selector-global": {
          const i = document.querySelector(o.selector);
          if (i && i.parentElement)
            return { parent: i.parentElement, before: i };
          break;
        }
        case "after-selector": {
          const i = Pt(e, t, o.selector, r);
          if (!i) break;
          const s = Ae(i, t, o.selector, void 0, e, r);
          if (s && s.parentElement) {
            const c = document.querySelector('[role="main"]');
            if (c && !c.contains(s)) break;
            return { parent: s.parentElement, before: s.nextElementSibling };
          }
          break;
        }
        case "append-to-parent-of-selector": {
          const i = Pt(e, t, o.selector, r);
          if (!i) break;
          const s = Ae(i, t, o.selector, void 0, e, r);
          if (s?.parentElement)
            return { parent: s.parentElement, before: null };
          break;
        }
        case "append-to-row-from-selector": {
          const i = Pt(e, t, o.selector, r);
          if (!i) break;
          const s = Ae(i, t, o.selector, void 0, e, r);
          if (!s) break;
          let c = s;
          for (; c && c !== e;) {
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
          const i = o.tag || "*",
            s = Array.from(e.querySelectorAll(i));
          for (let c = 0; c < s.length; c++) {
            const p = s[c];
            if (r && !sameBadgeBoundary(p, e, r)) continue;
            if (p.textContent?.trim() === o.text) {
              let g = p;
              for (; g.parentElement && g.parentElement !== e;) {
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
          const i = Pt(e, t, o.selector, r);
          if (!i) break;
          const s = Ae(i, t, o.selector, void 0, e, r);
          if (!s) break;
          let c = s,
            p = s.parentElement;
          for (; p && p !== e;) {
            const g = window.getComputedStyle(p);
            if (g.display === "flex" && g.flexDirection === "row")
              return { parent: p, before: c };
            ((c = p), (p = p.parentElement));
          }
          break;
        }
        case "walk-up-from-selector-global": {
          const i = document.querySelector(o.selector);
          if (!i) break;
          let s = i,
            c = i.parentElement;
          for (; c && c !== document.body;) {
            const p = window.getComputedStyle(c);
            if (p.display === "flex" && p.flexDirection === "row")
              return { parent: c, before: s };
            ((s = c), (c = c.parentElement));
          }
          break;
        }
        case "walk-up-from-container-selector": {
          const i = Ae(e, t, o.selector, void 0, e, r);
          if (!i) break;
          let s = i,
            c = i.parentElement;
          for (; c && c !== e;) {
            const p = window.getComputedStyle(c);
            if (p.display === "flex" && p.flexDirection === "row")
              return { parent: c, before: s };
            ((s = c), (c = c.parentElement));
          }
          break;
        }
        case "after-container-selector": {
          const i = Ae(e, t, o.selector, void 0, e, r);
          if (i && i.parentElement)
            return { parent: i.parentElement, before: i.nextElementSibling };
          break;
        }
        case "before-container-selector": {
          const i = Ae(e, t, o.selector, void 0, e, r);
          if (i && i.parentElement)
            return { parent: i.parentElement, before: i };
          break;
        }
        case "append-to-selector": {
          const i = Pt(e, t, o.selector, r);
          if (!i) break;
          const s = Ae(i, t, o.selector, void 0, e, r);
          if (s)
            return o.targetLastChild && s.lastElementChild
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
          for (const i of o.strategies) {
            const s = Xr(e, t, i, r);
            if (s) return s;
          }
          break;
        }
      }
      return null;
    },
    Rs = (e, t, o, i) => {
      if (o.type === "chain") {
        for (const s of o.strategies) if (Xr(e, t, s, i)) return s;
      }
      return o;
    },
    Ft = (e, t, o, i, s, c, r) => {
      const a = activeBadgeBoundary(e, r),
        p = Xr(e, t, i, a);
      let g = e;
      if (p) {
        let I = p.parent;
        for (; I && I !== e && I.parentElement !== e;) I = I.parentElement;
        I && I !== e && (g = I);
      }
      const y = g.querySelector(`.${Te}`);
      if (
        (y &&
          (y.parentElement?.classList.contains("pangram-badge-wrapper")
            ? y.parentElement.remove()
            : y.remove()),
        !document.getElementById("pangram-badge-font"))
      ) {
        const I = document.createElement("style");
        I.id = "pangram-badge-font";
        const E = chrome.runtime.getURL("fonts/ibm-plex-sans-500.woff2");
        ((I.textContent = `
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 500 700;
        font-display: swap;
        src: url('${E}') format('woff2');
      }
    `),
          document.head.appendChild(I));
      }
      ((o.style.fontFamily = "'IBM Plex Sans', sans-serif"),
        (o.style.position = "relative"));
      const d = s === "substack-post" ? "0" : s === "reddit-post" ? "1" : "10";
      o.style.zIndex = d;
      const v = Rs(e, t, i, a),
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
        (o.style.pointerEvents = "auto"),
        M.appendChild(o));
      const N = M;
      if (
        (p
          ? p.before && p.before.parentNode === p.parent
            ? p.parent.insertBefore(N, p.before)
            : p.parent.appendChild(N)
          : t.parentElement && t.parentElement.insertBefore(N, t),
        s !== "linkedin-post")
      ) {
        let I = N.parentElement;
        for (; I && I !== e;) {
          const E = window.getComputedStyle(I),
            L = E.overflow,
            R =
              E.getPropertyValue("-webkit-line-clamp") !== "none" &&
              E.getPropertyValue("-webkit-line-clamp") !== "",
            W = E.whiteSpace === "nowrap" && E.textOverflow === "ellipsis";
          ((L === "hidden" || L === "clip") &&
            (s === "reddit-post" || !W) &&
            !R &&
            (I.style.overflow = "visible"),
            (I = I.parentElement));
        }
      }
      if (
        (v.type === "before-post-text" &&
          ((o.style.width = "fit-content"), (o.style.marginBottom = "4px")),
        v.type === "append-to-selector" &&
          p &&
          ((o.style.flexShrink = "0"),
          (o.style.verticalAlign = "middle"),
          (o.style.display = "inline-flex"),
          (o.style.marginLeft = "4px")),
        v.type === "append-to-row-from-selector" &&
          p &&
          (o.style.marginLeft = "4px"),
        (v.type === "after-container-selector" ||
          v.type === "before-container-selector") &&
          p &&
          ((N.style.justifyContent = "flex-start"),
          (N.style.alignSelf = "flex-start"),
          (o.style.flexShrink = "0"),
          (o.style.alignSelf = "center"),
          (o.style.marginLeft = "0"),
          (o.style.marginRight = "0")),
        v.type === "after-selector" && p)
      ) {
        const I = p.parent,
          E = window.getComputedStyle(I).display;
        (E !== "flex" && E !== "inline-flex" && E !== "contents"
          ? ((I.style.display = "flex"),
            (I.style.flexDirection = "row"),
            (I.style.alignItems = "center"),
            (I.style.flexWrap = "wrap"),
            (I.style.gap = "8px"))
          : (E === "flex" || E === "inline-flex") &&
            (I.style.alignItems = "center"),
          (o.style.flexShrink = "0"),
          (o.style.alignSelf = "center"),
          (o.style.marginLeft = "0"));
      }
      if (v.type === "absolute-top-right") {
        const I = e;
        ((!I.style.position || I.style.position === "static") &&
          (I.style.position = "relative"),
          (o.style.position = "absolute"),
          (o.style.top = v.top || "8px"),
          (o.style.right = v.right || "8px"),
          (o.style.zIndex = "10"));
      }
    };
  var ot = {},
    mt = {};
  var ei;
  function Is() {
    if (ei) return mt;
    ei = 1;
    var e = Pn();
    function t(n) {
      for (
        var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + n,
          f = 1;
        f < arguments.length;
        f++
      )
        l += "&args[]=" + encodeURIComponent(arguments[f]);
      return (
        "Minified React error #" +
        n +
        "; visit " +
        l +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var o = Object.prototype.hasOwnProperty,
      i =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      s = {},
      c = {};
    function p(n) {
      return o.call(c, n)
        ? !0
        : o.call(s, n)
          ? !1
          : i.test(n)
            ? (c[n] = !0)
            : ((s[n] = !0), !1);
    }
    function g(n, l, f, h, b, x, _) {
      ((this.acceptsBooleans = l === 2 || l === 3 || l === 4),
        (this.attributeName = h),
        (this.attributeNamespace = b),
        (this.mustUseProperty = f),
        (this.propertyName = n),
        (this.type = l),
        (this.sanitizeURL = x),
        (this.removeEmptyString = _));
    }
    var y = {};
    ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (n) {
        y[n] = new g(n, 0, !1, n, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (n) {
        var l = n[0];
        y[l] = new g(l, 1, !1, n[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(
        function (n) {
          y[n] = new g(n, 2, !1, n.toLowerCase(), null, !1, !1);
        },
      ),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (n) {
        y[n] = new g(n, 2, !1, n, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (n) {
          y[n] = new g(n, 3, !1, n.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (n) {
        y[n] = new g(n, 3, !0, n, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (n) {
        y[n] = new g(n, 4, !1, n, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (n) {
        y[n] = new g(n, 6, !1, n, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (n) {
        y[n] = new g(n, 5, !1, n.toLowerCase(), null, !1, !1);
      }));
    var d = /[\-:]([a-z])/g;
    function v(n) {
      return n[1].toUpperCase();
    }
    ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (n) {
        var l = n.replace(d, v);
        y[l] = new g(l, 1, !1, n, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (n) {
          var l = n.replace(d, v);
          y[l] = new g(l, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (n) {
        var l = n.replace(d, v);
        y[l] = new g(
          l,
          1,
          !1,
          n,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1,
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (n) {
        y[n] = new g(n, 1, !1, n.toLowerCase(), null, !1, !1);
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
      ["src", "href", "action", "formAction"].forEach(function (n) {
        y[n] = new g(n, 1, !1, n.toLowerCase(), null, !0, !0);
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
    Object.keys(k).forEach(function (n) {
      M.forEach(function (l) {
        ((l = l + n.charAt(0).toUpperCase() + n.substring(1)), (k[l] = k[n]));
      });
    });
    var B = /["'&<>]/;
    function N(n) {
      if (typeof n == "boolean" || typeof n == "number") return "" + n;
      n = "" + n;
      var l = B.exec(n);
      if (l) {
        var f = "",
          h,
          b = 0;
        for (h = l.index; h < n.length; h++) {
          switch (n.charCodeAt(h)) {
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
          (b !== h && (f += n.substring(b, h)), (b = h + 1), (f += l));
        }
        n = b !== h ? f + n.substring(b, h) : f;
      }
      return n;
    }
    var I = /([A-Z])/g,
      E = /^ms-/,
      L = Array.isArray;
    function R(n, l) {
      return { insertionMode: n, selectedValue: l };
    }
    function W(n, l, f) {
      switch (l) {
        case "select":
          return R(1, f.value != null ? f.value : f.defaultValue);
        case "svg":
          return R(2, null);
        case "math":
          return R(3, null);
        case "foreignObject":
          return R(1, null);
        case "table":
          return R(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return R(5, null);
        case "colgroup":
          return R(7, null);
        case "tr":
          return R(6, null);
      }
      return 4 <= n.insertionMode || n.insertionMode === 0 ? R(1, null) : n;
    }
    var Y = new Map();
    function re(n, l, f) {
      if (typeof f != "object") throw Error(t(62));
      l = !0;
      for (var h in f)
        if (o.call(f, h)) {
          var b = f[h];
          if (b != null && typeof b != "boolean" && b !== "") {
            if (h.indexOf("--") === 0) {
              var x = N(h);
              b = N(("" + b).trim());
            } else {
              x = h;
              var _ = Y.get(x);
              (_ !== void 0 ||
                ((_ = N(x.replace(I, "-$1").toLowerCase().replace(E, "-ms-"))),
                Y.set(x, _)),
                (x = _),
                (b =
                  typeof b == "number"
                    ? b === 0 || o.call(k, h)
                      ? "" + b
                      : b + "px"
                    : N(("" + b).trim())));
            }
            l
              ? ((l = !1), n.push(' style="', x, ":", b))
              : n.push(";", x, ":", b);
          }
        }
      l || n.push('"');
    }
    function O(n, l, f, h) {
      switch (f) {
        case "style":
          re(n, l, h);
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
              h && n.push(" ", f, '=""');
              break;
            case 4:
              h === !0
                ? n.push(" ", f, '=""')
                : h !== !1 && n.push(" ", f, '="', N(h), '"');
              break;
            case 5:
              isNaN(h) || n.push(" ", f, '="', N(h), '"');
              break;
            case 6:
              !isNaN(h) && 1 <= h && n.push(" ", f, '="', N(h), '"');
              break;
            default:
              (l.sanitizeURL && (h = "" + h), n.push(" ", f, '="', N(h), '"'));
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
          n.push(" ", f, '="', N(h), '"');
        }
      }
    }
    function $(n, l, f) {
      if (l != null) {
        if (f != null) throw Error(t(60));
        if (typeof l != "object" || !("__html" in l)) throw Error(t(61));
        ((l = l.__html), l != null && n.push("" + l));
      }
    }
    function ie(n) {
      var l = "";
      return (
        e.Children.forEach(n, function (f) {
          f != null && (l += f);
        }),
        l
      );
    }
    function fe(n, l, f, h) {
      n.push(D(f));
      var b = (f = null),
        x;
      for (x in l)
        if (o.call(l, x)) {
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
                O(n, h, x, _);
            }
        }
      return (
        n.push(">"),
        $(n, b, f),
        typeof f == "string" ? (n.push(N(f)), null) : f
      );
    }
    var ve = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
      q = new Map();
    function D(n) {
      var l = q.get(n);
      if (l === void 0) {
        if (!ve.test(n)) throw Error(t(65, n));
        ((l = "<" + n), q.set(n, l));
      }
      return l;
    }
    function Q(n, l, f, h, b) {
      switch (l) {
        case "select":
          n.push(D("select"));
          var x = null,
            _ = null;
          for (K in f)
            if (o.call(f, K)) {
              var F = f[K];
              if (F != null)
                switch (K) {
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
                    O(n, h, K, F);
                }
            }
          return (n.push(">"), $(n, _, x), x);
        case "option":
          ((_ = b.selectedValue), n.push(D("option")));
          var V = (F = null),
            G = null,
            K = null;
          for (x in f)
            if (o.call(f, x)) {
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
                    K = we;
                    break;
                  case "value":
                    V = we;
                  default:
                    O(n, h, x, we);
                }
            }
          if (_ != null)
            if (((f = V !== null ? "" + V : ie(F)), L(_))) {
              for (h = 0; h < _.length; h++)
                if ("" + _[h] === f) {
                  n.push(' selected=""');
                  break;
                }
            } else "" + _ === f && n.push(' selected=""');
          else G && n.push(' selected=""');
          return (n.push(">"), $(n, K, F), F);
        case "textarea":
          (n.push(D("textarea")), (K = _ = x = null));
          for (F in f)
            if (o.call(f, F) && ((V = f[F]), V != null))
              switch (F) {
                case "children":
                  K = V;
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
                  O(n, h, F, V);
              }
          if ((x === null && _ !== null && (x = _), n.push(">"), K != null)) {
            if (x != null) throw Error(t(92));
            if (L(K) && 1 < K.length) throw Error(t(93));
            x = "" + K;
          }
          return (
            typeof x == "string" &&
              x[0] ===
                `
` &&
              n.push(`
`),
            x !== null && n.push(N("" + x)),
            null
          );
        case "input":
          (n.push(D("input")), (V = K = F = x = null));
          for (_ in f)
            if (o.call(f, _) && ((G = f[_]), G != null))
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
                  K = G;
                  break;
                case "value":
                  x = G;
                  break;
                default:
                  O(n, h, _, G);
              }
          return (
            K !== null
              ? O(n, h, "checked", K)
              : V !== null && O(n, h, "checked", V),
            x !== null
              ? O(n, h, "value", x)
              : F !== null && O(n, h, "value", F),
            n.push("/>"),
            null
          );
        case "menuitem":
          n.push(D("menuitem"));
          for (var $e in f)
            if (o.call(f, $e) && ((x = f[$e]), x != null))
              switch ($e) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(t(400));
                default:
                  O(n, h, $e, x);
              }
          return (n.push(">"), null);
        case "title":
          (n.push(D("title")), (x = null));
          for (we in f)
            if (o.call(f, we) && ((_ = f[we]), _ != null))
              switch (we) {
                case "children":
                  x = _;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(t(434));
                default:
                  O(n, h, we, _);
              }
          return (n.push(">"), x);
        case "listing":
        case "pre":
          (n.push(D(l)), (_ = x = null));
          for (V in f)
            if (o.call(f, V) && ((F = f[V]), F != null))
              switch (V) {
                case "children":
                  x = F;
                  break;
                case "dangerouslySetInnerHTML":
                  _ = F;
                  break;
                default:
                  O(n, h, V, F);
              }
          if ((n.push(">"), _ != null)) {
            if (x != null) throw Error(t(60));
            if (typeof _ != "object" || !("__html" in _)) throw Error(t(61));
            ((f = _.__html),
              f != null &&
                (typeof f == "string" &&
                0 < f.length &&
                f[0] ===
                  `
`
                  ? n.push(
                      `
`,
                      f,
                    )
                  : n.push("" + f)));
          }
          return (
            typeof x == "string" &&
              x[0] ===
                `
` &&
              n.push(`
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
          n.push(D(l));
          for (var He in f)
            if (o.call(f, He) && ((x = f[He]), x != null))
              switch (He) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(t(399, l));
                default:
                  O(n, h, He, x);
              }
          return (n.push("/>"), null);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return fe(n, f, l, h);
        case "html":
          return (
            b.insertionMode === 0 && n.push("<!DOCTYPE html>"),
            fe(n, f, l, h)
          );
        default:
          if (l.indexOf("-") === -1 && typeof f.is != "string")
            return fe(n, f, l, h);
          (n.push(D(l)), (_ = x = null));
          for (G in f)
            if (o.call(f, G) && ((F = f[G]), F != null))
              switch (G) {
                case "children":
                  x = F;
                  break;
                case "dangerouslySetInnerHTML":
                  _ = F;
                  break;
                case "style":
                  re(n, h, F);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  p(G) &&
                    typeof F != "function" &&
                    typeof F != "symbol" &&
                    n.push(" ", G, '="', N(F), '"');
              }
          return (n.push(">"), $(n, _, x), x);
      }
    }
    function ee(n, l, f) {
      if ((n.push('<!--$?--><template id="'), f === null)) throw Error(t(395));
      return (n.push(f), n.push('"></template>'));
    }
    function xe(n, l, f, h) {
      switch (f.insertionMode) {
        case 0:
        case 1:
          return (
            n.push('<div hidden id="'),
            n.push(l.segmentPrefix),
            (l = h.toString(16)),
            n.push(l),
            n.push('">')
          );
        case 2:
          return (
            n.push('<svg aria-hidden="true" style="display:none" id="'),
            n.push(l.segmentPrefix),
            (l = h.toString(16)),
            n.push(l),
            n.push('">')
          );
        case 3:
          return (
            n.push('<math aria-hidden="true" style="display:none" id="'),
            n.push(l.segmentPrefix),
            (l = h.toString(16)),
            n.push(l),
            n.push('">')
          );
        case 4:
          return (
            n.push('<table hidden id="'),
            n.push(l.segmentPrefix),
            (l = h.toString(16)),
            n.push(l),
            n.push('">')
          );
        case 5:
          return (
            n.push('<table hidden><tbody id="'),
            n.push(l.segmentPrefix),
            (l = h.toString(16)),
            n.push(l),
            n.push('">')
          );
        case 6:
          return (
            n.push('<table hidden><tr id="'),
            n.push(l.segmentPrefix),
            (l = h.toString(16)),
            n.push(l),
            n.push('">')
          );
        case 7:
          return (
            n.push('<table hidden><colgroup id="'),
            n.push(l.segmentPrefix),
            (l = h.toString(16)),
            n.push(l),
            n.push('">')
          );
        default:
          throw Error(t(397));
      }
    }
    function Me(n, l) {
      switch (l.insertionMode) {
        case 0:
        case 1:
          return n.push("</div>");
        case 2:
          return n.push("</svg>");
        case 3:
          return n.push("</math>");
        case 4:
          return n.push("</table>");
        case 5:
          return n.push("</tbody></table>");
        case 6:
          return n.push("</tr></table>");
        case 7:
          return n.push("</colgroup></table>");
        default:
          throw Error(t(397));
      }
    }
    var ce = /[<\u2028\u2029]/g;
    function U(n) {
      return JSON.stringify(n).replace(ce, function (l) {
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
    function se(n, l) {
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
          generateStaticMarkup: n,
        }
      );
    }
    function ke(n, l, f, h) {
      return f.generateStaticMarkup
        ? (n.push(N(l)), !1)
        : (l === ""
            ? (n = h)
            : (h && n.push("<!-- -->"), n.push(N(l)), (n = !0)),
          n);
    }
    var w = Object.assign,
      A = Symbol.for("react.element"),
      H = Symbol.for("react.portal"),
      Z = Symbol.for("react.fragment"),
      X = Symbol.for("react.strict_mode"),
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
      uo = Symbol.for("react.default_value"),
      Dt = Symbol.iterator;
    function vt(n) {
      if (n == null) return null;
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case Z:
          return "Fragment";
        case H:
          return "Portal";
        case ae:
          return "Profiler";
        case X:
          return "StrictMode";
        case he:
          return "Suspense";
        case Ee:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case le:
            return (n.displayName || "Context") + ".Consumer";
          case de:
            return (n._context.displayName || "Context") + ".Provider";
          case oe:
            var l = n.render;
            return (
              (n = n.displayName),
              n ||
                ((n = l.displayName || l.name || ""),
                (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
              n
            );
          case at:
            return (
              (l = n.displayName || null),
              l !== null ? l : vt(n.type) || "Memo"
            );
          case ge:
            ((l = n._payload), (n = n._init));
            try {
              return vt(n(l));
            } catch {}
        }
      return null;
    }
    var Bt = {};
    function rr(n, l) {
      if (((n = n.contextTypes), !n)) return Bt;
      var f = {},
        h;
      for (h in n) f[h] = l[h];
      return f;
    }
    var Ge = null;
    function Re(n, l) {
      if (n !== l) {
        ((n.context._currentValue2 = n.parentValue), (n = n.parent));
        var f = l.parent;
        if (n === null) {
          if (f !== null) throw Error(t(401));
        } else {
          if (f === null) throw Error(t(401));
          Re(n, f);
        }
        l.context._currentValue2 = l.value;
      }
    }
    function or(n) {
      ((n.context._currentValue2 = n.parentValue),
        (n = n.parent),
        n !== null && or(n));
    }
    function ir(n) {
      var l = n.parent;
      (l !== null && ir(l), (n.context._currentValue2 = n.value));
    }
    function sr(n, l) {
      if (
        ((n.context._currentValue2 = n.parentValue), (n = n.parent), n === null)
      )
        throw Error(t(402));
      n.depth === l.depth ? Re(n, l) : sr(n, l);
    }
    function ar(n, l) {
      var f = l.parent;
      if (f === null) throw Error(t(402));
      (n.depth === f.depth ? Re(n, f) : ar(n, f),
        (l.context._currentValue2 = l.value));
    }
    function qt(n) {
      var l = Ge;
      l !== n &&
        (l === null
          ? ir(n)
          : n === null
            ? or(l)
            : l.depth === n.depth
              ? Re(l, n)
              : l.depth > n.depth
                ? sr(l, n)
                : ar(l, n),
        (Ge = n));
    }
    var lr = {
      isMounted: function () {
        return !1;
      },
      enqueueSetState: function (n, l) {
        ((n = n._reactInternals), n.queue !== null && n.queue.push(l));
      },
      enqueueReplaceState: function (n, l) {
        ((n = n._reactInternals), (n.replace = !0), (n.queue = [l]));
      },
      enqueueForceUpdate: function () {},
    };
    function cr(n, l, f, h) {
      var b = n.state !== void 0 ? n.state : null;
      ((n.updater = lr), (n.props = f), (n.state = b));
      var x = { queue: [], replace: !1 };
      n._reactInternals = x;
      var _ = l.contextType;
      if (
        ((n.context =
          typeof _ == "object" && _ !== null ? _._currentValue2 : h),
        (_ = l.getDerivedStateFromProps),
        typeof _ == "function" &&
          ((_ = _(f, b)), (b = _ == null ? b : w({}, b, _)), (n.state = b)),
        typeof l.getDerivedStateFromProps != "function" &&
          typeof n.getSnapshotBeforeUpdate != "function" &&
          (typeof n.UNSAFE_componentWillMount == "function" ||
            typeof n.componentWillMount == "function"))
      )
        if (
          ((l = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          l !== n.state && lr.enqueueReplaceState(n, n.state, null),
          x.queue !== null && 0 < x.queue.length)
        )
          if (
            ((l = x.queue),
            (_ = x.replace),
            (x.queue = null),
            (x.replace = !1),
            _ && l.length === 1)
          )
            n.state = l[0];
          else {
            for (
              x = _ ? l[0] : n.state, b = !0, _ = _ ? 1 : 0;
              _ < l.length;
              _++
            ) {
              var F = l[_];
              ((F = typeof F == "function" ? F.call(n, x, f, h) : F),
                F != null && (b ? ((b = !1), (x = w({}, x, F))) : w(x, F)));
            }
            n.state = x;
          }
        else x.queue = null;
    }
    var fo = { id: 1, overflow: "" };
    function hn(n, l, f) {
      var h = n.id;
      n = n.overflow;
      var b = 32 - $t(h) - 1;
      ((h &= ~(1 << b)), (f += 1));
      var x = 32 - $t(l) + b;
      if (30 < x) {
        var _ = b - (b % 5);
        return (
          (x = (h & ((1 << _) - 1)).toString(32)),
          (h >>= _),
          (b -= _),
          { id: (1 << (32 - $t(l) + b)) | (f << b) | h, overflow: x + n }
        );
      }
      return { id: (1 << x) | (f << b) | h, overflow: n };
    }
    var $t = Math.clz32 ? Math.clz32 : ho,
      po = Math.log,
      mo = Math.LN2;
    function ho(n) {
      return ((n >>>= 0), n === 0 ? 32 : (31 - ((po(n) / mo) | 0)) | 0);
    }
    function go(n, l) {
      return (n === l && (n !== 0 || 1 / n === 1 / l)) || (n !== n && l !== l);
    }
    var yo = typeof Object.is == "function" ? Object.is : go,
      Be = null,
      gn = null,
      Ht = null,
      ue = null,
      xt = !1,
      jt = !1,
      Ct = 0,
      Ze = null,
      Ut = 0;
    function et() {
      if (Be === null) throw Error(t(321));
      return Be;
    }
    function ur() {
      if (0 < Ut) throw Error(t(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function yn() {
      return (
        ue === null
          ? Ht === null
            ? ((xt = !1), (Ht = ue = ur()))
            : ((xt = !0), (ue = Ht))
          : ue.next === null
            ? ((xt = !1), (ue = ue.next = ur()))
            : ((xt = !0), (ue = ue.next)),
        ue
      );
    }
    function wn() {
      ((gn = Be = null), (jt = !1), (Ht = null), (Ut = 0), (ue = Ze = null));
    }
    function dr(n, l) {
      return typeof l == "function" ? l(n) : l;
    }
    function fr(n, l, f) {
      if (((Be = et()), (ue = yn()), xt)) {
        var h = ue.queue;
        if (
          ((l = h.dispatch), Ze !== null && ((f = Ze.get(h)), f !== void 0))
        ) {
          (Ze.delete(h), (h = ue.memoizedState));
          do ((h = n(h, f.action)), (f = f.next));
          while (f !== null);
          return ((ue.memoizedState = h), [h, l]);
        }
        return [ue.memoizedState, l];
      }
      return (
        (n =
          n === dr
            ? typeof l == "function"
              ? l()
              : l
            : f !== void 0
              ? f(l)
              : l),
        (ue.memoizedState = n),
        (n = ue.queue = { last: null, dispatch: null }),
        (n = n.dispatch = wo.bind(null, Be, n)),
        [ue.memoizedState, n]
      );
    }
    function pr(n, l) {
      if (
        ((Be = et()), (ue = yn()), (l = l === void 0 ? null : l), ue !== null)
      ) {
        var f = ue.memoizedState;
        if (f !== null && l !== null) {
          var h = f[1];
          e: if (h === null) h = !1;
          else {
            for (var b = 0; b < h.length && b < l.length; b++)
              if (!yo(l[b], h[b])) {
                h = !1;
                break e;
              }
            h = !0;
          }
          if (h) return f[0];
        }
      }
      return ((n = n()), (ue.memoizedState = [n, l]), n);
    }
    function wo(n, l, f) {
      if (25 <= Ut) throw Error(t(301));
      if (n === Be)
        if (
          ((jt = !0),
          (n = { action: f, next: null }),
          Ze === null && (Ze = new Map()),
          (f = Ze.get(l)),
          f === void 0)
        )
          Ze.set(l, n);
        else {
          for (l = f; l.next !== null;) l = l.next;
          l.next = n;
        }
    }
    function vo() {
      throw Error(t(394));
    }
    function Wt() {}
    var mr = {
        readContext: function (n) {
          return n._currentValue2;
        },
        useContext: function (n) {
          return (et(), n._currentValue2);
        },
        useMemo: pr,
        useReducer: fr,
        useRef: function (n) {
          ((Be = et()), (ue = yn()));
          var l = ue.memoizedState;
          return l === null
            ? ((n = { current: n }), (ue.memoizedState = n))
            : l;
        },
        useState: function (n) {
          return fr(dr, n);
        },
        useInsertionEffect: Wt,
        useLayoutEffect: function () {},
        useCallback: function (n, l) {
          return pr(function () {
            return n;
          }, l);
        },
        useImperativeHandle: Wt,
        useEffect: Wt,
        useDebugValue: Wt,
        useDeferredValue: function (n) {
          return (et(), n);
        },
        useTransition: function () {
          return (et(), [!1, vo]);
        },
        useId: function () {
          var n = gn.treeContext,
            l = n.overflow;
          ((n = n.id), (n = (n & ~(1 << (32 - $t(n) - 1))).toString(32) + l));
          var f = Vt;
          if (f === null) throw Error(t(404));
          return (
            (l = Ct++),
            (n = ":" + f.idPrefix + "R" + n),
            0 < l && (n += "H" + l.toString(32)),
            n + ":"
          );
        },
        useMutableSource: function (n, l) {
          return (et(), l(n._source));
        },
        useSyncExternalStore: function (n, l, f) {
          if (f === void 0) throw Error(t(407));
          return f();
        },
      },
      Vt = null,
      vn =
        e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          .ReactCurrentDispatcher;
    function xo(n) {
      return (console.error(n), null);
    }
    function St() {}
    function Co(n, l, f, h, b, x, _, F, V) {
      var G = [],
        K = new Set();
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
          abortableTasks: K,
          pingedTasks: G,
          clientRenderedBoundaries: [],
          completedBoundaries: [],
          partialBoundaries: [],
          onError: b === void 0 ? xo : b,
          onAllReady: St,
          onShellReady: _ === void 0 ? St : _,
          onShellError: St,
          onFatalError: St,
        }),
        (f = zt(l, 0, null, f, !1, !1)),
        (f.parentFlushed = !0),
        (n = xn(l, n, null, f, K, Bt, null, fo)),
        G.push(n),
        l
      );
    }
    function xn(n, l, f, h, b, x, _, F) {
      (n.allPendingTasks++,
        f === null ? n.pendingRootTasks++ : f.pendingTasks++);
      var V = {
        node: l,
        ping: function () {
          var G = n.pingedTasks;
          (G.push(V), G.length === 1 && xr(n));
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
    function zt(n, l, f, h, b, x) {
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
    function bt(n, l) {
      if (((n = n.onError(l)), n != null && typeof n != "string"))
        throw Error(
          'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
            typeof n +
            '" instead',
        );
      return n;
    }
    function Gt(n, l) {
      var f = n.onShellError;
      (f(l),
        (f = n.onFatalError),
        f(l),
        n.destination !== null
          ? ((n.status = 2), n.destination.destroy(l))
          : ((n.status = 1), (n.fatalError = l)));
    }
    function hr(n, l, f, h, b) {
      for (Be = {}, gn = l, Ct = 0, n = f(h, b); jt;)
        ((jt = !1), (Ct = 0), (Ut += 1), (ue = null), (n = f(h, b)));
      return (wn(), n);
    }
    function gr(n, l, f, h) {
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
        ((l.legacyContext = h), Ie(n, l, b), (l.legacyContext = _));
      } else Ie(n, l, b);
    }
    function yr(n, l) {
      if (n && n.defaultProps) {
        ((l = w({}, l)), (n = n.defaultProps));
        for (var f in n) l[f] === void 0 && (l[f] = n[f]);
        return l;
      }
      return l;
    }
    function Cn(n, l, f, h, b) {
      if (typeof f == "function")
        if (f.prototype && f.prototype.isReactComponent) {
          b = rr(f, l.legacyContext);
          var x = f.contextType;
          ((x = new f(
            h,
            typeof x == "object" && x !== null ? x._currentValue2 : b,
          )),
            cr(x, f, h, b),
            gr(n, l, x, f));
        } else {
          ((x = rr(f, l.legacyContext)), (b = hr(n, l, f, h, x)));
          var _ = Ct !== 0;
          if (
            typeof b == "object" &&
            b !== null &&
            typeof b.render == "function" &&
            b.$$typeof === void 0
          )
            (cr(b, f, h, x), gr(n, l, b, f));
          else if (_) {
            ((h = l.treeContext), (l.treeContext = hn(h, 1, 0)));
            try {
              Ie(n, l, b);
            } finally {
              l.treeContext = h;
            }
          } else Ie(n, l, b);
        }
      else if (typeof f == "string") {
        switch (
          ((b = l.blockedSegment),
          (x = Q(b.chunks, f, h, n.responseState, b.formatContext)),
          (b.lastPushedText = !1),
          (_ = b.formatContext),
          (b.formatContext = W(_, f, h)),
          Sn(n, l, x),
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
          case X:
          case ae:
          case Z:
            Ie(n, l, h.children);
            return;
          case Ee:
            Ie(n, l, h.children);
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
                V = zt(n, b.chunks.length, F, b.formatContext, !1, !1);
              (b.children.push(V), (b.lastPushedText = !1));
              var G = zt(n, 0, null, b.formatContext, !1, !1);
              ((G.parentFlushed = !0),
                (l.blockedBoundary = F),
                (l.blockedSegment = G));
              try {
                if (
                  (Sn(n, l, h),
                  n.responseState.generateStaticMarkup ||
                    (G.lastPushedText &&
                      G.textEmbedded &&
                      G.chunks.push("<!-- -->")),
                  (G.status = 1),
                  ct(F, G),
                  F.pendingTasks === 0)
                )
                  break e;
              } catch (K) {
                ((G.status = 4),
                  (F.forceClientRender = !0),
                  (F.errorDigest = bt(n, K)));
              } finally {
                ((l.blockedBoundary = f), (l.blockedSegment = b));
              }
              ((l = xn(
                n,
                x,
                f,
                V,
                _,
                l.legacyContext,
                l.context,
                l.treeContext,
              )),
                n.pingedTasks.push(l));
            }
            return;
        }
        if (typeof f == "object" && f !== null)
          switch (f.$$typeof) {
            case oe:
              if (((h = hr(n, l, f.render, h, b)), Ct !== 0)) {
                ((f = l.treeContext), (l.treeContext = hn(f, 1, 0)));
                try {
                  Ie(n, l, h);
                } finally {
                  l.treeContext = f;
                }
              } else Ie(n, l, h);
              return;
            case at:
              ((f = f.type), (h = yr(f, h)), Cn(n, l, f, h, b));
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
                Ie(n, l, b),
                (n = Ge),
                n === null)
              )
                throw Error(t(403));
              ((h = n.parentValue),
                (n.context._currentValue2 =
                  h === uo ? n.context._defaultValue : h),
                (n = Ge = n.parent),
                (l.context = n));
              return;
            case le:
              ((h = h.children), (h = h(f._currentValue2)), Ie(n, l, h));
              return;
            case ge:
              ((b = f._init),
                (f = b(f._payload)),
                (h = yr(f, h)),
                Cn(n, l, f, h, void 0));
              return;
          }
        throw Error(t(130, f == null ? f : typeof f, ""));
      }
    }
    function Ie(n, l, f) {
      if (((l.node = f), typeof f == "object" && f !== null)) {
        switch (f.$$typeof) {
          case A:
            Cn(n, l, f.type, f.props, f.ref);
            return;
          case H:
            throw Error(t(257));
          case ge:
            var h = f._init;
            ((f = h(f._payload)), Ie(n, l, f));
            return;
        }
        if (L(f)) {
          wr(n, l, f);
          return;
        }
        if (
          (f === null || typeof f != "object"
            ? (h = null)
            : ((h = (Dt && f[Dt]) || f["@@iterator"]),
              (h = typeof h == "function" ? h : null)),
          h && (h = h.call(f)))
        ) {
          if (((f = h.next()), !f.done)) {
            var b = [];
            do (b.push(f.value), (f = h.next()));
            while (!f.done);
            wr(n, l, b);
          }
          return;
        }
        throw (
          (n = Object.prototype.toString.call(f)),
          Error(
            t(
              31,
              n === "[object Object]"
                ? "object with keys {" + Object.keys(f).join(", ") + "}"
                : n,
            ),
          )
        );
      }
      typeof f == "string"
        ? ((h = l.blockedSegment),
          (h.lastPushedText = ke(
            l.blockedSegment.chunks,
            f,
            n.responseState,
            h.lastPushedText,
          )))
        : typeof f == "number" &&
          ((h = l.blockedSegment),
          (h.lastPushedText = ke(
            l.blockedSegment.chunks,
            "" + f,
            n.responseState,
            h.lastPushedText,
          )));
    }
    function wr(n, l, f) {
      for (var h = f.length, b = 0; b < h; b++) {
        var x = l.treeContext;
        l.treeContext = hn(x, h, b);
        try {
          Sn(n, l, f[b]);
        } finally {
          l.treeContext = x;
        }
      }
    }
    function Sn(n, l, f) {
      var h = l.blockedSegment.formatContext,
        b = l.legacyContext,
        x = l.context;
      try {
        return Ie(n, l, f);
      } catch (V) {
        if (
          (wn(),
          typeof V == "object" && V !== null && typeof V.then == "function")
        ) {
          f = V;
          var _ = l.blockedSegment,
            F = zt(
              n,
              _.chunks.length,
              null,
              _.formatContext,
              _.lastPushedText,
              !0,
            );
          (_.children.push(F),
            (_.lastPushedText = !1),
            (n = xn(
              n,
              l.node,
              l.blockedBoundary,
              F,
              l.abortSet,
              l.legacyContext,
              l.context,
              l.treeContext,
            ).ping),
            f.then(n, n),
            (l.blockedSegment.formatContext = h),
            (l.legacyContext = b),
            (l.context = x),
            qt(x));
        } else
          throw (
            (l.blockedSegment.formatContext = h),
            (l.legacyContext = b),
            (l.context = x),
            qt(x),
            V
          );
      }
    }
    function bn(n) {
      var l = n.blockedBoundary;
      ((n = n.blockedSegment), (n.status = 3), ut(this, l, n));
    }
    function vr(n, l, f) {
      var h = n.blockedBoundary;
      ((n.blockedSegment.status = 3),
        h === null
          ? (l.allPendingTasks--,
            l.status !== 2 &&
              ((l.status = 2),
              l.destination !== null && l.destination.push(null)))
          : (h.pendingTasks--,
            h.forceClientRender ||
              ((h.forceClientRender = !0),
              (n = f === void 0 ? Error(t(432)) : f),
              (h.errorDigest = l.onError(n)),
              h.parentFlushed && l.clientRenderedBoundaries.push(h)),
            h.fallbackAbortableTasks.forEach(function (b) {
              return vr(b, l, f);
            }),
            h.fallbackAbortableTasks.clear(),
            l.allPendingTasks--,
            l.allPendingTasks === 0 && ((h = l.onAllReady), h())));
    }
    function ct(n, l) {
      if (
        l.chunks.length === 0 &&
        l.children.length === 1 &&
        l.children[0].boundary === null
      ) {
        var f = l.children[0];
        ((f.id = l.id), (f.parentFlushed = !0), f.status === 1 && ct(n, f));
      } else n.completedSegments.push(l);
    }
    function ut(n, l, f) {
      if (l === null) {
        if (f.parentFlushed) {
          if (n.completedRootSegment !== null) throw Error(t(389));
          n.completedRootSegment = f;
        }
        (n.pendingRootTasks--,
          n.pendingRootTasks === 0 &&
            ((n.onShellError = St), (l = n.onShellReady), l()));
      } else
        (l.pendingTasks--,
          l.forceClientRender ||
            (l.pendingTasks === 0
              ? (f.parentFlushed && f.status === 1 && ct(l, f),
                l.parentFlushed && n.completedBoundaries.push(l),
                l.fallbackAbortableTasks.forEach(bn, n),
                l.fallbackAbortableTasks.clear())
              : f.parentFlushed &&
                f.status === 1 &&
                (ct(l, f),
                l.completedSegments.length === 1 &&
                  l.parentFlushed &&
                  n.partialBoundaries.push(l))));
      (n.allPendingTasks--,
        n.allPendingTasks === 0 && ((n = n.onAllReady), n()));
    }
    function xr(n) {
      if (n.status !== 2) {
        var l = Ge,
          f = vn.current;
        vn.current = mr;
        var h = Vt;
        Vt = n.responseState;
        try {
          var b = n.pingedTasks,
            x;
          for (x = 0; x < b.length; x++) {
            var _ = b[x],
              F = n,
              V = _.blockedSegment;
            if (V.status === 0) {
              qt(_.context);
              try {
                (Ie(F, _, _.node),
                  F.responseState.generateStaticMarkup ||
                    (V.lastPushedText &&
                      V.textEmbedded &&
                      V.chunks.push("<!-- -->")),
                  _.abortSet.delete(_),
                  (V.status = 1),
                  ut(F, _.blockedBoundary, V));
              } catch (Fe) {
                if (
                  (wn(),
                  typeof Fe == "object" &&
                    Fe !== null &&
                    typeof Fe.then == "function")
                ) {
                  var G = _.ping;
                  Fe.then(G, G);
                } else {
                  (_.abortSet.delete(_), (V.status = 4));
                  var K = _.blockedBoundary,
                    we = Fe,
                    $e = bt(F, we);
                  if (
                    (K === null
                      ? Gt(F, we)
                      : (K.pendingTasks--,
                        K.forceClientRender ||
                          ((K.forceClientRender = !0),
                          (K.errorDigest = $e),
                          K.parentFlushed &&
                            F.clientRenderedBoundaries.push(K))),
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
          (b.splice(0, x), n.destination !== null && Zt(n, n.destination));
        } catch (Fe) {
          (bt(n, Fe), Gt(n, Fe));
        } finally {
          ((Vt = h), (vn.current = f), f === mr && qt(l));
        }
      }
    }
    function Et(n, l, f) {
      switch (((f.parentFlushed = !0), f.status)) {
        case 0:
          var h = (f.id = n.nextSegmentId++);
          return (
            (f.lastPushedText = !1),
            (f.textEmbedded = !1),
            (n = n.responseState),
            l.push('<template id="'),
            l.push(n.placeholderPrefix),
            (n = h.toString(16)),
            l.push(n),
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
            b = kt(n, l, b);
          }
          for (; x < h.length - 1; x++) l.push(h[x]);
          return (x < h.length && (b = l.push(h[x])), b);
        default:
          throw Error(t(390));
      }
    }
    function kt(n, l, f) {
      var h = f.boundary;
      if (h === null) return Et(n, l, f);
      if (((h.parentFlushed = !0), h.forceClientRender))
        return (
          n.responseState.generateStaticMarkup ||
            ((h = h.errorDigest),
            l.push("<!--$!-->"),
            l.push("<template"),
            h && (l.push(' data-dgst="'), (h = N(h)), l.push(h), l.push('"')),
            l.push("></template>")),
          Et(n, l, f),
          (n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->")),
          n
        );
      if (0 < h.pendingTasks) {
        ((h.rootSegmentID = n.nextSegmentId++),
          0 < h.completedSegments.length && n.partialBoundaries.push(h));
        var b = n.responseState,
          x = b.nextSuspenseID++;
        return (
          (b = b.boundaryPrefix + x.toString(16)),
          (h = h.id = b),
          ee(l, n.responseState, h),
          Et(n, l, f),
          l.push("<!--/$-->")
        );
      }
      if (h.byteSize > n.progressiveChunkSize)
        return (
          (h.rootSegmentID = n.nextSegmentId++),
          n.completedBoundaries.push(h),
          ee(l, n.responseState, h.id),
          Et(n, l, f),
          l.push("<!--/$-->")
        );
      if (
        (n.responseState.generateStaticMarkup || l.push("<!--$-->"),
        (f = h.completedSegments),
        f.length !== 1)
      )
        throw Error(t(391));
      return (
        kt(n, l, f[0]),
        (n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->")),
        n
      );
    }
    function En(n, l, f) {
      return (
        xe(l, n.responseState, f.formatContext, f.id),
        kt(n, l, f),
        Me(l, f.formatContext)
      );
    }
    function kn(n, l, f) {
      for (var h = f.completedSegments, b = 0; b < h.length; b++)
        _n(n, l, f, h[b]);
      if (
        ((h.length = 0),
        (n = n.responseState),
        (h = f.id),
        (f = f.rootSegmentID),
        l.push(n.startInlineScript),
        n.sentCompleteBoundaryFunction
          ? l.push('$RC("')
          : ((n.sentCompleteBoundaryFunction = !0),
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
        l.push(n.segmentPrefix),
        l.push(f),
        l.push('")<\/script>')
      );
    }
    function _n(n, l, f, h) {
      if (h.status === 2) return !0;
      var b = h.id;
      if (b === -1) {
        if ((h.id = f.rootSegmentID) === -1) throw Error(t(392));
        return En(n, l, h);
      }
      return (
        En(n, l, h),
        (n = n.responseState),
        l.push(n.startInlineScript),
        n.sentCompleteSegmentFunction
          ? l.push('$RS("')
          : ((n.sentCompleteSegmentFunction = !0),
            l.push(
              'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("',
            )),
        l.push(n.segmentPrefix),
        (b = b.toString(16)),
        l.push(b),
        l.push('","'),
        l.push(n.placeholderPrefix),
        l.push(b),
        l.push('")<\/script>')
      );
    }
    function Zt(n, l) {
      try {
        var f = n.completedRootSegment;
        if (f !== null && n.pendingRootTasks === 0) {
          (kt(n, l, f), (n.completedRootSegment = null));
          var h = n.responseState.bootstrapChunks;
          for (f = 0; f < h.length - 1; f++) l.push(h[f]);
          f < h.length && l.push(h[f]);
        }
        var b = n.clientRenderedBoundaries,
          x;
        for (x = 0; x < b.length; x++) {
          var _ = b[x];
          h = l;
          var F = n.responseState,
            V = _.id,
            G = _.errorDigest,
            K = _.errorMessage,
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
          if ((h.push(V), h.push('"'), G || K || we)) {
            h.push(",");
            var $e = U(G || "");
            h.push($e);
          }
          if (K || we) {
            h.push(",");
            var He = U(K || "");
            h.push(He);
          }
          if (we) {
            h.push(",");
            var Fe = U(we);
            h.push(Fe);
          }
          if (!h.push(")<\/script>")) {
            ((n.destination = null), x++, b.splice(0, x));
            return;
          }
        }
        b.splice(0, x);
        var _t = n.completedBoundaries;
        for (x = 0; x < _t.length; x++)
          if (!kn(n, l, _t[x])) {
            ((n.destination = null), x++, _t.splice(0, x));
            return;
          }
        _t.splice(0, x);
        var tt = n.partialBoundaries;
        for (x = 0; x < tt.length; x++) {
          var An = tt[x];
          e: {
            ((b = n), (_ = l));
            var Tt = An.completedSegments;
            for (F = 0; F < Tt.length; F++)
              if (!_n(b, _, An, Tt[F])) {
                (F++, Tt.splice(0, F));
                var br = !1;
                break e;
              }
            (Tt.splice(0, F), (br = !0));
          }
          if (!br) {
            ((n.destination = null), x++, tt.splice(0, x));
            return;
          }
        }
        tt.splice(0, x);
        var dt = n.completedBoundaries;
        for (x = 0; x < dt.length; x++)
          if (!kn(n, l, dt[x])) {
            ((n.destination = null), x++, dt.splice(0, x));
            return;
          }
        dt.splice(0, x);
      } finally {
        n.allPendingTasks === 0 &&
          n.pingedTasks.length === 0 &&
          n.clientRenderedBoundaries.length === 0 &&
          n.completedBoundaries.length === 0 &&
          l.push(null);
      }
    }
    function Cr(n, l) {
      try {
        var f = n.abortableTasks;
        (f.forEach(function (h) {
          return vr(h, n, l);
        }),
          f.clear(),
          n.destination !== null && Zt(n, n.destination));
      } catch (h) {
        (bt(n, h), Gt(n, h));
      }
    }
    function Sr() {}
    function Tn(n, l, f, h) {
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
        ((n = Co(
          n,
          se(f, l ? l.identifierPrefix : void 0),
          { insertionMode: 1, selectedValue: null },
          1 / 0,
          Sr,
          void 0,
          function () {
            V = !0;
          },
        )),
        xr(n),
        Cr(n, h),
        n.status === 1)
      )
        ((n.status = 2), F.destroy(n.fatalError));
      else if (n.status !== 2 && n.destination === null) {
        n.destination = F;
        try {
          Zt(n, F);
        } catch (G) {
          (bt(n, G), Gt(n, G));
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
      (mt.renderToStaticMarkup = function (n, l) {
        return Tn(
          n,
          l,
          !0,
          'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server',
        );
      }),
      (mt.renderToStaticNodeStream = function () {
        throw Error(t(208));
      }),
      (mt.renderToString = function (n, l) {
        return Tn(
          n,
          l,
          !1,
          'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server',
        );
      }),
      (mt.version = "18.2.0"),
      mt
    );
  }
  var zn = {};
  var ti;
  function Ms() {
    if (ti) return zn;
    ti = 1;
    var e = Pn();
    function t(r) {
      for (
        var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r,
          u = 1;
        u < arguments.length;
        u++
      )
        a += "&args[]=" + encodeURIComponent(arguments[u]);
      return (
        "Minified React error #" +
        r +
        "; visit " +
        a +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var o = null,
      i = 0;
    function s(r, a) {
      if (a.length !== 0)
        if (512 < a.length)
          (0 < i &&
            (r.enqueue(new Uint8Array(o.buffer, 0, i)),
            (o = new Uint8Array(512)),
            (i = 0)),
            r.enqueue(a));
        else {
          var u = o.length - i;
          (u < a.length &&
            (u === 0
              ? r.enqueue(o)
              : (o.set(a.subarray(0, u), i), r.enqueue(o), (a = a.subarray(u))),
            (o = new Uint8Array(512)),
            (i = 0)),
            o.set(a, i),
            (i += a.length));
        }
    }
    function c(r, a) {
      return (s(r, a), !0);
    }
    function p(r) {
      o &&
        0 < i &&
        (r.enqueue(new Uint8Array(o.buffer, 0, i)), (o = null), (i = 0));
    }
    var g = new TextEncoder();
    function y(r) {
      return g.encode(r);
    }
    function d(r) {
      return g.encode(r);
    }
    function v(r, a) {
      typeof r.error == "function" ? r.error(a) : r.close();
    }
    var k = Object.prototype.hasOwnProperty,
      M =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      B = {},
      N = {};
    function I(r) {
      return k.call(N, r)
        ? !0
        : k.call(B, r)
          ? !1
          : M.test(r)
            ? (N[r] = !0)
            : ((B[r] = !0), !1);
    }
    function E(r, a, u, m, S, C, T) {
      ((this.acceptsBooleans = a === 2 || a === 3 || a === 4),
        (this.attributeName = m),
        (this.attributeNamespace = S),
        (this.mustUseProperty = u),
        (this.propertyName = r),
        (this.type = a),
        (this.sanitizeURL = C),
        (this.removeEmptyString = T));
    }
    var L = {};
    ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (r) {
        L[r] = new E(r, 0, !1, r, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (r) {
        var a = r[0];
        L[a] = new E(a, 1, !1, r[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(
        function (r) {
          L[r] = new E(r, 2, !1, r.toLowerCase(), null, !1, !1);
        },
      ),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (r) {
        L[r] = new E(r, 2, !1, r, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (r) {
          L[r] = new E(r, 3, !1, r.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (r) {
        L[r] = new E(r, 3, !0, r, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (r) {
        L[r] = new E(r, 4, !1, r, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (r) {
        L[r] = new E(r, 6, !1, r, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (r) {
        L[r] = new E(r, 5, !1, r.toLowerCase(), null, !1, !1);
      }));
    var R = /[\-:]([a-z])/g;
    function W(r) {
      return r[1].toUpperCase();
    }
    ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (r) {
        var a = r.replace(R, W);
        L[a] = new E(a, 1, !1, r, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (r) {
          var a = r.replace(R, W);
          L[a] = new E(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (r) {
        var a = r.replace(R, W);
        L[a] = new E(
          a,
          1,
          !1,
          r,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1,
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (r) {
        L[r] = new E(r, 1, !1, r.toLowerCase(), null, !1, !1);
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
      ["src", "href", "action", "formAction"].forEach(function (r) {
        L[r] = new E(r, 1, !1, r.toLowerCase(), null, !0, !0);
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
    Object.keys(Y).forEach(function (r) {
      re.forEach(function (a) {
        ((a = a + r.charAt(0).toUpperCase() + r.substring(1)), (Y[a] = Y[r]));
      });
    });
    var O = /["'&<>]/;
    function $(r) {
      if (typeof r == "boolean" || typeof r == "number") return "" + r;
      r = "" + r;
      var a = O.exec(r);
      if (a) {
        var u = "",
          m,
          S = 0;
        for (m = a.index; m < r.length; m++) {
          switch (r.charCodeAt(m)) {
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
          (S !== m && (u += r.substring(S, m)), (S = m + 1), (u += a));
        }
        r = S !== m ? u + r.substring(S, m) : u;
      }
      return r;
    }
    var ie = /([A-Z])/g,
      fe = /^ms-/,
      ve = Array.isArray,
      q = d("<script>"),
      D = d("<\/script>"),
      Q = d('<script src="'),
      ee = d('<script type="module" src="'),
      xe = d('" async=""><\/script>'),
      Me = /(<\/|<)(s)(cript)/gi;
    function ce(r, a, u, m) {
      return "" + a + (u === "s" ? "\\u0073" : "\\u0053") + m;
    }
    function U(r, a, u, m, S) {
      ((r = r === void 0 ? "" : r),
        (a = a === void 0 ? q : d('<script nonce="' + $(a) + '">')));
      var C = [];
      if (
        (u !== void 0 && C.push(a, y(("" + u).replace(Me, ce)), D),
        m !== void 0)
      )
        for (u = 0; u < m.length; u++) C.push(Q, y($(m[u])), xe);
      if (S !== void 0)
        for (m = 0; m < S.length; m++) C.push(ee, y($(S[m])), xe);
      return {
        bootstrapChunks: C,
        startInlineScript: a,
        placeholderPrefix: d(r + "P:"),
        segmentPrefix: d(r + "S:"),
        boundaryPrefix: r + "B:",
        idPrefix: r,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1,
      };
    }
    function se(r, a) {
      return { insertionMode: r, selectedValue: a };
    }
    function ke(r) {
      return se(
        r === "http://www.w3.org/2000/svg"
          ? 2
          : r === "http://www.w3.org/1998/Math/MathML"
            ? 3
            : 0,
        null,
      );
    }
    function w(r, a, u) {
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
      return 4 <= r.insertionMode || r.insertionMode === 0 ? se(1, null) : r;
    }
    var A = d("<!-- -->");
    function H(r, a, u, m) {
      return a === "" ? m : (m && r.push(A), r.push(y($(a))), !0);
    }
    var Z = new Map(),
      X = d(' style="'),
      ae = d(":"),
      de = d(";");
    function le(r, a, u) {
      if (typeof u != "object") throw Error(t(62));
      a = !0;
      for (var m in u)
        if (k.call(u, m)) {
          var S = u[m];
          if (S != null && typeof S != "boolean" && S !== "") {
            if (m.indexOf("--") === 0) {
              var C = y($(m));
              S = y($(("" + S).trim()));
            } else {
              C = m;
              var T = Z.get(C);
              (T !== void 0 ||
                ((T = d(
                  $(C.replace(ie, "-$1").toLowerCase().replace(fe, "-ms-")),
                )),
                Z.set(C, T)),
                (C = T),
                (S =
                  typeof S == "number"
                    ? S === 0 || k.call(Y, m)
                      ? y("" + S)
                      : y(S + "px")
                    : y($(("" + S).trim()))));
            }
            a ? ((a = !1), r.push(X, C, ae, S)) : r.push(de, C, ae, S);
          }
        }
      a || r.push(Ee);
    }
    var oe = d(" "),
      he = d('="'),
      Ee = d('"'),
      at = d('=""');
    function ge(r, a, u, m) {
      switch (u) {
        case "style":
          le(r, a, m);
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
              m && r.push(oe, u, at);
              break;
            case 4:
              m === !0
                ? r.push(oe, u, at)
                : m !== !1 && r.push(oe, u, he, y($(m)), Ee);
              break;
            case 5:
              isNaN(m) || r.push(oe, u, he, y($(m)), Ee);
              break;
            case 6:
              !isNaN(m) && 1 <= m && r.push(oe, u, he, y($(m)), Ee);
              break;
            default:
              (a.sanitizeURL && (m = "" + m), r.push(oe, u, he, y($(m)), Ee));
          }
        } else if (I(u)) {
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
          r.push(oe, y(u), he, y($(m)), Ee);
        }
      }
    }
    var Pe = d(">"),
      Qe = d("/>");
    function lt(r, a, u) {
      if (a != null) {
        if (u != null) throw Error(t(60));
        if (typeof a != "object" || !("__html" in a)) throw Error(t(61));
        ((a = a.__html), a != null && r.push(y("" + a)));
      }
    }
    function uo(r) {
      var a = "";
      return (
        e.Children.forEach(r, function (u) {
          u != null && (a += u);
        }),
        a
      );
    }
    var Dt = d(' selected=""');
    function vt(r, a, u, m) {
      r.push(Re(u));
      var S = (u = null),
        C;
      for (C in a)
        if (k.call(a, C)) {
          var T = a[C];
          if (T != null)
            switch (C) {
              case "children":
                u = T;
                break;
              case "dangerouslySetInnerHTML":
                S = T;
                break;
              default:
                ge(r, m, C, T);
            }
        }
      return (
        r.push(Pe),
        lt(r, S, u),
        typeof u == "string" ? (r.push(y($(u))), null) : u
      );
    }
    var Bt = d(`
`),
      rr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
      Ge = new Map();
    function Re(r) {
      var a = Ge.get(r);
      if (a === void 0) {
        if (!rr.test(r)) throw Error(t(65, r));
        ((a = d("<" + r)), Ge.set(r, a));
      }
      return a;
    }
    var or = d("<!DOCTYPE html>");
    function ir(r, a, u, m, S) {
      switch (a) {
        case "select":
          r.push(Re("select"));
          var C = null,
            T = null;
          for (J in u)
            if (k.call(u, J)) {
              var P = u[J];
              if (P != null)
                switch (J) {
                  case "children":
                    C = P;
                    break;
                  case "dangerouslySetInnerHTML":
                    T = P;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    ge(r, m, J, P);
                }
            }
          return (r.push(Pe), lt(r, T, C), C);
        case "option":
          ((T = S.selectedValue), r.push(Re("option")));
          var z = (P = null),
            te = null,
            J = null;
          for (C in u)
            if (k.call(u, C)) {
              var ye = u[C];
              if (ye != null)
                switch (C) {
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
                    ge(r, m, C, ye);
                }
            }
          if (T != null)
            if (((u = z !== null ? "" + z : uo(P)), ve(T))) {
              for (m = 0; m < T.length; m++)
                if ("" + T[m] === u) {
                  r.push(Dt);
                  break;
                }
            } else "" + T === u && r.push(Dt);
          else te && r.push(Dt);
          return (r.push(Pe), lt(r, J, P), P);
        case "textarea":
          (r.push(Re("textarea")), (J = T = C = null));
          for (P in u)
            if (k.call(u, P) && ((z = u[P]), z != null))
              switch (P) {
                case "children":
                  J = z;
                  break;
                case "value":
                  C = z;
                  break;
                case "defaultValue":
                  T = z;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(t(91));
                default:
                  ge(r, m, P, z);
              }
          if ((C === null && T !== null && (C = T), r.push(Pe), J != null)) {
            if (C != null) throw Error(t(92));
            if (ve(J) && 1 < J.length) throw Error(t(93));
            C = "" + J;
          }
          return (
            typeof C == "string" &&
              C[0] ===
                `
` &&
              r.push(Bt),
            C !== null && r.push(y($("" + C))),
            null
          );
        case "input":
          (r.push(Re("input")), (z = J = P = C = null));
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
                  C = te;
                  break;
                default:
                  ge(r, m, T, te);
              }
          return (
            J !== null
              ? ge(r, m, "checked", J)
              : z !== null && ge(r, m, "checked", z),
            C !== null
              ? ge(r, m, "value", C)
              : P !== null && ge(r, m, "value", P),
            r.push(Qe),
            null
          );
        case "menuitem":
          r.push(Re("menuitem"));
          for (var Oe in u)
            if (k.call(u, Oe) && ((C = u[Oe]), C != null))
              switch (Oe) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(t(400));
                default:
                  ge(r, m, Oe, C);
              }
          return (r.push(Pe), null);
        case "title":
          (r.push(Re("title")), (C = null));
          for (ye in u)
            if (k.call(u, ye) && ((T = u[ye]), T != null))
              switch (ye) {
                case "children":
                  C = T;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(t(434));
                default:
                  ge(r, m, ye, T);
              }
          return (r.push(Pe), C);
        case "listing":
        case "pre":
          (r.push(Re(a)), (T = C = null));
          for (z in u)
            if (k.call(u, z) && ((P = u[z]), P != null))
              switch (z) {
                case "children":
                  C = P;
                  break;
                case "dangerouslySetInnerHTML":
                  T = P;
                  break;
                default:
                  ge(r, m, z, P);
              }
          if ((r.push(Pe), T != null)) {
            if (C != null) throw Error(t(60));
            if (typeof T != "object" || !("__html" in T)) throw Error(t(61));
            ((u = T.__html),
              u != null &&
                (typeof u == "string" &&
                0 < u.length &&
                u[0] ===
                  `
`
                  ? r.push(Bt, y(u))
                  : r.push(y("" + u))));
          }
          return (
            typeof C == "string" &&
              C[0] ===
                `
` &&
              r.push(Bt),
            C
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
          r.push(Re(a));
          for (var je in u)
            if (k.call(u, je) && ((C = u[je]), C != null))
              switch (je) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(t(399, a));
                default:
                  ge(r, m, je, C);
              }
          return (r.push(Qe), null);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return vt(r, u, a, m);
        case "html":
          return (S.insertionMode === 0 && r.push(or), vt(r, u, a, m));
        default:
          if (a.indexOf("-") === -1 && typeof u.is != "string")
            return vt(r, u, a, m);
          (r.push(Re(a)), (T = C = null));
          for (te in u)
            if (k.call(u, te) && ((P = u[te]), P != null))
              switch (te) {
                case "children":
                  C = P;
                  break;
                case "dangerouslySetInnerHTML":
                  T = P;
                  break;
                case "style":
                  le(r, m, P);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  I(te) &&
                    typeof P != "function" &&
                    typeof P != "symbol" &&
                    r.push(oe, y(te), he, y($(P)), Ee);
              }
          return (r.push(Pe), lt(r, T, C), C);
      }
    }
    var sr = d("</"),
      ar = d(">"),
      qt = d('<template id="'),
      lr = d('"></template>'),
      cr = d("<!--$-->"),
      fo = d('<!--$?--><template id="'),
      hn = d('"></template>'),
      $t = d("<!--$!-->"),
      po = d("<!--/$-->"),
      mo = d("<template"),
      ho = d('"'),
      go = d(' data-dgst="');
    (d(' data-msg="'), d(' data-stck="'));
    var yo = d("></template>");
    function Be(r, a, u) {
      if ((s(r, fo), u === null)) throw Error(t(395));
      return (s(r, u), c(r, hn));
    }
    var gn = d('<div hidden id="'),
      Ht = d('">'),
      ue = d("</div>"),
      xt = d('<svg aria-hidden="true" style="display:none" id="'),
      jt = d('">'),
      Ct = d("</svg>"),
      Ze = d('<math aria-hidden="true" style="display:none" id="'),
      Ut = d('">'),
      et = d("</math>"),
      ur = d('<table hidden id="'),
      yn = d('">'),
      wn = d("</table>"),
      dr = d('<table hidden><tbody id="'),
      fr = d('">'),
      pr = d("</tbody></table>"),
      wo = d('<table hidden><tr id="'),
      vo = d('">'),
      Wt = d("</tr></table>"),
      mr = d('<table hidden><colgroup id="'),
      Vt = d('">'),
      vn = d("</colgroup></table>");
    function xo(r, a, u, m) {
      switch (u.insertionMode) {
        case 0:
        case 1:
          return (
            s(r, gn),
            s(r, a.segmentPrefix),
            s(r, y(m.toString(16))),
            c(r, Ht)
          );
        case 2:
          return (
            s(r, xt),
            s(r, a.segmentPrefix),
            s(r, y(m.toString(16))),
            c(r, jt)
          );
        case 3:
          return (
            s(r, Ze),
            s(r, a.segmentPrefix),
            s(r, y(m.toString(16))),
            c(r, Ut)
          );
        case 4:
          return (
            s(r, ur),
            s(r, a.segmentPrefix),
            s(r, y(m.toString(16))),
            c(r, yn)
          );
        case 5:
          return (
            s(r, dr),
            s(r, a.segmentPrefix),
            s(r, y(m.toString(16))),
            c(r, fr)
          );
        case 6:
          return (
            s(r, wo),
            s(r, a.segmentPrefix),
            s(r, y(m.toString(16))),
            c(r, vo)
          );
        case 7:
          return (
            s(r, mr),
            s(r, a.segmentPrefix),
            s(r, y(m.toString(16))),
            c(r, Vt)
          );
        default:
          throw Error(t(397));
      }
    }
    function St(r, a) {
      switch (a.insertionMode) {
        case 0:
        case 1:
          return c(r, ue);
        case 2:
          return c(r, Ct);
        case 3:
          return c(r, et);
        case 4:
          return c(r, wn);
        case 5:
          return c(r, pr);
        case 6:
          return c(r, Wt);
        case 7:
          return c(r, vn);
        default:
          throw Error(t(397));
      }
    }
    var Co = d(
        'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("',
      ),
      xn = d('$RS("'),
      zt = d('","'),
      bt = d('")<\/script>'),
      Gt = d(
        'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("',
      ),
      hr = d('$RC("'),
      gr = d('","'),
      yr = d('")<\/script>'),
      Cn = d(
        'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("',
      ),
      Ie = d('$RX("'),
      wr = d('"'),
      Sn = d(")<\/script>"),
      bn = d(","),
      vr = /[<\u2028\u2029]/g;
    function ct(r) {
      return JSON.stringify(r).replace(vr, function (a) {
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
      xr = Symbol.for("react.element"),
      Et = Symbol.for("react.portal"),
      kt = Symbol.for("react.fragment"),
      En = Symbol.for("react.strict_mode"),
      kn = Symbol.for("react.profiler"),
      _n = Symbol.for("react.provider"),
      Zt = Symbol.for("react.context"),
      Cr = Symbol.for("react.forward_ref"),
      Sr = Symbol.for("react.suspense"),
      Tn = Symbol.for("react.suspense_list"),
      n = Symbol.for("react.memo"),
      l = Symbol.for("react.lazy"),
      f = Symbol.for("react.scope"),
      h = Symbol.for("react.debug_trace_mode"),
      b = Symbol.for("react.legacy_hidden"),
      x = Symbol.for("react.default_value"),
      _ = Symbol.iterator;
    function F(r) {
      if (r == null) return null;
      if (typeof r == "function") return r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case kt:
          return "Fragment";
        case Et:
          return "Portal";
        case kn:
          return "Profiler";
        case En:
          return "StrictMode";
        case Sr:
          return "Suspense";
        case Tn:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case Zt:
            return (r.displayName || "Context") + ".Consumer";
          case _n:
            return (r._context.displayName || "Context") + ".Provider";
          case Cr:
            var a = r.render;
            return (
              (r = r.displayName),
              r ||
                ((r = a.displayName || a.name || ""),
                (r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef")),
              r
            );
          case n:
            return (
              (a = r.displayName || null),
              a !== null ? a : F(r.type) || "Memo"
            );
          case l:
            ((a = r._payload), (r = r._init));
            try {
              return F(r(a));
            } catch {}
        }
      return null;
    }
    var V = {};
    function G(r, a) {
      if (((r = r.contextTypes), !r)) return V;
      var u = {},
        m;
      for (m in r) u[m] = a[m];
      return u;
    }
    var K = null;
    function we(r, a) {
      if (r !== a) {
        ((r.context._currentValue = r.parentValue), (r = r.parent));
        var u = a.parent;
        if (r === null) {
          if (u !== null) throw Error(t(401));
        } else {
          if (u === null) throw Error(t(401));
          we(r, u);
        }
        a.context._currentValue = a.value;
      }
    }
    function $e(r) {
      ((r.context._currentValue = r.parentValue),
        (r = r.parent),
        r !== null && $e(r));
    }
    function He(r) {
      var a = r.parent;
      (a !== null && He(a), (r.context._currentValue = r.value));
    }
    function Fe(r, a) {
      if (
        ((r.context._currentValue = r.parentValue), (r = r.parent), r === null)
      )
        throw Error(t(402));
      r.depth === a.depth ? we(r, a) : Fe(r, a);
    }
    function _t(r, a) {
      var u = a.parent;
      if (u === null) throw Error(t(402));
      (r.depth === u.depth ? we(r, u) : _t(r, u),
        (a.context._currentValue = a.value));
    }
    function tt(r) {
      var a = K;
      a !== r &&
        (a === null
          ? He(r)
          : r === null
            ? $e(a)
            : a.depth === r.depth
              ? we(a, r)
              : a.depth > r.depth
                ? Fe(a, r)
                : _t(a, r),
        (K = r));
    }
    var An = {
      isMounted: function () {
        return !1;
      },
      enqueueSetState: function (r, a) {
        ((r = r._reactInternals), r.queue !== null && r.queue.push(a));
      },
      enqueueReplaceState: function (r, a) {
        ((r = r._reactInternals), (r.replace = !0), (r.queue = [a]));
      },
      enqueueForceUpdate: function () {},
    };
    function Tt(r, a, u, m) {
      var S = r.state !== void 0 ? r.state : null;
      ((r.updater = An), (r.props = u), (r.state = S));
      var C = { queue: [], replace: !1 };
      r._reactInternals = C;
      var T = a.contextType;
      if (
        ((r.context = typeof T == "object" && T !== null ? T._currentValue : m),
        (T = a.getDerivedStateFromProps),
        typeof T == "function" &&
          ((T = T(u, S)), (S = T == null ? S : ut({}, S, T)), (r.state = S)),
        typeof a.getDerivedStateFromProps != "function" &&
          typeof r.getSnapshotBeforeUpdate != "function" &&
          (typeof r.UNSAFE_componentWillMount == "function" ||
            typeof r.componentWillMount == "function"))
      )
        if (
          ((a = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          a !== r.state && An.enqueueReplaceState(r, r.state, null),
          C.queue !== null && 0 < C.queue.length)
        )
          if (
            ((a = C.queue),
            (T = C.replace),
            (C.queue = null),
            (C.replace = !1),
            T && a.length === 1)
          )
            r.state = a[0];
          else {
            for (
              C = T ? a[0] : r.state, S = !0, T = T ? 1 : 0;
              T < a.length;
              T++
            ) {
              var P = a[T];
              ((P = typeof P == "function" ? P.call(r, C, u, m) : P),
                P != null && (S ? ((S = !1), (C = ut({}, C, P))) : ut(C, P)));
            }
            r.state = C;
          }
        else C.queue = null;
    }
    var br = { id: 1, overflow: "" };
    function dt(r, a, u) {
      var m = r.id;
      r = r.overflow;
      var S = 32 - Er(m) - 1;
      ((m &= ~(1 << S)), (u += 1));
      var C = 32 - Er(a) + S;
      if (30 < C) {
        var T = S - (S % 5);
        return (
          (C = (m & ((1 << T) - 1)).toString(32)),
          (m >>= T),
          (S -= T),
          { id: (1 << (32 - Er(a) + S)) | (u << S) | m, overflow: C + r }
        );
      }
      return { id: (1 << C) | (u << S) | m, overflow: r };
    }
    var Er = Math.clz32 ? Math.clz32 : Ha,
      qa = Math.log,
      $a = Math.LN2;
    function Ha(r) {
      return ((r >>>= 0), r === 0 ? 32 : (31 - ((qa(r) / $a) | 0)) | 0);
    }
    function ja(r, a) {
      return (r === a && (r !== 0 || 1 / r === 1 / a)) || (r !== r && a !== a);
    }
    var Ua = typeof Object.is == "function" ? Object.is : ja,
      nt = null,
      So = null,
      kr = null,
      pe = null,
      Ln = !1,
      _r = !1,
      Rn = 0,
      ft = null,
      Tr = 0;
    function At() {
      if (nt === null) throw Error(t(321));
      return nt;
    }
    function Ii() {
      if (0 < Tr) throw Error(t(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function bo() {
      return (
        pe === null
          ? kr === null
            ? ((Ln = !1), (kr = pe = Ii()))
            : ((Ln = !0), (pe = kr))
          : pe.next === null
            ? ((Ln = !1), (pe = pe.next = Ii()))
            : ((Ln = !0), (pe = pe.next)),
        pe
      );
    }
    function Eo() {
      ((So = nt = null), (_r = !1), (kr = null), (Tr = 0), (pe = ft = null));
    }
    function Mi(r, a) {
      return typeof a == "function" ? a(r) : a;
    }
    function Pi(r, a, u) {
      if (((nt = At()), (pe = bo()), Ln)) {
        var m = pe.queue;
        if (
          ((a = m.dispatch), ft !== null && ((u = ft.get(m)), u !== void 0))
        ) {
          (ft.delete(m), (m = pe.memoizedState));
          do ((m = r(m, u.action)), (u = u.next));
          while (u !== null);
          return ((pe.memoizedState = m), [m, a]);
        }
        return [pe.memoizedState, a];
      }
      return (
        (r =
          r === Mi
            ? typeof a == "function"
              ? a()
              : a
            : u !== void 0
              ? u(a)
              : a),
        (pe.memoizedState = r),
        (r = pe.queue = { last: null, dispatch: null }),
        (r = r.dispatch = Wa.bind(null, nt, r)),
        [pe.memoizedState, r]
      );
    }
    function Fi(r, a) {
      if (
        ((nt = At()), (pe = bo()), (a = a === void 0 ? null : a), pe !== null)
      ) {
        var u = pe.memoizedState;
        if (u !== null && a !== null) {
          var m = u[1];
          e: if (m === null) m = !1;
          else {
            for (var S = 0; S < m.length && S < a.length; S++)
              if (!Ua(a[S], m[S])) {
                m = !1;
                break e;
              }
            m = !0;
          }
          if (m) return u[0];
        }
      }
      return ((r = r()), (pe.memoizedState = [r, a]), r);
    }
    function Wa(r, a, u) {
      if (25 <= Tr) throw Error(t(301));
      if (r === nt)
        if (
          ((_r = !0),
          (r = { action: u, next: null }),
          ft === null && (ft = new Map()),
          (u = ft.get(a)),
          u === void 0)
        )
          ft.set(a, r);
        else {
          for (a = u; a.next !== null;) a = a.next;
          a.next = r;
        }
    }
    function Va() {
      throw Error(t(394));
    }
    function Ar() {}
    var Ni = {
        readContext: function (r) {
          return r._currentValue;
        },
        useContext: function (r) {
          return (At(), r._currentValue);
        },
        useMemo: Fi,
        useReducer: Pi,
        useRef: function (r) {
          ((nt = At()), (pe = bo()));
          var a = pe.memoizedState;
          return a === null
            ? ((r = { current: r }), (pe.memoizedState = r))
            : a;
        },
        useState: function (r) {
          return Pi(Mi, r);
        },
        useInsertionEffect: Ar,
        useLayoutEffect: function () {},
        useCallback: function (r, a) {
          return Fi(function () {
            return r;
          }, a);
        },
        useImperativeHandle: Ar,
        useEffect: Ar,
        useDebugValue: Ar,
        useDeferredValue: function (r) {
          return (At(), r);
        },
        useTransition: function () {
          return (At(), [!1, Va]);
        },
        useId: function () {
          var r = So.treeContext,
            a = r.overflow;
          ((r = r.id), (r = (r & ~(1 << (32 - Er(r) - 1))).toString(32) + a));
          var u = Lr;
          if (u === null) throw Error(t(404));
          return (
            (a = Rn++),
            (r = ":" + u.idPrefix + "R" + r),
            0 < a && (r += "H" + a.toString(32)),
            r + ":"
          );
        },
        useMutableSource: function (r, a) {
          return (At(), a(r._source));
        },
        useSyncExternalStore: function (r, a, u) {
          if (u === void 0) throw Error(t(407));
          return u();
        },
      },
      Lr = null,
      ko =
        e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          .ReactCurrentDispatcher;
    function za(r) {
      return (console.error(r), null);
    }
    function In() {}
    function Ga(r, a, u, m, S, C, T, P, z) {
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
          onError: S === void 0 ? za : S,
          onAllReady: C === void 0 ? In : C,
          onShellReady: T === void 0 ? In : T,
          onShellError: P === void 0 ? In : P,
          onFatalError: z === void 0 ? In : z,
        }),
        (u = Rr(a, 0, null, u, !1, !1)),
        (u.parentFlushed = !0),
        (r = _o(a, r, null, u, J, V, null, br)),
        te.push(r),
        a
      );
    }
    function _o(r, a, u, m, S, C, T, P) {
      (r.allPendingTasks++,
        u === null ? r.pendingRootTasks++ : u.pendingTasks++);
      var z = {
        node: a,
        ping: function () {
          var te = r.pingedTasks;
          (te.push(z), te.length === 1 && ji(r));
        },
        blockedBoundary: u,
        blockedSegment: m,
        abortSet: S,
        legacyContext: C,
        context: T,
        treeContext: P,
      };
      return (S.add(z), z);
    }
    function Rr(r, a, u, m, S, C) {
      return {
        status: 0,
        id: -1,
        index: a,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: m,
        boundary: u,
        lastPushedText: S,
        textEmbedded: C,
      };
    }
    function Mn(r, a) {
      if (((r = r.onError(a)), r != null && typeof r != "string"))
        throw Error(
          'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
            typeof r +
            '" instead',
        );
      return r;
    }
    function Ir(r, a) {
      var u = r.onShellError;
      (u(a),
        (u = r.onFatalError),
        u(a),
        r.destination !== null
          ? ((r.status = 2), v(r.destination, a))
          : ((r.status = 1), (r.fatalError = a)));
    }
    function Oi(r, a, u, m, S) {
      for (nt = {}, So = a, Rn = 0, r = u(m, S); _r;)
        ((_r = !1), (Rn = 0), (Tr += 1), (pe = null), (r = u(m, S)));
      return (Eo(), r);
    }
    function Di(r, a, u, m) {
      var S = u.render(),
        C = m.childContextTypes;
      if (C != null) {
        var T = a.legacyContext;
        if (typeof u.getChildContext != "function") m = T;
        else {
          u = u.getChildContext();
          for (var P in u)
            if (!(P in C)) throw Error(t(108, F(m) || "Unknown", P));
          m = ut({}, T, u);
        }
        ((a.legacyContext = m), Ne(r, a, S), (a.legacyContext = T));
      } else Ne(r, a, S);
    }
    function Bi(r, a) {
      if (r && r.defaultProps) {
        ((a = ut({}, a)), (r = r.defaultProps));
        for (var u in r) a[u] === void 0 && (a[u] = r[u]);
        return a;
      }
      return a;
    }
    function To(r, a, u, m, S) {
      if (typeof u == "function")
        if (u.prototype && u.prototype.isReactComponent) {
          S = G(u, a.legacyContext);
          var C = u.contextType;
          ((C = new u(
            m,
            typeof C == "object" && C !== null ? C._currentValue : S,
          )),
            Tt(C, u, m, S),
            Di(r, a, C, u));
        } else {
          ((C = G(u, a.legacyContext)), (S = Oi(r, a, u, m, C)));
          var T = Rn !== 0;
          if (
            typeof S == "object" &&
            S !== null &&
            typeof S.render == "function" &&
            S.$$typeof === void 0
          )
            (Tt(S, u, m, C), Di(r, a, S, u));
          else if (T) {
            ((m = a.treeContext), (a.treeContext = dt(m, 1, 0)));
            try {
              Ne(r, a, S);
            } finally {
              a.treeContext = m;
            }
          } else Ne(r, a, S);
        }
      else if (typeof u == "string") {
        switch (
          ((S = a.blockedSegment),
          (C = ir(S.chunks, u, m, r.responseState, S.formatContext)),
          (S.lastPushedText = !1),
          (T = S.formatContext),
          (S.formatContext = w(T, u, m)),
          Ao(r, a, C),
          (S.formatContext = T),
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
            S.chunks.push(sr, y(u), ar);
        }
        S.lastPushedText = !1;
      } else {
        switch (u) {
          case b:
          case h:
          case En:
          case kn:
          case kt:
            Ne(r, a, m.children);
            return;
          case Tn:
            Ne(r, a, m.children);
            return;
          case f:
            throw Error(t(343));
          case Sr:
            e: {
              ((u = a.blockedBoundary),
                (S = a.blockedSegment),
                (C = m.fallback),
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
                z = Rr(r, S.chunks.length, P, S.formatContext, !1, !1);
              (S.children.push(z), (S.lastPushedText = !1));
              var te = Rr(r, 0, null, S.formatContext, !1, !1);
              ((te.parentFlushed = !0),
                (a.blockedBoundary = P),
                (a.blockedSegment = te));
              try {
                if (
                  (Ao(r, a, m),
                  te.lastPushedText && te.textEmbedded && te.chunks.push(A),
                  (te.status = 1),
                  Mr(P, te),
                  P.pendingTasks === 0)
                )
                  break e;
              } catch (J) {
                ((te.status = 4),
                  (P.forceClientRender = !0),
                  (P.errorDigest = Mn(r, J)));
              } finally {
                ((a.blockedBoundary = u), (a.blockedSegment = S));
              }
              ((a = _o(
                r,
                C,
                u,
                z,
                T,
                a.legacyContext,
                a.context,
                a.treeContext,
              )),
                r.pingedTasks.push(a));
            }
            return;
        }
        if (typeof u == "object" && u !== null)
          switch (u.$$typeof) {
            case Cr:
              if (((m = Oi(r, a, u.render, m, S)), Rn !== 0)) {
                ((u = a.treeContext), (a.treeContext = dt(u, 1, 0)));
                try {
                  Ne(r, a, m);
                } finally {
                  a.treeContext = u;
                }
              } else Ne(r, a, m);
              return;
            case n:
              ((u = u.type), (m = Bi(u, m)), To(r, a, u, m, S));
              return;
            case _n:
              if (
                ((S = m.children),
                (u = u._context),
                (m = m.value),
                (C = u._currentValue),
                (u._currentValue = m),
                (T = K),
                (K = m =
                  {
                    parent: T,
                    depth: T === null ? 0 : T.depth + 1,
                    context: u,
                    parentValue: C,
                    value: m,
                  }),
                (a.context = m),
                Ne(r, a, S),
                (r = K),
                r === null)
              )
                throw Error(t(403));
              ((m = r.parentValue),
                (r.context._currentValue =
                  m === x ? r.context._defaultValue : m),
                (r = K = r.parent),
                (a.context = r));
              return;
            case Zt:
              ((m = m.children), (m = m(u._currentValue)), Ne(r, a, m));
              return;
            case l:
              ((S = u._init),
                (u = S(u._payload)),
                (m = Bi(u, m)),
                To(r, a, u, m, void 0));
              return;
          }
        throw Error(t(130, u == null ? u : typeof u, ""));
      }
    }
    function Ne(r, a, u) {
      if (((a.node = u), typeof u == "object" && u !== null)) {
        switch (u.$$typeof) {
          case xr:
            To(r, a, u.type, u.props, u.ref);
            return;
          case Et:
            throw Error(t(257));
          case l:
            var m = u._init;
            ((u = m(u._payload)), Ne(r, a, u));
            return;
        }
        if (ve(u)) {
          qi(r, a, u);
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
            var S = [];
            do (S.push(u.value), (u = m.next()));
            while (!u.done);
            qi(r, a, S);
          }
          return;
        }
        throw (
          (r = Object.prototype.toString.call(u)),
          Error(
            t(
              31,
              r === "[object Object]"
                ? "object with keys {" + Object.keys(u).join(", ") + "}"
                : r,
            ),
          )
        );
      }
      typeof u == "string"
        ? ((m = a.blockedSegment),
          (m.lastPushedText = H(
            a.blockedSegment.chunks,
            u,
            r.responseState,
            m.lastPushedText,
          )))
        : typeof u == "number" &&
          ((m = a.blockedSegment),
          (m.lastPushedText = H(
            a.blockedSegment.chunks,
            "" + u,
            r.responseState,
            m.lastPushedText,
          )));
    }
    function qi(r, a, u) {
      for (var m = u.length, S = 0; S < m; S++) {
        var C = a.treeContext;
        a.treeContext = dt(C, m, S);
        try {
          Ao(r, a, u[S]);
        } finally {
          a.treeContext = C;
        }
      }
    }
    function Ao(r, a, u) {
      var m = a.blockedSegment.formatContext,
        S = a.legacyContext,
        C = a.context;
      try {
        return Ne(r, a, u);
      } catch (z) {
        if (
          (Eo(),
          typeof z == "object" && z !== null && typeof z.then == "function")
        ) {
          u = z;
          var T = a.blockedSegment,
            P = Rr(
              r,
              T.chunks.length,
              null,
              T.formatContext,
              T.lastPushedText,
              !0,
            );
          (T.children.push(P),
            (T.lastPushedText = !1),
            (r = _o(
              r,
              a.node,
              a.blockedBoundary,
              P,
              a.abortSet,
              a.legacyContext,
              a.context,
              a.treeContext,
            ).ping),
            u.then(r, r),
            (a.blockedSegment.formatContext = m),
            (a.legacyContext = S),
            (a.context = C),
            tt(C));
        } else
          throw (
            (a.blockedSegment.formatContext = m),
            (a.legacyContext = S),
            (a.context = C),
            tt(C),
            z
          );
      }
    }
    function Za(r) {
      var a = r.blockedBoundary;
      ((r = r.blockedSegment), (r.status = 3), Hi(this, a, r));
    }
    function $i(r, a, u) {
      var m = r.blockedBoundary;
      ((r.blockedSegment.status = 3),
        m === null
          ? (a.allPendingTasks--,
            a.status !== 2 &&
              ((a.status = 2), a.destination !== null && a.destination.close()))
          : (m.pendingTasks--,
            m.forceClientRender ||
              ((m.forceClientRender = !0),
              (r = u === void 0 ? Error(t(432)) : u),
              (m.errorDigest = a.onError(r)),
              m.parentFlushed && a.clientRenderedBoundaries.push(m)),
            m.fallbackAbortableTasks.forEach(function (S) {
              return $i(S, a, u);
            }),
            m.fallbackAbortableTasks.clear(),
            a.allPendingTasks--,
            a.allPendingTasks === 0 && ((m = a.onAllReady), m())));
    }
    function Mr(r, a) {
      if (
        a.chunks.length === 0 &&
        a.children.length === 1 &&
        a.children[0].boundary === null
      ) {
        var u = a.children[0];
        ((u.id = a.id), (u.parentFlushed = !0), u.status === 1 && Mr(r, u));
      } else r.completedSegments.push(a);
    }
    function Hi(r, a, u) {
      if (a === null) {
        if (u.parentFlushed) {
          if (r.completedRootSegment !== null) throw Error(t(389));
          r.completedRootSegment = u;
        }
        (r.pendingRootTasks--,
          r.pendingRootTasks === 0 &&
            ((r.onShellError = In), (a = r.onShellReady), a()));
      } else
        (a.pendingTasks--,
          a.forceClientRender ||
            (a.pendingTasks === 0
              ? (u.parentFlushed && u.status === 1 && Mr(a, u),
                a.parentFlushed && r.completedBoundaries.push(a),
                a.fallbackAbortableTasks.forEach(Za, r),
                a.fallbackAbortableTasks.clear())
              : u.parentFlushed &&
                u.status === 1 &&
                (Mr(a, u),
                a.completedSegments.length === 1 &&
                  a.parentFlushed &&
                  r.partialBoundaries.push(a))));
      (r.allPendingTasks--,
        r.allPendingTasks === 0 && ((r = r.onAllReady), r()));
    }
    function ji(r) {
      if (r.status !== 2) {
        var a = K,
          u = ko.current;
        ko.current = Ni;
        var m = Lr;
        Lr = r.responseState;
        try {
          var S = r.pingedTasks,
            C;
          for (C = 0; C < S.length; C++) {
            var T = S[C],
              P = r,
              z = T.blockedSegment;
            if (z.status === 0) {
              tt(T.context);
              try {
                (Ne(P, T, T.node),
                  z.lastPushedText && z.textEmbedded && z.chunks.push(A),
                  T.abortSet.delete(T),
                  (z.status = 1),
                  Hi(P, T.blockedBoundary, z));
              } catch (Ue) {
                if (
                  (Eo(),
                  typeof Ue == "object" &&
                    Ue !== null &&
                    typeof Ue.then == "function")
                ) {
                  var te = T.ping;
                  Ue.then(te, te);
                } else {
                  (T.abortSet.delete(T), (z.status = 4));
                  var J = T.blockedBoundary,
                    ye = Ue,
                    Oe = Mn(P, ye);
                  if (
                    (J === null
                      ? Ir(P, ye)
                      : (J.pendingTasks--,
                        J.forceClientRender ||
                          ((J.forceClientRender = !0),
                          (J.errorDigest = Oe),
                          J.parentFlushed &&
                            P.clientRenderedBoundaries.push(J))),
                    P.allPendingTasks--,
                    P.allPendingTasks === 0)
                  ) {
                    var je = P.onAllReady;
                    je();
                  }
                }
              } finally {
              }
            }
          }
          (S.splice(0, C), r.destination !== null && Lo(r, r.destination));
        } catch (Ue) {
          (Mn(r, Ue), Ir(r, Ue));
        } finally {
          ((Lr = m), (ko.current = u), u === Ni && tt(a));
        }
      }
    }
    function Pr(r, a, u) {
      switch (((u.parentFlushed = !0), u.status)) {
        case 0:
          var m = (u.id = r.nextSegmentId++);
          return (
            (u.lastPushedText = !1),
            (u.textEmbedded = !1),
            (r = r.responseState),
            s(a, qt),
            s(a, r.placeholderPrefix),
            (r = y(m.toString(16))),
            s(a, r),
            c(a, lr)
          );
        case 1:
          u.status = 2;
          var S = !0;
          m = u.chunks;
          var C = 0;
          u = u.children;
          for (var T = 0; T < u.length; T++) {
            for (S = u[T]; C < S.index; C++) s(a, m[C]);
            S = Fr(r, a, S);
          }
          for (; C < m.length - 1; C++) s(a, m[C]);
          return (C < m.length && (S = c(a, m[C])), S);
        default:
          throw Error(t(390));
      }
    }
    function Fr(r, a, u) {
      var m = u.boundary;
      if (m === null) return Pr(r, a, u);
      if (((m.parentFlushed = !0), m.forceClientRender))
        ((m = m.errorDigest),
          c(a, $t),
          s(a, mo),
          m && (s(a, go), s(a, y($(m))), s(a, ho)),
          c(a, yo),
          Pr(r, a, u));
      else if (0 < m.pendingTasks) {
        ((m.rootSegmentID = r.nextSegmentId++),
          0 < m.completedSegments.length && r.partialBoundaries.push(m));
        var S = r.responseState,
          C = S.nextSuspenseID++;
        ((S = d(S.boundaryPrefix + C.toString(16))),
          (m = m.id = S),
          Be(a, r.responseState, m),
          Pr(r, a, u));
      } else if (m.byteSize > r.progressiveChunkSize)
        ((m.rootSegmentID = r.nextSegmentId++),
          r.completedBoundaries.push(m),
          Be(a, r.responseState, m.id),
          Pr(r, a, u));
      else {
        if ((c(a, cr), (u = m.completedSegments), u.length !== 1))
          throw Error(t(391));
        Fr(r, a, u[0]);
      }
      return c(a, po);
    }
    function Ui(r, a, u) {
      return (
        xo(a, r.responseState, u.formatContext, u.id),
        Fr(r, a, u),
        St(a, u.formatContext)
      );
    }
    function Wi(r, a, u) {
      for (var m = u.completedSegments, S = 0; S < m.length; S++)
        Vi(r, a, u, m[S]);
      if (
        ((m.length = 0),
        (r = r.responseState),
        (m = u.id),
        (u = u.rootSegmentID),
        s(a, r.startInlineScript),
        r.sentCompleteBoundaryFunction
          ? s(a, hr)
          : ((r.sentCompleteBoundaryFunction = !0), s(a, Gt)),
        m === null)
      )
        throw Error(t(395));
      return (
        (u = y(u.toString(16))),
        s(a, m),
        s(a, gr),
        s(a, r.segmentPrefix),
        s(a, u),
        c(a, yr)
      );
    }
    function Vi(r, a, u, m) {
      if (m.status === 2) return !0;
      var S = m.id;
      if (S === -1) {
        if ((m.id = u.rootSegmentID) === -1) throw Error(t(392));
        return Ui(r, a, m);
      }
      return (
        Ui(r, a, m),
        (r = r.responseState),
        s(a, r.startInlineScript),
        r.sentCompleteSegmentFunction
          ? s(a, xn)
          : ((r.sentCompleteSegmentFunction = !0), s(a, Co)),
        s(a, r.segmentPrefix),
        (S = y(S.toString(16))),
        s(a, S),
        s(a, zt),
        s(a, r.placeholderPrefix),
        s(a, S),
        c(a, bt)
      );
    }
    function Lo(r, a) {
      ((o = new Uint8Array(512)), (i = 0));
      try {
        var u = r.completedRootSegment;
        if (u !== null && r.pendingRootTasks === 0) {
          (Fr(r, a, u), (r.completedRootSegment = null));
          var m = r.responseState.bootstrapChunks;
          for (u = 0; u < m.length - 1; u++) s(a, m[u]);
          u < m.length && c(a, m[u]);
        }
        var S = r.clientRenderedBoundaries,
          C;
        for (C = 0; C < S.length; C++) {
          var T = S[C];
          m = a;
          var P = r.responseState,
            z = T.id,
            te = T.errorDigest,
            J = T.errorMessage,
            ye = T.errorComponentStack;
          if (
            (s(m, P.startInlineScript),
            P.sentClientRenderFunction
              ? s(m, Ie)
              : ((P.sentClientRenderFunction = !0), s(m, Cn)),
            z === null)
          )
            throw Error(t(395));
          (s(m, z),
            s(m, wr),
            (te || J || ye) && (s(m, bn), s(m, y(ct(te || "")))),
            (J || ye) && (s(m, bn), s(m, y(ct(J || "")))),
            ye && (s(m, bn), s(m, y(ct(ye)))),
            c(m, Sn));
        }
        S.splice(0, C);
        var Oe = r.completedBoundaries;
        for (C = 0; C < Oe.length; C++) Wi(r, a, Oe[C]);
        (Oe.splice(0, C), p(a), (o = new Uint8Array(512)), (i = 0));
        var je = r.partialBoundaries;
        for (C = 0; C < je.length; C++) {
          var Ue = je[C];
          e: {
            ((S = r), (T = a));
            var Nr = Ue.completedSegments;
            for (P = 0; P < Nr.length; P++)
              if (!Vi(S, T, Ue, Nr[P])) {
                (P++, Nr.splice(0, P));
                var Gi = !1;
                break e;
              }
            (Nr.splice(0, P), (Gi = !0));
          }
          if (!Gi) {
            ((r.destination = null), C++, je.splice(0, C));
            return;
          }
        }
        je.splice(0, C);
        var Ro = r.completedBoundaries;
        for (C = 0; C < Ro.length; C++) Wi(r, a, Ro[C]);
        Ro.splice(0, C);
      } finally {
        (p(a),
          r.allPendingTasks === 0 &&
            r.pingedTasks.length === 0 &&
            r.clientRenderedBoundaries.length === 0 &&
            r.completedBoundaries.length === 0 &&
            a.close());
      }
    }
    function zi(r, a) {
      try {
        var u = r.abortableTasks;
        (u.forEach(function (m) {
          return $i(m, r, a);
        }),
          u.clear(),
          r.destination !== null && Lo(r, r.destination));
      } catch (m) {
        (Mn(r, m), Ir(r, m));
      }
    }
    return (
      (zn.renderToReadableStream = function (r, a) {
        return new Promise(function (u, m) {
          var S,
            C,
            T = new Promise(function (J, ye) {
              ((C = J), (S = ye));
            }),
            P = Ga(
              r,
              U(
                a ? a.identifierPrefix : void 0,
                a ? a.nonce : void 0,
                a ? a.bootstrapScriptContent : void 0,
                a ? a.bootstrapScripts : void 0,
                a ? a.bootstrapModules : void 0,
              ),
              ke(a ? a.namespaceURI : void 0),
              a ? a.progressiveChunkSize : void 0,
              a ? a.onError : void 0,
              C,
              function () {
                var J = new ReadableStream(
                  {
                    type: "bytes",
                    pull: function (ye) {
                      if (P.status === 1) ((P.status = 2), v(ye, P.fatalError));
                      else if (P.status !== 2 && P.destination === null) {
                        P.destination = ye;
                        try {
                          Lo(P, ye);
                        } catch (Oe) {
                          (Mn(P, Oe), Ir(P, Oe));
                        }
                      }
                    },
                    cancel: function () {
                      zi(P);
                    },
                  },
                  { highWaterMark: 0 },
                );
                ((J.allReady = T), u(J));
              },
              function (J) {
                (T.catch(function () {}), m(J));
              },
              S,
            );
          if (a && a.signal) {
            var z = a.signal,
              te = function () {
                (zi(P, z.reason), z.removeEventListener("abort", te));
              };
            z.addEventListener("abort", te);
          }
          ji(P);
        });
      }),
      (zn.version = "18.2.0"),
      zn
    );
  }
  var ni;
  function Ps() {
    if (ni) return ot;
    ni = 1;
    var e, t;
    return (
      (e = Is()),
      (t = Ms()),
      (ot.version = e.version),
      (ot.renderToString = e.renderToString),
      (ot.renderToStaticMarkup = e.renderToStaticMarkup),
      (ot.renderToNodeStream = e.renderToNodeStream),
      (ot.renderToStaticNodeStream = e.renderToStaticNodeStream),
      (ot.renderToReadableStream = t.renderToReadableStream),
      ot
    );
  }
  var Fs = Ps();
  const Ns = ({ className: e = "" }) =>
      Ce.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "none",
        viewBox: "0 0 20 20",
        className: `${e} text-pangram-error-dark`,
        children: [
          Ce.jsxs("g", {
            clipPath: "url(#clip0_5114_50641)",
            children: [
              Ce.jsx("path", {
                fill: "currentColor",
                d: "M15.625 4.375H4.375A1.875 1.875 0 0 0 2.5 6.25V15a1.875 1.875 0 0 0 1.875 1.875h11.25A1.875 1.875 0 0 0 17.5 15V6.25a1.875 1.875 0 0 0-1.875-1.875m-2.812 10H7.187a1.563 1.563 0 1 1 0-3.125h5.626a1.563 1.563 0 0 1 0 3.125",
                opacity: "0.2",
              }),
              Ce.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.25",
                d: "M15.625 4.375H4.375c-1.036 0-1.875.84-1.875 1.875V15c0 1.035.84 1.875 1.875 1.875h11.25c1.035 0 1.875-.84 1.875-1.875V6.25c0-1.036-.84-1.875-1.875-1.875M10 4.375V1.25",
              }),
              Ce.jsx("path", {
                fill: "currentColor",
                d: "M6.563 9.375a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875M13.438 9.375a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875",
              }),
              Ce.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.25",
                d: "M12.813 11.25H7.187a1.563 1.563 0 0 0 0 3.125h5.626a1.563 1.563 0 0 0 0-3.125M11.563 11.25v3.125M8.438 11.25v3.125",
              }),
            ],
          }),
          Ce.jsx("defs", {
            children: Ce.jsx("clipPath", {
              id: "clip0_5114_50641",
              children: Ce.jsx("path", { fill: "#fff", d: "M0 0h20v20H0z" }),
            }),
          }),
        ],
      }),
    Os = ({ className: e = "" }) =>
      Ce.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "none",
        viewBox: "0 0 20 20",
        className: e,
        children: [
          Ce.jsxs("g", {
            clipPath: "url(#clip0_5125_40436)",
            children: [
              Ce.jsx("path", {
                fill: "#065E49",
                d: "M10 2.5a7.5 7.5 0 0 0-5.015 13.077A5.63 5.63 0 0 1 10 12.5a3.125 3.125 0 1 1 0-6.25 3.125 3.125 0 0 1 0 6.25 5.63 5.63 0 0 1 5.015 3.076A7.5 7.5 0 0 0 10.001 2.5",
                opacity: "0.2",
              }),
              Ce.jsx("path", {
                stroke: "#065E49",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.25",
                d: "M4.984 15.577a5.625 5.625 0 0 1 10.032 0",
              }),
              Ce.jsx("path", {
                stroke: "#065E49",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.25",
                d: "M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15",
              }),
              Ce.jsx("path", {
                stroke: "#065E49",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.25",
                d: "M10 12.5a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25",
              }),
            ],
          }),
          Ce.jsx("defs", {
            children: Ce.jsx("clipPath", {
              id: "clip0_5125_40436",
              children: Ce.jsx("path", { fill: "#fff", d: "M0 0h20v20H0z" }),
            }),
          }),
        ],
      }),
    Ds = ({ className: e = "", noFill: t = !1 }) =>
      Ce.jsxs("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        className: `text-[#B76E00] ${e}`,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          Ce.jsx("path", {
            opacity: t ? "0" : "0.2",
            d: "M16.8694 7.86854C16.8011 6.23544 16.0957 4.6941 14.9045 3.5749C13.7132 2.45569 12.1309 1.84768 10.4968 1.8812C8.86258 1.91471 7.30655 2.58708 6.1622 3.75419C5.01785 4.9213 4.37625 6.49026 4.37492 8.12479L2.5507 11.6303C2.4878 11.7767 2.48326 11.9417 2.53801 12.0915C2.59276 12.2412 2.70267 12.3644 2.84523 12.4357L4.99992 13.4224V16.2498C4.99992 16.4155 5.06577 16.5745 5.18298 16.6917C5.30019 16.8089 5.45916 16.8748 5.62492 16.8748H9.37492C9.37492 17.2063 9.50661 17.5243 9.74103 17.7587C9.97545 17.9931 10.2934 18.1248 10.6249 18.1248H14.9999L14.3749 13.1248C15.1865 12.5172 15.8377 11.7211 16.2724 10.8052C16.707 9.88938 16.912 8.88141 16.8694 7.86854ZM8.76007 5.78729C8.72621 5.5284 8.77427 5.26541 8.89749 5.03523C9.02072 4.80505 9.21292 4.61923 9.44714 4.50386C9.68135 4.38848 9.94581 4.34934 10.2034 4.39192C10.461 4.43451 10.6988 4.55668 10.8834 4.7413C11.068 4.92592 11.1902 5.16371 11.2328 5.4213C11.2754 5.67889 11.2362 5.94336 11.1208 6.17757C11.0055 6.41178 10.8196 6.60399 10.5895 6.72721C10.3593 6.85043 10.0963 6.89849 9.83742 6.86463C9.56421 6.8289 9.31047 6.7039 9.11563 6.50907C8.9208 6.31424 8.7958 6.06049 8.76007 5.78729ZM11.4163 11.8646C11.1574 11.8985 10.8945 11.8504 10.6643 11.7272C10.4341 11.604 10.2483 11.4118 10.1329 11.1776C10.0175 10.9434 9.97838 10.6789 10.021 10.4213C10.0635 10.1637 10.1857 9.92592 10.3703 9.7413C10.555 9.55668 10.7927 9.43451 11.0503 9.39192C11.3079 9.34934 11.5724 9.38848 11.8066 9.50386C12.0408 9.61923 12.233 9.80505 12.3562 10.0352C12.4795 10.2654 12.5275 10.5284 12.4937 10.7873C12.4577 11.0611 12.3322 11.3153 12.1366 11.5102C11.941 11.7051 11.6863 11.8297 11.4124 11.8646H11.4163Z",
            fill: "currentColor",
          }),
          Ce.jsx("path", {
            d: "M15.0391 13.3961C15.8294 12.7322 16.4608 11.8995 16.8867 10.9593C17.3126 10.019 17.5222 8.99524 17.5 7.96329C17.4219 4.39219 14.5617 1.44766 10.9969 1.26016C10.0771 1.2101 9.15661 1.34538 8.29012 1.65798C7.42364 1.97058 6.62881 2.45412 5.95284 3.07988C5.27687 3.70565 4.73354 4.46087 4.35512 5.3007C3.97671 6.14053 3.77092 7.04784 3.74999 7.96875L1.99608 11.3422C1.98905 11.3563 1.98202 11.3703 1.97577 11.3844C1.85003 11.6775 1.84107 12.0075 1.95072 12.307C2.06037 12.6065 2.28035 12.8527 2.56561 12.9953L2.58515 13.0039L4.37499 13.8234V16.25C4.37499 16.5815 4.50669 16.8995 4.74111 17.1339C4.97553 17.3683 5.29347 17.5 5.62499 17.5H9.37499C9.54075 17.5 9.69972 17.4342 9.81693 17.3169C9.93414 17.1997 9.99999 17.0408 9.99999 16.875C9.99999 16.7092 9.93414 16.5503 9.81693 16.4331C9.69972 16.3159 9.54075 16.25 9.37499 16.25H5.62499V13.4227C5.62508 13.3029 5.59074 13.1856 5.52605 13.0847C5.46137 12.9839 5.36907 12.9038 5.26015 12.8539L3.12499 11.875L4.92733 8.41094C4.97431 8.32291 4.99924 8.22479 4.99999 8.125C4.99981 6.85027 5.43261 5.61327 6.22747 4.61671C7.02234 3.62015 8.13213 2.92312 9.37499 2.63985V3.85782C8.95798 4.00525 8.60652 4.29536 8.38272 4.67687C8.15892 5.05837 8.0772 5.50672 8.15199 5.94265C8.22679 6.37859 8.45328 6.77404 8.79145 7.05913C9.12962 7.34422 9.55769 7.50058 9.99999 7.50058C10.4423 7.50058 10.8704 7.34422 11.2085 7.05913C11.5467 6.77404 11.7732 6.37859 11.848 5.94265C11.9228 5.50672 11.8411 5.05837 11.6173 4.67687C11.3935 4.29536 11.042 4.00525 10.625 3.85782V2.50001C10.7266 2.50001 10.8281 2.50001 10.9297 2.50782C12.038 2.5713 13.103 2.96017 13.9915 3.62578C14.88 4.29138 15.5526 5.20418 15.925 6.25H14.375C14.2833 6.24997 14.1927 6.27011 14.1097 6.30899C14.0267 6.34788 13.9532 6.40455 13.8945 6.475L11.9016 8.86719C11.4859 8.71231 11.0289 8.70942 10.6113 8.85901C10.1937 9.00861 9.84249 9.30106 9.61974 9.68465C9.39699 10.0682 9.31707 10.5182 9.39411 10.9551C9.47116 11.3919 9.7002 11.7874 10.0407 12.0716C10.3813 12.3559 10.8113 12.5105 11.2549 12.5082C11.6985 12.506 12.1269 12.3469 12.4645 12.0592C12.8021 11.7714 13.0271 11.3736 13.0996 10.936C13.1722 10.4984 13.0876 10.0492 12.8609 9.66797L14.668 7.5H16.2141C16.2328 7.6625 16.2443 7.82657 16.2484 7.99219C16.2679 8.88738 16.0742 9.77436 15.6832 10.5799C15.2923 11.3854 14.7153 12.0864 14 12.625C13.9118 12.6911 13.8427 12.7793 13.7997 12.8807C13.7566 12.9821 13.7411 13.093 13.7547 13.2023L14.3797 18.2023C14.3987 18.3533 14.4721 18.4921 14.5862 18.5928C14.7002 18.6935 14.8471 18.7491 14.9992 18.7492C15.0253 18.7492 15.0514 18.7477 15.0773 18.7445C15.1588 18.7344 15.2375 18.7083 15.3089 18.6677C15.3802 18.6272 15.4429 18.573 15.4933 18.5082C15.5438 18.4434 15.5809 18.3693 15.6027 18.2902C15.6245 18.211 15.6305 18.1283 15.6203 18.0469L15.0391 13.3961ZM9.99999 6.25C9.87638 6.25 9.75554 6.21335 9.65276 6.14467C9.54998 6.076 9.46987 5.97839 9.42256 5.86418C9.37526 5.74998 9.36288 5.62431 9.387 5.50307C9.41111 5.38184 9.47064 5.27047 9.55805 5.18306C9.64546 5.09566 9.75682 5.03613 9.87806 5.01201C9.9993 4.9879 10.125 5.00028 10.2392 5.04758C10.3534 5.09489 10.451 5.17499 10.5197 5.27777C10.5883 5.38055 10.625 5.50139 10.625 5.62501C10.625 5.79077 10.5591 5.94974 10.4419 6.06695C10.3247 6.18416 10.1658 6.25 9.99999 6.25ZM11.25 11.25C11.1264 11.25 11.0055 11.2133 10.9028 11.1447C10.8 11.076 10.7199 10.9784 10.6726 10.8642C10.6253 10.75 10.6129 10.6243 10.637 10.5031C10.6611 10.3818 10.7206 10.2705 10.808 10.1831C10.8955 10.0957 11.0068 10.0361 11.1281 10.012C11.2493 9.9879 11.375 10.0003 11.4892 10.0476C11.6034 10.0949 11.701 10.175 11.7697 10.2778C11.8383 10.3806 11.875 10.5014 11.875 10.625C11.875 10.7908 11.8091 10.9497 11.6919 11.0669C11.5747 11.1842 11.4158 11.25 11.25 11.25Z",
            fill: "currentColor",
          }),
        ],
      }),
    Bs =
      '<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    qs = (e) => {
      const t = e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!t) return 1;
      const [o, i, s] = [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
      return (0.299 * o + 0.587 * i + 0.114 * s) / 255;
    },
    $s = (e) => !e || e === "transparent" || e === "rgba(0, 0, 0, 0)",
    ri = (e) => !$s(e) && qs(e) < 0.4,
    nn = () => {
      if (
        ri(window.getComputedStyle(document.body).backgroundColor) ||
        ri(window.getComputedStyle(document.documentElement).backgroundColor)
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
    oi = (e) => {
      chrome.runtime
        .sendMessage({ type: "OPEN_FEED_PANEL", ...(e && { postId: e }) })
        .catch(() => {});
    },
    Hs = () => {
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
    ii =
      '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_scan)"><path d="M11 2.5H13.5V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 13.5H2.5V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 11V13.5H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 5V2.5H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 5H5V11H11V5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_scan"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>',
    js = (e) => {
      const t = ai(),
        o = document.createElement("span");
      ((o.className = Te),
        (o.style.cssText = `
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
        Hs());
      const i = document.createElement("span");
      ((i.innerHTML = ii),
        (i.style.cssText = "display: inline-flex; align-items: center;"),
        o.appendChild(i));
      const s = document.createElement("span");
      return (
        (s.textContent = e && e >= 500 ? "Checking for AI" : "Checking"),
        (s.className = "pangram-loading-dots"),
        o.appendChild(s),
        o.addEventListener("click", (c) => {
          (c.preventDefault(), c.stopPropagation(), oi());
        }),
        o
      );
    },
    Kr = (e) => {
      let t = Fs.renderToStaticMarkup(Xi.createElement(e));
      return (
        (t = t.replace(
          /<svg([^>]*)width="[^"]*"([^>]*)height="[^"]*"/,
          '<svg$1width="13"$2height="13"',
        )),
        (t = t.replace(/(?:fill|stroke)="(#[0-9A-Fa-f]{3,8})"/g, (o, i) =>
          i.toLowerCase() === "#fff" || i.toLowerCase() === "#ffffff"
            ? o
            : o.replace(i, "currentColor"),
        )),
        t
      );
    },
    Gn = {
      ai: Kr(Ns),
      human: Kr(Os),
      mixed:
        '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pgmix)"><path opacity="0.2" d="M9.333 12.6465C9.54768 12.6465 9.75991 12.6923 9.95556 12.7809C10.1512 12.8694 10.3258 12.9987 10.4678 13.1601L13.325 16.4059C13.3953 16.4764 13.4511 16.5601 13.4892 16.6523C13.5273 16.7444 13.5469 16.8431 13.5469 16.9429C13.5469 17.0426 13.5273 17.1413 13.4892 17.2335C13.4511 17.3256 13.3953 17.4093 13.325 17.4798C13.2546 17.5503 13.171 17.6063 13.0791 17.6444C12.9871 17.6826 12.8886 17.7022 12.7891 17.7022C12.6896 17.7022 12.591 17.6826 12.4991 17.6444C12.4071 17.6063 12.3236 17.5503 12.2532 17.4798L10.0158 15.6788L11.4576 21.1704C11.539 21.3521 11.5458 21.5586 11.4764 21.7452C11.4071 21.9319 11.2672 22.0837 11.0871 22.1679C10.9069 22.2521 10.701 22.2618 10.5137 22.195C10.3264 22.1282 10.1729 21.9902 10.0864 21.8109L7.99835 18.2057L5.91033 21.8109C5.82377 21.9902 5.67027 22.1282 5.48301 22.195C5.29575 22.2618 5.08978 22.2521 4.90963 22.1679C4.72947 22.0837 4.58961 21.9319 4.52028 21.7452C4.45095 21.5586 4.45771 21.3521 4.53911 21.1704L5.98094 15.6788L3.74224 17.4786C3.60011 17.621 3.40735 17.701 3.20636 17.701C3.00537 17.701 2.81261 17.621 2.67048 17.4786C2.52836 17.3361 2.44852 17.143 2.44852 16.9416C2.44852 16.7402 2.52836 16.547 2.67048 16.4046L5.52891 13.1601C5.67087 12.9987 5.84548 12.8694 6.04114 12.7809C6.23679 12.6923 6.44902 12.6465 6.6637 12.6465H9.333Z" fill="#7A4100"/><path d="M9.333 12.6465C9.54768 12.6465 9.75991 12.6923 9.95556 12.7809C10.1512 12.8694 10.3258 12.9987 10.4678 13.1601L13.325 16.4059C13.4511 16.5601 13.4892 16.6523 13.5273 16.7444 13.5469 16.8431 13.5469 16.9429 13.5469 17.0426 13.5273 17.1413 13.4892 17.2335 13.4511 17.3256 13.3953 17.4093 13.325 17.4798 13.2546 17.5503 13.171 17.6063 13.0791 17.6444 12.9871 17.6826 12.8886 17.7022 12.7891 17.7022 12.6896 17.7022 12.591 17.6826 12.4991 17.6444 12.4071 17.6063 12.3236 17.5503 12.2532 17.4798L10.0158 15.6788L11.4576 21.1704C11.539 21.3521 11.5458 21.5586 11.4764 21.7452 11.4071 21.9319 11.2672 22.0837 11.0871 22.1679 10.9069 22.2521 10.701 22.2618 10.5137 22.195 10.3264 22.1282 10.1729 21.9902 10.0864 21.8109L7.99835 18.2057 5.91033 21.8109C5.82377 21.9902 5.67027 22.1282 5.48301 22.195 5.29575 22.2618 5.08978 22.2521 4.90963 22.1679 4.72947 22.0837 4.58961 21.9319 4.52028 21.7452 4.45095 21.5586 4.45771 21.3521 4.53911 21.1704L5.98094 15.6788 3.74224 17.4786C3.60011 17.621 3.40735 17.701 3.20636 17.701 3.00537 17.701 2.81261 17.621 2.67048 17.4786 2.52836 17.3361 2.44852 17.143 2.44852 16.9416 2.44852 16.7402 2.52836 16.547 2.67048 16.4046L5.52891 13.1601C5.67087 12.9987 5.84548 12.8694 6.04114 12.7809 6.23679 12.6923 6.44902 12.6465 6.6637 12.6465H9.333Z" stroke="#7A4100" stroke-width="1.06031" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5335 3.57153H3.46502C3.06417 3.57153 2.67974 3.73127 2.39629 4.0156 2.11285 4.29993 1.95361 4.68557 1.95361 5.08768V12.163C1.95361 12.5651 2.11285 12.9508 2.39629 13.2351 2.67974 13.5194 3.06417 13.6792 3.46502 13.6792H12.5335C12.9343 13.6792 13.3187 13.5194 13.6022 13.2351 13.8856 12.9508 14.0449 12.5651 14.0449 12.163V5.08768C14.0449 4.68557 13.8856 4.29993 13.6022 4.0156 13.3187 3.73127 12.9343 3.57153 12.5335 3.57153ZM10.2663 11.6576H5.73213C5.39809 11.6576 5.07773 11.5245 4.84152 11.2876 4.60532 11.0506 4.47262 10.7293 4.47262 10.3942 4.47262 10.0591 4.60532 9.73773 4.84152 9.50078 5.07773 9.26384 5.39809 9.13073 5.73213 9.13073H10.2663C10.6004 9.13073 10.9207 9.26384 11.1569 9.50078 11.3932 9.73773 11.5258 10.0591 11.5258 10.3942 11.5258 10.7293 11.3932 11.0506 11.1569 11.2876 10.9207 11.5245 10.6004 11.6576 10.2663 11.6576Z" fill="#E4CFAB"/><path d="M12.5331 3.57153H3.46471C2.62999 3.57153 1.95331 4.25033 1.95331 5.08768V12.163C1.95331 13.0004 2.62999 13.6792 3.46471 13.6792H12.5331C13.3679 13.6792 14.0445 13.0004 14.0445 12.163V5.08768C14.0445 4.25033 13.3679 3.57153 12.5331 3.57153Z" stroke="#7A4100" stroke-width="1.06031" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.99902 3.57061V1.0437" stroke="#7A4100" stroke-width="1.06031" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.22894 7.61539C5.6463 7.61539 5.98464 7.27599 5.98464 6.85731 5.98464 6.43864 5.6463 6.09924 5.22894 6.09924 4.81158 6.09924 4.47324 6.43864 4.47324 6.85731 4.47324 7.27599 4.81158 7.61539 5.22894 7.61539Z" fill="#7A4100"/><path d="M10.7692 7.61539C11.1865 7.61539 11.5249 7.27599 11.5249 6.85731 11.5249 6.43864 11.1865 6.09924 10.7692 6.09924 10.3518 6.09924 10.0135 6.43864 10.0135 6.85731 10.0135 7.27599 10.3518 7.61539 10.7692 7.61539Z" fill="#7A4100"/><path d="M10.267 9.13245H5.73274C5.03714 9.13245 4.47324 9.69811 4.47324 10.3959 4.47324 11.0937 5.03714 11.6594 5.73274 11.6594H10.267C10.9626 11.6594 11.5265 11.0937 11.5265 10.3959 11.5265 9.69811 10.9626 9.13245 10.267 9.13245Z" stroke="#7A4100" stroke-width="1.06031" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.2576 9.13245V11.6594" stroke="#7A4100" stroke-width="1.06031" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.74042 9.13245V11.6594" stroke="#7A4100" stroke-width="1.06031" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pgmix"><rect width="16" height="14" fill="white"/></clipPath></defs></svg>',
      "ai-assisted": Kr(Ds),
    },
    si = {
      human: { bgColor: "rgba(16, 185, 129, 0.16)", textColor: "#047857" },
      mixed: { bgColor: "rgba(255, 171, 0, 0.16)", textColor: "#7A4100" },
      ai: { bgColor: "rgba(239, 68, 68, 0.16)", textColor: "#dc2626" },
      "ai-assisted": {
        bgColor: "rgba(255, 171, 0, 0.16)",
        textColor: "#7A4100",
      },
    },
    Us = {
      human: { bgColor: "rgba(16, 185, 129, 0.30)", textColor: "#6ee7b7" },
      mixed: { bgColor: "rgba(122, 65, 0, 0.30)", textColor: "#d4a574" },
      ai: { bgColor: "rgba(239, 68, 68, 0.30)", textColor: "#fca5a5" },
      "ai-assisted": {
        bgColor: "rgba(122, 65, 0, 0.30)",
        textColor: "#d4a574",
      },
    },
    Zn = (e) => (nn() ? Us : si)[e] ?? si.human,
    Ws = { bgColor: "rgba(0, 184, 217, 0.16)", textColor: "#006C9C" },
    Vs = { bgColor: "rgba(0, 184, 217, 0.30)", textColor: "#67e8f9" },
    ai = () => (nn() ? Vs : Ws),
    zs = (e, t, o) => {
      const i = Zn(t),
        s = document.createElement("span");
      return (
        (s.className = Te),
        (s.title = "Click to view full analysis"),
        (s.innerHTML = `${Gn[t] || ""}<span>${e}</span>${Bs}`),
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
          (c.preventDefault(), c.stopPropagation(), oi(o));
        }),
        s
      );
    },
    Gs =
      '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.32488 8H10.6751" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14.4203C11.5458 14.4203 14.4203 11.5458 14.4203 8C14.4203 4.45417 11.5458 1.57971 8 1.57971C4.45417 1.57971 1.57971 4.45417 1.57971 8C1.57971 11.5458 4.45417 14.4203 8 14.4203Z" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-dasharray="3 3"/></svg>',
    li = () => {
      const e = document.createElement("span");
      ((e.className = Te),
        e.setAttribute("data-pangram-too-short", "true"),
        (e.innerHTML = Gs),
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
        o = null,
        i = null;
      const s = () => {
        (t?.remove(), (t = null), i?.disconnect(), (i = null));
      };
      return (
        e.addEventListener("mouseenter", () => {
          const c = nn();
          ((e.style.backgroundColor = c
            ? "rgba(255, 255, 255, 0.12)"
            : "rgba(0, 0, 0, 0.06)"),
            (e.style.color = c
              ? "rgba(255, 255, 255, 0.75)"
              : "rgba(0, 0, 0, 0.7)"),
            o !== null && window.clearTimeout(o),
            (o = window.setTimeout(() => {
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
                (o = null),
                (i = new MutationObserver(() => {
                  document.body.contains(e) || s();
                })),
                i.observe(document.body, { childList: !0, subtree: !0 }));
            }, 700)));
        }),
        e.addEventListener("mouseleave", () => {
          ((e.style.backgroundColor = "transparent"),
            (e.style.color = "#919EAB"),
            o !== null && (window.clearTimeout(o), (o = null)),
            s());
        }),
        e
      );
    },
    Zs = (e) => {
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
  const Nt = new Set(),
    Xn = (e) => {
      if (ht) return;
      const t = ze.shift();
      if (!t) return;
      ((ht = !0), (De = t.postId));
      const o = t.postId,
        i = t.contentType === "long_post" ? 12e4 : 3e4;
      ((it = setTimeout(() => {
        if (De === o) {
          if (
            (Nt.add(o),
            (it = null),
            (ht = !1),
            (De = null),
            j.onScanTimeout && j.onScanTimeout(o),
            j.getActiveSiteConfigRef)
          ) {
            const s = j.getActiveSiteConfigRef();
            s && j.updateLoadingBadgesRef && j.updateLoadingBadgesRef(s);
          }
          (j.safeSendMessageRef && Xn(j.safeSendMessageRef),
            !ht && ze.length === 0 && Zr(!1));
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
    rn = () => {
      (it !== null && (clearTimeout(it), (it = null)),
        (ht = !1),
        (De = null),
        j.safeSendMessageRef && Xn(j.safeSendMessageRef),
        !ht && ze.length === 0 && Zr(!1));
    },
    Xs = () => {
      (it !== null && (clearTimeout(it), (it = null)),
        De !== null && (Nt.add(De), (De = null)),
        (ze.length = 0),
        (ht = !1));
    },
    qe = "pangram-profile-stats",
    Ks = "https://www.pangram.com",
    on =
      '<svg width="10" height="12" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-0.00878906 16.9346L13.3448 29.9999L7.71476 17.4842L-0.00878906 16.9346Z" fill="#FECAB9"/><path d="M26.6992 16.9346L13.3456 29.9999L18.9757 17.4842L26.6992 16.9346Z" fill="#FECAB9"/><path d="M5.7379 13.0918L-0.00878906 16.9367L7.71476 17.4864L5.7379 13.0918Z" fill="#FECAB9"/><path d="M20.9525 13.0918L26.6992 16.9367L18.9757 17.4864L20.9525 13.0918Z" fill="#FECAB9"/><path d="M-0.00878906 0.313477V16.9334L5.7379 13.0885L-0.00878906 0.313477Z" fill="#FECAB9"/><path d="M26.6992 0.313477V16.9334L20.9525 13.0885L26.6992 0.313477Z" fill="#FECAB9"/><path d="M13.3442 29.9988V7.99902L5.7373 13.0885L7.71416 17.4831L13.3442 29.9988Z" fill="#FF6106"/><path d="M13.3453 29.9988V7.99902L20.9521 13.0885L18.9753 17.4831L13.3453 29.9988Z" fill="#FF6106"/><path d="M13.3448 7.99899L-0.00878906 0.313477L5.7379 13.0885L13.3448 7.99899Z" fill="#FF6106"/><path d="M13.3456 7.99899L26.6992 0.313477L20.9525 13.0885L13.3456 7.99899Z" fill="#FF6106"/></svg>',
    ci =
      '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    Ys = (e) => {
      const t = (e || "").toLowerCase();
      return t.includes("human") || t === "unlikely ai"
        ? "human"
        : t === "ai-assisted"
          ? "ai-assisted"
          : t.includes("mixed")
            ? "mixed"
            : "ai";
    },
    ui = () => {
      const e = document.getElementById(qe);
      if (!e) return;
      const t = e.getAttribute("data-pangram-handle"),
        o = pi(),
        i = o ? `${o}:${mi(o)}` : null;
      (!t || i !== t) && e.remove();
    };
  let di = null;
  const Js = () => {
    if (di !== null) return;
    chrome.runtime.onMessage.addListener((o) => {
      o.type === "SPA_NAVIGATED" && ui();
    });
    const e = document.querySelector("title");
    e && new MutationObserver(ui).observe(e, { childList: !0 });
    let t = window.location.href;
    di = setInterval(() => {
      window.location.href !== t &&
        ((t = window.location.href),
        document.getElementById(qe)?.remove(),
        st());
    }, 500);
  };
  let fi = !1;
  const Qs = () => {
      const e = document
        .querySelector('meta[property="og:title"]')
        ?.getAttribute("content");
      if (e) {
        const t = e.replace(/\s*[–—-]\s*Medium\s*$/i, "").trim();
        for (const o of document.querySelectorAll("h1, h2"))
          if (o.textContent?.trim() === t) return o;
      }
      return document.querySelector("h2.pw-author-name, h1.pw-author-name");
    },
    pi = () => {
      const e = window.location.hostname.replace("www.", "");
      if (e === "x.com" || e === "twitter.com") {
        const t = window.location.pathname,
          o = [
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
        return i && !o.includes(i[1].toLowerCase()) ? "x" : null;
      }
      if (e === "medium.com" || e.endsWith(".medium.com"))
        return window.location.pathname.match(/^\/@([^/]+)\/?$/) ||
          (e === "medium.com" && Qt())
          ? "medium"
          : null;
      if (Qt()) return "medium";
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
      if (e === "substack.com" || e.endsWith(".substack.com") || Go()) {
        const t = window.location.pathname;
        return /^\/@([^/]+)\/?$/.test(t) ? "substack" : null;
      }
      return null;
    },
    mi = (e) => {
      if (e === "x")
        return window.location.pathname.split("/")[1].toLowerCase();
      if (e === "linkedin") {
        const o = window.location.pathname,
          i = o.match(/^\/in\/([^/]+)/);
        if (i) return i[1].toLowerCase();
        const s = o.match(/^\/company\/([^/]+)/);
        return s ? s[1].toLowerCase() : "";
      }
      if (e === "reddit") {
        const o = window.location.pathname.match(/^\/user\/([^/]+)/);
        return o ? o[1].toLowerCase() : "";
      }
      if (Qt()) {
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
    ea = async (e, t, o) => {
      try {
        const i = await chrome.runtime.sendMessage({
          type: o ? "FETCH_PUBLICATION_HISTORY" : "FETCH_AUTHOR_HISTORY",
          domain: e,
          platformId: t,
        });
        if (!i?.success) return { map: new Map(), stats: null };
        const s = new Map(),
          c = new Set();
        for (const p of i.items || []) {
          if (c.has(p.uuid)) continue;
          c.add(p.uuid);
          const g = p.text ? Yr(p.text) : p.uuid;
          s.set(g, Ys(p.prediction_short));
        }
        return { map: s, stats: i.stats || null };
      } catch {
        return { map: new Map(), stats: null };
      }
    },
    Yr = (e) =>
      e
        .replace(new RegExp("\\p{Extended_Pictographic}", "gu"), "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 100),
    ta = async () => {
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
    sn = (e) => e.toLowerCase().replace(/[\s\-_.@]+/g, ""),
    na = (e, t) => {
      const o = sn(t);
      if (e.authorHandle) return sn(e.authorHandle) === o;
      if (e.author) {
        const i = sn(e.author);
        return i.includes(o) || o.includes(i);
      }
      return !1;
    },
    ra = (e) => {
      let t = 0,
        o = 0,
        i = 0,
        s = 0;
      for (const c of e.values())
        c === "ai"
          ? t++
          : c === "ai-assisted"
            ? s++
            : c === "mixed"
              ? o++
              : c === "human" && i++;
      return { ai: t, mixed: o, human: i, aiAssisted: s, total: t + o + i + s };
    };
  let Kn = new Map(),
    Je = null,
    hi = "";
  const gi =
      "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    an = (e, t) => {
      const o = `
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
    font-family: ${gi};
  `,
        i = ai();
      if (e === "checking")
        return `<span style="${o} background-color: ${i.bgColor}; color: ${i.textColor};">
      ${ii}<span>Checking..</span>
    </span>`;
      if (e === "nothing-scanned")
        return `<span style="${o} background-color: ${i.bgColor}; color: ${i.textColor};">
      <span>Nothing scanned yet</span>${ci}
    </span>`;
      if (e === "sign-in")
        return `<span style="${o} background-color: transparent; color: #919EAB; font-weight: 400; font-style: italic;">
      <span>Sign in/upgrade to see AI Stats</span>
    </span>`;
      if (!t || t.total === 0) return "";
      const { human: s, total: c } = t,
        p = s / c,
        g = p >= 0.66 ? "human" : p >= 0.33 ? "mixed" : "ai",
        y = Zn(g),
        d = `${s}/${c} Human`;
      return `<span style="${o} background-color: ${y.bgColor}; color: ${y.textColor};">
    ${Gn[g] || ""}<span>${d}</span>${ci}
  </span>`;
    },
    ln = () => {
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
    cn = () => {
      const e = document.createElement("div");
      return (
        (e.id = qe),
        (e.style.cssText = `
    all: initial;
    width: 0;
    height: 0;
    overflow: visible;
    display: inline-flex;
    align-items: center;
    margin-left: 8px;
    font-family: ${gi};
    cursor: pointer;
  `),
        e.addEventListener("click", () => {
          chrome.runtime.sendMessage({ type: "OPEN_FEED_PANEL" });
        }),
        e
      );
    },
    oa = () => {
      const e = document.getElementById(qe);
      if (e) return e;
      ln();
      const t = cn(),
        o = document.querySelector('[data-testid="UserName"]');
      if (o)
        return (
          (t.style.alignItems = "flex-start"),
          (t.style.justifyContent = "flex-start"),
          o.appendChild(t),
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
    ia = () => {
      const e = document.getElementById(qe);
      if (e) return e;
      ln();
      const t = cn(),
        i = Qs()?.closest("div");
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
    sa = () => {
      const e = document.getElementById(qe);
      if (e) return e;
      ln();
      const t = cn();
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
    aa = () => {
      const e = document.getElementById(qe);
      if (e) return e;
      ln();
      const t = cn(),
        o = document.querySelector('h1[data-testid="profile-display-name"]');
      if (o) {
        let s = o.parentElement;
        for (; s;) {
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
    la = () => {
      const e = document.getElementById(qe);
      if (e) return e;
      ln();
      const t = cn(),
        o =
          document.querySelector('img[alt*="avatar"][width="112"]') ||
          document.querySelector('img[alt*="avatar"][width="88"]');
      if (!o) return null;
      let i = o.parentElement;
      for (; i && !i.classList.contains("pc-flexDirection-row");)
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
    Jr = (e) =>
      e === "medium"
        ? ia()
        : e === "linkedin"
          ? sa()
          : e === "reddit"
            ? aa()
            : e === "substack"
              ? la()
              : oa();
  let Ot = null,
    Qr = 0;
  const st = async () => {
      const e = ++Qr;
      fi || ((fi = !0), Js());
      const t = pi();
      if (!t) {
        const E = document.getElementById(qe);
        E && E.remove();
        return;
      }
      const o = mi(t),
        i = `${t}:${o}`,
        s = document.getElementById(qe);
      if ((s && s.getAttribute("data-pangram-handle") !== i && s.remove(), !o))
        return;
      if (
        Ve()?.excludedPlatformIds?.some(
          (E) => E.toLowerCase() === o.toLowerCase(),
        )
      ) {
        const E = document.getElementById(qe);
        E && E.remove();
        return;
      }
      const p = Jr(t);
      p &&
        (p.setAttribute("data-pangram-handle", i),
        (p.innerHTML = an("checking") + on));
      const { isAuthenticated: g } = await Jt.get();
      if (!g) {
        if (e !== Qr) return;
        const E = Jr(t);
        E &&
          ((E.innerHTML = an("sign-in") + on),
          (E.onclick = () => window.open(`${Ks}/login`, "_blank")));
        return;
      }
      const y = t === "medium" && Qt(),
        d = i;
      if (d !== hi) {
        ((hi = d), (Kn = new Map()), (Je = null));
        const { map: E, stats: L } = await ea(t, o, y);
        ((Kn = E), (Je = L));
      }
      const k = (await ta()).filter((E) => na(E, o));
      if (e !== Qr) return;
      let M;
      if (Je && Je.total > 0) {
        const E = k.filter((R) => (R.isNewUserScan ? !Kn.has(Yr(R.text)) : !1)),
          L = { ai: 0, mixed: 0, human: 0, aiAssisted: 0 };
        for (const R of E)
          R.category === "ai"
            ? L.ai++
            : R.category === "ai-assisted"
              ? L.aiAssisted++
              : R.category === "mixed"
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
        const E = new Map(Kn);
        for (const L of k) {
          const R = Yr(L.text);
          E.has(R) || E.set(R, L.category);
        }
        M = ra(E);
      }
      const B = Jr(t);
      if (!B) {
        (Ot && clearTimeout(Ot), (Ot = setTimeout(() => st(), 1e3)));
        return;
      }
      const N = sn(o),
        I = Array.from(
          document.querySelectorAll("[data-pangram-post-id]"),
        ).some((E) => {
          const L = E.getAttribute("data-pangram-author-handle");
          return !!L && sn(L) === N;
        });
      M.total === 0 && I
        ? ((B.innerHTML = an("checking") + on),
          Ot && clearTimeout(Ot),
          (Ot = setTimeout(() => st(), 600)))
        : M.total === 0
          ? (B.innerHTML = an("nothing-scanned") + on)
          : (B.innerHTML = an("results", M) + on);
    },
    ca =
      '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    un = "pangram-result-toast",
    ua = 6e3;
  let gt = null;
  const da = () => {
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
    #${un} {
      animation: pangram-toast-in 0.22s ease forwards;
    }
    #${un}.pangram-toast-hiding {
      animation: pangram-toast-out 0.18s ease forwards;
    }
  `),
        document.head.appendChild(e));
    },
    eo = () => {
      const e = document.getElementById(un);
      e &&
        (e.classList.add("pangram-toast-hiding"),
        setTimeout(() => e.remove(), 200),
        gt && (clearTimeout(gt), (gt = null)));
    },
    fa = (e, t, o, i) => {
      (da(),
        document.getElementById(un)?.remove(),
        gt && (clearTimeout(gt), (gt = null)));
      const s = Zn(t),
        c = nn(),
        p = document.createElement("div");
      ((p.id = un),
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
              ...(o && { postId: o }),
            }),
            eo());
        }),
        (g.innerHTML = `${Gn[t] || ""}<span>${e}</span>${i ? ca : ""}`));
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
          (d.preventDefault(), d.stopPropagation(), eo());
        }),
        p.appendChild(g),
        p.appendChild(y),
        document.body.appendChild(p),
        (gt = setTimeout(eo, ua)));
    },
    yt = (e, t) =>
      Vr.get(t) ||
      document.querySelector(
        Ss(e.postContainerSelector, `[data-pangram-post-id="${t}"]`),
      ),
    Yn = (e, t, o) => {
      let i = t.parentElement;
      for (; i && i !== e;) {
        const s = Ae(i, t, o);
        if (s) return s;
        i = i.parentElement;
      }
      return Ae(e, t, o);
    },
    pa = (e, t) => {
      let o = t.parentElement;
      for (; o && o !== e;) {
        const i = Ae(o, t, tn, Mt);
        if (i) return i;
        o = o.parentElement;
      }
      return Ae(e, t, tn, Mt);
    },
    ma = (e) => {
      const t = Wn(
        (e || "").split(`
`)[0] || "",
      );
      return t.split(/\s[·•|]\s/)[0]?.trim() || t;
    },
    to = (e, t) => {
      const o = t ? pa(e, t) : Ae(e, e, tn, Mt);
      if (!o) return null;
      const i = o.closest(Vn);
      return (
        (i &&
          Array.from(
            i.querySelectorAll('h2, span[aria-hidden="true"], p'),
          ).find(Mt)) ||
        o
      );
    },
    no = (e, t, o, i, s, c) => {
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
      if (j.silentMode && i === "human") return;
      const k = zs(s, i, t);
      try {
        Ft(
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
    dn = (e) => {
      if (j.silentMode) return;
      const t = [];
      De && t.push(De);
      for (const o of ze) t.push(o.postId);
      for (const o of t) {
        const i = yt(e, o);
        if (!i) continue;
        const s =
          i.querySelector(`[data-pangram-text-id="${o}"]`) ||
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
            y = js(i.offsetWidth);
          Ft(
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
    ha = (e, t) => {
      const o = Ve();
      if (o && t) {
        const i = (() => {
            if (o.source !== "x-article" || yt(o, t)) return o;
            const I = Ye.find((E) => E.source === "x-post") ?? null;
            return I && yt(I, t) ? I : o;
          })(),
          s = e.prediction || "",
          c = e.badge_category,
          p =
            c === "ai-assisted"
              ? "AI-Assisted"
              : e.prediction_short || s || "Unknown",
          g = c || Zs(p),
          y = e.text_query
            ? `${Hr}/feed/${encodeURIComponent(e.text_query)}`
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
        for (const I of [
          "fraction_ai",
          "fraction_mixed",
          "fraction_human",
          "fraction_ai_assisted",
          "version",
          "headline",
          "subtitle",
        ])
          I in e && (v[I] = e[I]);
        const k = e;
        k.fraction_breakdown && (v.fraction_breakdown = k.fraction_breakdown);
        const M = Wr.get(t) || i.defaultContentType,
          B = jn.get(t);
        if (B) {
          zr.set(B, { prediction: s, category: g, label: p, dashboardUrl: y });
          try {
            let I = "";
            const E = yt(i, t),
              L =
                E?.querySelector(`[data-pangram-text-id="${t}"]`) ||
                E?.querySelector(i.postTextSelector);
            if (E) {
              const q = E.getAttribute("post-title");
              if (
                (q
                  ? (I = q.trim())
                  : i.titleSelector &&
                    (I = (
                      E.querySelector(i.titleSelector)?.textContent || ""
                    ).trim()),
                !I && i.source !== "substack-post")
              ) {
                const D = E.getAttribute("aria-label");
                D && (I = D.trim());
              }
            }
            let R = "",
              W = "",
              Y = "",
              re = "";
            if (E) {
              if (i.authorSelector && i.source !== "linkedin-post") {
                const q = L
                  ? Yn(E, L, i.authorSelector)
                  : E.querySelector(i.authorSelector);
                q && (R = (q.textContent || "").trim());
              }
              if (
                (R || (R = E.getAttribute("author") || ""),
                !R && i.source === "reddit-post")
              ) {
                const q = E.querySelector('a[href^="/user/"]');
                q &&
                  (R =
                    q
                      .getAttribute("href")
                      ?.replace(/^\/user\//, "")
                      .replace(/\/$/, "") || "");
              }
              if (i.source === "linkedin-post") {
                const q = Wn(R);
                Jo(q) || (R = "");
              }
              if (!R && i.source === "linkedin-post") {
                const q = to(E, L);
                q && (R = ma(q.textContent || ""));
              }
              if (i.source === "linkedin-post") {
                const D = to(E, L)?.closest(Vn)?.getAttribute("href");
                if (D) {
                  const Q = D.startsWith("http") ? new URL(D).pathname : D,
                    ee = E.querySelector(`a[href*="${Q}"] img[src]`);
                  ee?.src && (Y = ee.src);
                }
              } else if (i.source === "substack-post") {
                const q =
                  E.querySelector(
                    '[class*="byline-wrapper"] img[alt*="avatar"][src]',
                  ) || E.querySelector('a[href^="/@"] img[alt*="avatar"][src]');
                q && (Y = q.currentSrc || q.src);
              } else if (i.source === "reddit-post") {
                const D = E.querySelector(
                  'a[href^="/user/"] svg image[href]',
                )?.getAttribute("href");
                D && (Y = D);
              } else if (i.source === "medium-post") {
                const q = E.querySelector(
                  'img[data-testid="authorPhoto"][src]',
                );
                q?.src && (Y = q.src);
              } else {
                const q = Array.from(
                    E.querySelectorAll('[data-testid="Tweet-User-Avatar"]'),
                  ),
                  D =
                    q.find((Q) => !Q.closest('[role="link"][tabindex="0"]')) ||
                    q[0];
                if (D) {
                  const Q = D.querySelector("img[src]");
                  Q?.src && (Y = Q.src);
                }
              }
              if (i.source === "linkedin-post") {
                const D = to(E, L)?.closest(Vn)?.getAttribute("href") || "",
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
                      ? Yn(E, L, i.authorSelector)
                      : E.querySelector(i.authorSelector)
                    )?.querySelectorAll('a[href^="/"]') || [],
                  Q = D.length > 1 ? D[1] : D[0];
                if (Q) {
                  const xe = (Q.getAttribute("href") || "").split("/")[1];
                  if (xe) {
                    W = `@${xe}`;
                    const Me = R.indexOf(`@${xe}`);
                    Me > 0 && (R = R.substring(0, Me).trim());
                  }
                }
              } else if (i.source === "substack-post") {
                const q =
                    '[class*="weight-medium"] a.link-LIBpto:not([title])[href^="/@"], [class*="weight-medium"] a.link-LIBpto:not([title])[href^="/profile/"]',
                  D = L ? Yn(E, L, q) : E?.querySelector(q);
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
                    xe && (R = xe);
                  }
                }
              } else if (i.source === "reddit-post")
                if (R) W = R.toLowerCase();
                else {
                  const q = window.location.pathname.match(/^\/user\/([^/]+)/);
                  q && (W = q[1].toLowerCase());
                }
              if (i.dateSelector) {
                const q = L
                  ? Yn(E, L, i.dateSelector)
                  : E.querySelector(i.dateSelector);
                q &&
                  ((re = q.getAttribute("datetime") || ""),
                  re ||
                    ((re = (
                      q.querySelector('span[aria-hidden="true"]')
                        ?.textContent ||
                      q.textContent ||
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
              const q = E.querySelectorAll(i.postTextSelector),
                D = q[0];
              O =
                q.length > 1 &&
                L &&
                D !== L &&
                !D?.contains(L) &&
                !L.contains(D)
                  ? void 0
                  : Vo(i, E);
            }
            let $ = "";
            if (i.source === "medium-post") {
              const q = document.querySelectorAll(
                'script[type="application/ld+json"]',
              );
              for (const D of Array.from(q))
                try {
                  const Q = JSON.parse(D.textContent || "");
                  if (Q.publisher?.name) {
                    $ = Q.publisher.name;
                    break;
                  }
                } catch {}
              if (!$) {
                const D = document.title.split("|").map((Q) => Q.trim());
                D.length >= 4 &&
                  D[D.length - 1] === "Medium" &&
                  ($ = D[D.length - 3] || "");
              }
            } else
              i.publicationSelector &&
                ($ = (
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
                  : `${window.location.origin}${D}`);
            }
            const fe = Gr(i.source),
              ve = Uo.get(t) || window.location.href;
            chrome.runtime
              .sendMessage({
                type: "FEED_SCAN_RESULT",
                scanUrl: ve,
                ...(fe && { profileInfo: fe }),
                entry: {
                  postId: t,
                  title: I,
                  text: B.length <= 100 ? B : B.slice(0, 100).trim(),
                  wordCount: en(B),
                  prediction: s,
                  predictionShort: p,
                  ...(e.headline && { headline: e.headline }),
                  category: g,
                  source: i.source,
                  timestamp: Date.now(),
                  contentType: M,
                  ...(R && { author: R }),
                  ...(W && { authorHandle: W }),
                  ...(Y && { authorImageUrl: Y }),
                  ...(re && { postDate: re }),
                  ...(ie && { postUrl: ie }),
                  ...(y && { dashboardUrl: y }),
                  ...(O && { engagement: O }),
                  ...($ && { publication: $ }),
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
        const N = B ? Hn.get(B) : null;
        if (N) for (const I of N) no(i, I, s, g, p);
        else no(i, t, s, g, p);
        if (i.source === "medium-post")
          try {
            const E = window.location.pathname;
            chrome.storage.local.get("pangram_article_results").then((L) => {
              const R = L.pangram_article_results || {};
              R[E] = {
                category: g,
                label: p,
                ...(y && { dashboardUrl: y }),
                ts: Date.now(),
              };
              const W = Object.keys(R);
              if (W.length > 500) {
                const Y = W.sort((re, O) => (R[re].ts || 0) - (R[O].ts || 0));
                for (const re of Y.slice(0, W.length - 500)) delete R[re];
              }
              chrome.storage.local.set({ pangram_article_results: R });
            });
          } catch {}
        M === "long_post" && fa(p, g, t, y);
      }
      if ((st(), t !== void 0 && Nt.has(t))) {
        Nt.delete(t);
        return;
      }
      (t === void 0 || t === De) && (rn(), o && dn(o));
    },
    ga = (e, t) =>
      e === 429 && !!t?.toLowerCase().includes("daily feed scan limit"),
    ya = (e, t) => {
      const o = t?.toLowerCase() ?? "";
      return (
        e === 429 ||
        o.includes("too many requests") ||
        o.includes("rate limit") ||
        o.includes("throttle")
      );
    },
    wa = (e) => {
      const t = nn();
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
    va = (e, t, o) => {
      if (e === "Too short to check") return li();
      const i = document.createElement("span");
      return (
        (i.className = Te),
        (i.textContent = e),
        (i.style.cssText = `
    font-size: 12px;
    font-weight: 400;
    font-style: italic;
    color: ${wa(t)};
    white-space: nowrap;
    margin-right: 4px;
    flex-shrink: 0;
  `),
        o &&
          ((i.style.cursor = "pointer"),
          (i.style.textDecoration = "underline"),
          (i.style.textUnderlineOffset = "2px"),
          i.addEventListener("click", (s) => {
            (s.preventDefault(), s.stopPropagation(), o());
          })),
        i
      );
    },
    xa = (e) => {
      if (!j.safeSendMessageRef || De === e || ze.some((i) => i.postId === e))
        return !1;
      const t = Wo.get(e);
      if (!t) return !1;
      ze.unshift({ ...t });
      const o = Ve();
      if (o) {
        const s = yt(o, e)?.querySelector(`.${Te}`);
        (s &&
          (s.parentElement?.classList.contains("pangram-badge-wrapper")
            ? s.parentElement.remove()
            : s.remove()),
          dn(o));
      }
      return (Xn(j.safeSendMessageRef), !0);
    },
    fn = (e, t, o, i) => {
      if (j.silentMode) return;
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
        v = va(o, e.source, i);
      Ft(
        s,
        p,
        v,
        y,
        e.source,
        d,
        e.badgeBoundarySelector || e.commentContainerSelector,
      );
    },
    yi = (e, t, o) => {
      const i = Ve();
      if (ga(o, t)) {
        const s = "Daily limit reached";
        for (
          j.quotaExhausted ||
            chrome.runtime
              .sendMessage({ type: "FEED_QUOTA_EXCEEDED" })
              .catch(() => {}),
            j.quotaExhausted = !0,
            j.quotaErrorLabel = s,
            i && e && fn(i, e, s);
          ze.length > 0;
        ) {
          const c = ze.shift();
          i && fn(i, c.postId, s);
        }
        rn();
        return;
      }
      if (i && e) {
        const s =
            t === "Too short to check" ||
            !!t?.toLowerCase().includes("submit at least"),
          c = ya(o, t);
        s
          ? fn(i, e, "Too short to check")
          : c
            ? fn(i, e, "Rate limited, retry", () => xa(e))
            : fn(i, e, "Could not check");
      }
      if (e !== void 0 && Nt.has(e)) {
        Nt.delete(e);
        return;
      }
      (e === void 0 || e === De) && (rn(), i && dn(i));
    },
    Ca =
      'a[href*="linkedin.com/in/"], a[href^="/in/"], a[href*="linkedin.com/company/"], a[href^="/company/"]',
    Sa = (e) => {
      let t = e.parentElement;
      for (; t && t !== document.body;) {
        if (
          t.querySelector(":scope > h2") ||
          t.classList.contains("fie-impression-container")
        )
          return null;
        if (
          t.tagName === "DIV" &&
          t.querySelector(Ca) &&
          t.querySelector('[data-testid="expandable-text-box"]') &&
          ba(t)
        )
          return t;
        t = t.parentElement;
      }
      return null;
    },
    ba = (e) => {
      const t = Array.from(e.querySelectorAll("button"));
      for (const o of t) {
        const i = o.getAttribute("aria-label") || "";
        if (/[''\u2019]s comment/.test(i) || o.textContent?.trim() === "Reply")
          return !0;
      }
      return !1;
    },
    Jn = (e, t) => {
      const o = Array.from(e.querySelectorAll("p"))
        .map((i) => (i.textContent || "").trim())
        .filter(Boolean);
      if (o.length > 0)
        return o.join(`
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
    Qn = (e) => e.replace(/\s+/g, " ").trim().slice(0, 40),
    wi = (e, t) => {
      const o = e.getAttribute("data-pangram-text-key");
      return o === null || Qn(t.textContent || "") === o
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
    vi = (e) => {
      const t = document.querySelectorAll(e.postTextSelector),
        o = [];
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
            e.source === "substack-post" ? Jn(c) : (c.textContent || "").trim();
          if (!g) return;
          const y = s.get(p);
          y ? y.texts.push(g) : s.set(p, { element: c, texts: [g] });
        }),
          s.forEach(({ element: c, texts: p }, g) => {
            const y = p.join(`

`);
            y && o.push({ element: c, text: y, container: g });
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
            const E = Sa(p);
            if (E) {
              if (E.hasAttribute("data-pangram-scanned")) {
                if (c.has(E)) return;
                if (!wi(E, p)) {
                  c.add(E);
                  return;
                }
              }
              const L = p.cloneNode(!0);
              L.querySelectorAll(
                '[data-testid="expandable-text-button"]',
              ).forEach((W) => W.remove());
              const R = Jn(L, p);
              R &&
                (E.setAttribute("data-pangram-comment", ""),
                o.push({ element: p, text: R, container: E, isComment: !0 }));
              return;
            }
          }
          const g = p.closest(e.postContainerSelector);
          if (!g) return;
          const y = (p.innerText || p.textContent || "").trim();
          if (g.hasAttribute("data-pangram-scanned")) {
            if (c.has(g))
              if (
                !(
                  !!g.querySelector(".pangram-badge-wrapper") ||
                  !!g.querySelector(".pangram-feed-badge")
                ) &&
                en(y) >= e.minWords
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
            else if (!wi(g, p))
              if (
                !(
                  !!g.querySelector(".pangram-badge-wrapper") ||
                  !!g.querySelector(".pangram-feed-badge")
                ) &&
                en(y) >= e.minWords
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
              (d = Jn(E, p)));
          } else
            e.source === "substack-post"
              ? (d = Jn(p))
              : (d = (p.innerText || p.textContent || "").trim());
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
            const E = Es(p);
            E && ((d = E), (v = !0));
          } else if (
            e.source === "substack-post" &&
            ((k = !!(
              e.showMoreSelector && g.querySelector(e.showMoreSelector)
            )),
            k)
          ) {
            const E = _s(p);
            E && ((d = E), (v = !0));
          }
          if (!d) return;
          const M = en(d);
          let B = g;
          if (e.source === "linkedin-post") {
            let E = p;
            for (; E && E !== g && E.parentElement !== g;) E = E.parentElement;
            E && E !== g && (B = E);
          }
          const N = s.get(g) ?? new Map();
          s.set(g, N);
          const I = N.get(B);
          (!I || M > I.wordCount) &&
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
                o.push({
                  element: y,
                  text: d,
                  container: g,
                  fiberFullText: v,
                  hasShowMore: k,
                });
              },
            );
          }));
      }
      return o;
    },
    be = (e, t) => {
      if (j.platformDisabled) return;
      const o = t ?? Ve();
      if (!o) return;
      const i = vi(o);
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
            const k = As(o, g, c);
            if (
              k?.platformId &&
              o.excludedPlatformIds?.some(
                (U) => U.toLowerCase() === k.platformId.toLowerCase(),
              )
            ) {
              (g.setAttribute("data-pangram-scanned", "true"),
                g.setAttribute("data-pangram-text-key", Qn(p)));
              return;
            }
            const M = en(p),
              B =
                o.source === "linkedin-post" &&
                !v &&
                g.querySelectorAll('[data-testid="expandable-text-box"]')
                  .length > 1,
              N = v || B ? (o.commentMinWords ?? o.minWords) : o.minWords,
              I =
                v && o.commentBadgeInsertion
                  ? o.commentBadgeInsertion
                  : o.badgeInsertion,
              E =
                v && o.commentBadgeAlignment != null
                  ? o.commentBadgeAlignment
                  : o.badgeAlignment;
            if (M < N && !(d && !y)) {
              if (
                (g.setAttribute("data-pangram-scanned", "true"),
                g.setAttribute("data-pangram-text-key", Qn(p)),
                !j.silentMode)
              ) {
                const U = li();
                Ft(
                  g,
                  c,
                  U,
                  I,
                  o.source,
                  E,
                  o.badgeBoundarySelector || o.commentContainerSelector,
                );
              }
              return;
            }
            (g.setAttribute("data-pangram-scanned", "true"),
              g.setAttribute("data-pangram-text-key", Qn(p)),
              y && g.setAttribute("data-pangram-fiber-full-text", "true"));
            const L = o.maxWords ? Cs(p, o.maxWords) : p;
            let R = bs(o.source, p);
            if (document.querySelector(`[data-pangram-post-id="${R}"]`)) {
              let U = 1;
              for (
                ;
                document.querySelector(`[data-pangram-post-id="${R}-${U}"]`);
              )
                U++;
              R = `${R}-${U}`;
            }
            const W = window.location.href;
            (g.setAttribute("data-pangram-post-id", R),
              Vr.set(R, g),
              c.setAttribute("data-pangram-text-id", R),
              Uo.set(R, W));
            let Y = o.defaultContentType;
            (v
              ? (Y = "comment")
              : Y !== "long_post" &&
                o.source === "substack-post" &&
                /^\/p\/|^\/home\/post\/p-|^\/@[^/]+\/p-/.test(
                  window.location.pathname,
                ) &&
                g.closest("article.post") &&
                (Y = "long_post"),
              Wr.set(R, Y));
            const re = zr.get(L);
            if (re) {
              no(o, R, re.prediction, re.category, re.label, re.dashboardUrl);
              return;
            }
            if (j.quotaExhausted && j.quotaErrorLabel && !j.silentMode) {
              const U = document.createElement("span");
              ((U.className = Te),
                (U.textContent = j.quotaErrorLabel),
                (U.style.cssText = `
        font-size: 11px;
        font-weight: 400;
        font-style: italic;
        color: #919EAB;
        white-space: nowrap;
        margin-right: 4px;
        flex-shrink: 0;
      `),
                (U.style.opacity = "0.5"),
                (U.style.transition = "opacity 0.2s ease"),
                U.classList.add("pangram-feed-badge-hover"),
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
                Ft(
                  g,
                  c,
                  U,
                  I,
                  o.source,
                  E,
                  o.badgeBoundarySelector || o.commentContainerSelector,
                ));
              return;
            }
            const O = Hn.get(L);
            if (O) {
              (O.push(R), jn.set(R, L));
              return;
            }
            (Hn.set(L, [R]), jn.set(R, L), s++);
            const $ = Ls(o, g);
            k?.platformId &&
              g.setAttribute(
                "data-pangram-author-handle",
                k.platformId.toLowerCase(),
              );
            let ie;
            if (o.source === "linkedin-post" && k) {
              const U = Array.from(
                g.querySelectorAll(
                  'a[href*="linkedin.com/in/"], a[href^="/in/"], a[href*="linkedin.com/company/"], a[href^="/company/"]',
                ),
              );
              for (const se of U) {
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
            } else if (o.source === "x-post" || o.source === "x-article") {
              let U = null,
                se = c.parentElement;
              for (
                ;
                se &&
                se !== g &&
                ((U = se.querySelector('[data-testid="Tweet-User-Avatar"]')),
                !U);
              )
                se = se.parentElement;
              if (!U) {
                const w = Array.from(
                  g.querySelectorAll('[data-testid="Tweet-User-Avatar"]'),
                );
                U =
                  w.find((A) => !A.closest('[role="link"][tabindex="0"]')) ||
                  w[0] ||
                  null;
              }
              const ke = U?.querySelector("img[src]");
              ke?.src && (ie = ke.src);
            } else if (o.source === "substack-post") {
              const U =
                g.querySelector(
                  '[class*="byline-wrapper"] img[alt*="avatar"][src]',
                ) || g.querySelector('a[href^="/@"] img[alt*="avatar"][src]');
              U && (ie = U.currentSrc || U.src);
            } else if (o.source === "reddit-post") {
              const se = g
                .querySelector('a[href^="/user/"] svg image[href]')
                ?.getAttribute("href");
              se && (ie = se);
            } else if (o.source === "medium-post") {
              const U = g.querySelector('img[data-testid="authorPhoto"][src]');
              U?.src && (ie = U.src);
            }
            const fe = o.dateSelector || "time",
              q = g.querySelector(fe)?.closest("a")?.getAttribute("href"),
              D = q
                ? q.startsWith("http")
                  ? q
                  : `${window.location.origin}${q}`
                : "";
            let Q = "";
            const ee = g.getAttribute("post-title");
            if (
              (ee
                ? (Q = ee.trim())
                : o.titleSelector &&
                  (Q = (
                    g.querySelector(o.titleSelector)?.textContent || ""
                  ).trim()),
              !Q && o.source !== "substack-post")
            ) {
              const U = g.getAttribute("aria-label");
              U && (Q = U.trim());
            }
            const xe = Vo(o, g);
            let Me;
            if (o.dateSelector) {
              const U = g.querySelector(o.dateSelector);
              if (U) {
                const se = U.getAttribute("datetime");
                se && (Me = se);
              }
            }
            const ce = {
              textToScan: L,
              postId: R,
              source: o.source,
              contentType: Y,
              url: D || window.location.href,
              author: k,
              publication: $,
              ...(Q && { title: Q }),
              ...(ie && { authorProfileImageUrl: ie }),
              ...(xe && { engagement: xe }),
              ...(Me && { sourceDate: Me }),
            };
            (Wo.set(R, ce), ze.push(ce));
          },
        ),
        dn(o),
        s > 0 && Zr(!0),
        Xn(e),
        !t && o.source === "x-article")
      ) {
        const c = Ye.find((p) => p.source === "x-post");
        c && be(e, c);
      }
    },
    ro = (e, t, o) => {
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
        setTimeout(() => be(t, o), 300));
    },
    Ea = (e) => {
      document.addEventListener(
        "click",
        (t) => {
          const o = t.target,
            i =
              o.closest(
                'button[aria-label="Show translation"], button[aria-label="Show original"]',
              ) || o.closest("button");
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
            setTimeout(() => ro(c, e), 500);
        },
        !0,
      );
    },
    xi = "pangram_article_results",
    Ci = "data-pangram-backfill",
    ka = {
      ai: "AI Detected",
      "ai-assisted": "AI-Assisted",
      mixed: "Mixed",
      human: "Human Written",
    },
    _a = (e) => {
      const t = e.category,
        o = Zn(t),
        i = ka[t] || e.label,
        s = document.createElement("span");
      return (
        (s.className = Te),
        (s.innerHTML = `${Gn[t] || ""}`),
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
    background-color: ${o.bgColor};
    color: ${o.textColor};
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
    Ta = (e, t) => {
      const o = e.querySelector(
        `button[aria-label="I'm not interested in this story"]`,
      );
      if (!o) return;
      const i = o.parentElement?.parentElement?.parentElement;
      if (!i) return;
      const s = document.createElement("div");
      ((s.style.cssText =
        "width:0;height:0;overflow:visible;position:relative;display:inline-block;flex-shrink:0;"),
        s.appendChild(_a(t)),
        i.insertAdjacentElement("beforebegin", s));
    },
    Si = () => {
      const e = Array.from(
        document.querySelectorAll(`[role="link"][data-href]:not([${Ci}])`),
      );
      e.length &&
        chrome.storage.local.get(xi).then((t) => {
          const o = t[xi] || {};
          for (const i of e) {
            i.setAttribute(Ci, "true");
            const s = i.getAttribute("data-href");
            if (s)
              try {
                const c = new URL(s).pathname,
                  p = o[c];
                p && Ta(i, p);
              } catch {}
          }
        });
    },
    Aa = 600;
  let er = null,
    oo = !1;
  const La = () => {
      (oo ||
        (er === null
          ? (er = window.scrollY)
          : Math.abs(window.scrollY - er) >= Aa &&
            ((oo = !0),
            chrome.runtime
              .sendMessage({ type: "PAGE_SCROLL" })
              .catch(() => {}))),
        j.scrollScanTimer && clearTimeout(j.scrollScanTimer),
        (j.scrollScanTimer = setTimeout(() => {
          j.safeSendMessageRef && be(j.safeSendMessageRef);
        }, 500)));
    },
    Ra = () => {
      ((er = null), (oo = !1));
    },
    Ia = () => {
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
            window.open(`${Hr}/chrome/login`, "_blank"));
        }),
        e
      );
    },
    bi = (e) => {
      if (!e) return;
      const t = vi(e);
      for (const { element: o, container: i } of t) {
        if (i.hasAttribute("data-pangram-scanned")) continue;
        i.setAttribute("data-pangram-scanned", "true");
        const s = Ia();
        Ft(
          i,
          o,
          s,
          e.badgeInsertion,
          e.source,
          e.badgeAlignment,
          e.badgeBoundarySelector || e.commentContainerSelector,
        );
      }
      if (e.source === "x-article") {
        const o = Dn.configs["x-post"];
        o && bi(o);
      }
    },
    Ei = () => {
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
        Hn.clear(),
        jn.clear(),
        Wr.clear(),
        Vr.clear(),
        Xs());
    },
    io = () => {
      (Ei(), zr.clear());
    },
    ki = () => {
      Ei();
    };
  let _i = !1,
    Ti = !1;
  const Ma = () => {
      Ti ||
        ((Ti = !0),
        chrome.runtime
          .sendMessage({ type: "OPEN_CONSENT_TAB" })
          .catch(() => {}));
    },
    tr = async (e) => {
      const t = Ve();
      if (!t) return;
      t.source === "x-post" ? ks() : t.source === "substack-post" && Ts();
      const { isAuthenticated: o, user: i } = await Jt.get();
      if (!o) {
        const p = () => bi(Ve());
        (p(),
          setTimeout(p, 2e3),
          setTimeout(p, 5e3),
          window.addEventListener("scroll", p, { passive: !0 }));
        return;
      }
      if (!(
        !!i?.plan?.active ||
        !!i?.institutionalLicense?.active ||
        !!i?.individualLicense?.active ||
        !!i?.organizationLicense?.active
      ))
        return;
      ((j.safeSendMessageRef = e),
        (j.onScanTimeout = (p) => yi(p)),
        (j.getActiveSiteConfigRef = Ve),
        (j.updateLoadingBadgesRef = dn));
      const c = window.location.hostname;
      if (
        (Ho(t.source).some((p) => c === p || c.endsWith(`.${p}`)) ||
          chrome.runtime.sendMessage({ type: "ENABLE_SIDE_PANEL" }),
        (j.scanPostsRef = be),
        st(),
        setTimeout(() => {
          const p = Gr(t.source);
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
        Ea(e),
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
                  const I = M.closest(
                    '[data-testid="twitterArticleReadView"] article[data-pangram-scanned]',
                  );
                  if (I) {
                    const E = Dn.configs["x-post"];
                    ro(I, e, E);
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
                  ro(B, e);
              }
          }).observe(document.body, { childList: !0, subtree: !0 }),
        t.source === "medium-post" && Si(),
        !_i)
      ) {
        if (((_i = !0), t.source !== "x-post")) {
          let v = null,
            k = null,
            M = 0;
          const B = 200,
            N =
              document.querySelector('[data-testid="primaryColumn"]') ||
              document.body,
            I = (R) => {
              if (R.nodeType !== Node.ELEMENT_NODE) return !1;
              const W = R,
                Y = W.className;
              return !!(
                (typeof Y == "string" &&
                  (Y.includes("pangram-") || Y.includes(Te))) ||
                W.id?.startsWith("pangram-")
              );
            };
          let E = null;
          new MutationObserver((R) => {
            let W = !1;
            for (const re of R) {
              for (let O = 0; O < re.addedNodes.length; O++)
                if (!I(re.addedNodes[O])) {
                  W = !0;
                  break;
                }
              if (W) break;
              for (let O = 0; O < re.removedNodes.length; O++)
                if (!I(re.removedNodes[O])) {
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
                (k && clearTimeout(k), (k = setTimeout(() => Si(), 500))));
          }).observe(N, { childList: !0, subtree: !0 });
        }
        (window.addEventListener("scroll", La, { passive: !0 }),
          chrome.runtime.onMessage.addListener((v) => {
            v.type === "RESET_SCROLL_ANCHOR" && Ra();
          }));
        let p = window.location.href;
        const g = () => {
          const v = window.location.href;
          if (v === p) return;
          ((p = v),
            ki(),
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
              const N = Gr(t.source);
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
                (ki(),
                setTimeout(() => be(e), 100),
                setTimeout(() => be(e), 800),
                setTimeout(() => be(e), 2e3));
            }));
      }
    },
    Ai = async (e) => {
      {
        const c = "pangram-remote-site-config";
        let p = null;
        try {
          p = (await chrome.storage.local.get(c))[c] ?? null;
        } catch {}
        ls((p ?? Dn).configs);
      }
      const t = Ve();
      if (!t) return;
      const o = $o[t.source];
      (chrome.storage.onChanged.addListener((c, p) => {
        if (p !== "local") return;
        const g = "setting-storage-key";
        if (!(g in c)) return;
        const y = c[g].newValue;
        if (!y) return;
        const d = c[g].oldValue;
        if (d && !d.feedScanConsentAnswered && y.feedScanConsentAnswered) {
          j.platformDisabled ||
            ((j.silentMode = y.feedScanMode === "silent"), tr(e));
          return;
        }
        const v = o && y.feedScanPlatforms?.[o] === !1;
        v && !j.platformDisabled
          ? ((j.platformDisabled = !0), io())
          : !v &&
            j.platformDisabled &&
            ((j.platformDisabled = !1), io(), tr(e));
        const k = y.feedScanMode === "silent";
        k !== j.silentMode &&
          ((j.silentMode = k), io(), j.platformDisabled || tr(e));
      }),
        await ss);
      const i = await rt.get(),
        { isAuthenticated: s } = await Jt.get();
      if (s && !i.feedScanConsentAnswered) {
        Ma();
        return;
      }
      if (o && i.feedScanPlatforms?.[o] === !1) {
        j.platformDisabled = !0;
        return;
      }
      ((j.silentMode = i.feedScanMode === "silent"), await tr(e));
    };
  ts();
  let Li = 0,
    wt = !1,
    so = null,
    pn = { docId: "", maxRev: 0, data: void 0 };
  const ao = () => {
      try {
        return !!chrome.runtime?.id;
      } catch {
        return !1;
      }
    },
    _e = (e) => {
      if (ao())
        try {
          chrome.runtime.sendMessage(e).catch(() => {
            e.type === "DETECT" && rn();
          });
        } catch {
          e.type === "DETECT" && rn();
        }
    };
  function lo(e) {
    return new Promise((t) => {
      if (!ao()) {
        t(void 0);
        return;
      }
      try {
        chrome.runtime.sendMessage(e, (o) => {
          if (chrome.runtime.lastError) {
            (console.warn("sendMessage lastError", chrome.runtime.lastError),
              t(void 0));
            return;
          }
          t(o);
        });
      } catch (o) {
        (console.warn("sendMessage threw", o), t(void 0));
      }
    });
  }
  const mn = (e) =>
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
    Pa = 3e3;
  (chrome.runtime.onMessage.addListener((e, t, o) => {
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
    if (e.source && xs(e.source) && vs()) {
      (e.type === "RESPONSE" &&
        e.message?.response &&
        ha(e.message.response, e.postId),
        e.type === "ERROR" &&
          e.message &&
          (console.warn(
            "[Pangram] Feed Scanner error:",
            e.message.errorMessage,
          ),
          yi(e.postId, e.message.errorMessage, e.message.statusCode)));
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
        (document.body.removeChild(i), o({ text: s }));
      } catch (i) {
        (console.error("Failed to get clipboard text:", i), o({ text: "" }));
      }
  }),
    window.addEventListener("message", async (e) => {
      const { type: t, payload: o } = e.data;
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
        (!o || typeof o != "object" || !("user" in o))
      )
        return;
      const i = new URL(Hr).origin;
      if (e.origin === i) {
        if (t === "CHROME_EXTENSION_MESSAGE") {
          const { user: s } = o;
          Jt.login({ user: s })
            .then(() => {
              const c = document.getElementById("pangram-feed-controls");
              (c && c.remove(), Ai(_e));
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
          const c = Object.entries(o).map(([p, g]) =>
            rt.setFeedScanPlatform(p, g),
          );
          (await Promise.all(c),
            chrome.runtime.sendMessage({ type: "CLOSE_DETAIL_VIEW" }));
          return;
        }
        if (t === "CHROME_EXTENSION_LOGOUT") {
          Jt.logOut();
          return;
        }
      }
    }));
  const Fa = () => {
      try {
        const t = document.querySelectorAll(".kix-canvas-tile-content g");
        if (!t || t.length === 0) return "";
        const o = (s, c) =>
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
                ((p = o(p, v)), (g = y));
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
    Na = async () => {
      let e = null;
      const t = null;
      try {
        const o = await lo({ type: "GET_DOC_TEXT_VIA_MAIN" });
        if (o && o.text != null && o.text !== "")
          return (
            (wt = !1),
            {
              textContent: o.text,
              selection: o.selection,
              accessTool: "AnnotateAccessorAPI",
            }
          );
        console.error("mainResult not found");
      } catch (o) {
        console.error("GET_DOC_TEXT_VIA_MAIN failed", o);
      }
      return (
        e == null && (e = Oa()),
        { textContent: e, selection: t, accessTool: "KixObject" }
      );
    };
  function Oa() {
    try {
      const e = document.querySelector("iframe.docs-texteventtarget-iframe"),
        t =
          e &&
          (e.contentDocument || (e.contentWindow && e.contentWindow.document)),
        o = t && t.querySelector('[contenteditable="true"]'),
        s = ((o && (o.innerText || o.textContent)) || "" || "").trim();
      return s.length > 0 ? s : null;
    } catch (e) {
      return (console.warn("[Pangram] getKixDocumentText failed", e), null);
    }
  }
  const Da = async () => {
      const e = document.getElementsByTagName("script");
      let t = "";
      for (let o = 0; o < e.length; o++) {
        const i = e[o];
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
    nr = async (e) => {
      const { textContent: t, selection: o, accessTool: i } = await Na();
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
            { textContent: t, selection: o, accessTool: i }
          );
      } else if (e === "selection") {
        let c = "";
        if (
          t &&
          o &&
          typeof o.start == "number" &&
          typeof o.end == "number" &&
          o.end > o.start
        )
          try {
            c = t.substring(o.start, o.end).trim();
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
            { textContent: c, selection: o, accessTool: i }
          );
        {
          const p = mn("Is this an empty selection?");
          return (
            _e({ type: "ERROR_MESSAGE", errorMessage: p }),
            { textContent: t, selection: o, accessTool: null }
          );
        }
      }
      wt = !1;
      const s = await Da();
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
        const c = Fa();
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
          const p = mn("Is this an empty document?");
          _e({ type: "ERROR_MESSAGE", errorMessage: p });
        }
      }
      return { textContent: null, selection: null, accessTool: null };
    },
    Ba = () => {
      document
        .querySelectorAll(".pangram-button-container")
        .forEach((e) => e.remove());
    },
    co = async () => {
      if (
        window.location.hostname === "docs.google.com" &&
        window.location.pathname.startsWith("/document")
      ) {
        if ((await rt.get()).hideGoogleDocWidget) {
          Ba();
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
            I = () =>
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
          const R = (w) => {
              (N.set(I(), w),
                (M.innerHTML = v(d, "View", "Report")),
                (B.textContent = "View Report"),
                M.appendChild(B));
            },
            W = () =>
              lo({ type: "GET_DOC_WORDCOUNT" }).then((w) => {
                const A = w?.wordCount ?? 0;
                A > 0 && A !== E && ((E = A), N.has(I()) || L());
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
                R(w.message.response.text_query);
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
                  N.has(I()) && !wt)
                ) {
                  nr("full");
                  return;
                }
                wt
                  ? (N.delete(I()),
                    L(),
                    chrome.storage.local.set(
                      { lastReloadTime: Date.now() },
                      () => {
                        window.location.reload();
                      },
                    ))
                  : (_e({ type: "SHOW_LOADING" }), nr("full"));
              } catch (w) {
                console.error("cannot parse document", w);
                const A = mn(w.toString());
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
              w.type === "DOCUMENT_SAVED" && (N.delete(I()), L(), W());
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
              (H ? R(H) : L(), Y(), ke());
            }
          });
          const O = document.createElement("button");
          O.classList.add("pangram-button");
          const $ =
              '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M3.17157 18.8284C4.34315 20 6.22876 20 10 20L15.75 19.9944C18.3859 19.9668 19.8541 19.8028 20.8284 18.8285C22 17.6569 22 15.7713 22 12C22 8.22879 22 6.34317 20.8284 5.1716C19.8541 4.19727 18.3738 4.02762 15.7379 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 1.25C15.4142 1.25 15.75 1.58579 15.75 2V4.00559V19.9944V22C15.75 22.4142 15.4142 22.75 15 22.75C14.5858 22.75 14.25 22.4142 14.25 22V2C14.25 1.58579 14.5858 1.25 15 1.25Z" fill="currentColor"/><path d="M6.81782 7.78733C7.11779 7.74992 7.48429 7.74996 7.88383 7.75H10.1162C10.5157 7.74996 10.8822 7.74992 11.1822 7.78733C11.5109 7.82833 11.8612 7.9242 12.1624 8.19187C12.2138 8.23753 12.2625 8.28618 12.3081 8.33756C12.5758 8.63878 12.6717 8.98915 12.7127 9.31782C12.7501 9.61779 12.7501 9.98428 12.75 10.3838L12.75 10.425C12.75 10.8392 12.4142 11.175 12 11.175C11.5858 11.175 11.25 10.8392 11.25 10.425C11.25 9.97047 11.2486 9.69931 11.2242 9.50348C11.1998 9.30765 10.9965 9.2758 10.9965 9.2758C10.8007 9.25137 10.5295 9.25001 10.075 9.25001H9.75001V14.75H11C11.4142 14.75 11.75 15.0858 11.75 15.5C11.75 15.9142 11.4142 16.25 11 16.25H7.00001C6.58579 16.25 6.25001 15.9142 6.25001 15.5C6.25001 15.0858 6.58579 14.75 7.00001 14.75H8.25001V9.25001H7.925C7.47047 9.25001 7.19931 9.25137 7.00348 9.2758C7.00348 9.2758 6.80023 9.30765 6.7758 9.50348C6.75137 9.69931 6.75001 9.97047 6.75001 10.425C6.75001 10.8392 6.41422 11.175 6.00001 11.175C5.58579 11.175 5.25001 10.8392 5.25001 10.425L5.25 10.3838C5.24996 9.98428 5.24992 9.61779 5.28733 9.31782C5.32833 8.98915 5.4242 8.63878 5.69187 8.33756C5.73753 8.28618 5.78618 8.23753 5.83756 8.19187C6.13878 7.9242 6.48915 7.82833 6.81782 7.78733Z" fill="currentColor"/></svg>',
            ie = document.createElement("div");
          ie.style.cssText =
            "display:flex;align-items:center;gap:4px;pointer-events:none";
          const fe = document.createElement("span");
          ((fe.style.cssText =
            "display:inline-flex;align-items:center;justify-content:center;flex-shrink:0"),
            (fe.innerHTML = $));
          const ve = document.createElement("div");
          ve.style.cssText =
            "display:none;flex-direction:column;font-size:9px;font-weight:600;line-height:1.25;text-align:left;overflow:hidden;white-space:nowrap";
          const q = document.createElement("span"),
            D = document.createElement("span");
          ((D.textContent = "words"),
            ve.appendChild(q),
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
                  : (_e({ type: "SHOW_LOADING" }), nr("selection")));
            } catch (w) {
              console.error("cannot parse selection", w);
              const A = mn(w.toString());
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
          const U = document.createElement("style");
          ((U.textContent =
            "@keyframes pangram-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}"),
            document.head.appendChild(U));
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
              const X = window.location.pathname.split("/d/")[1]?.split("/")[0];
              if (!X) throw new Error("Can't extract doc ID from URL");
              const ae = `${Z}d/${X}/revisions/tiles?id=${X}&revisionBatchSize=1500&start=1&showDetailedRevisions=false&token=${A[1]}`,
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
                (pn.docId === X &&
                  pn.maxRev === he &&
                  pn.data &&
                  (Ee = pn.data),
                !Ee)
              ) {
                se();
                const ge = `${Z}d/${X}/revisions/load?start=1&end=${he}&id=${X}&token=${A[1]}`,
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
                pn = { docId: X, maxRev: he, data: Ee };
              }
              if (
                ((Ee = {
                  ...Ee,
                  userMap: oe.userMap ? { ...oe.userMap } : Ee.userMap,
                }),
                !ao())
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
              const A = mn(w.toString());
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
              lo({ type: "CHECK_HAS_SELECTION" }).then((w) => {
                const A = w?.hasSelection ?? !1,
                  H = w?.wordCount ?? 0,
                  Z = 50,
                  X = A && H >= Z,
                  ae = A && H > 0 && H < Z;
                ((O.style.color = "#374151"),
                  (O.style.backgroundColor = "transparent"),
                  X || ae
                    ? ((q.textContent = H.toLocaleString()),
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
                  X
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
            so !== null && clearInterval(so),
            (so = setInterval(ke, 500)),
            g.appendChild(M),
            g.appendChild(O),
            g.appendChild(ee),
            i.appendChild(g),
            t.insertBefore(i, t.firstChild));
        }
      }
    },
    Ri = () => {
      (co(),
        Ai(_e),
        window.location.hostname === "docs.google.com" &&
          window.location.pathname.startsWith("/document") &&
          chrome.storage.local.get("lastReloadTime", (e) => {
            (e.lastReloadTime && (Li = e.lastReloadTime),
              Date.now() - Li <= Pa &&
                (_e({ type: "SHOW_LOADING" }), nr("full")));
          }));
    };
  (document.readyState === "complete" || document.readyState === "interactive"
    ? Ri()
    : window.addEventListener("load", Ri),
    rt.subscribe(() => {
      co();
    }),
    co());
})();
