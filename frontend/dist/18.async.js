(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [18],
  {
    UKiy: function(e, t, a) {
      'use strict';
      var r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('+L6B');
      var s = r(a('2/Rp')),
        l = r(a('q1tI')),
        i = a('LLXN'),
        u = r(a('mOP9')),
        d = r(a('ALo4')),
        n = r(a('ltW9')),
        c = l.default.createElement(
          'div',
          { className: n.default.actions },
          l.default.createElement(
            'a',
            { href: '' },
            l.default.createElement(
              s.default,
              { size: 'large', type: 'primary' },
              l.default.createElement(i.FormattedMessage, {
                id: 'app.register-result.view-mailbox',
              })
            )
          ),
          l.default.createElement(
            u.default,
            { to: '/' },
            l.default.createElement(
              s.default,
              { size: 'large' },
              l.default.createElement(i.FormattedMessage, { id: 'app.register-result.back-home' })
            )
          )
        ),
        o = function(e) {
          var t = e.location;
          return l.default.createElement(d.default, {
            className: n.default.registerResult,
            type: 'success',
            title: l.default.createElement(
              'div',
              { className: n.default.title },
              l.default.createElement(i.FormattedMessage, {
                id: 'app.register-result.msg',
                values: { email: t.state ? t.state.account : 'AntDesign@example.com' },
              })
            ),
            description: (0, i.formatMessage)({ id: 'app.register-result.activation-email' }),
            actions: c,
            style: { marginTop: 56 },
          });
        },
        p = o;
      t.default = p;
    },
    ltW9: function(e, t, a) {
      e.exports = {
        registerResult: 'antd-pro-pages-user-register-result-registerResult',
        title: 'antd-pro-pages-user-register-result-title',
        actions: 'antd-pro-pages-user-register-result-actions',
      };
    },
  },
]);
