from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'shhh no secrets on GitHub'

# our index route will handle rendering our form
# ? RENDER / VIEW / DISPLAY ROUTE
@app.route('/')
def index():
    return render_template("form.html")

# ? FORM ACTION ROUTE
@app.route("/createNinjaDog", methods=['post'])
def create_ninja():
    print(f"\n=====\n{request.form}\n====\n")
    session['ninja_name'] = request.form['ninja_name']
    session['weapon'] = request.form['weapon']
    session['missions'] = request.form['missions']
    # ! NEVER EVER EVER EVER RENDER ON A POST!
    return redirect("/display")

@app.route("/display")
def display():
    # print(f" INSIDE DISPLAY ===>>> {session['ninja_name']}")
    return render_template("display.html")

# --------- reset session ------
# ! action route reset session
@app.route("/clear")
def reset():
    # session.pop("ninja_name")
    # del session['ninja_name']
    session.clear()
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True, port=5001)