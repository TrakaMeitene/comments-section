const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) { 
     app.use(    createProxyMiddleware(["/api", , "/otherApi"], { target: "https://nodeprojectreact.herokuapp.com/" }) 
      );
      app.use(entry= 'entry.js', output={ path: path.resolve(__dirname, 'dist'), filename: 'main.js' });
    };

 