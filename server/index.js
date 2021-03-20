const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")
const path = require("path")
const app = express()
let flag = true
const todomvc = "list"

const from = path.resolve(__dirname, "../public/data.json")
const to = path.resolve(__dirname, "../public/test.json")

// const rs = fs.createReadStream(from)
// const ws = fs.createWriteStream(to)

// rs.pipe(ws)


/* app.get("/news/:id", (req, res) => {
    console.log(req.headers)

    res.status(302).header("location", "https://www.taobao.com").end();
    res.status(302).location("https://www.taobao.com").end();
    res.redirect(302, "https://www.taobao.com")
});

 */

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get("/todolist", async (req, res) => {
    // const list = req.body.list
    res.setHeader("Access-Control-Allow-Origin", "*")
    const content = await fs.promises.readFile(to)
    console.log(1)
    res.send(content)
})

app.post("/todolist", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    //写入文件...
    // fs.rmdir(to)
    await fs.promises.writeFile(to, req.body[todomvc])
    console.log(2)
    // ws.write(req.body[todomvc])
    // ws.on("drain", () => {

    // })

    result = JSON.parse(req.body[todomvc])
    console.log(result)
    res.send()



})

const port = 5008;

app.listen(port, () => {
    console.log(`server listen on ${port}`)
})