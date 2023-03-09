from flask import Flask, render_template
app = Flask(__name__)


@app.route('/hello/<name>/<int:times>')
def index(name, times):
    return render_template("greet.html", 
                           name=name,
                           times=times)

@app.route("/list")
def show_list():
    zoo = [
       {'name' : '🦁', 'number' : 1},
       {'name' : '🦓', 'number' : 5},
       {'name' : '🐊', 'number' : 2},
       {'name' : '🐘', 'number' : 2},
       {'name' : '🦒', 'number' : 4}
    ]
    return render_template("list.html", zoo=zoo, color="blue")


if __name__=="__main__":
    app.run(debug=True, port=5001)