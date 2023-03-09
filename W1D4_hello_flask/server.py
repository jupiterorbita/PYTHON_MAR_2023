from flask import Flask, render_template
app = Flask(__name__)
# ninja = Ninja("bob")

# http://localhost:1337/
# http://127.0.0.1:1337/
@app.route('/')
def hello_world():
    return 'Hello World!'

# ? localhost:1337/hello/VARIABLE
@app.route("/hello/<name>")
def hello(name):
    print(name)
    return f"<h2>hello ninja! {name} </h2>"

@app.route("/hello/<name>/<int:times>")
def times_hello(times, name):
    print(times, name)
    return f"<p> {name}</p>" * times

@app.route("/hello_templates")
def cool():
    return render_template("index.html")


if __name__=="__main__":
    app.run(debug=True)