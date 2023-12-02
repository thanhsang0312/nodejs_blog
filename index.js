const express = require('express') // require: import thư viện
const app = express() // function
const port = 3000 //định nghĩa cổng run

app.get('/trang-chu', (req, res) => { //get: định nghĩa route, tuyến đường
    res.send('Hello World!')
})

//127.0.0.1 -> local host

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})