function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(e, t) { var _n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!_n) { if (Array.isArray(e) || (_n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) { _n && (e = _n); var o = 0, F = function F() {}; return { s: F, n: function n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var a, u, i = !0; return { s: function s() { _n = _n.call(e); }, n: function n() { i = !0; var r = _n.next(); return r.done ? { done: !0 } : { value: r.value, done: i = !1 }; }, e: function e(r) { a = !0, u = r; }, f: function f() { try { i || null == _n["return"] || _n["return"](); } finally { if (a) throw u; } } }; }
function _toConsumableArray(a) { return _arrayWithoutHoles(a) || _iterableToArray(a) || _unsupportedIterableToArray(a) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { var e = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (Array.isArray(r) && (null == e || e === ("undefined" != typeof Symbol && [][Symbol.iterator]) || e === []["@@iterator"])) return r; if (null != e) { for (var t, o = [], a = e.call(r); !(t = a.next()).done;) o.push(t.value); return o; } }
function _arrayWithoutHoles(a) { if (Array.isArray(a)) return _arrayLikeToArray(a); }
function _slicedToArray(e, i) { return _iterableToArrayLimit(e, i) || _unsupportedIterableToArray(e, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(t, e) { if (t) { if ("string" == typeof t) return _arrayLikeToArray(t, e); var o = {}.toString.call(t).slice(8, -1); return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, t) { var e = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (Array.isArray(r) && (null == e || e === ("undefined" != typeof Symbol && [][Symbol.iterator]) || e === []["@@iterator"])) return r; if (null != e) { var l, n, i, a, u = [], o = !0, f = !1; try { if (i = (e = e.call(r)).next, 0 === t) { if (Object(e) !== e) return; o = !1; } else for (; !(o = (l = i.call(e)).done) && (u.push(l.value), u.length !== t); o = !0); } catch (r) { f = !0, n = r; } finally { try { if (!o && null != e["return"] && (a = e["return"](), Object(a) !== a)) return; } finally { if (f) throw n; } } return u; } }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var r, e, o = "function" == typeof Symbol ? Symbol : {}, n = o.iterator || "@@iterator", a = o.toStringTag || "@@toStringTag"; function i(o, n, a, i) { var u = n && n.prototype instanceof Generator ? n : Generator, f = Object.create(u.prototype); return _regeneratorDefine2(f, "_invoke", function (t, o, n) { var a, i, u, f = 0, p = n || [], y = !1, G = { p: 0, n: 0, v: r, a: l, f: l.bind(r, 4), d: function d(t, e) { return a = t, i = 0, u = r, G.n = e, c; } }; function l(t, o) { for (i = t, u = o, e = 0; !y && f && !n && e < p.length; e++) { var n, a = p[e], l = G.p, F = a[2]; t > 3 ? (n = F === o) && (u = a[(i = a[4]) ? 5 : (i = 3, 3)], a[4] = a[5] = r) : a[0] <= l && ((n = t < 2 && l < a[1]) ? (i = 0, G.v = o, G.n = a[1]) : l < F && (n = t < 3 || a[0] > o || o > F) && (a[4] = t, a[5] = o, G.n = F, i = 0)); } if (n || t > 1) return c; throw y = !0, o; } return function (n, p, F) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && l(p, F), i = p, u = F; (e = i < 2 ? r : u) || !y;) { a || (i ? (i > 1 && (G.n = i < 3 ? -1 : u), l(i, u)) : G.v = u); try { if (f = 2, a) { if (i || (n = "next"), e = a[n]) { if (!(e = e.call(a, u))) throw TypeError("iterator result is not an object"); if (!e.done) return e; u = e.value, i < 2 && (i = 0); } else 1 === i && (e = a["return"]) && e.call(a), i < 2 && (u = TypeError("The iterator does not provide a '" + n + "' method"), i = 1); a = r; } else if ((e = (y = G.n < 0) ? u : t.call(o, G)) !== c) break; } catch (t) { a = r, i = 1, u = t; } finally { f = 1; } } return { value: e, done: y }; }; }(o, a, i), !0), f; } var c = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} e = Object.getPrototypeOf; var u = [][n] ? e(e([][n]())) : (_regeneratorDefine2(e = {}, n, function () { return this; }), e), f = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u); function p(r) { return Object.setPrototypeOf ? Object.setPrototypeOf(r, GeneratorFunctionPrototype) : (r.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(r, a, "GeneratorFunction")), r.prototype = Object.create(f), r; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(f, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, a, "GeneratorFunction"), _regeneratorDefine2(f), _regeneratorDefine2(f, a, "Generator"), _regeneratorDefine2(f, n, function () { return this; }), _regeneratorDefine2(f, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: p }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(r) { for (var t = 1; t < arguments.length; t++) { var o = null != arguments[t] ? arguments[t] : {}; t % 2 ? ownKeys(Object(o), !0).forEach(function (t) { _defineProperty(r, t, o[t]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : ownKeys(Object(o)).forEach(function (e) { Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e)); }); } return r; }
function _defineProperty(r, t, o) { return (t = _toPropertyKey(t)) in r ? Object.defineProperty(r, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = o, r; }
function _toPropertyKey(r) { var o = _toPrimitive(r, "string"); return "symbol" == _typeof(o) ? o : o + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _React = React,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo,
  useState = _React.useState;
var currency = function currency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Number(value) || 0);
};
var fallbackImage = "assets/product-fallback.svg";
var api = /*#__PURE__*/function () {
  var _api = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(action) {
    var options,
      response,
      payload,
      _args = arguments,
      _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          if (!(location.protocol === "file:")) {
            _context.n = 1;
            break;
          }
          throw new Error("Open SmartCart with the PHP launcher so your account and orders save to the database.");
        case 1:
          _context.n = 2;
          return fetch("api/index.php?action=".concat(action), {
            method: options.method || "GET",
            headers: _objectSpread({
              "Content-Type": "application/json"
            }, options.headers || {}),
            credentials: "same-origin",
            body: options.body ? JSON.stringify(options.body) : undefined
          });
        case 2:
          response = _context.v;
          _context.p = 3;
          _context.n = 4;
          return response.json();
        case 4:
          payload = _context.v;
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          throw new Error("The server returned an unreadable response. Check the PHP server and database.");
        case 6:
          if (!(!response.ok || !payload.ok)) {
            _context.n = 7;
            break;
          }
          throw new Error(payload.message || "Request failed. Please try again.");
        case 7:
          return _context.a(2, payload);
      }
    }, _callee, null, [[3, 5]]);
  }));
  function api(_x) {
    return _api.apply(this, arguments);
  }
  return api;
}();
function AuthScreen(_ref) {
  var onAuth = _ref.onAuth,
    theme = _ref.theme,
    onTheme = _ref.onTheme;
  var _useState = useState("login"),
    _useState2 = _slicedToArray(_useState, 2),
    mode = _useState2[0],
    setMode = _useState2[1];
  var _useState3 = useState({
      name: "",
      email: "",
      password: "",
      otp: ""
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    form = _useState4[0],
    setForm = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showPassword = _useState6[0],
    setShowPassword = _useState6[1];
  var _useState7 = useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  var _useState9 = useState(""),
    _useState0 = _slicedToArray(_useState9, 2),
    otpNote = _useState0[0],
    setOtpNote = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    busy = _useState10[0],
    setBusy = _useState10[1];
  var requestOtp = /*#__PURE__*/function () {
    var _requestOtp = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var payload, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setBusy(true);
            setError("");
            setOtpNote("");
            _context2.p = 1;
            _context2.n = 2;
            return api("request-otp", {
              method: "POST",
              body: {
                email: form.email,
                purpose: mode
              }
            });
          case 2:
            payload = _context2.v;
            setForm(function (old) {
              return _objectSpread(_objectSpread({}, old), {}, {
                otp: payload.demo_otp || ""
              });
            });
            setOtpNote("Demo verification code: ".concat(payload.demo_otp, ". This code is displayed locally; no email or SMS is sent."));
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            setError(_t2.message);
          case 4:
            _context2.p = 4;
            setBusy(false);
            return _context2.f(4);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3, 4, 5]]);
    }));
    function requestOtp() {
      return _requestOtp.apply(this, arguments);
    }
    return requestOtp;
  }();
  var submit = /*#__PURE__*/function () {
    var _submit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(event) {
      var payload, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            event.preventDefault();
            setBusy(true);
            setError("");
            _context3.p = 1;
            _context3.n = 2;
            return api(mode, {
              method: "POST",
              body: form
            });
          case 2:
            payload = _context3.v;
            onAuth(payload.user);
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            setError(_t3.message);
          case 4:
            _context3.p = 4;
            setBusy(false);
            return _context3.f(4);
          case 5:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3, 4, 5]]);
    }));
    function submit(_x2) {
      return _submit.apply(this, arguments);
    }
    return submit;
  }();
  return /*#__PURE__*/React.createElement("main", {
    className: "auth-page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "auth-story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "auth-brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-emblem"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-bag-heart-fill"
  })), /*#__PURE__*/React.createElement("strong", null, "smartcart")), /*#__PURE__*/React.createElement("div", {
    className: "auth-story-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow light"
  }, "SHOP SMARTER, EVERY DAY"), /*#__PURE__*/React.createElement("h1", null, "Find your next", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "favourite thing.")), /*#__PURE__*/React.createElement("p", null, "Good finds, thoughtful picks, and a smoother way to shop."), /*#__PURE__*/React.createElement("div", {
    className: "auth-perks"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-stars"
  }), " Personalised picks"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-box-seam"
  }), " Track every order"))), /*#__PURE__*/React.createElement("div", {
    className: "auth-photo-credit"
  }, "Your next great find is just around the corner.")), /*#__PURE__*/React.createElement("section", {
    className: "auth-panel"
  }, /*#__PURE__*/React.createElement("button", {
    className: "auth-theme-toggle",
    onClick: onTheme
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi ".concat(theme === "dark" ? "bi-sun-fill" : "bi-moon-stars-fill")
  }), theme === "dark" ? "Light mode" : "Dark mode"), /*#__PURE__*/React.createElement("div", {
    className: "auth-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "auth-mobile-brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-emblem"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-bag-heart-fill"
  })), /*#__PURE__*/React.createElement("strong", null, "smartcart")), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "WELCOME TO SMARTCART"), /*#__PURE__*/React.createElement("h2", null, mode === "login" ? "Sign in to your account" : "Create your account"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "Your wishlist, orders, and recommendations are waiting."), /*#__PURE__*/React.createElement("div", {
    className: "auth-switch"
  }, /*#__PURE__*/React.createElement("button", {
    className: mode === "login" ? "selected" : "",
    onClick: function onClick() {
      setMode("login");
      setError("");
      setOtpNote("");
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("button", {
    className: mode === "signup" ? "selected" : "",
    onClick: function onClick() {
      setMode("signup");
      setError("");
      setOtpNote("");
    }
  }, "Create account")), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    className: "auth-form"
  }, mode === "signup" && /*#__PURE__*/React.createElement("label", null, "Your name", /*#__PURE__*/React.createElement("input", {
    autoComplete: "name",
    value: form.name,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        name: e.target.value
      }));
    },
    required: true,
    maxLength: "80",
    placeholder: "Full name"
  })), /*#__PURE__*/React.createElement("label", null, "Email address", /*#__PURE__*/React.createElement("input", {
    type: "email",
    autoComplete: "email",
    value: form.email,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        email: e.target.value
      }));
    },
    required: true,
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement("label", null, "Password", /*#__PURE__*/React.createElement("div", {
    className: "password-field"
  }, /*#__PURE__*/React.createElement("input", {
    type: showPassword ? "text" : "password",
    autoComplete: mode === "login" ? "current-password" : "new-password",
    value: form.password,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        password: e.target.value
      }));
    },
    required: true,
    minLength: "6",
    placeholder: "At least 6 characters"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": showPassword ? "Hide password" : "Show password",
    onClick: function onClick() {
      return setShowPassword(!showPassword);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi ".concat(showPassword ? "bi-eye-slash" : "bi-eye")
  })))), /*#__PURE__*/React.createElement("label", null, "Demo verification code", /*#__PURE__*/React.createElement("div", {
    className: "otp-row"
  }, /*#__PURE__*/React.createElement("input", {
    inputMode: "numeric",
    autoComplete: "one-time-code",
    value: form.otp,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        otp: e.target.value.replace(/\D/g, "").slice(0, 6)
      }));
    },
    required: true,
    maxLength: "6",
    placeholder: "6 digits"
  }), /*#__PURE__*/React.createElement("button", {
    className: "button button-outline",
    type: "button",
    disabled: busy || !form.email,
    onClick: requestOtp
  }, busy ? "Please wait…" : "Get code"))), otpNote && /*#__PURE__*/React.createElement("div", {
    className: "inline-note"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-info-circle-fill"
  }), /*#__PURE__*/React.createElement("span", null, otpNote)), error && /*#__PURE__*/React.createElement("div", {
    className: "inline-error",
    role: "alert"
  }, error), /*#__PURE__*/React.createElement("button", {
    className: "button button-primary button-wide",
    disabled: busy
  }, busy ? "Working…" : mode === "login" ? "Sign in" : "Create account", /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrow-right"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "demo-hint"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-shield-check"
  }), " Demo OTP only. Use the sample accounts listed in the project README for a quick walkthrough."))));
}
function Header(_ref2) {
  var user = _ref2.user,
    tab = _ref2.tab,
    setTab = _ref2.setTab,
    query = _ref2.query,
    setQuery = _ref2.setQuery,
    onSearch = _ref2.onSearch,
    counts = _ref2.counts,
    theme = _ref2.theme,
    onTheme = _ref2.onTheme,
    onLogout = _ref2.onLogout;
  var nav = ["shop", "wishlist", "orders", "profile"];
  if (user.role === "admin") nav.push("admin");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "main-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-main"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mobile-menu icon-button",
    "aria-label": "Open shop",
    onClick: function onClick() {
      return setTab("shop");
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-list"
  })), /*#__PURE__*/React.createElement("button", {
    className: "wordmark",
    onClick: function onClick() {
      return setTab("shop");
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-emblem"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-bag-heart-fill"
  })), /*#__PURE__*/React.createElement("span", null, "smartcart", /*#__PURE__*/React.createElement("small", null, "good finds, made simple"))), /*#__PURE__*/React.createElement("form", {
    className: "header-search",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      onSearch(query);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-search"
  }), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    placeholder: "Search products, brands and more",
    "aria-label": "Search products"
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrow-right"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "header-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "theme-toggle",
    title: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
    onClick: onTheme
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi ".concat(theme === "dark" ? "bi-sun-fill" : "bi-moon-stars-fill")
  }), /*#__PURE__*/React.createElement("span", null, theme === "dark" ? "Light" : "Dark")), /*#__PURE__*/React.createElement("button", {
    className: "account-chip",
    onClick: function onClick() {
      return setTab("profile");
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-person-circle"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("small", null, "Hello,"), user.name.split(" ")[0])), /*#__PURE__*/React.createElement("button", {
    className: "cart-shortcut ".concat(tab === "cart" ? "active" : ""),
    onClick: function onClick() {
      return setTab("cart");
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-cart3"
  }), /*#__PURE__*/React.createElement("span", null, "Cart"), counts.cart > 0 && /*#__PURE__*/React.createElement("b", null, counts.cart)), /*#__PURE__*/React.createElement("button", {
    className: "icon-button logout-button",
    title: "Sign out",
    onClick: onLogout
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-box-arrow-right"
  }))))), /*#__PURE__*/React.createElement("nav", {
    className: "subnav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subnav-inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: tab === "shop" ? "active" : "",
    onClick: function onClick() {
      return setTab("shop");
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-grid"
  }), " All"), nav.map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      className: tab === item ? "active" : "",
      onClick: function onClick() {
        return setTab(item);
      }
    }, item === "wishlist" ? /*#__PURE__*/React.createElement("i", {
      className: "bi bi-heart"
    }) : item === "orders" ? /*#__PURE__*/React.createElement("i", {
      className: "bi bi-box-seam"
    }) : item === "admin" ? /*#__PURE__*/React.createElement("i", {
      className: "bi bi-speedometer2"
    }) : item === "profile" ? /*#__PURE__*/React.createElement("i", {
      className: "bi bi-person"
    }) : null, item === "admin" ? "Admin" : item[0].toUpperCase() + item.slice(1), item === "wishlist" && counts.wishlist > 0 ? " (".concat(counts.wishlist, ")") : "");
  }), /*#__PURE__*/React.createElement("span", {
    className: "subnav-spacer"
  }), /*#__PURE__*/React.createElement("span", {
    className: "demo-pill"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-patch-check-fill"
  }), " Local demo store"))));
}
function ProductCard(_ref3) {
  var product = _ref3.product,
    onCart = _ref3.onCart,
    onWish = _ref3.onWish,
    onOpen = _ref3.onOpen,
    wished = _ref3.wished;
  return /*#__PURE__*/React.createElement("article", {
    className: "product-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-photo",
    onClick: function onClick() {
      return onOpen(product);
    },
    role: "button",
    tabIndex: "0",
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && onOpen(product);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: product.image || fallbackImage,
    alt: product.name,
    onError: function onError(e) {
      e.currentTarget.src = fallbackImage;
    }
  }), Number(product.stock) === 0 && /*#__PURE__*/React.createElement("span", {
    className: "stock-ribbon"
  }, "Out of stock"), /*#__PURE__*/React.createElement("button", {
    className: "wish-button ".concat(wished ? "wished" : ""),
    "aria-label": wished ? "Remove from wishlist" : "Add to wishlist",
    onClick: function onClick(e) {
      e.stopPropagation();
      onWish(product);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi ".concat(wished ? "bi-heart-fill" : "bi-heart")
  }))), /*#__PURE__*/React.createElement("div", {
    className: "product-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-meta"
  }, /*#__PURE__*/React.createElement("span", null, product.category_name || "Shop"), /*#__PURE__*/React.createElement("span", {
    className: "product-rating"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-star-fill"
  }), " ", Number(product.rating || 0).toFixed(1), Number(product.review_count) > 0 ? " (".concat(product.review_count, ")") : "")), /*#__PURE__*/React.createElement("button", {
    className: "product-name",
    onClick: function onClick() {
      return onOpen(product);
    }
  }, product.name), /*#__PURE__*/React.createElement("p", null, product.description), /*#__PURE__*/React.createElement("div", {
    className: "product-bottom"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, currency(product.price)), /*#__PURE__*/React.createElement("small", null, Number(product.stock) > 0 ? "".concat(product.stock, " in stock") : "Currently unavailable")), /*#__PURE__*/React.createElement("button", {
    className: "add-button",
    disabled: Number(product.stock) < 1,
    onClick: function onClick() {
      return onCart(product);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-cart-plus"
  }), /*#__PURE__*/React.createElement("span", null, "Add")))));
}
function Shop(_ref4) {
  var products = _ref4.products,
    categories = _ref4.categories,
    query = _ref4.query,
    wishlistIds = _ref4.wishlistIds,
    onQuery = _ref4.onQuery,
    onSearch = _ref4.onSearch,
    onCart = _ref4.onCart,
    onWish = _ref4.onWish,
    onOpen = _ref4.onOpen,
    onGuide = _ref4.onGuide;
  var _useState11 = useState(""),
    _useState12 = _slicedToArray(_useState11, 2),
    category = _useState12[0],
    setCategory = _useState12[1];
  var _useState13 = useState("featured"),
    _useState14 = _slicedToArray(_useState13, 2),
    sort = _useState14[0],
    setSort = _useState14[1];
  var sorted = useMemo(function () {
    var result = _toConsumableArray(products);
    if (sort === "price-low") result.sort(function (a, b) {
      return Number(a.price) - Number(b.price);
    });
    if (sort === "price-high") result.sort(function (a, b) {
      return Number(b.price) - Number(a.price);
    });
    if (sort === "rating") result.sort(function (a, b) {
      return Number(b.rating) - Number(a.rating);
    });
    return result;
  }, [products, sort]);
  var filterCategory = function filterCategory(id) {
    setCategory(String(id || ""));
    onSearch(query, id || "");
  };
  return /*#__PURE__*/React.createElement("main", {
    className: "page-content shop-page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hero-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow light"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-stars"
  }), " YOUR EVERYDAY DISCOVERY STORE"), /*#__PURE__*/React.createElement("h1", null, "Little things.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Big happy.")), /*#__PURE__*/React.createElement("p", null, "Browse good finds across tech, home, and everyday life. Your next favourite is waiting."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "button button-warm",
    onClick: function onClick() {
      var _document$getElementB;
      return (_document$getElementB = document.getElementById("catalog")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, "Explore the store ", /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrow-down-right"
  })), /*#__PURE__*/React.createElement("button", {
    className: "hero-guide-link",
    onClick: onGuide
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-stars"
  }), " Ask the shopping guide"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-art"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-sticker"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-box-seam-fill"
  }), /*#__PURE__*/React.createElement("span", null, "Good picks.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Great prices.")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-bottom-note"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-truck"
  }), " Simple demo checkout"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-heart"
  }), " Save your favourites"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-lightning-charge"
  }), " Smart local suggestions"))), /*#__PURE__*/React.createElement("section", {
    className: "benefit-strip"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "benefit-icon coral"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-patch-check"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Curated finds"), /*#__PURE__*/React.createElement("small", null, "Worth a closer look"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "benefit-icon mint"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-box-seam"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Order tracking"), /*#__PURE__*/React.createElement("small", null, "Know what happens next"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "benefit-icon lilac"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-stars"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Smart suggestions"), /*#__PURE__*/React.createElement("small", null, "Find a fit for your budget"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "benefit-icon yellow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-moon-stars"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Made for you"), /*#__PURE__*/React.createElement("small", null, "Save your picks")))), /*#__PURE__*/React.createElement("section", {
    className: "category-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-heading"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "TAKE A LOOK AROUND"), /*#__PURE__*/React.createElement("h2", null, "Shop by category")), /*#__PURE__*/React.createElement("button", {
    className: "text-link",
    onClick: function onClick() {
      return filterCategory("");
    }
  }, "View everything ", /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrow-right"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "category-list"
  }, categories.map(function (cat, index) {
    return /*#__PURE__*/React.createElement("button", {
      className: "category-tile tile-".concat(index % 6, " ").concat(Number(category) === Number(cat.id) ? "chosen" : ""),
      key: cat.id,
      onClick: function onClick() {
        return filterCategory(cat.id);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "category-icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi ".concat(["bi-phone", "bi-smartwatch", "bi-house-heart", "bi-controller", "bi-bag", "bi-laptop", "bi-stars", "bi-cup-hot", "bi-book", "bi-bicycle", "bi-fan", "bi-puzzle"][index % 12])
    })), /*#__PURE__*/React.createElement("b", null, cat.name));
  }))), /*#__PURE__*/React.createElement("section", {
    className: "recommend-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recommend-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow light"
  }, "A LITTLE HELP FROM YOUR SHOPPING GUIDE"), /*#__PURE__*/React.createElement("h2", null, "Tell us what you need.", /*#__PURE__*/React.createElement("br", null), "We\u2019ll find a few good fits."), /*#__PURE__*/React.createElement("p", null, "Share a budget and product type. SmartCart checks the local catalog and explains its picks."), /*#__PURE__*/React.createElement("button", {
    className: "button button-warm",
    onClick: onGuide
  }, "Find my picks ", /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrow-right"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "recommend-art"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sparkle s1"
  }, "\u2726"), /*#__PURE__*/React.createElement("span", {
    className: "sparkle s2"
  }, "\u2726"), /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chat-square-heart-fill"
  }), /*#__PURE__*/React.createElement("div", {
    className: "speech-card"
  }, "\u201CHeadphones under \u20B95,000\u201D", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "Let\u2019s find something good.")))), /*#__PURE__*/React.createElement("section", {
    className: "catalog-section",
    id: "catalog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-heading catalog-heading"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "MADE FOR YOUR MOMENT"), /*#__PURE__*/React.createElement("h2", null, query ? "Results for \u201C".concat(query, "\u201D") : "Find your next favourite"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, products.length, " items to explore")), /*#__PURE__*/React.createElement("label", {
    className: "sort-control"
  }, "Sort by", /*#__PURE__*/React.createElement("select", {
    value: sort,
    onChange: function onChange(e) {
      return setSort(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "featured"
  }, "Featured"), /*#__PURE__*/React.createElement("option", {
    value: "price-low"
  }, "Price: low to high"), /*#__PURE__*/React.createElement("option", {
    value: "price-high"
  }, "Price: high to low"), /*#__PURE__*/React.createElement("option", {
    value: "rating"
  }, "Top rated")))), /*#__PURE__*/React.createElement("div", {
    className: "catalog-filter"
  }, /*#__PURE__*/React.createElement("button", {
    className: !category ? "selected" : "",
    onClick: function onClick() {
      return filterCategory("");
    }
  }, "All items"), categories.map(function (cat) {
    return /*#__PURE__*/React.createElement("button", {
      key: cat.id,
      className: Number(category) === Number(cat.id) ? "selected" : "",
      onClick: function onClick() {
        return filterCategory(cat.id);
      }
    }, cat.name);
  })), /*#__PURE__*/React.createElement("div", {
    className: "product-grid"
  }, sorted.map(function (product) {
    return /*#__PURE__*/React.createElement(ProductCard, {
      key: product.id,
      product: product,
      onCart: onCart,
      onWish: onWish,
      onOpen: onOpen,
      wished: wishlistIds.includes(Number(product.id))
    });
  })), !sorted.length && /*#__PURE__*/React.createElement("div", {
    className: "empty-state"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-search"
  })), /*#__PURE__*/React.createElement("h3", null, "No products found"), /*#__PURE__*/React.createElement("p", null, "Try a different search or browse all categories."), /*#__PURE__*/React.createElement("button", {
    className: "button button-outline",
    onClick: function onClick() {
      onQuery("");
      filterCategory("");
    }
  }, "Clear search"))));
}
function ProductDetail(_ref5) {
  var product = _ref5.product,
    onClose = _ref5.onClose,
    onAdd = _ref5.onAdd,
    onReviewSaved = _ref5.onReviewSaved;
  var _useState15 = useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    reviews = _useState16[0],
    setReviews = _useState16[1];
  var _useState17 = useState(""),
    _useState18 = _slicedToArray(_useState17, 2),
    summary = _useState18[0],
    setSummary = _useState18[1];
  var _useState19 = useState({
      rating: 5,
      comment: ""
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    form = _useState20[0],
    setForm = _useState20[1];
  var _useState21 = useState(""),
    _useState22 = _slicedToArray(_useState21, 2),
    error = _useState22[0],
    setError = _useState22[1];
  useEffect(function () {
    if (product) api("reviews&product_id=".concat(product.id)).then(function (data) {
      setReviews(data.reviews);
      setSummary(data.summary);
    })["catch"](function (err) {
      return setError(err.message);
    });
  }, [product]);
  if (!product) return null;
  var submit = /*#__PURE__*/function () {
    var _submit2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(e) {
      var data, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            e.preventDefault();
            setError("");
            _context4.p = 1;
            _context4.n = 2;
            return api("review", {
              method: "POST",
              body: _objectSpread(_objectSpread({}, form), {}, {
                product_id: product.id
              })
            });
          case 2:
            _context4.n = 3;
            return api("reviews&product_id=".concat(product.id));
          case 3:
            data = _context4.v;
            setReviews(data.reviews);
            setSummary(data.summary);
            setForm(_objectSpread(_objectSpread({}, form), {}, {
              comment: ""
            }));
            onReviewSaved();
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            setError(_t4.message);
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 4]]);
    }));
    function submit(_x3) {
      return _submit2.apply(this, arguments);
    }
    return submit;
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onMouseDown: function onMouseDown(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "product-modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": product.name
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-x-lg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "detail-layout"
  }, /*#__PURE__*/React.createElement("img", {
    className: "detail-image",
    src: product.image || fallbackImage,
    onError: function onError(e) {
      e.currentTarget.src = fallbackImage;
    },
    alt: product.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "detail-main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, product.category_name), /*#__PURE__*/React.createElement("h2", null, product.name), /*#__PURE__*/React.createElement("div", {
    className: "detail-rating"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-star-fill"
  }), " ", Number(product.rating || 0).toFixed(1), " ", /*#__PURE__*/React.createElement("span", null, "(", product.review_count || 0, " reviews)")), /*#__PURE__*/React.createElement("p", null, product.description), /*#__PURE__*/React.createElement("strong", {
    className: "detail-price"
  }, currency(product.price)), /*#__PURE__*/React.createElement("p", {
    className: "stock-copy"
  }, product.stock > 0 ? "".concat(product.stock, " available") : "Currently unavailable"), /*#__PURE__*/React.createElement("button", {
    className: "button button-primary",
    disabled: product.stock < 1,
    onClick: function onClick() {
      return onAdd(product);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-cart-plus"
  }), " Add to cart"))), /*#__PURE__*/React.createElement("div", {
    className: "reviews-block"
  }, /*#__PURE__*/React.createElement("h3", null, "Customer notes"), /*#__PURE__*/React.createElement("p", {
    className: "review-insight"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-stars"
  }), " ", summary || "Loading review insights…"), /*#__PURE__*/React.createElement("div", {
    className: "review-list"
  }, reviews.map(function (review) {
    return /*#__PURE__*/React.createElement("div", {
      className: "review-item",
      key: review.id
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, review.name), /*#__PURE__*/React.createElement("span", {
      className: "stars"
    }, "★".repeat(Number(review.rating)))), /*#__PURE__*/React.createElement("p", null, review.comment));
  }), !reviews.length && /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "Be the first to leave a note.")), /*#__PURE__*/React.createElement("form", {
    className: "review-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("label", null, "Your rating", /*#__PURE__*/React.createElement("select", {
    value: form.rating,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        rating: Number(e.target.value)
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "5"
  }, "5 stars"), /*#__PURE__*/React.createElement("option", {
    value: "4"
  }, "4 stars"), /*#__PURE__*/React.createElement("option", {
    value: "3"
  }, "3 stars"), /*#__PURE__*/React.createElement("option", {
    value: "2"
  }, "2 stars"), /*#__PURE__*/React.createElement("option", {
    value: "1"
  }, "1 star"))), /*#__PURE__*/React.createElement("label", null, "Your review", /*#__PURE__*/React.createElement("input", {
    maxLength: "1000",
    required: true,
    value: form.comment,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        comment: e.target.value
      }));
    },
    placeholder: "What did you think?"
  })), /*#__PURE__*/React.createElement("button", {
    className: "button button-outline"
  }, "Post review")), error && /*#__PURE__*/React.createElement("p", {
    className: "inline-error"
  }, error))));
}
function CartPage(_ref6) {
  var cart = _ref6.cart,
    onRemove = _ref6.onRemove,
    onUpdate = _ref6.onUpdate,
    onCheckout = _ref6.onCheckout;
  var _useState23 = useState({
      name: "",
      phone: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      postal_code: ""
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    address = _useState24[0],
    setAddress = _useState24[1];
  var total = cart.reduce(function (sum, item) {
    return sum + Number(item.price) * Number(item.quantity);
  }, 0);
  return /*#__PURE__*/React.createElement("main", {
    className: "page-content inner-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-heading"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "YOUR BAG"), /*#__PURE__*/React.createElement("h1", null, "Shopping cart"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "Review your finds and delivery details.")), /*#__PURE__*/React.createElement("div", {
    className: "step-indicator"
  }, /*#__PURE__*/React.createElement("span", {
    className: "current"
  }, "1"), " Cart ", /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chevron-right"
  }), /*#__PURE__*/React.createElement("span", null, "2"), " Delivery & payment")), !cart.length ? /*#__PURE__*/React.createElement("div", {
    className: "empty-state panel-empty"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-cart3"
  })), /*#__PURE__*/React.createElement("h3", null, "Your cart is taking a little break"), /*#__PURE__*/React.createElement("p", null, "Find something lovely and add it here."), /*#__PURE__*/React.createElement("button", {
    className: "button button-primary",
    onClick: function onClick() {
      return onCheckout(null);
    }
  }, "Browse the store")) : /*#__PURE__*/React.createElement("div", {
    className: "checkout-layout"
  }, /*#__PURE__*/React.createElement("section", {
    className: "cart-items panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-heading"
  }, /*#__PURE__*/React.createElement("h2", null, "Items in your cart ", /*#__PURE__*/React.createElement("small", null, "(", cart.reduce(function (sum, item) {
    return sum + Number(item.quantity);
  }, 0), ")")), /*#__PURE__*/React.createElement("span", null, "Price")), cart.map(function (item) {
    return /*#__PURE__*/React.createElement("article", {
      className: "cart-row",
      key: item.id
    }, /*#__PURE__*/React.createElement("img", {
      src: item.image || fallbackImage,
      onError: function onError(e) {
        e.currentTarget.src = fallbackImage;
      },
      alt: item.name
    }), /*#__PURE__*/React.createElement("div", {
      className: "cart-item-copy"
    }, /*#__PURE__*/React.createElement("b", null, item.name), /*#__PURE__*/React.createElement("span", null, item.category_name || "SmartCart find"), /*#__PURE__*/React.createElement("small", null, Number(item.stock) > 0 ? "".concat(item.stock, " available") : "Out of stock"), /*#__PURE__*/React.createElement("div", {
      className: "cart-item-actions"
    }, /*#__PURE__*/React.createElement("div", {
      className: "quantity-stepper"
    }, /*#__PURE__*/React.createElement("button", {
      disabled: item.quantity <= 1,
      onClick: function onClick() {
        return onUpdate(item.id, Number(item.quantity) - 1);
      },
      "aria-label": "Decrease quantity"
    }, "\u2212"), /*#__PURE__*/React.createElement("span", null, item.quantity), /*#__PURE__*/React.createElement("button", {
      disabled: item.quantity >= item.stock,
      onClick: function onClick() {
        return onUpdate(item.id, Number(item.quantity) + 1);
      },
      "aria-label": "Increase quantity"
    }, "+")), /*#__PURE__*/React.createElement("button", {
      className: "remove-link",
      onClick: function onClick() {
        return onRemove(item.id);
      }
    }, "Remove"))), /*#__PURE__*/React.createElement("strong", null, currency(item.price * item.quantity)));
  }), /*#__PURE__*/React.createElement("button", {
    className: "text-link continue-shopping",
    onClick: function onClick() {
      return onCheckout(null);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrow-left"
  }), " Continue shopping")), /*#__PURE__*/React.createElement("aside", {
    className: "delivery-panel panel"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "DELIVERY DETAILS"), /*#__PURE__*/React.createElement("h2", null, "Where should we send it?"), /*#__PURE__*/React.createElement("form", {
    className: "address-form",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      onCheckout(address);
    }
  }, /*#__PURE__*/React.createElement("label", null, "Full name", /*#__PURE__*/React.createElement("input", {
    autoComplete: "name",
    required: true,
    maxLength: "80",
    value: address.name,
    onChange: function onChange(e) {
      return setAddress(_objectSpread(_objectSpread({}, address), {}, {
        name: e.target.value
      }));
    },
    placeholder: "Name on delivery"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-pair"
  }, /*#__PURE__*/React.createElement("label", null, "Phone number", /*#__PURE__*/React.createElement("input", {
    autoComplete: "tel",
    required: true,
    pattern: "[0-9+() -]{8,18}",
    value: address.phone,
    onChange: function onChange(e) {
      return setAddress(_objectSpread(_objectSpread({}, address), {}, {
        phone: e.target.value
      }));
    },
    placeholder: "+91 98765 43210"
  })), /*#__PURE__*/React.createElement("label", null, "Postal code", /*#__PURE__*/React.createElement("input", {
    autoComplete: "postal-code",
    required: true,
    pattern: "[0-9]{5,10}",
    value: address.postal_code,
    onChange: function onChange(e) {
      return setAddress(_objectSpread(_objectSpread({}, address), {}, {
        postal_code: e.target.value
      }));
    },
    placeholder: "110001"
  }))), /*#__PURE__*/React.createElement("label", null, "Address line", /*#__PURE__*/React.createElement("input", {
    autoComplete: "address-line1",
    required: true,
    maxLength: "180",
    value: address.line1,
    onChange: function onChange(e) {
      return setAddress(_objectSpread(_objectSpread({}, address), {}, {
        line1: e.target.value
      }));
    },
    placeholder: "Flat, building, street"
  })), /*#__PURE__*/React.createElement("label", null, "Landmark ", /*#__PURE__*/React.createElement("small", null, "(optional)"), /*#__PURE__*/React.createElement("input", {
    value: address.line2,
    onChange: function onChange(e) {
      return setAddress(_objectSpread(_objectSpread({}, address), {}, {
        line2: e.target.value
      }));
    },
    placeholder: "Nearby landmark"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-pair"
  }, /*#__PURE__*/React.createElement("label", null, "City", /*#__PURE__*/React.createElement("input", {
    autoComplete: "address-level2",
    required: true,
    value: address.city,
    onChange: function onChange(e) {
      return setAddress(_objectSpread(_objectSpread({}, address), {}, {
        city: e.target.value
      }));
    },
    placeholder: "City"
  })), /*#__PURE__*/React.createElement("label", null, "State", /*#__PURE__*/React.createElement("input", {
    autoComplete: "address-level1",
    required: true,
    value: address.state,
    onChange: function onChange(e) {
      return setAddress(_objectSpread(_objectSpread({}, address), {}, {
        state: e.target.value
      }));
    },
    placeholder: "State"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "order-summary"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Items subtotal"), /*#__PURE__*/React.createElement("b", null, currency(total))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Delivery"), /*#__PURE__*/React.createElement("b", {
    className: "free-delivery"
  }, "FREE")), /*#__PURE__*/React.createElement("div", {
    className: "summary-total"
  }, /*#__PURE__*/React.createElement("strong", null, "Order total"), /*#__PURE__*/React.createElement("strong", null, currency(total)))), /*#__PURE__*/React.createElement("button", {
    className: "button button-primary button-wide"
  }, "Continue to demo payment ", /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrow-right"
  })), /*#__PURE__*/React.createElement("p", {
    className: "safe-note"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-lock-fill"
  }), " Local demo checkout. No real payment details are collected.")))));
}
function DemoPayment(_ref7) {
  var total = _ref7.total,
    onClose = _ref7.onClose,
    onConfirm = _ref7.onConfirm,
    busy = _ref7.busy;
  var _useState25 = useState("UPI"),
    _useState26 = _slicedToArray(_useState25, 2),
    method = _useState26[0],
    setMethod = _useState26[1];
  var methods = [{
    name: "UPI",
    icon: "bi-qr-code",
    detail: "Demo confirmation only"
  }, {
    name: "Credit / Debit Card",
    icon: "bi-credit-card-2-front",
    detail: "No card number required"
  }, {
    name: "Net Banking",
    icon: "bi-bank",
    detail: "No bank sign-in"
  }, {
    name: "Wallet",
    icon: "bi-wallet2",
    detail: "Local payment simulation"
  }, {
    name: "Cash on Delivery",
    icon: "bi-cash-coin",
    detail: "Pay when delivered"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop payment-backdrop",
    onMouseDown: function onMouseDown(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "payment-modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Demo payment"
  }, /*#__PURE__*/React.createElement("header", {
    className: "payment-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "payment-mark"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-lock-fill"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "SmartCart DemoPay"), /*#__PURE__*/React.createElement("small", null, "Local checkout simulation"))), /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-x-lg"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "payment-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment-amount"
  }, /*#__PURE__*/React.createElement("span", null, "Amount to confirm"), /*#__PURE__*/React.createElement("strong", null, currency(total))), /*#__PURE__*/React.createElement("div", {
    className: "demo-warning"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-info-circle-fill"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Practice payment only"), /*#__PURE__*/React.createElement("br", null), "Not connected to Razorpay, a bank, or any payment network. No money will be charged.")), /*#__PURE__*/React.createElement("h3", null, "Choose a payment method"), /*#__PURE__*/React.createElement("div", {
    className: "payment-methods"
  }, methods.map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: item.name,
      className: method === item.name ? "chosen" : "",
      onClick: function onClick() {
        return setMethod(item.name);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "method-icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi ".concat(item.icon)
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, item.name), /*#__PURE__*/React.createElement("small", null, item.detail)), /*#__PURE__*/React.createElement("i", {
      className: "bi ".concat(method === item.name ? "bi-check-circle-fill" : "bi-circle", " method-check")
    }));
  })), /*#__PURE__*/React.createElement("button", {
    className: "button button-primary button-wide payment-confirm",
    disabled: busy,
    onClick: function onClick() {
      return onConfirm(method);
    }
  }, busy ? "Confirming demo order…" : method === "Cash on Delivery" ? "Place demo order" : "Confirm demo payment \xB7 ".concat(currency(total)), /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrow-right"
  })), /*#__PURE__*/React.createElement("p", {
    className: "payment-footnote"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-shield-check"
  }), " A demo receipt will be generated. Payment reference is simulated."))));
}
function WishlistPage(_ref8) {
  var wishlist = _ref8.wishlist,
    onRemove = _ref8.onRemove,
    onCart = _ref8.onCart,
    onOpen = _ref8.onOpen;
  return /*#__PURE__*/React.createElement("main", {
    className: "page-content inner-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-heading"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "SAVED FOR LATER"), /*#__PURE__*/React.createElement("h1", null, "Your wishlist"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "All the good things you\u2019re keeping an eye on.")), /*#__PURE__*/React.createElement("span", {
    className: "count-bubble"
  }, wishlist.length, " saved")), wishlist.length ? /*#__PURE__*/React.createElement("div", {
    className: "product-grid"
  }, wishlist.map(function (product) {
    return /*#__PURE__*/React.createElement("div", {
      className: "wishlist-card-wrap",
      key: product.id
    }, /*#__PURE__*/React.createElement(ProductCard, {
      product: product,
      onCart: onCart,
      onWish: function onWish(item) {
        return onRemove(item.id);
      },
      onOpen: onOpen,
      wished: true
    }), /*#__PURE__*/React.createElement("button", {
      className: "wishlist-remove",
      onClick: function onClick() {
        return onRemove(product.id);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-trash3"
    }), " Remove from wishlist"));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "empty-state panel-empty"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-heart"
  })), /*#__PURE__*/React.createElement("h3", null, "Your saved finds live here"), /*#__PURE__*/React.createElement("p", null, "Tap the heart on something you like to keep it close.")));
}
function OrdersPage(_ref9) {
  var orders = _ref9.orders,
    onInvoice = _ref9.onInvoice,
    onStatus = _ref9.onStatus,
    isAdmin = _ref9.isAdmin;
  var statuses = ["Processing", "Packed", "Shipped", "Out for delivery", "Delivered"];
  return /*#__PURE__*/React.createElement("main", {
    className: "page-content inner-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-heading"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "YOUR SMARTCART HISTORY"), /*#__PURE__*/React.createElement("h1", null, isAdmin ? "Order management" : "Your orders"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "Follow each order from confirmation to delivery.")), /*#__PURE__*/React.createElement("span", {
    className: "count-bubble"
  }, orders.length, " orders")), orders.length ? /*#__PURE__*/React.createElement("div", {
    className: "orders-list"
  }, orders.map(function (order) {
    var address = {};
    try {
      address = JSON.parse(order.address || "{}");
    } catch (_unused2) {
      address = {};
    }
    return /*#__PURE__*/React.createElement("article", {
      className: "order-card panel",
      key: order.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "order-card-top"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "order-number"
    }, "ORDER #", order.id), /*#__PURE__*/React.createElement("small", null, "Placed ", order.created_at)), /*#__PURE__*/React.createElement("span", {
      className: "status-badge status-".concat(String(order.status).toLowerCase().replaceAll(" ", "-"))
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-circle-fill"
    }), order.status)), /*#__PURE__*/React.createElement("div", {
      className: "order-card-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "order-icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-box-seam"
    })), /*#__PURE__*/React.createElement("div", {
      className: "order-summary-copy"
    }, /*#__PURE__*/React.createElement("b", null, isAdmin ? "Customer: ".concat(order.customer) : "Your SmartCart order"), /*#__PURE__*/React.createElement("span", null, "Tracking ID ", /*#__PURE__*/React.createElement("strong", null, order.tracking_code)), /*#__PURE__*/React.createElement("span", null, address.name ? "".concat(address.name, " \xB7 ").concat(address.city, ", ").concat(address.state, " ").concat(address.postal_code) : order.address), /*#__PURE__*/React.createElement("span", null, "Payment: ", order.payment_method, " \xB7 ", order.payment_status)), /*#__PURE__*/React.createElement("div", {
      className: "order-total"
    }, /*#__PURE__*/React.createElement("small", null, "Order total"), /*#__PURE__*/React.createElement("strong", null, currency(order.total)))), /*#__PURE__*/React.createElement("div", {
      className: "order-card-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "button button-outline button-sm",
      onClick: function onClick() {
        return onInvoice(order.id);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-file-earmark-pdf"
    }), " Download receipt"), isAdmin && /*#__PURE__*/React.createElement("label", {
      className: "status-control"
    }, "Update status", /*#__PURE__*/React.createElement("select", {
      value: order.status,
      onChange: function onChange(e) {
        return onStatus(order.id, e.target.value);
      }
    }, statuses.map(function (status) {
      return /*#__PURE__*/React.createElement("option", {
        key: status
      }, status);
    })))));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "empty-state panel-empty"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-box-seam"
  })), /*#__PURE__*/React.createElement("h3", null, "No orders just yet"), /*#__PURE__*/React.createElement("p", null, "Your future favourites and receipts will show up here.")));
}
function ProfilePage(_ref0) {
  var user = _ref0.user,
    history = _ref0.history,
    onSave = _ref0.onSave;
  var _useState27 = useState({
      name: user.name,
      mood: user.mood || "curious"
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    form = _useState28[0],
    setForm = _useState28[1];
  return /*#__PURE__*/React.createElement("main", {
    className: "page-content inner-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-heading"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "YOUR ACCOUNT"), /*#__PURE__*/React.createElement("h1", null, "Profile & activity"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "Keep your details and shopping preferences up to date."))), /*#__PURE__*/React.createElement("div", {
    className: "profile-layout"
  }, /*#__PURE__*/React.createElement("section", {
    className: "panel profile-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-avatar"
  }, user.avatar || user.name.slice(0, 2).toUpperCase()), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "ACCOUNT DETAILS"), /*#__PURE__*/React.createElement("h2", null, user.name), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, user.email), /*#__PURE__*/React.createElement("label", null, "Name", /*#__PURE__*/React.createElement("input", {
    maxLength: "80",
    value: form.name,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        name: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("label", null, "Shopping mood", /*#__PURE__*/React.createElement("select", {
    value: form.mood,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        mood: e.target.value
      }));
    }
  }, ["curious", "focused", "creative", "calm", "travel", "gaming", "fitness", "study", "work", "energetic"].map(function (mood) {
    return /*#__PURE__*/React.createElement("option", {
      key: mood
    }, mood);
  }))), /*#__PURE__*/React.createElement("button", {
    className: "button button-primary",
    onClick: function onClick() {
      return onSave(form);
    }
  }, "Save changes ", /*#__PURE__*/React.createElement("i", {
    className: "bi bi-check2"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "panel activity-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "RECENTLY"), /*#__PURE__*/React.createElement("h2", null, "Your activity"), history.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      className: "activity-row",
      key: item.id
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-stars"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, item.action), /*#__PURE__*/React.createElement("small", null, item.product_name || item.details || "SmartCart", " \xB7 ", item.created_at)));
  }), !history.length && /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "Your recent shop activity will appear here."))));
}
function AdminPage(_ref1) {
  var _categories$;
  var stats = _ref1.stats,
    categories = _ref1.categories,
    onAddCategory = _ref1.onAddCategory,
    onAddProduct = _ref1.onAddProduct;
  var _useState29 = useState({
      name: "",
      description: ""
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    category = _useState30[0],
    setCategory = _useState30[1];
  var _useState31 = useState({
      category_id: ((_categories$ = categories[0]) === null || _categories$ === void 0 ? void 0 : _categories$.id) || "",
      name: "",
      price: "",
      stock: "",
      image: "",
      mood_tags: "",
      description: ""
    }),
    _useState32 = _slicedToArray(_useState31, 2),
    product = _useState32[0],
    setProduct = _useState32[1];
  return /*#__PURE__*/React.createElement("main", {
    className: "page-content inner-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-heading"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "STORE CONTROL"), /*#__PURE__*/React.createElement("h1", null, "Admin studio"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "A quick view of the local demo store."))), /*#__PURE__*/React.createElement("div", {
    className: "metric-grid"
  }, Object.entries(stats || {}).map(function (_ref10) {
    var _ref11 = _slicedToArray(_ref10, 2),
      key = _ref11[0],
      value = _ref11[1];
    return /*#__PURE__*/React.createElement("div", {
      className: "metric-card panel",
      key: key
    }, /*#__PURE__*/React.createElement("span", null, key), /*#__PURE__*/React.createElement("strong", null, key === "revenue" ? currency(value) : value), /*#__PURE__*/React.createElement("small", null, key === "revenue" ? "Recorded demo orders" : "In your store"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "admin-forms"
  }, /*#__PURE__*/React.createElement("form", {
    className: "panel admin-card",
    onSubmit: (/*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(e) {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              e.preventDefault();
              _context5.n = 1;
              return onAddCategory(category);
            case 1:
              setCategory({
                name: "",
                description: ""
              });
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      }));
      return function (_x4) {
        return _ref12.apply(this, arguments);
      };
    }())
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "ORGANISE"), /*#__PURE__*/React.createElement("h2", null, "Add a category"), /*#__PURE__*/React.createElement("label", null, "Category name", /*#__PURE__*/React.createElement("input", {
    required: true,
    maxLength: "60",
    value: category.name,
    onChange: function onChange(e) {
      return setCategory(_objectSpread(_objectSpread({}, category), {}, {
        name: e.target.value
      }));
    },
    placeholder: "Audio & headphones"
  })), /*#__PURE__*/React.createElement("label", null, "Description", /*#__PURE__*/React.createElement("input", {
    value: category.description,
    onChange: function onChange(e) {
      return setCategory(_objectSpread(_objectSpread({}, category), {}, {
        description: e.target.value
      }));
    },
    placeholder: "A short description"
  })), /*#__PURE__*/React.createElement("button", {
    className: "button button-outline"
  }, "Add category ", /*#__PURE__*/React.createElement("i", {
    className: "bi bi-plus-lg"
  }))), /*#__PURE__*/React.createElement("form", {
    className: "panel admin-card",
    onSubmit: (/*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(e) {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              e.preventDefault();
              _context6.n = 1;
              return onAddProduct(product);
            case 1:
              setProduct(_objectSpread(_objectSpread({}, product), {}, {
                name: "",
                price: "",
                stock: "",
                image: "",
                mood_tags: "",
                description: ""
              }));
            case 2:
              return _context6.a(2);
          }
        }, _callee6);
      }));
      return function (_x5) {
        return _ref13.apply(this, arguments);
      };
    }())
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "ADD TO CATALOG"), /*#__PURE__*/React.createElement("h2", null, "New product"), /*#__PURE__*/React.createElement("div", {
    className: "form-pair"
  }, /*#__PURE__*/React.createElement("label", null, "Name", /*#__PURE__*/React.createElement("input", {
    required: true,
    maxLength: "140",
    value: product.name,
    onChange: function onChange(e) {
      return setProduct(_objectSpread(_objectSpread({}, product), {}, {
        name: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("label", null, "Category", /*#__PURE__*/React.createElement("select", {
    required: true,
    value: product.category_id,
    onChange: function onChange(e) {
      return setProduct(_objectSpread(_objectSpread({}, product), {}, {
        category_id: e.target.value
      }));
    }
  }, categories.map(function (cat) {
    return /*#__PURE__*/React.createElement("option", {
      key: cat.id,
      value: cat.id
    }, cat.name);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "form-pair"
  }, /*#__PURE__*/React.createElement("label", null, "Price (\u20B9)", /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "number",
    min: "1",
    step: "1",
    value: product.price,
    onChange: function onChange(e) {
      return setProduct(_objectSpread(_objectSpread({}, product), {}, {
        price: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("label", null, "Stock", /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "number",
    min: "0",
    step: "1",
    value: product.stock,
    onChange: function onChange(e) {
      return setProduct(_objectSpread(_objectSpread({}, product), {}, {
        stock: e.target.value
      }));
    }
  }))), /*#__PURE__*/React.createElement("label", null, "Image URL", /*#__PURE__*/React.createElement("input", {
    type: "url",
    value: product.image,
    onChange: function onChange(e) {
      return setProduct(_objectSpread(_objectSpread({}, product), {}, {
        image: e.target.value
      }));
    },
    placeholder: "https://\u2026"
  })), /*#__PURE__*/React.createElement("label", null, "Mood tags", /*#__PURE__*/React.createElement("input", {
    value: product.mood_tags,
    onChange: function onChange(e) {
      return setProduct(_objectSpread(_objectSpread({}, product), {}, {
        mood_tags: e.target.value
      }));
    },
    placeholder: "music, study, travel"
  })), /*#__PURE__*/React.createElement("label", null, "Description", /*#__PURE__*/React.createElement("textarea", {
    required: true,
    rows: "2",
    value: product.description,
    onChange: function onChange(e) {
      return setProduct(_objectSpread(_objectSpread({}, product), {}, {
        description: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "button button-primary"
  }, "Add product ", /*#__PURE__*/React.createElement("i", {
    className: "bi bi-plus-lg"
  })))));
}
function ShoppingGuide(_ref14) {
  var open = _ref14.open,
    onClose = _ref14.onClose,
    onAdd = _ref14.onAdd;
  var _useState33 = useState(""),
    _useState34 = _slicedToArray(_useState33, 2),
    prompt = _useState34[0],
    setPrompt = _useState34[1];
  var _useState35 = useState([{
      role: "assistant",
      text: "Hi! Tell me what you’re looking for and your budget. For example: “I have ₹5,000 and want headphones.” I’ll look through the SmartCart catalog."
    }]),
    _useState36 = _slicedToArray(_useState35, 2),
    messages = _useState36[0],
    setMessages = _useState36[1];
  var _useState37 = useState(false),
    _useState38 = _slicedToArray(_useState37, 2),
    busy = _useState38[0],
    setBusy = _useState38[1];
  var send = /*#__PURE__*/function () {
    var _send = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var text,
        value,
        result,
        _args7 = arguments,
        _t5;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            text = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : prompt;
            value = text.trim();
            if (!(!value || busy)) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2);
          case 1:
            setPrompt("");
            setMessages(function (old) {
              return [].concat(_toConsumableArray(old), [{
                role: "user",
                text: value
              }]);
            });
            setBusy(true);
            _context7.p = 2;
            _context7.n = 3;
            return api("assistant", {
              method: "POST",
              body: {
                prompt: value
              }
            });
          case 3:
            result = _context7.v;
            setMessages(function (old) {
              return [].concat(_toConsumableArray(old), [{
                role: "assistant",
                text: result.message,
                products: result.products
              }]);
            });
            _context7.n = 5;
            break;
          case 4:
            _context7.p = 4;
            _t5 = _context7.v;
            setMessages(function (old) {
              return [].concat(_toConsumableArray(old), [{
                role: "assistant",
                text: _t5.message
              }]);
            });
          case 5:
            _context7.p = 5;
            setBusy(false);
            return _context7.f(5);
          case 6:
            return _context7.a(2);
        }
      }, _callee7, null, [[2, 4, 5, 6]]);
    }));
    function send() {
      return _send.apply(this, arguments);
    }
    return send;
  }();
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "guide-overlay",
    onMouseDown: function onMouseDown(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "guide-panel",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "SmartCart shopping guide"
  }, /*#__PURE__*/React.createElement("header", {
    className: "guide-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "guide-avatar"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-stars"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "SmartCart Guide"), /*#__PURE__*/React.createElement("small", null, "Local catalogue assistant \xB7 usually instant")), /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-x-lg"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "guide-disclaimer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-lightbulb-fill"
  }), " Looks at your budget, product words, and in-stock items. No external AI service is used."), /*#__PURE__*/React.createElement("div", {
    className: "guide-messages"
  }, messages.map(function (message, index) {
    var _message$products;
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "guide-message ".concat(message.role)
    }, message.role === "assistant" && /*#__PURE__*/React.createElement("span", {
      className: "mini-guide-avatar"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-stars"
    })), /*#__PURE__*/React.createElement("div", {
      className: "message-bubble"
    }, /*#__PURE__*/React.createElement("p", null, message.text), ((_message$products = message.products) === null || _message$products === void 0 ? void 0 : _message$products.length) > 0 && /*#__PURE__*/React.createElement("div", {
      className: "guide-products"
    }, message.products.map(function (product) {
      return /*#__PURE__*/React.createElement("article", {
        className: "guide-product",
        key: product.id
      }, /*#__PURE__*/React.createElement("img", {
        src: product.image || fallbackImage,
        onError: function onError(e) {
          e.currentTarget.src = fallbackImage;
        },
        alt: ""
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, product.name), /*#__PURE__*/React.createElement("strong", null, currency(product.price)), /*#__PURE__*/React.createElement("small", null, product.assistant_reason)), /*#__PURE__*/React.createElement("button", {
        title: "Add to cart",
        onClick: function onClick() {
          return onAdd(product);
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "bi bi-cart-plus"
      })));
    }))));
  }), busy && /*#__PURE__*/React.createElement("div", {
    className: "guide-message assistant"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-guide-avatar"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-stars"
  })), /*#__PURE__*/React.createElement("div", {
    className: "message-bubble typing"
  }, "Checking the catalogue", /*#__PURE__*/React.createElement("span", null, "\u2022\u2022\u2022")))), /*#__PURE__*/React.createElement("div", {
    className: "guide-suggestions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return send("I have ₹5,000 and want headphones");
    }
  }, "Headphones under \u20B95,000"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return send("Show me a useful gift under ₹2,000");
    }
  }, "Gift under \u20B92,000")), /*#__PURE__*/React.createElement("form", {
    className: "guide-input",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      send();
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: prompt,
    onChange: function onChange(e) {
      return setPrompt(e.target.value);
    },
    placeholder: "What are you looking for?",
    maxLength: "500"
  }), /*#__PURE__*/React.createElement("button", {
    disabled: !prompt.trim() || busy,
    "aria-label": "Send message"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrow-up"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "guide-smallprint"
  }, "Suggestions are based on product tags and availability in this demo catalogue.")));
}
function App() {
  var _useState39 = useState(null),
    _useState40 = _slicedToArray(_useState39, 2),
    user = _useState40[0],
    setUser = _useState40[1];
  var _useState41 = useState(true),
    _useState42 = _slicedToArray(_useState41, 2),
    initializing = _useState42[0],
    setInitializing = _useState42[1];
  var _useState43 = useState("shop"),
    _useState44 = _slicedToArray(_useState43, 2),
    tab = _useState44[0],
    setTab = _useState44[1];
  var _useState45 = useState([]),
    _useState46 = _slicedToArray(_useState45, 2),
    products = _useState46[0],
    setProducts = _useState46[1];
  var _useState47 = useState([]),
    _useState48 = _slicedToArray(_useState47, 2),
    categories = _useState48[0],
    setCategories = _useState48[1];
  var _useState49 = useState([]),
    _useState50 = _slicedToArray(_useState49, 2),
    cart = _useState50[0],
    setCart = _useState50[1];
  var _useState51 = useState([]),
    _useState52 = _slicedToArray(_useState51, 2),
    wishlist = _useState52[0],
    setWishlist = _useState52[1];
  var _useState53 = useState([]),
    _useState54 = _slicedToArray(_useState53, 2),
    orders = _useState54[0],
    setOrders = _useState54[1];
  var _useState55 = useState([]),
    _useState56 = _slicedToArray(_useState55, 2),
    history = _useState56[0],
    setHistory = _useState56[1];
  var _useState57 = useState(null),
    _useState58 = _slicedToArray(_useState57, 2),
    stats = _useState58[0],
    setStats = _useState58[1];
  var _useState59 = useState(""),
    _useState60 = _slicedToArray(_useState59, 2),
    query = _useState60[0],
    setQuery = _useState60[1];
  var _useState61 = useState(null),
    _useState62 = _slicedToArray(_useState61, 2),
    selected = _useState62[0],
    setSelected = _useState62[1];
  var _useState63 = useState(false),
    _useState64 = _slicedToArray(_useState63, 2),
    guideOpen = _useState64[0],
    setGuideOpen = _useState64[1];
  var _useState65 = useState(false),
    _useState66 = _slicedToArray(_useState65, 2),
    paymentOpen = _useState66[0],
    setPaymentOpen = _useState66[1];
  var _useState67 = useState(null),
    _useState68 = _slicedToArray(_useState67, 2),
    checkoutAddress = _useState68[0],
    setCheckoutAddress = _useState68[1];
  var _useState69 = useState(function () {
      try {
        return localStorage.getItem("smartcart_theme") || "light";
      } catch (_unused3) {
        return "light";
      }
    }),
    _useState70 = _slicedToArray(_useState69, 2),
    theme = _useState70[0],
    setTheme = _useState70[1];
  var _useState71 = useState(""),
    _useState72 = _slicedToArray(_useState71, 2),
    notice = _useState72[0],
    setNotice = _useState72[1];
  var _useState73 = useState(""),
    _useState74 = _slicedToArray(_useState73, 2),
    error = _useState74[0],
    setError = _useState74[1];
  var _useState75 = useState(false),
    _useState76 = _slicedToArray(_useState75, 2),
    busy = _useState76[0],
    setBusy = _useState76[1];
  useEffect(function () {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("smartcart_theme", theme);
    } catch (_unused4) {}
  }, [theme]);
  useEffect(function () {
    api("session").then(function (payload) {
      return setUser(payload.user);
    })["catch"](function (err) {
      return setError(err.message);
    })["finally"](function () {
      return setInitializing(false);
    });
  }, []);
  var flash = function flash(message) {
    setNotice(message);
    window.setTimeout(function () {
      return setNotice("");
    }, 2800);
  };
  var refresh = /*#__PURE__*/function () {
    var _refresh = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var account,
        _yield$Promise$all,
        _yield$Promise$all2,
        prod,
        cats,
        _yield$Promise$all3,
        _yield$Promise$all4,
        cartData,
        wishData,
        orderData,
        historyData,
        _args8 = arguments,
        _t6;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            account = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : user;
            _context8.n = 1;
            return Promise.all([api("products"), api("categories")]);
          case 1:
            _yield$Promise$all = _context8.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            prod = _yield$Promise$all2[0];
            cats = _yield$Promise$all2[1];
            setProducts(prod.products);
            setCategories(cats.categories);
            if (account) {
              _context8.n = 2;
              break;
            }
            return _context8.a(2);
          case 2:
            _context8.n = 3;
            return Promise.all([api("cart"), api("wishlist"), api("orders"), api("history")]);
          case 3:
            _yield$Promise$all3 = _context8.v;
            _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 4);
            cartData = _yield$Promise$all4[0];
            wishData = _yield$Promise$all4[1];
            orderData = _yield$Promise$all4[2];
            historyData = _yield$Promise$all4[3];
            setCart(cartData.cart);
            setWishlist(wishData.wishlist);
            setOrders(orderData.orders);
            setHistory(historyData.history);
            if (!(account.role === "admin")) {
              _context8.n = 5;
              break;
            }
            _t6 = setStats;
            _context8.n = 4;
            return api("admin-stats");
          case 4:
            _t6(_context8.v.stats);
            _context8.n = 6;
            break;
          case 5:
            setStats(null);
          case 6:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    function refresh() {
      return _refresh.apply(this, arguments);
    }
    return refresh;
  }();
  useEffect(function () {
    if (!user) return;
    refresh(user)["catch"](function (err) {
      return setError(err.message);
    });
  }, [user === null || user === void 0 ? void 0 : user.id]);
  var search = /*#__PURE__*/function () {
    var _search = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var value,
        category,
        _document$getElementB2,
        data,
        _args9 = arguments,
        _t7;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            value = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : query;
            category = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : "";
            _context9.p = 1;
            _context9.n = 2;
            return api("products&q=".concat(encodeURIComponent(value), "&category=").concat(encodeURIComponent(category)));
          case 2:
            data = _context9.v;
            setProducts(data.products);
            setQuery(value);
            setTab("shop");
            (_document$getElementB2 = document.getElementById("catalog")) === null || _document$getElementB2 === void 0 || _document$getElementB2.scrollIntoView({
              behavior: "smooth"
            });
            _context9.n = 4;
            break;
          case 3:
            _context9.p = 3;
            _t7 = _context9.v;
            setError(_t7.message);
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[1, 3]]);
    }));
    function search() {
      return _search.apply(this, arguments);
    }
    return search;
  }();
  var addCart = /*#__PURE__*/function () {
    var _addCart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(product) {
      var _t8;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            _context0.p = 0;
            _context0.n = 1;
            return api("cart", {
              method: "POST",
              body: {
                product_id: product.id,
                quantity: 1
              }
            });
          case 1:
            _context0.n = 2;
            return refresh();
          case 2:
            flash("".concat(product.name, " added to your cart"));
            _context0.n = 4;
            break;
          case 3:
            _context0.p = 3;
            _t8 = _context0.v;
            setError(_t8.message);
          case 4:
            return _context0.a(2);
        }
      }, _callee0, null, [[0, 3]]);
    }));
    function addCart(_x6) {
      return _addCart.apply(this, arguments);
    }
    return addCart;
  }();
  var addWish = /*#__PURE__*/function () {
    var _addWish = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(product) {
      var _t9;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            _context1.p = 0;
            _context1.n = 1;
            return api("wishlist", {
              method: "POST",
              body: {
                product_id: product.id
              }
            });
          case 1:
            _context1.n = 2;
            return refresh();
          case 2:
            flash("Saved to your wishlist");
            _context1.n = 4;
            break;
          case 3:
            _context1.p = 3;
            _t9 = _context1.v;
            setError(_t9.message);
          case 4:
            return _context1.a(2);
        }
      }, _callee1, null, [[0, 3]]);
    }));
    function addWish(_x7) {
      return _addWish.apply(this, arguments);
    }
    return addWish;
  }();
  var removeWish = /*#__PURE__*/function () {
    var _removeWish = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(productId) {
      var _t0;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            _context10.p = 0;
            _context10.n = 1;
            return api("wishlist-remove", {
              method: "POST",
              body: {
                product_id: productId
              }
            });
          case 1:
            _context10.n = 2;
            return refresh();
          case 2:
            flash("Removed from your wishlist");
            _context10.n = 4;
            break;
          case 3:
            _context10.p = 3;
            _t0 = _context10.v;
            setError(_t0.message);
          case 4:
            return _context10.a(2);
        }
      }, _callee10, null, [[0, 3]]);
    }));
    function removeWish(_x8) {
      return _removeWish.apply(this, arguments);
    }
    return removeWish;
  }();
  var removeCart = /*#__PURE__*/function () {
    var _removeCart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(productId) {
      var _t1;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            _context11.p = 0;
            _context11.n = 1;
            return api("cart-remove", {
              method: "POST",
              body: {
                product_id: productId
              }
            });
          case 1:
            _context11.n = 2;
            return refresh();
          case 2:
            _context11.n = 4;
            break;
          case 3:
            _context11.p = 3;
            _t1 = _context11.v;
            setError(_t1.message);
          case 4:
            return _context11.a(2);
        }
      }, _callee11, null, [[0, 3]]);
    }));
    function removeCart(_x9) {
      return _removeCart.apply(this, arguments);
    }
    return removeCart;
  }();
  var updateCart = /*#__PURE__*/function () {
    var _updateCart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(productId, quantity) {
      var _t10;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            _context12.p = 0;
            _context12.n = 1;
            return api("cart-update", {
              method: "POST",
              body: {
                product_id: productId,
                quantity: quantity
              }
            });
          case 1:
            _context12.n = 2;
            return refresh();
          case 2:
            _context12.n = 4;
            break;
          case 3:
            _context12.p = 3;
            _t10 = _context12.v;
            setError(_t10.message);
          case 4:
            return _context12.a(2);
        }
      }, _callee12, null, [[0, 3]]);
    }));
    function updateCart(_x0, _x1) {
      return _updateCart.apply(this, arguments);
    }
    return updateCart;
  }();
  var openProduct = /*#__PURE__*/function () {
    var _openProduct = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(product) {
      var _t11;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            _context13.p = 0;
            _context13.n = 1;
            return api("view", {
              method: "POST",
              body: {
                product_id: product.id
              }
            });
          case 1:
            setSelected(product);
            _context13.n = 3;
            break;
          case 2:
            _context13.p = 2;
            _t11 = _context13.v;
            setError(_t11.message);
          case 3:
            return _context13.a(2);
        }
      }, _callee13, null, [[0, 2]]);
    }));
    function openProduct(_x10) {
      return _openProduct.apply(this, arguments);
    }
    return openProduct;
  }();
  var downloadInvoice = /*#__PURE__*/function () {
    var _downloadInvoice = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(orderId) {
      var payload, doc, order, address, addressLines, y, _iterator, _step, item, line, _t12;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            _context14.p = 0;
            _context14.n = 1;
            return api("invoice&order_id=".concat(orderId));
          case 1:
            payload = _context14.v;
            doc = new window.jspdf.jsPDF();
            order = payload.order;
            address = {};
            try {
              address = JSON.parse(order.address || "{}");
            } catch (_unused5) {
              address = {
                line1: order.address || ""
              };
            }
            doc.setFillColor(25, 55, 50);
            doc.rect(0, 0, 210, 38, "F");
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(20);
            doc.text("smartcart", 16, 18);
            doc.setFontSize(10);
            doc.text("DEMO ORDER RECEIPT · NO REAL PAYMENT COLLECTED", 16, 28);
            doc.setTextColor(30, 40, 38);
            doc.setFontSize(13);
            doc.text("Order #".concat(order.id), 16, 52);
            doc.setFontSize(10);
            doc.text("Placed: ".concat(order.created_at), 16, 60);
            doc.text("Tracking: ".concat(order.tracking_code), 16, 67);
            doc.text("Payment: ".concat(order.payment_method, " \xB7 ").concat(order.payment_status), 16, 74);
            doc.setFontSize(11);
            doc.text("DELIVERY ADDRESS", 16, 88);
            doc.setFontSize(10);
            addressLines = [address.name, address.phone, address.line1, address.line2, [address.city, address.state, address.postal_code].filter(Boolean).join(", ")].filter(Boolean);
            doc.text(addressLines, 16, 96);
            y = 130;
            doc.setFontSize(11);
            doc.text("ITEMS", 16, y);
            y += 9;
            doc.setFontSize(9);
            _iterator = _createForOfIteratorHelper(payload.items);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                item = _step.value;
                if (y > 270) {
                  doc.addPage();
                  y = 20;
                }
                line = "".concat(item.name, " \xD7 ").concat(item.quantity, "  \xB7  ").concat(currency(item.price * item.quantity));
                doc.text(doc.splitTextToSize(line, 176), 16, y);
                y += 8;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            y += 8;
            doc.setDrawColor(220, 225, 222);
            doc.line(16, y, 194, y);
            y += 10;
            doc.setFontSize(14);
            doc.text("Order total  ".concat(currency(order.total)), 16, y);
            doc.setFontSize(9);
            doc.setTextColor(100, 110, 105);
            doc.text("Demo reference: ".concat(order.transaction_ref || "Local demo"), 16, y + 10);
            doc.text("This receipt confirms a local demonstration order only. It is not a bank or tax receipt.", 16, y + 20);
            doc.save("smartcart-demo-receipt-".concat(order.id, ".pdf"));
            _context14.n = 3;
            break;
          case 2:
            _context14.p = 2;
            _t12 = _context14.v;
            setError(_t12.message);
          case 3:
            return _context14.a(2);
        }
      }, _callee14, null, [[0, 2]]);
    }));
    function downloadInvoice(_x11) {
      return _downloadInvoice.apply(this, arguments);
    }
    return downloadInvoice;
  }();
  var completeCheckout = /*#__PURE__*/function () {
    var _completeCheckout = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(method) {
      var result, _t13;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            if (checkoutAddress) {
              _context15.n = 1;
              break;
            }
            return _context15.a(2);
          case 1:
            setBusy(true);
            setError("");
            _context15.p = 2;
            _context15.n = 3;
            return api("checkout", {
              method: "POST",
              body: {
                address: checkoutAddress,
                payment_method: method
              }
            });
          case 3:
            result = _context15.v;
            setPaymentOpen(false);
            setCheckoutAddress(null);
            _context15.n = 4;
            return refresh();
          case 4:
            setTab("orders");
            flash("Order ".concat(result.tracking_code, " confirmed \xB7 ").concat(result.payment_status));
            _context15.n = 5;
            return downloadInvoice(result.order_id);
          case 5:
            _context15.n = 7;
            break;
          case 6:
            _context15.p = 6;
            _t13 = _context15.v;
            setError(_t13.message);
          case 7:
            _context15.p = 7;
            setBusy(false);
            return _context15.f(7);
          case 8:
            return _context15.a(2);
        }
      }, _callee15, null, [[2, 6, 7, 8]]);
    }));
    function completeCheckout(_x12) {
      return _completeCheckout.apply(this, arguments);
    }
    return completeCheckout;
  }();
  var signOut = /*#__PURE__*/function () {
    var _signOut = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
      var _t14;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            _context16.p = 0;
            _context16.n = 1;
            return api("logout", {
              method: "POST"
            });
          case 1:
            setUser(null);
            setCart([]);
            setWishlist([]);
            setOrders([]);
            setHistory([]);
            setTab("shop");
            _context16.n = 3;
            break;
          case 2:
            _context16.p = 2;
            _t14 = _context16.v;
            setError(_t14.message);
          case 3:
            return _context16.a(2);
        }
      }, _callee16, null, [[0, 2]]);
    }));
    function signOut() {
      return _signOut.apply(this, arguments);
    }
    return signOut;
  }();
  var counts = {
    cart: cart.reduce(function (sum, item) {
      return sum + Number(item.quantity);
    }, 0),
    wishlist: wishlist.length
  };
  if (initializing) return /*#__PURE__*/React.createElement("div", {
    className: "loading-screen"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-emblem"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-bag-heart-fill"
  })), /*#__PURE__*/React.createElement("p", null, "Opening your SmartCart\u2026"));
  if (!user) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AuthScreen, {
    onAuth: setUser,
    theme: theme,
    onTheme: function onTheme() {
      return setTheme(theme === "dark" ? "light" : "dark");
    }
  }), error && /*#__PURE__*/React.createElement("div", {
    className: "app-error auth-error"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-exclamation-circle"
  }), /*#__PURE__*/React.createElement("span", null, error), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setError("");
    }
  }, "Dismiss")));
  return /*#__PURE__*/React.createElement("div", {
    className: "app-shell"
  }, /*#__PURE__*/React.createElement(Header, {
    user: user,
    tab: tab,
    setTab: setTab,
    query: query,
    setQuery: setQuery,
    onSearch: function onSearch(value) {
      return search(value);
    },
    counts: counts,
    theme: theme,
    onTheme: function onTheme() {
      return setTheme(theme === "dark" ? "light" : "dark");
    },
    onLogout: signOut
  }), error && /*#__PURE__*/React.createElement("div", {
    className: "app-error",
    role: "alert"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-exclamation-circle-fill"
  }), /*#__PURE__*/React.createElement("span", null, error), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setError("");
    },
    "aria-label": "Dismiss"
  }, "\xD7")), notice && /*#__PURE__*/React.createElement("div", {
    className: "toast-note"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-check-circle-fill"
  }), notice), tab === "shop" && /*#__PURE__*/React.createElement(Shop, {
    products: products,
    categories: categories,
    query: query,
    wishlistIds: wishlist.map(function (item) {
      return Number(item.id);
    }),
    onQuery: setQuery,
    onSearch: search,
    onCart: addCart,
    onWish: addWish,
    onOpen: openProduct,
    onGuide: function onGuide() {
      return setGuideOpen(true);
    }
  }), tab === "cart" && /*#__PURE__*/React.createElement(CartPage, {
    cart: cart,
    onRemove: removeCart,
    onUpdate: updateCart,
    onCheckout: function onCheckout(address) {
      if (!address) {
        setTab("shop");
        return;
      }
      setCheckoutAddress(address);
      setPaymentOpen(true);
    }
  }), tab === "wishlist" && /*#__PURE__*/React.createElement(WishlistPage, {
    wishlist: wishlist,
    onRemove: removeWish,
    onCart: addCart,
    onOpen: openProduct
  }), tab === "orders" && /*#__PURE__*/React.createElement(OrdersPage, {
    orders: orders,
    onInvoice: downloadInvoice,
    isAdmin: user.role === "admin",
    onStatus: (/*#__PURE__*/function () {
      var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(orderId, status) {
        var _t15;
        return _regenerator().w(function (_context17) {
          while (1) switch (_context17.p = _context17.n) {
            case 0:
              _context17.p = 0;
              _context17.n = 1;
              return api("order-status", {
                method: "POST",
                body: {
                  order_id: orderId,
                  status: status
                }
              });
            case 1:
              _context17.n = 2;
              return refresh();
            case 2:
              flash("Order status updated to ".concat(status));
              _context17.n = 4;
              break;
            case 3:
              _context17.p = 3;
              _t15 = _context17.v;
              setError(_t15.message);
            case 4:
              return _context17.a(2);
          }
        }, _callee17, null, [[0, 3]]);
      }));
      return function (_x13, _x14) {
        return _ref15.apply(this, arguments);
      };
    }())
  }), tab === "profile" && /*#__PURE__*/React.createElement(ProfilePage, {
    user: user,
    history: history,
    onSave: (/*#__PURE__*/function () {
      var _ref16 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(form) {
        var result, _t16;
        return _regenerator().w(function (_context18) {
          while (1) switch (_context18.p = _context18.n) {
            case 0:
              _context18.p = 0;
              _context18.n = 1;
              return api("profile", {
                method: "POST",
                body: form
              });
            case 1:
              result = _context18.v;
              setUser(result.user);
              flash("Your profile has been updated");
              _context18.n = 3;
              break;
            case 2:
              _context18.p = 2;
              _t16 = _context18.v;
              setError(_t16.message);
            case 3:
              return _context18.a(2);
          }
        }, _callee18, null, [[0, 2]]);
      }));
      return function (_x15) {
        return _ref16.apply(this, arguments);
      };
    }())
  }), tab === "admin" && user.role === "admin" && /*#__PURE__*/React.createElement(AdminPage, {
    stats: stats,
    categories: categories,
    onAddCategory: (/*#__PURE__*/function () {
      var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(form) {
        return _regenerator().w(function (_context19) {
          while (1) switch (_context19.n) {
            case 0:
              _context19.n = 1;
              return api("categories", {
                method: "POST",
                body: form
              });
            case 1:
              _context19.n = 2;
              return refresh();
            case 2:
              flash("Category added");
            case 3:
              return _context19.a(2);
          }
        }, _callee19);
      }));
      return function (_x16) {
        return _ref17.apply(this, arguments);
      };
    }()),
    onAddProduct: (/*#__PURE__*/function () {
      var _ref18 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(form) {
        return _regenerator().w(function (_context20) {
          while (1) switch (_context20.n) {
            case 0:
              _context20.n = 1;
              return api("products", {
                method: "POST",
                body: form
              });
            case 1:
              _context20.n = 2;
              return refresh();
            case 2:
              flash("Product added to the catalog");
            case 3:
              return _context20.a(2);
          }
        }, _callee20);
      }));
      return function (_x17) {
        return _ref18.apply(this, arguments);
      };
    }())
  }), tab !== "shop" && /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("span", null, "smartcart ", /*#__PURE__*/React.createElement("small", null, "Good finds, made simple.")), /*#__PURE__*/React.createElement("span", null, "Demo marketplace \xB7 No real payments are processed")), /*#__PURE__*/React.createElement("button", {
    className: "floating-guide",
    onClick: function onClick() {
      return setGuideOpen(true);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-stars"
  }), /*#__PURE__*/React.createElement("span", null, "Shopping guide")), /*#__PURE__*/React.createElement(ShoppingGuide, {
    open: guideOpen,
    onClose: function onClose() {
      return setGuideOpen(false);
    },
    onAdd: addCart
  }), paymentOpen && /*#__PURE__*/React.createElement(DemoPayment, {
    total: cart.reduce(function (sum, item) {
      return sum + Number(item.price) * Number(item.quantity);
    }, 0),
    busy: busy,
    onClose: function onClose() {
      return setPaymentOpen(false);
    },
    onConfirm: completeCheckout
  }), /*#__PURE__*/React.createElement(ProductDetail, {
    product: selected,
    onClose: function onClose() {
      return setSelected(null);
    },
    onAdd: addCart,
    onReviewSaved: function onReviewSaved() {
      return refresh();
    }
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));