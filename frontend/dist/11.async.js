(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [11],
  {
    XLaX: function(e, t, r) {
      'use strict';
      var a = r('TqRt'),
        l = r('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), r('IzEo');
      var o = a(r('bx4M'));
      r('/zsF');
      var u,
        d,
        n = a(r('PArb')),
        c = a(r('lwsE')),
        f = a(r('W8MJ')),
        i = a(r('a1gu')),
        p = a(r('Nsbk')),
        m = a(r('7W2i')),
        s = l(r('q1tI')),
        E = r('MuoO'),
        g = a(r('+kNj')),
        y = a(r('zHco')),
        h = (a(r('qYi8')), g.default.Description),
        v = ((u = (0, E.connect)(function(e) {
          var t = e.products,
            r = e.loading;
          return { products: t, loading: r.effects['products/fetchProductProfile'] };
        })),
        u(
          (d = (function(e) {
            function t() {
              return (
                (0, c.default)(this, t),
                (0, i.default)(this, (0, p.default)(t).apply(this, arguments))
              );
            }
            return (
              (0, m.default)(t, e),
              (0, f.default)(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this.props.dispatch;
                    e({ type: 'products/fetchProductProfile', payload: { product_id: 2 } });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props.products,
                      t = e.productProfile;
                    e.loading;
                    console.log(this.props), console.log('----productProfile----'), console.log(t);
                    var r = t[0];
                    return s.default.createElement(
                      y.default,
                      { title: '\u4ea7\u54c1\u8be6\u60c5\u9875' },
                      s.default.createElement(
                        o.default,
                        { bordered: !1 },
                        s.default.createElement(
                          g.default,
                          {
                            size: 'large',
                            title: '\u57fa\u672c\u4fe1\u606f',
                            style: { marginBottom: 32 },
                          },
                          s.default.createElement(
                            h,
                            { term: '\u4ea7\u54c1\u540d\u79f0' },
                            r.product_name
                          ),
                          s.default.createElement(h, { term: '\u6240\u5c5e\u7528\u6237' }, r.owner),
                          s.default.createElement(h, { term: 'product_key' }, r.product_key),
                          s.default.createElement(
                            h,
                            { term: '\u4ea7\u54c1\u63cf\u8ff0' },
                            r.product_description
                          )
                        ),
                        s.default.createElement(n.default, { style: { marginBottom: 32 } }),
                        s.default.createElement(
                          g.default,
                          {
                            size: 'large',
                            title: '\u72b6\u6001\u4fe1\u606f',
                            style: { marginBottom: 32 },
                          },
                          s.default.createElement(
                            h,
                            { term: '\u4ea7\u54c1\u7c7b\u578b' },
                            r.node_type
                          ),
                          s.default.createElement(
                            h,
                            { term: '\u6d88\u606f\u683c\u5f0f' },
                            r.data_format
                          ),
                          s.default.createElement(
                            h,
                            { term: '\u521b\u5efa\u65f6\u95f4' },
                            r.gmt_create
                          ),
                          s.default.createElement(
                            h,
                            { term: '\u66f4\u65b0\u65f6\u95f4' },
                            r.gmt_update
                          ),
                          s.default.createElement(h, { term: '\u5907\u6ce8' }, '\u65e0')
                        ),
                        s.default.createElement(n.default, { style: { marginBottom: 32 } })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(s.Component))
        ) || d);
      t.default = v;
    },
    qYi8: function(e, t, r) {
      e.exports = { title: 'antd-pro-pages-product-product-profile-title' };
    },
  },
]);
