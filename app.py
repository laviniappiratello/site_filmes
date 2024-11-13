from flask import Flask, render_template, request
from flask_mysqldb import MySQL

app = Flask(__name__)

# Configuração do MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '060106'
app.config['MYSQL_DB'] = 'filmes'
mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/filmes')
def filmes():
    return render_template('filmes.html')

@app.route('/forms', methods=["POST", "GET"])
def forms():
    if request.method == "POST":
        email = request.form['email']
        filme = request.form['filme']
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO filmes (email, filme) VALUES (%s, %s)", (email, filme))
        mysql.connection.commit()
        cur.close()
        
        sucess_message= "Cadastrado com sucesso"
    
    cur = mysql.connection.cursor()
    cur.execute("SELECT email, filme FROM filmes")
    filmes = cur.fetchall()
    cur.close()
    
    return render_template('forms.html', filmes=filmes)


if __name__ == '__main__':
    app.run(debug=True)
