(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [30],
  {
    zfh6: function(e, t, a) {
      'use strict';
      var l = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('+L6B');
      var u = l(a('2/Rp'));
      a('5NDa');
      var r = l(a('5rEg'));
      a('/zsF');
      var f = l(a('PArb')),
        n = l(a('pVnL'));
      a('fOrg');
      var s = l(a('+KLJ')),
        d = l(a('MVZn')),
        o = l(a('lwsE')),
        m = l(a('W8MJ')),
        p = l(a('a1gu')),
        c = l(a('Nsbk')),
        i = l(a('7W2i'));
      a('y8nQ');
      var b,
        y,
        E,
        g = l(a('Vl3Y')),
        v = l(a('q1tI')),
        w = a('MuoO'),
        h = l(a('usdK')),
        F = a('+n12'),
        N = l(a('7GcH')),
        C = { labelCol: { span: 5 }, wrapperCol: { span: 19 } },
        I = ((b = (0, w.connect)(function(e) {
          var t = e.form,
            a = e.loading;
          return { submitting: a.effects['form/submitStepForm'], data: t.step };
        })),
        (y = g.default.create()),
        b(
          (E =
            y(
              (E = (function(e) {
                function t() {
                  return (
                    (0, o.default)(this, t),
                    (0, p.default)(this, (0, c.default)(t).apply(this, arguments))
                  );
                }
                return (
                  (0, i.default)(t, e),
                  (0, m.default)(t, [
                    {
                      key: 'render',
                      value: function() {
                        var e = this.props,
                          t = e.form,
                          a = e.data,
                          l = e.dispatch,
                          o = e.submitting,
                          m = t.getFieldDecorator,
                          p = t.validateFields,
                          c = function() {
                            h.default.push('/form/step-form/info');
                          },
                          i = function(e) {
                            e.preventDefault(),
                              p(function(e, t) {
                                e ||
                                  l({
                                    type: 'form/submitStepForm',
                                    payload: (0, d.default)({}, a, t),
                                  });
                              });
                          };
                        return v.default.createElement(
                          g.default,
                          { layout: 'horizontal', className: N.default.stepForm },
                          v.default.createElement(s.default, {
                            closable: !0,
                            showIcon: !0,
                            message:
                              '\u786e\u8ba4\u8f6c\u8d26\u540e\uff0c\u8d44\u91d1\u5c06\u76f4\u63a5\u6253\u5165\u5bf9\u65b9\u8d26\u6237\uff0c\u65e0\u6cd5\u9000\u56de\u3002',
                            style: { marginBottom: 24 },
                          }),
                          v.default.createElement(
                            g.default.Item,
                            (0, n.default)({}, C, {
                              className: N.default.stepFormText,
                              label: '\u4ed8\u6b3e\u8d26\u6237',
                            }),
                            a.payAccount
                          ),
                          v.default.createElement(
                            g.default.Item,
                            (0, n.default)({}, C, {
                              className: N.default.stepFormText,
                              label: '\u6536\u6b3e\u8d26\u6237',
                            }),
                            a.receiverAccount
                          ),
                          v.default.createElement(
                            g.default.Item,
                            (0, n.default)({}, C, {
                              className: N.default.stepFormText,
                              label: '\u6536\u6b3e\u4eba\u59d3\u540d',
                            }),
                            a.receiverName
                          ),
                          v.default.createElement(
                            g.default.Item,
                            (0, n.default)({}, C, {
                              className: N.default.stepFormText,
                              label: '\u8f6c\u8d26\u91d1\u989d',
                            }),
                            v.default.createElement(
                              'span',
                              { className: N.default.money },
                              a.amount
                            ),
                            v.default.createElement(
                              'span',
                              { className: N.default.uppercase },
                              '\uff08',
                              (0, F.digitUppercase)(a.amount),
                              '\uff09'
                            )
                          ),
                          v.default.createElement(f.default, { style: { margin: '24px 0' } }),
                          v.default.createElement(
                            g.default.Item,
                            (0, n.default)({}, C, {
                              label: '\u652f\u4ed8\u5bc6\u7801',
                              required: !1,
                            }),
                            m('password', {
                              initialValue: '123456',
                              rules: [
                                {
                                  required: !0,
                                  message:
                                    '\u9700\u8981\u652f\u4ed8\u5bc6\u7801\u624d\u80fd\u8fdb\u884c\u652f\u4ed8',
                                },
                              ],
                            })(
                              v.default.createElement(r.default, {
                                type: 'password',
                                autoComplete: 'off',
                                style: { width: '80%' },
                              })
                            )
                          ),
                          v.default.createElement(
                            g.default.Item,
                            {
                              style: { marginBottom: 8 },
                              wrapperCol: {
                                xs: { span: 24, offset: 0 },
                                sm: { span: C.wrapperCol.span, offset: C.labelCol.span },
                              },
                              label: '',
                            },
                            v.default.createElement(
                              u.default,
                              { type: 'primary', onClick: i, loading: o },
                              '\u63d0\u4ea4'
                            ),
                            v.default.createElement(
                              u.default,
                              { onClick: c, style: { marginLeft: 8 } },
                              '\u4e0a\u4e00\u6b65'
                            )
                          )
                        );
                      },
                    },
                  ]),
                  t
                );
              })(v.default.PureComponent))
            ) || E)
        ) || E),
        k = I;
      t.default = k;
    },
  },
]);
