
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path')
//const router =require("express").Router();

module.exports = function(app) { 
     app.use (    createProxyMiddleware(["/api", , "/otherApi"], 
     { target: "http://localhost:4000" }) 
      );
      app.use(entry= 'entry.js', output={ path: path.resolve(__dirname, 'dist'), filename: 'main.js' });
    };

   module.exports = router;