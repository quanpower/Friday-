(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [19],
  {
    '4Ofr': function(e, t, a) {
      e.exports = {
        themeColor: 'antd-pro-components-setting-drawer-theme-color-themeColor',
        title: 'antd-pro-components-setting-drawer-theme-color-title',
        colorBlock: 'antd-pro-components-setting-drawer-theme-color-colorBlock',
      };
    },
    '8TWP': function(e, t, a) {
      'use strict';
      var n = a('284h'),
        l = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('Q9mQ');
      var o = l(a('diRs'));
      a('Awhp');
      var r = l(a('KrTs'));
      a('Pwec');
      var i = l(a('CtXQ'));
      a('T2oS');
      var u = l(a('W9HT')),
        d = l(a('pVnL')),
        c = l(a('lwsE')),
        s = l(a('W8MJ')),
        f = l(a('a1gu')),
        p = l(a('Nsbk')),
        m = l(a('7W2i'));
      a('Znn+');
      var h = l(a('ZTPi')),
        g = n(a('q1tI')),
        v = l(a('TSYQ')),
        y = l(a('SlZz')),
        b = l(a('btmg')),
        E = h.default.TabPane,
        M = (function(e) {
          function t() {
            var e, a;
            (0, c.default)(this, t);
            for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
            return (
              (a = (0, f.default)(this, (e = (0, p.default)(t)).call.apply(e, [this].concat(l)))),
              (a.onItemClick = function(e, t) {
                var n = a.props.onItemClick;
                n(e, t);
              }),
              (a.onTabChange = function(e) {
                var t = a.props.onTabChange;
                t(e);
              }),
              a
            );
          }
          return (
            (0, m.default)(t, e),
            (0, s.default)(t, [
              {
                key: 'getNotificationBox',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.children,
                    n = t.loading,
                    l = t.locale,
                    o = t.onClear;
                  if (!a) return null;
                  var r = g.default.Children.map(a, function(t) {
                    var a =
                      t.props.list && t.props.list.length > 0
                        ? ''.concat(t.props.title, ' (').concat(t.props.list.length, ')')
                        : t.props.title;
                    return g.default.createElement(
                      E,
                      { tab: a, key: t.props.name },
                      g.default.createElement(
                        y.default,
                        (0, d.default)({}, t.props, {
                          data: t.props.list,
                          onClick: function(a) {
                            return e.onItemClick(a, t.props);
                          },
                          onClear: function() {
                            return o(t.props.name);
                          },
                          title: t.props.title,
                          locale: l,
                        })
                      )
                    );
                  });
                  return g.default.createElement(
                    u.default,
                    { spinning: n, delay: 0 },
                    g.default.createElement(
                      h.default,
                      { className: b.default.tabs, onChange: this.onTabChange },
                      r
                    )
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.className,
                    a = e.count,
                    n = e.popupAlign,
                    l = e.popupVisible,
                    u = e.onPopupVisibleChange,
                    c = e.bell,
                    s = (0, v.default)(t, b.default.noticeButton),
                    f = this.getNotificationBox(),
                    p =
                      c ||
                      g.default.createElement(i.default, {
                        type: 'bell',
                        className: b.default.icon,
                      }),
                    m = g.default.createElement(
                      'span',
                      { className: s },
                      g.default.createElement(
                        r.default,
                        { count: a, style: { boxShadow: 'none' }, className: b.default.badge },
                        p
                      )
                    );
                  if (!f) return m;
                  var h = {};
                  return (
                    'popupVisible' in this.props && (h.visible = l),
                    g.default.createElement(
                      o.default,
                      (0, d.default)(
                        {
                          placement: 'bottomRight',
                          content: f,
                          popupClassName: b.default.popover,
                          trigger: 'click',
                          arrowPointAtCenter: !0,
                          popupAlign: n,
                          onVisibleChange: u,
                        },
                        h
                      ),
                      m
                    )
                  );
                },
              },
            ]),
            t
          );
        })(g.PureComponent);
      (t.default = M),
        (M.Tab = E),
        (M.defaultProps = {
          onItemClick: function() {},
          onPopupVisibleChange: function() {},
          onTabChange: function() {},
          onClear: function() {},
          loading: !1,
          locale: { emptyText: 'No notifications', clear: 'Clear' },
          emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
        });
    },
    AcjU: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        l = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.getMenuMatchKeys = t.getFlatMenuKeys = void 0);
      var o = l(a('pVnL')),
        r = l(a('lSNA')),
        i = l(a('RIqP')),
        u = l(a('lwsE')),
        d = l(a('W8MJ')),
        c = l(a('a1gu')),
        s = l(a('Nsbk')),
        f = l(a('7W2i'));
      a('B9cy');
      var p = l(a('Ol7k')),
        m = n(a('q1tI')),
        h = l(a('bALw')),
        g = l(a('TSYQ')),
        v = l(a('mOP9')),
        y = l(a('mR0u')),
        b = n(a('oFg3')),
        E = a('S/9j'),
        M = p.default.Sider,
        k = function(e) {
          var t = e.location.pathname,
            a = e.flatMenuKeys;
          return (0, E.urlToList)(t)
            .map(function(e) {
              return (0, b.getMenuMatches)(a, e)[0];
            })
            .filter(function(e) {
              return e;
            });
        },
        C = function e(t) {
          return t.reduce(function(t, a) {
            return t.push(a.path), a.children ? t.concat(e(a.children)) : t;
          }, []);
        };
      t.getFlatMenuKeys = C;
      var x = function(e, t) {
        return t.reduce(function(t, a) {
          return t.concat(
            e.filter(function(e) {
              return (0, h.default)(e).test(a);
            })
          );
        }, []);
      };
      t.getMenuMatchKeys = x;
      var N = (function(e) {
        function t(e) {
          var a;
          return (
            (0, u.default)(this, t),
            (a = (0, c.default)(this, (0, s.default)(t).call(this, e))),
            (a.isMainMenu = function(e) {
              var t = a.props.menuData;
              return t.some(function(t) {
                return !!e && (t.key === e || t.path === e);
              });
            }),
            (a.handleOpenChange = function(e) {
              var t =
                e.filter(function(e) {
                  return a.isMainMenu(e);
                }).length > 1;
              a.setState({ openKeys: t ? [e.pop()] : (0, i.default)(e) });
            }),
            (a.flatMenuKeys = C(e.menuData)),
            (a.state = { openKeys: k(e) }),
            a
          );
        }
        return (
          (0, f.default)(t, e),
          (0, d.default)(
            t,
            [
              {
                key: 'render',
                value: function() {
                  var e,
                    t = this.props,
                    a = t.logo,
                    n = t.collapsed,
                    l = t.onCollapse,
                    i = t.fixSiderbar,
                    u = t.theme,
                    d = this.state.openKeys,
                    c = n ? {} : { openKeys: d },
                    s = (0, g.default)(
                      y.default.sider,
                      ((e = {}),
                      (0, r.default)(e, y.default.fixSiderbar, i),
                      (0, r.default)(e, y.default.light, 'light' === u),
                      e)
                    );
                  return m.default.createElement(
                    M,
                    {
                      trigger: null,
                      collapsible: !0,
                      collapsed: n,
                      breakpoint: 'lg',
                      onCollapse: l,
                      width: 256,
                      theme: u,
                      className: s,
                    },
                    m.default.createElement(
                      'div',
                      { className: y.default.logo, id: 'logo' },
                      m.default.createElement(
                        v.default,
                        { to: '/' },
                        m.default.createElement('img', { src: a, alt: 'logo' }),
                        m.default.createElement('h1', null, 'Ant Design Pro')
                      )
                    ),
                    m.default.createElement(
                      b.default,
                      (0, o.default)(
                        {},
                        this.props,
                        {
                          mode: 'inline',
                          handleOpenChange: this.handleOpenChange,
                          onOpenChange: this.handleOpenChange,
                          style: { padding: '16px 0', width: '100%', overflowX: 'hidden' },
                        },
                        c
                      )
                    )
                  );
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function(e, t) {
                  var a = t.pathname;
                  return e.location.pathname !== a
                    ? { pathname: e.location.pathname, openKeys: k(e) }
                    : null;
                },
              },
            ]
          ),
          t
        );
      })(m.PureComponent);
      t.default = N;
    },
    BFsb: function(e, t, a) {
      e.exports = {
        content: 'antd-pro-components-setting-drawer-index-content',
        blockChecbox: 'antd-pro-components-setting-drawer-index-blockChecbox',
        item: 'antd-pro-components-setting-drawer-index-item',
        selectIcon: 'antd-pro-components-setting-drawer-index-selectIcon',
        color_block: 'antd-pro-components-setting-drawer-index-color_block',
        title: 'antd-pro-components-setting-drawer-index-title',
        handle: 'antd-pro-components-setting-drawer-index-handle',
        productionHint: 'antd-pro-components-setting-drawer-index-productionHint',
      };
    },
    BsfW: function(e, t, a) {
      e.exports = {
        list: 'antd-pro-components-notice-icon-notice-list-list',
        item: 'antd-pro-components-notice-icon-notice-list-item',
        meta: 'antd-pro-components-notice-icon-notice-list-meta',
        avatar: 'antd-pro-components-notice-icon-notice-list-avatar',
        iconElement: 'antd-pro-components-notice-icon-notice-list-iconElement',
        read: 'antd-pro-components-notice-icon-notice-list-read',
        title: 'antd-pro-components-notice-icon-notice-list-title',
        description: 'antd-pro-components-notice-icon-notice-list-description',
        datetime: 'antd-pro-components-notice-icon-notice-list-datetime',
        extra: 'antd-pro-components-notice-icon-notice-list-extra',
        notFound: 'antd-pro-components-notice-icon-notice-list-notFound',
        clear: 'antd-pro-components-notice-icon-notice-list-clear',
      };
    },
    G3lK: function(e, t, a) {
      e.exports = {
        headerSearch: 'antd-pro-components-header-search-index-headerSearch',
        input: 'antd-pro-components-header-search-index-input',
        show: 'antd-pro-components-header-search-index-show',
      };
    },
    IGtV: function(e, t, a) {
      e.exports = { fixedHeader: 'antd-pro-layouts-header-fixedHeader' };
    },
    IamK: function(e, t, a) {
      'use strict';
      var n = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('bbsP');
      var l = n(a('/wGt')),
        o = n(a('pVnL')),
        r = n(a('q1tI')),
        i = n(a('AcjU')),
        u = function e(t) {
          var a = [];
          return (
            t.forEach(function(t) {
              t.children && (a = a.concat(e(t.children))), a.push(t.path);
            }),
            a
          );
        },
        d = function(e) {
          var t = e.isMobile,
            a = e.menuData,
            n = e.collapsed,
            d = e.onCollapse;
          return t
            ? r.default.createElement(
                l.default,
                {
                  visible: !n,
                  placement: 'left',
                  onClose: function() {
                    return d(!0);
                  },
                  style: { padding: 0, height: '100vh' },
                },
                r.default.createElement(
                  i.default,
                  (0, o.default)({}, e, { flatMenuKeys: u(a), collapsed: !t && n })
                )
              )
            : r.default.createElement(i.default, (0, o.default)({}, e, { flatMenuKeys: u(a) }));
        },
        c = d;
      t.default = c;
    },
    JwhZ: function(e, t, a) {
      e.exports = {
        head: 'antd-pro-components-top-nav-header-index-head',
        light: 'antd-pro-components-top-nav-header-index-light',
        main: 'antd-pro-components-top-nav-header-index-main',
        wide: 'antd-pro-components-top-nav-header-index-wide',
        left: 'antd-pro-components-top-nav-header-index-left',
        right: 'antd-pro-components-top-nav-header-index-right',
        logo: 'antd-pro-components-top-nav-header-index-logo',
      };
    },
    NtFa: function(e, t, a) {
      'use strict';
      var n = a('TqRt'),
        l = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('Pwec');
      var o,
        r,
        i = n(a('CtXQ')),
        u = n(a('lwsE')),
        d = n(a('W8MJ')),
        c = n(a('a1gu')),
        s = n(a('Nsbk')),
        f = n(a('7W2i')),
        p = n(a('U+yc')),
        m = l(a('q1tI')),
        h = n(a('mOP9')),
        g = n(a('fqkP')),
        v = n(a('h3zL')),
        y = n(a('X5mu')),
        b = ((o = (0, g.default)(600)),
        (r = (function(e) {
          function t() {
            var e, a;
            (0, u.default)(this, t);
            for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
            return (
              (a = (0, c.default)(this, (e = (0, s.default)(t)).call.apply(e, [this].concat(l)))),
              (a.toggle = function() {
                var e = a.props,
                  t = e.collapsed,
                  n = e.onCollapse;
                n(!t), a.triggerResizeEvent();
              }),
              a
            );
          }
          return (
            (0, f.default)(t, e),
            (0, d.default)(t, [
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.triggerResizeEvent.cancel();
                },
              },
              {
                key: 'triggerResizeEvent',
                value: function() {
                  var e = document.createEvent('HTMLEvents');
                  e.initEvent('resize', !0, !1), window.dispatchEvent(e);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.collapsed,
                    a = e.isMobile,
                    n = e.logo;
                  return m.default.createElement(
                    'div',
                    { className: v.default.header },
                    a &&
                      m.default.createElement(
                        h.default,
                        { to: '/', className: v.default.logo, key: 'logo' },
                        m.default.createElement('img', { src: n, alt: 'logo', width: '32' })
                      ),
                    m.default.createElement(i.default, {
                      className: v.default.trigger,
                      type: t ? 'menu-unfold' : 'menu-fold',
                      onClick: this.toggle,
                    }),
                    m.default.createElement(y.default, this.props)
                  );
                },
              },
            ]),
            t
          );
        })(m.PureComponent)),
        (0, p.default)(
          r.prototype,
          'triggerResizeEvent',
          [o],
          Object.getOwnPropertyDescriptor(r.prototype, 'triggerResizeEvent'),
          r.prototype
        ),
        r);
      t.default = b;
    },
    PceP: function(e, t, a) {
      'use strict';
      var n = a('TqRt'),
        l = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('bbsP');
      var o = n(a('/wGt'));
      a('fOrg');
      var r = n(a('+KLJ'));
      a('+L6B');
      var i = n(a('2/Rp'));
      a('miYZ');
      var u = n(a('tsqr'));
      a('/zsF');
      var d = n(a('PArb'));
      a('Pwec');
      var c = n(a('CtXQ'));
      a('5Dmo');
      var s = n(a('3S7+'));
      a('Mwp2');
      var f = n(a('VXEj'));
      a('BoS7');
      var p = n(a('Sdc0')),
        m = n(a('lwsE')),
        h = n(a('W8MJ')),
        g = n(a('a1gu')),
        v = n(a('Nsbk')),
        y = n(a('7W2i')),
        b = n(a('MVZn'));
      a('OaEy');
      var E,
        M,
        k = n(a('2fM7')),
        C = l(a('q1tI')),
        x = a('LLXN'),
        N = a('P5Jw'),
        w = a('MuoO'),
        S = n(a('BGR+')),
        P = n(a('BFsb')),
        T = n(a('WJM/')),
        I = n(a('Pjk0')),
        O = k.default.Option,
        W = function(e) {
          var t = e.children,
            a = e.title,
            n = e.style;
          return C.default.createElement(
            'div',
            { style: (0, b.default)({}, n, { marginBottom: 24 }) },
            C.default.createElement('h3', { className: P.default.title }, a),
            t
          );
        },
        q = ((E = (0, w.connect)(function(e) {
          var t = e.setting;
          return { setting: t };
        })),
        E(
          (M = (function(e) {
            function t() {
              var e, a;
              (0, m.default)(this, t);
              for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++)
                l[o] = arguments[o];
              return (
                (a = (0, g.default)(this, (e = (0, v.default)(t)).call.apply(e, [this].concat(l)))),
                (a.state = { collapse: !1 }),
                (a.getLayoutSetting = function() {
                  var e = a.props.setting,
                    t = e.contentWidth,
                    n = e.fixedHeader,
                    l = e.layout,
                    o = e.autoHideHeader,
                    r = e.fixSiderbar;
                  return [
                    {
                      title: (0, x.formatMessage)({ id: 'app.setting.content-width' }),
                      action: C.default.createElement(
                        k.default,
                        {
                          value: t,
                          size: 'small',
                          onSelect: function(e) {
                            return a.changeSetting('contentWidth', e);
                          },
                          style: { width: 80 },
                        },
                        'sidemenu' === l
                          ? null
                          : C.default.createElement(
                              O,
                              { value: 'Fixed' },
                              (0, x.formatMessage)({ id: 'app.setting.content-width.fixed' })
                            ),
                        C.default.createElement(
                          O,
                          { value: 'Fluid' },
                          (0, x.formatMessage)({ id: 'app.setting.content-width.fluid' })
                        )
                      ),
                    },
                    {
                      title: (0, x.formatMessage)({ id: 'app.setting.fixedheader' }),
                      action: C.default.createElement(p.default, {
                        size: 'small',
                        checked: !!n,
                        onChange: function(e) {
                          return a.changeSetting('fixedHeader', e);
                        },
                      }),
                    },
                    {
                      title: (0, x.formatMessage)({ id: 'app.setting.hideheader' }),
                      disabled: !n,
                      disabledReason: (0, x.formatMessage)({ id: 'app.setting.hideheader.hint' }),
                      action: C.default.createElement(p.default, {
                        size: 'small',
                        checked: !!o,
                        onChange: function(e) {
                          return a.changeSetting('autoHideHeader', e);
                        },
                      }),
                    },
                    {
                      title: (0, x.formatMessage)({ id: 'app.setting.fixedsidebar' }),
                      disabled: 'topmenu' === l,
                      disabledReason: (0, x.formatMessage)({ id: 'app.setting.fixedsidebar.hint' }),
                      action: C.default.createElement(p.default, {
                        size: 'small',
                        checked: !!r,
                        onChange: function(e) {
                          return a.changeSetting('fixSiderbar', e);
                        },
                      }),
                    },
                  ];
                }),
                (a.changeSetting = function(e, t) {
                  var n = a.props.setting,
                    l = (0, b.default)({}, n);
                  (l[e] = t),
                    'layout' === e
                      ? (l.contentWidth = 'topmenu' === t ? 'Fixed' : 'Fluid')
                      : 'fixedHeader' !== e || t || (l.autoHideHeader = !1),
                    a.setState(l, function() {
                      var e = a.props.dispatch;
                      e({ type: 'setting/changeSetting', payload: a.state });
                    });
                }),
                (a.togglerContent = function() {
                  var e = a.state.collapse;
                  a.setState({ collapse: !e });
                }),
                (a.renderLayoutSettingItem = function(e) {
                  var t = C.default.cloneElement(e.action, { disabled: e.disabled });
                  return C.default.createElement(
                    s.default,
                    { title: e.disabled ? e.disabledReason : '', placement: 'left' },
                    C.default.createElement(
                      f.default.Item,
                      { actions: [t] },
                      C.default.createElement(
                        'span',
                        { style: { opacity: e.disabled ? '0.5' : '' } },
                        e.title
                      )
                    )
                  );
                }),
                a
              );
            }
            return (
              (0, y.default)(t, e),
              (0, h.default)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.props.setting,
                      a = t.navTheme,
                      n = t.primaryColor,
                      l = t.layout,
                      s = t.colorWeak,
                      m = this.state.collapse;
                    return C.default.createElement(
                      o.default,
                      {
                        visible: m,
                        width: 300,
                        onClose: this.togglerContent,
                        placement: 'right',
                        handler: C.default.createElement(
                          'div',
                          { className: P.default.handle },
                          C.default.createElement(c.default, {
                            type: m ? 'close' : 'setting',
                            style: { color: '#fff', fontSize: 20 },
                          })
                        ),
                        onHandleClick: this.togglerContent,
                        style: { zIndex: 999 },
                      },
                      C.default.createElement(
                        'div',
                        { className: P.default.content },
                        C.default.createElement(
                          W,
                          { title: (0, x.formatMessage)({ id: 'app.setting.pagestyle' }) },
                          C.default.createElement(I.default, {
                            list: [
                              {
                                key: 'dark',
                                url:
                                  'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
                                title: (0, x.formatMessage)({ id: 'app.setting.pagestyle.dark' }),
                              },
                              {
                                key: 'light',
                                url:
                                  'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
                                title: (0, x.formatMessage)({ id: 'app.setting.pagestyle.light' }),
                              },
                            ],
                            value: a,
                            onChange: function(t) {
                              return e.changeSetting('navTheme', t);
                            },
                          })
                        ),
                        C.default.createElement(T.default, {
                          title: (0, x.formatMessage)({ id: 'app.setting.themecolor' }),
                          value: n,
                          onChange: function(t) {
                            return e.changeSetting('primaryColor', t);
                          },
                        }),
                        C.default.createElement(d.default, null),
                        C.default.createElement(
                          W,
                          { title: (0, x.formatMessage)({ id: 'app.setting.navigationmode' }) },
                          C.default.createElement(I.default, {
                            list: [
                              {
                                key: 'sidemenu',
                                url:
                                  'https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg',
                                title: (0, x.formatMessage)({ id: 'app.setting.sidemenu' }),
                              },
                              {
                                key: 'topmenu',
                                url:
                                  'https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg',
                                title: (0, x.formatMessage)({ id: 'app.setting.topmenu' }),
                              },
                            ],
                            value: l,
                            onChange: function(t) {
                              return e.changeSetting('layout', t);
                            },
                          })
                        ),
                        C.default.createElement(f.default, {
                          split: !1,
                          dataSource: this.getLayoutSetting(),
                          renderItem: this.renderLayoutSettingItem,
                        }),
                        C.default.createElement(d.default, null),
                        C.default.createElement(
                          W,
                          { title: (0, x.formatMessage)({ id: 'app.setting.othersettings' }) },
                          C.default.createElement(
                            f.default.Item,
                            {
                              actions: [
                                C.default.createElement(p.default, {
                                  size: 'small',
                                  checked: !!s,
                                  onChange: function(t) {
                                    return e.changeSetting('colorWeak', t);
                                  },
                                }),
                              ],
                            },
                            (0, x.formatMessage)({ id: 'app.setting.weakmode' })
                          )
                        ),
                        C.default.createElement(d.default, null),
                        C.default.createElement(
                          N.CopyToClipboard,
                          {
                            text: JSON.stringify((0, S.default)(t, ['colorWeak']), null, 2),
                            onCopy: function() {
                              return u.default.success(
                                (0, x.formatMessage)({ id: 'app.setting.copyinfo' })
                              );
                            },
                          },
                          C.default.createElement(
                            i.default,
                            { block: !0, icon: 'copy' },
                            (0, x.formatMessage)({ id: 'app.setting.copy' })
                          )
                        ),
                        C.default.createElement(r.default, {
                          type: 'warning',
                          className: P.default.productionHint,
                          message: C.default.createElement(
                            'div',
                            null,
                            (0, x.formatMessage)({ id: 'app.setting.production.hint' }),
                            ' ',
                            C.default.createElement(
                              'a',
                              {
                                href: 'https://u.ant.design/pro-v2-default-settings',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              },
                              'src/defaultSettings.js'
                            )
                          ),
                        })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(C.PureComponent))
        ) || M),
        H = q;
      t.default = H;
    },
    Pjk0: function(e, t, a) {
      'use strict';
      var n = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('5Dmo');
      var l = n(a('3S7+'));
      a('Pwec');
      var o = n(a('CtXQ')),
        r = n(a('q1tI')),
        i = n(a('BFsb')),
        u = function(e) {
          var t = e.value,
            a = e.onChange,
            n = e.list;
          return r.default.createElement(
            'div',
            { className: i.default.blockChecbox, key: t },
            n.map(function(e) {
              return r.default.createElement(
                l.default,
                { title: e.title, key: e.key },
                r.default.createElement(
                  'div',
                  {
                    className: i.default.item,
                    onClick: function() {
                      return a(e.key);
                    },
                  },
                  r.default.createElement('img', { src: e.url, alt: e.key }),
                  r.default.createElement(
                    'div',
                    {
                      className: i.default.selectIcon,
                      style: { display: t === e.key ? 'block' : 'none' },
                    },
                    r.default.createElement(o.default, { type: 'check' })
                  )
                )
              );
            })
          );
        },
        d = u;
      t.default = d;
    },
    SlZz: function(e, t, a) {
      'use strict';
      var n = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = c), a('Mwp2');
      var l = n(a('VXEj'));
      a('Telt');
      var o = n(a('Tckk')),
        r = n(a('lSNA')),
        i = n(a('q1tI')),
        u = n(a('TSYQ')),
        d = n(a('BsfW'));
      function c(e) {
        var t = e.data,
          a = void 0 === t ? [] : t,
          n = e.onClick,
          c = e.onClear,
          s = e.title,
          f = e.locale,
          p = e.emptyText,
          m = e.emptyImage,
          h = e.showClear,
          g = void 0 === h || h;
        return 0 === a.length
          ? i.default.createElement(
              'div',
              { className: d.default.notFound },
              m ? i.default.createElement('img', { src: m, alt: 'not found' }) : null,
              i.default.createElement('div', null, p || f.emptyText)
            )
          : i.default.createElement(
              'div',
              null,
              i.default.createElement(
                l.default,
                { className: d.default.list },
                a.map(function(e, t) {
                  var a = (0, u.default)(
                      d.default.item,
                      (0, r.default)({}, d.default.read, e.read)
                    ),
                    c = e.avatar
                      ? 'string' === typeof e.avatar
                        ? i.default.createElement(o.default, {
                            className: d.default.avatar,
                            src: e.avatar,
                          })
                        : e.avatar
                      : null;
                  return i.default.createElement(
                    l.default.Item,
                    {
                      className: a,
                      key: e.key || t,
                      onClick: function() {
                        return n(e);
                      },
                    },
                    i.default.createElement(l.default.Item.Meta, {
                      className: d.default.meta,
                      avatar: i.default.createElement(
                        'span',
                        { className: d.default.iconElement },
                        c
                      ),
                      title: i.default.createElement(
                        'div',
                        { className: d.default.title },
                        e.title,
                        i.default.createElement('div', { className: d.default.extra }, e.extra)
                      ),
                      description: i.default.createElement(
                        'div',
                        null,
                        i.default.createElement(
                          'div',
                          { className: d.default.description, title: e.description },
                          e.description
                        ),
                        i.default.createElement(
                          'div',
                          { className: d.default.datetime },
                          e.datetime
                        )
                      ),
                    })
                  );
                })
              ),
              g
                ? i.default.createElement(
                    'div',
                    { className: d.default.clear, onClick: c },
                    f.clear,
                    ' ',
                    s
                  )
                : null
            );
      }
    },
    'WJM/': function(e, t, a) {
      'use strict';
      var n = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('5Dmo');
      var l = n(a('3S7+')),
        o = n(a('pVnL'));
      a('Pwec');
      var r = n(a('CtXQ')),
        i = n(a('QILm')),
        u = n(a('q1tI')),
        d = a('LLXN'),
        c = n(a('4Ofr')),
        s = function(e) {
          var t = e.color,
            a = e.check,
            n = (0, i.default)(e, ['color', 'check']);
          return u.default.createElement(
            'div',
            (0, o.default)({}, n, { style: { backgroundColor: t } }),
            a ? u.default.createElement(r.default, { type: 'check' }) : ''
          );
        },
        f = function(e) {
          var t = e.colors,
            a = e.title,
            n = e.value,
            o = e.onChange,
            r = t;
          return (
            t ||
              (r = [
                { key: 'dust', color: '#F5222D' },
                { key: 'volcano', color: '#FA541C' },
                { key: 'sunset', color: '#FAAD14' },
                { key: 'cyan', color: '#13C2C2' },
                { key: 'green', color: '#52C41A' },
                { key: 'daybreak', color: '#1890FF' },
                { key: 'geekblue', color: '#2F54EB' },
                { key: 'purple', color: '#722ED1' },
              ]),
            u.default.createElement(
              'div',
              { className: c.default.themeColor },
              u.default.createElement('h3', { className: c.default.title }, a),
              u.default.createElement(
                'div',
                { className: c.default.content },
                r.map(function(e) {
                  var t = e.key,
                    a = e.color;
                  return u.default.createElement(
                    l.default,
                    {
                      key: a,
                      title: (0, d.formatMessage)({ id: 'app.setting.themecolor.'.concat(t) }),
                    },
                    u.default.createElement(s, {
                      className: c.default.colorBlock,
                      color: a,
                      check: n === a,
                      onClick: function() {
                        return o && o(a);
                      },
                    })
                  );
                })
              )
            )
          );
        },
        p = f;
      t.default = p;
    },
    X5mu: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        l = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('T2oS');
      var o = l(a('W9HT'));
      a('qVdP');
      var r = l(a('jsC+'));
      a('Telt');
      var i = l(a('Tckk'));
      a('5Dmo');
      var u = l(a('3S7+'));
      a('lUTK');
      var d = l(a('BvKs'));
      a('Pwec');
      var c = l(a('CtXQ'));
      a('+BJd');
      var s = l(a('mr32')),
        f = l(a('MVZn')),
        p = l(a('lwsE')),
        m = l(a('W8MJ')),
        h = l(a('a1gu')),
        g = l(a('Nsbk')),
        v = l(a('7W2i')),
        y = n(a('q1tI')),
        b = a('LLXN'),
        E = l(a('wd/R')),
        M = l(a('bt/X')),
        k = l(a('8TWP')),
        C = l(a('k5GS')),
        x = l(a('bfXr')),
        N = l(a('h3zL')),
        w = (function(e) {
          function t() {
            return (
              (0, p.default)(this, t),
              (0, h.default)(this, (0, g.default)(t).apply(this, arguments))
            );
          }
          return (
            (0, v.default)(t, e),
            (0, m.default)(t, [
              {
                key: 'getNoticeData',
                value: function() {
                  var e = this.props.notices,
                    t = void 0 === e ? [] : e;
                  if (0 === t.length) return {};
                  var a = t.map(function(e) {
                    var t = (0, f.default)({}, e);
                    if (
                      (t.datetime && (t.datetime = (0, E.default)(e.datetime).fromNow()),
                      t.id && (t.key = t.id),
                      t.extra && t.status)
                    ) {
                      var a = { todo: '', processing: 'blue', urgent: 'red', doing: 'gold' }[
                        t.status
                      ];
                      t.extra = y.default.createElement(
                        s.default,
                        { color: a, style: { marginRight: 0 } },
                        t.extra
                      );
                    }
                    return t;
                  });
                  return (0, M.default)(a, 'type');
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.currentUser,
                    a = e.fetchingNotices,
                    n = e.onNoticeVisibleChange,
                    l = e.onMenuClick,
                    s = e.onNoticeClear,
                    f = e.theme,
                    p = y.default.createElement(
                      d.default,
                      { className: N.default.menu, selectedKeys: [], onClick: l },
                      y.default.createElement(
                        d.default.Item,
                        { key: 'userCenter' },
                        y.default.createElement(c.default, { type: 'user' }),
                        y.default.createElement(b.FormattedMessage, {
                          id: 'menu.account.center',
                          defaultMessage: 'account center',
                        })
                      ),
                      y.default.createElement(
                        d.default.Item,
                        { key: 'userinfo' },
                        y.default.createElement(c.default, { type: 'setting' }),
                        y.default.createElement(b.FormattedMessage, {
                          id: 'menu.account.settings',
                          defaultMessage: 'account settings',
                        })
                      ),
                      y.default.createElement(
                        d.default.Item,
                        { key: 'triggerError' },
                        y.default.createElement(c.default, { type: 'close-circle' }),
                        y.default.createElement(b.FormattedMessage, {
                          id: 'menu.account.trigger',
                          defaultMessage: 'Trigger Error',
                        })
                      ),
                      y.default.createElement(d.default.Divider, null),
                      y.default.createElement(
                        d.default.Item,
                        { key: 'logout' },
                        y.default.createElement(c.default, { type: 'logout' }),
                        y.default.createElement(b.FormattedMessage, {
                          id: 'menu.account.logout',
                          defaultMessage: 'logout',
                        })
                      )
                    ),
                    m = this.getNoticeData(),
                    h = N.default.right;
                  return (
                    'dark' === f && (h = ''.concat(N.default.right, '  ').concat(N.default.dark)),
                    y.default.createElement(
                      'div',
                      { className: h },
                      y.default.createElement(C.default, {
                        className: ''.concat(N.default.action, ' ').concat(N.default.search),
                        placeholder: (0, b.formatMessage)({ id: 'component.globalHeader.search' }),
                        dataSource: [
                          (0, b.formatMessage)({ id: 'component.globalHeader.search.example1' }),
                          (0, b.formatMessage)({ id: 'component.globalHeader.search.example2' }),
                          (0, b.formatMessage)({ id: 'component.globalHeader.search.example3' }),
                        ],
                        onSearch: function(e) {
                          console.log('input', e);
                        },
                        onPressEnter: function(e) {
                          console.log('enter', e);
                        },
                      }),
                      y.default.createElement(
                        u.default,
                        { title: (0, b.formatMessage)({ id: 'component.globalHeader.help' }) },
                        y.default.createElement(
                          'a',
                          {
                            target: '_blank',
                            href: 'https://pro.ant.design/docs/getting-started',
                            rel: 'noopener noreferrer',
                            className: N.default.action,
                          },
                          y.default.createElement(c.default, { type: 'question-circle-o' })
                        )
                      ),
                      y.default.createElement(
                        k.default,
                        {
                          className: N.default.action,
                          count: t.notifyCount,
                          onItemClick: function(e, t) {
                            console.log(e, t);
                          },
                          locale: {
                            emptyText: (0, b.formatMessage)({ id: 'component.noticeIcon.empty' }),
                            clear: (0, b.formatMessage)({ id: 'component.noticeIcon.clear' }),
                          },
                          onClear: s,
                          onPopupVisibleChange: n,
                          loading: a,
                          popupAlign: { offset: [20, -16] },
                        },
                        y.default.createElement(k.default.Tab, {
                          list: m.notification,
                          title: (0, b.formatMessage)({
                            id: 'component.globalHeader.notification',
                          }),
                          name: 'notification',
                          emptyText: (0, b.formatMessage)({
                            id: 'component.globalHeader.notification.empty',
                          }),
                          emptyImage:
                            'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
                        }),
                        y.default.createElement(k.default.Tab, {
                          list: m.message,
                          title: (0, b.formatMessage)({ id: 'component.globalHeader.message' }),
                          name: 'message',
                          emptyText: (0, b.formatMessage)({
                            id: 'component.globalHeader.message.empty',
                          }),
                          emptyImage:
                            'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
                        }),
                        y.default.createElement(k.default.Tab, {
                          list: m.event,
                          title: (0, b.formatMessage)({ id: 'component.globalHeader.event' }),
                          name: 'event',
                          emptyText: (0, b.formatMessage)({
                            id: 'component.globalHeader.event.empty',
                          }),
                          emptyImage:
                            'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
                        })
                      ),
                      t.name
                        ? y.default.createElement(
                            r.default,
                            { overlay: p },
                            y.default.createElement(
                              'span',
                              {
                                className: ''
                                  .concat(N.default.action, ' ')
                                  .concat(N.default.account),
                              },
                              y.default.createElement(i.default, {
                                size: 'small',
                                className: N.default.avatar,
                                src: t.avatar,
                                alt: 'avatar',
                              }),
                              y.default.createElement('span', { className: N.default.name }, t.name)
                            )
                          )
                        : y.default.createElement(o.default, {
                            size: 'small',
                            style: { marginLeft: 8, marginRight: 8 },
                          }),
                      y.default.createElement(x.default, { className: N.default.action })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(y.PureComponent);
      t.default = w;
    },
    btmg: function(e, t, a) {
      e.exports = {
        popover: 'antd-pro-components-notice-icon-index-popover',
        noticeButton: 'antd-pro-components-notice-icon-index-noticeButton',
        icon: 'antd-pro-components-notice-icon-index-icon',
        tabs: 'antd-pro-components-notice-icon-index-tabs',
      };
    },
    ctiy: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        l = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = l(a('pVnL'));
      a('miYZ');
      var r = l(a('tsqr')),
        i = l(a('lwsE')),
        u = l(a('W8MJ')),
        d = l(a('a1gu')),
        c = l(a('Nsbk')),
        s = l(a('7W2i'));
      a('B9cy');
      var f = l(a('Ol7k')),
        p = n(a('q1tI')),
        m = a('LLXN'),
        h = l(a('MFj2')),
        g = a('MuoO'),
        v = l(a('usdK')),
        y = l(a('NtFa')),
        b = l(a('wWO0')),
        E = l(a('IGtV')),
        M = l(a('HZnN')),
        k = f.default.Header,
        C = (function(e) {
          function t() {
            var e, a;
            (0, i.default)(this, t);
            for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
            return (
              (a = (0, d.default)(this, (e = (0, c.default)(t)).call.apply(e, [this].concat(l)))),
              (a.state = { visible: !0 }),
              (a.getHeadWidth = function() {
                var e = a.props,
                  t = e.isMobile,
                  n = e.collapsed,
                  l = e.setting,
                  o = l.fixedHeader,
                  r = l.layout;
                return t || !o || 'topmenu' === r
                  ? '100%'
                  : n
                    ? 'calc(100% - 80px)'
                    : 'calc(100% - 256px)';
              }),
              (a.handleNoticeClear = function(e) {
                r.default.success(
                  ''
                    .concat((0, m.formatMessage)({ id: 'component.noticeIcon.cleared' }), ' ')
                    .concat((0, m.formatMessage)({ id: 'component.globalHeader.'.concat(e) }))
                );
                var t = a.props.dispatch;
                t({ type: 'global/clearNotices', payload: e });
              }),
              (a.handleMenuClick = function(e) {
                var t = e.key,
                  n = a.props.dispatch;
                'userCenter' !== t
                  ? 'triggerError' !== t
                    ? 'userinfo' !== t
                      ? 'logout' === t && n({ type: 'login/logout' })
                      : v.default.push('/account/settings/base')
                    : v.default.push('/exception/trigger')
                  : v.default.push('/account/center');
              }),
              (a.handleNoticeVisibleChange = function(e) {
                if (e) {
                  var t = a.props.dispatch;
                  t({ type: 'global/fetchNotices' });
                }
              }),
              (a.handScroll = function() {
                var e = a.props.autoHideHeader,
                  t = a.state.visible;
                if (e) {
                  var n = document.body.scrollTop + document.documentElement.scrollTop;
                  a.ticking ||
                    requestAnimationFrame(function() {
                      if (a.oldScrollTop > n)
                        return a.setState({ visible: !0 }), void (a.scrollTop = n);
                      n > 300 && t && a.setState({ visible: !1 }),
                        n < 300 && !t && a.setState({ visible: !0 }),
                        (a.oldScrollTop = n),
                        (a.ticking = !1);
                    }),
                    (a.ticking = !1);
                }
              }),
              a
            );
          }
          return (
            (0, s.default)(t, e),
            (0, u.default)(
              t,
              [
                {
                  key: 'componentDidMount',
                  value: function() {
                    document.addEventListener('scroll', this.handScroll, { passive: !0 });
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    document.removeEventListener('scroll', this.handScroll);
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.isMobile,
                      a = e.handleMenuCollapse,
                      n = e.setting,
                      l = n.navTheme,
                      r = n.layout,
                      i = n.fixedHeader,
                      u = this.state.visible,
                      d = 'topmenu' === r,
                      c = this.getHeadWidth(),
                      s = u
                        ? p.default.createElement(
                            k,
                            {
                              style: { padding: 0, width: c },
                              className: i ? E.default.fixedHeader : '',
                            },
                            d && !t
                              ? p.default.createElement(
                                  b.default,
                                  (0, o.default)(
                                    {
                                      theme: l,
                                      mode: 'horizontal',
                                      Authorized: M.default,
                                      onCollapse: a,
                                      onNoticeClear: this.handleNoticeClear,
                                      onMenuClick: this.handleMenuClick,
                                      onNoticeVisibleChange: this.handleNoticeVisibleChange,
                                    },
                                    this.props
                                  )
                                )
                              : p.default.createElement(
                                  y.default,
                                  (0, o.default)(
                                    {
                                      onCollapse: a,
                                      onNoticeClear: this.handleNoticeClear,
                                      onMenuClick: this.handleMenuClick,
                                      onNoticeVisibleChange: this.handleNoticeVisibleChange,
                                    },
                                    this.props
                                  )
                                )
                          )
                        : null;
                    return p.default.createElement(
                      h.default,
                      { component: '', transitionName: 'fade' },
                      s
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e, t) {
                    return e.autoHideHeader || t.visible ? null : { visible: !0 };
                  },
                },
              ]
            ),
            t
          );
        })(p.PureComponent),
        x = (0, g.connect)(function(e) {
          var t = e.user,
            a = e.global,
            n = e.setting,
            l = e.loading;
          return {
            currentUser: t.currentUser,
            collapsed: a.collapsed,
            fetchingNotices: l.effects['global/fetchNotices'],
            notices: a.notices,
            setting: n,
          };
        })(C);
      t.default = x;
    },
    gJ0l: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        l = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('Pwec');
      var o = l(a('CtXQ'));
      a('B9cy');
      var r = l(a('Ol7k')),
        i = n(a('q1tI')),
        u = l(a('ggcP')),
        d = r.default.Footer,
        c = function() {
          return i.default.createElement(
            d,
            { style: { padding: 0 } },
            i.default.createElement(u.default, {
              links: [
                {
                  key: '\u667a\u8054\u4e91\u9996\u9875',
                  title: '\u667a\u8054\u4e91\u9996\u9875',
                  href: 'http://www.smartlinkcloud.com',
                  blankTarget: !0,
                },
                {
                  key: 'github',
                  title: i.default.createElement(o.default, { type: 'github' }),
                  href: 'https://github.com/quanpower/friday',
                  blankTarget: !0,
                },
                {
                  key: 'Ant Design',
                  title: 'Ant Design',
                  href: 'https://ant.design',
                  blankTarget: !0,
                },
              ],
              copyright: i.default.createElement(
                i.Fragment,
                null,
                'Copyright ',
                i.default.createElement(o.default, { type: 'copyright' }),
                ' 2018 \u4e0a\u6d77\u6570\u822a\u6d4b\u63a7\u6280\u672f\u90e8\u51fa\u54c1'
              ),
            })
          );
        },
        s = c;
      t.default = s;
    },
    h3zL: function(e, t, a) {
      e.exports = {
        header: 'antd-pro-components-global-header-index-header',
        logo: 'antd-pro-components-global-header-index-logo',
        menu: 'antd-pro-components-global-header-index-menu',
        trigger: 'antd-pro-components-global-header-index-trigger',
        right: 'antd-pro-components-global-header-index-right',
        action: 'antd-pro-components-global-header-index-action',
        search: 'antd-pro-components-global-header-index-search',
        account: 'antd-pro-components-global-header-index-account',
        avatar: 'antd-pro-components-global-header-index-avatar',
        dark: 'antd-pro-components-global-header-index-dark',
        name: 'antd-pro-components-global-header-index-name',
      };
    },
    k5GS: function(e, t, a) {
      'use strict';
      var n = a('TqRt'),
        l = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('O3gP');
      var o = n(a('lrIw')),
        r = n(a('pVnL'));
      a('5NDa');
      var i = n(a('5rEg'));
      a('Pwec');
      var u,
        d,
        c,
        s,
        f,
        p = n(a('CtXQ')),
        m = n(a('lSNA')),
        h = n(a('QILm')),
        g = n(a('lwsE')),
        v = n(a('a1gu')),
        y = n(a('Nsbk')),
        b = n(a('W8MJ')),
        E = n(a('7W2i')),
        M = n(a('U+yc')),
        k = l(a('q1tI')),
        C = (n(a('17x9')), n(a('TSYQ'))),
        x = n(a('fqkP')),
        N = n(a('UjoV')),
        w = n(a('G3lK')),
        S = ((u = (0, N.default)()),
        (d = (0, x.default)(500, { leading: !0, trailing: !1 })),
        (f = s = (function(e) {
          function t(e) {
            var a;
            return (
              (0, g.default)(this, t),
              (a = (0, v.default)(this, (0, y.default)(t).call(this, e))),
              (a.onKeyDown = function(e) {
                if ('Enter' === e.key) {
                  var t = a.props.onPressEnter,
                    n = a.state.value;
                  a.timeout = setTimeout(function() {
                    t(n);
                  }, 0);
                }
              }),
              (a.onChange = function(e) {
                var t = a.props.onChange;
                a.setState({ value: e }), t && t(e);
              }),
              (a.enterSearchMode = function() {
                var e = a.props.onVisibleChange;
                e(!0),
                  a.setState({ searchMode: !0 }, function() {
                    var e = a.state.searchMode;
                    e && a.input.focus();
                  });
              }),
              (a.leaveSearchMode = function() {
                a.setState({ searchMode: !1, value: '' });
              }),
              (a.state = { searchMode: e.defaultOpen, value: '' }),
              a
            );
          }
          return (
            (0, E.default)(t, e),
            (0, b.default)(t, null, [
              {
                key: 'getDerivedStateFromProps',
                value: function(e) {
                  return 'open' in e ? { searchMode: e.open } : null;
                },
              },
            ]),
            (0, b.default)(t, [
              {
                key: 'componentWillUnmount',
                value: function() {
                  clearTimeout(this.timeout);
                },
              },
              {
                key: 'debouncePressEnter',
                value: function() {
                  var e = this.props.onPressEnter,
                    t = this.state.value;
                  e(t);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.className,
                    n = t.placeholder,
                    l = (t.open, (0, h.default)(t, ['className', 'placeholder', 'open'])),
                    u = this.state,
                    d = u.searchMode,
                    c = u.value;
                  delete l.defaultOpen;
                  var s = (0, C.default)(w.default.input, (0, m.default)({}, w.default.show, d));
                  return k.default.createElement(
                    'span',
                    {
                      className: (0, C.default)(a, w.default.headerSearch),
                      onClick: this.enterSearchMode,
                      onTransitionEnd: function(t) {
                        var a = t.propertyName;
                        if ('width' === a && !d) {
                          var n = e.props.onVisibleChange;
                          n(d);
                        }
                      },
                    },
                    k.default.createElement(p.default, { type: 'search', key: 'Icon' }),
                    k.default.createElement(
                      o.default,
                      (0, r.default)({ key: 'AutoComplete' }, l, {
                        className: s,
                        value: c,
                        onChange: this.onChange,
                      }),
                      k.default.createElement(i.default, {
                        ref: function(t) {
                          e.input = t;
                        },
                        'aria-label': n,
                        placeholder: n,
                        onKeyDown: this.onKeyDown,
                        onBlur: this.leaveSearchMode,
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(k.PureComponent)),
        (s.defaultProps = {
          defaultActiveFirstOption: !1,
          onPressEnter: function() {},
          onSearch: function() {},
          className: '',
          placeholder: '',
          dataSource: [],
          defaultOpen: !1,
          onVisibleChange: function() {},
        }),
        (c = f),
        (0, M.default)(
          c.prototype,
          'debouncePressEnter',
          [u, d],
          Object.getOwnPropertyDescriptor(c.prototype, 'debouncePressEnter'),
          c.prototype
        ),
        c);
      t.default = S;
    },
    m8Tn: function(e, t, a) {
      'use strict';
      var n = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var l = n(a('pVnL')),
        o = n(a('lwsE')),
        r = n(a('W8MJ')),
        i = n(a('a1gu')),
        u = n(a('Nsbk')),
        d = n(a('7W2i')),
        c = n(a('MVZn'));
      a('B9cy');
      var s = n(a('Ol7k')),
        f = n(a('q1tI')),
        p = n(a('ZFw/')),
        m = n(a('Y+p1')),
        h = n(a('Wwog')),
        g = a('MuoO'),
        v = a('E6Dt'),
        y = n(a('TSYQ')),
        b = n(a('bALw')),
        E = a('4zCG'),
        M = a('LLXN'),
        k = n(a('IamK')),
        C = n(a('HZnN')),
        x = (n(a('PceP')), n(a('mxmt'))),
        N = n(a('gJ0l')),
        w = n(a('ctiy')),
        S = n(a('R1Dz')),
        P = n(a('wOmh')),
        T = s.default.Content;
      function I(e, t, a) {
        return e
          .map(function(e) {
            var n = 'menu';
            if (
              (a && e.name
                ? (n = ''.concat(a, '.').concat(e.name))
                : e.name
                  ? (n = 'menu.'.concat(e.name))
                  : a && (n = a),
              e.path)
            ) {
              var l = (0, c.default)({}, e, { locale: n, authority: e.authority || t });
              if (e.routes) {
                var o = I(e.routes, e.authority, n);
                l.children = o;
              }
              return delete l.routes, l;
            }
            return null;
          })
          .filter(function(e) {
            return e;
          });
      }
      var O = (0, h.default)(I, m.default),
        W = {
          'screen-xs': { maxWidth: 575 },
          'screen-sm': { minWidth: 576, maxWidth: 767 },
          'screen-md': { minWidth: 768, maxWidth: 991 },
          'screen-lg': { minWidth: 992, maxWidth: 1199 },
          'screen-xl': { minWidth: 1200, maxWidth: 1599 },
          'screen-xxl': { minWidth: 1600 },
        },
        q = (function(e) {
          function t(e) {
            var a;
            return (
              (0, o.default)(this, t),
              (a = (0, i.default)(this, (0, u.default)(t).call(this, e))),
              (a.state = { rendering: !0, isMobile: !1, menuData: a.getMenuData() }),
              (a.matchParamsPath = function(e) {
                var t = Object.keys(a.breadcrumbNameMap).find(function(t) {
                  return (0, b.default)(t).test(e);
                });
                return a.breadcrumbNameMap[t];
              }),
              (a.getPageTitle = function(e) {
                var t = a.matchParamsPath(e);
                if (!t) return 'SmartLinkCloud';
                var n = (0, M.formatMessage)({ id: t.locale || t.name, defaultMessage: t.name });
                return ''.concat(n, ' - SmartLinkCloud');
              }),
              (a.getLayoutStyle = function() {
                var e = a.state.isMobile,
                  t = a.props,
                  n = t.fixSiderbar,
                  l = t.collapsed,
                  o = t.layout;
                return n && 'topmenu' !== o && !e ? { paddingLeft: l ? '80px' : '256px' } : null;
              }),
              (a.getContentStyle = function() {
                var e = a.props.fixedHeader;
                return { margin: '24px 24px 0', paddingTop: e ? 64 : 0 };
              }),
              (a.handleMenuCollapse = function(e) {
                var t = a.props.dispatch;
                t({ type: 'global/changeLayoutCollapsed', payload: e });
              }),
              (a.getPageTitle = (0, h.default)(a.getPageTitle)),
              (a.getBreadcrumbNameMap = (0, h.default)(a.getBreadcrumbNameMap, m.default)),
              (a.breadcrumbNameMap = a.getBreadcrumbNameMap()),
              (a.matchParamsPath = (0, h.default)(a.matchParamsPath, m.default)),
              a
            );
          }
          return (
            (0, d.default)(t, e),
            (0, r.default)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this,
                    t = this.props.dispatch;
                  t({ type: 'user/fetchCurrent' }),
                    t({ type: 'setting/getSetting' }),
                    (this.renderRef = requestAnimationFrame(function() {
                      e.setState({ rendering: !1 });
                    })),
                    (this.enquireHandler = (0, E.enquireScreen)(function(t) {
                      var a = e.state.isMobile;
                      a !== t && e.setState({ isMobile: t });
                    }));
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  this.breadcrumbNameMap = this.getBreadcrumbNameMap();
                  var t = this.state.isMobile,
                    a = this.props.collapsed;
                  !t || e.isMobile || a || this.handleMenuCollapse(!1);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  cancelAnimationFrame(this.renderRef), (0, E.unenquireScreen)(this.enquireHandler);
                },
              },
              {
                key: 'getContext',
                value: function() {
                  var e = this.props.location;
                  return { location: e, breadcrumbNameMap: this.breadcrumbNameMap };
                },
              },
              {
                key: 'getMenuData',
                value: function() {
                  var e = this.props.route.routes;
                  return O(e);
                },
              },
              {
                key: 'getBreadcrumbNameMap',
                value: function() {
                  var e = {},
                    t = function t(a) {
                      a.forEach(function(a) {
                        a.children && t(a.children), (e[a.path] = a);
                      });
                    };
                  return t(this.getMenuData()), e;
                },
              },
              {
                key: 'renderSettingDrawer',
                value: function() {
                  this.state.rendering;
                  return null;
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.navTheme,
                    n = t.layout,
                    o = t.children,
                    r = t.location.pathname,
                    i = this.state,
                    u = i.isMobile,
                    d = i.menuData,
                    m = 'topmenu' === n,
                    h = this.matchParamsPath(r),
                    g = f.default.createElement(
                      s.default,
                      null,
                      m && !u
                        ? null
                        : f.default.createElement(
                            k.default,
                            (0, l.default)(
                              {
                                logo: x.default,
                                Authorized: C.default,
                                theme: a,
                                onCollapse: this.handleMenuCollapse,
                                menuData: d,
                                isMobile: u,
                              },
                              this.props
                            )
                          ),
                      f.default.createElement(
                        s.default,
                        {
                          style: (0, c.default)({}, this.getLayoutStyle(), { minHeight: '100vh' }),
                        },
                        f.default.createElement(
                          w.default,
                          (0, l.default)(
                            {
                              menuData: d,
                              handleMenuCollapse: this.handleMenuCollapse,
                              logo: x.default,
                              isMobile: u,
                            },
                            this.props
                          )
                        ),
                        f.default.createElement(
                          T,
                          { style: this.getContentStyle() },
                          f.default.createElement(
                            C.default,
                            {
                              authority: h && h.authority,
                              noMatch: f.default.createElement(P.default, null),
                            },
                            o
                          )
                        ),
                        f.default.createElement(N.default, null)
                      )
                    );
                  return f.default.createElement(
                    f.default.Fragment,
                    null,
                    f.default.createElement(
                      p.default,
                      { title: this.getPageTitle(r) },
                      f.default.createElement(v.ContainerQuery, { query: W }, function(t) {
                        return f.default.createElement(
                          S.default.Provider,
                          { value: e.getContext() },
                          f.default.createElement('div', { className: (0, y.default)(t) }, g)
                        );
                      })
                    ),
                    this.renderSettingDrawer()
                  );
                },
              },
            ]),
            t
          );
        })(f.default.PureComponent),
        H = (0, g.connect)(function(e) {
          var t = e.global,
            a = e.setting;
          return (0, c.default)({ collapsed: t.collapsed, layout: a.layout }, a);
        })(q);
      t.default = H;
    },
    mR0u: function(e, t, a) {
      e.exports = {
        logo: 'antd-pro-components-sider-menu-index-logo',
        sider: 'antd-pro-components-sider-menu-index-sider',
        fixSiderbar: 'antd-pro-components-sider-menu-index-fixSiderbar',
        light: 'antd-pro-components-sider-menu-index-light',
        icon: 'antd-pro-components-sider-menu-index-icon',
      };
    },
    oFg3: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        l = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.getMenuMatches = void 0);
      var o = l(a('pVnL')),
        r = l(a('lwsE')),
        i = l(a('W8MJ')),
        u = l(a('a1gu')),
        d = l(a('Nsbk')),
        c = l(a('7W2i'));
      a('Pwec');
      var s = l(a('CtXQ'));
      a('lUTK');
      var f = l(a('BvKs')),
        p = n(a('q1tI')),
        m = l(a('mOP9')),
        h = l(a('Y+p1')),
        g = l(a('Wwog')),
        v = a('LLXN'),
        y = l(a('bALw')),
        b = a('S/9j'),
        E = l(a('mR0u')),
        M = f.default.SubMenu,
        k = function(e) {
          return 'string' === typeof e && 0 === e.indexOf('http')
            ? p.default.createElement('img', { src: e, alt: 'icon', className: E.default.icon })
            : 'string' === typeof e
              ? p.default.createElement(s.default, { type: e })
              : e;
        },
        C = (0, g.default)(function(e, t) {
          return e.filter(function(e) {
            return e && (0, y.default)(e).test(t);
          });
        }, h.default);
      t.getMenuMatches = C;
      var x = (function(e) {
        function t(e) {
          var a;
          return (
            (0, r.default)(this, t),
            (a = (0, u.default)(this, (0, d.default)(t).call(this, e))),
            (a.getNavMenuItems = function(e, t) {
              return e
                ? e
                    .filter(function(e) {
                      return e.name && !e.hideInMenu;
                    })
                    .map(function(e) {
                      var n = a.getSubMenuOrItem(e, t);
                      return a.checkPermissionItem(e.authority, n);
                    })
                    .filter(function(e) {
                      return e;
                    })
                : [];
            }),
            (a.getSelectedMenuKeys = function(e) {
              return (0, b.urlToList)(e).map(function(e) {
                return C(a.flatMenuKeys, e).pop();
              });
            }),
            (a.getSubMenuOrItem = function(e) {
              if (
                e.children &&
                !e.hideChildrenInMenu &&
                e.children.some(function(e) {
                  return e.name;
                })
              ) {
                var t = e.locale ? (0, v.formatMessage)({ id: e.locale }) : e.name;
                return p.default.createElement(
                  M,
                  {
                    title: e.icon
                      ? p.default.createElement(
                          'span',
                          null,
                          k(e.icon),
                          p.default.createElement('span', null, t)
                        )
                      : t,
                    key: e.path,
                  },
                  a.getNavMenuItems(e.children)
                );
              }
              return p.default.createElement(f.default.Item, { key: e.path }, a.getMenuItemPath(e));
            }),
            (a.getMenuItemPath = function(e) {
              var t = e.locale ? (0, v.formatMessage)({ id: e.locale }) : e.name,
                n = a.conversionPath(e.path),
                l = k(e.icon),
                o = e.target;
              if (/^https?:\/\//.test(n))
                return p.default.createElement(
                  'a',
                  { href: n, target: o },
                  l,
                  p.default.createElement('span', null, t)
                );
              var r = a.props,
                i = r.location,
                u = r.isMobile,
                d = r.onCollapse;
              return p.default.createElement(
                m.default,
                {
                  to: n,
                  target: o,
                  replace: n === i.pathname,
                  onClick: u
                    ? function() {
                        d(!0);
                      }
                    : void 0,
                },
                l,
                p.default.createElement('span', null, t)
              );
            }),
            (a.checkPermissionItem = function(e, t) {
              var n = a.props.Authorized;
              if (n && n.check) {
                var l = n.check;
                return l(e, t);
              }
              return t;
            }),
            (a.conversionPath = function(e) {
              return e && 0 === e.indexOf('http') ? e : '/'.concat(e || '').replace(/\/+/g, '/');
            }),
            (a.getSelectedMenuKeys = (0, g.default)(a.getSelectedMenuKeys, h.default)),
            (a.flatMenuKeys = a.getFlatMenuKeys(e.menuData)),
            a
          );
        }
        return (
          (0, c.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'getFlatMenuKeys',
              value: function(e) {
                var t = this,
                  a = [];
                return (
                  e.forEach(function(e) {
                    e.children && (a = a.concat(t.getFlatMenuKeys(e.children))), a.push(e.path);
                  }),
                  a
                );
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.openKeys,
                  a = e.theme,
                  n = e.mode,
                  l = e.location.pathname,
                  r = this.getSelectedMenuKeys(l);
                !r.length && t && (r = [t[t.length - 1]]);
                var i = {};
                t && (i = { openKeys: t });
                var u = this.props,
                  d = u.handleOpenChange,
                  c = u.style,
                  s = u.menuData;
                return p.default.createElement(
                  f.default,
                  (0, o.default)(
                    {
                      key: 'Menu',
                      mode: n,
                      theme: a,
                      onOpenChange: d,
                      selectedKeys: r,
                      style: c,
                      className: 'horizontal' === n ? 'top-nav-menu' : '',
                    },
                    i
                  ),
                  this.getNavMenuItems(s)
                );
              },
            },
          ]),
          t
        );
      })(p.PureComponent);
      t.default = x;
    },
    wWO0: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        l = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = l(a('pVnL')),
        r = l(a('lwsE')),
        i = l(a('W8MJ')),
        u = l(a('a1gu')),
        d = l(a('Nsbk')),
        c = l(a('7W2i')),
        s = n(a('q1tI')),
        f = l(a('mOP9')),
        p = l(a('X5mu')),
        m = l(a('oFg3')),
        h = l(a('JwhZ')),
        g = (function(e) {
          function t() {
            var e, a;
            (0, r.default)(this, t);
            for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
            return (
              (a = (0, u.default)(this, (e = (0, d.default)(t)).call.apply(e, [this].concat(l)))),
              (a.state = { maxWidth: void 0 }),
              a
            );
          }
          return (
            (0, c.default)(t, e),
            (0, i.default)(
              t,
              [
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.props,
                      a = t.theme,
                      n = t.contentWidth,
                      l = t.logo,
                      r = this.state.maxWidth;
                    return s.default.createElement(
                      'div',
                      {
                        className: ''
                          .concat(h.default.head, ' ')
                          .concat('light' === a ? h.default.light : ''),
                      },
                      s.default.createElement(
                        'div',
                        {
                          ref: function(t) {
                            e.maim = t;
                          },
                          className: ''
                            .concat(h.default.main, ' ')
                            .concat('Fixed' === n ? h.default.wide : ''),
                        },
                        s.default.createElement(
                          'div',
                          { className: h.default.left },
                          s.default.createElement(
                            'div',
                            { className: h.default.logo, key: 'logo', id: 'logo' },
                            s.default.createElement(
                              f.default,
                              { to: '/' },
                              s.default.createElement('img', { src: l, alt: 'logo' }),
                              s.default.createElement('h1', null, 'Smart Link Cloud')
                            )
                          ),
                          s.default.createElement(
                            'div',
                            { style: { maxWidth: r } },
                            s.default.createElement(
                              m.default,
                              (0, o.default)({}, this.props, {
                                style: { border: 'none', height: 64 },
                              })
                            )
                          )
                        ),
                        s.default.createElement(p.default, this.props)
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e) {
                    return {
                      maxWidth:
                        ('Fixed' === e.contentWidth ? 1200 : window.innerWidth) - 280 - 165 - 40,
                    };
                  },
                },
              ]
            ),
            t
          );
        })(s.PureComponent);
      t.default = g;
    },
  },
]);
