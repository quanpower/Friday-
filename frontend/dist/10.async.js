(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
  {
    Hai3: function(e, t, a) {
      'use strict';
      var l = a('TqRt'),
        r = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
      var i = l(a('bx4M'));
      a('/zsF');
      var n,
        d,
        c = l(a('PArb')),
        o = l(a('lwsE')),
        u = l(a('W8MJ')),
        f = l(a('a1gu')),
        m = l(a('Nsbk')),
        s = l(a('7W2i')),
        v = r(a('q1tI')),
        p = a('MuoO'),
        E = l(a('+kNj')),
        g = l(a('zHco')),
        _ = (l(a('P54t')), E.default.Description),
        y = ((n = (0, p.connect)(function(e) {
          var t = e.devices,
            a = e.loading;
          return { devices: t, loading: a.effects['devices/fetchDeviceProfile'] };
        })),
        n(
          (d = (function(e) {
            function t() {
              return (
                (0, o.default)(this, t),
                (0, f.default)(this, (0, m.default)(t).apply(this, arguments))
              );
            }
            return (
              (0, s.default)(t, e),
              (0, u.default)(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this.props.dispatch;
                    e({ type: 'devices/fetchDeviceProfile', payload: { device_id: 1 } }),
                      (this.timer = setInterval(function() {
                        e({ type: 'devices/fetchDeviceProfile', payload: { device_id: 1 } });
                      }, 1e4));
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props.devices,
                      t = e.deviceProfile;
                    e.loading;
                    console.log(t), console.log(t[0]);
                    var a = t[0];
                    return v.default.createElement(
                      g.default,
                      { title: '\u8bbe\u5907\u8be6\u60c5\u9875' },
                      v.default.createElement(
                        i.default,
                        { bordered: !1 },
                        v.default.createElement(
                          E.default,
                          {
                            size: 'large',
                            title: '\u57fa\u672c\u4fe1\u606f',
                            style: { marginBottom: 32 },
                          },
                          v.default.createElement(_, { term: '\u8bbe\u5907\u540d\u79f0' }, a.name),
                          v.default.createElement(_, { term: '\u6240\u5c5e\u7528\u6237' }, a.owner),
                          v.default.createElement(_, { term: 'device_name' }, a.device_name),
                          v.default.createElement(_, { term: 'device_secret' }, a.device_secret),
                          v.default.createElement(
                            _,
                            { term: 'firmware_version' },
                            a.firmware_version
                          )
                        ),
                        v.default.createElement(c.default, { style: { marginBottom: 32 } }),
                        v.default.createElement(
                          E.default,
                          {
                            size: 'large',
                            title: '\u72b6\u6001\u4fe1\u606f',
                            style: { marginBottom: 32 },
                          },
                          v.default.createElement(
                            _,
                            { term: '\u8bbe\u5907\u7c7b\u578b' },
                            a.node_type
                          ),
                          v.default.createElement(_, { term: 'IP\u5730\u5740' }, a.ip_address),
                          v.default.createElement(
                            _,
                            { term: '\u5f53\u524d\u72b6\u6001' },
                            a.status
                          ),
                          v.default.createElement(
                            _,
                            { term: '\u521b\u5efa\u65f6\u95f4' },
                            a.gmt_create
                          ),
                          v.default.createElement(
                            _,
                            { term: '\u6fc0\u6d3b\u65f6\u95f4' },
                            a.gmt_active
                          ),
                          v.default.createElement(
                            _,
                            { term: '\u6700\u540e\u5728\u7ebf' },
                            a.gmt_online
                          ),
                          v.default.createElement(_, { term: '\u5907\u6ce8' }, '\u65e0')
                        ),
                        v.default.createElement(c.default, { style: { marginBottom: 32 } })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(v.Component))
        ) || d);
      t.default = y;
    },
    P54t: function(e, t, a) {
      e.exports = { title: 'antd-pro-pages-device-device-profile-title' };
    },
  },
]);
