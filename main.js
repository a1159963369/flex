var http = require("http")
var url = require("url")
var fs = require("fs")
//req request 客户端请求
//res response 相应客户端请求
http.createServer(function (req, res, userxuesheng) {

    var userinfo = url.parse(req.url, true).query
    var userxuesheng = [
        { id: "0", name: "李杰" },
        { id: "0", name: "宋坤" },
        { id: "2", name: "张江浩" },
        { id: "3", name: "李晶晶" },
    ]
    str = fs.readFileSync('data.txt');
    console.log(userxuesheng);
    console.log(userinfo.userxs);

    res.writeHeader(200, {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Method': 'POST,GET,OPTIONS',
        'Access-Control-Request-Headers': 'content-type'
    })
    // var huida = "登录成功"
    var suaixuan = "请搜索"
    // if (userinfo.username != "张三") {
    //     huida = "用户名错误"
    // } else if (userinfo.userpwd != "111111") {
    //     huida = "密码错误"
    // }

    for (var i = 0; i < userxuesheng.length; i++) {
        if (userinfo.userxs == userxuesheng[i].id || userinfo.userxs == userxuesheng[i].name) {
            suaixuan = "学号:" + userxuesheng[i].id + "姓名" + userxuesheng[i].name;
        }
    }
    // res.end(huida);
    res.end(str);
}).listen(8080, '127.0.0.1', function () {
    console.log('启动成功')
});

