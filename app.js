var express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
app.set('port', '4200');
var options = {
        target: 'http://localhost:9090',
        changeOrigin: true,
};
var exampleProxy = proxy(options);
app.use('/countries', exampleProxy);
app.listen(app.get('port'), () => {
 console.log(`server running @${app.get('port')}`);
});
