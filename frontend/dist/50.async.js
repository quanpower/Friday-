(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [50],
  {
    FSIE: function(e, t, a) {
      'use strict';
      var l = a('TqRt'),
        r = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('Mwp2');
      var u = l(a('VXEj'));
      a('IzEo');
      var n,
        d,
        c = l(a('bx4M')),
        i = l(a('lwsE')),
        f = l(a('W8MJ')),
        s = l(a('a1gu')),
        o = l(a('Nsbk')),
        m = l(a('7W2i')),
        p = r(a('q1tI')),
        v = l(a('wd/R')),
        E = a('MuoO'),
        w = l(a('pUXw')),
        b = l(a('wgDz')),
        h = ((n = (0, E.connect)(function(e) {
          var t = e.list;
          return { list: t };
        })),
        n(
          (d = (function(e) {
            function t() {
              return (
                (0, i.default)(this, t),
                (0, s.default)(this, (0, o.default)(t).apply(this, arguments))
              );
            }
            return (
              (0, m.default)(t, e),
              (0, f.default)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props.list.list;
                    return p.default.createElement(u.default, {
                      className: b.default.coverCardList,
                      rowKey: 'id',
                      grid: { gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 },
                      dataSource: e,
                      renderItem: function(e) {
                        return p.default.createElement(
                          u.default.Item,
                          null,
                          p.default.createElement(
                            c.default,
                            {
                              className: b.default.card,
                              hoverable: !0,
                              cover: p.default.createElement('img', { alt: e.title, src: e.cover }),
                            },
                            p.default.createElement(c.default.Meta, {
                              title: p.default.createElement('a', null, e.title),
                              description: e.subDescription,
                            }),
                            p.default.createElement(
                              'div',
                              { className: b.default.cardItemContent },
                              p.default.createElement(
                                'span',
                                null,
                                (0, v.default)(e.updatedAt).fromNow()
                              ),
                              p.default.createElement(
                                'div',
                                { className: b.default.avatarList },
                                p.default.createElement(
                                  w.default,
                                  { size: 'mini' },
                                  e.members.map(function(t) {
                                    return p.default.createElement(w.default.Item, {
                                      key: ''.concat(e.id, '-avatar-').concat(t.id),
                                      src: t.avatar,
                                      tips: t.name,
                                    });
                                  })
                                )
                              )
                            )
                          )
                        );
                      },
                    });
                  },
                },
              ]),
              t
            );
          })(p.PureComponent))
        ) || d),
        I = h;
      t.default = I;
    },
  },
]);
