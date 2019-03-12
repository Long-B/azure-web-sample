from flask import Flask 
import  pymssql
app = Flask(__name__)

@app.route("/")
def hello():
	conn = pymssql.connect(host='10.40.1.5',user='user1',
                       password='Longbo5201314',database='test',
                      charset="utf8")
	cursor = conn.cursor()
	sql = 'select * from staff'
	rows=cursor.execute(sql)
	rows = cursor.fetchall()
	conn.close()
	if rows is not None:
		return "succeess!"
	else:
		return "null"

if __name__ =='__main__':
    #程序实例用run()方法启动Flask继承的Web服务器
    app.run()


