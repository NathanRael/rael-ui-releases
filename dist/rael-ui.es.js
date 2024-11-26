import Te, { forwardRef as xt, createElement as De, useRef as ve, createContext as ie, useContext as X, useState as O, useCallback as ht, useEffect as ye, useMemo as ee, useLayoutEffect as xr } from "react";
import hr from "react-dom";
var We = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function vr() {
  if (dt) return me;
  dt = 1;
  var e = Te, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(i, l, u) {
    var p, m = {}, w = null, T = null;
    u !== void 0 && (w = "" + u), l.key !== void 0 && (w = "" + l.key), l.ref !== void 0 && (T = l.ref);
    for (p in l) o.call(l, p) && !a.hasOwnProperty(p) && (m[p] = l[p]);
    if (i && i.defaultProps) for (p in l = i.defaultProps, l) m[p] === void 0 && (m[p] = l[p]);
    return { $$typeof: t, type: i, key: w, ref: T, props: m, _owner: s.current };
  }
  return me.Fragment = r, me.jsx = c, me.jsxs = c, me;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function yr() {
  return ut || (ut = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Te, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), z = Symbol.iterator, g = "@@iterator";
    function v(n) {
      if (n === null || typeof n != "object")
        return null;
      var d = z && n[z] || n[g];
      return typeof d == "function" ? d : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(n) {
      {
        for (var d = arguments.length, b = new Array(d > 1 ? d - 1 : 0), x = 1; x < d; x++)
          b[x - 1] = arguments[x];
        H("error", n, b);
      }
    }
    function H(n, d, b) {
      {
        var x = C.ReactDebugCurrentFrame, V = x.getStackAddendum();
        V !== "" && (d += "%s", b = b.concat([V]));
        var P = b.map(function(R) {
          return String(R);
        });
        P.unshift("Warning: " + d), Function.prototype.apply.call(console[n], console, P);
      }
    }
    var U = !1, te = !1, ke = !1, Ce = !1, je = !1, re;
    re = Symbol.for("react.module.reference");
    function ce(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === a || je || n === s || n === u || n === p || Ce || n === T || U || te || ke || typeof n == "object" && n !== null && (n.$$typeof === w || n.$$typeof === m || n.$$typeof === c || n.$$typeof === i || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === re || n.getModuleId !== void 0));
    }
    function de(n, d, b) {
      var x = n.displayName;
      if (x)
        return x;
      var V = d.displayName || d.name || "";
      return V !== "" ? b + "(" + V + ")" : b;
    }
    function _(n) {
      return n.displayName || "Context";
    }
    function L(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case u:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case i:
            var d = n;
            return _(d) + ".Consumer";
          case c:
            var b = n;
            return _(b._context) + ".Provider";
          case l:
            return de(n, n.render, "ForwardRef");
          case m:
            var x = n.displayName || null;
            return x !== null ? x : L(n.type) || "Memo";
          case w: {
            var V = n, P = V._payload, R = V._init;
            try {
              return L(R(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, B = 0, Z, ue, ne, q, fe, D, Je;
    function Ke() {
    }
    Ke.__reactDisabledLog = !0;
    function Ut() {
      {
        if (B === 0) {
          Z = console.log, ue = console.info, ne = console.warn, q = console.error, fe = console.group, D = console.groupCollapsed, Je = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        B++;
      }
    }
    function Yt() {
      {
        if (B--, B === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, n, {
              value: Z
            }),
            info: M({}, n, {
              value: ue
            }),
            warn: M({}, n, {
              value: ne
            }),
            error: M({}, n, {
              value: q
            }),
            group: M({}, n, {
              value: fe
            }),
            groupCollapsed: M({}, n, {
              value: D
            }),
            groupEnd: M({}, n, {
              value: Je
            })
          });
        }
        B < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ie = C.ReactCurrentDispatcher, ze;
    function Se(n, d, b) {
      {
        if (ze === void 0)
          try {
            throw Error();
          } catch (V) {
            var x = V.stack.trim().match(/\n( *(at )?)/);
            ze = x && x[1] || "";
          }
        return `
` + ze + n;
      }
    }
    var Ne = !1, Re;
    {
      var Bt = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new Bt();
    }
    function Xe(n, d) {
      if (!n || Ne)
        return "";
      {
        var b = Re.get(n);
        if (b !== void 0)
          return b;
      }
      var x;
      Ne = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = Ie.current, Ie.current = null, Ut();
      try {
        if (d) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (G) {
              x = G;
            }
            Reflect.construct(n, [], R);
          } else {
            try {
              R.call();
            } catch (G) {
              x = G;
            }
            n.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            x = G;
          }
          n();
        }
      } catch (G) {
        if (G && x && typeof G.stack == "string") {
          for (var S = G.stack.split(`
`), F = x.stack.split(`
`), N = S.length - 1, A = F.length - 1; N >= 1 && A >= 0 && S[N] !== F[A]; )
            A--;
          for (; N >= 1 && A >= 0; N--, A--)
            if (S[N] !== F[A]) {
              if (N !== 1 || A !== 1)
                do
                  if (N--, A--, A < 0 || S[N] !== F[A]) {
                    var W = `
` + S[N].replace(" at new ", " at ");
                    return n.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", n.displayName)), typeof n == "function" && Re.set(n, W), W;
                  }
                while (N >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        Ne = !1, Ie.current = P, Yt(), Error.prepareStackTrace = V;
      }
      var ae = n ? n.displayName || n.name : "", Q = ae ? Se(ae) : "";
      return typeof n == "function" && Re.set(n, Q), Q;
    }
    function qt(n, d, b) {
      return Xe(n, !1);
    }
    function Jt(n) {
      var d = n.prototype;
      return !!(d && d.isReactComponent);
    }
    function Ee(n, d, b) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Xe(n, Jt(n));
      if (typeof n == "string")
        return Se(n);
      switch (n) {
        case u:
          return Se("Suspense");
        case p:
          return Se("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return qt(n.render);
          case m:
            return Ee(n.type, d, b);
          case w: {
            var x = n, V = x._payload, P = x._init;
            try {
              return Ee(P(V), d, b);
            } catch {
            }
          }
        }
      return "";
    }
    var pe = Object.prototype.hasOwnProperty, He = {}, Ze = C.ReactDebugCurrentFrame;
    function Ve(n) {
      if (n) {
        var d = n._owner, b = Ee(n.type, n._source, d ? d.type : null);
        Ze.setExtraStackFrame(b);
      } else
        Ze.setExtraStackFrame(null);
    }
    function Kt(n, d, b, x, V) {
      {
        var P = Function.call.bind(pe);
        for (var R in n)
          if (P(n, R)) {
            var S = void 0;
            try {
              if (typeof n[R] != "function") {
                var F = Error((x || "React class") + ": " + b + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw F.name = "Invariant Violation", F;
              }
              S = n[R](d, R, x, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              S = N;
            }
            S && !(S instanceof Error) && (Ve(V), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", b, R, typeof S), Ve(null)), S instanceof Error && !(S.message in He) && (He[S.message] = !0, Ve(V), j("Failed %s type: %s", b, S.message), Ve(null));
          }
      }
    }
    var Xt = Array.isArray;
    function Ae(n) {
      return Xt(n);
    }
    function Ht(n) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, b = d && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return b;
      }
    }
    function Zt(n) {
      try {
        return Qe(n), !1;
      } catch {
        return !0;
      }
    }
    function Qe(n) {
      return "" + n;
    }
    function et(n) {
      if (Zt(n))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ht(n)), Qe(n);
    }
    var be = C.ReactCurrentOwner, Qt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tt, rt, Oe;
    Oe = {};
    function er(n) {
      if (pe.call(n, "ref")) {
        var d = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function tr(n) {
      if (pe.call(n, "key")) {
        var d = Object.getOwnPropertyDescriptor(n, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function rr(n, d) {
      if (typeof n.ref == "string" && be.current && d && be.current.stateNode !== d) {
        var b = L(be.current.type);
        Oe[b] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(be.current.type), n.ref), Oe[b] = !0);
      }
    }
    function nr(n, d) {
      {
        var b = function() {
          tt || (tt = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        b.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function or(n, d) {
      {
        var b = function() {
          rt || (rt = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        b.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var ar = function(n, d, b, x, V, P, R) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: d,
        ref: b,
        props: R,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function sr(n, d, b, x, V) {
      {
        var P, R = {}, S = null, F = null;
        b !== void 0 && (et(b), S = "" + b), tr(d) && (et(d.key), S = "" + d.key), er(d) && (F = d.ref, rr(d, V));
        for (P in d)
          pe.call(d, P) && !Qt.hasOwnProperty(P) && (R[P] = d[P]);
        if (n && n.defaultProps) {
          var N = n.defaultProps;
          for (P in N)
            R[P] === void 0 && (R[P] = N[P]);
        }
        if (S || F) {
          var A = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          S && nr(R, A), F && or(R, A);
        }
        return ar(n, S, F, V, x, be.current, R);
      }
    }
    var Fe = C.ReactCurrentOwner, nt = C.ReactDebugCurrentFrame;
    function oe(n) {
      if (n) {
        var d = n._owner, b = Ee(n.type, n._source, d ? d.type : null);
        nt.setExtraStackFrame(b);
      } else
        nt.setExtraStackFrame(null);
    }
    var Ge;
    Ge = !1;
    function $e(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function ot() {
      {
        if (Fe.current) {
          var n = L(Fe.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function ir(n) {
      return "";
    }
    var at = {};
    function lr(n) {
      {
        var d = ot();
        if (!d) {
          var b = typeof n == "string" ? n : n.displayName || n.name;
          b && (d = `

Check the top-level render call using <` + b + ">.");
        }
        return d;
      }
    }
    function st(n, d) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var b = lr(d);
        if (at[b])
          return;
        at[b] = !0;
        var x = "";
        n && n._owner && n._owner !== Fe.current && (x = " It was passed a child from " + L(n._owner.type) + "."), oe(n), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, x), oe(null);
      }
    }
    function it(n, d) {
      {
        if (typeof n != "object")
          return;
        if (Ae(n))
          for (var b = 0; b < n.length; b++) {
            var x = n[b];
            $e(x) && st(x, d);
          }
        else if ($e(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var V = v(n);
          if (typeof V == "function" && V !== n.entries)
            for (var P = V.call(n), R; !(R = P.next()).done; )
              $e(R.value) && st(R.value, d);
        }
      }
    }
    function cr(n) {
      {
        var d = n.type;
        if (d == null || typeof d == "string")
          return;
        var b;
        if (typeof d == "function")
          b = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === m))
          b = d.propTypes;
        else
          return;
        if (b) {
          var x = L(d);
          Kt(b, n.props, "prop", x, n);
        } else if (d.PropTypes !== void 0 && !Ge) {
          Ge = !0;
          var V = L(d);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(n) {
      {
        for (var d = Object.keys(n.props), b = 0; b < d.length; b++) {
          var x = d[b];
          if (x !== "children" && x !== "key") {
            oe(n), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), oe(null);
            break;
          }
        }
        n.ref !== null && (oe(n), j("Invalid attribute `ref` supplied to `React.Fragment`."), oe(null));
      }
    }
    var lt = {};
    function ct(n, d, b, x, V, P) {
      {
        var R = ce(n);
        if (!R) {
          var S = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var F = ir();
          F ? S += F : S += ot();
          var N;
          n === null ? N = "null" : Ae(n) ? N = "array" : n !== void 0 && n.$$typeof === t ? (N = "<" + (L(n.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : N = typeof n, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, S);
        }
        var A = sr(n, d, b, V, P);
        if (A == null)
          return A;
        if (R) {
          var W = d.children;
          if (W !== void 0)
            if (x)
              if (Ae(W)) {
                for (var ae = 0; ae < W.length; ae++)
                  it(W[ae], n);
                Object.freeze && Object.freeze(W);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              it(W, n);
        }
        if (pe.call(d, "key")) {
          var Q = L(n), G = Object.keys(d).filter(function(gr) {
            return gr !== "key";
          }), Le = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!lt[Q + Le]) {
            var mr = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Le, Q, mr, Q), lt[Q + Le] = !0;
          }
        }
        return n === o ? dr(A) : cr(A), A;
      }
    }
    function ur(n, d, b) {
      return ct(n, d, b, !0);
    }
    function fr(n, d, b) {
      return ct(n, d, b, !1);
    }
    var pr = fr, br = ur;
    ge.Fragment = o, ge.jsx = pr, ge.jsxs = br;
  }()), ge;
}
process.env.NODE_ENV === "production" ? We.exports = vr() : We.exports = yr();
var f = We.exports;
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vt = (...e) => e.filter((t, r, o) => !!t && o.indexOf(t) === r).join(" ");
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var kr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = xt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: c,
    ...i
  }, l) => De(
    "svg",
    {
      ref: l,
      ...kr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(t) : r,
      className: vt("lucide", s),
      ...i
    },
    [
      ...c.map(([u, p]) => De(u, p)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = (e, t) => {
  const r = xt(
    ({ className: o, ...s }, a) => De(Cr, {
      ref: a,
      iconNode: t,
      className: vt(`lucide-${wr(e)}`, o),
      ...s
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = _e("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = _e("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = _e("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Er = _e("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function yt(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = yt(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function Vr() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = yt(e)) && (o && (o += " "), o += t);
  return o;
}
const Ye = "-", Tr = (e) => {
  const t = Pr(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (c) => {
      const i = c.split(Ye);
      return i[0] === "" && i.length !== 1 && i.shift(), wt(i, t) || _r(c);
    },
    getConflictingClassGroupIds: (c, i) => {
      const l = r[c] || [];
      return i && o[c] ? [...l, ...o[c]] : l;
    }
  };
}, wt = (e, t) => {
  var c;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), s = o ? wt(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const a = e.join(Ye);
  return (c = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : c.classGroupId;
}, ft = /^\[(.+)\]$/, _r = (e) => {
  if (ft.test(e)) {
    const t = ft.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Pr = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return zr(Object.entries(e.classGroups), r).forEach(([a, c]) => {
    Ue(c, o, a, t);
  }), o;
}, Ue = (e, t, r, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const a = s === "" ? t : pt(t, s);
      a.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (Ir(s)) {
        Ue(s(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([a, c]) => {
      Ue(c, pt(t, a), r, o);
    });
  });
}, pt = (e, t) => {
  let r = e;
  return t.split(Ye).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, Ir = (e) => e.isThemeGetter, zr = (e, t) => t ? e.map(([r, o]) => {
  const s = o.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([c, i]) => [t + c, i])) : a);
  return [r, s];
}) : e, Nr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (a, c) => {
    r.set(a, c), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let c = r.get(a);
      if (c !== void 0)
        return c;
      if ((c = o.get(a)) !== void 0)
        return s(a, c), c;
    },
    set(a, c) {
      r.has(a) ? r.set(a, c) : s(a, c);
    }
  };
}, kt = "!", Ar = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, o = t.length === 1, s = t[0], a = t.length, c = (i) => {
    const l = [];
    let u = 0, p = 0, m;
    for (let v = 0; v < i.length; v++) {
      let C = i[v];
      if (u === 0) {
        if (C === s && (o || i.slice(v, v + a) === t)) {
          l.push(i.slice(p, v)), p = v + a;
          continue;
        }
        if (C === "/") {
          m = v;
          continue;
        }
      }
      C === "[" ? u++ : C === "]" && u--;
    }
    const w = l.length === 0 ? i : i.substring(p), T = w.startsWith(kt), z = T ? w.substring(1) : w, g = m && m > p ? m - p : void 0;
    return {
      modifiers: l,
      hasImportantModifier: T,
      baseClassName: z,
      maybePostfixModifierPosition: g
    };
  };
  return r ? (i) => r({
    className: i,
    parseClassName: c
  }) : c;
}, Or = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}, Fr = (e) => ({
  cache: Nr(e.cacheSize),
  parseClassName: Ar(e),
  ...Tr(e)
}), Gr = /\s+/, $r = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = t, a = [], c = e.trim().split(Gr);
  let i = "";
  for (let l = c.length - 1; l >= 0; l -= 1) {
    const u = c[l], {
      modifiers: p,
      hasImportantModifier: m,
      baseClassName: w,
      maybePostfixModifierPosition: T
    } = r(u);
    let z = !!T, g = o(z ? w.substring(0, T) : w);
    if (!g) {
      if (!z) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = o(w), !g) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      z = !1;
    }
    const v = Or(p).join(":"), C = m ? v + kt : v, j = C + g;
    if (a.includes(j))
      continue;
    a.push(j);
    const H = s(g, z);
    for (let U = 0; U < H.length; ++U) {
      const te = H[U];
      a.push(C + te);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Lr() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ct(t)) && (o && (o += " "), o += r);
  return o;
}
const Ct = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Ct(e[o])) && (r && (r += " "), r += t);
  return r;
};
function Mr(e, ...t) {
  let r, o, s, a = c;
  function c(l) {
    const u = t.reduce((p, m) => m(p), e());
    return r = Fr(u), o = r.cache.get, s = r.cache.set, a = i, i(l);
  }
  function i(l) {
    const u = o(l);
    if (u)
      return u;
    const p = $r(l, r);
    return s(l, p), p;
  }
  return function() {
    return a(Lr.apply(null, arguments));
  };
}
const I = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, jt = /^\[(?:([a-z-]+):)?(.+)\]$/i, Dr = /^\d+\/\d+$/, Wr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ur = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Yr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Br = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, qr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Jr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Y = (e) => se(e) || Wr.has(e) || Dr.test(e), J = (e) => le(e, "length", rn), se = (e) => !!e && !Number.isNaN(Number(e)), Me = (e) => le(e, "number", se), xe = (e) => !!e && Number.isInteger(Number(e)), Kr = (e) => e.endsWith("%") && se(e.slice(0, -1)), k = (e) => jt.test(e), K = (e) => Ur.test(e), Xr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Hr = (e) => le(e, Xr, St), Zr = (e) => le(e, "position", St), Qr = /* @__PURE__ */ new Set(["image", "url"]), en = (e) => le(e, Qr, on), tn = (e) => le(e, "", nn), he = () => !0, le = (e, t, r) => {
  const o = jt.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : !1;
}, rn = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Yr.test(e) && !Br.test(e)
), St = () => !1, nn = (e) => qr.test(e), on = (e) => Jr.test(e), an = () => {
  const e = I("colors"), t = I("spacing"), r = I("blur"), o = I("brightness"), s = I("borderColor"), a = I("borderRadius"), c = I("borderSpacing"), i = I("borderWidth"), l = I("contrast"), u = I("grayscale"), p = I("hueRotate"), m = I("invert"), w = I("gap"), T = I("gradientColorStops"), z = I("gradientColorStopPositions"), g = I("inset"), v = I("margin"), C = I("opacity"), j = I("padding"), H = I("saturate"), U = I("scale"), te = I("sepia"), ke = I("skew"), Ce = I("space"), je = I("translate"), re = () => ["auto", "contain", "none"], ce = () => ["auto", "hidden", "clip", "visible", "scroll"], de = () => ["auto", k, t], _ = () => [k, t], L = () => ["", Y, J], M = () => ["auto", se, k], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Z = () => ["solid", "dashed", "dotted", "double", "none"], ue = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], q = () => ["", "0", k], fe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], D = () => [se, k];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [he],
      spacing: [Y, J],
      blur: ["none", "", K, k],
      brightness: D(),
      borderColor: [e],
      borderRadius: ["none", "", "full", K, k],
      borderSpacing: _(),
      borderWidth: L(),
      contrast: D(),
      grayscale: q(),
      hueRotate: D(),
      invert: q(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Kr, J],
      inset: de(),
      margin: de(),
      opacity: D(),
      padding: _(),
      saturate: D(),
      scale: D(),
      sepia: q(),
      skew: D(),
      space: _(),
      translate: _()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", k]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [K]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": fe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": fe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...B(), k]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ce()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ce()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ce()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: re()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": re()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": re()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", xe, k]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: de()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", k]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: q()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: q()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", xe, k]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [he]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", xe, k]
        }, k]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [he]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [xe, k]
        }, k]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", k]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", k]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [w]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [w]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [w]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ne()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ne(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...ne(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [j]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [j]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [j]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [j]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [j]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [j]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [j]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [j]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [j]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [Ce]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [Ce]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [k, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [k, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [K]
        }, K]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [k, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [k, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", K, J]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Me]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [he]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", se, Me]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Y, k]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", k]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", k]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [C]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [C]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Y, J]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Y, k]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: _()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", k]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [C]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...B(), Zr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Hr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, en]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [z]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [z]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [z]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [T]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [T]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [T]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Z(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [i]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [C]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Z()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...Z()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Y, k]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Y, J]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: L()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Y, J]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", K, tn]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [he]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ue(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ue()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", K, k]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [H]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [te]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [H]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [te]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [c]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [c]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [c]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: D()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", k]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: D()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", k]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [U]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [U]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [U]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [xe, k]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [je]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [je]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ke]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ke]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", k]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Y, J, Me]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, sn = /* @__PURE__ */ Mr(an), h = (...e) => sn(Vr(e));
function Rt(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = Rt(e[t])) && (o && (o += " "), o += r);
  else for (t in e) e[t] && (o && (o += " "), o += t);
  return o;
}
function ln() {
  for (var e, t, r = 0, o = ""; r < arguments.length; ) (e = arguments[r++]) && (t = Rt(e)) && (o && (o += " "), o += t);
  return o;
}
const bt = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, mt = ln, E = (e, t) => (r) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return mt(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: a } = t, c = Object.keys(s).map((u) => {
    const p = r == null ? void 0 : r[u], m = a == null ? void 0 : a[u];
    if (p === null) return null;
    const w = bt(p) || bt(m);
    return s[u][w];
  }), i = r && Object.entries(r).reduce((u, p) => {
    let [m, w] = p;
    return w === void 0 || (u[m] = w), u;
  }, {}), l = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((u, p) => {
    let { class: m, className: w, ...T } = p;
    return Object.entries(T).every((z) => {
      let [g, v] = z;
      return Array.isArray(v) ? v.includes({
        ...a,
        ...i
      }[g]) : {
        ...a,
        ...i
      }[g] === v;
    }) ? [
      ...u,
      m,
      w
    ] : u;
  }, []);
  return mt(e, c, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, y = {
  disabled: !1,
  btnVariant: "primary",
  size: "md",
  radius: "lg",
  block: !1,
  variant: "fill",
  rFor: "content",
  stackDirection: "vertical",
  stackGap: 16
}, cn = E(
  "flex items-center justify-center transition-color duration-200  antialiased font-medium  hover:opacity-80 focus:outline-none focus:ring-1 focus:ring-white",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        ghost: " dark:text-white text-black hover:opacity-100 hover:bg-gray-300 dark:hover:bg-gray-200 hover:text-black dark:hover:text-black",
        outline: "border border-primary text-primary hover:bg-primary hover:text-white "
      },
      size: {
        sm: "text-[14px] px-3 py-2 gap-2",
        md: "text-base px-6 py-2 gap-2",
        lg: "text-lg px-8 py-4 gap-4 font-bold"
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full"
      },
      block: {
        true: "w-full",
        false: "w-fit"
      },
      disabled: {
        true: "opacity-60 hover:opacity-60 cursor-not-allowed",
        false: "cursor-pointer"
      }
    },
    defaultVariants: {
      variant: y.btnVariant,
      size: y.size,
      radius: y.radius,
      block: y.block,
      disabled: y.disabled
    }
  }
), dn = E("animate-spin", {
  variants: {
    size: {
      sm: "size-[14px]",
      md: "size-4",
      lg: "size-6"
    }
  },
  defaultVariants: {
    size: y.size
  }
}), uo = ({ variant: e, size: t, radius: r, loading: o, disabled: s, className: a, block: c, children: i, onClick: l, ...u }) => {
  const p = { variant: e, size: t, radius: r, loading: o, disabled: s, block: c };
  return /* @__PURE__ */ f.jsxs("button", { disabled: s, onClick: l, className: h(cn(p), a), ...u, children: [
    o && /* @__PURE__ */ f.jsx(Rr, { className: dn({ size: t }) }),
    i
  ] });
}, Et = E("flex text-base items-center justify-center outline-none", {
  variants: {
    variant: {
      outline: "bg-transparent border border-input-outline-l-border  text-input-outline-l-text  dark:border-input-outline-d-border dark:text-input-outline-d-text focus-within:ring-[3px] focus-within:ring-primary",
      fill: "bg-input-fill-l-bg text-input-fill-l-text dark:text-input-fill-d-text dark:bg-input-fill-d-bg focus-within:ring-[3px] focus-within:ring-primary"
    },
    size: {
      sm: "px-2 py-1 gap-2 text-[14px]",
      md: "px-4 py-2 gap-2",
      lg: "px-6 py-3 gap-3"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full"
    },
    block: {
      true: "w-full",
      false: "w-[280px]"
    }
  },
  defaultVariants: {
    variant: y.variant,
    size: y.size,
    radius: y.radius,
    block: y.block
  }
}), Vt = E("bg-transparent px-0 py-0 flex-1 outline-none placeholder:text-gray-500", {
  variants: {
    variant: {
      outline: "placeholder:text-input-outline-l-placeholder dark:placeholder:text-input-outline-d-placeholder",
      fill: "placeholder:text-input-fill-l-placeholder dark:placeholder:text-input-fill-d-placeholder"
    }
  }
}), fo = ({ variant: e, size: t, radius: r, block: o, className: s, leftContent: a, rightContent: c, ...i }) => {
  const { cVariant: l } = $(), u = { variant: e || l, size: t, radius: r, block: o }, p = ve(null);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      onClick: () => p.current && p.current.focus(),
      tabIndex: -1,
      role: "presentation",
      className: h(Et(u), s),
      children: [
        a,
        /* @__PURE__ */ f.jsx(
          "input",
          {
            ref: p,
            className: h(Vt({ variant: e })),
            ...i
          }
        ),
        c
      ]
    }
  );
}, un = E("flex items-center justify-between  ", {
  variants: {
    variant: {
      outline: "bg-transparent border border-neutral-400 text-black  dark:border-neutral-300 dark:text-white focus-within:ring-[3px] focus-within:ring-primary",
      fill: "bg-neutral-200 text-black dark:text-white dark:bg-zinc-800 focus-within:ring-[3px] focus-within:ring-primary"
    },
    size: {
      sm: "px-2 py-1 gap-2 text-[14px]",
      md: "px-4 py-2 gap-2",
      lg: "px-6 py-3 gap-3"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full"
    },
    block: {
      true: "w-full",
      false: "w-[280px]"
    }
  },
  defaultVariants: {
    ...y
  }
}), fn = E(" bg-transparent px-0 py-0 flex-1 outline-none placeholder:text-gray-500", {
  variants: {
    variant: {
      outline: "placeholder:text-neutral-500 dark:placeholder:text-neutral-400",
      fill: "placeholder:text-neutral-500"
    }
  }
}), Tt = ie(void 0), $ = () => {
  const e = X(Tt);
  return e || {};
}, pn = ({ variant: e, size: t }) => ({
  cVariant: e || "fill",
  cSize: t || "md"
}), po = ({ variant: e, size: t, radius: r, block: o, className: s, showIcon: a = !0, leftContent: c, rightContent: i, ...l }) => {
  const { cVariant: u } = $(), p = { variant: e || u, size: t, radius: r, block: o }, [m, w] = O(!1), T = () => {
    w((z) => !z);
  };
  return /* @__PURE__ */ f.jsxs("div", { tabIndex: -1, role: "presentation", className: h(un(p), s), children: [
    c,
    /* @__PURE__ */ f.jsx("input", { type: m ? "text" : "password", ...l, className: h(` secure ${fn({ variant: e })}`, s) }),
    a && /* @__PURE__ */ f.jsx(bn, { onClick: T, passwordShown: m, className: "cursor-pointer" }),
    i
  ] });
}, bn = ({ passwordShown: e, className: t, onClick: r }) => e ? /* @__PURE__ */ f.jsx(jr, { onClick: r, className: t }) : /* @__PURE__ */ f.jsx(Sr, { onClick: r, className: t }), mn = E("flex items-start outline-none min-h-[120px] ", {
  variants: {
    variant: {
      outline: "bg-transparent border border-input-outline-l-border  text-input-outline-l-text  dark:border-input-outline-d-border dark:text-input-outline-d-text focus-within:ring-[3px] focus-within:ring-primary",
      fill: "bg-input-fill-l-bg text-input-fill-l-text dark:text-input-fill-d-text dark:bg-input-fill-d-bg focus-within:ring-[3px] focus-within:ring-primary"
    },
    size: {
      sm: "px-2 py-1 gap-2 text-[14px]",
      md: "px-4 py-2 gap-2",
      lg: "px-6 py-3 gap-3"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full"
    },
    block: {
      true: "w-full",
      false: "w-[280px]"
    }
  },
  defaultVariants: {
    variant: y.variant,
    size: y.size,
    radius: y.radius,
    block: y.block
  }
}), gn = E("bg-transparent resize-none px-0 py-0 flex-1 outline-none", {
  variants: {
    variant: {
      outline: "placeholder:text-input-outline-l-placeholder dark:placeholder:text-input-outline-d-placeholder",
      fill: "placeholder:text-input-fill-l-placeholder dark:placeholder:text-input-fill-d-placeholder"
    }
  }
}), bo = ({ variant: e, radius: t, block: r, className: o, size: s, leftContent: a, rightContent: c, inputClassName: i, ...l }) => {
  const { cVariant: u } = $(), p = ve(null), m = { variant: e || u, radius: t, block: r, size: s };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      onClick: () => p.current && p.current.focus(),
      tabIndex: -1,
      role: "presentation",
      className: h(mn(m), o),
      children: [
        a,
        /* @__PURE__ */ f.jsx("textarea", { ref: p, className: h(gn({ variant: m.variant }), i), ...l }),
        c
      ]
    }
  );
}, _t = ({ ref: e, action: t }) => {
  const r = ht((o) => {
    e.current && !e.current.contains(o.target) && t();
  }, [e, t]);
  ye(() => (document.addEventListener("mousedown", r), () => document.removeEventListener("mousedown", r)));
}, Pt = ie(void 0), Pe = () => {
  const e = X(Pt);
  if (!e)
    throw new Error("useSelectInputContext must be used within SelectInput");
  return e;
}, xn = ({ defaultValue: e }) => {
  const [t, r] = O(e || ""), [o, s] = O(!1), a = ve(null), [c, i] = O(!1), [l, u] = O([]);
  return _t({
    ref: a,
    action: () => {
      s(!1);
    }
  }), {
    selectedItem: t,
    showSelectGroup: o,
    setSelectedItem: r,
    selectRef: a,
    setShowSelectGroup: s,
    focused: c,
    registerValue: (m) => {
      u((w) => [...w, m]);
    },
    registeredOptions: l,
    setFocused: i
  };
}, hn = E(" outline-none relative space-y-2", {
  variants: {
    block: {
      true: "w-full",
      false: "w-[280px]"
    }
  },
  defaultVariants: {
    block: !1
  }
}), vn = E("flex w-full items-center justify-between cursor-pointer ", {
  variants: {
    variant: {
      outline: "bg-transparent border border-input-outline-l-border  text-input-outline-l-text  dark:border-input-outline-d-border dark:text-input-outline-d-text focus-within:ring-[3px] focus-within:ring-primary",
      fill: "bg-input-fill-l-bg text-input-fill-l-text dark:text-input-fill-d-text dark:bg-input-fill-d-bg focus-within:ring-[3px] focus-within:ring-primary"
    },
    size: {
      sm: "px-2 py-1 gap-2 text-[14px]",
      md: "px-4 py-2 gap-2",
      lg: "px-6 py-3 gap-3"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full"
    },
    focused: {
      true: "ring-4 ring-primary",
      false: ""
    }
  },
  defaultVariants: {
    variant: y.variant,
    size: y.size,
    radius: y.radius
  }
}), yn = E("absolute z-30 flex overflow-y-auto hide-scrollbar max-h-[240px] flex-col  w-full items-center justify-between p-2 gap-2 cursor-pointer ", {
  variants: {
    variant: {
      outline: "bg-white dark:bg-black border border-neutral-400 text-black  dark:border-neutral-300 dark:text-white focus-within:ring-[3px] focus-within:ring-primary",
      fill: "bg-neutral-200 text-black dark:text-white dark:bg-zinc-800 focus-within:ring-[3px] focus-within:ring-primary"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    variant: "outline",
    radius: "md"
  }
}), mo = ({
  children: e,
  onChange: t = () => {
  },
  variant: r,
  size: o,
  radius: s,
  block: a,
  className: c,
  name: i,
  defaultValue: l = ""
}) => {
  const {
    selectRef: u,
    setShowSelectGroup: p,
    showSelectGroup: m,
    selectedItem: w,
    setSelectedItem: T,
    focused: z,
    setFocused: g,
    registerValue: v
  } = xn({ defaultValue: l });
  return ye(() => {
    t({ target: { name: i || "no-name-provided", value: l } });
  }, [l]), /* @__PURE__ */ f.jsx(Pt.Provider, { value: {
    showSelectGroup: m,
    setShowSelectGroup: p,
    selectedItem: w,
    setSelectedItem: T,
    variant: r,
    size: o,
    radius: s,
    block: a,
    onSelect: t,
    focused: z,
    setFocused: g,
    name: i,
    defaultValue: l,
    registerValue: v
  }, children: /* @__PURE__ */ f.jsx("div", { ref: u, className: h(hn({ block: a }), c), children: e }) });
}, go = ({ children: e, className: t }) => {
  const { setShowSelectGroup: r, setFocused: o, variant: s, size: a, radius: c, focused: i } = Pe(), { cVariant: l } = $();
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      tabIndex: 0,
      role: "textbox",
      onBlur: () => {
        o(!1);
      },
      onFocus: () => {
        o(!0), r(!0);
      },
      onClick: () => {
        o((u) => !u), r(!0);
      },
      className: h(vn({ variant: s || l, size: a, radius: c, focused: i }), t),
      children: e
    }
  );
}, xo = ({ placeholder: e, className: t }) => {
  const { selectedItem: r } = Pe();
  return /* @__PURE__ */ f.jsx("p", { className: h("", t), children: r || e });
}, ho = ({ className: e, children: t }) => {
  const { cVariant: r } = $(), { showSelectGroup: o, radius: s, variant: a } = Pe();
  return o && /* @__PURE__ */ f.jsx(
    "div",
    {
      className: h(yn({ variant: a || r, radius: s }), e),
      children: t
    }
  );
}, vo = ({ children: e, className: t }) => /* @__PURE__ */ f.jsx("div", { className: h("w-full", t), children: e }), yo = ({ children: e, className: t }) => /* @__PURE__ */ f.jsx("p", { className: h("mb-1 font-semibold  w-full py-1 px-4", t), children: e }), wo = ({ children: e, value: t, className: r }) => {
  const { onSelect: o, setShowSelectGroup: s, setSelectedItem: a, name: c } = Pe(), i = "no-name-provided";
  return /* @__PURE__ */ f.jsx("div", { onClick: () => {
    a(t), o({ target: { name: c || i, value: t } }), s(!1);
  }, className: h("w-full  hover:bg-primary rounded-md py-1 px-4 cursor-pointer", r), children: e });
}, wn = E("peer   transition-all appearance-none border border-gray-500 rounded shadow  hover:shadow-md ", {
  variants: {
    variant: {
      fill: "checked:bg-primary checked:border-primary",
      outline: "text-black"
    },
    disabled: {
      true: "disabled:bg-gray-600 disabled:border-gray-600",
      false: ""
    },
    size: {
      sm: "size-4",
      md: "size-[18px]"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    ...y,
    size: y.size
  }
}), It = E(" ", {
  variants: {
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    disabled: y.disabled
  }
}), kn = E("absolute  opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ", {
  variants: {
    variant: {
      outline: "text-black dark:text-white",
      fill: "text-white"
    }
  }
}), zt = ie(void 0), Cn = () => {
  const e = X(zt);
  if (!e)
    throw new Error("useCheckboxContext must be used within Checkbox");
  return e;
}, jn = ({
  children: e,
  checked: t = !1,
  disabled: r = !1,
  id: o,
  name: s,
  className: a,
  onChange: c = () => {
  },
  radius: i,
  size: l,
  variant: u
}) => {
  const p = { disabled: r, radius: i, variant: u, size: l }, m = ee(() => o || `checkbox-${Math.random().toString(36).slice(2, 9)}`, [o]);
  return /* @__PURE__ */ f.jsx(zt.Provider, { value: { checkboxId: m, disabled: r }, children: /* @__PURE__ */ f.jsxs("div", { className: "flex gap-2 select-none group", children: [
    /* @__PURE__ */ f.jsx("div", { className: `inline-flex items-center ${It({ disabled: r })}`, children: /* @__PURE__ */ f.jsxs("label", { className: "flex items-center relative", children: [
      /* @__PURE__ */ f.jsx(
        "input",
        {
          name: s,
          disabled: r,
          onChange: c,
          type: "checkbox",
          defaultChecked: t,
          className: h(wn(p), a),
          id: m
        }
      ),
      /* @__PURE__ */ f.jsx(Rn, { variant: u })
    ] }) }),
    e
  ] }) });
}, Sn = ({ children: e, className: t }) => {
  const { checkboxId: r, disabled: o } = Cn();
  return /* @__PURE__ */ f.jsx(
    "label",
    {
      htmlFor: r,
      className: h(`text-base text-black dark:text-white ${It({ disabled: o })}`, t),
      children: e
    }
  );
}, Rn = ({ variant: e }) => /* @__PURE__ */ f.jsx(
  "span",
  {
    className: kn({ variant: e }),
    children: /* @__PURE__ */ f.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-3.5 w-3.5",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "1",
        children: /* @__PURE__ */ f.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
            clipRule: "evenodd"
          }
        )
      }
    )
  }
);
jn.Label = Sn;
const Nt = ie(void 0), En = () => {
  const e = X(Nt);
  if (!e)
    throw new Error("useRadioGroupContext must be used within RadioGroup");
  return e;
}, Vn = ({
  defaultValue: e,
  onChange: t = () => {
  },
  disabled: r,
  name: o
}) => {
  const [s, a] = O(""), c = "no-name-provided";
  return ye(() => {
    s === "" && a(e), t({ target: { name: o || c, value: s } });
  }, [s]), { selectedValue: s, setSelectedValue: a, disabled: r };
}, gt = E("", {
  variants: {
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    disabled: !1
  }
}), Tn = E("appearance-none size-4 rounded-full border-2  ", {
  variants: {
    variant: {
      outline: "border-input-outline-l-border dark:border-input-outline-d-border ",
      fill: "bg-input-fill-l-bg border-input-fill-l-bg dark:bg-input-fill-d-bg dark:border-input-fill-d-bg checked:bg-primary checked:border-primary dark:checked:border-primary  dark:checked:bg-primary"
    }
  },
  defaultVariants: {
    variant: y.variant
  }
}), _n = E(" absolute size-2 rounded-full  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", {
  variants: {
    variant: {
      outline: "bg-primary",
      fill: "bg-white"
    }
  }
}), Pn = (e) => {
  const {
    children: t,
    defaultValue: r,
    onChange: o = () => {
    },
    disabled: s = !1,
    name: a,
    className: c,
    variant: i
  } = e, { selectedValue: l, setSelectedValue: u } = Vn({
    defaultValue: r,
    onChange: o,
    disabled: s,
    name: a
  });
  return /* @__PURE__ */ f.jsx(Nt.Provider, { value: { selectedValue: l, setSelectedValue: u, disabled: s, variant: i }, children: /* @__PURE__ */ f.jsx("div", { className: h("flex flex-col gap-2", c), children: t }) });
}, In = ({ value: e, label: t, className: r }) => {
  const { selectedValue: o, setSelectedValue: s, disabled: a, variant: c } = En(), { cVariant: i } = $(), l = ee(() => o == e, [o, e]), u = ee(() => `radio-${Math.random().toString(36).slice(2, 9)}-${e}`, [e]), p = () => {
    a || s(e);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2 text-white", children: [
    /* @__PURE__ */ f.jsx("div", { className: "inline-flex items-center", children: /* @__PURE__ */ f.jsxs("label", { htmlFor: e, className: "relative flex items-center", children: [
      /* @__PURE__ */ f.jsx(
        "input",
        {
          disabled: a,
          className: `${gt({ disabled: a })} ${Tn({ variant: c || i })} `,
          id: u,
          onChange: p,
          checked: l,
          type: "radio"
        }
      ),
      l && /* @__PURE__ */ f.jsx(
        "span",
        {
          className: _n({ variant: c || i })
        }
      )
    ] }) }),
    t && /* @__PURE__ */ f.jsx(
      "label",
      {
        className: h(`text-base text-black dark:text-white ${gt({ disabled: a })}`, r),
        onClick: p,
        htmlFor: u,
        children: t
      }
    )
  ] });
};
Pn.Item = In;
const At = ie(void 0), Be = () => {
  const e = X(At);
  if (!e)
    throw new Error("useAutoCompleteInputContext must be used within RadioGroup");
  return e;
}, zn = () => {
  const [e, t] = O(""), r = ve(null), [o, s] = O(!1);
  _t({
    ref: r,
    action: () => s(!1)
  });
  const a = ht((c) => {
    t(c), s(!1);
  }, []);
  return {
    selectValue: e,
    setSelectValue: t,
    selectGroupVisible: o,
    setSelectGroupVisible: s,
    handleSelectItem: a,
    selectRef: r
  };
}, Nn = E("space-y-2 relative", {
  variants: {
    block: {
      true: "w-full",
      false: "w-[280px]"
    }
  },
  defaultVariants: {
    block: !1
  }
}), An = E("absolute z-30 flex flex-col  w-full items-center justify-between p-2 gap-2 cursor-pointer max-h-[240px] hide-scrollbar", {
  variants: {
    variant: {
      outline: "bg-transparent border border-input-outline-l-border  text-input-outline-l-text  dark:border-input-outline-d-border dark:text-input-outline-d-text focus-within:ring-[3px] focus-within:ring-primary",
      fill: "bg-input-fill-l-bg text-input-fill-l-text dark:text-input-fill-d-text dark:bg-input-fill-d-bg focus-within:ring-[3px] focus-within:ring-primary"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    variant: y.variant,
    radius: y.radius
  }
}), we = ({
  onChange: e = () => {
  },
  variant: t,
  size: r,
  radius: o,
  block: s,
  className: a,
  children: c,
  name: i
}) => {
  const {
    selectGroupVisible: l,
    setSelectGroupVisible: u,
    selectValue: p,
    handleSelectItem: m,
    // handleSearchItems,
    selectRef: w,
    setSelectValue: T
  } = zn();
  return /* @__PURE__ */ f.jsx(At.Provider, { value: {
    selectGroupVisible: l,
    setSelectGroupVisible: u,
    selectValue: p,
    handleSelectItem: m,
    // handleSearchItems,
    setSelectValue: T,
    variant: t,
    size: r,
    radius: o,
    block: s,
    onChange: e,
    name: i
  }, children: /* @__PURE__ */ f.jsx("div", { ref: w, className: h(Nn({ block: s }), a), children: c }) });
}, On = ({ placeholder: e, className: t, leftContent: r, rightContent: o }) => {
  const {
    setSelectGroupVisible: s,
    selectValue: a,
    handleSelectItem: c,
    onChange: i,
    variant: l,
    size: u,
    radius: p,
    block: m,
    name: w
  } = Be(), { cVariant: T } = $();
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsxs(
    "div",
    {
      tabIndex: -1,
      role: "presentation",
      className: h(Et({ variant: l || T, size: u, block: m, radius: p }), t),
      children: [
        r,
        /* @__PURE__ */ f.jsx(
          "input",
          {
            className: Vt({ variant: l }),
            onFocus: () => {
              s(!0);
            },
            name: w,
            value: a,
            onChange: (z) => {
              c(z.target.value.toLowerCase()), s(!0), i({ target: { name: w, value: z.target.value } });
            },
            placeholder: e
          }
        ),
        o
      ]
    }
  ) });
}, Fn = ({ children: e, className: t }) => {
  const { selectGroupVisible: r, variant: o, radius: s } = Be(), { cVariant: a } = $();
  return r && /* @__PURE__ */ f.jsx(
    "div",
    {
      className: h(An({ variant: o || a, radius: s }), t),
      children: e
    }
  );
}, Gn = ({ children: e, className: t }) => /* @__PURE__ */ f.jsx("div", { className: h("w-full", t), children: e }), $n = ({ children: e, className: t }) => /* @__PURE__ */ f.jsx("p", { className: h("mb-1 font-semibold  w-full py-1 px-4", t), children: e }), Ln = ({ children: e, value: t, className: r }) => {
  const { handleSelectItem: o, selectValue: s, onChange: a, setSelectGroupVisible: c, name: i } = Be();
  if (!(s !== "" && !t.toLowerCase().includes(s.toLowerCase())))
    return /* @__PURE__ */ f.jsx(
      "div",
      {
        onClick: () => {
          o(t), a({ target: { name: i, value: t } }), c(!1);
        },
        className: h("w-full  hover:bg-primary rounded-md py-1 px-4 cursor-pointer", r),
        children: e
      }
    );
};
we.Trigger = On;
we.GroupContainer = Fn;
we.Group = Gn;
we.GroupTitle = $n;
we.Item = Ln;
const ko = ({
  value: e = 10,
  className: t
}) => /* @__PURE__ */ f.jsxs("div", { className: h("flex flex-col gap-2  w-[320px] relative", t), children: [
  /* @__PURE__ */ f.jsx(
    "div",
    {
      className: "overflow-hidden flex items-center w-full justify-start  border-white h-4 bg-gray-600 rounded-full",
      children: /* @__PURE__ */ f.jsx("div", { className: "bg-primary h-full transition-all ease-out ", style: {
        width: e + "%"
      } })
    }
  ),
  /* @__PURE__ */ f.jsxs("p", { className: "text-white font-bold text-[14px]  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ", children: [
    e,
    "%"
  ] })
] }), Mn = E("peer h-6 w-11 rounded-full border after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border  after:transition-all after:content-['']  peer-checked:after:translate-x-full  ", {
  variants: {
    variant: {
      outline: "border-input-outline-l-border after:border-input-outline-l-border peer-checked:after:bg-primary",
      fill: "bg-input-fill-l-bg after:bg-white border-input-fill-l-border after:border-gray-300 peer-checked:border-input-fill-l-bg  peer-checked:after:bg-primary peer-checked:after:border-white dark:after:border-bg-input-fill-bg dark:bg-input-fill-d-bg  dark:border-input-fill-d-bg dark:peer-checked:border-input-fill-d-bg dark:peer-checked:after:border-input-fill-d-bg "
    },
    disabled: {
      true: "after:bg-black after:border-black  cursor-not-allowed ",
      false: ""
    }
  },
  defaultVariants: {
    variant: y.variant,
    disabled: y.disabled
  }
}), Ot = E(" ", {
  variants: {
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    disabled: y.disabled
  }
}), Ft = ie(void 0), Dn = () => {
  const e = X(Ft);
  if (!e)
    throw new Error("useSwitchContext must be used within Checkbox");
  return e;
}, Co = ({
  children: e,
  checked: t = !1,
  disabled: r = !1,
  id: o,
  className: s,
  onChange: a = () => {
  },
  variant: c
}) => {
  const { cVariant: i } = $(), l = { checked: t, disabled: r, variant: c || i }, u = ee(() => o || `checkbox-${Math.random().toString(36).slice(2, 9)}`, [o]);
  return /* @__PURE__ */ f.jsx(Ft.Provider, { value: { switchId: u, disabled: r }, children: /* @__PURE__ */ f.jsxs("div", { className: "flex gap-2 select-none group", children: [
    /* @__PURE__ */ f.jsx("div", { className: `inline-flex items-center ${Ot({ disabled: r })}`, children: /* @__PURE__ */ f.jsxs("label", { className: "flex items-center relative", children: [
      /* @__PURE__ */ f.jsx(
        "input",
        {
          disabled: r,
          onChange: a,
          type: "checkbox",
          defaultChecked: t,
          className: "sr-only peer",
          id: u
        }
      ),
      /* @__PURE__ */ f.jsx("div", { className: h(Mn(l), s) })
    ] }) }),
    e
  ] }) });
}, jo = ({ children: e, className: t }) => {
  const { switchId: r, disabled: o } = Dn();
  return /* @__PURE__ */ f.jsx(
    "label",
    {
      htmlFor: r,
      className: h(`text-base text-black dark:text-white ${Ot({ disabled: o })}`, t),
      children: e
    }
  );
}, Wn = E("rounded-full  w-fit min-w-3 min-h-3", {
  variants: {
    variant: {
      fill: "bg-primary text-white hover:opacity-75",
      outline: "border border-primary text-primary hover:bg-primary hover:text-white "
    },
    size: {
      sm: "py-1 px-3 text-[12px]",
      md: "py-2 px-4 text-[12px]"
      // lg: 'py-2 px-4 text-[12px]'
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    variant: y.variant,
    size: y.size,
    radius: y.radius
  }
}), So = ({ children: e, className: t, variant: r, size: o }) => {
  const s = { variant: r, size: o };
  return e ? /* @__PURE__ */ f.jsx("div", { className: h(Wn(s), t), children: e }) : /* @__PURE__ */ f.jsx(Un, { className: t });
}, Un = ({ className: e }) => /* @__PURE__ */ f.jsx("div", { className: h("w-3 h-3 bg-primary rounded-full", e) }), Yn = E("flex items-center  antialiased font-semibold hover:opacity-50", {
  variants: {
    variant: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      ghost: " dark:text-white text-black hover:opacity-100 hover:bg-gray-300 dark:hover:bg-gray-200 hover:text-black dark:hover:text-black",
      outline: "border border-primary text-primary hover:bg-primary hover:text-white "
    },
    size: {
      sm: "p-2  gap-2",
      md: "py-3 px-3  gap-3",
      lg: "py-4 px-4 gap-4  font-bold"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full"
    },
    block: {
      true: "w-full",
      false: "w-fit"
    },
    disabled: {
      true: "opacity-50  cursor-not-allowed",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    variant: y.btnVariant,
    size: y.size,
    block: y.block,
    disabled: y.disabled,
    radius: "full"
  }
}), Ro = ({ variant: e, size: t, radius: r, loading: o, disabled: s, className: a, children: c, ...i }) => {
  const l = { variant: e, size: t, radius: r, loading: o, disabled: s };
  return /* @__PURE__ */ f.jsx("button", { disabled: s, className: h(Yn(l), a), ...i, children: c });
}, Bn = E("flex flex-col gap-2 p-4 w-[360px] max-[360px]:w-full", {
  variants: {
    variant: {
      fill: "bg-meta-fill-l-bg border border-meta-fill-l-border shadow-sm dark:bg-meta-fill-d-bg dark:border-meta-fill-d-border",
      outline: "border border-meta-outline-l-border bg-meta-outline-l-bg dark:border-meta-outline-d-border dark:bg-meta-outline-d-bg"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    variant: "outline",
    radius: "lg"
  }
}), Gt = E("text-lg", {
  variants: {
    variant: {
      fill: "text-meta-fill-l-text dark:text-meta-fill-d-text",
      outline: "text-meta-outline-l-text dark:text-meta-outline-d-text"
    }
  },
  defaultVariants: {
    variant: "outline"
  }
}), qn = E("text-[14px]", {
  variants: {
    variant: {
      fill: "text-meta-fill-l-text-sec  dark:text-meta-fill-d-text-sec",
      outline: "text-meta-outline-l-text-sec dark:text-meta-outline-d-text-sec"
    }
  },
  defaultVariants: {
    variant: "outline"
  }
}), Jn = ({ message: e, variant: t, title: r, className: o, onClose: s }) => {
  const { cVariant: a } = $(), c = { variant: t || a };
  return /* @__PURE__ */ f.jsxs("div", { className: h(Bn(c), o), children: [
    r && /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ f.jsx(Kn, { title: r, variant: t || a }),
      /* @__PURE__ */ f.jsx(Er, { onClick: s, size: 16, className: `cursor-pointer ${Gt(c)}` })
    ] }),
    e && /* @__PURE__ */ f.jsx(Xn, { message: e, variant: t || a })
  ] });
}, Kn = ({ title: e, variant: t }) => /* @__PURE__ */ f.jsx("h1", { className: Gt({ variant: t }), children: e }), Xn = ({ message: e, variant: t }) => /* @__PURE__ */ f.jsx("p", { className: qn({ variant: t }), children: e }), Hn = E("flex flex-col p-6 gap-8 w-fit", {
  variants: {
    variant: {
      fill: "bg-meta-fill-l-bg  border border-meta-fill-l-border shadow-md dark:bg-meta-fill-d-bg dark:border-meta-fill-d-border",
      outline: "border bg-meta-outline-l-bg dark:bg-meta-outline-d-bg border-meta-outline-l-border dark:border-meta-outline-d-border"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    variant: y.variant,
    radius: y.radius
  }
}), Zn = E("flex flex-col", {
  variants: {
    rFor: {
      meta: "gap-1",
      content: "gap-6"
    }
  },
  defaultVariants: {
    rFor: y.rFor
  }
}), Qn = E("text-3xl font-semibold", {
  variants: {
    variant: {
      fill: "text-meta-fill-l-text dark:text-meta-fill-d-text",
      outline: "text-meta-outline-l-text dark:text-meta-outline-d-text"
    }
  },
  defaultVariants: {
    variant: y.variant
  }
}), eo = E("text-base", {
  variants: {
    variant: {
      fill: "text-meta-fill-l-text-sec dark:text-meta-fill-d-text-sec",
      outline: "text-meta-outline-l-text-sec dark:text-meta-outline-d-text-sec"
    }
  },
  defaultVariants: {
    variant: y.variant
  }
}), Eo = ({ children: e, className: t, variant: r, radius: o }) => {
  const { cVariant: s } = pn({ variant: r });
  return /* @__PURE__ */ f.jsx(Tt.Provider, { value: { cVariant: s }, children: /* @__PURE__ */ f.jsx("div", { className: h(Hn({ variant: r, radius: o }), t), children: e }) });
}, Vo = ({ children: e, className: t, rFor: r }) => /* @__PURE__ */ f.jsx("section", { className: h(Zn({ rFor: r }), t), children: e }), To = ({ children: e, className: t }) => {
  const { cVariant: r } = $();
  return /* @__PURE__ */ f.jsx("h1", { className: h(Qn({ variant: r }), t), children: e });
}, _o = ({ children: e, className: t }) => {
  const { cVariant: r } = $();
  return /* @__PURE__ */ f.jsx("p", { className: h(eo({ variant: r }), t), children: e });
}, $t = Te.createContext(void 0), qe = () => {
  const e = X($t);
  if (!e)
    throw new Error("useAvatarContext must be used within AvatarContext");
  return e;
}, to = () => {
  const [e, t] = O(!1), [r, o] = O(!1), [s, a] = O("");
  return {
    isLoading: e,
    setIsLoading: t,
    imgSrc: s,
    setImgSrc: a,
    error: r,
    setError: o
  };
}, ro = ({
  src: e
}) => {
  const { setImgSrc: t, setIsLoading: r, setError: o } = qe();
  ye(() => {
    const s = new AbortController(), a = s.signal;
    (async () => {
      r(!0);
      try {
        const l = await fetch(e, { signal: a });
        if (!l.ok)
          throw new Error("Failed to load image");
        const u = await l.blob(), p = URL.createObjectURL(u);
        t(p);
      } catch (l) {
        o(!0), console.error("Error loading image : ", l);
      } finally {
        r(!1);
      }
    })();
    const i = setTimeout(() => {
      s.abort();
    }, 1e4);
    return () => {
      clearTimeout(i);
    };
  }, [e]);
}, Lt = E("overflow-hidden text-black dark:text-white object-cover flex bg-white font-bold items-center justify-center", {
  variants: {
    size: {
      sm: "size-7 text-base",
      md: "size-10 text-xl",
      lg: "size-[54px] text-2xl"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    size: y.size,
    radius: y.radius
  }
}), Mt = ({ children: e, className: t, size: r, radius: o }) => {
  const { isLoading: s, setIsLoading: a, imgSrc: c, setImgSrc: i, setError: l, error: u } = to();
  return /* @__PURE__ */ f.jsx($t.Provider, { value: {
    isLoading: s,
    setIsLoading: a,
    imgSrc: c,
    setError: l,
    setImgSrc: i,
    error: u,
    size: r,
    radius: o
  }, children: /* @__PURE__ */ f.jsx("div", { className: h("size-fit", t), children: e }) });
}, no = ({ alt: e, src: t, className: r }) => {
  const { imgSrc: o, isLoading: s, error: a, size: c, radius: i } = qe();
  return ro({ src: t }), !s && !a && /* @__PURE__ */ f.jsx("img", { className: h(Lt({ size: c, radius: i }), r), alt: e, src: o });
}, oo = ({ children: e, className: t }) => {
  const { isLoading: r, error: o, size: s, radius: a } = qe();
  return (r || o) && /* @__PURE__ */ f.jsx("div", { className: h(Lt({ size: s, radius: a }), t), children: e });
};
Mt.Image = no;
Mt.Fallback = oo;
const Dt = Te.createContext(void 0), Wt = () => {
  const e = X(Dt);
  if (!e)
    throw new Error("useFormContext must be used within a FormProvider");
  return e;
}, Po = ({ defaultValue: e, validations: t }) => {
  const [r, o] = O(e || {}), [s, a] = O({}), [c, i] = O(!1), l = (g, v) => {
    o((C) => ({ ...C, [g]: v }));
  }, u = (g, v) => {
    a((C) => ({ ...C, [g]: v }));
  }, p = () => {
    o({});
  }, m = (g, v) => {
    l(g, v);
    const C = t == null ? void 0 : t.find((j) => j.name === g);
    C && u(g, v === "" && C.required ? `${g} is required` : "");
  }, w = async (g, v) => {
    v.preventDefault(), i(!0);
    try {
      if (!T())
        return;
      await g();
    } catch (C) {
      console.error("error while submitting : ", C);
    } finally {
      i(!1);
    }
  }, T = () => {
    let g = !0;
    for (const v in r) {
      const C = r[v];
      z(v, C) || (g = !1);
    }
    return g;
  }, z = (g, v) => {
    let C = !0;
    return t == null || t.forEach((j) => {
      if (j.name === g) {
        if (j.required && v === "")
          return u(g, `${g} is required`), C = !1;
        if (v !== "") {
          if (j.valid !== void 0 && !j.valid(r))
            return u(g, j.message || `${g} is invalid`), C = !1;
          if (j.pattern && !j.pattern.test(v))
            return u(g, j.message || `${g} is invalid`), C = !1;
        }
      }
    }), C;
  };
  return xr(() => {
    for (const g in r)
      u(g, "");
  }, []), {
    handleSubmit: w,
    handleChange: m,
    formData: r,
    errors: s,
    isSubmitting: c,
    reset: p
  };
}, ao = E("text-base", {
  variants: {
    variant: {
      fill: "text-meta-fill-l-text dark:text-meta-fill-d-text",
      outline: "text-meta-outline-l-text dark:text-meta-outline-d-text"
    }
  },
  defaultVariants: {
    variant: "outline"
  }
}), so = E("text-[14px]", {
  variants: {
    variant: {
      fill: "text-meta-fill-l-text-sec dark:text-meta-fill-d-text-sec",
      outline: "text-meta-outline-l-text-sec dark:text-meta-outline-d-text-sec"
    }
  }
}), Io = ({ children: e, className: t, onSubmit: r, form: o }) => /* @__PURE__ */ f.jsx(Dt.Provider, { value: { form: o }, children: /* @__PURE__ */ f.jsx("form", { className: h("w-fit", t), onSubmit: (s) => o.handleSubmit(r, s), children: e }) }), zo = ({ name: e, render: t, type: r }) => {
  const { form: o } = Wt(), s = ee(() => o.formData, [o.formData, o.handleChange, o.reset]), a = {
    name: e,
    onChange: (i) => o.handleChange(e, r === "checkbox" ? i.target.checked : i.target.value)
  }, c = (() => {
    switch (r) {
      case "input":
        return { ...a, value: s[e] };
      case "select":
        return { ...a, defaultValue: s[e] };
      case "checkbox":
        return { ...a, checked: s[e] };
      case "radio":
        return { ...a, defaultValue: s[e] };
      default:
        return a;
    }
  })();
  return t(c);
}, No = ({ name: e, className: t }) => {
  const { form: r } = Wt(), o = ee(() => r.errors, [r.handleChange, r.errors]);
  return o[e] && /* @__PURE__ */ f.jsx("p", { className: h("text-danger text-[14px]", t), children: o[e] });
}, Ao = ({ className: e, children: t }) => /* @__PURE__ */ f.jsx("div", { className: h("flex flex-col items-start justify-start gap-2", e), children: t }), Oo = ({ className: e, children: t }) => {
  const { cVariant: r } = $();
  return /* @__PURE__ */ f.jsx("p", { className: h(ao({ variant: r }), e), children: t });
}, Fo = ({ className: e, children: t }) => {
  const { cVariant: r } = $();
  return /* @__PURE__ */ f.jsx("p", { className: h(so({ variant: r }), e), children: t });
}, io = E("flex items-center justify-center", {
  variants: {
    direction: {
      vertical: "flex-col",
      horizontal: "flex-row"
    },
    horizontalAlign: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end"
    },
    verticalAlign: {
      start: "items-start",
      center: "items-center",
      end: "items-end"
    }
  },
  defaultVariants: {
    direction: y.stackDirection,
    horizontalAlign: "center",
    verticalAlign: "center"
  }
}), Go = ({ children: e, className: t, direction: r = y.stackDirection, gap: o = y.stackGap, align: s, onClick: a }) => {
  const c = { direction: r, gap: o }, i = ee(() => typeof o == "number" ? `${o}px` : `${o}`, [o]), l = (u) => u === r ? s : "center";
  return /* @__PURE__ */ f.jsx("div", { onClick: a, style: {
    gap: i
  }, className: h(`${i} ${io({
    ...c,
    horizontalAlign: l("horizontal"),
    verticalAlign: l("vertical")
  })}`, t), children: e });
}, $o = () => {
  const [e, t] = O([]), [r, o] = O("bottom-right"), s = ve([]), a = ({ title: l, message: u, duration: p = 5e3, onClose: m, position: w }) => {
    t((T) => [
      ...T,
      { title: l, message: u, duration: p, onClose: m, exiting: !1 }
    ]), w && o(w);
  }, c = (l) => {
    t(
      (u) => u.map(
        (p, m) => m === l ? { ...p, exiting: !0 } : p
      )
    ), setTimeout(() => {
      t((u) => u.filter((p, m) => m !== l)), clearTimeout(s.current[l]), s.current.splice(l, 1);
    }, 300);
  };
  ye(() => (e.forEach((l, u) => {
    if (!s.current[u] && !l.exiting) {
      const p = setTimeout(() => {
        var m;
        c(u), (m = l.onClose) == null || m.call(l);
      }, l.duration);
      s.current[u] = p;
    }
  }), () => {
    s.current.forEach((l) => clearTimeout(l));
  }), [e]);
  const i = () => /* @__PURE__ */ f.jsx(
    "div",
    {
      className: h(
        "fixed z-50 flex flex-col gap-4",
        r === "top-left" && "top-4 left-4",
        r === "top-right" && "top-4 right-4",
        r === "bottom-left" && "bottom-4 left-4",
        r === "bottom-right" && "bottom-4 right-4",
        r === "top-center" && "top-4 left-1/2 -translate-x-1/2 ",
        r === "bottom-center" && "bottom-4 left-1/2 -translate-x-1/2 "
      ),
      children: e.map((l, u) => /* @__PURE__ */ f.jsx(
        "div",
        {
          className: h(
            "",
            l.exiting ? "animate-slide-out" : "animate-slide-in"
          ),
          children: /* @__PURE__ */ f.jsx(
            Jn,
            {
              title: l.title,
              message: l.message,
              onClose: () => c(u)
            }
          )
        },
        u
      ))
    }
  );
  return {
    toast: a,
    position: r,
    setPosition: o,
    renderToastContainer: () => hr.createPortal(/* @__PURE__ */ f.jsx(i, {}), document.body)
  };
};
export {
  we as AutoComplete,
  Gn as AutoCompleteGroup,
  Fn as AutoCompleteGroupContainer,
  $n as AutoCompleteGroupTitle,
  Ln as AutoCompleteItem,
  On as AutoCompleteTrigger,
  Mt as Avatar,
  oo as AvatarFallback,
  no as AvatarImage,
  So as Badge,
  uo as Button,
  Eo as Card,
  _o as CardDescription,
  Vo as CardSection,
  To as CardTitle,
  jn as Checkbox,
  Sn as CheckboxLabel,
  Tt as ComponentStyleContext,
  Io as Form,
  zo as FormControl,
  Fo as FormDescription,
  Ao as FormItem,
  Oo as FormLabel,
  No as FormMessage,
  Ro as Icon,
  po as PasswordInput,
  ko as Progress,
  Pn as RadioGroup,
  In as RadioItem,
  mo as Select,
  vo as SelectGroup,
  ho as SelectGroupContainer,
  yo as SelectGroupTitle,
  wo as SelectItem,
  xo as SelectLabel,
  go as SelectTrigger,
  Go as Stack,
  Co as Switch,
  jo as SwitchLabel,
  fo as TextInput,
  bo as Textarea,
  Jn as Toast,
  h as cn,
  $ as useComponentStyle,
  Po as useForm,
  $o as useToast
};
