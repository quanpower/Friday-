(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [55],
  {
    JeqK: function(t, e, a) {
      'use strict';
      var i = a('284h'),
        n = a('TqRt');
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0), a('Mwp2');
      var s = n(a('VXEj'));
      a('BoS7');
      var o = n(a('Sdc0')),
        r = n(a('lwsE')),
        d = n(a('W8MJ')),
        c = n(a('a1gu')),
        l = n(a('Nsbk')),
        f = n(a('7W2i')),
        u = i(a('q1tI')),
        p = a('LLXN'),
        g = (function(t) {
          function e() {
            var t, a;
            (0, r.default)(this, e);
            for (var i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
            return (
              (a = (0, c.default)(this, (t = (0, l.default)(e)).call.apply(t, [this].concat(n)))),
              (a.getData = function() {
                var t = u.default.createElement(o.default, {
                  checkedChildren: (0, p.formatMessage)({ id: 'app.settings.open' }),
                  unCheckedChildren: (0, p.formatMessage)({ id: 'app.settings.close' }),
                  defaultChecked: !0,
                });
                return [
                  {
                    title: (0, p.formatMessage)({ id: 'app.settings.notification.password' }, {}),
                    description: (0, p.formatMessage)(
                      { id: 'app.settings.notification.password-description' },
                      {}
                    ),
                    actions: [t],
                  },
                  {
                    title: (0, p.formatMessage)({ id: 'app.settings.notification.messages' }, {}),
                    description: (0, p.formatMessage)(
                      { id: 'app.settings.notification.messages-description' },
                      {}
                    ),
                    actions: [t],
                  },
                  {
                    title: (0, p.formatMessage)({ id: 'app.settings.notification.todo' }, {}),
                    description: (0, p.formatMessage)(
                      { id: 'app.settings.notification.todo-description' },
                      {}
                    ),
                    actions: [t],
                  },
                ];
              }),
              a
            );
          }
          return (
            (0, f.default)(e, t),
            (0, d.default)(e, [
              {
                key: 'render',
                value: function() {
                  return u.default.createElement(
                    u.Fragment,
                    null,
                    u.default.createElement(s.default, {
                      itemLayout: 'horizontal',
                      dataSource: this.getData(),
                      renderItem: function(t) {
                        return u.default.createElement(
                          s.default.Item,
                          { actions: t.actions },
                          u.default.createElement(s.default.Item.Meta, {
                            title: t.title,
                            description: t.description,
                          })
                        );
                      },
                    })
                  );
                },
              },
            ]),
            e
          );
        })(u.Component),
        m = g;
      e.default = m;
    },
  },
]);
