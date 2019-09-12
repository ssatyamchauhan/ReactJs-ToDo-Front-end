const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use('/', proxy({
    target: 'http://localhost:2000',
    changeOrigin: true,
  }));
};
