(function (e, t, n) {
  if (e.snaptr) return;
  var a = (e.snaptr = function () {
    a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments);
  });
  a.queue = [];
  var s = 'script';
  var r = t.createElement(s);
  r.async = !0;
  r.src = n;
  var u = t.getElementsByTagName(s)[0];
  u.parentNode.insertBefore(r, u);
})(window, document, 'https://sc-static.net/scevent.min.js');

snaptr('init', '6f5b5b60-8d30-4490-b557-ea643d2c2f7d');
snaptr('track', 'PAGE_VIEW');
