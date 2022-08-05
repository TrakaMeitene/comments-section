const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path')
const router = express.Router();

module.exports = router;
module.exports = function(app) { 
     app.use(    createProxyMiddleware(["/api", , "/otherApi"], { target: "https://nodeprojectreact.herokuapp.com" }) 
      );
      app.use(entry= 'entry.js', output={ path: path.resolve(__dirname, 'dist'), filename: 'main.js' });
    };

 