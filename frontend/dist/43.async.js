(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [43],
  {
    s8Kb: function(e, t, a) {
      'use strict';
      var r = a('284h'),
        l = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
      var d = l(a('bx4M'));
      a('+L6B');
      var o = l(a('2/Rp'));
      a('Pwec');
      var n = l(a('CtXQ')),
        u = r(a('q1tI')),
        s = a('LLXN'),
        i = l(a('ALo4')),
        f = l(a('zHco')),
        m = u.default.createElement(
          u.Fragment,
          null,
          u.default.createElement(
            'div',
            {
              style: {
                fontSize: 16,
                color: 'rgba(0, 0, 0, 0.85)',
                fontWeight: '500',
                marginBottom: 16,
              },
            },
            u.default.createElement(s.FormattedMessage, {
              id: 'app.result.error.hint-title',
              defaultMessage: 'The content you submitted has the following error:',
            })
          ),
          u.default.createElement(
            'div',
            { style: { marginBottom: 16 } },
            u.default.createElement(n.default, {
              style: { color: '#f5222d', marginRight: 8 },
              type: 'close-circle-o',
            }),
            u.default.createElement(s.FormattedMessage, {
              id: 'app.result.error.hint-text1',
              defaultMessage: 'Your account has been frozen',
            }),
            u.default.createElement(
              'a',
              { style: { marginLeft: 16 } },
              u.default.createElement(s.FormattedMessage, {
                id: 'app.result.error.hint-btn1',
                defaultMessage: 'Thaw immediately',
              }),
              u.default.createElement(n.default, { type: 'right' })
            )
          ),
          u.default.createElement(
            'div',
            null,
            u.default.createElement(n.default, {
              style: { color: '#f5222d', marginRight: 8 },
              type: 'close-circle-o',
            }),
            u.default.createElement(s.FormattedMessage, {
              id: 'app.result.error.hint-text2',
              defaultMessage: 'Your account is not yet eligible to apply',
            }),
            u.default.createElement(
              'a',
              { style: { marginLeft: 16 } },
              u.default.createElement(s.FormattedMessage, {
                id: 'app.result.error.hint-btn2',
                defaultMessage: 'Upgrade immediately',
              }),
              u.default.createElement(n.default, { type: 'right' })
            )
          )
        ),
        c = u.default.createElement(
          o.default,
          { type: 'primary' },
          u.default.createElement(s.FormattedMessage, {
            id: 'app.result.error.btn-text',
            defaultMessage: 'Return to modify',
          })
        ),
        p = function() {
          return u.default.createElement(
            f.default,
            null,
            u.default.createElement(
              d.default,
              { bordered: !1 },
              u.default.createElement(i.default, {
                type: 'error',
                title: (0, s.formatMessage)({ id: 'app.result.error.title' }),
                description: (0, s.formatMessage)({ id: 'app.result.error.description' }),
                extra: m,
                actions: c,
                style: { marginTop: 48, marginBottom: 16 },
              })
            )
          );
        };
      t.default = p;
    },
  },
]);
