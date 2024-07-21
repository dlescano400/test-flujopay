from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.get('/list_facturas')
def login_get():
    return [
      {
        "username": "Daniel",
        "theme": "Test",
        "image": "user_image"
    },
    {
        "username": "Daniel",
        "theme": "Test",
        "image": "user_image"
    },
    {
        "username": "Daniel",
        "theme": "Test",
        "image": "user_image"
    },
    {
        "username": "Daniel",
        "theme": "Test",
        "image": "user_image"
    }
    ]


#@app.post('/add_factura')
#def login_post():
#    return do_the_login()