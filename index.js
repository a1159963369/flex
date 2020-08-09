var http = require("http")
var url = require("url");
var fs = require("fs")
//req request 客户端请求
//res response 相应客户端请求
http.createServer(function (req, res, userxuesheng) {

    var userinfo = url.parse(req.url, true).query

   
    res.writeHeader(200, {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Method': 'POST,GET,OPTIONS',
        'Access-Control-Request-Headers': 'content-type'
    })
    str = fs.readFileSync('data.txt');

    res.end(str);
}).listen(8080, '127.0.0.1', function () {
    console.log('启动成功')
});