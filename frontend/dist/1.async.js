(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    'j5+p': function(e, t, a) {
      e.exports = {
        standardList: 'antd-pro-pages-project-project-list-standardList',
        headerInfo: 'antd-pro-pages-project-project-list-headerInfo',
        listContent: 'antd-pro-pages-project-project-list-listContent',
        listContentItem: 'antd-pro-pages-project-project-list-listContentItem',
        extraContentSearch: 'antd-pro-pages-project-project-list-extraContentSearch',
        listCard: 'antd-pro-pages-project-project-list-listCard',
      };
    },
    yCsD: function(e, t, a) {
      'use strict';
      var l = a('TqRt'),
        n = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
      var r = l(a('bx4M'));
      a('Mwp2');
      var d = l(a('VXEj'));
      a('Telt');
      var u = l(a('Tckk'));
      a('+L6B');
      var o = l(a('2/Rp'));
      a('qVdP');
      var c = l(a('jsC+'));
      a('Pwec');
      var s = l(a('CtXQ'));
      a('lUTK');
      var f = l(a('BvKs'));
      a('MXD1');
      var i = l(a('CFYs')),
        p = l(a('lwsE')),
        m = l(a('W8MJ')),
        E = l(a('a1gu')),
        v = l(a('Nsbk')),
        h = l(a('7W2i'));
      a('5NDa');
      var g = l(a('5rEg'));
      a('7Kak');
      var j,
        C,
        w = l(a('9yH6')),
        y = n(a('q1tI')),
        I = l(a('wd/R')),
        k = a('MuoO'),
        x = l(a('zHco')),
        M = l(a('j5+p')),
        N = w.default.Button,
        S = w.default.Group,
        b = g.default.Search,
        D = ((j = (0, k.connect)(function(e) {
          var t = e.projects,
            a = e.loading;
          return { projects: t, loading: a.models.projects };
        })),
        j(
          (C = (function(e) {
            function t() {
              return (
                (0, p.default)(this, t),
                (0, E.default)(this, (0, v.default)(t).apply(this, arguments))
              );
            }
            return (
              (0, h.default)(t, e),
              (0, m.default)(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.props.dispatch({ type: 'projects/fetchProjects' });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    console.log(this.props);
                    var e = this.props,
                      t = e.projects.projects,
                      a = e.loading;
                    console.log(t);
                    var l = y.default.createElement(
                        'div',
                        { className: M.default.extraContent },
                        y.default.createElement(
                          S,
                          { defaultValue: 'all' },
                          y.default.createElement(N, { value: 'all' }, '\u5168\u90e8'),
                          y.default.createElement(N, { value: 'progress' }, '\u8fdb\u884c\u4e2d'),
                          y.default.createElement(N, { value: 'waiting' }, '\u7b49\u5f85\u4e2d')
                        ),
                        y.default.createElement(b, {
                          className: M.default.extraContentSearch,
                          placeholder: '\u8bf7\u8f93\u5165',
                          onSearch: function() {
                            return {};
                          },
                        })
                      ),
                      n = { showSizeChanger: !0, showQuickJumper: !0, pageSize: 5, total: 50 },
                      p = function(e) {
                        var t = e.data,
                          a = t.owner,
                          l = t.createdAt,
                          n = t.percent,
                          r = t.status;
                        return y.default.createElement(
                          'div',
                          { className: M.default.listContent },
                          y.default.createElement(
                            'div',
                            { className: M.default.listContentItem },
                            y.default.createElement('span', null, 'Owner'),
                            y.default.createElement('p', null, a)
                          ),
                          y.default.createElement(
                            'div',
                            { className: M.default.listContentItem },
                            y.default.createElement('span', null, '\u5f00\u59cb\u65f6\u95f4'),
                            y.default.createElement(
                              'p',
                              null,
                              (0, I.default)(l).format('YYYY-MM-DD HH:mm')
                            )
                          ),
                          y.default.createElement(
                            'div',
                            { className: M.default.listContentItem },
                            y.default.createElement(i.default, {
                              percent: n,
                              status: r,
                              strokeWidth: 6,
                              style: { width: 180 },
                            })
                          )
                        );
                      },
                      m = y.default.createElement(
                        f.default,
                        null,
                        y.default.createElement(
                          f.default.Item,
                          null,
                          y.default.createElement('a', null, '\u7f16\u8f91')
                        ),
                        y.default.createElement(
                          f.default.Item,
                          null,
                          y.default.createElement('a', null, '\u5220\u9664')
                        )
                      ),
                      E = function() {
                        return y.default.createElement(
                          c.default,
                          { overlay: m },
                          y.default.createElement(
                            'a',
                            null,
                            '\u66f4\u591a ',
                            y.default.createElement(s.default, { type: 'down' })
                          )
                        );
                      };
                    return y.default.createElement(
                      x.default,
                      null,
                      y.default.createElement(
                        'div',
                        { className: M.default.standardList },
                        y.default.createElement(
                          r.default,
                          {
                            className: M.default.listCard,
                            bordered: !1,
                            title: '\u9879\u76ee\u5217\u8868',
                            style: { marginTop: 24 },
                            bodyStyle: { padding: '0 32px 40px 32px' },
                            extra: l,
                          },
                          y.default.createElement(
                            o.default,
                            {
                              type: 'dashed',
                              style: { width: '100%', marginBottom: 8 },
                              icon: 'plus',
                            },
                            '\u6dfb\u52a0'
                          ),
                          y.default.createElement(d.default, {
                            size: 'large',
                            rowKey: 'id',
                            loading: a,
                            pagination: n,
                            dataSource: t,
                            renderItem: function(e) {
                              return y.default.createElement(
                                d.default.Item,
                                {
                                  actions: [
                                    y.default.createElement('a', null, '\u7f16\u8f91'),
                                    y.default.createElement(E, null),
                                  ],
                                },
                                y.default.createElement(d.default.Item.Meta, {
                                  avatar: y.default.createElement(u.default, {
                                    src: e.logo,
                                    shape: 'square',
                                    size: 'large',
                                  }),
                                  title: y.default.createElement('a', { href: e.href }, e.title),
                                  description: e.subDescription,
                                }),
                                y.default.createElement(p, { data: e })
                              );
                            },
                          })
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(y.PureComponent))
        ) || C);
      t.default = D;
    },
  },
]);
