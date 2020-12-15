let express = require("express")
let ourApp = express()

ourApp.use(express.urlencoded({
    extended: false
}))
ourApp.get('/', function (req, res) {
    res.send(`
        <form action="/answer" method="POST">
        <p>What's your favorite food？</p>
        <input name="food" autocomplete="off">
        <button>Sent</button>
        </form>
        `)
})
ourApp.post('/answer', function (req, res) {
    res.send("Thanks for the answer")
})
ourApp.get('/answer', function (req, res) {
    res.send("Wrong way!")
})

ourApp.listen(3000)
