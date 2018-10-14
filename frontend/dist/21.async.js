(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [21],
  {
    '+UNd': function(t, e, a) {
      'use strict';
      var r = a('TqRt'),
        d = a('284h');
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0), a('Mwp2');
      var u = r(a('VXEj'));
      a('IzEo');
      var c,
        l,
        n = r(a('bx4M')),
        o = r(a('lwsE')),
        s = r(a('W8MJ')),
        i = r(a('a1gu')),
        p = r(a('Nsbk')),
        f = r(a('7W2i')),
        m = d(a('q1tI')),
        v = r(a('wd/R')),
        E = a('MuoO'),
        g = r(a('pUXw')),
        h = r(a('xNuS')),
        w = r(a('4EsE')),
        L = ((c = (0, E.connect)(function(t) {
          var e = t.products,
            a = t.loading;
          return { products: e, loading: a.models.products };
        })),
        c(
          (l = (function(t) {
            function e() {
              return (
                (0, o.default)(this, e),
                (0, i.default)(this, (0, p.default)(e).apply(this, arguments))
              );
            }
            return (
              (0, f.default)(e, t),
              (0, s.default)(e, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.props.dispatch({ type: 'products/fetchProducts' });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var t = this.props,
                      e = t.products.products,
                      a = void 0 === e ? [] : e,
                      r = t.loading,
                      d = a
                        ? m.default.createElement(u.default, {
                            rowKey: 'id',
                            loading: r,
                            grid: { gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 },
                            dataSource: a,
                            renderItem: function(t) {
                              return m.default.createElement(
                                u.default.Item,
                                null,
                                m.default.createElement(
                                  n.default,
                                  {
                                    className: w.default.card,
                                    hoverable: !0,
                                    cover: m.default.createElement('img', {
                                      alt: t.product_name,
                                      src: t.product_avatar,
                                      height: 154,
                                    }),
                                  },
                                  m.default.createElement(n.default.Meta, {
                                    title: m.default.createElement(
                                      'a',
                                      { href: '#/product/product-profile/'.concat(t.id) },
                                      t.product_name
                                    ),
                                    description: m.default.createElement(
                                      h.default,
                                      { lines: 2 },
                                      t.product_description
                                    ),
                                  }),
                                  m.default.createElement(
                                    'div',
                                    { className: w.default.cardItemContent },
                                    m.default.createElement(
                                      'span',
                                      null,
                                      (0, v.default)(t.gmt_update).fromNow()
                                    ),
                                    m.default.createElement(
                                      'div',
                                      { className: w.default.avatarList },
                                      m.default.createElement(
                                        g.default,
                                        { size: 'mini' },
                                        t.members.map(function(e, a) {
                                          return m.default.createElement(g.default.Item, {
                                            key: ''.concat(t.id, '-avatar-').concat(a),
                                            src: e.avatar,
                                            tips: e.name,
                                          });
                                        })
                                      )
                                    )
                                  )
                                )
                              );
                            },
                          })
                        : null;
                    return m.default.createElement(
                      'div',
                      { className: w.default.coverCardList },
                      m.default.createElement('div', { className: w.default.cardList }, d)
                    );
                  },
                },
              ]),
              e
            );
          })(m.PureComponent))
        ) || l);
      e.default = L;
    },
    '4EsE': function(t, e, a) {
      t.exports = {
        coverCardList: 'antd-pro-pages-product-product-list-coverCardList',
        card: 'antd-pro-pages-product-product-list-card',
        cardItemContent: 'antd-pro-pages-product-product-list-cardItemContent',
        avatarList: 'antd-pro-pages-product-product-list-avatarList',
        cardList: 'antd-pro-pages-product-product-list-cardList',
      };
    },
  },
]);
