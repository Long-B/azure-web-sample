var http = require('http');

var server = http.createServer(function(request, response) {
	var sql = require('mssql');
	//连接方式2："mssql://用户名:密码@ip地址:1433(默认端口号)/数据库名称"
	sql.connect("mssql://user1:Longbo5201314@10.40.1.5/test").then(function() {		
		// Query
		new sql.Request().query('select * from staff').then(function(recordset) {
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.end(JSON.stringify(recordset));
			console.log(recordset);
			sql.close();
	}).catch(function(err) {
       console.log(err);
	   sql.close();
    });
    // Stored Procedure
	}).catch(function(err) {
		console.log(err);
		sql.close();
	});
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
